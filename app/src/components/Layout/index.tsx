import { type Component, type JSX, children } from 'solid-js';
import Header from './Header';
import Container from './Container';

const Layout: Component<{
  children?: JSX.Element
}> = (props) => {
  const resolve_children = children(() => props.children)
  return (
    <div class='flex flex-col min-h-lvh bg-gray-50'>
      { resolve_children() }
    </div>
  )
}


export {
  Header,
  Container
};

export default Layout;
