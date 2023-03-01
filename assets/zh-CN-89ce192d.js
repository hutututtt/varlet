import{_ as e,p as r,f as p,h as o,M as a,q as l,S as n,aq as c,P as s}from"./vue-router.esm-bundler-0d52b99f.js";const d={components:{}},h={class:"varlet-site-doc"},j=a("h1",null,"结果",-1),i=a("div",{class:"card"},[a("h3",null,"介绍"),a("p",null,"用于向用户展示结果。")],-1),g={class:"card"},u=a("h3",null,"基本使用",-1),m=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-result"),s(` 
    `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"success"'),s(` 
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"成功"'),s(`
    `),a("span",{class:"hljs-attr"},"description"),s("="),a("span",{class:"hljs-string"},'"嗨~ 我是结果页的一段描述~"'),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"footer"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"success"'),s(">")]),s("知道了"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-result"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),v={class:"card"},f=c("<h3>类型</h3><p>结果类型，可选值为 <code>info</code>，<code>success</code>，<code>warning</code>，<code>error</code>，<code>question</code>，<code>empty</code>。</p>",2),b=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" success = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" error = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" info = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" warning = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" question = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" empty = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-space"),s(),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"column"'),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"large"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"success"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"success = true"'),s(">")]),s("成功"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"warning = true"'),s(">")]),s("警告"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"info"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"info = true"'),s(">")]),s("信息"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"danger"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"error = true"'),s(">")]),s("错误"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(` 
      `),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"var(--result-question-color)"'),s(`
      `),a("span",{class:"hljs-attr"},"text-color"),s("="),a("span",{class:"hljs-string"},'"#fff"'),s(`
      `),a("span",{class:"hljs-attr"},"block"),s(` 
      @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"question = true"'),s(`
    >`)]),s(`
      疑问
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(` 
      `),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"var(--result-empty-color)"'),s(` 
      `),a("span",{class:"hljs-attr"},"text-color"),s("="),a("span",{class:"hljs-string"},'"#fff"'),s(`
      `),a("span",{class:"hljs-attr"},"block"),s(`
      @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"empty = true"'),s(`
    >`)]),s(`
      空值
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
  
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-popup"),s(),a("span",{class:"hljs-attr"},":default-style"),s("="),a("span",{class:"hljs-string"},'"false"'),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"success"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-result"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"result"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"success"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"成功"'),s(),a("span",{class:"hljs-attr"},"description"),s("="),a("span",{class:"hljs-string"},'"嗨~ 我是结果页的一段描述~"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"footer"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"success"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"success = false"'),s(">")]),s("知道了"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-result"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-popup"),s(">")]),s(`

  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-popup"),s(),a("span",{class:"hljs-attr"},":default-style"),s("="),a("span",{class:"hljs-string"},'"false"'),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-result"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"result"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"警告"'),s(),a("span",{class:"hljs-attr"},"description"),s("="),a("span",{class:"hljs-string"},'"嗨~ 我是结果页的一段描述~"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"footer"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"warning = false"'),s(">")]),s("知道了"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-result"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-popup"),s(">")]),s(`

  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-popup"),s(),a("span",{class:"hljs-attr"},":default-style"),s("="),a("span",{class:"hljs-string"},'"false"'),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"info"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-result"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"result"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"info"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"信息"'),s(),a("span",{class:"hljs-attr"},"description"),s("="),a("span",{class:"hljs-string"},'"嗨~ 我是结果页的一段描述~"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"footer"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"info"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"info = false"'),s(">")]),s("知道了"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-result"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-popup"),s(">")]),s(`

  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-popup"),s(),a("span",{class:"hljs-attr"},":default-style"),s("="),a("span",{class:"hljs-string"},'"false"'),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"error"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-result"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"result"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"error"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"错误"'),s(),a("span",{class:"hljs-attr"},"description"),s("="),a("span",{class:"hljs-string"},'"嗨~ 我是结果页的一段描述~"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"footer"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"danger"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"error = false"'),s(">")]),s("知道了"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-result"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-popup"),s(">")]),s(`

  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-popup"),s(),a("span",{class:"hljs-attr"},":default-style"),s("="),a("span",{class:"hljs-string"},'"false"'),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"question"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-result"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"result"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"question"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"疑问"'),s(),a("span",{class:"hljs-attr"},"description"),s("="),a("span",{class:"hljs-string"},'"嗨~ 我是结果页的一段描述~"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"footer"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(` 
          `),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"var(--result-question-color)"'),s(` 
          `),a("span",{class:"hljs-attr"},"text-color"),s("="),a("span",{class:"hljs-string"},'"#fff"'),s(` 
          @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"question = false"'),s(`
        >`)]),s(`
          知道了
        `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-result"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-popup"),s(">")]),s(`

  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-popup"),s(),a("span",{class:"hljs-attr"},":default-style"),s("="),a("span",{class:"hljs-string"},'"false"'),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"empty"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-result"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"result"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"empty"'),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"空值"'),s(),a("span",{class:"hljs-attr"},"description"),s("="),a("span",{class:"hljs-string"},'"嗨~ 我是结果页的一段描述~"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"footer"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(` 
          `),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"var(--result-empty-color)"'),s(`
          `),a("span",{class:"hljs-attr"},"text-color"),s("="),a("span",{class:"hljs-string"},'"#fff"'),s(` 
          @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"empty = false"'),s(">")]),s(`
          知道了
        `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-result"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-popup"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".result"),s(` {
  `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"75vw"),s(),a("span",{class:"hljs-meta"},"!important"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),y=c('<h2>API</h2><div class="card"><h3>属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>type</code></td><td>结果状态，可选值为 <code>info</code> <code>success</code> <code>warning</code> <code>error</code> <code>question</code> <code>empty</code></td><td><em>string</em></td><td><code>success</code></td></tr><tr><td><code>title</code></td><td>标题</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>description</code></td><td>描述</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>image-size</code></td><td>图片尺寸</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>animation</code></td><td>是否开启动画，仅对 <code>success</code> 状态有效</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table></div><div class="card"><h3>插槽</h3><table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>image</code></td><td>自定义图标</td><td><code>-</code></td></tr><tr><td><code>title</code></td><td>自定义标题</td><td><code>-</code></td></tr><tr><td><code>description</code></td><td>自定义描述</td><td><code>-</code></td></tr><tr><td><code>footer</code></td><td>自定义底部内容</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>修改背景颜色时注意</h3><p>请尽可能不要修改背景色为透明或半透明，可能会影响成功状态的动画效果。</p></div><div class="card"><h3>样式变量</h3><p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--result-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--result-info-color</code></td><td><code>var(--color-info)</code></td></tr><tr><td><code>--result-info-border-color</code></td><td><code>rgba(0, 175, 239, 0.3)</code></td></tr><tr><td><code>--result-success-color</code></td><td><code>var(--color-success)</code></td></tr><tr><td><code>--result-success-border-color</code></td><td><code>rgba(0, 196, 143, 0.3)</code></td></tr><tr><td><code>--result-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--result-error-border-color</code></td><td><code>rgba(244, 67, 54, 0.3)</code></td></tr><tr><td><code>--result-warning-color</code></td><td><code>var(--color-warning)</code></td></tr><tr><td><code>--result-warning-border-color</code></td><td><code>rgba(255, 159, 0, 0.3)</code></td></tr><tr><td><code>--result-question-color</code></td><td><code>#607d8b</code></td></tr><tr><td><code>--result-question-border-color</code></td><td><code>rgba(96, 125, 139, 0.3)</code></td></tr><tr><td><code>--result-empty-color</code></td><td><code>#9e9e9e</code></td></tr><tr><td><code>--result-empty-border-color</code></td><td><code>rgba(158, 158, 158, 0.3)</code></td></tr><tr><td><code>--result-padding</code></td><td><code>24px</code></td></tr><tr><td><code>--result-border-radius</code></td><td><code>3px</code></td></tr><tr><td><code>--result-title-color</code></td><td><code>#444</code></td></tr><tr><td><code>--result-title-font-size</code></td><td><code>32px</code></td></tr><tr><td><code>--result-title-margin</code></td><td><code>15px 0 0 0</code></td></tr><tr><td><code>--result-image-size</code></td><td><code>80px</code></td></tr><tr><td><code>--result-title-font-weight</code></td><td><code>500</code></td></tr><tr><td><code>--result-description-margin</code></td><td><code>10px 0 0 0</code></td></tr><tr><td><code>--result-description-font-size</code></td><td><code>14px</code></td></tr><tr><td><code>--result-description-color</code></td><td><code>rgba(0, 0, 0, 0.6)</code></td></tr><tr><td><code>--result-description-line-height</code></td><td><code>1.6</code></td></tr></tbody></table></div>',5);function _(w,k,x,q,z,N){const t=r("var-site-code-example");return p(),o("div",h,[j,i,a("div",g,[u,l(t,null,{default:n(()=>[m]),_:1})]),a("div",v,[f,l(t,null,{default:n(()=>[b]),_:1})]),y])}const V=e(d,[["render",_]]);export{V as default};
