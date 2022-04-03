import{R as E}from"./index.f8492b74.js";import{L as b}from"./index.090a9565.js";import{t as U}from"./elements.92736b4e.js";import{c as j,h}from"./components.40fda177.js";import{_ as S}from"./elevation.229458c1.js";import{d as R,f as L,w as k,o as m,c as v,p as y,n as _,e as z,i as t,j as l,F as N,m as u,t as c,a as n,Z as B,_ as I}from"./vendor.49f89f0d.js";import{A as $}from"./AppType.6775b756.js";import{R as V}from"./index.13065054.js";import{w as D}from"./utils.3a4595f4.js";import{u as A,a as C,_ as M,b as T,c as Z}from"./en-US.628e0d34.js";import"./index.48ee5316.js";import"./shared.506a394a.js";function q(e){return["fill","contain","cover","none","scale-down"].includes(e)}const G={src:{type:String},fit:{type:String,validator:q,default:"fill"},alt:{type:String},width:{type:[String,Number]},height:{type:[String,Number]},radius:{type:[String,Number],default:0},loading:{type:String},error:{type:String},lazy:{type:Boolean,default:!1},ripple:{type:Boolean,default:!1},block:{type:Boolean,default:!0},onClick:{type:Function},onLoad:{type:Function},onError:{type:Function}};const{n:H,classes:J}=j("image"),K=R({name:"VarImage",directives:{Lazy:b,Ripple:E},props:G,setup(e){return{n:H,classes:J,toSizeUnit:U,handleLoad:r=>{const d=r.currentTarget,{lazy:p,onLoad:s,onError:i}=e;p?(d._lazy.state==="success"&&h(s,r),d._lazy.state==="error"&&h(i,r)):h(s,r)},handleError:r=>{const{lazy:d,onError:p}=e;!d&&h(p,r)}}}}),O=["alt","lazy-error","lazy-loading"],P=["alt","src"];function Q(e,a,w,r,d,p){const s=L("lazy"),i=L("ripple");return k((m(),v("div",{class:y(e.classes(e.n(),"var--box",[!e.block,"var--inline-block"])),style:_({width:e.toSizeUnit(e.width),height:e.toSizeUnit(e.height),"border-radius":e.toSizeUnit(e.radius)})},[e.lazy?k((m(),v("img",{key:0,class:y(e.n("image")),alt:e.alt,"lazy-error":e.error,"lazy-loading":e.loading,style:_({objectFit:e.fit}),onLoad:a[0]||(a[0]=(...o)=>e.handleLoad&&e.handleLoad(...o)),onError:a[1]||(a[1]=(...o)=>e.handleError&&e.handleError(...o)),onClick:a[2]||(a[2]=(...o)=>e.onClick&&e.onClick(...o))},null,46,O)),[[s,e.src]]):(m(),v("img",{key:1,class:y(e.n("image")),alt:e.alt,style:_({objectFit:e.fit}),src:e.src,onLoad:a[3]||(a[3]=(...o)=>e.handleLoad&&e.handleLoad(...o)),onError:a[4]||(a[4]=(...o)=>e.handleError&&e.handleError(...o)),onClick:a[5]||(a[5]=(...o)=>e.onClick&&e.onClick(...o))},null,46,P))],6)),[[i,{disabled:!e.ripple}]])}var f=S(K,[["render",Q]]);f.install=function(e){e.component(f.name,f)};var W={basicUsage:"\u57FA\u672C\u4F7F\u7528",fitMode:"\u586B\u5145\u6A21\u5F0F",setRadius:"\u8BBE\u7F6E\u5706\u89D2",useRipple:"\u5F00\u542F\u6C34\u6CE2",useLazyLoad:"\u5F00\u542F\u61D2\u52A0\u8F7D"},X={basicUsage:"Basic Usage",fitMode:"Fit Mode",setRadius:"Set Radius",useRipple:"Use Ripple",useLazyLoad:"Use LazyLoad"};const{add:F,use:Y,pack:x,packs:Ce,merge:Fe}=A(),ee=e=>{Z(e),Y(e)};C("zh-CN",M);C("en-US",T);F("zh-CN",W);F("en-US",X);const te={name:"ImageExample",components:{VarImage:f,VarRow:V,AppType:$},setup(){return D(ee),{pack:x}}},g=e=>(B("data-v-741fe41e"),e=e(),I(),e),ae={class:"fit-item"},ie=g(()=>n("div",null,"fill",-1)),oe={class:"fit-item"},re=g(()=>n("div",null,"cover",-1)),se={class:"fit-item"},ne=g(()=>n("div",null,"contain",-1)),le={class:"fit-item"},de=g(()=>n("div",null,"none",-1)),pe={class:"fit-item"},ue=g(()=>n("div",null,"scale-down",-1));function ce(e,a,w,r,d,p){const s=z("app-type"),i=z("var-image"),o=z("var-row");return m(),v(N,null,[t(s,null,{default:l(()=>[u(c(r.pack.basicUsage),1)]),_:1}),t(i,{src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),t(s,null,{default:l(()=>[u(c(r.pack.fitMode),1)]),_:1}),t(o,null,{default:l(()=>[n("div",ae,[t(i,{width:"85px",height:"85px",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),ie]),n("div",oe,[t(i,{width:"85px",height:"85px",fit:"cover",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),re]),n("div",se,[t(i,{width:"85px",height:"85px",fit:"contain",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),ne]),n("div",le,[t(i,{width:"85px",height:"85px",fit:"none",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),de]),n("div",pe,[t(i,{width:"85px",height:"85px",fit:"scale-down",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),ue])]),_:1}),t(s,null,{default:l(()=>[u(c(r.pack.setRadius),1)]),_:1}),t(o,null,{default:l(()=>[t(i,{width:"85px",height:"85px",fit:"cover",radius:10,src:"https://varlet.gitee.io/varlet-ui/cat.jpg",style:{"margin-right":"10px"}}),t(i,{width:"85px",height:"85px",fit:"cover",radius:"50%",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"})]),_:1}),t(s,null,{default:l(()=>[u(c(r.pack.useRipple),1)]),_:1}),t(i,{ripple:"",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),t(s,null,{default:l(()=>[u(c(r.pack.useLazyLoad),1)]),_:1}),t(i,{lazy:"",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"})],64)}var Ee=S(te,[["render",ce],["__scopeId","data-v-741fe41e"]]);export{Ee as default};
