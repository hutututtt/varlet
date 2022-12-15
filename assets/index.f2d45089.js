import{c as h}from"./index.e17ac177.js";/* empty css               */import{s as b}from"./elements.0bf810d9.js";import{c as w}from"./components.b28276ef.js";const{n:f}=w("ripple"),m=250;function k(e){const{zIndex:t,position:o}=window.getComputedStyle(e);e.style.overflow="hidden",e.style.overflowX="hidden",e.style.overflowY="hidden",o==="static"&&(e.style.position="relative"),t==="auto"&&(e.style.zIndex="1")}function x(e,t){const{top:o,left:i}=e.getBoundingClientRect(),{clientWidth:s,clientHeight:n}=e,p=Math.sqrt(s**2+n**2)/2,c=p*2,r=t.touches[0].clientX-i,l=t.touches[0].clientY-o,a=(s-p*2)/2,d=(n-p*2)/2,u=r-p,R=l-p;return{x:u,y:R,centerX:a,centerY:d,size:c}}function y(e){const t=this._ripple;if(t.removeRipple(),t.disabled||t.tasker)return;const o=()=>{t.tasker=null;const{x:i,y:s,centerX:n,centerY:p,size:c}=x(this,e),r=document.createElement("div");r.classList.add(f()),r.style.opacity="0",r.style.transform=`translate(${i}px, ${s}px) scale3d(.3, .3, .3)`,r.style.width=`${c}px`,r.style.height=`${c}px`,t.color&&(r.style.backgroundColor=t.color),r.dataset.createdAt=String(performance.now()),k(this),this.appendChild(r),window.setTimeout(()=>{r.style.transform=`translate(${n}px, ${p}px) scale3d(1, 1, 1)`,r.style.opacity=".25"},20)};t.tasker=window.setTimeout(o,60)}function v(){const e=this._ripple,t=()=>{const o=this.querySelectorAll(`.${f()}`);if(!o.length)return;const i=o[o.length-1],s=m-performance.now()+Number(i.dataset.createdAt);setTimeout(()=>{i.style.opacity="0",setTimeout(()=>{var n;return(n=i.parentNode)==null?void 0:n.removeChild(i)},m)},s)};e.tasker?setTimeout(t,60):t()}function _(){const e=this._ripple;!b()||!e.touchmoveForbid||(e.tasker&&window.clearTimeout(e.tasker),e.tasker=null)}function E(e,t){var o,i,s;e._ripple={tasker:null,...(o=t.value)!=null?o:{},touchmoveForbid:(s=(i=t.value)==null?void 0:i.touchmoveForbid)!=null?s:h.touchmoveForbid,removeRipple:v.bind(e)},e.addEventListener("touchstart",y,{passive:!0}),e.addEventListener("touchmove",_,{passive:!0}),e.addEventListener("dragstart",v,{passive:!0}),document.addEventListener("touchend",e._ripple.removeRipple,{passive:!0}),document.addEventListener("touchcancel",e._ripple.removeRipple,{passive:!0})}function L(e){e.removeEventListener("touchstart",y),e.removeEventListener("touchmove",_),e.removeEventListener("dragstart",v),document.removeEventListener("touchend",e._ripple.removeRipple),document.removeEventListener("touchcancel",e._ripple.removeRipple)}function T(e,t){var s,n,p,c,r,l,a,d,u;const o={touchmoveForbid:(n=(s=t.value)==null?void 0:s.touchmoveForbid)!=null?n:h.touchmoveForbid,color:(p=t.value)==null?void 0:p.color,disabled:(c=t.value)==null?void 0:c.disabled};(o.touchmoveForbid!==((r=e._ripple)==null?void 0:r.touchmoveForbid)||o.color!==((l=e._ripple)==null?void 0:l.color)||o.disabled!==((a=e._ripple)==null?void 0:a.disabled))&&(e._ripple={tasker:o.disabled?null:(d=e._ripple)==null?void 0:d.tasker,removeRipple:(u=e._ripple)==null?void 0:u.removeRipple,...o})}const N={mounted:E,unmounted:L,updated:T,install(e){e.directive("ripple",this)}};export{N as R};
