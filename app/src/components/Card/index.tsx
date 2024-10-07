import { type Component, type JSX, children } from "solid-js";


const Card: Component<{children?:JSX.Element, class?:string}> = (props) => {
  const resolve_children = children(() => props.children);

  return <div class={`border border-slate-300 shadow-sm rounded-xl p-5 sm:p-10 font-mono mb-10 mt-10 hover:shadow-lg transition-shadow ${props.class}`}>
    { resolve_children() }
  </div>
}


export default Card
