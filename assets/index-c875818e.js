import{v as A}from"./index-25f40206.js";import{p as P,P as $}from"./index-6a69046a.js";import{I as B}from"./index-c530d756.js";import{d as f,p as R,c as U,b as r,m as z}from"./components-02edd959.js";import{d as D}from"./shared-ed2007b2.js";import{p as V}from"./index-aa3b5d97.js";import{d as I,a as N,w as j,_ as F,p as y,ag as L,f as p,i as C,S as T,M as m,O as S,N as c,Q as O,h as k,ai as E,D as M,R as Q,j as q,F as G,m as w,aB as H,r as J,n as K}from"./vue-router.esm-bundler-0d52b99f.js";const W={show:{type:Boolean,default:!1},actions:{type:Array,default:()=>[]},title:{type:String},closeOnClickAction:{type:Boolean,default:!0},onSelect:f(),"onUpdate:show":f(),...R(P,["overlay","overlayClass","overlayStyle","lockScroll","closeOnClickOverlay","teleport","onOpen","onClose","onOpened","onClosed","onClickOverlay","onRouteChange"])},{n:X,classes:Y}=U("action-sheet"),Z=I({name:"VarActionSheet",directives:{Ripple:A},components:{VarPopup:$,VarIcon:B},inheritAttrs:!1,props:W,setup(e){const t=N(!1),o=n=>{if(n.disabled)return;const{closeOnClickAction:h,onSelect:u}=e;r(u,n),h&&r(e["onUpdate:show"],!1)},i=n=>r(e["onUpdate:show"],n);return j(()=>e.show,n=>{t.value=n},{immediate:!0}),{n:X,classes:Y,handlePopupUpdateShow:i,popupShow:t,pack:V,dt:D,handleSelect:o}}});const _=["onClick"];function x(e,t,o,i,n,h){const u=y("var-icon"),g=y("var-popup"),b=L("ripple");return p(),C(g,w({class:e.n("popup-radius"),position:"bottom",overlay:e.overlay,"overlay-class":e.overlayClass,"overlay-style":e.overlayStyle,"lock-scroll":e.lockScroll,"close-on-click-overlay":e.closeOnClickOverlay,teleport:e.teleport,show:e.popupShow},{"onUpdate:show":e.handlePopupUpdateShow},{onOpen:e.onOpen,onClose:e.onClose,onClosed:e.onClosed,onOpened:e.onOpened,onRouteChange:e.onRouteChange}),{default:T(()=>[m("div",w({class:e.classes(e.n(),e.n("$--box"))},e.$attrs),[S(e.$slots,"title",{},()=>[m("div",{class:c(e.n("title"))},O(e.dt(e.title,e.pack.actionSheetTitle)),3)]),S(e.$slots,"actions",{},()=>[(p(!0),k(G,null,E(e.actions,s=>M((p(),k("div",{class:c(e.classes(e.n("action-item"),s.className,[s.disabled,e.n("--disabled")])),key:s.name,style:Q({color:s.color}),onClick:le=>e.handleSelect(s)},[s.icon?(p(),C(u,{key:0,class:c(e.n("action-icon")),"var-action-sheet-cover":"",name:s.icon,size:s.iconSize},null,8,["class","name","size"])):q("",!0),m("div",{class:c(e.n("action-name"))},O(s.name),3)],14,_)),[[b,{disabled:s.disabled}]])),128))])],16)]),_:3},16,["class","overlay","overlay-class","overlay-style","lock-scroll","close-on-click-overlay","teleport","show","onOpen","onClose","onClosed","onOpened","onRouteChange"])}const a=F(Z,[["render",x]]);let l,v={};function ee(e={}){return{...v,...e}}function d(e){return H()?new Promise(t=>{d.close();const o=J(ee(e));o.teleport="body",l=o;const{unmountInstance:i}=z(a,o,{onSelect:n=>{r(o.onSelect,n),t(n)},onClose:()=>{r(o.onClose),t("close")},onClosed:()=>{r(o.onClosed),i(),l===o&&(l=null)},onRouteChange:()=>{i(),l===o&&(l=null)},"onUpdate:show":n=>{o.show=n}});o.show=!0}):Promise.resolve()}function oe(e){v=e}function ne(){v={}}function se(){if(l!=null){const e=l;l=null,K().then(()=>{e.show=!1})}}d.Component=a;a.install=function(e){e.component(a.name,a)};d.install=function(e){e.component(a.name,a)};Object.assign(d,{setDefaultOptions:oe,resetDefaultOptions:ne,close:se});export{d as A};
