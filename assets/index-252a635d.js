import{d as C,e as H,i as F,c as I,a as P}from"./components-b798c95f.js";import{t as R,r as O,d as V,g as D}from"./elements-66cdcec2.js";import{d as U,a as o,b as v,w as Z,v as j,y as q,Z as A,_ as G,f as J,h as K,M as Q,O as X,N as T,R as $}from"./vue-router-0bbd6486.js";const Y={offsetTop:{type:[String,Number],default:0},zIndex:{type:[String,Number],default:10},cssMode:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},onScroll:C()},{n:_,classes:ee}=I("sticky"),oe=U({name:"VarSticky",props:Y,setup(e){const n=o(null),l=o(null),t=o(!1),r=o("0px"),f=o("0px"),b=o("auto"),h=o("auto"),x=o("auto"),y=o("auto"),k=v(()=>!e.disabled&&e.cssMode),W=v(()=>!e.disabled&&!e.cssMode&&t.value),i=v(()=>R(e.offsetTop));let s;const w=()=>{const{cssMode:a,disabled:L}=e;if(L)return;let u=0;if(s!==window){const{top:B}=s.getBoundingClientRect();u=B}const g=l.value,p=n.value,{top:N,left:E}=p.getBoundingClientRect(),M=N-u;return M<=i.value?(a||(b.value=`${p.offsetWidth}px`,h.value=`${p.offsetHeight}px`,r.value=`${u+i.value}px`,f.value=`${E}px`,x.value=`${g.offsetWidth}px`,y.value=`${g.offsetHeight}px`,t.value=!0),{offsetTop:i.value,isFixed:!0}):(t.value=!1,{offsetTop:M,isFixed:!1})},d=()=>{if(!s)return;const a=w();a&&P(e.onScroll,a.offsetTop,a.isFixed)},c=async()=>{t.value=!1,await O(),w()},z=async()=>{await V(),s=D(n.value),s!==window&&s.addEventListener("scroll",d),d()},S=()=>{s!==window&&s.removeEventListener("scroll",d)};return Z(()=>e.disabled,c),H(z),j(S),q(S),F(window,"scroll",d),F(window,"resize",c),{n:_,classes:ee,resize:c,stickyEl:n,wrapperEl:l,isFixed:t,offsetTop:i,fixedTop:r,fixedLeft:f,fixedWidth:b,fixedHeight:h,fixedWrapperWidth:x,fixedWrapperHeight:y,enableCSSMode:k,enableFixedMode:W,toNumber:A}}});function se(e,n,l,t,r,f){return J(),K("div",{class:T(e.classes(e.n(),[e.enableCSSMode,e.n("--css-mode")])),ref:"stickyEl",style:$({zIndex:e.toNumber(e.zIndex),top:e.enableCSSMode?`${e.offsetTop}px`:void 0,width:e.enableFixedMode?e.fixedWidth:void 0,height:e.enableFixedMode?e.fixedHeight:void 0})},[Q("div",{class:T(e.n("wrapper")),ref:"wrapperEl",style:$({zIndex:e.toNumber(e.zIndex),position:e.enableFixedMode?"fixed":void 0,width:e.enableFixedMode?e.fixedWrapperWidth:void 0,height:e.enableFixedMode?e.fixedWrapperHeight:void 0,left:e.enableFixedMode?e.fixedLeft:void 0,top:e.enableFixedMode?e.fixedTop:void 0})},[X(e.$slots,"default")],6)],6)}const m=G(oe,[["render",se]]);m.install=function(e){e.component(m.name,m)};export{m as S,Y as p};
