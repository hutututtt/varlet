import{u as x}from"./provide.88a0ac0b.js";import{n as ee,i as ae}from"./elements.5ea58f07.js";import{t as A,c as te,a as b,i as ne}from"./components.8c0c409a.js";import{d as le,a as p,b as oe,w as re,o as se,C as ue,_ as ie,e as k,f as I,k as ve,H as W,G as C,J as q,F as ce,ac as de,j as fe}from"./elevation.ab53b24c.js";const he={loop:{type:Boolean,default:!0},autoplay:{type:[String,Number]},duration:{type:[String,Number],default:300},initialIndex:{type:[String,Number],default:0},indicator:{type:Boolean,default:!0},indicatorColor:{type:String},vertical:{type:Boolean,default:!1},touchable:{type:Boolean,default:!0},onChange:{type:Function}};const me=250,pe=20,{n:Te,classes:we}=te("swipe"),ge=le({name:"VarSwipe",props:he,setup(e){const v=p(null),s=p(0),P=oe(()=>e.vertical),i=p(0),r=p(0),u=p(!1),l=p(0),{swipeItems:$,bindSwipeItems:H,length:n}=x();let T=!1,z=-1,w,g,F,f,h;const c=a=>$.find(({index:t})=>t.value===a),R=()=>{!e.loop||(r.value>=0&&c(n.value-1).setTranslate(-i.value),r.value<=-(i.value-s.value)&&c(0).setTranslate(i.value),r.value>-(i.value-s.value)&&r.value<0&&(c(n.value-1).setTranslate(0),c(0).setTranslate(0)))},E=a=>{const t=ne(a)?a:Math.floor((r.value-s.value/2)/-s.value),{loop:o}=e;return t<=-1?o?-1:0:t>=n.value?o?n.value:n.value-1:t},j=a=>{const{loop:t}=e;return a===-1?t?n.value-1:0:a===n.value?t?0:n.value-1:a},N=a=>{const{loop:t}=e;return a<0?t?n.value-1:0:a>n.value-1?t?0:n.value-1:a},D=a=>{const t=r.value>=s.value,o=r.value<=-i.value,d=0,m=-(i.value-s.value);u.value=!0,(t||o)&&(u.value=!0,r.value=o?d:m,c(0).setTranslate(0),c(n.value-1).setTranslate(0)),ee(()=>{u.value=!1,b(a)})},G=()=>{l.value=N(A(e.initialIndex))},B=()=>{const{autoplay:a}=e;!a||n.value<=1||(Y(),z=window.setTimeout(()=>{M(),B()},A(a)))},Y=()=>{z&&clearTimeout(z)},J=(a,t)=>{if(a>t&&a>10)return"horizontal";if(t>a&&t>10)return"vertical"},U=a=>{if(n.value<=1||!e.touchable)return;const{clientX:t,clientY:o}=a.touches[0];w=t,g=o,F=performance.now(),T=!0,Y(),D(()=>{u.value=!0})},K=a=>{const{touchable:t,vertical:o}=e;if(!T||!t)return;const{clientX:d,clientY:m}=a.touches[0],S=Math.abs(d-w),X=Math.abs(m-g);if(J(S,X)===(o?"vertical":"horizontal")){a.preventDefault();const Z=f!==void 0?d-f:0,_=h!==void 0?m-h:0;f=d,h=m,r.value+=o?_:Z,R()}},O=()=>{if(!T)return;const{vertical:a,onChange:t}=e,o=a?h<g:f<w,d=Math.abs(a?g-h:w-f),S=performance.now()-F<=me&&d>=pe?E(o?l.value+1:l.value-1):E();T=!1,u.value=!1,f=void 0,h=void 0,r.value=S*-s.value;const X=l.value;l.value=j(S),B(),X!==l.value&&b(t,l.value)},y=()=>{u.value=!0,s.value=e.vertical?v.value.offsetHeight:v.value.offsetWidth,i.value=s.value*n.value,r.value=l.value*-s.value,$.forEach(a=>{a.setTranslate(0)}),B(),setTimeout(()=>{u.value=!1})},M=()=>{if(n.value<=1)return;const{loop:a,onChange:t}=e,o=l.value;l.value=N(o+1),b(t,l.value),D(()=>{if(o===n.value-1&&a){c(0).setTranslate(i.value),r.value=n.value*-s.value;return}o!==n.value-1&&(r.value=l.value*-s.value)})},V=()=>{if(n.value<=1)return;const{loop:a,onChange:t}=e,o=l.value;l.value=N(o-1),b(t,l.value),D(()=>{if(o===0&&a){c(n.value-1).setTranslate(-i.value),r.value=s.value;return}o!==0&&(r.value=l.value*-s.value)})},Q=a=>{if(n.value<=1||a===l.value)return;a=a<0?0:a,a=a>=n.value?n.value:a;const t=a>l.value?M:V;Array.from({length:Math.abs(a-l.value)}).forEach(t)};return H({size:s,vertical:P}),re(()=>n.value,async()=>{await ae(),G(),y()}),se(()=>{window.addEventListener("resize",y)}),ue(()=>{window.removeEventListener("resize",y),Y()}),{n:Te,classes:we,length:n,index:l,swipeEl:v,trackSize:i,translate:r,lockDuration:u,handleTouchstart:U,handleTouchmove:K,handleTouchend:O,next:M,prev:V,to:Q,resize:y,toNumber:A}}}),ye=["onClick"];function Se(e,v,s,P,i,r){return k(),I("div",{class:C(e.n()),ref:"swipeEl"},[ve("div",{class:C(e.classes(e.n("track"),[e.vertical,e.n("--vertical")])),style:q({width:e.vertical?void 0:`${e.trackSize}px`,height:e.vertical?`${e.trackSize}px`:void 0,transform:`translate${e.vertical?"Y":"X"}(${e.translate}px)`,transitionDuration:e.lockDuration?"0ms":`${e.toNumber(e.duration)}ms`}),onTouchstart:v[0]||(v[0]=(...u)=>e.handleTouchstart&&e.handleTouchstart(...u)),onTouchmove:v[1]||(v[1]=(...u)=>e.handleTouchmove&&e.handleTouchmove(...u)),onTouchend:v[2]||(v[2]=(...u)=>e.handleTouchend&&e.handleTouchend(...u))},[W(e.$slots,"default")],38),W(e.$slots,"indicator",{index:e.index,length:e.length},()=>[e.indicator&&e.length?(k(),I("div",{key:0,class:C(e.classes(e.n("indicators"),[e.vertical,e.n("--indicators-vertical")]))},[(k(!0),I(ce,null,de(e.length,(u,l)=>(k(),I("div",{class:C(e.classes(e.n("indicator"),[e.index===l,e.n("--indicator-active")],[e.vertical,e.n("--indicator-vertical")])),style:q({background:e.indicatorColor}),key:u,onClick:$=>e.to(l)},null,14,ye))),128))],2)):fe("v-if",!0)])],2)}var L=ie(ge,[["render",Se]]);L.install=function(e){e.component(L.name,L)};export{L as S,he as p};
