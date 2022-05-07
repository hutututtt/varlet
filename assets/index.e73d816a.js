import{A as d}from"./AppType.e18d39ce.js";import{B as o}from"./index.3142bd3e.js";import{B as C}from"./index.62bc3856.js";import{C as n}from"./index.a8784329.js";import{S as s}from"./index.a7cbb0ff.js";import{d as v}from"./index.5d153c96.js";import{u as y,a as m,_ as T,b as D,c as E}from"./en-US.20b89d07.js";import{a as w,b as x}from"./utils.969b6286.js";import{a as i,e as F,f as k,s as a,af as e,O as t,K as u,M as l}from"./elevation.ab53b24c.js";import"./index.a2cba232.js";import"./components.8c0c409a.js";import"./elements.5ea58f07.js";import"./index.2041b473.js";import"./index.e14d0f00.js";/* empty css               */import"./index.f1147541.js";var A={themeColorBadge:"\u4E3B\u9898\u8272\u5FBD\u6807",dotBadge:"\u5706\u70B9\u5FBD\u6807",customContentBadge:"\u81EA\u5B9A\u4E49\u5185\u5BB9\u6807\u7B7E",maximum:"\u6700\u5927\u503C",differentPositioningBadges:"\u4E0D\u540C\u5B9A\u4F4D\u5FBD\u6807",upperRight:"\u53F3\u4E0A",lowerRight:"\u53F3\u4E0B",upperLeft:"\u5DE6\u4E0A",lowerLeft:"\u5DE6\u4E0B",whetherToDisplayTheBadge:"\u662F\u5426\u663E\u793A\u5FBD\u6807",clickToChangeTheState:"\u70B9\u51FB\u6539\u53D8\u72B6\u6001",badge:"\u5FBD\u6807",customBadgeColors:"\u81EA\u5B9A\u4E49\u5FBD\u6807\u989C\u8272",customBadgeIcons:"\u81EA\u5B9A\u4E49\u5FBD\u6807\u56FE\u6807"},L={themeColorBadge:"Theme Color Badge",dotBadge:"Dot Badge",customContentBadge:"Custom Content Badge",maximum:"Maximum",differentPositioningBadges:"Different Positioning Badges",upperRight:"The Upper Right",lowerRight:"The Lower Right",upperLeft:"The Upper Left",lowerLeft:"The Lower Left",whetherToDisplayTheBadge:"Whether To Display The Badge",clickToChangeTheState:"Click To Change The State",badge:"Badge",customBadgeColors:"Custom Badge Colors",customBadgeIcons:"Custom Badge Icons"};const{add:c,use:b,pack:r,packs:Y,merge:Z}=y(),S=p=>{E(p),b(p)};m("zh-CN",T);m("en-US",D);c("zh-CN",A);c("en-US",L);const R={class:"example"},ee={setup(p){const h=i(88),B=i(188),f=i(99),g=i(!1),_=()=>{g.value=!g.value};return w(S),x(v),(N,U)=>(F(),k("div",R,[a(e(d),null,{default:t(()=>[u(l(e(r).themeColorBadge),1)]),_:1}),a(e(s),null,{default:t(()=>[a(e(o)),a(e(o),{type:"primary"}),a(e(o),{type:"info"}),a(e(o),{type:"warning"}),a(e(o),{type:"success"}),a(e(o),{type:"danger"})]),_:1}),a(e(d),null,{default:t(()=>[u(l(e(r).dotBadge),1)]),_:1}),a(e(o),{dot:"",type:"danger"}),a(e(d),null,{default:t(()=>[u(l(e(r).customContentBadge),1)]),_:1}),a(e(s),null,{default:t(()=>[a(e(o),{type:"danger",value:"badge"}),a(e(o),{type:"danger",value:"hot"}),a(e(o),{type:"danger",value:"66"})]),_:1}),a(e(d),null,{default:t(()=>[u(l(e(r).maximum),1)]),_:1}),a(e(s),null,{default:t(()=>[a(e(o),{type:"danger",value:h.value,"max-value":f.value},null,8,["value","max-value"]),a(e(o),{type:"danger",value:B.value,"max-value":f.value},null,8,["value","max-value"])]),_:1}),a(e(d),null,{default:t(()=>[u(l(e(r).differentPositioningBadges),1)]),_:1}),a(e(s),{size:[8,20]},{default:t(()=>[a(e(o),{type:"danger",position:"right-top"},{default:t(()=>[a(e(n),{plain:"",round:!1,color:"#009688"},{default:t(()=>[u(l(e(r).upperRight),1)]),_:1})]),_:1}),a(e(o),{type:"danger",position:"right-bottom"},{default:t(()=>[a(e(n),{plain:"",round:!1,color:"#009688"},{default:t(()=>[u(l(e(r).lowerRight),1)]),_:1})]),_:1}),a(e(o),{type:"danger",position:"left-top"},{default:t(()=>[a(e(n),{plain:"",round:!1,color:"#009688"},{default:t(()=>[u(l(e(r).upperLeft),1)]),_:1})]),_:1}),a(e(o),{type:"danger",position:"left-bottom"},{default:t(()=>[a(e(n),{plain:"",round:!1,color:"#009688"},{default:t(()=>[u(l(e(r).lowerLeft),1)]),_:1})]),_:1})]),_:1}),a(e(d),null,{default:t(()=>[u(l(e(r).whetherToDisplayTheBadge),1)]),_:1}),a(e(C),{onClick:_},{default:t(()=>[u(l(e(r).clickToChangeTheState),1)]),_:1}),a(e(o),{type:"danger",position:"right-top",hidden:g.value},{default:t(()=>[a(e(n),{plain:"",round:!1,color:"#009688"},{default:t(()=>[u(l(e(r).badge),1)]),_:1})]),_:1},8,["hidden"]),a(e(d),null,{default:t(()=>[u(l(e(r).customBadgeColors),1)]),_:1}),a(e(o),{color:"#6200ea",position:"right-top"},{default:t(()=>[a(e(n),{plain:"",round:!1,color:"#009688"},{default:t(()=>[u(l(e(r).badge),1)]),_:1})]),_:1}),a(e(d),null,{default:t(()=>[u(l(e(r).customBadgeIcons),1)]),_:1}),a(e(o),{color:"#6200ea",position:"right-top",icon:"notebook"},{default:t(()=>[a(e(n),{plain:"",round:!1,color:"#009688"},{default:t(()=>[u(l(e(r).badge),1)]),_:1})]),_:1})]))}};export{ee as default};
