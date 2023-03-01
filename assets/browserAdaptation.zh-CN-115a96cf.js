import{_ as e,p as l,f as c,h as p,M as s,q as t,S as o,P as a,aq as r}from"./vue-router.esm-bundler-0d52b99f.js";const d={components:{}},h={class:"varlet-site-doc"},i=s("h1",null,"浏览器适配",-1),u=s("div",{class:"card"},[s("h3",null,"介绍"),s("p",null,[a("组件库提供移动端和桌面端适配方案， 移动端使用 "),s("code",null,"postcss-px-to-viewport"),a(" 方案进行适配， 桌面端使用 "),s("code",null,"@varlet/touch-emulator"),a(" 方案进行适配。")])],-1),_={class:"card"},m=r("<h3>移动端适配</h3><p>组件库设计基于 <code>375px</code> 宽度设计稿，推荐使用 postcss 插件将 <code>px</code> 单位转换成 <code>vw</code> 单位从而实现移动端适配。 在 <code>Webpack/Vite</code> 项目根路径下创建 <code>postcss.config.js</code> 并做如下配置之后 <code>375px -&gt; 100vw</code>。</p>",2),j=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," npm"),a(`
npm i postcss-px-to-viewport -D
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," yarn"),a(`
yarn add postcss-px-to-viewport -D
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," pnpm"),a(`
pnpm add postcss-px-to-viewport -D
`)])],-1),v=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"// postcss.config.js"),a(`
`),s("span",{class:"hljs-built_in"},"module"),a(`.exports = {
  `),s("span",{class:"hljs-attr"},"plugins"),a(`: {
    `),s("span",{class:"hljs-string"},"'postcss-px-to-viewport'"),a(`: {
      `),s("span",{class:"hljs-attr"},"viewportWidth"),a(": "),s("span",{class:"hljs-number"},"375"),a(`,
      `),s("span",{class:"hljs-attr"},"unitPrecision"),a(": "),s("span",{class:"hljs-number"},"6"),a(`,
      `),s("span",{class:"hljs-attr"},"unitToConvert"),a(": "),s("span",{class:"hljs-string"},"'px'"),a(`,
      `),s("span",{class:"hljs-attr"},"propList"),a(": ["),s("span",{class:"hljs-string"},"'*'"),a(`],
    }
  }
}
`)])],-1),x={class:"card"},g=s("h3",null,"桌面端适配",-1),f=s("p",null,[a("由于组件库交互事件使用 "),s("code",null,"touch"),a(" 事件进行开发，不支持桌面端的 "),s("code",null,"mouse"),a(" 事件， 推荐使用 "),s("code",null,"@varlet/touch-emulator"),a(" 将 "),s("code",null,"touch -> mouse"),a(" 从而实现桌面端适配。")],-1),b=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," npm"),a(`
npm i @varlet/touch-emulator
`),s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," yarn"),a(`
yarn add @varlet/touch-emulator
`),s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," pnpm"),a(`
pnpm add @varlet/touch-emulator
`)])],-1),w=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),a(),s("span",{class:"hljs-string"},"'@varlet/touch-emulator'"),a(`
`)])],-1);function y(N,V,k,C,$,B){const n=l("var-site-code-example");return c(),p("div",h,[i,u,s("div",_,[m,t(n,{"playground-ignore":""},{default:o(()=>[j]),_:1}),t(n,{"playground-ignore":""},{default:o(()=>[v]),_:1})]),s("div",x,[g,f,t(n,{"playground-ignore":""},{default:o(()=>[b]),_:1}),t(n,{"playground-ignore":""},{default:o(()=>[w]),_:1})])])}const q=e(d,[["render",y]]);export{q as default};
