import{d as H,c as q,b as U}from"./components-02edd959.js";import{k as Q,j as Y}from"./elements-3526b86d.js";import{p as F}from"./shared-ed2007b2.js";import{d as Z,a as _,w as G,Z as z,_ as E,f as A,h as I,O as J,P as i,Q as a,aL as K,aM as W,N as X,ac as ee,az as te,q as o,S as l,ap as e,F as se,aA as x,M as $,al as oe,am as ae}from"./vue-router.esm-bundler-0d52b99f.js";import{S as ne}from"./index-fb0edaff.js";import{B as T}from"./index-abb10db4.js";import{R as le}from"./index-414542a6.js";import{d as ce}from"./index-59604d2c.js";import{u as re,c as ue,a as P,_ as ie,b as me}from"./index-aa3b5d97.js";import"./index-59c1057f.js";import"./index-c530d756.js";import"./zIndex-2017f19f.js";import"./index-fcb663bb.js";import"./lock-e6232335.js";import"./index-25f40206.js";/* empty css               */const de={time:{type:[String,Number],default:0},format:{type:String,default:"HH : mm : ss"},autoStart:{type:Boolean,default:!0},onEnd:H(),onChange:H()},{n:pe}=q("countdown"),M=1e3,N=60*M,b=60*N,B=24*b,fe=Z({name:"VarCountdown",props:de,setup(s){const m=_(0),d=_(!1),C=_(""),g=_(0),h=_(0),n=_({days:0,hours:0,minutes:0,seconds:0,milliseconds:0}),p=(t,y)=>{const c=Object.values(y),v=["DD","HH","mm","ss"],r=[24,60,60,1e3];if(v.forEach((f,w)=>{t.includes(f)?t=t.replace(f,F(`${c[w]}`,2,"0")):c[w+1]+=c[w]*r[w]}),t.includes("S")){const f=F(`${c[c.length-1]}`,3,"0");t.includes("SSS")?t=t.replace("SSS",f):t.includes("SS")?t=t.replace("SS",f.slice(0,2)):t=t.replace("S",f.slice(0,1))}return t},L=t=>{const y=Math.floor(t/B),c=Math.floor(t%B/b),v=Math.floor(t%b/N),r=Math.floor(t%N/M),f=Math.floor(t%M),w={days:y,hours:c,minutes:v,seconds:r,milliseconds:f};n.value=w,U(s.onChange,n.value),C.value=p(s.format,w)},k=()=>{const{time:t,onEnd:y,autoStart:c}=s,v=performance.now();m.value||(m.value=v+z(t));let r=m.value-v;if(r<0&&(r=0),h.value=r,L(r),r===0){U(y);return}(c||d.value)&&(g.value=Y(k))},O=()=>{d.value||(d.value=!0,m.value=Date.now()+(h.value||z(s.time)),k())},j=()=>{d.value=!1},D=()=>{m.value=0,d.value=!1,Q(g.value),k()};return G(()=>s.time,()=>D(),{immediate:!0}),{showTime:C,timeData:n,n:pe,start:O,pause:j,reset:D}}});function _e(s,m,d,C,g,h){return A(),I("div",{class:X(s.n())},[J(s.$slots,"default",K(W(s.timeData)),()=>[i(a(s.showTime),1)])],2)}const S=E(fe,[["render",_e]]);S.install=function(s){s.component(S.name,S)};const Se={basicUsage:"基本使用",customFormat:"自定义格式",showMillisecond:"显示毫秒",customStyle:"自定义样式",manualControl:"手动控制",format:"DD 天 HH 时 mm 分 ss 秒",startText:"开始",pauseText:"暂停",resetText:"重置"},he={basicUsage:"Basic Usage",customFormat:"Custom Format",showMillisecond:"Show Millisecond",customStyle:"Custom Style",manualControl:"Manual Control",format:"DD Day, HH:mm:ss",startText:"Start",pauseText:"Pause",resetText:"Reset"},{add:R,use:we,pack:u,packs:Le,merge:Oe}=re(),ve=s=>{ue(s),we(s)};P("zh-CN",ie);P("en-US",me);R("zh-CN",Se);R("en-US",he);const V=s=>(oe("data-v-41a60976"),s=s(),ae(),s),Ce={class:"countdown-example-block"},ge=V(()=>$("span",{class:"countdown-example-colon"},":",-1)),ye={class:"countdown-example-block"},xe=V(()=>$("span",{class:"countdown-example-colon"},":",-1)),$e={class:"countdown-example-block"},ke={setup(s){const m=_(null),d=_(3e3);function C(){ne.info("end!")}function g(){console.log("change")}return ee(ve),te(ce),(h,n)=>(A(),I(se,null,[o(e(x),null,{default:l(()=>[i(a(e(u).basicUsage),1)]),_:1}),o(e(S),{time:"108000000"}),o(e(x),null,{default:l(()=>[i(a(e(u).customFormat),1)]),_:1}),o(e(S),{time:"108000000",format:e(u).format},null,8,["format"]),o(e(x),null,{default:l(()=>[i(a(e(u).showMillisecond),1)]),_:1}),o(e(S),{time:"108000000",format:"HH : mm : ss : SS"}),o(e(x),null,{default:l(()=>[i(a(e(u).customStyle),1)]),_:1}),o(e(S),{time:"108000000"},{default:l(p=>[$("span",Ce,a(p.hours),1),ge,$("span",ye,a(p.minutes),1),xe,$("span",$e,a(p.seconds),1)]),_:1}),o(e(x),null,{default:l(()=>[i(a(e(u).manualControl),1)]),_:1}),o(e(S),{time:d.value,ref_key:"countdown",ref:m,"auto-start":!1,format:"ss : SSS",onEnd:C,onChange:g},null,8,["time"]),o(e(le),{justify:"space-between",align:"center",style:{"margin-top":"10px"}},{default:l(()=>[o(e(T),{type:"primary",onClick:n[0]||(n[0]=p=>h.$refs.countdown.start())},{default:l(()=>[i(a(e(u).startText),1)]),_:1}),o(e(T),{onClick:n[1]||(n[1]=p=>h.$refs.countdown.pause())},{default:l(()=>[i(a(e(u).pauseText),1)]),_:1}),o(e(T),{onClick:n[2]||(n[2]=p=>h.$refs.countdown.reset())},{default:l(()=>[i(a(e(u).resetText),1)]),_:1})]),_:1})],64))}},je=E(ke,[["__scopeId","data-v-41a60976"]]);export{je as default};
