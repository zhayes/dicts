import{c as x,i as s,t as n,a as c,b as u,u as g,d as v,e as $,f as w,g as b,h as y,s as C}from"./index-xEgvAsQz.js";import{a as k,C as S,S as A,b as E,c as J,d as M}from"./index-FzlDlqZs.js";var N=n('<nav class="shadow-gray-500 shadow-md h-80 rounded-none px-5 py-8 flex items-center bg-black sticky -top-48 z-10">');const O=d=>{const r=x(()=>d.children);return(()=>{var e=N();return s(e,r),e})()};var j=n('<h1 class="mb-6 text-3xl font-bold italic">'),z=n('<i class="text-xl text-gray-600">'),D=n('<p class="leading-relaxed text-base sm:text-xl mb-6 text-justify">');const H=d=>{const r=d.data;return c(S,{get children(){return[(()=>{var e=j();return s(e,()=>r.title.split("(")[0],null),s(e,(()=>{var o=u(()=>!!r.title.split("(")[1]);return()=>o()?(()=>{var t=z();return s(t,()=>"("+r.title.split("(")[1]),t})():null})(),null),e})(),u(()=>r.descs.map(e=>{const o={};return r.a_tag.forEach(t=>{o[t]=`/word/${t}`}),(()=>{var t=D();return g(k,t,()=>({targets:r.a_tag,url_map:o})),s(t,e),t})()}))]}})};var L=n('<div class="max-w-screen-sm flex flex-1 m-auto sticky top-8">'),P=n('<div class="flex items-start gap-5 flex-wrap"><div class="w-full sm:flex-1 shrink-0 min-h-full">'),T=n('<div class="shrink-0 mt-10 w-full sm:w-40 sticky top-36 text-black bg-white border border-slate-300 shadow rounded-md px-4 py-4 cursor-pointer leading-7"><div class="font-bold text-base mb-2">相近词汇'),W=n('<a class="flex hover:text-red-800">');const F=()=>{const d=v(),[r,e]=$(null),[o,t]=$(!1),[f,_]=$({});return w(()=>{const a=d.word?.trim?.();t(!0),a&&b(a).then(async p=>{try{if(!p){await y(a).then(l=>{l.description||e(400);const m=l.description;_(JSON.parse(m)),e(null)}).catch(()=>{e(500)}).finally(()=>{t(!1)});return}const i=p.description;_(JSON.parse(i)),e(null)}catch{_({}),t(!1)}}).finally(()=>{t(!1)})}),[c(O,{get children(){var a=L();return s(a,c(A,{})),a}}),c(M,{get class(){return r()?"flex":void 0},get children(){return u(()=>!!r())()?c(E,{get code(){return r()}}):(()=>{var a=P(),p=a.firstChild;return s(p,(()=>{var i=u(()=>!!o());return()=>i()?c(J,{}):f()?.results?.map(l=>c(H,{data:l}))})()),s(a,(()=>{var i=u(()=>!!(o()||!f()?.near_words?.length));return()=>i()?null:(()=>{var l=T();return l.firstChild,s(l,()=>f()?.near_words?.map(m=>(()=>{var h=W();return C(h,"href",`/word/${m}`),s(h,m),h})()),null),l})()})(),null),a})()}})]};export{F as default};