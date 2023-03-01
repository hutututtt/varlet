import{_ as e,p,f as c,h as r,M as s,q as n,S as t,P as a}from"./vue-router.esm-bundler-0d52b99f.js";const o={components:{}},h={class:"varlet-site-doc"},i=s("h1",null,"快速开始",-1),d=s("div",{class:"card"},[s("h3",null,"介绍"),s("p",null,"这里为您介绍常见开发模式下接入组件库的最基本方式。")],-1),j={class:"card"},u=s("h3",null,"安装",-1),_=s("h4",null,"CDN",-1),m=s("p",null,[s("code",null,"varlet.js"),a(" 包含组件库的所有样式和逻辑, 引入即可。")],-1),v=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"div"),a(),s("span",{class:"hljs-attr"},"id"),a("="),s("span",{class:"hljs-string"},'"app"'),a(">")]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"div"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"src"),a("="),s("span",{class:"hljs-string"},'"https://cdn.jsdelivr.net/npm/vue"'),a(">")]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"src"),a("="),s("span",{class:"hljs-string"},'"https://cdn.jsdelivr.net/npm/@varlet/ui/umd/varlet.js"'),a(">")]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(">")]),s("span",{class:"javascript"},[a(`
  `),s("span",{class:"hljs-keyword"},"const"),a(` app = Vue.createApp({
    `),s("span",{class:"hljs-attr"},"template"),a(": "),s("span",{class:"hljs-string"},"'<var-button>按钮</var-button>'"),a(`
  })
  app.use(Varlet).mount(`),s("span",{class:"hljs-string"},"'#app'"),a(`)
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`
`)])],-1),g=s("h4",null,"Webpack/Vite",-1),y=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," 通过 npm、yarn 或 pnpm 安装"),a(`
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," npm"),a(`
npm i @varlet/ui -S
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," yarn"),a(`
yarn add @varlet/ui
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," pnpm"),a(`
pnpm add @varlet/ui
`)])],-1),f=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),a(" App "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'./App.vue'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" Varlet "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/ui'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { createApp } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'vue'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(),s("span",{class:"hljs-string"},"'@varlet/ui/es/style'"),a(`

createApp(App).use(Varlet).mount(`),s("span",{class:"hljs-string"},"'#app'"),a(`)
`)])],-1),k=s("div",{class:"card"},[s("h3",null,"在线编辑组件"),s("p",null,[a("我们提供了网页版的组件编辑器，方便您对组件库的各个组件进行快速上手、在线编辑、分享给他人或是下载代码包本地运行。 您可以点击网页右上角的 "),s("code",null,"{...}"),a(" 图标或是 "),s("a",{href:"https://varlet.gitee.io/varlet-ui-playground"},"这里前往"),a("。")])],-1),w={class:"card"},V=s("h3",null,"文件路径注意",-1),b=s("p",null,[a("在 "),s("code",null,"@varlet/ui@2.7.0"),a(" 及其之后的版本，我们推荐使用如下省略后缀名的文件引入方式，以兼容 "),s("code",null,"js"),a(" 和 "),s("code",null,"mjs")],-1),x=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),a(),s("span",{class:"hljs-string"},"'@varlet/ui/es/style'"),a(`
`)])],-1);function A(N,C,$,B,q,S){const l=p("var-site-code-example");return c(),r("div",h,[i,d,s("div",j,[u,_,m,n(l,{"playground-ignore":""},{default:t(()=>[v]),_:1}),g,n(l,{"playground-ignore":""},{default:t(()=>[y]),_:1}),n(l,{"playground-ignore":""},{default:t(()=>[f]),_:1})]),k,s("div",w,[V,b,n(l,{"playground-ignore":""},{default:t(()=>[x]),_:1})])])}const D=e(o,[["render",A]]);export{D as default};
