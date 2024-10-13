import{c as P,i as x,k as _,l as L,t as h,j as N,o as I,e as y,p as j,f as k,b as R,d as F,a as C,s as H,q as O,r as q,u as V}from"./index-xEgvAsQz.js";var Z=h("<section>");const ue=e=>{const n=P(()=>e.children);return(()=>{var t=Z();return x(t,n),_(()=>L(t,`max-w-screen-lg w-full m-auto flex-1 px-5 py-6 ${e.class||null} h-80`)),t})()};var D=h('<div class="relative flex-1">'),G=h('<div class="absolute drop-shadow-xl py-5 rounded-md bg-white left-0 right-0 top-full mt-4 z-20">'),J=h("<div>");const Q=e=>{const n=I(),[t,l]=y(-1),a=j(),s=d=>{const m=e?.options?.length||0;return l(d<0?-1:d>m-1?m-1:d),e.options?.[d]};e.ref&&e.ref({selectedItem:s,selectedPreItem(){return s(t()-1)},selectedNextItem(){return s(t()+1)}}),k(()=>{e.options,a.pathname,s(-1)});const i=P(()=>e.children);return(()=>{var d=D();return x(d,i,null),x(d,(()=>{var m=R(()=>!!(e.visible&&e.options?.length));return()=>m()?(()=>{var u=G();return x(u,()=>e.options?.map?.((c,g)=>(()=>{var v=J();return v.$$click=()=>{const b=location.pathname.split("/")[1];n(`${b==="dict"?"/dict/":"/word/"}${c.name}`),e.onChange?.(c.name)},x(v,()=>c.name),_(()=>L(v,`text-xl text-black px-5 ${t()===g?"text-red-500":null} hover:text-red-500 leading-10 cursor-pointer ${c.type?null:"text-blue-600"}`)),v})())),u})():null})(),null),d})()};N(["click"]);const X=({delay:e},n)=>{let t,l=!0;const a=(...s)=>{l?(clearTimeout(t),t=setTimeout(()=>{l&&n(...s),t=void 0},e)):n(...s)};return a.isPending=()=>t!==void 0,a.cancel=()=>{l=!1},a.flush=(...s)=>n(...s),a};var $=(e=>(e[e.ENTER=13]="ENTER",e[e.UP=38]="UP",e[e.DOWN=40]="DOWN",e))($||{});const A=(e,n)=>{const t=l=>{l.target;const a=l.which||l.keyCode;e.includes(a)&&n&&n(a)};return[()=>{window.addEventListener("keydown",t)},()=>{window.removeEventListener("keydown",t)}]};var B=h('<div class="flex items-center flex-1 rounded-xl border-2 border-gray-200 bg-gray-200 hover:bg-white relative"><input role=search class="rounded-xl pr-14 py-4 px-5 flex-1 h-13 bg-transparent text-xl font-mono font-medium outline-none hover:outline outline-offset-4 focus:outline-4 hover:outline-4 hover:outline-red-600 focus:outline-red-600 focus:outline-offset-8 transition-all focus:bg-white"><svg class="cursor-pointer size-6 absolute right-5 font-bold"xmlns=http://www.w3.org/2000/svg fill=none viewBox="0 0 24 24"stroke-width=2 stroke=currentColor><path stroke-linecap=round stroke-linejoin=round d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z">');const K=e=>{const[n,t]=y(!1),[l,a]=y([]),[s,i]=y(""),d=F(),m=I();let u=null,c=null;const g=()=>{setTimeout(()=>{const r=c.value.length;c.setSelectionRange(r,r)},0)},[v,b]=A([$.UP,$.DOWN],r=>{if(n()){if(r===$.UP){const{name:o}=u.selectedPreItem()||{};o&&i(o),g()}if(r===$.DOWN){const{name:o}=u.selectedNextItem()||{};o&&i(o),g()}}}),E=r=>{if(!r.trim())return;(window.location.pathname.split("/")[1]==="dict"?O:q)(r.trim()).then(({data:p})=>{const f=p.map(w=>w.name).indexOf(r);if(f!=-1){const w=p.splice(f,1)[0];a([w].concat(p))}else a(l().concat(p))})},M=X({delay:500},r=>{E(r)}),W=r=>{i(r.value);const o=s()?.trim?.();a([{name:o,value:o,type:"manual"}].filter(({name:p})=>!!p)),o&&M(o)};return k(()=>{const r=decodeURIComponent(d.word?.trim?.()||"");i(r)}),k(()=>{b(),n()&&v()}),e.ref&&e.ref({setValue(r){i(r)}}),C(Q,{get visible(){return n()},get options(){return l()},ref(r){var o=u;typeof o=="function"?o(r):u=r},get children(){var r=B(),o=r.firstChild,p=o.nextSibling;o.addEventListener("keypress",f=>{const w=f.target;if((f.which||f.keyCode)===13){const z=w.value?.trim?.(),U=location.pathname.split("/")[1];m(`${U==="dict"?"/dict/":"/word/"}${encodeURIComponent(z)}`),c?.blur?.()}}),o.$$input=f=>{W(f.target)},o.addEventListener("blur",()=>{setTimeout(()=>{t(!1)},100)}),o.addEventListener("focus",()=>{t(!0)});var S=c;return typeof S=="function"?V(S,o):c=o,p.$$click=()=>{console.log(s()),s().trim()&&E(s().trim())},_(()=>H(o,"placeholder",n()?"搜索":"Search")),_(()=>o.value=s()),r}})},ve=K;N(["input","click"]);var Y=h("<div>");const ee=e=>{const n=P(()=>e.children);return(()=>{var t=Y();return x(t,n),_(()=>L(t,`border border-slate-300 shadow-sm rounded-xl p-5 sm:p-10 font-mono mb-10 mt-10 hover:shadow-lg transition-shadow ${e.class}`)),t})()},te=(e,n)=>{const t=[];let l=e.indexOf(n);for(;l>-1;)t.push(l),l=e.indexOf(n,l+1);return t},T={link:"hover:scale-110 inline-block transition-all text-red-800 cursor-pointer font-bold",baseline:"inline-block underline decoration-dashed decoration-red-800"},ne=(e="link",n,t)=>`<a class="${T[e]}" href="${t}">${n}</a>`,he=(e,n)=>{k(()=>{const{url_map:t,targets:l,style:a}=n();l?.forEach?.(s=>{let i=e.innerHTML,d=te(i,s);if(!i.includes(s))return;const m=t[s];d.forEach(u=>{const c=i[u-1],g=i[u+s.length],v=T[a||"link"];if(!c?.toLowerCase().match(/[a-z]|[-=/><]/)&&!g?.toLowerCase().match(/[a-z]|[-=/><]/)&&c!=="{"&&g!=="}"&&!v.includes(s)&&!v.includes(s)){const b=ne(a,s,m);i=i.substring(0,u)+b+i.substring(u+s.length)}}),e.innerHTML=i})})};var se=h('<div class="animate-pulse flex space-x-4"><div class="flex-1 space-y-6 py-1"><div class="h-2 bg-slate-700 rounded"></div><div class=space-y-3><div class="grid grid-cols-3 gap-4"><div class="h-2 bg-slate-700 rounded col-span-1"></div><div class="h-2 bg-slate-700 rounded col-span-2"></div></div><div class="h-2 bg-slate-700 rounded"></div></div><div class=space-y-3><div class="h-2 bg-slate-700 rounded"></div><div class="grid grid-cols-3 gap-4"><div class="h-2 bg-slate-700 rounded col-span-2"></div><div class="h-2 bg-slate-700 rounded col-span-1"></div></div></div><div class=space-y-3><div class="grid grid-cols-3 gap-4"><div class="h-2 bg-slate-700 rounded col-span-1"></div><div class="h-2 bg-slate-700 rounded col-span-2"></div></div><div class="h-2 bg-slate-700 rounded"></div></div><div class=space-y-3><div class="h-2 bg-slate-700 rounded"></div><div class="grid grid-cols-3 gap-4"><div class="h-2 bg-slate-700 rounded col-span-2"></div><div class="h-2 bg-slate-700 rounded col-span-1">');const oe=()=>C(ee,{get children(){return se()}}),me=oe;var re=h('<div class="flex-1 font-mono animate-bounce font-extrabold text-black text-center flex items-center justify-center text-5xl">404');const le=()=>(()=>{var e=re();return e.style.setProperty("text-shadow","1px 10px 10px gray"),e.style.setProperty("animation","bounce 2s infinite"),e})();var ae=h('<div class="flex-1 font-mono animate-bounce font-extrabold text-black text-center flex flex-col items-center justify-center text-2xl"><div>刷新重试（500）</div><button class="rounded-2xl outline-none border-black shadow-lg border-2 shadow-slate-300 mt-8 bg-white text-black py-3 px-5 text-2xl"><svg xmlns=http://www.w3.org/2000/svg fill=none viewBox="0 0 24 24"stroke-width=2 stroke=currentColor class=size-6><path stroke-linecap=round stroke-linejoin=round d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99">');const ie=()=>(()=>{var e=ae(),n=e.firstChild,t=n.nextSibling;return e.style.setProperty("text-shadow","1px 10px 10px gray"),e.style.setProperty("animation","bounce 2s infinite"),t.$$click=()=>{window.location.reload()},e})();N(["click"]);const ce=e=>({400:C(le,{}),500:C(ie,{})})[e.code],pe=ce;export{ee as C,ve as S,he as a,pe as b,me as c,ue as d};
