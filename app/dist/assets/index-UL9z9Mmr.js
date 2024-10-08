import{c as C,i as x,k as b,l as S,t as f,j as N,o as E,e as y,p as U,f as k,b as j,d as R,a as P,s as F,q as H,r as O,u as q}from"./index-yL99E4AV.js";var Z=f("<section>");const D=e=>{const n=C(()=>e.children);return(()=>{var t=Z();return x(t,n),b(()=>S(t,`max-w-screen-lg w-full m-auto flex-1 px-5 py-6 ${e.class||null} h-80`)),t})()},ce=D;var G=f('<div class="flex flex-col min-h-lvh bg-gray-50">');const J=e=>{const n=C(()=>e.children);return(()=>{var t=G();return x(t,n),t})()},de=J;var Q=f('<div class="relative flex-1">'),V=f('<div class="absolute drop-shadow-xl py-5 rounded-md bg-white left-0 right-0 top-full mt-4 z-20">'),X=f("<div>");const A=e=>{const n=E(),[t,s]=y(-1),a=U(),r=d=>{const u=e?.options?.length||0;return s(d<0?-1:d>u-1?u-1:d),e.options?.[d]};e.ref&&e.ref({selectedItem:r,selectedPreItem(){return r(t()-1)},selectedNextItem(){return r(t()+1)}}),k(()=>{e.options,a.pathname,r(-1)});const c=C(()=>e.children);return(()=>{var d=Q();return x(d,c,null),x(d,(()=>{var u=j(()=>!!(e.visible&&e.options?.length));return()=>u()?(()=>{var i=V();return x(i,()=>e.options?.map?.((m,g)=>(()=>{var h=X();return h.$$click=()=>{const _=location.pathname.split("/")[1];n(`${_==="dictionary"?"/dictionary/":"/word/"}${m.name}`),e.onChange?.(m.name)},x(h,()=>m.name),b(()=>S(h,`text-xl text-black px-5 ${t()===g?"text-red-500":null} hover:text-red-500 leading-10 cursor-pointer ${m.type?null:"text-blue-600"}`)),h})())),i})():null})(),null),d})()};N(["click"]);const B=({delay:e},n)=>{let t,s=!0;const a=(...r)=>{s?(clearTimeout(t),t=setTimeout(()=>{s&&n(...r),t=void 0},e)):n(...r)};return a.isPending=()=>t!==void 0,a.cancel=()=>{s=!1},a.flush=(...r)=>n(...r),a};var w=(e=>(e[e.ENTER=13]="ENTER",e[e.UP=38]="UP",e[e.DOWN=40]="DOWN",e))(w||{});const K=(e,n)=>{const t=s=>{s.target;const a=s.which||s.keyCode;e.includes(a)&&n&&n(a)};return[()=>{window.addEventListener("keydown",t)},()=>{window.removeEventListener("keydown",t)}]};var Y=f('<div class="flex items-center flex-1 rounded-xl border-2 border-gray-200 bg-gray-200 hover:bg-white relative"><input role=search class="rounded-xl pr-14 py-4 px-5 flex-1 h-13 bg-transparent text-xl font-mono font-medium outline-none hover:outline outline-offset-4 focus:outline-4 hover:outline-4 hover:outline-red-600 focus:outline-red-600 focus:outline-offset-8 transition-all focus:bg-white"><svg class="cursor-pointer size-6 absolute right-5 font-bold"xmlns=http://www.w3.org/2000/svg fill=none viewBox="0 0 24 24"stroke-width=2 stroke=currentColor><path stroke-linecap=round stroke-linejoin=round d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z">');const ee=()=>{const[e,n]=y(!1),[t,s]=y([]),[a,r]=y(""),c=R(),d=E();let u=null,i=null;const m=()=>{setTimeout(()=>{const l=i.value.length;i.setSelectionRange(l,l)},0)},[g,h]=K([w.UP,w.DOWN],l=>{if(e()){if(l===w.UP){const{name:o}=u.selectedPreItem()||{};o&&r(o),m()}if(l===w.DOWN){const{name:o}=u.selectedNextItem()||{};o&&r(o),m()}}}),_=l=>{if(!l.trim())return;(window.location.pathname.split("/")[1]==="dictionary"?H:O)(l.trim()).then(({data:v})=>{const p=v.map($=>$.name).indexOf(l);if(p!=-1){const $=v.splice(p,1)[0];s([$].concat(v))}else s(t().concat(v))})},T=B({delay:500},l=>{_(l)}),M=l=>{r(l.value);const o=a()?.trim?.();s([{name:o,value:o,type:"manual"}].filter(({name:v})=>!!v)),o&&T(o)};return k(()=>{const l=decodeURIComponent(c.word?.trim?.()||"");r(l)}),k(()=>{h(),e()&&g()}),P(A,{get visible(){return e()},get options(){return t()},ref(l){var o=u;typeof o=="function"?o(l):u=l},get children(){var l=Y(),o=l.firstChild,v=o.nextSibling;o.addEventListener("keypress",p=>{const $=p.target;if((p.which||p.keyCode)===13){const W=$.value?.trim?.(),z=location.pathname.split("/")[1];d(`${z==="dictionary"?"/dictionary/":"/word/"}${encodeURIComponent(W)}`),i?.blur?.()}}),o.$$input=p=>{M(p.target)},o.addEventListener("blur",()=>{setTimeout(()=>{n(!1)},100)}),o.addEventListener("focus",()=>{n(!0)});var L=i;return typeof L=="function"?q(L,o):i=o,v.$$click=()=>{console.log(a()),a().trim()&&_(a().trim())},b(()=>F(o,"placeholder",e()?"搜索":"Search")),b(()=>o.value=a()),l}})},ue=ee;N(["input","click"]);var te=f("<div>");const me=e=>{const n=C(()=>e.children);return(()=>{var t=te();return x(t,n),b(()=>S(t,`border border-slate-300 shadow-sm rounded-xl p-5 sm:p-10 font-mono mb-10 mt-10 hover:shadow-lg transition-shadow ${e.class}`)),t})()},ne=(e,n)=>{const t=[];let s=e.indexOf(n);for(;s>-1;)t.push(s),s=e.indexOf(n,s+1);return t},I={link:"hover:scale-110 inline-block transition-all text-red-800 cursor-pointer font-bold",baseline:"inline-block underline decoration-dashed decoration-red-800"},oe=(e="link",n,t)=>`<a class="${I[e]}" href="${t}">${n}</a>`,he=(e,n)=>{k(()=>{const{url_map:t,targets:s,style:a}=n();s?.forEach?.(r=>{let c=e.innerHTML,d=ne(c,r);if(!c.includes(r))return;const u=t[r];d.forEach(i=>{const m=c[i-1],g=c[i+r.length],h=I[a||"link"];if(!m?.toLowerCase().match(/[a-z]|[-=/><]/)&&!g?.toLowerCase().match(/[a-z]|[-=/><]/)&&m!=="{"&&g!=="}"&&!h.includes(r)&&!h.includes(r)){const _=oe(a,r,u);c=c.substring(0,i)+_+c.substring(i+r.length)}}),e.innerHTML=c})})};var re=f('<div class="flex-1 font-mono animate-bounce font-extrabold text-black text-center flex items-center justify-center text-5xl">404');const se=()=>(()=>{var e=re();return e.style.setProperty("text-shadow","1px 10px 10px gray"),e.style.setProperty("animation","bounce 2s infinite"),e})();var le=f('<div class="flex-1 font-mono animate-bounce font-extrabold text-black text-center flex flex-col items-center justify-center text-2xl"><div>刷新重试（500）</div><button class="rounded-2xl outline-none border-black shadow-lg border-2 shadow-slate-300 mt-8 bg-white text-black py-3 px-5 text-2xl"><svg xmlns=http://www.w3.org/2000/svg fill=none viewBox="0 0 24 24"stroke-width=2 stroke=currentColor class=size-6><path stroke-linecap=round stroke-linejoin=round d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99">');const ae=()=>(()=>{var e=le(),n=e.firstChild,t=n.nextSibling;return e.style.setProperty("text-shadow","1px 10px 10px gray"),e.style.setProperty("animation","bounce 2s infinite"),t.$$click=()=>{window.location.reload()},e})();N(["click"]);const fe=e=>({400:P(se,{}),500:P(ae,{})})[e.code];export{me as C,de as L,ue as S,he as a,ce as b,fe as c};