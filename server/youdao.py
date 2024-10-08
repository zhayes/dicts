import requests
from bs4 import BeautifulSoup

def get_url(word:str):
    return f"https://www.youdao.com/result?word={word}&lang=en"


def translate(txt:str):
    url = get_url(txt)

    print(url)

    response = requests.get(url)

    if response.status_code==200:
        soup = BeautifulSoup(response.content, 'html.parser')
        txt = soup.find("p", class_="trans-content").get_text() if soup.find("p", class_="trans-content") else None
        return txt
