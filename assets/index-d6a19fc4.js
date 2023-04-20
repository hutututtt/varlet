import{S as u}from"./index-c9d79b38.js";import{S as i}from"./index-02c5e8b4.js";import{S as v}from"./index-6bb74986.js";import{_ as f,aa as w,f as j,h as S,q as l,S as e,ap as t,F as b,P as p,Q as o,aD as r,M as a,al as C,am as x}from"./vue-router-0bbd6486.js";import{u as y,c as I,a as m,_ as N,b as U}from"./index-b02e49a3.js";import"./provide-7b37ef73.js";import"./components-b798c95f.js";import"./useChildren-7008b9d6.js";import"./elements-66cdcec2.js";import"./shared-39a089ed.js";import"./logger-525ef361.js";import"./index-cddd6159.js";import"./index-033b4f4e.js";import"./zIndex-bab13c2f.js";import"./index-727aa21f.js";import"./lock-4560b925.js";const L={basicUsage:"基本使用",forbidLoop:"禁止循环轮播",autoplay:"开启自动播放",vertical:"垂直轮播",handleChange:"监听切换",customIndicator:"自定义指示器"},k={basicUsage:"Basic Usage",forbidLoop:"Forbid Loop",autoplay:"Autoplay",vertical:"Vertical Swipe",handleChange:"Handle Change",customIndicator:"Custom Indicator"},{add:g,use:z,pack:n,packs:vt,merge:ft}=y(),B=c=>{I(c),z(c)};m("zh-CN",N);m("en-US",U);g("zh-CN",L);g("en-US",k);const s=c=>(C("data-v-b5e7d08b"),c=c(),x(),c),V=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat.jpg",alt:""},null,-1)),F=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat2.jpg",alt:""},null,-1)),A=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat3.jpg",alt:""},null,-1)),D=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat.jpg",alt:""},null,-1)),T=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat2.jpg",alt:""},null,-1)),$=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat3.jpg",alt:""},null,-1)),q=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat.jpg",alt:""},null,-1)),E=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat2.jpg",alt:""},null,-1)),H=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat3.jpg",alt:""},null,-1)),M=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat.jpg",alt:""},null,-1)),P=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat2.jpg",alt:""},null,-1)),Q=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat3.jpg",alt:""},null,-1)),G=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat.jpg",alt:""},null,-1)),J=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat2.jpg",alt:""},null,-1)),K=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat3.jpg",alt:""},null,-1)),O=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat.jpg",alt:""},null,-1)),R=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat2.jpg",alt:""},null,-1)),W=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat3.jpg",alt:""},null,-1)),X={class:"indicators"},Y=s(()=>a("div",{class:"space"},null,-1)),Z={__name:"index",setup(c){return w(B),(tt,d)=>(j(),S(b,null,[l(t(r),null,{default:e(()=>[p(o(t(n).basicUsage),1)]),_:1}),l(t(u),{class:"swipe"},{default:e(()=>[l(t(i),null,{default:e(()=>[V]),_:1}),l(t(i),null,{default:e(()=>[F]),_:1}),l(t(i),null,{default:e(()=>[A]),_:1})]),_:1}),l(t(r),null,{default:e(()=>[p(o(t(n).forbidLoop),1)]),_:1}),l(t(u),{class:"swipe",loop:!1},{default:e(()=>[l(t(i),null,{default:e(()=>[D]),_:1}),l(t(i),null,{default:e(()=>[T]),_:1}),l(t(i),null,{default:e(()=>[$]),_:1})]),_:1}),l(t(r),null,{default:e(()=>[p(o(t(n).autoplay),1)]),_:1}),l(t(u),{class:"swipe",autoplay:2e3},{default:e(()=>[l(t(i),null,{default:e(()=>[q]),_:1}),l(t(i),null,{default:e(()=>[E]),_:1}),l(t(i),null,{default:e(()=>[H]),_:1})]),_:1}),l(t(r),null,{default:e(()=>[p(o(t(n).vertical),1)]),_:1}),l(t(u),{class:"swipe",vertical:""},{default:e(()=>[l(t(i),null,{default:e(()=>[M]),_:1}),l(t(i),null,{default:e(()=>[P]),_:1}),l(t(i),null,{default:e(()=>[Q]),_:1})]),_:1}),l(t(r),null,{default:e(()=>[p(o(t(n).handleChange),1)]),_:1}),l(t(u),{class:"swipe",onChange:d[0]||(d[0]=_=>t(v)(String(_)))},{default:e(()=>[l(t(i),null,{default:e(()=>[G]),_:1}),l(t(i),null,{default:e(()=>[J]),_:1}),l(t(i),null,{default:e(()=>[K]),_:1})]),_:1}),l(t(r),null,{default:e(()=>[p(o(t(n).customIndicator),1)]),_:1}),l(t(u),{class:"swipe"},{indicator:e(({index:_,length:h})=>[a("div",X,o(_+1)+" / "+o(h),1)]),default:e(()=>[l(t(i),null,{default:e(()=>[O]),_:1}),l(t(i),null,{default:e(()=>[R]),_:1}),l(t(i),null,{default:e(()=>[W]),_:1})]),_:1}),Y],64))}},wt=f(Z,[["__scopeId","data-v-b5e7d08b"]]);export{wt as default};
