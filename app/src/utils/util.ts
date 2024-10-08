import {translate} from '@/api'


function getSelectedDOM(): Node | null {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
        return selection.getRangeAt(0).endContainer;
    }
    return null;
}


export const setup_translate = () => {
    document.addEventListener('mouseup', async () => {
        const selection = window.getSelection();
        const selected_str = selection?.toString().trim();
        if(selected_str){
            const {data} = await translate(selected_str)
            const dom = getSelectedDOM();

            if(!dom) return;

            const old_dom = dom?.parentElement?.querySelector('[data-dy-translate="true"]');
            old_dom && dom?.parentElement?.removeChild(old_dom!)

            const node = document.createTextNode(data ? data+' [仅供参考]' : '[翻译出错了,请输入完整句子]')
            const div = document.createElement("div")
            div.setAttribute("data-dy-translate", "true")
            div.appendChild(node)
            dom?.parentElement?.appendChild(div)
        }
    });

}
