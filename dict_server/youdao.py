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
        trans_txt = soup.find("span", class_="trans").get_text() if soup.find("span", class_="trans") else None
        pos = soup.find("span", class_="pos").get_text() if soup.find("span", class_="pos") else None
        return txt or  (trans_txt if '{} {}'.format(pos or '', trans_txt) else None)
