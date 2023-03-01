import{_ as e,p as c,f as r,h as o,M as s,q as n,S as t,P as a,aq as h}from"./vue-router.esm-bundler-0d52b99f.js";const p={components:{}},i={class:"varlet-site-doc"},d=s("h1",null,"样式定制",-1),j=s("div",{class:"card"},[s("h3",null,"介绍"),s("p",null,[a("组件库通过 "),s("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties"},"css 变量"),a(" 来组织样式，每个组件都有对应的样式变量， 您可以通过 css 文件覆盖的方式直接替换根节点上的样式变量, 或者使用 StyleProvider 组件。")])],-1),u={class:"card"},m=s("h3",null,"基本样式变量",-1),b=s("p",null,"以下是组件库一些基本的样式变量。",-1),g=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-selector-pseudo"},":root"),a(` {
  --`),s("span",{class:"hljs-attribute"},"font-size"),a("-xs: "),s("span",{class:"hljs-number"},"10px"),a(`;
  --`),s("span",{class:"hljs-attribute"},"font-size"),a("-sm: "),s("span",{class:"hljs-number"},"12px"),a(`;
  --`),s("span",{class:"hljs-attribute"},"font-size"),a("-md: "),s("span",{class:"hljs-number"},"14px"),a(`;
  --`),s("span",{class:"hljs-attribute"},"font-size"),a("-lg: "),s("span",{class:"hljs-number"},"16px"),a(`;
  --`),s("span",{class:"hljs-attribute"},"icon"),a("-size-xs: "),s("span",{class:"hljs-number"},"16px"),a(`;
  --`),s("span",{class:"hljs-attribute"},"icon"),a("-size-sm: "),s("span",{class:"hljs-number"},"18px"),a(`;
  --`),s("span",{class:"hljs-attribute"},"icon"),a("-size-md: "),s("span",{class:"hljs-number"},"20px"),a(`;
  --`),s("span",{class:"hljs-attribute"},"icon"),a("-size-lg: "),s("span",{class:"hljs-number"},"22px"),a(`;
  --`),s("span",{class:"hljs-attribute"},"color"),a("-"),s("span",{class:"hljs-selector-tag"},"body"),a(": "),s("span",{class:"hljs-number"},"#fff"),a(`;
  --`),s("span",{class:"hljs-attribute"},"color"),a("-text: "),s("span",{class:"hljs-number"},"#333"),a(`;
  --`),s("span",{class:"hljs-attribute"},"color"),a("-primary: "),s("span",{class:"hljs-number"},"#3a7afe"),a(`;
  --`),s("span",{class:"hljs-attribute"},"color"),a("-info: "),s("span",{class:"hljs-number"},"#00afef"),a(`;
  --`),s("span",{class:"hljs-attribute"},"color"),a("-success: "),s("span",{class:"hljs-number"},"#00c48f"),a(`;
  --`),s("span",{class:"hljs-attribute"},"color"),a("-warning: "),s("span",{class:"hljs-number"},"#ff9f00"),a(`;
  --`),s("span",{class:"hljs-attribute"},"color"),a("-danger: "),s("span",{class:"hljs-number"},"#f44336"),a(`;
  --`),s("span",{class:"hljs-attribute"},"color"),a("-disabled: "),s("span",{class:"hljs-number"},"#e0e0e0"),a(`;
  --`),s("span",{class:"hljs-attribute"},"color"),a("-text-disabled: "),s("span",{class:"hljs-number"},"#aaa"),a(`;
  --cubic-bezier: `),s("span",{class:"hljs-built_in"},"cubic-bezier"),a("("),s("span",{class:"hljs-number"},"0.25"),a(", "),s("span",{class:"hljs-number"},"0.8"),a(", "),s("span",{class:"hljs-number"},"0.5"),a(", "),s("span",{class:"hljs-number"},"1"),a(`);
}
`)])],-1),_=s("div",{class:"card"},[s("h3",null,"运行时修改样式"),s("p",null,[a("可能您有在程序运行时替换样式的需求，比如一键换肤之类的，组件库提供了 StyleProvider 组件来辅助管理样式， 组件提供了 "),s("code",null,"组件式调用"),a(" 和 "),s("code",null,"函数式调用"),a(" 和两种调用方式。")])],-1),v={class:"card"},y=s("h3",null,"组件式调用",-1),f=s("p",null,[a("组件式调用可以有范围性的定制组件样式，避免了全局污染，需要注意是有些使用 "),s("code",null,"teleport"),a(" 传送到 "),s("code",null,"StyleProvider"),a(" 外的元素将不会生效。")],-1),k=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"setup"),a(">")]),s("span",{class:"javascript"},[a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { ref, reactive } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'vue'"),a(`

`),s("span",{class:"hljs-keyword"},"const"),a(` state = reactive({
  `),s("span",{class:"hljs-attr"},"score"),a(": "),s("span",{class:"hljs-number"},"5"),a(`,
  `),s("span",{class:"hljs-attr"},"license"),a(": "),s("span",{class:"hljs-literal"},"true"),a(`,
})

`),s("span",{class:"hljs-keyword"},"const"),a(` successTheme = {
  `),s("span",{class:"hljs-string"},"'--rate-primary-color'"),a(": "),s("span",{class:"hljs-string"},"'var(--color-success)'"),a(`,
  `),s("span",{class:"hljs-string"},"'--button-primary-color'"),a(": "),s("span",{class:"hljs-string"},"'var(--color-success)'"),a(`,
  `),s("span",{class:"hljs-string"},"'--switch-handle-active-background'"),a(": "),s("span",{class:"hljs-string"},"'var(--color-success)'"),a(`,
  `),s("span",{class:"hljs-string"},"'--switch-track-active-background'"),a(": "),s("span",{class:"hljs-string"},"'var(--color-success)'"),a(`,
}

`),s("span",{class:"hljs-keyword"},"const"),a(" styleVars = ref("),s("span",{class:"hljs-literal"},"null"),a(`)

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),a(),s("span",{class:"hljs-title"},"toggleTheme"),a("("),s("span",{class:"hljs-params"}),a(") ")]),a(`{
  styleVars.value = styleVars.value ? `),s("span",{class:"hljs-literal"},"null"),a(` : successTheme
}
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`

`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-style-provider"),a(),s("span",{class:"hljs-attr"},":style-vars"),a("="),s("span",{class:"hljs-string"},'"styleVars"'),a(">")]),a(`
    `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-rate"),a(),s("span",{class:"hljs-attr"},"v-model"),a("="),s("span",{class:"hljs-string"},'"state.score"'),a(" />")]),a(`
    `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-switch"),a(),s("span",{class:"hljs-attr"},"v-model"),a("="),s("span",{class:"hljs-string"},'"state.license"'),a(" />")]),a(`
    `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-button"),a(`
      `),s("span",{class:"hljs-attr"},"style"),a("="),s("span",{class:"hljs-string"},'"margin-top: 10px"'),a(`
      `),s("span",{class:"hljs-attr"},"type"),a("="),s("span",{class:"hljs-string"},'"primary"'),a(`
      `),s("span",{class:"hljs-attr"},"block"),a(`
      @`),s("span",{class:"hljs-attr"},"click"),a("="),s("span",{class:"hljs-string"},'"toggleTheme"'),a(`
    >`)]),a(`
      切换样式变量
    `),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-button"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-style-provider"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),x={class:"card"},S=s("h3",null,"函数式调用",-1),w=s("p",null,[a("函数式的调用是直接更新 "),s("code",null,":root"),a(" 上的变量，适合需要全局更新样式的情况。")],-1),z=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"setup"),a(">")]),s("span",{class:"javascript"},[a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { StyleProvider } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/ui'"),a(`

`),s("span",{class:"hljs-keyword"},"let"),a(" rootStyleVars = "),s("span",{class:"hljs-literal"},"null"),a(`

`),s("span",{class:"hljs-keyword"},"const"),a(` darkTheme = {
  `),s("span",{class:"hljs-string"},"'--color-primary'"),a(": "),s("span",{class:"hljs-string"},"'#3f51b5'"),a(`
}

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),a(),s("span",{class:"hljs-title"},"toggleRootTheme"),a("("),s("span",{class:"hljs-params"}),a(") ")]),a(`{
  rootStyleVars = rootStyleVars ? `),s("span",{class:"hljs-literal"},"null"),a(` : darkTheme
  StyleProvider(rootStyleVars)
}
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`

`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-button"),a(),s("span",{class:"hljs-attr"},"type"),a("="),s("span",{class:"hljs-string"},'"primary"'),a(),s("span",{class:"hljs-attr"},"block"),a(" @"),s("span",{class:"hljs-attr"},"click"),a("="),s("span",{class:"hljs-string"},'"toggleRootTheme"'),a(">")]),a("切换根节点样式变量"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-button"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),V=h('<h2>API</h2><div class="card"><h3>属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>style-vars</code></td><td>CSS 变量</td><td><em>Record&lt;string, string&gt;</em></td><td><code>{}</code></td></tr><tr><td><code>tag</code></td><td>自定义标签名</td><td><em>string</em></td><td><code>div</code></td></tr></tbody></table></div><div class="card"><h3>插槽</h3><table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>组件内容</td><td><code>-</code></td></tr></tbody></table></div>',3);function T(C,P,N,$,B,R){const l=c("var-site-code-example");return r(),o("div",i,[d,j,s("div",u,[m,b,n(l,{"playground-ignore":""},{default:t(()=>[g]),_:1})]),_,s("div",v,[y,f,n(l,null,{default:t(()=>[k]),_:1})]),s("div",x,[S,w,n(l,null,{default:t(()=>[z]),_:1})]),V])}const A=e(p,[["render",T]]);export{A as default};
