import{j as O,e as $,f as E,u as y,k as A,l as L,s as S,t as p,a as m,i as l,b as _,d as M,m as R,n as N}from"./index-y-uD06Fv.js";import{C as z,a as k,S as H,c as J,b as U,d as V}from"./index-CQHHq2my.js";var B=p('<span><svg xmlns=http://www.w3.org/2000/svg fill=none viewBox="0 0 24 24"stroke-width=1.5 class=size-6><path stroke-linecap=round stroke-linejoin=round d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"></path></svg><audio preload=none>');const h=c=>{const[v,u]=$(!1);let f;const d=()=>{f.play()};return E(()=>{f.addEventListener("play",()=>{u(!0)}),f.addEventListener("pause",()=>{u(!1)}),f.addEventListener("ended",()=>{u(!1)}),f.addEventListener("error",r=>{u(!1)})}),(()=>{var r=B(),n=r.firstChild,i=n.nextSibling;r.$$click=d;var a=f;return typeof a=="function"?y(a,i):f=i,i.style.setProperty("display","none"),A(e=>{var s=`flex items-center cursor-pointer rounded-sm hover:shadow-lg scale-200 ${v()?"animate-ping":""}`,t=c.color||"currentColor",o=c.src;return s!==e.e&&L(r,e.e=s),t!==e.t&&S(n,"stroke",e.t=t),o!==e.a&&S(i,"src",e.a=o),e},{e:void 0,t:void 0,a:void 0}),r})()};O(["click"]);var D=p('<div class="text-black text-base leading-8"><div class="flex items-baseline space-x-2"><span class="text-4xl font-semibold relative font-math"><i class="text-xs text-red-500 absolute -top-2 -left-2"></i></span><span class="text-orange-400 italic"></span></div><div class="flex items-center gap-3 font-math"><span class=mr-5>'),I=p('<div class="mt-10 font-math">'),T=p('<div class=mb-10><div class="mb-3 text-lg"><span class=text-green-500></span><span class="text-lg font-extrabold">'),Z=p('<button class="px-2 py-1 leading-3 border border-black border-b-4 border-b-black bg-gray-600 text-white rounded text-lg mr-2 font-semibold">'),q=p('<div class="flex flex-col justify-start leading-8 mb-4"><div class="flex gap-1 items-center mb-2"><span class="font-semibold leading-6"></span><span class="font-semibold leading-6">'),F=p('<div class="flex text-base items-center gap-1 mb-2"><div class=text-gray-600>'),G=p('<div class="p-5 border-2 rounded-md text-base leading-8 bg-gray-100 font-math"><div class="font-bold text-2xl">CORPUS'),K=p('<div class=mt-6><div class="mb-3 font-semibold text-xl">'),Q=p('<div class="mb-3 leading-5">');const W=({item:c,word:v,pos_len:u,index:f})=>m(z,{class:"font-math",get children(){return[(()=>{var d=D(),r=d.firstChild,n=r.firstChild,i=n.firstChild,a=n.nextSibling,e=r.nextSibling,s=e.firstChild;return l(i,()=>c.POS&&u>1?f+1:null),l(n,()=>c.word||v,null),l(a,()=>c.POS),l(s,()=>c.PronCodes),l(e,()=>c.word_audio?.map((t,o)=>m(h,{src:t,color:o===0?"red":"blue"})),null),d})(),(()=>{var d=I();return l(d,()=>c?.examples?.map?.(r=>{const n={};return r?.a?.forEach?.(([i,a])=>{n[i]=`/dict/${a}`}),(()=>{var i=T(),a=i.firstChild,e=a.firstChild,s=e.nextSibling;return l(a,(()=>{var t=_(()=>!!r.main_example_means);return()=>t()?(()=>{var o=Z();return l(o,()=>r.main_example_means),o})():null})(),e),l(e,()=>r.is_countable),y(k,s,()=>({style:"baseline",url_map:n,targets:r?.a?.map(([t,o])=>t)})),l(s,()=>r.definition),l(i,()=>r.example_list.map(t=>(()=>{var o=q(),C=o.firstChild,b=C.firstChild,P=b.nextSibling;return l(C,(()=>{var g=_(()=>!!t.audio_src);return()=>g()?m(h,{get src(){return t.audio_src},color:"gray"}):null})(),b),l(b,()=>t.example_main_title),l(P,()=>t.content),l(o,()=>t.exp_item?.map(g=>(()=>{var x=F(),w=x.firstChild;return l(x,(()=>{var j=_(()=>!!g.audio_src);return()=>j()?m(h,{get src(){return g.audio_src},color:"gray"}):null})(),w),l(w,()=>g.content),x})()),null),o})()),null),i})()})),d})(),_(()=>_(()=>!!c.corpus_list?.length)()?(()=>{var d=G();return d.firstChild,l(d,()=>c.corpus_list?.map(({corpus_title:r,corpus_exas:n,a:i})=>{const a={};return i?.forEach?.(([e,s])=>{a[e]=`/dict/${s}`}),(()=>{var e=K(),s=e.firstChild;return y(k,e,()=>({style:"baseline",url_map:a,targets:i?.map(([t,o])=>t)})),l(s,r),l(e,()=>n?.map(t=>(()=>{var o=Q();return l(o,t),o})()),null),e})()}),null),d})():null)]}}),X=W;var Y=p('<div class="p-6 bg sticky top-0 bg-red-900 z-10 shadow-lg"><div class="max-w-screen-sm flex flex-1 m-auto">'),ee=p('<div class="h-96 flex items-center justify-center">');const le=c=>{const[v,u]=$({}),[f,d]=$(!0),[r,n]=$(null),i=async a=>await N(a.trim().split(" ").join("-")).then(({data:e})=>{if(!e){u({}),n(400);return}const s=JSON.parse(e);s.word=a,u(s),n(null)}).catch(()=>{u({}),n(500)});return E(async()=>{const a=M(),e=decodeURIComponent(a.word||"");if(!e?.trim?.())return;d(!0);const{data:s}=await R(e.trim().split(" ").join("-")).catch(o=>{n(500),d(!1)});if(!s?.data){await i(e).finally(()=>{d(!1)});return}const t=JSON.parse(s.data);Array.isArray(t)?u({word_family:[],dicts:t,word:e}):(t.word=e,u(t)),n(null),d(!1)}),[(()=>{var a=Y(),e=a.firstChild;return l(e,m(H,{})),a})(),m(V,{get children(){return[_(()=>_(()=>!!f())()?m(J,{}):v()?.dicts?.map?.((a,e)=>{const s=v()?.dicts.map(t=>t.POS).filter(t=>!!t).length;return m(X,{item:a,get word(){return v().word},pos_len:s,index:e})})),_(()=>_(()=>!!r())()?(()=>{var a=ee();return l(a,m(U,{get code(){return r()}})),a})():null)]}})]};export{le as default};