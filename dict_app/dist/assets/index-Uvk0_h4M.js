import{c as I,i as p,k as y,l as C,t as v,j as T,o as j,e as k,p as H,f as S,b as R,d as F,q as O,a as L,s as M,r as q,v as V,u as Z}from"./index-rGxvFc4Z.js";var D=v("<section>");const me=e=>{const n=I(()=>e.children);return(()=>{var t=D();return p(t,n),y(()=>C(t,`max-w-screen-lg w-full m-auto flex-1 px-5 py-6 ${e.class||null} h-80`)),t})()};var G=v('<div class="relative flex-1">'),J=v('<div class="absolute drop-shadow-xl py-5 rounded-md bg-white left-0 right-0 top-full mt-4 z-20">'),Q=v("<div>"),X=v('<button><svg xmlns=http://www.w3.org/2000/svg fill=none viewBox="0 0 24 24"stroke-width=2 stroke=currentColor class=size-3><path stroke-linecap=round stroke-linejoin=round d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25">');const A=e=>{const n=j(),[t,r]=k(-1),u=H(),l=c=>{const g=e?.options?.length||0;return r(c<0?-1:c>g-1?g-1:c),e.options?.[c]};e.ref&&e.ref({selectedItem:l,selectedPreItem(){return l(t()-1)},selectedNextItem(){return l(t()+1)}}),S(()=>{e.options,u.pathname,l(-1)});const a=I(()=>e.children);return(()=>{var c=G();return p(c,a,null),p(c,(()=>{var g=R(()=>!!(e.visible&&e.options?.length));return()=>g()?(()=>{var d=J();return p(d,()=>e.options?.map?.((i,f)=>{const h=location.pathname.split("/")[1]==="dict";return(()=>{var m=Q();return m.$$click=()=>{n(`${h?"/dict/":"/word/"}${i.name}`),e.onChange?.(i.name)},p(m,()=>i.name,null),p(m,f===0?(()=>{var x=X(),P=x.firstChild;return x.$$click=E=>{E.stopPropagation(),n(`${h?"/word/":"/dict/"}${i.name}`)},C(x,`${h?"bg-black":"bg-red-700"} inline-flex items-center text-white py-1 px-2 text-xs rounded-md border-b-2 border-gray-400`),p(x,h?"辞源搜索":"词意查询",P),x})():null,null),y(()=>C(m,`flex justify-between items-center text-xl text-black px-5 ${t()===f?"text-red-500":null} hover:text-red-500 leading-10 cursor-pointer ${i.type?null:"text-blue-600"}`)),m})()})),d})():null})(),null),c})()};T(["click"]);var _=(e=>(e[e.ENTER=13]="ENTER",e[e.UP=38]="UP",e[e.DOWN=40]="DOWN",e))(_||{});const B=(e,n)=>{const t=r=>{r.target;const u=r.which||r.keyCode;e.includes(u)&&n&&n(u)};return[()=>{window.addEventListener("keydown",t)},()=>{window.removeEventListener("keydown",t)}]};var K=v('<div class="flex items-center flex-1 rounded-xl border-2 border-gray-200 bg-gray-200 hover:bg-white relative"><input role=search class="rounded-xl pr-14 py-4 px-5 flex-1 h-13 bg-transparent text-xl font-mono font-medium outline-none hover:outline outline-offset-4 focus:outline-4 hover:outline-4 hover:outline-red-600 focus:outline-red-600 focus:outline-offset-8 transition-all focus:bg-white"><svg class="cursor-pointer size-6 absolute right-5 font-bold"xmlns=http://www.w3.org/2000/svg fill=none viewBox="0 0 24 24"stroke-width=2 stroke=currentColor><path stroke-linecap=round stroke-linejoin=round d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z">');const Y=e=>{const[n,t]=k(!1),[r,u]=k([]),[l,a]=k(""),c=F(),g=j();let d=null,i=null;const f=()=>{setTimeout(()=>{const o=i.value.length;i.setSelectionRange(o,o)},0)},[h,m]=B([_.UP,_.DOWN],o=>{if(n()){if(o===_.UP){const{name:s}=d.selectedPreItem()||{};s&&a(s),f()}if(o===_.DOWN){const{name:s}=d.selectedNextItem()||{};s&&a(s),f()}}}),x=o=>{if(!o.trim())return;(window.location.pathname.split("/")[1]==="dict"?q:V)(o.trim()).then(({data:b})=>{const $=b.map(w=>w.name).indexOf(o);if($!=-1){const w=b.splice($,1)[0];u([w].concat(b))}else u(r().concat(b))})},P=O({delay:500},o=>{x(o)}),E=o=>{a(o.value);const s=l()?.trim?.();u([{name:s,value:s,type:"manual"}].filter(({name:b})=>!!b)),s&&P(s)};return S(()=>{const o=decodeURIComponent(c.word?.trim?.()||"");a(o)}),S(()=>{m(),n()&&h()}),e.ref&&e.ref({setValue(o){a(o)}}),L(A,{get visible(){return n()},get options(){return r()},ref(o){var s=d;typeof s=="function"?s(o):d=o},get children(){var o=K(),s=o.firstChild,b=s.nextSibling;s.addEventListener("keypress",$=>{const w=$.target;if(($.which||$.keyCode)===13){const W=w.value?.trim?.(),U=location.pathname.split("/")[1]==="dict";g(`${U?"/dict/":"/word/"}${encodeURIComponent(W)}`),i?.blur?.()}}),s.$$input=$=>{E($.target)},s.addEventListener("blur",()=>{setTimeout(()=>{t(!1)},100)}),s.addEventListener("focus",()=>{t(!0)});var N=i;return typeof N=="function"?Z(N,s):i=s,b.$$click=()=>{console.log(l()),l().trim()&&x(l().trim())},y(()=>M(s,"placeholder",n()?location.pathname.split("/")[1]==="dict"?"搜索英文词意":"检索英文辞源":"Search")),y(()=>s.value=l()),o}})},pe=Y;T(["input","click"]);var ee=v("<div>");const te=e=>{const n=I(()=>e.children);return(()=>{var t=ee();return p(t,n),y(()=>C(t,`border border-slate-300 shadow-sm rounded-xl p-5 sm:p-10 font-mono mb-10 mt-10 hover:shadow-lg transition-shadow ${e.class}`)),t})()},ne=(e,n)=>{const t=[];let r=e.indexOf(n);for(;r>-1;)t.push(r),r=e.indexOf(n,r+1);return t},z={link:"hover:scale-110 inline-block transition-all text-red-800 cursor-pointer font-bold",baseline:"inline-block underline decoration-dashed decoration-red-800"},se=(e="link",n,t)=>`<a class="${z[e]}" href="${t}">${n}</a>`,ge=(e,n)=>{S(()=>{const{url_map:t,targets:r,style:u}=n();r?.forEach?.(l=>{let a=e.innerHTML,c=ne(a,l);if(!a.includes(l))return;const g=t[l];c.forEach(d=>{const i=a[d-1],f=a[d+l.length],h=z[u||"link"];if(!i?.toLowerCase().match(/[a-z]|[-=/><]/)&&!f?.toLowerCase().match(/[a-z]|[-=/><]/)&&i!=="{"&&f!=="}"&&!h.includes(l)&&!h.includes(l)){const m=se(u,l,g);a=a.substring(0,d)+m+a.substring(d+l.length)}}),e.innerHTML=a})})};var oe=v('<div class="animate-pulse flex space-x-4"><div class="flex-1 space-y-6 py-1"><div class="h-2 bg-slate-700 rounded"></div><div class=space-y-3><div class="grid grid-cols-3 gap-4"><div class="h-2 bg-slate-700 rounded col-span-1"></div><div class="h-2 bg-slate-700 rounded col-span-2"></div></div><div class="h-2 bg-slate-700 rounded"></div></div><div class=space-y-3><div class="h-2 bg-slate-700 rounded"></div><div class="grid grid-cols-3 gap-4"><div class="h-2 bg-slate-700 rounded col-span-2"></div><div class="h-2 bg-slate-700 rounded col-span-1"></div></div></div><div class=space-y-3><div class="grid grid-cols-3 gap-4"><div class="h-2 bg-slate-700 rounded col-span-1"></div><div class="h-2 bg-slate-700 rounded col-span-2"></div></div><div class="h-2 bg-slate-700 rounded"></div></div><div class=space-y-3><div class="h-2 bg-slate-700 rounded"></div><div class="grid grid-cols-3 gap-4"><div class="h-2 bg-slate-700 rounded col-span-2"></div><div class="h-2 bg-slate-700 rounded col-span-1">');const re=()=>L(te,{get children(){return oe()}}),fe=re;var le=v('<div class="flex-1 font-mono animate-bounce font-extrabold text-black text-center flex items-center justify-center text-5xl">404');const ae=()=>(()=>{var e=le();return e.style.setProperty("text-shadow","1px 10px 10px gray"),e.style.setProperty("animation","bounce 2s infinite"),e})();var ie=v('<div class="flex-1 font-mono animate-bounce font-extrabold text-black text-center flex flex-col items-center justify-center text-2xl"><div>刷新重试（500）</div><button class="rounded-2xl outline-none border-black shadow-lg border-2 shadow-slate-300 mt-8 bg-white text-black py-3 px-5 text-2xl"><svg xmlns=http://www.w3.org/2000/svg fill=none viewBox="0 0 24 24"stroke-width=2 stroke=currentColor class=size-6><path stroke-linecap=round stroke-linejoin=round d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99">');const ce=()=>(()=>{var e=ie(),n=e.firstChild,t=n.nextSibling;return e.style.setProperty("text-shadow","1px 10px 10px gray"),e.style.setProperty("animation","bounce 2s infinite"),t.$$click=()=>{window.location.reload()},e})();T(["click"]);const de="/assets/logo-ATTEhxol.png";var ue=v('<div class="flex items-center justify-center flex-col m-auto"><img class=h-40>');const ve=e=>{const n={400:L(ae,{}),500:L(ce,{})}[e.code];return(()=>{var t=ue(),r=t.firstChild;return p(t,n,r),M(r,"src",de),t})()},xe=ve;export{te as C,pe as S,ge as a,xe as b,fe as c,me as d};