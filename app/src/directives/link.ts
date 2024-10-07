import { createEffect } from 'solid-js'

const get_all_index = (str:string, target_str:string):number[] => {
  const index:number[] = [];

  let i = str.indexOf(target_str);

  while (i > -1) {
    index.push(i);
    i = str.indexOf(target_str, i + 1);
  }

  return index
}


function replacePlaceholders(text:string) {
  // 使用正则表达式匹配成对的花括号
  const pattern = /(\{{1,})(.*?)(\}{1,})/g;

  return text.replace(pattern, (match, openingBraces, content, closingBraces) => {
      // 确保开头和结尾的花括号数量相同且为偶数
      if (openingBraces.length === closingBraces.length) {
          return `<a class="hover:scale-110 inline-block transition-all text-red-800 cursor-pointer font-bold" href="/word/${content}">${content}</a>`;
      }
      return match;  // 不匹配的保持原样
  });
}


export default (el: HTMLElement, accessor: () => any) => {

  createEffect(() => {
    const target_strs = accessor() ;

    target_strs.forEach((txt:string) => {
      let inner_html = el.innerHTML;
      let index_list = get_all_index(el.innerHTML, txt);

      if (!inner_html.includes(txt)) return;

      index_list.forEach((i) => {
        const p_s = inner_html[i - 1];
        const n_s = inner_html[i + txt.length];



        if (!p_s?.toLowerCase().match(/[a-z]/) && !n_s?.toLowerCase().match(/[a-z]/) && (p_s!=='{' && n_s!=='}')) {
          const a = `{${txt}}`;//占位符
          inner_html = inner_html.substring(0, i) + a + inner_html.substring(i+txt.length)
        }
      })


      el.innerHTML = inner_html;


    })
    el.innerHTML = replacePlaceholders(el.innerHTML);
  })

}
