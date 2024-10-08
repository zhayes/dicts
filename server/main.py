import json
from os import name
from typing import List,Optional
from fastapi import Depends, FastAPI, Request, Form, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy import func
from pydantic import BaseModel
from database import SessionLocal, engine
from pprint import pprint
import models
import httpx
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.responses import RedirectResponse
from analyze_word import analyze_word
from analyze_longman import analyze_longman_page, longman_headers
from youdao import translate

models.Base.metadata.create_all(bind=engine)

print(models.Base)

app = FastAPI()


# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()



app.mount("/assets", StaticFiles(directory="../app/dist/assets"), name="assets")


async def loop_redirect(response, word:str):
    async with httpx.AsyncClient() as client:
        if response.is_redirect:
            redirect_url = response.headers.get("Location")
            new_response = await client.get("https://www.ldoceonline.com"+redirect_url, headers= longman_headers)

            return await loop_redirect(new_response, word)
        else:
            return response


@app.middleware("http")
async def redirect_to_static(request: Request, call_next):
    # 检查请求路径是否不以 /api/ 开头
    print(request.url)
    if not request.url.path.startswith("/api/") and not request.url.path.startswith("/assets/"):
        with open("../app/dist/index.html", "r", encoding="utf-8") as file:
            content = file.read()
        return HTMLResponse(content)

    # 否则继续处理请求
    response = await call_next(request)
    return response



# 查询单词释义内容
@app.get("/api/word/{word}")
def get_word(word: str, db: Session = Depends(get_db)):
    content = db.query(models.Article).filter(func.lower(models.Article.word)==word.lower()).first()
    return content


#搜索存在词汇
@app.get("/api/search/{word}")
def search_word(word: str, db: Session = Depends(get_db)):
    items = db.query(models.Word).filter(models.Word.name.ilike(f"%{word}%")).limit(10).all()

    return {"data": items}



#保存词汇内容
class WordContent(BaseModel):
    title: str
    descs: List[str]
    a_tag: List[str]

class WordDescription(BaseModel):
    results: List[WordContent]
    all_link_words: List[str]
    near_words: List[str]
    extend_words: List[str]

class WordData(BaseModel):
    name: str
    description: WordDescription


def save_handle(data: WordData, db: Session = Depends(get_db)):
    # 检查 word.name 是否已存在
    existing_word = db.query(models.Word).filter(models.Word.name == data.name).first()

    if not existing_word:
        # 如果已存在，可以选择抛出异常或返回一个状态
        #raise HTTPException(status_code=400, detail="Word already exists")

        db_word = models.Word(name=data.name)
        db.add(db_word)
        db.commit()
        db.refresh(db_word)

        db_article = models.Article(word=data.name, description= json.dumps(data.description.dict(), ensure_ascii=False))
        db.add(db_article)
        db.commit()
        db.refresh(db_article)



@app.post("/api/word")
def save_word(data: WordData, db: Session = Depends(get_db)):
    save_handle(data, db)
    return {
        data: "保存成功"
    }




#远程更新词汇
@app.post("/api/update/{word}")
async def fetch_word(word: str, db: Session = Depends(get_db)):
    async with httpx.AsyncClient() as client:
        response = await client.get("https://www.etymonline.com/cn/word/" + word.strip())

        if response.is_redirect:
            redirect_url = response.headers.get("Location")
            if redirect_url:
                response = await client.get(redirect_url)

        try:
            word_text = analyze_word(response.text)

            if len(json.loads(word_text).get("results")):
                word_data = WordData(name=word, description=WordDescription(**json.loads(word_text)))
                save_handle(word_data, db)

                return {
                    "word": word,
                    "description": word_text
                }
            else:
                return {
                    "message": "未查到数据"
                }


        except Exception as e:
            print(e)

            return {
                "message": "内部错误",
                "data": e
            }



#查询现当代单词
#搜索存在词汇
@app.get("/api/dictionary/{word}")
def search_voabulary(word: str, db: Session = Depends(get_db)):
    items = db.query(models.Vocabulary).filter(func.lower(models.Vocabulary.word)==word.lower()).first()

    return {"data": items}



#搜索存在词汇
@app.post("/api/dictionary/search/{word}")
def search_dicts(word: str, db: Session = Depends(get_db)):
    items = db.query(models.Vocabulary).filter(models.Vocabulary.word.ilike(f"%{word}%")).limit(10).all()

    return {"data": [{"name": item.word} for item in items ]}


#远程更新词汇
class DictData(BaseModel):
    word: str
    data: str


@app.post("/api/update/dictionary/{word}")
async def update_dictonary(word: str, db: Session = Depends(get_db)):
    async with httpx.AsyncClient() as client:
        response = await client.get("https://www.ldoceonline.com/dictionary/" + word.strip(), headers = longman_headers)
        response = await loop_redirect(response, word)

        try:
            word_text = analyze_longman_page(response)

            if len(json.loads(word_text).get("dicts")):
                dict_data = DictData(word=word, data=word_text)

                existing_word = db.query(models.Word).filter(models.Word.name == word).first()

                if not existing_word:
                    pass
                    #raise HTTPException(status_code=400, detail="Word already exists")

                    db_word = models.Word(name=word)
                    db.add(db_word)
                    db.commit()
                    db.refresh(db_word)


                db_vocabulary = models.Vocabulary(word=word, data= dict_data.data)

                db.add(db_vocabulary)
                db.commit()
                db.refresh(db_vocabulary)

                return dict_data
            else:
                return {
                    "message": "未查到数据"
                }


        except Exception as e:
            print(e)

            return {
                "message": "内部错误",
                "data": e
            }




#搜索存在词汇
@app.post("/api/translate/{word}")
async def youdao_translate(word: str):

    result = translate(word)

    return {"data": result}
