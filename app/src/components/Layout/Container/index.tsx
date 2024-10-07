import { children, type Component, type JSX } from 'solid-js';

const Container: Component<{
  children?:JSX.Element,
  class?:String
}> = (props) => {
  const resolve_children = children(() => props.children)

  return <section class={`max-w-screen-lg w-full m-auto flex-1 px-5 py-6 ${props.class || null} h-80`}>
    { resolve_children() }
  </section>
}

export default Container;
