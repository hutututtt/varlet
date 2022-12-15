import{d as j,a as _,w as q,Z as B,_ as H,f as U,h as z,O as K,aK as Q,aL as Y,N as Z,P as i,Q as a,ac as G,ay as J,q as o,S as u,al as e,F as W,az as F,M as x,am as X,an as ee}from"./vue-router.esm-bundler.2ed3d3be.js";import{f as te,r as se}from"./elements.0bf810d9.js";import{c as oe,e as M}from"./components.b28276ef.js";import{p as b}from"./shared.f230d8d7.js";import{S as ae}from"./index.e05e970c.js";import{B as $}from"./index.8f7ae902.js";import{R as ne}from"./index.5d1920b9.js";import{d as ue}from"./index.43bb0831.js";import{u as le,a as I,_ as ce,b as re,c as ie}from"./index.ca255ec5.js";import"./index.adc7ecaf.js";import"./index.e5fcd4e2.js";import"./zIndex.aa6a2086.js";import"./index.e17ac177.js";import"./lock.2b2adf9d.js";import"./index.f2d45089.js";/* empty css               */const me={time:{type:[String,Number],default:0},format:{type:String,default:"HH : mm : ss"},autoStart:{type:Boolean,default:!0},onEnd:{type:Function},onChange:{type:Function}},{n:de}=oe("countdown"),T=1e3,k=60*T,E=60*k,A=24*E,pe=j({name:"VarCountdown",props:me,setup(s){const m=_(0),d=_(!1),C=_(""),y=_(0),h=_(0),n=_({days:0,hours:0,minutes:0,seconds:0,milliseconds:0}),p=(t,g)=>{const l=Object.values(g),v=["DD","HH","mm","ss"],c=[24,60,60,1e3];if(v.forEach((f,w)=>{t.includes(f)?t=t.replace(f,b(`${l[w]}`,2,"0")):l[w+1]+=l[w]*c[w]}),t.includes("S")){const f=b(`${l[l.length-1]}`,3,"0");t.includes("SSS")?t=t.replace("SSS",f):t.includes("SS")?t=t.replace("SS",f.slice(0,2)):t=t.replace("S",f.slice(0,1))}return t},O=t=>{const g=Math.floor(t/A),l=Math.floor(t%A/E),v=Math.floor(t%E/k),c=Math.floor(t%k/T),f=Math.floor(t%T),w={days:g,hours:l,minutes:v,seconds:c,milliseconds:f};n.value=w,M(s.onChange,n.value),C.value=p(s.format,w)},D=()=>{const{time:t,onEnd:g,autoStart:l}=s,v=Date.now();m.value||(m.value=v+B(t));let c=m.value-v;if(c<0&&(c=0),h.value=c,O(c),c===0){M(g);return}(l||d.value)&&(y.value=se(D))},P=()=>{d.value||(d.value=!0,m.value=Date.now()+(h.value||B(s.time)),D())},L=()=>{d.value=!1},N=()=>{m.value=0,d.value=!1,te(y.value),D()};return q(()=>s.time,()=>N(),{immediate:!0}),{showTime:C,timeData:n,n:de,start:P,pause:L,reset:N}}});function fe(s,m,d,C,y,h){return U(),z("div",{class:Z(s.n())},[K(s.$slots,"default",Q(Y(s.timeData)),()=>[i(a(s.showTime),1)])],2)}const S=H(pe,[["render",fe]]);S.install=function(s){s.component(S.name,S)};const _e={basicUsage:"\u57FA\u672C\u4F7F\u7528",customFormat:"\u81EA\u5B9A\u4E49\u683C\u5F0F",showMillisecond:"\u663E\u793A\u6BEB\u79D2",customStyle:"\u81EA\u5B9A\u4E49\u6837\u5F0F",manualControl:"\u624B\u52A8\u63A7\u5236",format:"DD \u5929 HH \u65F6 mm \u5206 ss \u79D2",startText:"\u5F00\u59CB",pauseText:"\u6682\u505C",resetText:"\u91CD\u7F6E"},Se={basicUsage:"Basic Usage",customFormat:"Custom Format",showMillisecond:"Show Millisecond",customStyle:"Custom Style",manualControl:"Manual Control",format:"DD Day, HH:mm:ss",startText:"Start",pauseText:"Pause",resetText:"Reset"},{add:R,use:he,pack:r,packs:Oe,merge:Pe}=le(),we=s=>{ie(s),he(s)};I("zh-CN",ce);I("en-US",re);R("zh-CN",_e);R("en-US",Se);const V=s=>(X("data-v-e3839fa5"),s=s(),ee(),s),ve={class:"countdown-example-block"},Ce=V(()=>x("span",{class:"countdown-example-colon"},":",-1)),ye={class:"countdown-example-block"},ge=V(()=>x("span",{class:"countdown-example-colon"},":",-1)),Fe={class:"countdown-example-block"},xe={setup(s){const m=_(null),d=_(3e3),C=()=>{ae.info("end!")},y=()=>{console.log("change")};return G(we),J(ue),(h,n)=>(U(),z(W,null,[o(e(F),null,{default:u(()=>[i(a(e(r).basicUsage),1)]),_:1}),o(e(S),{time:"108000000"}),o(e(F),null,{default:u(()=>[i(a(e(r).customFormat),1)]),_:1}),o(e(S),{time:"108000000",format:e(r).format},null,8,["format"]),o(e(F),null,{default:u(()=>[i(a(e(r).showMillisecond),1)]),_:1}),o(e(S),{time:"108000000",format:"HH : mm : ss : SS"}),o(e(F),null,{default:u(()=>[i(a(e(r).customStyle),1)]),_:1}),o(e(S),{time:"108000000"},{default:u(p=>[x("span",ve,a(p.hours),1),Ce,x("span",ye,a(p.minutes),1),ge,x("span",Fe,a(p.seconds),1)]),_:1}),o(e(F),null,{default:u(()=>[i(a(e(r).manualControl),1)]),_:1}),o(e(S),{time:d.value,ref_key:"countdown",ref:m,"auto-start":!1,format:"ss : SSS",onEnd:C,onChange:y},null,8,["time"]),o(e(ne),{justify:"space-between",align:"center",style:{"margin-top":"10px"}},{default:u(()=>[o(e($),{type:"primary",onClick:n[0]||(n[0]=p=>h.$refs.countdown.start())},{default:u(()=>[i(a(e(r).startText),1)]),_:1}),o(e($),{onClick:n[1]||(n[1]=p=>h.$refs.countdown.pause())},{default:u(()=>[i(a(e(r).pauseText),1)]),_:1}),o(e($),{onClick:n[2]||(n[2]=p=>h.$refs.countdown.reset())},{default:u(()=>[i(a(e(r).resetText),1)]),_:1})]),_:1})],64))}},Le=H(xe,[["__scopeId","data-v-e3839fa5"]]);export{Le as default};
