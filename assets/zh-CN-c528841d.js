import{_ as c,p as e,f as o,h,M as s,q as n,S as t,P as a,aq as r}from"./vue-router.esm-bundler-0d52b99f.js";const d={components:{}},p={class:"varlet-site-doc"},i=s("h1",null,"图标",-1),j=s("div",{class:"card"},[s("h3",null,"介绍"),s("p",null,[a("基于字体的图标库，也支持网络图片。 字体图标来自 "),s("a",{href:"https://materialdesignicons.com/"},"Material Design Icon")])],-1),m={class:"card"},_=s("h3",null,"图标尺寸",-1),g=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-icon"),a(),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"checkbox-marked-circle"'),a(" />")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-icon"),a(),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"checkbox-marked-circle"'),a(),s("span",{class:"hljs-attr"},":size"),a("="),s("span",{class:"hljs-string"},'"26"'),a("/>")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),u={class:"card"},f=s("h3",null,"图标颜色",-1),v=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-icon"),a(),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"checkbox-marked-circle"'),a(),s("span",{class:"hljs-attr"},"color"),a("="),s("span",{class:"hljs-string"},'"#2979ff"'),a(" />")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-icon"),a(),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"checkbox-marked-circle"'),a(),s("span",{class:"hljs-attr"},"color"),a("="),s("span",{class:"hljs-string"},'"#2979ff"'),a(),s("span",{class:"hljs-attr"},":size"),a("="),s("span",{class:"hljs-string"},'"26"'),a("/>")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),y={class:"card"},b=s("h3",null,"使用图片",-1),k=s("p",null,[a("当传入的 "),s("code",null,"name"),a(" 是一个网络地址时,将会使用 "),s("code",null,"img"),a(" 标签以 "),s("code",null,"cover"),a(" 模式显示。"),s("code",null,"size"),a(" 为图片的宽高。")],-1),x=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-icon"),a(),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"https://varlet.gitee.io/varlet-ui/cat.jpg"'),a(),s("span",{class:"hljs-attr"},":size"),a("="),s("span",{class:"hljs-string"},'"32"'),a(" />")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),z={class:"card"},w=s("h3",null,"注册事件",-1),N=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"setup"),a(">")]),s("span",{class:"javascript"},[a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { Snackbar } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/ui'"),a(`
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`

`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-icon"),a(` 
    `),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"checkbox-marked-circle"'),a(`
    `),s("span",{class:"hljs-attr"},"color"),a("="),s("span",{class:"hljs-string"},'"#2979ff"'),a(`
    @`),s("span",{class:"hljs-attr"},"click"),a("="),s("span",{class:"hljs-string"},`"() => Snackbar.success('点击成功')"`),a(`
  />`)]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),S={class:"card"},C=s("h3",null,"图标切换动画",-1),V=s("p",null,[a("当设置了 "),s("code",null,"transition(ms)"),a(" 并通过图标的 "),s("code",null,"name"),a(" 切换图标时，可以触发切换动画。")],-1),$=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"setup"),a(">")]),s("span",{class:"javascript"},[a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { ref } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'vue'"),a(`

`),s("span",{class:"hljs-keyword"},"const"),a(" name = ref("),s("span",{class:"hljs-string"},"'information'"),a(`)

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),a(),s("span",{class:"hljs-title"},"toggle"),a("("),s("span",{class:"hljs-params"}),a(") ")]),a(`{
  name.value = name.value === `),s("span",{class:"hljs-string"},"'information'"),a(` 
    ? `),s("span",{class:"hljs-string"},"'checkbox-marked-circle'"),a(` 
    : `),s("span",{class:"hljs-string"},"'information'"),a(`
}
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`

`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-icon"),a(` 
    `),s("span",{class:"hljs-attr"},"color"),a("="),s("span",{class:"hljs-string"},'"#2979ff"'),a(` 
    `),s("span",{class:"hljs-attr"},":name"),a("="),s("span",{class:"hljs-string"},'"name"'),a(` 
    `),s("span",{class:"hljs-attr"},":transition"),a("="),s("span",{class:"hljs-string"},'"300"'),a(` 
    `),s("span",{class:"hljs-attr"},":size"),a("="),s("span",{class:"hljs-string"},'"30"'),a(` 
    @`),s("span",{class:"hljs-attr"},"click"),a("="),s("span",{class:"hljs-string"},'"toggle"'),a(`
  />`)]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),B={class:"card"},P=s("h3",null,"自定义图标库",-1),q=s("p",null,[a("首先您需要设置您自己的字体，并引入到您的项目。 这里假设扩展一个名为 "),s("code",null,"my-icons"),a(" 的字体。")],-1),E=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"/* 设置字体 */"),a(`
`),s("span",{class:"hljs-keyword"},"@font-face"),a(` {
  `),s("span",{class:"hljs-attribute"},"font-family"),a(": "),s("span",{class:"hljs-string"},'"my-icons"'),a(`;
  `),s("span",{class:"hljs-attribute"},"src"),a(": "),s("span",{class:"hljs-built_in"},"url"),a("("),s("span",{class:"hljs-string"},'"https://xxx.my-icons.ttf"'),a(") "),s("span",{class:"hljs-built_in"},"format"),a("("),s("span",{class:"hljs-string"},'"truetype"'),a(`);
}

`),s("span",{class:"hljs-comment"},"/* 设置命名空间 */"),a(`
`),s("span",{class:"hljs-selector-class"},".my-icon"),a(` {
  `),s("span",{class:"hljs-attribute"},"font-family"),a(": "),s("span",{class:"hljs-string"},'"my-icons"'),a(`;
}
`),s("span",{class:"hljs-comment"},"/* 或 */"),a(`
`),s("span",{class:"hljs-selector-class"},".my-icon--set"),a(` {
  `),s("span",{class:"hljs-attribute"},"font-family"),a(": "),s("span",{class:"hljs-string"},'"my-icons"'),a(`;
}
`),s("span",{class:"hljs-comment"},"/* 设置命名空间结束 */"),a(`

`),s("span",{class:"hljs-comment"},"/* 字体名称映射码点 */"),a(`
`),s("span",{class:"hljs-selector-class"},".my-icon-hot"),s("span",{class:"hljs-selector-pseudo"},"::before"),a(` {
  `),s("span",{class:"hljs-attribute"},"content"),a(": "),s("span",{class:"hljs-string"},'"\\F000"'),a(`;
}
`)])],-1),I=s("p",null,[a("到这里你就成功的扩展了自己的图标库，"),s("code",null,"my-icon"),a(" 就是你的字体 "),s("code",null,"命名空间(namespace)"),a("，您可以这样使用。")],-1),M=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-icon"),a(),s("span",{class:"hljs-attr"},"namespace"),a("="),s("span",{class:"hljs-string"},'"my-icon"'),a(),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"hot"'),a(" />")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),A=r('<h2>API</h2><div class="card"><h3>属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>name</code></td><td>图标名称</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>size</code></td><td>尺寸</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>color</code></td><td>图标颜色, 只适用于字体图标</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>namespace</code></td><td>图标的命名空间, 可扩展自定义图标库</td><td><em>string</em></td><td><code>var-icon</code></td></tr><tr><td><code>transition</code></td><td>过渡动画时间（ms）</td><td><em>string | number</em></td><td><code>0</code></td></tr></tbody></table></div><div class="card"><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>click</code></td><td>点击图标时触发</td><td><code>event: Event</code></td></tr></tbody></table></div><div class="card"><h3>样式变量</h3><p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--icon-size</code></td><td><code>20px</code></td></tr></tbody></table></div>',4);function D(F,T,G,H,J,K){const l=e("var-site-code-example");return o(),h("div",p,[i,j,s("div",m,[_,n(l,null,{default:t(()=>[g]),_:1})]),s("div",u,[f,n(l,null,{default:t(()=>[v]),_:1})]),s("div",y,[b,k,n(l,null,{default:t(()=>[x]),_:1})]),s("div",z,[w,n(l,null,{default:t(()=>[N]),_:1})]),s("div",S,[C,V,n(l,null,{default:t(()=>[$]),_:1})]),s("div",B,[P,q,n(l,{"playground-ignore":""},{default:t(()=>[E]),_:1}),I,n(l,{"playground-ignore":""},{default:t(()=>[M]),_:1})]),A])}const O=c(d,[["render",D]]);export{O as default};
