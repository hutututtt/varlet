import{_ as l,p as n,f as e,h as d,M as t,q as c,S as o,aq as r,P as s}from"./vue-router.esm-bundler-0d52b99f.js";const h={components:{}},p={class:"varlet-site-doc"},i=t("h1",null,"加载条",-1),j=t("div",{class:"card"},[t("h3",null,"介绍"),t("p",null,"页面顶部显示加载进度。")],-1),m={class:"card"},g=t("h3",null,"基本使用",-1),u=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { LoadingBar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" hasCustomStyle = ref("),t("span",{class:"hljs-literal"},"false"),s(`)

`),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"setStyle"),s("("),t("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),t("span",{class:"hljs-keyword"},"if"),s(` (hasCustomStyle.value) {
    LoadingBar.resetDefaultOptions()
  } `),t("span",{class:"hljs-keyword"},"else"),s(` {
    LoadingBar.setDefaultOptions({
      `),t("span",{class:"hljs-attr"},"errorColor"),s(": "),t("span",{class:"hljs-string"},"'#ff8800'"),s(`,
      `),t("span",{class:"hljs-attr"},"color"),s(": "),t("span",{class:"hljs-string"},"'#10afef'"),s(`,
      `),t("span",{class:"hljs-attr"},"height"),s(": "),t("span",{class:"hljs-string"},"'5px'"),s(`,
    })
  }

  hasCustomStyle.value = !hasCustomStyle.value
}

`),t("span",{class:"hljs-comment"},"// 移动端案例设置了偏移"),s(`
`),t("span",{class:"hljs-comment"},"// LoadingBar.setDefaultOptions({"),s(`
`),t("span",{class:"hljs-comment"},"//   top: '48px'"),s(`
`),t("span",{class:"hljs-comment"},"// })"),s(`
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-space"),s(),t("span",{class:"hljs-attr"},"direction"),s("="),t("span",{class:"hljs-string"},'"column"'),s(),t("span",{class:"hljs-attr"},"size"),s("="),t("span",{class:"hljs-string"},'"large"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"LoadingBar.start()"'),s(">")]),s("开始"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"LoadingBar.finish()"'),s(">")]),s("结束"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"LoadingBar.error()"'),s(">")]),s("错误"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"setStyle"'),s(">")]),s(`
      {{ hasCustomStyle ? '清除样式' : '设置样式' }}
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),v=r('<h2>API</h2><div class="card"><h3>方法</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>LoadingBar.start</code></td><td>开始加载</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>LoadingBar.finish</code></td><td>结束加载</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>LoadingBar.error</code></td><td>加载失败</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>LoadingBar.setDefaultOptions</code></td><td>设置默认的选项配置</td><td><em>options: Options</em></td><td><code>-</code></td></tr><tr><td><code>LoadingBar.resetDefaultOptions</code></td><td>重置默认的选项配置</td><td><em>-</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>LoadingBar Options</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>color</code></td><td>加载条颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>errorColor</code></td><td>加载失败时的颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>height</code></td><td>加载条的高度</td><td><em>string|number</em></td><td><code>-</code></td></tr><tr><td><code>top</code></td><td>加载条距离页面顶部的距离</td><td><em>string|number</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>样式变量</h3><p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--loading-bar-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--loading-bar-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--loading-bar-height</code></td><td><code>3px</code></td></tr></tbody></table></div>',4);function y(b,_,f,k,B,L){const a=n("var-site-code-example");return e(),d("div",p,[i,j,t("div",m,[g,c(a,null,{default:o(()=>[u]),_:1})]),v])}const x=l(h,[["render",y]]);export{x as default};
