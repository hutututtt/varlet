import{c as g,e as $}from"./components.1dfa4f07.js";import{m as S}from"./elements.e9a3cb11.js";import{d as z,b,_ as h,f as s,h as i,H as n,J as m,k as r,l as d,K as l,F as o,ad as f,M as k,N as w}from"./elevation.b6664af0.js";function N(e){return["circle","wave","cube","rect","disappear"].includes(e)}function V(e){return["normal","mini","small","large"].includes(e)}const B={type:{type:String,default:"circle",validator:N},radius:{type:[String,Number]},size:{type:String,default:"normal",validator:V},color:{type:String,default:"currentColor"},description:{type:String},loading:{type:Boolean,default:!1}};const{n:C,classes:L}=g("loading"),D=z({name:"VarLoading",props:B,setup(e,{slots:u}){const p={wave:5,cube:4,rect:8,disappear:3},c=b(()=>$(u.default)?e.loading:!0);return{n:C,classes:L,multiplySizeUnit:S,loadingTypeDict:p,isShow:c}}}),T=d("svg",{viewBox:"25 25 50 50"},[d("circle",{cx:"50",cy:"50",r:"20",fill:"none"})],-1),U=[T];function F(e,u,p,c,E,H){return s(),i("div",{class:n(e.n())},[e.$slots.default?(s(),i("div",{key:0,class:n(e.classes(e.n("content"),[e.loading,e.n("content--active")]))},[m(e.$slots,"default"),e.loading?(s(),i("div",{key:0,class:n(e.n("content-mask"))},null,2)):r("v-if",!0)],2)):r("v-if",!0),e.isShow?(s(),i("div",{key:1,class:n(e.classes("var--box",e.n("body"),[e.$slots.default,e.n("inside")]))},[e.type==="circle"?(s(),i("div",{key:0,class:n(e.n("circle"))},[d("span",{class:n(e.classes(e.n("circle-block"),e.n(`circle-block--${e.size}`))),style:l({width:e.multiplySizeUnit(e.radius,2),height:e.multiplySizeUnit(e.radius,2),color:e.color})},U,6)],2)):r("v-if",!0),(s(!0),i(o,null,f(e.loadingTypeDict,(v,a)=>(s(),i(o,{key:a},[e.type===a?(s(),i("div",{key:0,class:n(e.classes(e.n(a),e.n(`${a}--${e.size}`)))},[(s(!0),i(o,null,f(v,y=>(s(),i("div",{key:y+a,style:l({backgroundColor:e.color}),class:n(e.classes(e.n(`${a}-item`),e.n(`${a}-item--${e.size}`)))},null,6))),128))],2)):r("v-if",!0)],64))),128)),e.$slots.description||e.description?(s(),i("div",{key:1,class:n(e.classes(e.n("description"),e.n(`description--${e.size}`))),style:l({color:e.color})},[m(e.$slots,"description",{},()=>[k(w(e.description),1)])],6)):r("v-if",!0)],2)):r("v-if",!0)],2)}var t=h(D,[["render",F]]);t.install=function(e){e.component(t.name,t)};export{t as L,B as p};
