import json
from bs4 import BeautifulSoup


longman_headers = {
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "Accept-Encoding": "gzip, deflate, br, zstd",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "DNT": "1",
    "Host": "www.ldoceonline.com",
    "Pragma": "no-cache",
    "Referer": "https://www.ldoceonline.com/",
    "Sec-Fetch-Dest": "document",
    "Sec-Fetch-Mode": "navigate",
    "Sec-Fetch-Site": "same-origin",
    "Sec-Fetch-User": "?1",
    "Upgrade-Insecure-Requests": "1",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36",
    "sec-ch-ua": "\"Google Chrome\";v=\"129\", \"Not=A?Brand\";v=\"8\", \"Chromium\";v=\"129\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\""
}

def analyze_longman_page(response):
    dicts_content = []
    word_family = []
    all_a = []
    pagetitle = None

    if response.status_code == 200:
        # 解析网页内容
        soup = BeautifulSoup(response.content, 'html.parser')

        pagetitle = soup.select_one(".pagetitle").get_text().strip() if soup.select_one(".pagetitle") else None

        #相近词汇
        if soup.select(".wordfams .crossRef"):
            for w_f in soup.select(".wordfams .crossRef"):
                word_family.append(w_f.get_text())


        # 示例：获取所有标题为<h1>的内容
        dictions = soup.select('.dictentry')

        for dict in dictions:
            one_dict = {
                "word": dict.select_one('.dictlink .ldoceEntry .Head .HYPHENATION').get_text() if dict.select_one('.dictlink .ldoceEntry .Head .HYPHENATION') else None
            };




            #语库例句：
            corpus = dict.select('.assetlink .exaGroup') if dict.select('.assetlink .exaGroup') else None
            # print("corpus", corpus)
            if corpus:
                one_dict["corpus_list"] = []
                for corpus_item in corpus:
                    corpus_title = corpus_item.select_one('.title')

                    corpus_obj = {
                        "corpus_title": corpus_title.get_text() if corpus_title else None,
                        "corpus_exas": [],
                        "a": []
                    }

                    corpus_exas = corpus_item.select('.exa')

                    for exas in corpus_exas:
                        corpus_obj["corpus_exas"].append(exas.get_text())

                        a_list = exas.select(".defRef")

                        for a in a_list:
                            if a.get("href").startswith("/dictionary/"):
                                corpus_obj["a"].append([a.get_text(), a.get("href").split("/")[-1]])
                                all_a.append([a.get_text(), a.get("href").split("/")[-1]])


                    one_dict["corpus_list"].append(corpus_obj)



            title = dict.select_one('.dictlink .ldoceEntry .Head')
            # print(title)

            #音标
            if title and title.select_one('.PronCodes'):
                PronCodes = title.select_one('.PronCodes').get_text();
                # print("音标：", PronCodes)
                one_dict["PronCodes"] = PronCodes;

            #词性
            if title and title.select_one('.POS'):
                POS = title.select_one('.POS').get_text();
                #print("词性：", POS)
                one_dict["POS"] = POS;

            #音频
            if title and len(title.select('span[data-src-mp3]')):
                mp3_list = title.select('span[data-src-mp3]')
                one_dict["word_audio"] = []
                for mp3 in mp3_list:
                    audio_src = mp3.get('data-src-mp3')
                    # print("发音资源：", audio_src)
                    one_dict["word_audio"].append(audio_src);


            #具体词意列表
            if len(dict.select('.Sense')):
                one_dict["examples"] = []
                for sense in dict.select('.Sense'):
                    example_item = {}
                    #提示词
                    SIGNPOST = sense.select_one('.SIGNPOST').get_text() if sense.select_one('.SIGNPOST') else None
                    if SIGNPOST:
                        # print("提示词：", SIGNPOST)
                        example_item["main_example_means"] = SIGNPOST

                    #是否可数
                    GRAM = sense.select_one('.GRAM').get_text() if sense.select_one('.GRAM') else None
                    if GRAM:
                        # print("是否可数", GRAM)
                        example_item["is_countable"] = GRAM



                    #释义
                    DEF = sense.select_one('.DEF').get_text() if sense.select_one('.DEF') else None
                    if DEF:
                        # print("释义", DEF)
                        example_item["definition"] = DEF
                        example_item["a"] = []

                        def_a = sense.select('.DEF .defRef')
                        for a in def_a:
                            if a.get("href").startswith("/dictionary/"):
                                example_item["a"].append([a.get_text(), a.get("href").split("/")[-1]])
                                all_a.append([a.get_text(), a.get("href").split("/")[-1]])


                    SYN = sense.select_one('.SYN').get_text() if sense.select_one('.SYN') else None
                    if SYN:
                        try:
                            example_item["SYN"] = SYN.split("SYN")[1].strip() if SYN.split("SYN")[1] else None
                        except Exception as e:
                            pass

                    #例句
                    # 获取类名DEF同层级的后面所有span标签

                    # sub_scene = [];

                    # if len(sense.select('.Subsense')):
                    #     sub_scene




                    next_sibling = sense.select_one('.DEF')
                    example_item["example_list"] = []
                    if next_sibling:
                        next_sibling = next_sibling.find_next_sibling('span')
                        while next_sibling:
                            example_list_item = {};
                            class_name = next_sibling['class']


                            #ColloExa
                            if class_name == ['ColloExa']:
                                #例句主题：
                                PROPFORM = next_sibling.select_one('.COLLO').get_text() if next_sibling.select_one('.COLLO') else None
                                # print("例句主题：", PROPFORM)
                                example_list_item["example_main_title"] = PROPFORM
                                #例句
                                EXAMPLES = next_sibling.select('.EXAMPLE')
                                example_list_item["exp_item"] = []
                                for example in EXAMPLES:
                                    #例句音频
                                    mp3_src = next_sibling.select_one('span[data-src-mp3]').get('data-src-mp3') if next_sibling.select_one('span[data-src-mp3]') else None
                                    #例句
                                    example_txt = example.get_text() if example else None
                                    # print("例句：", example_txt, "音频：",mp3_src)
                                    example_list_item["exp_item"].append({
                                        "audio_src": mp3_src,
                                        "content": example_txt
                                    })


                            if class_name == ['GramExa']:
                                #例句主题：
                                PROPFORM = next_sibling.select_one('.PROPFORM').get_text() if next_sibling.select_one('.PROPFORM') else None
                                PROPFORMPREP = next_sibling.select_one('.PROPFORMPREP').get_text() if next_sibling.select_one('.PROPFORMPREP') else None

                                # print("例句主题：", PROPFORM)
                                example_list_item["example_main_title"] = PROPFORM if PROPFORM else PROPFORMPREP
                                #例句
                                EXAMPLES = next_sibling.select('.EXAMPLE')
                                example_list_item["exp_item"] = []
                                for example in EXAMPLES:
                                    #例句音频
                                    mp3_src = example.select_one('span[data-src-mp3]').get('data-src-mp3') if example.select_one('span[data-src-mp3]') else None
                                    #例句
                                    example_txt = example.get_text() if example else None
                                    # print("例句：", example_txt, "音频：",mp3_src)
                                    example_list_item["exp_item"].append({
                                        "audio_src": mp3_src,
                                        "content": example_txt
                                    })

                            if class_name == ['EXAMPLE']:
                                #例句音频
                                mp3_src = next_sibling.select_one('span[data-src-mp3]').get('data-src-mp3') if next_sibling.select_one('span[data-src-mp3]')  else None
                                #例句
                                example_txt = next_sibling.get_text() if next_sibling else None
                                # print("例句：", example_txt, "音频：",mp3_src)
                                example_list_item["audio_src"] = mp3_src
                                example_list_item["content"] = example_txt


                            example_item["example_list"].append(example_list_item)
                            next_sibling = next_sibling.find_next_sibling('span')

                    one_dict["examples"].append(example_item)
            dicts_content.append(one_dict)

    return {"word": pagetitle, "data": json.dumps({"word_family": word_family, "dicts": dicts_content}, ensure_ascii=False, indent=4)}
