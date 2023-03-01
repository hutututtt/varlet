import{_ as n,p as c,f as d,h as r,M as a,q as l,S as e,aq as o,P as s}from"./vue-router.esm-bundler-0d52b99f.js";const p={components:{}},h={class:"varlet-site-doc"},i=a("h1",null,"图片预览",-1),j=a("div",{class:"card"},[a("h3",null,"介绍"),a("p",null,"图片放大预览，支持双击倍数放大，支持函数调用和组件调用两种方式。")],-1),g=a("h2",null,"函数调用",-1),m={class:"card"},v=a("h3",null,"基本使用",-1),u=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ImagePreview } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"preview"),s("("),a("span",{class:"hljs-params"}),s(") ")]),s(`{
  ImagePreview(`),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"preview"'),s(">")]),s("基本使用"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),w={class:"card"},_=a("h3",null,"处理回调函数",-1),b=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ImagePreview } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"preview"),s("("),a("span",{class:"hljs-params"}),s(") ")]),s(`{
  ImagePreview({
    `),a("span",{class:"hljs-attr"},"images"),s(`: [
      `),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
      `),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat2.jpg'"),s(`
    ],
    `),a("span",{class:"hljs-function"},[a("span",{class:"hljs-title"},"onChange"),s("("),a("span",{class:"hljs-params"},"index"),s(")")]),s(` {
      `),a("span",{class:"hljs-built_in"},"console"),s(`.log(index)
    }
  })
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"preview"'),s(">")]),s("处理回调函数"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),f=a("h2",null,"组件使用",-1),k={class:"card"},y=a("h3",null,"基本使用",-1),x=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" show = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(` images = ref([
  `),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
  `),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat2.jpg'"),s(`,
])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(`
    `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(`
    `),a("span",{class:"hljs-attr"},"block"),s(`
    @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = true"'),s(`
  >`)]),s(`
    基本使用
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-image-preview"),s(),a("span",{class:"hljs-attr"},":images"),s("="),a("span",{class:"hljs-string"},'"images"'),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"show"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),P={class:"card"},S=a("h3",null,"指定初始位置",-1),C=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" show = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(` images = ref([
  `),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
  `),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat2.jpg'"),s(`,
])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(`
    `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(`
    `),a("span",{class:"hljs-attr"},"block"),s(`
    @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = true"'),s(`
  >`)]),s(`
    指定初始位置
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-image-preview"),s(`
    `),a("span",{class:"hljs-attr"},"current"),s("="),a("span",{class:"hljs-string"},'"https://varlet.gitee.io/varlet-ui/cat2.jpg"'),s(`
    `),a("span",{class:"hljs-attr"},":images"),s("="),a("span",{class:"hljs-string"},'"images"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"show"'),s(`
  />`)]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),z={class:"card"},I=a("h3",null,"展示关闭按钮",-1),N=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" show = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(` images = ref([
  `),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
  `),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat2.jpg'"),s(`,
])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(`
    `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(`
    `),a("span",{class:"hljs-attr"},"block"),s(`
    @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = true"'),s(`
  >`)]),s(`
    展示关闭按钮
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-image-preview"),s(`
    `),a("span",{class:"hljs-attr"},"closeable"),s(`
    `),a("span",{class:"hljs-attr"},":images"),s("="),a("span",{class:"hljs-string"},'"images"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"show"'),s(`
  />`)]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),L={class:"card"},R=a("h3",null,"监听关闭事件",-1),U=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" show = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(` images = ref([
  `),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
  `),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat2.jpg'"),s(`,
])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(`
    `),a("span",{class:"hljs-attr"},"block"),s(`
    `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(`
    @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = true"'),s(`
  >`)]),s(`
    监听关闭事件
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-image-preview"),s(`
    `),a("span",{class:"hljs-attr"},":images"),s("="),a("span",{class:"hljs-string"},'"images"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"show"'),s(`
    @`),a("span",{class:"hljs-attr"},"close"),s("="),a("span",{class:"hljs-string"},`"Snackbar('触发了关闭事件。')"`),s(`
  />`)]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),V={class:"card"},$=a("h3",null,"展示额外插槽",-1),B=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" show = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" menuShow = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(` images = ref([
  `),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),s(`,
  `),a("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat2.jpg'"),s(`,
])
`),a("span",{class:"hljs-keyword"},"const"),s(` actions = [
  {
    `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'操作'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'wrench'"),s(`
  },
  {
    `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},"'操作'"),s(`,
    `),a("span",{class:"hljs-attr"},"icon"),s(": "),a("span",{class:"hljs-string"},"'wrench'"),s(`
  }
]
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(`
    `),a("span",{class:"hljs-attr"},"block"),s(`
    `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(` 
    @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = true"'),s(`
  >`)]),s(`
    展示额外插槽
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-image-preview"),s(),a("span",{class:"hljs-attr"},":images"),s("="),a("span",{class:"hljs-string"},'"images"'),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"show"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"extra"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(`
        `),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"menu"'),s(`
        `),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"22"'),s(`
        `),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"#fff"'),s(`
        @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"menuShow = true"'),s(`
      />`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-action-sheet"),s(),a("span",{class:"hljs-attr"},":actions"),s("="),a("span",{class:"hljs-string"},'"actions"'),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"menuShow"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-image-preview"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),O=o('<h2>API</h2><div class="card"><h3>属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>show</code></td><td>是否显示</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>images</code></td><td>需要预览的图片 URL 数组</td><td><em>string[]</em></td><td><code>[]</code></td></tr><tr><td><code>current</code></td><td>图片预览起始的 URL</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>zoom</code></td><td>双击放大倍数</td><td><em>string | number</em></td><td><code>2</code></td></tr><tr><td><code>closeable</code></td><td>是否显示关闭按钮</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>loop</code></td><td>是否开启循环播放</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>indicator</code></td><td>是否显示分页</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>lock-scroll</code></td><td>锁定滚动</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>teleport</code></td><td>弹出层挂载的位置</td><td><em>TeleportProps[&#39;to&#39;]</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td><code>change</code></td><td>切换图片时的回调函数，回调参数为当前索引</td><td><code>index: number</code> 图片索引</td></tr><tr><td><code>open</code></td><td>打开 image-preview 时触发</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>打开 image-preview 动画结束时触发</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>关闭 image-preview 时触发</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>关闭 image-preview 动画结束时触发</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>插槽</h3><table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>indicator</code></td><td>分页指示器</td><td><code>index: number</code> 图片索引 <br> <code>length: number</code> 图片总数</td></tr><tr><td><code>close-icon</code></td><td>关闭按钮</td><td><code>-</code></td></tr><tr><td><code>extra</code></td><td>额外插槽</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>ImagePreview Options</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>images</code></td><td>需要预览的图片 URL 数组或者单个图片的 URL</td><td><em>string[] | string</em></td><td><code>[]</code></td></tr><tr><td><code>current</code></td><td>图片预览起始的 URL</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>zoom</code></td><td>双击放大倍数</td><td><em>string | number</em></td><td><code>2</code></td></tr><tr><td><code>closeable</code></td><td>是否显示关闭按钮</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>loop</code></td><td>是否开启循环播放</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>indicator</code></td><td>是否显示分页</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>lockScroll</code></td><td>锁定滚动</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>onChange</code></td><td>切换图片时的回调函数，回调参数为当前索引</td><td><em>(index: number) =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpen</code></td><td>image-preview 开启时候的回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>image-preview 动画结束时候的回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>image-preview 时关闭时候的回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>image-preview 关闭动画结束时候的回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>样式变量</h3><p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--image-preview-swipe-indicators-text-color</code></td><td><code>#ddd</code></td></tr><tr><td><code>--image-preview-swipe-indicators-padding</code></td><td><code>16px 0</code></td></tr><tr><td><code>--image-preview-zoom-container-background</code></td><td><code>#000</code></td></tr><tr><td><code>--image-preview-close-icon-top</code></td><td><code>14px</code></td></tr><tr><td><code>--image-preview-close-icon-right</code></td><td><code>14px</code></td></tr><tr><td><code>--image-preview-close-icon-size</code></td><td><code>22px</code></td></tr><tr><td><code>--image-preview-close-icon-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--image-preview-extra-top</code></td><td><code>14px</code></td></tr><tr><td><code>--image-preview-extra-left</code></td><td><code>14px</code></td></tr></tbody></table></div>',6);function q(T,A,E,M,D,F){const t=c("var-site-code-example");return d(),r("div",h,[i,j,g,a("div",m,[v,l(t,null,{default:e(()=>[u]),_:1})]),a("div",w,[_,l(t,null,{default:e(()=>[b]),_:1})]),f,a("div",k,[y,l(t,null,{default:e(()=>[x]),_:1})]),a("div",P,[S,l(t,null,{default:e(()=>[C]),_:1})]),a("div",z,[I,l(t,null,{default:e(()=>[N]),_:1})]),a("div",L,[R,l(t,null,{default:e(()=>[U]),_:1})]),a("div",V,[$,l(t,null,{default:e(()=>[B]),_:1})]),O])}const H=n(p,[["render",q]]);export{H as default};
