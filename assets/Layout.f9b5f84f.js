import{_ as E,f as o,h as u,l as $,d as D,a as r,g as l,$ as Z,u as x,b as K,a0 as ee,a8 as P,c as i,a9 as j,p as w,s as T,ab as W,t as g,N as C,k as M,P as N,j as b,v as O,K as A,F as B,ad as R,i as z,M as q,H as L,Q,r as ne,am as H,a6 as ae,o as te,w as se,n as oe}from"./elevation.b6664af0.js";import{A as re}from"./AnimationBox.2f1ebacf.js";import"./main.30730af4.js";import"./clipboard.4312f935.js";const ie={name:"AppMobile",props:{componentName:{type:String},language:{type:String},replace:{type:String}}},le={class:"varlet-site-mobile"},ue={class:"varlet-site-mobile-content"},ce=["src"];function de(e,t,p,_,h,c){return o(),u("div",le,[$("div",ue,[$("iframe",{id:"mobile",src:`./mobile.html#/${p.componentName}?language=${p.language}&platform=pc&replace=${p.replace}`},null,8,ce)])])}var pe=E(ie,[["render",de],["__scopeId","data-v-70803dd9"]]);const me=D({name:"AppHeader",components:{AnimationBox:re},props:{language:{type:String}},setup(){const e=r(l(i,"title")),t=r(l(i,"logo")),p=l(i,"themesKey"),_=r(l(i,"pc.header.i18n")),h=r(l(i,"pc.header.version.current")),c=r(l(i,"pc.header.version.items")),y=r(l(i,"pc.header.playground")),d=r(l(i,"pc.header.github")),s=l(i,"pc.redirect"),m=r(l(i,"pc.header.darkMode")),n=r(Z(p)),a=r(!1),v=r(!1),k=x(),S=K(()=>j(_.value)),G=K(()=>j(c.value)),J=()=>{const{language:f}=w();k.replace(`/${f}${s}`)},U=f=>{const{menuName:V}=w();k.replace(`/${f}/${V}`),a.value=!1},F=f=>{n.value=f,P(i,n.value),window.localStorage.setItem(p,n.value)},I=()=>({action:"themesChange",from:"pc",data:n.value}),X=()=>{F(n.value==="darkThemes"?"themes":"darkThemes"),window.postMessage(I(),"*"),document.getElementById("mobile").contentWindow.postMessage(I(),"*")},Y=f=>{setTimeout(()=>{window.location.href=f},350)};return ee((f,V)=>{V==="mobile"&&F(f)}),P(i,n.value),window.postMessage(I(),"*"),{logo:t,title:e,currentVersion:h,languages:_,versionItems:c,nonEmptyLanguages:S,nonEmptyVersions:G,playground:y,github:d,isOpenLanguageMenu:a,isOpenVersionsMenu:v,darkMode:m,currentThemes:n,open:Y,backRoot:J,handleLanguageChange:U,toggleTheme:X}}}),ve={class:"varlet-site-header"},ge={class:"varlet-site-header__lead"},_e={class:"varlet-site-header__tail"},he={style:{"font-size":"14px"}},ye=["href"],fe=["href"];function be(e,t,p,_,h,c){const y=T("animation-box"),d=T("var-site-icon"),s=T("var-site-cell"),m=W("ripple");return o(),u("div",ve,[$("div",ge,[g(y,{class:"varlet-site-header__logo",onClick:e.backRoot},null,8,["onClick"]),e.title?(o(),u("div",{key:0,class:"varlet-site-header__title",onClick:t[0]||(t[0]=(...n)=>e.backRoot&&e.backRoot(...n))},C(e.title),1)):M("v-if",!0)]),$("div",_e,[e.versionItems?(o(),u("div",{key:0,class:"varlet-site-header__versions",onMouseenter:t[1]||(t[1]=n=>e.isOpenVersionsMenu=!0),onMouseleave:t[2]||(t[2]=n=>e.isOpenVersionsMenu=!1)},[$("span",he,C(e.currentVersion),1),g(d,{name:"chevron-down"}),g(Q,{name:"fade"},{default:N(()=>[b($("div",{class:"varlet-site-header__animation-list varlet-site-header__animation-versions var-site-elevation--5",style:A({pointerEvents:e.isOpenVersionsMenu?"auto":"none"})},[(o(!0),u(B,null,R(e.nonEmptyVersions,(n,a)=>b((o(),z(s,{key:a,class:L({"varlet-site-header__animation-list--active":e.currentVersion===a}),onClick:v=>e.open(n)},{default:N(()=>[q(C(a),1)]),_:2},1032,["class","onClick"])),[[m]])),128))],4),[[O,e.isOpenVersionsMenu]])]),_:1})],32)):M("v-if",!0),e.playground?b((o(),u("a",{key:1,class:"varlet-site-header__link",target:"_blank",href:e.playground},[g(d,{name:"code-json",size:24})],8,ye)),[[m]]):M("v-if",!0),e.github?b((o(),u("a",{key:2,class:"varlet-site-header__link",target:"_blank",href:e.github},[g(d,{name:"github",size:28})],8,fe)),[[m]]):M("v-if",!0),e.darkMode?b((o(),u("div",{key:3,class:"varlet-site-header__theme",onClick:t[3]||(t[3]=(...n)=>e.toggleTheme&&e.toggleTheme(...n))},[g(d,{size:"26px",name:e.currentThemes==="themes"?"white-balance-sunny":"weather-night",style:A({marginBottom:e.currentThemes==="darkThemes"&&"2px",marginTop:e.currentThemes==="themes"&&"2px"})},null,8,["name","style"])])),[[m]]):M("v-if",!0),e.languages?(o(),u("div",{key:4,class:"varlet-site-header__language",onMouseenter:t[4]||(t[4]=n=>e.isOpenLanguageMenu=!0),onMouseleave:t[5]||(t[5]=n=>e.isOpenLanguageMenu=!1)},[g(d,{name:"translate",size:"26px"}),g(d,{name:"chevron-down"}),g(Q,{name:"fade"},{default:N(()=>[b($("div",{class:"varlet-site-header__animation-list var-site-elevation--5",style:A({pointerEvents:e.isOpenLanguageMenu?"auto":"none"})},[(o(!0),u(B,null,R(e.nonEmptyLanguages,(n,a)=>b((o(),z(s,{key:a,class:L({"varlet-site-header__animation-list--active":e.language===a}),onClick:v=>e.handleLanguageChange(a)},{default:N(()=>[q(C(n),1)]),_:2},1032,["class","onClick"])),[[m]])),128))],4),[[O,e.isOpenLanguageMenu]])]),_:1})],32)):M("v-if",!0)])])}var $e=E(me,[["render",be],["__scopeId","data-v-cd1d0a72"]]);const Te=D({name:"AppSidebar",props:{menu:{type:Array},menuName:{type:String},language:{type:String}},emits:["change"],setup(e,{emit:t}){const p=ne(H),_=r(l(i,"themes"));return{menuTypes:p,themes:_,changeRoute:c=>{c.type===H.TITLE||e.menuName===c.doc||t("change",c)}}}}),ke={class:"varlet-site-sidebar var-elevation--3"},Me={key:0,class:"varlet-site-sidebar__item--title"},Ce={key:1};function Ne(e,t,p,_,h,c){const y=T("var-site-cell"),d=W("ripple");return o(),u("div",ke,[(o(!0),u(B,null,R(e.menu,(s,m)=>b((o(),z(y,{class:L(["varlet-site-sidebar__item",{"varlet-site-sidebar__item--active":s.doc===e.menuName,"varlet-site-sidebar__link":s.type!==e.menuTypes.TITLE,"varlet-site-sidebar__title":s.type===e.menuTypes.TITLE}]),id:s.doc,key:m,onClick:n=>e.changeRoute(s)},{default:N(()=>[s.type===e.menuTypes.TITLE?(o(),u("span",Me,C(s.text[e.language]),1)):(o(),u("span",Ce,C(s.text[e.language]),1))]),_:2},1032,["id","class","onClick"])),[[d,{touchmoveForbid:!1,disabled:s.type===e.menuTypes.TITLE,color:e.themes["color-side-bar"]}]])),128))])}var we=E(Te,[["render",Ne],["__scopeId","data-v-22eb4266"]]);const Le=D({components:{AppMobile:pe,AppHeader:$e,AppSidebar:we},setup(){const e=r(l(i,"pc.menu",[])),t=r(l(i,"useMobile")),p=l(i,"mobile.redirect"),_=r(""),h=r(null),c=r(""),y=r(null),d=ae(),s=a=>{const v=e.value.find(k=>k.doc===a);return(v==null?void 0:v.type)===H.COMPONENT?a:p.slice(1)},m=()=>{const{menuName:a}=w();oe(()=>{const v=document.querySelector(".varlet-site-sidebar").getElementsByClassName("var-site-cell"),k=e.value.findIndex(S=>S.doc===a);k!==-1&&v[k].scrollIntoView({block:"center",inline:"start"})})},n=a=>{y.value.scrollTop=0,h.value=s(a.doc),c.value=a.doc};return te(m),se(()=>d.path,()=>{const{language:a,menuName:v}=w();!a||!v||(h.value=s(v),c.value=v,_.value=a,document.title=l(i,"pc.title")[a])},{immediate:!0}),{menu:e,language:_,componentName:h,menuName:c,doc:y,useMobile:t,handleSidebarChange:n}}}),Ee={class:"varlet-site"},Se={class:"varlet-site-content"};function Ie(e,t,p,_,h,c){const y=T("app-header"),d=T("app-sidebar"),s=T("router-view"),m=T("app-mobile");return o(),u("div",Ee,[g(y,{language:e.language},null,8,["language"]),$("div",Se,[g(d,{language:e.language,menu:e.menu,"menu-name":e.menuName,onChange:e.handleSidebarChange},null,8,["language","menu","menu-name","onChange"]),$("div",{class:L(["varlet-site-doc-container",[!e.useMobile&&"varlet-site-doc-container--pc-only"]]),ref:"doc"},[g(s)],2),b(g(m,{"component-name":e.componentName,language:e.language,replace:e.menuName},null,8,["component-name","language","replace"]),[[O,e.useMobile]])])])}var Re=E(Le,[["render",Ie]]);export{Re as default};
