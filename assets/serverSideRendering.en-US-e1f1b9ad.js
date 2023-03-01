import{_ as o,p as l,f as r,h as p,M as s,q as e,S as t,aq as c,P as n}from"./vue-router.esm-bundler-0d52b99f.js";const i={components:{}},u={class:"varlet-site-doc"},d=c('<h1>Server side rendering</h1><div class="card"><h3>Intro</h3><p>Here is the basic way to install <code>Varlet</code> in <code>Nuxt</code>.</p></div><div class="card"><h3>Create Nuxt project</h3><p><code>Nuxt.js</code> is a server-side rendering application framework based on <code>Vue.js</code>, please go to <a href="https://nuxt.com">Nuxt</a> for a detailed tutorial.</p></div>',3),h={class:"card"},m=s("h3",null,"Import On Demand",-1),v=s("p",null,[n("via plugin "),s("a",{href:"https://github.com/antfu/unplugin-vue-components"},"unplugin-vue-components"),n(" and "),s("a",{href:"https://github.com/antfu/unplugin-auto-import"},"unplugin-auto-import"),n(" Realize the automatic on-demand import of components.")],-1),g=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," Install the plugin"),n(`
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," npm"),n(`
npm i unplugin-vue-components unplugin-auto-import -D
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"},"yarn"),n(`
yarn add unplugin-vue-components unplugin-auto-import -D
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"},"pnpm"),n(`
pnpm add unplugin-vue-components unplugin-auto-import -D
`)])],-1),j=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"// nuxt.config.ts"),n(`
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
`)])],-1),_=s("div",{class:"card"},[s("h3",null,"Example Repository"),s("p",null,[s("a",{href:"https://github.com/varletjs/varlet-install-example/tree/main/nuxt"},"varlet-install-example/nuxt")])],-1);function f(x,y,k,w,N,b){const a=l("var-site-code-example");return r(),p("div",u,[d,s("div",h,[m,v,e(a,{"playground-ignore":""},{default:t(()=>[g]),_:1}),e(a,null,{default:t(()=>[j]),_:1})]),_])}const V=o(i,[["render",f]]);export{V as default};
