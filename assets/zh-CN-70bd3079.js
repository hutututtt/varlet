import{_ as t,p as c,f as o,h as r,M as s,q as n,S as e,P as a}from"./vue-router.esm-bundler-0d52b99f.js";const p={components:{}},h={class:"varlet-site-doc"},i=s("h1",null,"暗黑模式",-1),d=s("div",{class:"card"},[s("h3",null,"介绍"),s("p",null,"组件库第一方提供了暗黑模式的主题，暗黑模式的优势在于在弱光环境下具有更高的可读性。")],-1),u={class:"card"},j=s("h3",null,"切换主题",-1),_=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"setup"),a(">")]),s("span",{class:"javascript"},[a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { StyleProvider, Themes } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/ui'"),a(`

`),s("span",{class:"hljs-keyword"},"let"),a(" currentTheme = "),s("span",{class:"hljs-literal"},"null"),a(`

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),a(),s("span",{class:"hljs-title"},"toggleTheme"),a("("),s("span",{class:"hljs-params"}),a(") ")]),a(`{
  currentTheme = currentTheme ? `),s("span",{class:"hljs-literal"},"null"),a(` : Themes.dark
  StyleProvider(currentTheme)
}
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`

`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-button"),a(),s("span",{class:"hljs-attr"},"block"),a(" @"),s("span",{class:"hljs-attr"},"click"),a("="),s("span",{class:"hljs-string"},'"toggleTheme"'),a(">")]),a("切换主题"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-button"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),m=s("p",null,[a("注入组件库推荐的 "),s("code",null,"文字颜色"),a(" 和 "),s("code",null,"背景颜色"),a(" 变量来控制整体颜色。")],-1),g=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-selector-tag"},"body"),a(` {
  `),s("span",{class:"hljs-attribute"},"transition"),a(": background-color ."),s("span",{class:"hljs-number"},"25s"),a(", color ."),s("span",{class:"hljs-number"},"25s"),a(`;
  `),s("span",{class:"hljs-attribute"},"color"),a(": "),s("span",{class:"hljs-built_in"},"var"),a(`(--color-text);
  `),s("span",{class:"hljs-attribute"},"background-color"),a(": "),s("span",{class:"hljs-built_in"},"var"),a(`(--color-body);
}
`)])],-1);function v(b,f,k,y,T,x){const l=c("var-site-code-example");return o(),r("div",h,[i,d,s("div",u,[j,n(l,{"playground-ignore":""},{default:e(()=>[_]),_:1}),m,n(l,{"playground-ignore":""},{default:e(()=>[g]),_:1})])])}const N=t(p,[["render",v]]);export{N as default};
