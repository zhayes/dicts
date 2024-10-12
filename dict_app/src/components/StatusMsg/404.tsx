import { type Component } from "solid-js";

const NotFound:Component = () => {
  return <div
    style={{"text-shadow": "1px 10px 10px gray", "animation": "bounce 2s infinite"}}
      class="flex-1 font-mono animate-bounce font-extrabold text-black text-center flex items-center justify-center text-5xl"
  >
    404
  </div>
}

export default NotFound
