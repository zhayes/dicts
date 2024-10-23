import { type Component, children, type JSX, createSignal, createEffect } from "solid-js";
import { useNavigate, useLocation } from '@solidjs/router';


const Dropdown: Component<{
  children?: JSX.Element,
  options?: {name?:string, value?:any, type?:string}[]
  visible?: boolean,
  onChange?: (s?:string)=>void
  ref?: any
}> = (props) => {
  const navigate = useNavigate();
  const [selectedWordIndex, setSelectedWordIndex] = createSignal(-1);
  const loaction = useLocation();

  const selectedItem = (index:number) =>{
    const i = props?.options?.length || 0;
    setSelectedWordIndex(index<0? -1 : (index > i-1 ? i-1 : index));
    return props.options?.[index];
  }

  props.ref && props.ref({
    selectedItem,
    selectedPreItem(){
      return selectedItem(selectedWordIndex()-1);
    },
    selectedNextItem(){
      return selectedItem(selectedWordIndex()+1);
    }
  })

  createEffect(() => {
    const _ = props.options;
    const __ = loaction.pathname;
    selectedItem(-1);
  })

  const resolve_children = children(()=>props.children);

  return <div class="relative flex-1">
    { resolve_children() }

    {
      props.visible && props.options?.length ? <div class="absolute drop-shadow-xl py-5 rounded-md bg-white left-0 right-0 top-full mt-4 z-20">
        {
          props.options?.map?.((item, i) => {
            const is_dict = location.pathname.split("/")[1]

            return <div class={`flex justify-between items-center text-xl text-black px-5 ${selectedWordIndex()===i ? 'text-red-500':null} hover:text-red-500 leading-10 cursor-pointer ${!item.type ? 'text-blue-600' : null}`}
              onClick={() => {
                navigate(`${is_dict==='dict' ? '/dict/' : '/word/'}${item.name}`)
                props.onChange?.(item.name)
              }}
            >
              { item.name }

              {
                i===0?
                <button class={`${is_dict ? 'bg-black' : 'bg-red-700'} inline-flex items-center text-white py-1 px-2 text-xs rounded-md border-b-2 border-gray-400`}
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`${is_dict==='dict' ? '/word/' : '/dict/'}${item.name}`)
                  }}
                >
                  {is_dict==='dict' ? '辞源搜索' : '词意查询'}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </button> : null
              }
            </div>
          })
        }
      </div> : null
    }
  </div>
}


export default Dropdown
