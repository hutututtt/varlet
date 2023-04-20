import{B as me}from"./index-0f0f1028.js";import{d as T,e as be,c as j,a as S,u as ve}from"./components-b798c95f.js";import{u as de}from"./useChildren-7008b9d6.js";import{d as W,a as f,b as U,w as G,aj as fe,X as ge,ax as pe,_ as Z,p as R,f as $,h as F,O as M,i as w,S as m,m as x,j as L,N as O,R as ee,ag as Ce,D as he,M as Ne,F as ae,P as k,Q as I,aa as ye,aC as Be,q as l,ap as e,aD as P}from"./vue-router-0bbd6486.js";import{v as ke}from"./index-9e1b28d2.js";import{B as Ie}from"./index-3005cf4c.js";import{I as le}from"./index-033b4f4e.js";import{e as Se}from"./logger-525ef361.js";import{S as Y}from"./index-6bb74986.js";import{d as $e}from"./index-dd768cde.js";import{u as Ae,c as Ee,a as te,_ as Pe,b as _e}from"./index-b02e49a3.js";import"./index-cddd6159.js";import"./elements-66cdcec2.js";import"./shared-39a089ed.js";import"./index-fbb0fcba.js";import"./index-5cbdb505.js";import"./index-727aa21f.js";/* empty css               */import"./zIndex-bab13c2f.js";import"./lock-4560b925.js";const Te={active:{type:[Number,String],default:0},fixed:{type:Boolean,default:!1},border:{type:Boolean,default:!1},safeArea:{type:Boolean,default:!1},zIndex:{type:[Number,String],default:1},activeColor:{type:String},inactiveColor:{type:String},onChange:T(),"onUpdate:active":T(),onBeforeChange:T(),onFabClick:T(),fabProps:{type:Object}},ne=Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY");function Ue(){const{childProviders:a,length:s,bindChildren:r}=de(ne);return{length:s,bottomNavigationItems:a,bindBottomNavigationItem:r}}const{n:Le,classes:Oe}=j("bottom-navigation"),{n:D}=j("bottom-navigation-item"),Q=D("--right-half-space"),X=D("--left-half-space"),J=D("--right-space"),Fe={type:"primary"},Me=W({name:"VarBottomNavigation",components:{VarButton:me},props:Te,setup(a,{slots:s}){const r=f(null),b=U(()=>a.active),g=U(()=>a.activeColor),C=U(()=>a.inactiveColor),d=f({}),{length:c,bottomNavigationItems:h,bindBottomNavigationItem:N}=Ue(),_=()=>{c.value===0||y()||B()||o()},y=()=>h.find(({name:i})=>b.value===i.value),B=()=>h.find(({index:i})=>b.value===i.value),o=()=>{ge(b.value)&&(b.value<0?S(a["onUpdate:active"],0):b.value>c.value-1&&S(a["onUpdate:active"],c.value-1))},u=i=>{b.value!==i&&(a.onBeforeChange?ie(i):H(i))},ie=i=>{let v=S(a.onBeforeChange,i);v=pe(v)?v:[v],Promise.all(v).then(A=>{A.some(E=>!E)||H(i)})},H=i=>{S(a["onUpdate:active"],i),S(a.onChange,i)},se=()=>{K().forEach(v=>{v.classList.remove(Q,X,J)})},q=i=>{const v=K(),A=v.length,E=i%2===0;v.forEach((z,V)=>{re(E,z,V,A)})},re=(i,v,A,E)=>{const z=A===E-1;if(!i&&z){v.classList.add(J);return}const V=A===E/2-1,ue=A===E/2;V?v.classList.add(Q):ue&&v.classList.add(X)},K=()=>Array.from(r.value.querySelectorAll(`.${D()}`)),ce=()=>{S(a.onFabClick)};return N({active:b,activeColor:g,inactiveColor:C,onToggle:u}),G(()=>c.value,_),G(()=>a.fabProps,i=>{d.value={...Fe,...i}},{immediate:!0,deep:!0}),be(()=>{s.fab&&q(c.value)}),fe(()=>{se(),s.fab&&q(c.value)}),{n:Le,classes:Oe,length:c,bottomNavigationDom:r,handleFabClick:ce,fabProps:d}}});function we(a,s,r,b,g,C){const d=R("var-button");return $(),F("div",{class:O(a.classes(a.n(),a.n("$--box"),[a.fixed,a.n("--fixed")],[a.border,a.n("--border")],[a.safeArea,a.n("--safe-area")])),ref:"bottomNavigationDom",style:ee(`z-index:${a.zIndex}`)},[M(a.$slots,"default"),a.$slots.fab?($(),w(d,x({key:0,class:a.classes(a.n("fab"),[a.length%2,a.n("--fab-right"),a.n("--fab-center")]),"var-bottom-navigation__fab":"",onClick:a.handleFabClick},a.fabProps,{round:""}),{default:m(()=>[M(a.$slots,"fab")]),_:3},16,["class","onClick"])):L("",!0)],6)}const p=Z(Me,[["render",we]]);p.install=function(a){a.component(p.name,p)};const De={name:{type:String},icon:{type:String},label:{type:String},namespace:{type:String,default:"var-icon"},badge:{type:[Boolean,Object],default:!1},onClick:T()};function ze(){const{parentProvider:a,index:s,bindParent:r}=ve(ne);return r||Se("BottomNavigationItem","<var-bottom-navigation-item/> must in <var-bottom-navigation/>"),{index:s,bottomNavigation:a,bindBottomNavigation:r}}const{n:Ve,classes:Ge}=j("bottom-navigation-item"),Re={type:"danger",dot:!0},je=W({name:"VarBottomNavigationItem",components:{VarBadge:Ie,VarIcon:le},directives:{Ripple:ke},props:De,setup(a){const s=U(()=>a.name),r=U(()=>a.badge),b=f({}),{index:g,bottomNavigation:C,bindBottomNavigation:d}=ze(),{active:c,activeColor:h,inactiveColor:N}=C,_={name:s,index:g},y=()=>c.value===s.value||c.value===g.value?h.value:N.value,B=()=>{const o=s.value??g.value;S(a.onClick,o),S(C.onToggle,o)};return d(_),G(()=>r.value,o=>{b.value=o===!0?Re:r.value},{immediate:!0}),{n:Ve,classes:Ge,index:g,active:c,badge:r,badgeProps:b,computeColorStyle:y,handleClick:B}}});function He(a,s,r,b,g,C){const d=R("var-icon"),c=R("var-badge"),h=Ce("ripple");return he(($(),F("button",{class:O(a.classes(a.n(),a.n("$--box"),[a.active===a.index||a.active===a.name,a.n("--active")])),style:ee({color:a.computeColorStyle()}),onClick:s[0]||(s[0]=(...N)=>a.handleClick&&a.handleClick(...N))},[a.icon&&!a.$slots.icon?($(),w(d,{key:0,name:a.icon,namespace:a.namespace,class:O(a.n("icon")),"var-bottom-navigation-item-cover":""},null,8,["name","namespace","class"])):L("",!0),M(a.$slots,"icon",{active:a.active===a.index||a.active===a.name}),a.badge?($(),w(c,x({key:1},a.badgeProps,{class:a.n("badge"),"var-bottom-navigation-item-cover":""}),null,16,["class"])):L("",!0),Ne("span",{class:O(a.n("label"))},[a.$slots.default?L("",!0):($(),F(ae,{key:0},[k(I(a.label),1)],64)),M(a.$slots,"default")],2)],6)),[[h]])}const n=Z(je,[["render",He]]);n.install=function(a){a.component(n.name,n)};const qe={basicUsage:"基本使用",matchByName:"通过名称匹配",showBadge:"徽标提示",customColor:"自定义颜色",changeEvent:"监听切换事件",clickEvent:"监听点击事件",fab:"悬浮按钮",label:"标签"},Ke={basicUsage:"Basic Usage",matchByName:"Match by name",showBadge:"Show Badge",customColor:"Custom Color",changeEvent:"Change Event",clickEvent:"Click Event",fab:"Fab",label:"label"},{add:oe,use:Ye,pack:t,packs:ga,merge:pa}=Ae(),Qe=a=>{Ee(a),Ye(a)};te("zh-CN",Pe);te("en-US",_e);oe("zh-CN",qe);oe("en-US",Ke);const Ca={__name:"index",setup(a){const s=f(0),r=f("home"),b=f(0),g={type:"primary",value:"66"},C=f(0),d=f(0),c=f(0),h=f(0),N=f(!0);function _(B){Y.info(`changed to ${B}`)}function y(B){Y.success(`clicked ${B}`)}return ye(Qe),Be($e),(B,o)=>($(),F(ae,null,[l(e(P),null,{default:m(()=>[k(I(e(t).basicUsage),1)]),_:1}),l(e(p),{active:s.value,"onUpdate:active":o[0]||(o[0]=u=>s.value=u)},{default:m(()=>[l(e(n),{label:e(t).label,icon:"home"},null,8,["label"]),l(e(n),{label:e(t).label,icon:"magnify"},null,8,["label"]),l(e(n),{label:e(t).label,icon:"heart"},null,8,["label"]),l(e(n),{label:e(t).label,icon:"account-circle"},null,8,["label"])]),_:1},8,["active"]),l(e(P),null,{default:m(()=>[k(I(e(t).matchByName),1)]),_:1}),l(e(p),{active:r.value,"onUpdate:active":o[1]||(o[1]=u=>r.value=u)},{default:m(()=>[l(e(n),{name:"home",label:e(t).label,icon:"home"},null,8,["label"]),l(e(n),{name:"search",label:e(t).label,icon:"magnify"},null,8,["label"]),l(e(n),{name:"heart",label:e(t).label,icon:"heart"},null,8,["label"]),l(e(n),{name:"user",label:e(t).label,icon:"account-circle"},null,8,["label"])]),_:1},8,["active"]),l(e(P),null,{default:m(()=>[k(I(e(t).showBadge),1)]),_:1}),l(e(p),{active:b.value,"onUpdate:active":o[2]||(o[2]=u=>b.value=u)},{default:m(()=>[l(e(n),{label:e(t).label,icon:"home"},null,8,["label"]),l(e(n),{label:e(t).label,icon:"magnify",badge:""},null,8,["label"]),l(e(n),{label:e(t).label,icon:"heart",badge:g},null,8,["label"]),l(e(n),{label:e(t).label,icon:"account-circle"},null,8,["label"])]),_:1},8,["active"]),l(e(P),null,{default:m(()=>[k(I(e(t).customColor),1)]),_:1}),l(e(p),{"active-color":"#ba68c8",active:C.value,"onUpdate:active":o[3]||(o[3]=u=>C.value=u)},{default:m(()=>[l(e(n),{label:e(t).label,icon:"home"},null,8,["label"]),l(e(n),{label:e(t).label,icon:"magnify"},null,8,["label"]),l(e(n),{label:e(t).label,icon:"heart"},null,8,["label"]),l(e(n),{label:e(t).label,icon:"account-circle"},null,8,["label"])]),_:1},8,["active"]),l(e(P),null,{default:m(()=>[k(I(e(t).changeEvent),1)]),_:1}),l(e(p),{active:d.value,"onUpdate:active":o[4]||(o[4]=u=>d.value=u),onChange:_},{default:m(()=>[l(e(n),{label:e(t).label,icon:"home"},null,8,["label"]),l(e(n),{label:e(t).label,icon:"magnify"},null,8,["label"]),l(e(n),{label:e(t).label,icon:"heart"},null,8,["label"]),l(e(n),{label:e(t).label,icon:"account-circle"},null,8,["label"])]),_:1},8,["active"]),l(e(P),null,{default:m(()=>[k(I(e(t).clickEvent),1)]),_:1}),l(e(p),{active:c.value,"onUpdate:active":o[5]||(o[5]=u=>c.value=u)},{default:m(()=>[l(e(n),{onClick:y,label:e(t).label,icon:"home"},null,8,["label"]),l(e(n),{onClick:y,label:e(t).label,icon:"magnify"},null,8,["label"]),l(e(n),{onClick:y,label:e(t).label,icon:"heart"},null,8,["label"]),l(e(n),{onClick:y,label:e(t).label,icon:"account-circle"},null,8,["label"])]),_:1},8,["active"]),l(e(P),null,{default:m(()=>[k(I(e(t).fab),1)]),_:1}),l(e(p),{active:h.value,"onUpdate:active":o[6]||(o[6]=u=>h.value=u),onFabClick:o[7]||(o[7]=u=>N.value=!N.value),style:{"margin-top":"10px"}},{fab:m(()=>[l(e(le),{name:"heart"})]),default:m(()=>[l(e(n),{label:e(t).label,icon:"home"},null,8,["label"]),l(e(n),{label:e(t).label,icon:"magnify"},null,8,["label"]),l(e(n),{label:e(t).label,icon:"heart"},null,8,["label"]),l(e(n),{label:e(t).label,icon:"bell"},null,8,["label"]),N.value?L("",!0):($(),w(e(n),{key:0,label:e(t).label,icon:"account-circle"},null,8,["label"]))]),_:1},8,["active"])],64))}};export{Ca as default};
