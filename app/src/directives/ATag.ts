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

const style_map:any = {
  "link": `hover:scale-110 inline-block transition-all text-red-800 cursor-pointer font-bold`,
  "baseline": `inline-block underline decoration-dashed decoration-red-800`
}

const get_a_tag = (style:'link'|'baseline' = 'link', txt:string, href:string):string => {
  const class_str = style_map[style]

  return `<a class="${class_str}" href="${href}">${txt}</a>`;
}


export default (el: HTMLElement, accessor: () => any) => {

  createEffect(() => {
    const { url_map, targets, style } = accessor() ;

    targets?.forEach?.((txt:string) => {
      let inner_html = el.innerHTML;
      let index_list = get_all_index(inner_html, txt);

      if (!inner_html.includes(txt)) return;

      const href = url_map[txt];

      index_list.forEach((i) => {
        const p_s = inner_html[i - 1];
        const n_s = inner_html[i + txt.length];

        //标记屏蔽一些关键字符(- / < >) 防止与标签属性上的字符冲突
        const class_str: string = style_map[style || 'link'];
        if (
          !p_s?.toLowerCase().match(/[a-z]|[-=/><]/) &&
          !n_s?.toLowerCase().match(/[a-z]|[-=/><]/) &&
          (p_s!=='{' && n_s!=='}')
          &&
          !class_str.includes(txt)
          &&
          !class_str.includes(txt)
        ) {
          const a = get_a_tag(style, txt, href);
          inner_html = inner_html.substring(0, i) + a + inner_html.substring(i+txt.length)
        }
      })

      el.innerHTML = inner_html;

    })
  })

}
