import{_ as a,q as t,e as c,f as r,k as s,s as n,O as o,K as e}from"./elevation.ab53b24c.js";const i={components:{}},d={class:"varlet-site-doc"},u=s("h1",null,"Locale",-1),p=s("div",{class:"card"},[s("h3",null,"Intro"),s("p",null,[e("Component library uses Chinese as the default language, support multi-language switch, built-in support for "),s("code",null,"Chinese"),e(", "),s("code",null,"English"),e(".")])],-1),h={class:"card"},_=s("h3",null,"Multi-language switch",-1),g=s("p",null,[e("The "),s("code",null,"Locale"),e(" component is introduced to realize multi-language switching, and "),s("code",null,"Locale.add"),e(" is used for language extension.")],-1),m=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),e(" { Locale } "),s("span",{class:"hljs-keyword"},"from"),e(),s("span",{class:"hljs-string"},"'@varlet/ui'"),e(`
`),s("span",{class:"hljs-keyword"},"import"),e(" enUS "),s("span",{class:"hljs-keyword"},"from"),e(),s("span",{class:"hljs-string"},"'@varlet/ui/es/locale/en-US'"),e(`

Locale.add(`),s("span",{class:"hljs-string"},"'en-US'"),e(`, enUS)
`)])],-1),f=s("p",null,[e("Use "),s("code",null,"Locale.use"),e(" to switch languages.")],-1),j=s("pre",{class:"hljs"},[s("code",null,[e("Locale.use("),s("span",{class:"hljs-string"},"'en-US'"),e(`)
`)])],-1),v=s("p",null,[e("Use "),s("code",null,"Locale.merge"),e(" to merge languages.")],-1),w=s("pre",{class:"hljs"},[s("code",null,[e("Locale.merge("),s("span",{class:"hljs-string"},"'en-US'"),e(`, {
  `),s("span",{class:"hljs-attr"},"dialogTitle"),e(": "),s("span",{class:"hljs-string"},"'Hello'"),e(`
})
`)])],-1);function L(U,x,y,k,S,C){const l=t("var-site-code-example");return c(),r("div",d,[u,p,s("div",h,[_,g,n(l,{"playground-ignore":""},{default:o(()=>[m]),_:1}),f,n(l,{"playground-ignore":""},{default:o(()=>[j]),_:1}),v,n(l,{"playground-ignore":""},{default:o(()=>[w]),_:1})])])}var B=a(i,[["render",L]]);export{B as default};
