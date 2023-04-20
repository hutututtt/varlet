import{d as j,c as B,a as q,u as O}from"./components-b798c95f.js";import{u as Q}from"./useChildren-7008b9d6.js";import{d as V,b as h,_ as U,f as v,h as y,O as D,N as d,R as I,a as k,w as W,p as G,M as g,i as b,Q as s,j as H,aa as J,aC as X,q as i,S as a,ap as t,F as Z,P as o,aD as N}from"./vue-router-0bbd6486.js";import{e as x}from"./logger-525ef361.js";import{I as ee}from"./index-033b4f4e.js";import{B as te}from"./index-0f0f1028.js";import{d as ne}from"./index-dd768cde.js";import{u as ie,c as ae,a as E,_ as se,b as oe}from"./index-b02e49a3.js";import"./elements-66cdcec2.js";import"./shared-39a089ed.js";import"./index-9e1b28d2.js";import"./index-727aa21f.js";/* empty css               */import"./index-cddd6159.js";import"./index-fbb0fcba.js";import"./index-5cbdb505.js";const w=Symbol("STEPS_BIND_STEP_KEY");function re(){const{bindChildren:e,length:n,childProviders:l}=Q(w);return{length:n,step:l,bindStep:e}}function ce(e){return["horizontal","vertical"].includes(e)}const le={active:{type:[String,Number],default:0},direction:{type:String,default:"horizontal",validator:ce},activeColor:{type:String},inactiveColor:{type:String},onClickStep:j()},{n:ue}=B("steps"),de=V({name:"VarSteps",props:le,setup(e){const n=h(()=>e.active),l=h(()=>e.activeColor),u=h(()=>e.inactiveColor),f=h(()=>e.direction),{length:C,bindStep:p}=re();return p({active:n,length:C,direction:f,activeColor:l,inactiveColor:u,clickStep:$=>{q(e.onClickStep,$)}}),{n:ue}}});function pe(e,n,l,u,f,C){return v(),y("div",{class:d(e.n()),style:I({flexDirection:e.direction==="horizontal"?"row":"column"})},[D(e.$slots,"default")],6)}const S=U(de,[["render",pe]]);S.install=function(e){e.component(S.name,S)};const ve={activeIcon:{type:String,default:"check"},currentIcon:{type:String},inactiveIcon:{type:String}};function fe(){const{parentProvider:e,index:n,bindParent:l}=O(w);return l||x("Steps","<step/> must in <steps>"),{index:n,steps:e,bindSteps:l}}const{n:me,classes:he}=B("step"),Se=V({name:"VarStep",components:{VarIcon:ee},props:ve,setup(){const e=k(null),n=k(""),l=k(!1),{index:u,steps:f,bindSteps:C}=fe(),{active:p,length:m,activeColor:P,inactiveColor:$,direction:z,clickStep:T}=f,L=h(()=>p.value===u.value),M=h(()=>u.value!==-1&&p.value>u.value),R={index:u},F=()=>T(u.value),K=_=>{z.value==="horizontal"&&(e.value=_)};return C(R),W(m,_=>{if(l.value=_-1===u.value,e.value){const Y=e.value.offsetWidth/2-14;n.value=`0 -${Y}px`}}),{n:me,classes:he,main:e,index:u,isActive:M,isCurrent:L,direction:z,lineMargin:n,activeColor:P,inactiveColor:$,isLastChild:l,click:F,getRef:K}}});const Ce={key:3};function ye(e,n,l,u,f,C){const p=G("var-icon");return v(),y("div",{class:d(e.n())},[g("div",{class:d(e.n(e.direction))},[g("div",{class:d(e.n(`${e.direction}-main`)),ref:e.getRef},[g("div",{class:d(e.classes(e.n(`${e.direction}-tag`),[e.isActive||e.isCurrent,e.n(`${e.direction}-tag--active`)])),style:I({backgroundColor:e.isActive||e.isCurrent?e.activeColor:e.inactiveColor}),onClick:n[0]||(n[0]=(...m)=>e.click&&e.click(...m))},[e.isActive?(v(),b(p,{key:0,class:d(e.n("icon")),"var-step-cover":"",name:e.activeIcon},null,8,["class","name"])):e.isCurrent&&e.currentIcon?(v(),b(p,{key:1,class:d(e.n("icon")),"var-step-cover":"",name:e.currentIcon},null,8,["class","name"])):e.inactiveIcon?(v(),b(p,{key:2,class:d(e.n("icon")),"var-step-cover":"",name:e.inactiveIcon},null,8,["class","name"])):(v(),y("span",Ce,s(e.index+1),1))],6),g("div",{class:d(e.classes(e.n(`${e.direction}-content`),[e.isActive||e.isCurrent,e.n(`${e.direction}-content--active`)])),onClick:n[1]||(n[1]=(...m)=>e.click&&e.click(...m))},[D(e.$slots,"default")],2)],2),e.isLastChild?H("",!0):(v(),y("div",{key:0,class:d(e.n(`${e.direction}-line`)),style:I({margin:e.lineMargin})},null,6))],2)],2)}const c=U(Se,[["render",ye]]);c.install=function(e){e.component(c.name,c)};const ge={basicUsage:"基本使用",customStyle:"自定义样式",dynamicSteps:"动态步骤",vertical:"垂直模式",next:"下一步",first:"步骤1",second:"步骤2",third:"步骤3",fourth:"步骤4",fifth:"步骤5",placeholder:"改变step的数量",step:"步骤",text:"接下来..."},ke={basicUsage:"Basic Usage",customStyle:"Custom Style",dynamicSteps:"Dynamic Steps",vertical:"Vertical Mode",next:"next",first:"Step1",second:"Step2",third:"Step3",fourth:"Step4",fifth:"Step5",placeholder:"Change the number of steps",step:"Step",text:"do something..."},{add:A,use:$e,pack:r,packs:Fe,merge:Ke}=ie(),_e=e=>{ae(e),$e(e)};E("zh-CN",se);E("en-US",oe);A("zh-CN",ge);A("en-US",ke);const Ye={__name:"index",setup(e){const n=k(0);function l(){n.value=(n.value+1)%4}return J(_e),X(ne),(u,f)=>(v(),y(Z,null,[i(t(N),null,{default:a(()=>[o(s(t(r).basicUsage),1)]),_:1}),i(t(S),{active:n.value},{default:a(()=>[i(t(c),null,{default:a(()=>[o(s(t(r).first),1)]),_:1}),i(t(c),null,{default:a(()=>[o(s(t(r).second),1)]),_:1}),i(t(c),null,{default:a(()=>[o(s(t(r).third),1)]),_:1}),i(t(c),null,{default:a(()=>[o(s(t(r).fourth),1)]),_:1})]),_:1},8,["active"]),i(t(N),null,{default:a(()=>[o(s(t(r).customStyle),1)]),_:1}),i(t(S),{active:n.value,"active-color":"#f44336","inactive-color":"#e99eb4"},{default:a(()=>[i(t(c),{"active-icon":"heart","current-icon":"fire","inactive-icon":"heart-half-full"},{default:a(()=>[o(s(t(r).first),1)]),_:1}),i(t(c),{"active-icon":"heart","current-icon":"fire","inactive-icon":"heart-half-full"},{default:a(()=>[o(s(t(r).second),1)]),_:1}),i(t(c),{"active-icon":"heart","current-icon":"fire","inactive-icon":"heart-half-full"},{default:a(()=>[o(s(t(r).third),1)]),_:1}),i(t(c),{"active-icon":"heart","current-icon":"fire","inactive-icon":"heart-half-full"},{default:a(()=>[o(s(t(r).fourth),1)]),_:1})]),_:1},8,["active"]),i(t(N),null,{default:a(()=>[o(s(t(r).vertical),1)]),_:1}),i(t(S),{direction:"vertical",active:n.value},{default:a(()=>[i(t(c),null,{default:a(()=>[o(s(t(r).first),1)]),_:1}),i(t(c),null,{default:a(()=>[o(s(t(r).second),1)]),_:1}),i(t(c),null,{default:a(()=>[o(s(t(r).third),1)]),_:1}),i(t(c),null,{default:a(()=>[o(s(t(r).fourth),1)]),_:1})]),_:1},8,["active"]),i(t(te),{type:"primary",block:"",onClick:l,style:{"margin-top":"20px"}},{default:a(()=>[o(s(t(r).next),1)]),_:1})],64))}};export{Ye as default};
