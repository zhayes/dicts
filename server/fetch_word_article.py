import requests
from bs4 import BeautifulSoup
import json  # 添加json模块
import time  # 添加time模块

word_site_url = 'https://www.etymonline.com/cn/word/'
saved_words_list = []

def fetch_etymology_data(word):
    url = word_site_url + word

    try:
        # 发送HTTP请求获取网页内容
        response = requests.get(url)

        # 检查请求是否成功
        if response.status_code == 200:
            # 解析网页内容
            soup = BeautifulSoup(response.content, 'html.parser')

            # 示例：获取所有标题为<h1>的内容
            titles = soup.select('.space-y-2 section.prose-lg .-mb-4')
            desc = soup.select('.space-y-2 section.prose-lg section')
            near_words = soup.select('ul.space-y-2 li a')

            extend_words = []

            results = []

            for title, description in zip(titles, desc):
                a_tags = description.select('a')
                a_tag_list = []

                for link in a_tags:
                    a_tag_list.append(link.get_text())
                    extend_words.append(link.get_text())

                result = {
                    "title": title.get_text(),
                    "descs": [desc_line.get_text() for desc_line in description.find_all(recursive=False)],
                    "a_tag": a_tag_list,
                }
                results.append(result)  # 将结果添加到列表中

            link_word_name_list = soup.select('div.border-lightGray a.rounded-t-medium')




            # 返回结果
            output = {
                "results": results,
                "all_link_words": [w.get_text() for w in link_word_name_list],
                "near_words": [n.get_text() for n in near_words]
            }

            pure_link_words =  [w.get_text().split('(')[0] for w in link_word_name_list]

            output["extend_words"] = list(set(extend_words + pure_link_words + output.get('near_words')))

            return json.dumps(output, ensure_ascii=False, indent=4)  # 使用json返回结果

        else:
            print(f"\033[31m 请求失败，状态码: {response.status_code}")
            return f"请求失败，状态码: {response.status_code}"

    except Exception as e:
        print(f"\033[31m 爬取【{word}】出错了，5秒后重试", e)
        time.sleep(3)  # 等待3秒后重试
        return fetch_etymology_data(word)  # 递归调用函数重试
