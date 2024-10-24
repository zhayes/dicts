import {translate} from '@/api'
import { debounce } from '@/utils/radash'


const getSelectedDOM =  ():Node | null=> {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
        return selection.getRangeAt(0).endContainer;
    }
    return null;
}


const findFirstLevelDom = (nodes:NodeList, node:Node) => {
  return Array.from(nodes).filter((item) => {
    return node === item;
  })[0]
}

const getParentBlockDom = (dom:Node):Element => {
  if (
    dom.parentNode?.nodeType===1&&
    findFirstLevelDom(dom.parentNode?.childNodes!, dom)
  ) {
    const display = window.getComputedStyle(dom.parentNode as Element).display;
    if (display === 'block' || display === 'flex') {
      return dom.parentElement!;
    }
  }

  return getParentBlockDom(dom.parentNode as Node);
}



export const setup_translate = () => {

  document.addEventListener('selectionchange', debounce({ delay: 500 }, async() => {
    const selection = window.getSelection();
    const selected_str = selection?.toString().trim();
    if(selected_str){
        const dom = getSelectedDOM();
        if(!dom) return;
        const parent_dom = getParentBlockDom(dom);

        const old_dom = parent_dom.querySelector('[data-dy-translate="true"]');
        old_dom && parent_dom.removeChild(old_dom!)

        const {data} = await translate(selected_str)

        const new_div = document.createElement("div")
        new_div.setAttribute("data-dy-translate", "true")
        parent_dom.appendChild(new_div)

        const node = document.createTextNode(data ? data+' [仅供参考]' : '[翻译出错了]')

        new_div.appendChild(node)
    }
  }))

}
