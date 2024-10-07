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
            return <div class={`text-xl text-black px-5 ${selectedWordIndex()===i ? 'text-red-500':null} hover:text-red-500 leading-10 cursor-pointer ${!item.type ? 'text-blue-600' : null}`}
              onClick={() => {
                navigate(`${location.href.includes('/dictionary/') ? '/dictionary/' : '/word/'}${item.name}`)
                props.onChange?.(item.name)
              }}
            >
              { item.name }
            </div>
          })
        }
      </div> : null
    }
  </div>
}


export default Dropdown
