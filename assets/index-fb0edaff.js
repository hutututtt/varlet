import{d as P,a as Y,b as z,w as I,o as F,_,p as h,D as H,H as K,f as y,h as Z,M as S,N as f,O as g,P as B,Q as q,i as w,j as N,R as V,q as b,S as C,m as O,E as Q,T as W,r as E,V as J,W as X,Y as x,Z as D,C as ee}from"./vue-router.esm-bundler-0d52b99f.js";import{p as m,L as ne}from"./index-59c1057f.js";import{I as oe}from"./index-c530d756.js";import{u as te}from"./zIndex-2017f19f.js";import{p as v,d as p,b as c,c as U,g as ae,m as se}from"./components-02edd959.js";import{c as ie}from"./index-fcb663bb.js";import{u as re}from"./lock-e6232335.js";function le(e){return["top","center","bottom"].includes(e)}function ce(e){return A.includes(e)}const j={type:{type:String,validator:ce},position:{type:String,default:"top",validator:le},content:{type:String},contentClass:{type:String},duration:{type:Number,default:3e3},vertical:{type:Boolean,default:!1},loadingType:v(m,"type"),loadingSize:v(m,"size"),loadingRadius:v(m,"radius"),loadingColor:{...v(m,"color"),default:"currentColor"},lockScroll:{type:Boolean,default:!1},show:{type:Boolean,default:!1},teleport:{type:String,default:"body"},forbidClick:{type:Boolean,default:!1},onOpen:p(),onOpened:p(),onClose:p(),onClosed:p(),"onUpdate:show":p(),_update:{type:String}},{n:de,classes:ue}=U("snackbar"),pe={success:"checkbox-marked-circle",warning:"warning",info:"information",error:"error",loading:""},fe=P({name:"VarSnackbarCore",components:{VarLoading:ne,VarIcon:oe},props:j,setup(e){const o=Y(null),{zIndex:n}=te(()=>e.show,1);re(()=>e.show,()=>e.lockScroll);const s=z(()=>e.type==="loading"||e.forbidClick),t=z(()=>e.type?pe[e.type]:""),r=()=>{o.value=setTimeout(()=>{e.type!=="loading"&&c(e["onUpdate:show"],!1)},e.duration)};return I(()=>e.show,l=>{l?(c(e.onOpen),r()):l===!1&&(clearTimeout(o.value),c(e.onClose))}),I(()=>e._update,()=>{clearTimeout(o.value),r()}),F(()=>{e.show&&(c(e.onOpen),r())}),{SNACKBAR_TYPE:A,n:de,classes:ue,zIndex:n,iconName:t,isForbidClick:s}}});function me(e,o,n,s,t,r){const l=h("var-icon"),k=h("var-loading");return H((y(),Z("div",{class:f(e.n()),style:V({pointerEvents:e.isForbidClick?"auto":"none",zIndex:e.zIndex})},[S("div",{class:f(e.classes(e.n("wrapper"),e.n(`wrapper-${e.position}`),e.n("$-elevation--4"),[e.vertical,e.n("vertical")],[e.type&&e.SNACKBAR_TYPE.includes(e.type),e.n(`wrapper-${e.type}`)])),style:V({zIndex:e.zIndex})},[S("div",{class:f([e.n("content"),e.contentClass])},[g(e.$slots,"default",{},()=>[B(q(e.content),1)])],2),S("div",{class:f(e.n("action"))},[e.iconName?(y(),w(l,{key:0,name:e.iconName},null,8,["name"])):N("",!0),e.type==="loading"?(y(),w(k,{key:1,type:e.loadingType,size:e.loadingSize,color:e.loadingColor,radius:e.loadingRadius},null,8,["type","size","color","radius"])):N("",!0),g(e.$slots,"action")],2)],6)],6)),[[K,e.show]])}const M=_(fe,[["render",me]]);const{n:ve}=U("snackbar"),ye=P({name:"VarSnackbar",components:{VarSnackbarCore:M},props:j,setup(){const{disabled:e}=ae();return{n:ve,disabled:e}}});function ge(e,o,n,s,t,r){const l=h("var-snackbar-core");return y(),w(W,{to:e.teleport,disabled:e.disabled},[b(Q,{name:`${e.n()}-fade`,onAfterEnter:e.onOpened,onAfterLeave:e.onClosed},{default:C(()=>[b(l,O(e.$props,{class:e.n("transition")}),{action:C(()=>[g(e.$slots,"action")]),default:C(()=>[g(e.$slots,"default",{},()=>[B(q(e.content),1)])]),_:3},16,["class"])]),_:3},8,["name","onAfterEnter","onAfterLeave"])],8,["to","disabled"])}const d=_(ye,[["render",ge]]);function be(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!ee(e)}const A=["loading","success","warning","info","error"];let L=0,$=!1,R,u=!1;const G={type:void 0,content:"",position:"top",duration:3e3,vertical:!1,contentClass:void 0,loadingType:"circle",loadingSize:"normal",lockScroll:!1,teleport:"body",forbidClick:!1,onOpen:()=>{},onOpened:()=>{},onClose:()=>{},onClosed:()=>{}};let a=E([]),T=G;const ke={name:"var-snackbar-fade",tag:"div",class:"var-transition-group"},Se={setup(){return()=>{const e=a.map(({id:o,reactiveSnackOptions:n,_update:s})=>{const t=document.querySelector(".var-transition-group");n.forbidClick||n.type==="loading"?t.classList.add("var-pointer-auto"):t.classList.remove("var-pointer-auto"),u&&(n.position="top");const l={position:u?"relative":"absolute",...Ee(n.position)};return b(M,O(n,{key:o,style:l,"data-id":o,_update:s,show:n.show,"onUpdate:show":k=>n.show=k}),null)});return b(x,O(ke,{style:{zIndex:ie.zIndex},onAfterEnter:Ce,onAfterLeave:he}),be(e)?e:{default:()=>[e]})}}},i=function(e){const o=Oe(e),n=E({...T,...o});n.show=!0,$||($=!0,R=se(Se).unmountInstance);const{length:s}=a,t={id:L++,reactiveSnackOptions:n};if(s===0||u)we(t);else{const r=`update-${L}`;$e(n,r)}return{clear(){!u&&a.length?a[0].reactiveSnackOptions.show=!1:n.show=!1}}};A.forEach(e=>{i[e]=o=>(J(o)?o.type=e:o={content:o,type:e},i(o))});i.install=function(e){e.component(d.name,d)};i.allowMultiple=function(e=!1){e!==u&&(a.forEach(o=>{o.reactiveSnackOptions.show=!1}),u=e)};i.clear=function(){a.forEach(e=>{e.reactiveSnackOptions.show=!1})};i.setDefaultOptions=function(e){T=e};i.resetDefaultOptions=function(){T=G};i.Component=d;function Ce(e){const o=e.getAttribute("data-id"),n=a.find(s=>s.id===D(o));n&&c(n.reactiveSnackOptions.onOpened)}function he(e){e.parentElement&&e.parentElement.classList.remove("var-pointer-auto");const o=e.getAttribute("data-id"),n=a.find(t=>t.id===D(o));n&&(n.animationEnd=!0,c(n.reactiveSnackOptions.onClosed)),a.every(t=>t.animationEnd)&&(c(R),a=E([]),$=!1)}function we(e){a.push(e)}function Oe(e={}){return X(e)?{content:e}:e}function $e(e,o){const[n]=a;n.reactiveSnackOptions={...n.reactiveSnackOptions,...e},n._update=o}function Ee(e="top"){return e==="bottom"?{[e]:"5%"}:{top:e==="top"?"5%":"45%"}}d.install=function(e){e.component(d.name,d)};const Pe=i;export{Pe as S};
