import { type Component, type JSX, children } from 'solid-js'

export type HeaderProps = {
  children?: JSX.Element
}

const Header: Component<HeaderProps> = (props) => {
  const resolve_children = children(() => props.children)

  return <nav
    class={`shadow-gray-500 shadow-md h-80 rounded-none px-5 py-8 flex items-center bg-black sticky -top-48 z-10`}
  >
    { resolve_children() }
  </nav>
}

export default Header
