import{_ as l,p as n,f as e,h as c,M as t,q as d,S as r,aq as o,P as s}from"./vue-router.esm-bundler.2ed3d3be.js";const h={components:{}},p={class:"varlet-site-doc"},i=t("h1",null,"\u52A0\u8F7D\u6761",-1),j=t("div",{class:"card"},[t("h3",null,"\u4ECB\u7ECD"),t("p",null,"\u9875\u9762\u9876\u90E8\u663E\u793A\u52A0\u8F7D\u8FDB\u5EA6\u3002")],-1),m={class:"card"},g=t("h3",null,"\u57FA\u672C\u4F7F\u7528",-1),u=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { LoadingBar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" hasCustomStyle = ref("),t("span",{class:"hljs-literal"},"false"),s(`)

`),t("span",{class:"hljs-keyword"},"const"),s(" setStyle = "),t("span",{class:"hljs-function"},"() =>"),s(` {
  LoadingBar.mergeConfig({
    `),t("span",{class:"hljs-attr"},"errorColor"),s(": hasCustomStyle.value ? "),t("span",{class:"hljs-literal"},"undefined"),s(" : "),t("span",{class:"hljs-string"},"'#ff8800'"),s(`,
    `),t("span",{class:"hljs-attr"},"color"),s(": hasCustomStyle.value ? "),t("span",{class:"hljs-literal"},"undefined"),s(" : "),t("span",{class:"hljs-string"},"'#10afef'"),s(`,
    `),t("span",{class:"hljs-attr"},"height"),s(": hasCustomStyle.value ? "),t("span",{class:"hljs-literal"},"undefined"),s(" : "),t("span",{class:"hljs-string"},"'5px'"),s(`
  })

  hasCustomStyle.value = !hasCustomStyle.value
}

`),t("span",{class:"hljs-comment"},"// \u79FB\u52A8\u7AEF\u6848\u4F8B\u8BBE\u7F6E\u4E86\u504F\u79FB"),s(`
`),t("span",{class:"hljs-comment"},"// LoadingBar.mergeConfig({"),s(`
`),t("span",{class:"hljs-comment"},"//   top: '48px'"),s(`
`),t("span",{class:"hljs-comment"},"// })"),s(`
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-space"),s(),t("span",{class:"hljs-attr"},"direction"),s("="),t("span",{class:"hljs-string"},'"column"'),s(),t("span",{class:"hljs-attr"},"size"),s("="),t("span",{class:"hljs-string"},'"large"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"LoadingBar.start()"'),s(">")]),s("\u5F00\u59CB"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"LoadingBar.finish()"'),s(">")]),s("\u7ED3\u675F"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"LoadingBar.error()"'),s(">")]),s("\u9519\u8BEF"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"setStyle"'),s(">")]),s(`
      {{ hasCustomStyle ? '\u6E05\u9664\u6837\u5F0F' : '\u8BBE\u7F6E\u6837\u5F0F' }}
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),v=o('<h2>API</h2><div class="card"><h3>\u65B9\u6CD5</h3><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td><code>LoadingBar.mergeConfig</code></td><td>\u5408\u5E76\u8986\u76D6\u52A0\u8F7D\u6761\u7684\u9ED8\u8BA4\u6837\u5F0F</td><td><em>options: Options</em></td><td><code>-</code></td></tr><tr><td><code>LoadingBar.start</code></td><td>\u5F00\u59CB\u52A0\u8F7D</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>LoadingBar.finish</code></td><td>\u7ED3\u675F\u52A0\u8F7D</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>LoadingBar.error</code></td><td>\u52A0\u8F7D\u5931\u8D25</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>LoadingBar Options</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>color</code></td><td>\u52A0\u8F7D\u6761\u989C\u8272</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>errorColor</code></td><td>\u52A0\u8F7D\u5931\u8D25\u65F6\u7684\u989C\u8272</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>height</code></td><td>\u52A0\u8F7D\u6761\u7684\u9AD8\u5EA6</td><td><em>string|number</em></td><td><code>-</code></td></tr><tr><td><code>top</code></td><td>\u52A0\u8F7D\u6761\u8DDD\u79BB\u9875\u9762\u9876\u90E8\u7684\u8DDD\u79BB</td><td><em>string|number</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><p>\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684 css \u53D8\u91CF\uFF0C\u53EF\u4EE5\u4F7F\u7528 <a href="#/zh-CN/style-provider">StyleProvider \u7EC4\u4EF6</a> \u8FDB\u884C\u6837\u5F0F\u5B9A\u5236</p><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--loading-bar-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--loading-bar-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--loading-bar-height</code></td><td><code>3px</code></td></tr></tbody></table></div>',4);function y(b,_,f,k,C,B){const a=n("var-site-code-example");return e(),c("div",p,[i,j,t("div",m,[g,d(a,null,{default:r(()=>[u]),_:1})]),v])}const L=l(h,[["render",y]]);export{L as default};
