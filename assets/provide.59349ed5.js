import{d as m,_ as l,e as r,h as d,O as c,f as p,k as t,M as o,G as a,j as u,P as f}from"./elevation.ab53b24c.js";import{c as _,h as g,j as F}from"./components.8c0c409a.js";const h={errorMessage:{type:String,default:""},maxlengthText:{type:String,default:""}};const{n:v}=_("form-details"),M=m({name:"VarFormDetails",props:h,setup:()=>({n:v})});function y(e,s,I,B,C,D){return r(),d(f,{name:e.n()},{default:c(()=>[e.errorMessage||e.maxlengthText?(r(),p("div",{key:0,class:a(e.n())},[t("div",{class:a(e.n("message"))},o(e.errorMessage),3),t("div",{class:a(e.n("length"))},o(e.maxlengthText),3)],2)):u("v-if",!0)]),_:1},8,["name"])}var n=l(M,[["render",y]]);n.install=function(e){e.component(n.name,n)};const i=Symbol("FORM_BIND_FORM_ITEM_KEY");function k(){const{bindParent:e,parentProvider:s}=g(i);return{bindForm:e,form:s}}function E(){const{bindChildren:e,childProviders:s}=F(i);return{formItems:s,bindFormItems:e}}export{n as F,E as a,k as u};
