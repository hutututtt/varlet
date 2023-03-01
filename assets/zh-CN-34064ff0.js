import{_ as d,p as c,f as n,h as o,M as t,q as l,S as e,aq as r,P as s}from"./vue-router.esm-bundler-0d52b99f.js";const h={components:{}},p={class:"varlet-site-doc"},i=t("h1",null,"单元格",-1),j=t("div",{class:"card"},[t("h3",null,"介绍"),t("p",null,"单元格为列表中的单个展示项。")],-1),m={class:"card"},g=t("h3",null,"基本使用",-1),_=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s("这是单元格"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),v={class:"card"},b=t("h3",null,"显示图标",-1),f=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-cell"),s(),t("span",{class:"hljs-attr"},"icon"),s("="),t("span",{class:"hljs-string"},'"fire"'),s(),t("span",{class:"hljs-attr"},"title"),s("="),t("span",{class:"hljs-string"},'"这是单元格"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(" #"),t("span",{class:"hljs-attr"},"extra"),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-icon"),s(),t("span",{class:"hljs-attr"},"name"),s("="),t("span",{class:"hljs-string"},'"information"'),s(" />")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),u={class:"card"},x=t("h3",null,"显示描述",-1),y=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-cell"),s(),t("span",{class:"hljs-attr"},"title"),s("="),t("span",{class:"hljs-string"},'"这是单元格"'),s(),t("span",{class:"hljs-attr"},"description"),s("="),t("span",{class:"hljs-string"},'"描述"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),k={class:"card"},w=t("h3",null,"显示边框",-1),z=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-cell"),s(),t("span",{class:"hljs-attr"},"border"),s(">")]),s("这是单元格"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),C={class:"card"},N=t("h3",null,"用作列表项",-1),V=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` items = ref([
  {
    `),t("span",{class:"hljs-attr"},"name"),s(": "),t("span",{class:"hljs-string"},"'Vue2'"),s(`,
    `),t("span",{class:"hljs-attr"},"icon"),s(": "),t("span",{class:"hljs-string"},"'star'"),s(`,
    `),t("span",{class:"hljs-attr"},"enabled"),s(": "),t("span",{class:"hljs-literal"},"false"),s(`,
  },
  {
    `),t("span",{class:"hljs-attr"},"name"),s(": "),t("span",{class:"hljs-string"},"'Vue3'"),s(`,
    `),t("span",{class:"hljs-attr"},"icon"),s(": "),t("span",{class:"hljs-string"},"'heart'"),s(`,
    `),t("span",{class:"hljs-attr"},"enabled"),s(": "),t("span",{class:"hljs-literal"},"false"),s(`,
  },
  {
    `),t("span",{class:"hljs-attr"},"name"),s(": "),t("span",{class:"hljs-string"},"'React'"),s(`,
    `),t("span",{class:"hljs-attr"},"icon"),s(": "),t("span",{class:"hljs-string"},"'close-circle'"),s(`,
    `),t("span",{class:"hljs-attr"},"enabled"),s(": "),t("span",{class:"hljs-literal"},"false"),s(`,
  },
])

`),t("span",{class:"hljs-keyword"},"const"),s(" handleClick = "),t("span",{class:"hljs-function"},[s("("),t("span",{class:"hljs-params"},"item"),s(") =>")]),s(` {
  item.enabled = !item.enabled
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-paper"),s(),t("span",{class:"hljs-attr"},":elevation"),s("="),t("span",{class:"hljs-string"},'"2"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-cell"),s(`
      `),t("span",{class:"hljs-attr"},"v-for"),s("="),t("span",{class:"hljs-string"},'"(item, index) in items"'),s(`
      `),t("span",{class:"hljs-attr"},":key"),s("="),t("span",{class:"hljs-string"},'"item.name"'),s(`
      `),t("span",{class:"hljs-attr"},"ripple"),s(`
      `),t("span",{class:"hljs-attr"},":icon"),s("="),t("span",{class:"hljs-string"},'"item.icon"'),s(`
      `),t("span",{class:"hljs-attr"},":border"),s("="),t("span",{class:"hljs-string"},'"index !== items.length - 1"'),s(`
      `),t("span",{class:"hljs-attr"},":border-offset"),s("="),t("span",{class:"hljs-string"},'"0"'),s(`
      @`),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"handleClick(item)"'),s(`
    >`)]),s(`
      {{ item.name }}

      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(" #"),t("span",{class:"hljs-attr"},"extra"),s(">")]),s(`
        `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-switch"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"item.enabled"'),s(" @"),t("span",{class:"hljs-attr"},"click.stop"),s(" />")]),s(`
      `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-paper"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),$=r('<h2>API</h2><div class="card"><h3>属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>title</code></td><td>单元格标题</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>左侧图标名称</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>description</code></td><td>单元格描述</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>border</code></td><td>是否显示边框</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>border-offset</code></td><td>边框偏移量</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>icon-class</code></td><td>图标额外类名</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>title-class</code></td><td>标题额外类名</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>description-class</code></td><td>描述额外类名</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>extra-class</code></td><td>右侧内容额外类名</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>ripple</code></td><td>是否启用水波效果</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="card"><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>click</code></td><td>点击时触发</td><td><code>event: Event</code></td></tr></tbody></table></div><div class="card"><h3>插槽</h3><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>cell 的内容</td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>自定义左侧 icon 区域</td><td><code>-</code></td></tr><tr><td><code>description</code></td><td>描述的内容</td><td><code>-</code></td></tr><tr><td><code>extra</code></td><td>自定义右侧区域内容</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>样式变量</h3><p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制.</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--cell-color</code></td><td><code>var(--color-text)</code></td></tr><tr><td><code>--cell-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--cell-description-font-size</code></td><td><code>var(--font-size-sm)</code></td></tr><tr><td><code>--cell-description-color</code></td><td><code>rgba(0, 0, 0, 0.6)</code></td></tr><tr><td><code>--cell-padding</code></td><td><code>10px 12px</code></td></tr><tr><td><code>--cell-min-height</code></td><td><code>40px</code></td></tr><tr><td><code>--cell-border-color</code></td><td><code>#bcc2cb</code></td></tr><tr><td><code>--cell-border-left</code></td><td><code>12px</code></td></tr><tr><td><code>--cell-border-right</code></td><td><code>12px</code></td></tr><tr><td><code>--cell-icon-right</code></td><td><code>8px</code></td></tr><tr><td><code>--cell-extra-left</code></td><td><code>8px</code></td></tr></tbody></table></div>',5);function B(P,S,q,E,A,I){const a=c("var-site-code-example");return n(),o("div",p,[i,j,t("div",m,[g,l(a,null,{default:e(()=>[_]),_:1})]),t("div",v,[b,l(a,null,{default:e(()=>[f]),_:1})]),t("div",u,[x,l(a,null,{default:e(()=>[y]),_:1})]),t("div",k,[w,l(a,null,{default:e(()=>[z]),_:1})]),t("div",C,[N,l(a,null,{default:e(()=>[V]),_:1})]),$])}const R=d(h,[["render",B]]);export{R as default};
