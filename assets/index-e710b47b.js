import{d as S,q as s,T as B,C as N,E as U,m as g,_ as T,r as z,aN as V,aa as $,aC as I,f as L,h as j,S as l,ap as e,au as f,F as A,P as d,Q as n,aD as m,M as D,ah as E}from"./vue-router-0bbd6486.js";import{d as O,g as M,c as P,a as k}from"./components-b798c95f.js";import{u as F}from"./lock-4560b925.js";import{u as H}from"./zIndex-bab13c2f.js";/* empty css               */import{B as w}from"./index-0f0f1028.js";import{S as R}from"./index-6bb74986.js";import{d as q}from"./index-dd768cde.js";import{u as Q,c as Z,a as x,_ as G,b as J}from"./index-b02e49a3.js";import"./index-727aa21f.js";import"./index-9e1b28d2.js";import"./elements-66cdcec2.js";import"./shared-39a089ed.js";import"./logger-525ef361.js";import"./index-cddd6159.js";import"./index-fbb0fcba.js";import"./index-5cbdb505.js";import"./useChildren-7008b9d6.js";import"./index-033b4f4e.js";const K={show:{type:Boolean,default:!1},lockScroll:{type:Boolean,default:!0},teleport:{type:String},onClick:O(),"onUpdate:show":O()};function W(a){return typeof a=="function"||Object.prototype.toString.call(a)==="[object Object]"&&!N(a)}const{n:_}=P("overlay"),C=S({name:"VarOverlay",inheritAttrs:!1,props:K,setup(a,{slots:v,attrs:i}){const{zIndex:c}=H(()=>a.show,1),{disabled:u}=M(),h=()=>{k(a.onClick),k(a["onUpdate:show"],!1)};F(()=>a.show,()=>a.lockScroll);const t=()=>s("div",g({class:_(),style:{zIndex:c.value-1}},i,{onClick:h}),[k(v.default)]),o=()=>{const{show:p}=a;return s(U,{name:_("--fade")},{default:()=>[p&&t()]})};return()=>{const{teleport:p}=a;if(p){let y;return s(B,{to:p,disabled:u.value},W(y=o())?y:{default:()=>[y]})}return o()}}}),X={overlayBase:"基础用法",overlayContent:"嵌入内容",showOverlay:"显示遮罩层",event:"注册事件",clickOverlay:"点击遮罩层",text:"素胚勾勒出青花笔锋浓转淡, 瓶身描绘的牡丹一如你初妆, 冉冉檀香透过窗心事我了然, 宣纸上走笔至此搁一半。"},Y={overlayBase:"Basic Usage",overlayContent:"Overlay Content",showOverlay:"Show Overlay",event:"Event",clickOverlay:"Click Overlay",text:"As he came into the window. It was the sound of a crescendo. He came into her apartment. He left the bloodstains on the carpet."},{add:b,use:ee,pack:r,packs:_e,merge:xe}=Q(),te=a=>{Z(a),ee(a)};x("zh-CN",G);x("en-US",J);b("zh-CN",X);b("en-US",Y);const ae={__name:"index",setup(a){const v=z({baseOverlay:!1,contentOverlay:!1,clickOverlay:!1}),{baseOverlay:i,contentOverlay:c,clickOverlay:u}=V(v);return $(te),I(q),(h,t)=>(L(),j(A,null,[s(e(m),null,{default:l(()=>[d(n(e(r).overlayBase),1)]),_:1}),s(e(w),{type:"primary",block:"",onClick:t[0]||(t[0]=o=>i.value=!0)},{default:l(()=>[d(n(e(r).showOverlay),1)]),_:1}),s(e(m),null,{default:l(()=>[d(n(e(r).overlayContent),1)]),_:1}),s(e(w),{type:"primary",block:"",onClick:t[1]||(t[1]=o=>c.value=!0)},{default:l(()=>[d(n(e(r).overlayContent),1)]),_:1}),s(e(m),null,{default:l(()=>[d(n(e(r).event),1)]),_:1}),s(e(w),{type:"primary",block:"",onClick:t[2]||(t[2]=o=>u.value=!0)},{default:l(()=>[d(n(e(r).clickOverlay),1)]),_:1}),s(e(C),{show:e(i),"onUpdate:show":t[3]||(t[3]=o=>f(i)?i.value=o:null)},null,8,["show"]),s(e(C),{show:e(c),"onUpdate:show":t[5]||(t[5]=o=>f(c)?c.value=o:null)},{default:l(()=>[D("div",{class:"overlay-content",onClick:t[4]||(t[4]=E(()=>{},["stop"]))},n(e(r).text),1)]),_:1},8,["show"]),s(e(C),{show:e(u),"onUpdate:show":t[6]||(t[6]=o=>f(u)?u.value=o:null),onClick:t[7]||(t[7]=o=>e(R).success("click"))},null,8,["show"])],64))}},be=T(ae,[["__scopeId","data-v-c07630ef"]]);export{be as default};
