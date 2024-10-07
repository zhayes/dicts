import { type Component } from "solid-js";

const ServerError:Component = () => {
  return <div
    style={{"text-shadow": "1px 10px 10px gray", "animation": "bounce 2s infinite"}}
    class="flex-1 font-mono animate-bounce font-extrabold text-black text-center flex flex-col items-center justify-center text-2xl"
  >
    <div>刷新重试（500）</div>

    <button class="rounded-2xl outline-none border-black shadow-lg border-2 shadow-slate-300 mt-8 bg-white text-black py-3 px-5 text-2xl" onClick={() => {
      window.location.reload();
    }}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    </button>
  </div>
}

export default ServerError
