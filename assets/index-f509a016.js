import{d as r}from"./index-36588e9f.js";import{d as Oe,c as se,b as J}from"./components-02edd959.js";import{B as Te}from"./index-abb10db4.js";import{I as at}from"./index-c530d756.js";import{d as pe,a as Y,b as E,Z as D,w as ve,_ as ye,p as oe,f as C,h as O,q as w,S as R,M as _,Q as b,E as he,N as z,r as Pe,F as fe,ai as Me,m as Ae,P as j,o as We,R as je,at as de,O as re,aL as rt,i as Be,j as st,ac as lt,az as it,ap as d,aA as ie}from"./vue-router.esm-bundler-0d52b99f.js";import{p as x,u as ut,c as ct,a as ze,_ as dt,b as mt}from"./index-aa3b5d97.js";import{n as vt}from"./elements-3526b86d.js";import{p as Le}from"./shared-ed2007b2.js";import{d as ht}from"./index-59604d2c.js";import"./index-25f40206.js";import"./index-fcb663bb.js";/* empty css               */import"./index-59c1057f.js";const Fe=function(e,a){a.prototype.isSameOrBefore=function(g,k){return this.isSame(g,k)||this.isBefore(g,k)}},He=function(e,a){a.prototype.isSameOrAfter=function(g,k){return this.isSame(g,k)||this.isAfter(g,k)}};function ft(e){return["date","month"].includes(e)}const be=[{index:"01"},{index:"02"},{index:"03"},{index:"04"},{index:"05"},{index:"06"},{index:"07"},{index:"08"},{index:"09"},{index:"10"},{index:"11"},{index:"12"}],me=[{index:"0"},{index:"1"},{index:"2"},{index:"3"},{index:"4"},{index:"5"},{index:"6"}],pt={modelValue:{type:[String,Array]},type:{type:String,default:"date",validator:ft},allowedDates:{type:Function},color:{type:String},headerColor:{type:String},elevation:{type:Boolean,default:!1},firstDayOfWeek:{type:[String,Number],default:0},min:{type:String},max:{type:String},showCurrent:{type:Boolean,default:!0},readonly:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},range:{type:Boolean,default:!1},touchable:{type:Boolean,default:!0},onPreview:Oe(),onChange:Oe(),"onUpdate:modelValue":Oe()},{n:yt}=se("picker-header"),kt=pe({name:"PanelHeader",components:{VarButton:Te,VarIcon:at},props:{date:{type:Object,required:!0},type:{type:String,default:"date"},disabled:{type:Object,required:!0}},emits:["check-panel","check-date"],setup(e,{emit:a}){const g=Y(!1),k=Y(0),y=E(()=>{var B;const{date:s,type:u}=e,{previewMonth:n,previewYear:i}=s;if(u==="month")return D(i)+k.value;const v=(B=x.value.datePickerMonthDict)==null?void 0:B[n.index].name;return x.value.lang==="zh-CN"?`${i} ${v}`:`${v} ${i}`}),V=s=>{s==="prev"&&e.disabled.left||s==="next"&&e.disabled.right||(a("check-date",s),g.value=s==="prev",k.value+=s==="prev"?-1:1)};return ve(()=>e.date,()=>{k.value=0}),{n:yt,reverse:g,showDate:y,checkDate:V}}});function gt(e,a,g,k,y,V){const s=oe("var-icon"),u=oe("var-button");return C(),O("div",{class:z(e.n())},[w(u,{round:"",text:"",style:{filter:"opacity(0.54)"},disabled:e.disabled.left,onClick:a[0]||(a[0]=n=>e.checkDate("prev"))},{default:R(()=>[w(s,{name:"chevron-left"})]),_:1},8,["disabled"]),_("div",{class:z(e.n("value")),onClick:a[1]||(a[1]=n=>e.$emit("check-panel"))},[w(he,{name:`var-date-picker${e.reverse?"-reverse":""}-translatex`},{default:R(()=>[(C(),O("div",{key:e.showDate},b(e.showDate),1))]),_:1},8,["name"])],2),w(u,{round:"",text:"",style:{filter:"opacity(0.54)"},disabled:e.disabled.right,onClick:a[2]||(a[2]=n=>e.checkDate("next"))},{default:R(()=>[w(s,{name:"chevron-right"})]),_:1},8,["disabled"])],2)}const Ke=ye(kt,[["render",gt]]);r.extend(Fe);r.extend(He);const{n:De,classes:$t}=se("month-picker"),{n:we}=se("date-picker"),Dt=pe({name:"MonthPickerPanel",components:{VarButton:Te,PanelHeader:Ke},props:{choose:{type:Object,required:!0},preview:{type:Object,required:!0},current:{type:String,required:!0},clickYear:{type:Function,required:!0},componentProps:{type:Object,required:!0}},emits:["check-preview","choose-month"],setup(e,{emit:a}){const[g,k]=e.current.split("-"),y=Y(!1),V=Y(0),s=Y(null),u=Pe({left:!1,right:!1}),n=E(()=>e.choose.chooseYear===e.preview.previewYear),i=E(()=>e.preview.previewYear===g),v=m=>{var h;return((h=x.value.datePickerMonthDict)==null?void 0:h[m].abbr)??""},B=m=>{const{preview:{previewYear:h},componentProps:{min:N,max:T}}=e;let H=!0,K=!0;const o=`${h}-${m}`;return T&&(H=r(o).isSameOrBefore(r(T),"month")),N&&(K=r(o).isSameOrAfter(r(N),"month")),H&&K},M=m=>{const{choose:{chooseMonths:h,chooseDays:N,chooseRangeMonth:T},componentProps:{type:H,range:K}}=e;if(K){if(!T.length)return!1;const o=r(m).isSameOrBefore(r(T[1]),"month"),f=r(m).isSameOrAfter(r(T[0]),"month");return o&&f}return H==="month"?h.includes(m):N.some(o=>o.includes(m))},F=m=>{const{choose:{chooseMonth:h},preview:{previewYear:N},componentProps:{allowedDates:T,color:H,multiple:K,range:o}}=e,f=`${N}-${m}`,A=()=>o||K?M(f):(h==null?void 0:h.index)===m&&n.value,S=(()=>B(m)?T?!T(f):!1:!0)(),q=()=>S?!0:o||K?!M(f):!n.value||(h==null?void 0:h.index)!==m,W=()=>i.value&&k===m&&e.componentProps.showCurrent?(o||K||n.value)&&S?!0:o||K?!M(f):n.value?(h==null?void 0:h.index)!==k:!0:!1,Q=()=>S?"":W()?H??"":A()?"":`${we()}-color-cover`,ee=Q().startsWith(we());return{outline:W(),text:q(),color:q()?"":H,textColor:ee?"":Q(),[`${we()}-color-cover`]:ee,class:$t(De("button"),[S,De("button--disabled")])}},L=(m,h)=>{h.currentTarget.classList.contains(De("button--disabled"))||a("choose-month",m)},I=m=>{y.value=m==="prev",V.value+=m==="prev"?-1:1,a("check-preview","year",m)},P=m=>{s.value.checkDate(m)};return ve(()=>e.preview.previewYear,m=>{const{componentProps:{min:h,max:N}}=e;N&&(u.right=!r(`${D(m)+1}`).isSameOrBefore(r(N),"year")),h&&(u.left=!r(`${D(m)-1}`).isSameOrAfter(r(h),"year"))},{immediate:!0}),{n:De,nDate:we,pack:x,MONTH_LIST:be,headerEl:s,reverse:y,panelKey:V,panelBtnDisabled:u,forwardRef:P,buttonProps:F,getMonthAbbr:v,chooseMonth:L,checkDate:I}}});function wt(e,a,g,k,y,V){const s=oe("panel-header"),u=oe("var-button");return C(),O("div",{class:z(e.n())},[_("div",{class:z(e.n("content"))},[w(s,{ref:"headerEl",type:"month",date:e.preview,disabled:e.panelBtnDisabled,onCheckPanel:e.clickYear,onCheckDate:e.checkDate},null,8,["date","disabled","onCheckPanel","onCheckDate"]),w(he,{name:`${e.nDate()}${e.reverse?"-reverse":""}-translatex`},{default:R(()=>[(C(),O("ul",{key:e.panelKey},[(C(!0),O(fe,null,Me(e.MONTH_LIST,n=>(C(),O("li",{key:n.index},[w(u,Ae({type:"primary","var-month-picker-cover":"",ripple:!1},{...e.buttonProps(n.index)},{onClick:i=>e.chooseMonth(n,i)}),{default:R(()=>[j(b(e.getMonthAbbr(n.index)),1)]),_:2},1040,["onClick"])]))),128))]))]),_:1},8,["name"])],2)],2)}const Yt=ye(Dt,[["render",wt]]),{n:qe,classes:bt}=se("year-picker"),Mt=pe({name:"YearPickerPanel",props:{preview:{type:String},componentProps:{type:Object,required:!0}},emits:["choose-year"],setup(e,{emit:a}){const g=E(()=>{const y=[],{preview:V,componentProps:{max:s,min:u}}=e;if(!V)return y;let n=[D(V)+100,D(V)-100];if(s){const i=r(s).format("YYYY-MM-D"),v=D(i.split("-")[0]);if(v<n[0]&&v>n[1]&&(n=[v,n[1]]),v<=n[1])return[v]}if(u){const i=r(u).format("YYYY-MM-D"),v=D(i.split("-")[0]);if(v<n[0]&&v>n[1]&&(n=[n[0],v]),v>=n[0])return[v]}for(let i=n[0];i>=n[1];i--)y.push(i);return y}),k=y=>{a("choose-year",y)};return We(()=>{const y=document.querySelector(`.${qe("item--active")}`);y==null||y.scrollIntoView({block:"center"})}),{n:qe,classes:bt,yearList:g,chooseYear:k,toNumber:D}}}),Pt=["onClick"];function Ct(e,a,g,k,y,V){return C(),O("ul",{class:z(e.n())},[(C(!0),O(fe,null,Me(e.yearList,s=>(C(),O("li",{key:s,class:z(e.classes(e.n("item"),[s===e.toNumber(e.preview),e.n("item--active")])),style:je({color:s===e.toNumber(e.preview)?e.componentProps.color:""}),onClick:u=>e.chooseYear(s)},b(s),15,Pt))),128))],2)}const Vt=ye(Mt,[["render",Ct]]);r.extend(Fe);r.extend(He);const{n:ue,classes:St}=se("day-picker"),{n:Ye}=se("date-picker"),Ot=pe({name:"DayPickerPanel",components:{VarButton:Te,PanelHeader:Ke},props:{choose:{type:Object,required:!0},preview:{type:Object,required:!0},current:{type:String,required:!0},clickMonth:{type:Function,required:!0},componentProps:{type:Object,required:!0}},emits:["check-preview","choose-day"],setup(e,{emit:a}){const[g,k,y]=e.current.split("-"),V=Y([]),s=Y(!1),u=Y(0),n=Y(null),i=Pe({left:!1,right:!1}),v=E(()=>e.preview.previewYear===g&&e.preview.previewMonth.index===k),B=E(()=>{var o;return e.choose.chooseYear===e.preview.previewYear&&((o=e.choose.chooseMonth)==null?void 0:o.index)===e.preview.previewMonth.index}),M=E(()=>{const o=me.findIndex(f=>f.index===e.componentProps.firstDayOfWeek);return o===-1||o===0?me:me.slice(o).concat(me.slice(0,o))}),F=o=>{var f;return((f=x.value.datePickerWeekDict)==null?void 0:f[o].abbr)??""},L=o=>o>0?o:"",I=()=>{const{preview:{previewMonth:o,previewYear:f}}=e,A=r(`${f}-${o.index}`).daysInMonth(),X=r(`${f}-${o.index}-01`).day(),S=M.value.findIndex(q=>q.index===`${X}`);V.value=[...Array(S).fill(-1),...Array.from(Array(A+1).keys())].filter(q=>q)},P=()=>{const{preview:{previewYear:o,previewMonth:f},componentProps:{max:A,min:X}}=e;if(A){const S=`${o}-${D(f.index)+1}`;i.right=!r(S).isSameOrBefore(r(A),"month")}if(X){const S=`${o}-${D(f.index)-1}`;i.left=!r(S).isSameOrAfter(r(X),"month")}},m=o=>{const{preview:{previewYear:f,previewMonth:A},componentProps:{min:X,max:S}}=e;let q=!0,W=!0;const Q=`${f}-${A.index}-${o}`;return S&&(q=r(Q).isSameOrBefore(r(S),"day")),X&&(W=r(Q).isSameOrAfter(r(X),"day")),q&&W},h=o=>{const{choose:{chooseDays:f,chooseRangeDay:A},componentProps:{range:X}}=e;if(X){if(!A.length)return!1;const S=r(o).isSameOrBefore(r(A[1]),"day"),q=r(o).isSameOrAfter(r(A[0]),"day");return S&&q}return f.includes(o)},N=o=>{if(o<0)return{text:!0,outline:!1,textColor:"",class:ue("button")};const{choose:{chooseDay:f},preview:{previewYear:A,previewMonth:X},componentProps:{allowedDates:S,color:q,multiple:W,range:Q}}=e,ee=`${A}-${X.index}-${o}`,Ce=()=>Q||W?h(ee):D(f)===o&&B.value,le=(()=>m(o)?S?!S(ee):!1:!0)(),Ve=()=>le?!0:Q||W?!h(ee):!B.value||D(f)!==o,ke=()=>v.value&&D(y)===o&&e.componentProps.showCurrent?(Q||W||B.value)&&le?!0:Q||W?!h(ee):B.value?f!==y:!0:!1,ge=()=>le?"":ke()?q??"":Ce()?"":`${Ye()}-color-cover`,$e=ge().startsWith(Ye());return{text:Ve(),outline:ke(),textColor:$e?"":ge(),[`${Ye()}-color-cover`]:$e,class:St(ue("button"),ue("button--usable"),[le,ue("button--disabled")])}},T=o=>{s.value=o==="prev",u.value+=o==="prev"?-1:1,a("check-preview","month",o)},H=(o,f)=>{f.currentTarget.classList.contains(ue("button--disabled"))||a("choose-day",o)},K=o=>{n.value.checkDate(o)};return We(()=>{I(),P()}),ve(()=>e.preview,()=>{I(),P()}),{n:ue,nDate:Ye,days:V,reverse:s,headerEl:n,panelKey:u,sortWeekList:M,panelBtnDisabled:i,forwardRef:K,filterDay:L,getDayAbbr:F,checkDate:T,chooseDay:H,buttonProps:N}}});function Bt(e,a,g,k,y,V){const s=oe("panel-header"),u=oe("var-button");return C(),O("div",{class:z(e.n())},[_("div",{class:z(e.n("content"))},[w(s,{ref:"headerEl",type:"day",date:e.preview,disabled:e.panelBtnDisabled,onCheckPanel:e.clickMonth,onCheckDate:e.checkDate},null,8,["date","disabled","onCheckPanel","onCheckDate"]),w(he,{name:`${e.nDate()}${e.reverse?"-reverse":""}-translatex`},{default:R(()=>[(C(),O("div",{key:e.panelKey},[_("ul",{class:z(e.n("head"))},[(C(!0),O(fe,null,Me(e.sortWeekList,n=>(C(),O("li",{key:n.index},b(e.getDayAbbr(n.index)),1))),128))],2),_("ul",{class:z(e.n("body"))},[(C(!0),O(fe,null,Me(e.days,(n,i)=>(C(),O("li",{key:i},[w(u,Ae({type:"primary","var-day-picker-cover":"",round:"",ripple:!1},{...e.buttonProps(n)},{onClick:v=>e.chooseDay(n,v)}),{default:R(()=>[j(b(e.filterDay(n)),1)]),_:2},1040,["onClick"])]))),128))],2)]))]),_:1},8,["name"])],2)],2)}const Tt=ye(Ot,[["render",Bt]]),{n:At,classes:Nt}=se("date-picker"),Et=pe({name:"VarDatePicker",components:{MonthPickerPanel:Yt,YearPickerPanel:Vt,DayPickerPanel:Tt},props:pt,setup(e){let a=0,g=0,k="",y;const V=r().format("YYYY-MM-D"),[s,u]=V.split("-"),n=be.find(t=>t.index===u),i=Y(!1),v=Y(!1),B=Y(!0),M=Y(),F=Y(),L=Y(),I=Y(n),P=Y(s),m=Y(!1),h=Y([]),N=Y([]),T=Y([]),H=Y([]),K=Y(null),o=Y(null),f=Pe({allowedDates:e.allowedDates,type:e.type,color:e.color,firstDayOfWeek:e.firstDayOfWeek,min:e.min,max:e.max,showCurrent:e.showCurrent,multiple:e.multiple,range:e.range}),A=E(()=>({chooseMonth:M.value,chooseYear:F.value,chooseDay:L.value,chooseMonths:h.value,chooseDays:N.value,chooseRangeMonth:T.value,chooseRangeDay:H.value})),X=E(()=>({previewMonth:I.value,previewYear:P.value})),S=E(()=>{var p;const{multiple:t,range:c}=e;if(c)return T.value.length?`${T.value[0]} ~ ${T.value[1]}`:"";let l="";return M.value&&(l=((p=x.value.datePickerMonthDict)==null?void 0:p[M.value.index].name)??""),t?`${h.value.length}${x.value.datePickerSelected}`:l}),q=E(()=>{var G,ae;const{multiple:t,range:c}=e;if(c){const ce=H.value.map(ot=>r(ot).format("YYYY-MM-DD"));return ce.length?`${ce[0]} ~ ${ce[1]}`:""}if(t)return`${N.value.length}${x.value.datePickerSelected}`;if(!F.value||!M.value||!L.value)return"";const l=r(`${F.value}-${M.value.index}-${L.value}`).day(),p=me.find(ce=>ce.index===`${l}`),$=((G=x.value.datePickerWeekDict)==null?void 0:G[p.index].name)??"",U=((ae=x.value.datePickerMonthDict)==null?void 0:ae[M.value.index].name)??"",Z=Le(L.value,2,"0");return x.value.lang==="zh-CN"?`${M.value.index}-${Z} ${$.slice(0,3)}`:`${$.slice(0,3)}, ${U.slice(0,3)} ${L.value}`}),W=E(()=>i.value?"year":e.type==="month"||v.value?"month":e.type==="date"?"date":""),Q=E(()=>!e.touchable||["","year"].includes(W.value)),ee=E(()=>{var l,p;const t=r(`${F.value}-${(l=M.value)==null?void 0:l.index}-${L.value}`).day(),c=L.value?Le(L.value,2,"0"):"";return{week:`${t}`,year:F.value??"",month:((p=M.value)==null?void 0:p.index)??"",date:c}}),Ce=E(()=>A.value.chooseRangeDay.map(t=>r(t).format("YYYY-MM-DD"))),Ne=E(()=>F.value===P.value),le=E(()=>{var t;return((t=M.value)==null?void 0:t.index)===I.value.index}),Ve=t=>{t==="year"?i.value=!0:t==="month"?v.value=!0:(i.value=!1,v.value=!1)},ke=t=>{if(Q.value)return;const{clientX:c,clientY:l}=t.touches[0];a=c,g=l},ge=(t,c)=>t>=c&&t>20?"x":"y",$e=t=>{if(Q.value)return;const{clientX:c,clientY:l}=t.touches[0],p=c-a,$=l-g;y=ge(Math.abs(p),Math.abs($)),k=p>0?"prev":"next"},Qe=()=>{if(Q.value||y!=="x")return;const t=W.value==="month"?K:o;vt(()=>{t.value.forwardRef(k),Ue()})},Ee=(t,c)=>{const l=c==="month"?T:H;if(l.value=B.value?[t,t]:[l.value[0],t],B.value=!B.value,B.value){const $=r(l.value[0]).isAfter(l.value[1])?[l.value[1],l.value[0]]:[...l.value];J(e["onUpdate:modelValue"],$),J(e.onChange,$)}},Re=(t,c)=>{const l=c==="month"?h:N,p=c==="month"?"YYYY-MM":"YYYY-MM-DD",$=l.value.map(Z=>r(Z).format(p)),U=$.findIndex(Z=>Z===t);U===-1?$.push(t):$.splice(U,1),J(e["onUpdate:modelValue"],$),J(e.onChange,$)},Ie=(t,c)=>!F.value||!M.value?!1:Ne.value?t==="month"?c.index<M.value.index:le.value?c<D(L.value):M.value.index>I.value.index:F.value>P.value,Ze=t=>{const{readonly:c,range:l,multiple:p,onChange:$,"onUpdate:modelValue":U}=e;if(t<0||c)return;m.value=Ie("day",t);const Z=`${P.value}-${I.value.index}-${t}`,G=r(Z).format("YYYY-MM-DD");l?Ee(G,"day"):p?Re(G,"day"):(J(U,G),J($,G))},Ge=t=>{const{type:c,readonly:l,range:p,multiple:$,onChange:U,onPreview:Z,"onUpdate:modelValue":G}=e;if(m.value=Ie("month",t),c==="month"&&!l){const ae=`${P.value}-${t.index}`;p?Ee(ae,"month"):$?Re(ae,"month"):(J(G,ae),J(U,ae))}else I.value=t,J(Z,D(P.value),D(I.value.index));v.value=!1},Je=t=>{P.value=`${t}`,i.value=!1,v.value=!0,J(e.onPreview,D(P.value),D(I.value.index))},xe=(t,c)=>{const l=c==="prev"?-1:1;if(t==="year")P.value=`${D(P.value)+l}`;else{let p=D(I.value.index)+l;p<1&&(P.value=`${D(P.value)-1}`,p=12),p>12&&(P.value=`${D(P.value)+1}`,p=1),I.value=be.find($=>D($.index)===p)}J(e.onPreview,D(P.value),D(I.value.index))},_e=()=>(e.multiple||e.range)&&!de(e.modelValue)?(console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'),!1):!e.multiple&&!e.range&&de(e.modelValue)?(console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'),!1):!0,Se=t=>de(t)?!1:t==="Invalid Date"?(console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'),!0):!1,et=(t,c)=>{const l=c==="month"?T:H,p=c==="month"?"YYYY-MM":"YYYY-MM-D",$=t.map(G=>r(G).format(p)).slice(0,2);if(l.value.some(G=>Se(G)))return;l.value=$;const Z=r(l.value[0]).isAfter(l.value[1]);l.value.length===2&&Z&&(l.value=[l.value[1],l.value[0]])},tt=(t,c)=>{const l=c==="month"?h:N,p=c==="month"?"YYYY-MM":"YYYY-MM-D",$=Array.from(new Set(t.map(U=>r(U).format(p))));l.value=$.filter(U=>U!=="Invalid Date")},nt=t=>{const c=r(t).format("YYYY-MM-D");if(Se(c))return;const[l,p,$]=c.split("-"),U=be.find(Z=>Z.index===p);M.value=U,F.value=l,L.value=$,I.value=U,P.value=l},Ue=()=>{g=0,a=0,k="",y=void 0};return ve(()=>e.modelValue,t=>{if(!(!_e()||Se(t)||!t))if(e.range){if(!de(t))return;B.value=t.length!==1,et(t,e.type)}else if(e.multiple){if(!de(t))return;tt(t,e.type)}else nt(t)},{immediate:!0}),ve(W,Ue),{n:At,classes:Nt,monthPanelEl:K,dayPanelEl:o,reverse:m,currentDate:V,chooseMonth:M,chooseYear:F,chooseDay:L,previewYear:P,isYearPanel:i,isMonthPanel:v,getMonthTitle:S,getDateTitle:q,getPanelType:W,getChoose:A,getPreview:X,componentProps:f,slotProps:ee,formatRange:Ce,clickEl:Ve,handleTouchstart:ke,handleTouchmove:$e,handleTouchend:Qe,getChooseDay:Ze,getChooseMonth:Ge,getChooseYear:Je,checkPreview:xe}}});function Rt(e,a,g,k,y,V){const s=oe("year-picker-panel"),u=oe("month-picker-panel"),n=oe("day-picker-panel");return C(),O("div",{class:z(e.classes(e.n(),[e.elevation,e.n("$-elevation--2")]))},[_("div",{class:z(e.n("title")),style:je({background:e.headerColor||e.color})},[_("div",{class:z(e.classes(e.n("title-year"),[e.isYearPanel,e.n("title-year--active")])),onClick:a[0]||(a[0]=i=>e.clickEl("year"))},[re(e.$slots,"year",{year:e.chooseYear},()=>[j(b(e.chooseYear),1)])],2),_("div",{class:z(e.classes(e.n("title-date"),[!e.isYearPanel,e.n("title-date--active")],[e.range,e.n("title-date--range")])),onClick:a[1]||(a[1]=i=>e.clickEl("date"))},[w(he,{name:e.multiple?"":`${e.n()}${e.reverse?"-reverse":""}-translatey`},{default:R(()=>{var i,v,B;return[e.type==="month"?(C(),O("div",{key:`${e.chooseYear}${(i=e.chooseMonth)==null?void 0:i.index}`},[e.range?re(e.$slots,"range",{key:0,choose:e.getChoose.chooseRangeMonth},()=>[j(b(e.getMonthTitle),1)]):e.multiple?re(e.$slots,"multiple",{key:1,choose:e.getChoose.chooseMonths},()=>[j(b(e.getMonthTitle),1)]):re(e.$slots,"month",{key:2,month:(v=e.chooseMonth)==null?void 0:v.index,year:e.chooseYear},()=>[j(b(e.getMonthTitle),1)])])):(C(),O("div",{key:`${e.chooseYear}${(B=e.chooseMonth)==null?void 0:B.index}${e.chooseDay}`},[e.range?re(e.$slots,"range",{key:0,choose:e.formatRange},()=>[j(b(e.getDateTitle),1)]):e.multiple?re(e.$slots,"multiple",{key:1,choose:e.getChoose.chooseDays},()=>[j(b(e.getDateTitle),1)]):re(e.$slots,"date",rt(Ae({key:2},e.slotProps)),()=>[j(b(e.getDateTitle),1)])]))]}),_:3},8,["name"])],2)],6),_("div",{class:z(e.n("body")),onTouchstart:a[2]||(a[2]=(...i)=>e.handleTouchstart&&e.handleTouchstart(...i)),onTouchmove:a[3]||(a[3]=(...i)=>e.handleTouchmove&&e.handleTouchmove(...i)),onTouchend:a[4]||(a[4]=(...i)=>e.handleTouchend&&e.handleTouchend(...i))},[w(he,{name:`${e.n()}-panel-fade`},{default:R(()=>[e.getPanelType==="year"?(C(),Be(s,{key:0,"component-props":e.componentProps,preview:e.previewYear,onChooseYear:e.getChooseYear},null,8,["component-props","preview","onChooseYear"])):e.getPanelType==="month"?(C(),Be(u,{key:1,ref:"monthPanelEl",current:e.currentDate,choose:e.getChoose,preview:e.getPreview,"click-year":()=>e.clickEl("year"),"component-props":e.componentProps,onChooseMonth:e.getChooseMonth,onCheckPreview:e.checkPreview},null,8,["current","choose","preview","click-year","component-props","onChooseMonth","onCheckPreview"])):e.getPanelType==="date"?(C(),Be(n,{key:2,ref:"dayPanelEl",current:e.currentDate,choose:e.getChoose,preview:e.getPreview,"component-props":e.componentProps,"click-month":()=>e.clickEl("month"),onChooseDay:e.getChooseDay,onCheckPreview:e.checkPreview},null,8,["current","choose","preview","component-props","click-month","onChooseDay","onCheckPreview"])):st("",!0)]),_:1},8,["name"])],34)],2)}const ne=ye(Et,[["render",Rt]]);ne.install=function(e){e.component(ne.name,ne)};const It={basicUsage:"基本使用",monthPicker:"月份选择器",multiple:"多选",range:"选择范围",dateLimit:"日期限制",custom:"自定义",year:"年",month:"月",divider:"年"},Ut={basicUsage:"Basic Usage",monthPicker:"Month Picker",multiple:"Multiple",range:"Range",dateLimit:"Date Limit",custom:"Custom",year:"",month:"",divider:"-"},{add:Xe,use:Lt,pack:te,packs:en,merge:tn}=ut(),qt=e=>{ct(e),Lt(e)};ze("zh-CN",dt);ze("en-US",mt);Xe("zh-CN",It);Xe("en-US",Ut);const nn={setup(e){const a=Pe({date:"2021-04",date1:"2021-04-08",date2:["",""],date3:["2021-02-01","2021-02-15"],date4:"2020-11-11",date5:"2021-05"}),g=s=>parseInt(s.split("-")[1],10)%2===1,k=s=>parseInt(s.split("-")[2],10)%2===1;function y(s){console.log(s)}function V(s,u){console.log(s,u)}return lt(qt),it(ht),(s,u)=>(C(),O(fe,null,[w(d(ie),null,{default:R(()=>[j(b(d(te).basicUsage),1)]),_:1}),w(d(ne),{modelValue:d(a).date1,"onUpdate:modelValue":u[0]||(u[0]=n=>d(a).date1=n)},null,8,["modelValue"]),w(d(ie),null,{default:R(()=>[j(b(d(te).monthPicker),1)]),_:1}),w(d(ne),{type:"month",modelValue:d(a).date,"onUpdate:modelValue":u[1]||(u[1]=n=>d(a).date=n),elevation:""},null,8,["modelValue"]),w(d(ie),null,{default:R(()=>[j(b(d(te).multiple),1)]),_:1}),w(d(ne),{type:"date",modelValue:d(a).date2,"onUpdate:modelValue":u[2]||(u[2]=n=>d(a).date2=n),multiple:""},null,8,["modelValue"]),w(d(ie),null,{default:R(()=>[j(b(d(te).range),1)]),_:1}),w(d(ne),{type:"date",modelValue:d(a).date3,"onUpdate:modelValue":u[3]||(u[3]=n=>d(a).date3=n),range:""},null,8,["modelValue"]),w(d(ie),null,{default:R(()=>[j(b(d(te).dateLimit),1)]),_:1}),w(d(ne),{type:"date",modelValue:d(a).date4,"onUpdate:modelValue":u[4]||(u[4]=n=>d(a).date4=n),min:"2020-10-15",max:"2021-01-15","allowed-dates":k},null,8,["modelValue"]),w(d(ie),null,{default:R(()=>[j(b(d(te).custom),1)]),_:1}),w(d(ne),{type:"month","allowed-dates":g,modelValue:d(a).date5,"onUpdate:modelValue":u[5]||(u[5]=n=>d(a).date5=n),max:"2022-01",min:"2016-07",elevation:"","header-color":"purple",color:"#7bb872","first-day-of-week":"1",onPreview:V,onChange:y},{year:R(({year:n})=>[_("span",null,b(n)+b(d(te).year),1)]),month:R(({year:n,month:i})=>[_("span",null,b(n)+b(d(te).divider)+b(i)+b(d(te).month),1)]),_:1},8,["modelValue"])],64))}};export{nn as default};
