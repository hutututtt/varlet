import{d as y,a as u,o as h,e as S,_,az as B,ao as T,aA as N,s as g,f as p,i as C,l as V,J as w,m as E,ac as $,T as z,t as c,P as k,h as b,F as I,ad as L,ag as v,M,N as P}from"./elevation.b6664af0.js";import{B as U}from"./index.579068bc.js";import{I as j}from"./index.388f0ba6.js";import{e as A}from"./shared.f68fafdb.js";import{c as F,a as O,d as D,e as H,f as q,t as J}from"./elements.e9a3cb11.js";import{c as G,e as K}from"./components.1dfa4f07.js";import{C as Q}from"./index.b4e970f0.js";import{d as R}from"./index.5d153c96.js";import{b as W}from"./utils.0c1f0941.js";import"./index.6f8d2b65.js";import"./index.907bdd7e.js";/* empty css               */import"./index.3a3df279.js";const X={visibilityHeight:{type:[Number,String],default:200},duration:{type:Number,default:300},right:{type:[Number,String]},bottom:{type:[Number,String]},target:{type:[String,Object]},onClick:{type:Function}};const{n:Y,classes:Z}=G("back-top"),x=y({name:"VarBackTop",components:{VarButton:U,VarIcon:j},inheritAttrs:!1,props:X,setup(t){const o=u(!1),a=u(null),n=u(!0);let e;const d=r=>{K(t.onClick,r);const i=D(e);H(e,{left:i,duration:t.duration,animation:A})},s=B(()=>{o.value=q(e)>=J(t.visibilityHeight)},200),m=()=>{const{target:r}=t;if(T(r)){const i=document.querySelector(t.target);if(!i)throw Error("[Varlet] BackTop: target element cannot found");return i}if(N(r))return r;throw Error('[Varlet] BackTop: type of prop "target" should be a selector or an element object')};return h(()=>{e=t.target?m():F(a.value),e.addEventListener("scroll",s),n.value=!1}),S(()=>{e.removeEventListener("scroll",s)}),{disabled:n,show:o,backTopEl:a,toSizeUnit:O,n:Y,classes:Z,click:d}}});function tt(t,o,a,n,e,d){const f=g("var-icon"),s=g("var-button");return p(),C(z,{to:"body",disabled:t.disabled},[V("div",E({class:t.classes(t.n(),[t.show,t.n("--active")]),ref:"backTopEl",style:{right:t.toSizeUnit(t.right),bottom:t.toSizeUnit(t.bottom)}},t.$attrs,{onClick:o[0]||(o[0]=$((...m)=>t.click&&t.click(...m),["stop"]))}),[w(t.$slots,"default",{},()=>[c(s,{type:"primary",round:"","var-back-top-cover":""},{default:k(()=>[c(f,{name:"chevron-up"})]),_:1})])],16)],8,["disabled"])}var l=_(x,[["render",tt]]);l.install=function(t){t.component(l.name,l)};const ft={setup(t){const o=[...Array(100).keys()];return W(R),(a,n)=>(p(),b("div",null,[(p(),b(I,null,L(o,e=>c(v(Q),{key:e},{default:k(()=>[M("Scroll to bottom "+P(e),1)]),_:2},1024)),64)),c(v(l),{duration:300})]))}};export{ft as default};
