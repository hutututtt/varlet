import{az as r}from"./vue-router-0bbd6486.js";const i=e=>e==null?!1:e.startsWith("data:image")||/\.(png|jpg|gif|jpeg|svg|webp)$/.test(e),h=e=>e==null?!1:e.startsWith("data:video")||/\.(mp4|webm|ogg)$/.test(e),u=e=>{const s=[];return{cache:s,has(t){return this.cache.includes(t)},add(t){this.has(t)||(this.cache.length===e&&s.shift(),this.cache.push(t))},remove(t){this.has(t)&&r(this.cache,t)},clear(){this.cache.length=0}}},l=e=>e,a=e=>e**3,p=e=>e<.5?a(e*2)/2:1-a((1-e)*2)/2,d=(e,s)=>e??s,g=()=>typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:self,f=(e="",s,t="")=>{if(e.length>=s)return e;const n=s-e.length,o=Math.floor(n/t.length);return t.repeat(o)+t.slice(0,n%t.length)+e};export{i as a,u as c,d,p as e,g,h as i,l,f as p};
