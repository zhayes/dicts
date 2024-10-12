import json
from bs4 import BeautifulSoup

def analyze_word(content:str):
    # 解析网页内容
    soup = BeautifulSoup(content, 'html.parser')

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
