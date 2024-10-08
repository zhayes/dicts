from googletrans import Translator


def translate_text(text, dest='en'):

    translator = Translator()


    translation = translator.translate(text, dest)


    return translation.text



def detect_language(text):
    translator = Translator()


    detection = translator.detect(text)


    return detection.lang


target_lan = {
    "en": "zh-CN",
    "zh-CN": "en"
}


text = input("请输入你要翻译的文本: ")


lan = detect_language(text)
result = translate_text(text, target_lan[lan])

print(result)