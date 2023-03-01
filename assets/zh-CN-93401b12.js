import{_ as a,p as c,f as t,h as d,M as s,q as o,S as n,P as e}from"./vue-router.esm-bundler-0d52b99f.js";const r={components:{}},_={class:"varlet-site-doc"},i=s("h1",null,"国际化",-1),p=s("div",{class:"card"},[s("h3",null,"介绍"),s("p",null,[e("组件库使用中文作为默认语言，支持多语言切换，内置支持 "),s("code",null,"中文"),e("，"),s("code",null,"英文"),e("。")])],-1),h={class:"card"},u=s("h3",null,"多语言切换",-1),g=s("p",null,[e("引入 "),s("code",null,"Locale"),e(" 组件实现多语言切换，使用 "),s("code",null,"Locale.add"),e(" 进行语言扩展。")],-1),m=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),e(" { Locale } "),s("span",{class:"hljs-keyword"},"from"),e(),s("span",{class:"hljs-string"},"'@varlet/ui'"),e(`

Locale.add(`),s("span",{class:"hljs-string"},"'en-US'"),e(`, Locale.enUS)
`)])],-1),f=s("p",null,[e("使用 "),s("code",null,"Locale.use"),e(" 进行切换语言。")],-1),j=s("pre",{class:"hljs"},[s("code",null,[e("Locale.use("),s("span",{class:"hljs-string"},"'en-US'"),e(`)
`)])],-1),L=s("p",null,[e("使用 "),s("code",null,"Locale.merge"),e(" 进行语言合并。")],-1),v=s("pre",{class:"hljs"},[s("code",null,[e("Locale.merge("),s("span",{class:"hljs-string"},"'en-US'"),e(`, {
  `),s("span",{class:"hljs-attr"},"dialogTitle"),e(": "),s("span",{class:"hljs-string"},"'Hello'"),e(`
})
`)])],-1);function x(y,S,k,N,U,$){const l=c("var-site-code-example");return t(),d("div",_,[i,p,s("div",h,[u,g,o(l,{"playground-ignore":""},{default:n(()=>[m]),_:1}),f,o(l,{"playground-ignore":""},{default:n(()=>[j]),_:1}),L,o(l,{"playground-ignore":""},{default:n(()=>[v]),_:1})])])}const B=a(r,[["render",x]]);export{B as default};
