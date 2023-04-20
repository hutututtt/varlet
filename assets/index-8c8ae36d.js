import{v as P}from"./index-9e1b28d2.js";import{p as $,P as b}from"./index-8a80d414.js";import{I as R}from"./index-033b4f4e.js";import{d as f,p as B,c as U,a as r,m as z}from"./components-b798c95f.js";import{d as D}from"./shared-39a089ed.js";import{p as V}from"./index-b02e49a3.js";import{d as I,a as N,w as F,_ as L,p as y,ag as T,f as c,i as C,S as j,M as m,m as S,O,N as d,Q as k,h as w,F as E,ai as M,D as Q,R as q,j as G,at as H,r as J,n as K}from"./vue-router-0bbd6486.js";const W={show:{type:Boolean,default:!1},actions:{type:Array,default:()=>[]},title:{type:String},closeOnClickAction:{type:Boolean,default:!0},onSelect:f(),"onUpdate:show":f(),...B($,["overlay","overlayClass","overlayStyle","lockScroll","closeOnClickOverlay","teleport","onOpen","onClose","onOpened","onClosed","onClickOverlay","onRouteChange"])},{n:X,classes:Y}=U("action-sheet"),Z=I({name:"VarActionSheet",directives:{Ripple:P},components:{VarPopup:b,VarIcon:R},inheritAttrs:!1,props:W,setup(e){const t=N(!1),o=n=>{if(n.disabled)return;const{closeOnClickAction:h,onSelect:u}=e;r(u,n),h&&r(e["onUpdate:show"],!1)},p=n=>r(e["onUpdate:show"],n);return F(()=>e.show,n=>{t.value=n},{immediate:!0}),{n:X,classes:Y,handlePopupUpdateShow:p,popupShow:t,pack:V,dt:D,handleSelect:o}}});const _=["onClick"];function x(e,t,o,p,n,h){const u=y("var-icon"),g=y("var-popup"),A=T("ripple");return c(),C(g,S({class:e.n("popup-radius"),position:"bottom",overlay:e.overlay,"overlay-class":e.overlayClass,"overlay-style":e.overlayStyle,"lock-scroll":e.lockScroll,"close-on-click-overlay":e.closeOnClickOverlay,teleport:e.teleport,show:e.popupShow},{"onUpdate:show":e.handlePopupUpdateShow},{onOpen:e.onOpen,onClose:e.onClose,onClosed:e.onClosed,onOpened:e.onOpened,onRouteChange:e.onRouteChange}),{default:j(()=>[m("div",S({class:e.classes(e.n(),e.n("$--box"))},e.$attrs),[O(e.$slots,"title",{},()=>[m("div",{class:d(e.n("title"))},k(e.dt(e.title,e.pack.actionSheetTitle)),3)]),O(e.$slots,"actions",{},()=>[(c(!0),w(E,null,M(e.actions,s=>Q((c(),w("div",{class:d(e.classes(e.n("action-item"),s.className,[s.disabled,e.n("--disabled")])),key:s.name,style:q({color:s.color}),onClick:oe=>e.handleSelect(s)},[s.icon?(c(),C(u,{key:0,class:d(e.n("action-icon")),"var-action-sheet-cover":"",name:s.icon,size:s.iconSize},null,8,["class","name","size"])):G("",!0),m("div",{class:d(e.n("action-name"))},k(s.name),3)],14,_)),[[A,{disabled:s.disabled}]])),128))])],16)]),_:3},16,["class","overlay","overlay-class","overlay-style","lock-scroll","close-on-click-overlay","teleport","show","onOpen","onClose","onClosed","onOpened","onRouteChange"])}const a=L(Z,[["render",x]]);let l,v={};function ee(e={}){return{...v,...e}}function i(e){return H()?new Promise(t=>{i.close();const o=J(ee(e));o.teleport="body",l=o;const{unmountInstance:p}=z(a,o,{onSelect:n=>{r(o.onSelect,n),t(n)},onClose:()=>{r(o.onClose),t("close")},onClosed:()=>{r(o.onClosed),p(),l===o&&(l=null)},onRouteChange:()=>{p(),l===o&&(l=null)},"onUpdate:show":n=>{o.show=n}});o.show=!0}):Promise.resolve()}i.setDefaultOptions=function(e){v=e};i.resetDefaultOptions=function(){v={}};i.close=function(){if(l!=null){const e=l;l=null,K().then(()=>{e.show=!1})}};i.Component=a;a.install=function(e){e.component(a.name,a)};i.install=function(e){e.component(a.name,a)};export{i as A};
