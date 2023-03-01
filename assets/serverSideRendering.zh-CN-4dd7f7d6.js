import{_ as l,p as o,f as p,h as c,M as s,q as t,S as e,aq as r,P as n}from"./vue-router.esm-bundler-0d52b99f.js";const u={components:{}},i={class:"varlet-site-doc"},h=r('<h1>服务端渲染</h1><div class="card"><h3>介绍</h3><p>这里为您介绍在 <code>Nuxt</code> 中引入 <code>Varlet</code> 的基本方式。</p></div><div class="card"><h3>创建 Nuxt 项目</h3><p><code>Nuxt.js</code> 是一个基于 <code>Vue.js</code> 的服务端渲染应用框架，详细教程请移步 <a href="https://nuxt.com">Nuxt</a>。</p></div>',3),d={class:"card"},m=s("h3",null,"按需引入",-1),j=s("p",null,[n("通过插件 "),s("a",{href:"https://github.com/antfu/unplugin-vue-components"},"unplugin-vue-components"),n(" 和 "),s("a",{href:"https://github.com/antfu/unplugin-auto-import"},"unplugin-auto-import"),n(" 实现组件自动按需导入。")],-1),_=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," 安装插件"),n(`
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," npm"),n(`
npm i unplugin-vue-components unplugin-auto-import -D
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," yarn"),n(`
yarn add unplugin-vue-components unplugin-auto-import -D
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," pnpm"),n(`
pnpm add unplugin-vue-components unplugin-auto-import -D
`)])],-1),v=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"// nuxt.config.ts"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(" components "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'unplugin-vue-components/vite'"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(" autoImport "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'unplugin-auto-import/vite'"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(" { VarletUIResolver } "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'unplugin-vue-components/resolvers'"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(" { defineNuxtConfig } "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'nuxt/config'"),n(`

`),s("span",{class:"hljs-keyword"},"export"),n(),s("span",{class:"hljs-keyword"},"default"),n(` defineNuxtConfig({
  `),s("span",{class:"hljs-attr"},"vite"),n(`: {
    `),s("span",{class:"hljs-attr"},"ssr"),n(`: {
      `),s("span",{class:"hljs-attr"},"noExternal"),n(": ["),s("span",{class:"hljs-string"},"'@varlet/ui'"),n(`]
    },
    `),s("span",{class:"hljs-attr"},"plugins"),n(`: [
      components({
        `),s("span",{class:"hljs-attr"},"resolvers"),n(`: [VarletUIResolver()]
      }),
      autoImport({
        `),s("span",{class:"hljs-attr"},"resolvers"),n(": [VarletUIResolver({ "),s("span",{class:"hljs-attr"},"autoImport"),n(": "),s("span",{class:"hljs-literal"},"true"),n(` })],
      })
    ]
  }
})
`)])],-1),g=s("div",{class:"card"},[s("h3",null,"示例仓库"),s("p",null,[s("a",{href:"https://github.com/varletjs/varlet-install-example/tree/main/nuxt"},"varlet-install-example/nuxt")])],-1);function f(x,y,k,w,N,V){const a=o("var-site-code-example");return p(),c("div",i,[h,s("div",d,[m,j,t(a,{"playground-ignore":""},{default:e(()=>[_]),_:1}),t(a,null,{default:e(()=>[v]),_:1})]),g])}const I=l(u,[["render",f]]);export{I as default};
