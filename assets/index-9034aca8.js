import{d as S,q as s,T as B,C as N,E as U,m as g,_ as z,r as T,aI as I,ac as V,az as $,f as A,h as L,S as l,ap as e,aJ as f,F as j,P as d,Q as n,aA as m,M as E,ah as M}from"./vue-router.esm-bundler-0d52b99f.js";import{d as O,g as P,c as D,b as k}from"./components-02edd959.js";import{u as F}from"./lock-e6232335.js";import{u as H}from"./zIndex-2017f19f.js";/* empty css               */import{B as w}from"./index-abb10db4.js";import{S as R}from"./index-fb0edaff.js";import{d as q}from"./index-59604d2c.js";import{u as J,c as Q,a as x,_ as Z,b as G}from"./index-aa3b5d97.js";import"./index-fcb663bb.js";import"./index-25f40206.js";import"./elements-3526b86d.js";import"./shared-ed2007b2.js";import"./index-59c1057f.js";import"./index-c530d756.js";const K={show:{type:Boolean,default:!1},lockScroll:{type:Boolean,default:!0},teleport:{type:String},onClick:O(),"onUpdate:show":O()};function W(a){return typeof a=="function"||Object.prototype.toString.call(a)==="[object Object]"&&!N(a)}const{n:_}=D("overlay"),C=S({name:"VarOverlay",inheritAttrs:!1,props:K,setup(a,{slots:p,attrs:i}){const{zIndex:c}=H(()=>a.show,1),{disabled:u}=P(),h=()=>{k(a.onClick),k(a["onUpdate:show"],!1)};F(()=>a.show,()=>a.lockScroll);const t=()=>s("div",g({class:_(),style:{zIndex:c.value-1}},i,{onClick:h}),[k(p.default)]),o=()=>{const{show:v}=a;return s(U,{name:_("--fade")},{default:()=>[v&&t()]})};return()=>{const{teleport:v}=a;if(v){let y;return s(B,{to:v,disabled:u.value},W(y=o())?y:{default:()=>[y]})}return o()}}}),X={overlayBase:"基础用法",overlayContent:"嵌入内容",showOverlay:"显示遮罩层",event:"注册事件",clickOverlay:"点击遮罩层",text:"素胚勾勒出青花笔锋浓转淡, 瓶身描绘的牡丹一如你初妆, 冉冉檀香透过窗心事我了然, 宣纸上走笔至此搁一半。"},Y={overlayBase:"Basic Usage",overlayContent:"Overlay Content",showOverlay:"Show Overlay",event:"Event",clickOverlay:"Click Overlay",text:"As he came into the window. It was the sound of a crescendo. He came into her apartment. He left the bloodstains on the carpet."},{add:b,use:ee,pack:r,packs:we,merge:Ce}=J(),te=a=>{Q(a),ee(a)};x("zh-CN",Z);x("en-US",G);b("zh-CN",X);b("en-US",Y);const ae={setup(a){const p=T({baseOverlay:!1,contentOverlay:!1,clickOverlay:!1}),{baseOverlay:i,contentOverlay:c,clickOverlay:u}=I(p);return V(te),$(q),(h,t)=>(A(),L(j,null,[s(e(m),null,{default:l(()=>[d(n(e(r).overlayBase),1)]),_:1}),s(e(w),{type:"primary",block:"",onClick:t[0]||(t[0]=o=>i.value=!0)},{default:l(()=>[d(n(e(r).showOverlay),1)]),_:1}),s(e(m),null,{default:l(()=>[d(n(e(r).overlayContent),1)]),_:1}),s(e(w),{type:"primary",block:"",onClick:t[1]||(t[1]=o=>c.value=!0)},{default:l(()=>[d(n(e(r).overlayContent),1)]),_:1}),s(e(m),null,{default:l(()=>[d(n(e(r).event),1)]),_:1}),s(e(w),{type:"primary",block:"",onClick:t[2]||(t[2]=o=>u.value=!0)},{default:l(()=>[d(n(e(r).clickOverlay),1)]),_:1}),s(e(C),{show:e(i),"onUpdate:show":t[3]||(t[3]=o=>f(i)?i.value=o:null)},null,8,["show"]),s(e(C),{show:e(c),"onUpdate:show":t[5]||(t[5]=o=>f(c)?c.value=o:null)},{default:l(()=>[E("div",{class:"overlay-content",onClick:t[4]||(t[4]=M(()=>{},["stop"]))},n(e(r).text),1)]),_:1},8,["show"]),s(e(C),{show:e(u),"onUpdate:show":t[6]||(t[6]=o=>f(u)?u.value=o:null),onClick:t[7]||(t[7]=o=>e(R).success("click"))},null,8,["show"])],64))}},he=z(ae,[["__scopeId","data-v-c07630ef"]]);export{he as default};
