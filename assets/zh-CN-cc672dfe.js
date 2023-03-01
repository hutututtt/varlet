import{_ as e,p as d,f as l,h as n,M as s,q as c,S as o,P as t,aq as h}from"./vue-router.esm-bundler-0d52b99f.js";const r={components:{}},i={class:"varlet-site-doc"},p=s("h1",null,"索引栏",-1),m=s("div",{class:"card"},[s("h3",null,"介绍"),s("p",null,"用于跳转到页面指定位置。")],-1),j={class:"card"},b=s("h3",null,"基本使用",-1),u=s("p",null,[t("点击索引栏时，会自动跳转到对应的 "),s("code",null,"IndexAnchor"),t(" 锚点位置。")],-1),g=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"javascript"},[t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { ref, onMounted } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`

`),s("span",{class:"hljs-keyword"},"const"),t(` list = ref([])

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),t(),s("span",{class:"hljs-title"},"change"),t("("),s("span",{class:"hljs-params"},"value"),t(") ")]),t(`{
  `),s("span",{class:"hljs-built_in"},"console"),t(`.log(value)
}

onMounted(`),s("span",{class:"hljs-function"},"() =>"),t(` {
  `),s("span",{class:"hljs-keyword"},"for"),t(" ("),s("span",{class:"hljs-keyword"},"let"),t(" i = "),s("span",{class:"hljs-number"},"0"),t("; i < "),s("span",{class:"hljs-number"},"26"),t(`; i++) {
    list.value.push(`),s("span",{class:"hljs-built_in"},"String"),t(".fromCharCode("),s("span",{class:"hljs-number"},"65"),t(` + i))
  }
})
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"script"),t(">")]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-index-bar"),t(),s("span",{class:"hljs-attr"},"duration"),t("="),s("span",{class:"hljs-string"},'"300"'),t(" @"),s("span",{class:"hljs-attr"},"change"),t("="),s("span",{class:"hljs-string"},'"change"'),t(">")]),t(`
    `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"div"),t(),s("span",{class:"hljs-attr"},"v-for"),t("="),s("span",{class:"hljs-string"},'"item in list"'),t(),s("span",{class:"hljs-attr"},":key"),t("="),s("span",{class:"hljs-string"},'"item"'),t(">")]),t(`
      `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-index-anchor"),t(),s("span",{class:"hljs-attr"},":index"),t("="),s("span",{class:"hljs-string"},'"item"'),t(),s("span",{class:"hljs-attr"},"class"),t("="),s("span",{class:"hljs-string"},'"anchor"'),t(">")]),t(`
        标题 {{ item }}
      `),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-index-anchor"),t(">")]),t(`

      `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-cell"),t(">")]),t("{{ item }} 文本"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-cell"),t(">")]),t(`
      `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-cell"),t(">")]),t("{{ item }} 文本"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-cell"),t(">")]),t(`
      `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-cell"),t(">")]),t("{{ item }} 文本"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-cell"),t(">")]),t(`
    `),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"div"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-index-bar"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"style"),t(">")]),s("span",{class:"css"},[t(`
`),s("span",{class:"hljs-selector-class"},".anchor"),t(` {
  `),s("span",{class:"hljs-attribute"},"height"),t(": "),s("span",{class:"hljs-number"},"42px"),t(`;
  `),s("span",{class:"hljs-attribute"},"display"),t(`: flex;
  `),s("span",{class:"hljs-attribute"},"align-items"),t(`: center;
  `),s("span",{class:"hljs-attribute"},"padding"),t(": "),s("span",{class:"hljs-number"},"0"),t(),s("span",{class:"hljs-number"},"12px"),t(`;
  `),s("span",{class:"hljs-attribute"},"transition"),t(": all "),s("span",{class:"hljs-number"},"0.25s"),t(`;
  `),s("span",{class:"hljs-attribute"},"background"),t(": "),s("span",{class:"hljs-built_in"},"var"),t(`(--color-primary);
  `),s("span",{class:"hljs-attribute"},"color"),t(": "),s("span",{class:"hljs-number"},"#fff"),t(`;
}
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"style"),t(">")]),t(`
`)])],-1),v=h('<h2>API</h2><div class="card"><h3>属性</h3><h4>IndexBar Props</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>sticky</code></td><td>是否开启锚点吸顶</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>sticky-offset-top</code></td><td>锚点吸顶时与顶部的距离</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td><code>hide-list</code></td><td>是否隐藏锚点列表</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>css-mode</code></td><td>开启原生 <code>css sticky</code> 模式</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>z-index</code></td><td>z-index 层级</td><td><em>number | string</em></td><td><code>1</code></td></tr><tr><td><code>highlight-color</code></td><td>索引字符高亮颜色</td><td><em>string</em></td><td><code>#ee0a24</code></td></tr><tr><td><code>duration</code></td><td>动画持续时间</td><td><em>string | number</em></td><td><code>0</code></td></tr></tbody></table><h4>IndexAnchor Props</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>index</code></td><td>索引字符</td><td><em>number | string</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>事件</h3><h4>IndexBar Events</h4><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td><code>click</code></td><td>点击索引栏的字符时触发</td><td><code>index: number | string</code></td></tr><tr><td><code>change</code></td><td>当前高亮的索引字符变化时触发</td><td><code>index: number | string</code></td></tr></tbody></table></div><div class="card"><h3>插槽</h3><h4>IndexBar Slots</h4><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>索引栏内容</td><td><code>-</code></td></tr></tbody></table><h4>IndexAnchor Slots</h4><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>自定义索引字符</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>方法</h3><p>通过 ref 可以获取到 IndexBar 实例并调用实例方法</p><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>scrollTo</code></td><td>滚动到指定锚点</td><td><code>index: number | string, options?: IndexBarScrollToOptions</code></td><td><code>-</code></td></tr></tbody></table><h4>IndexBarScrollToOptions</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>event</code></td><td>值为 <code>false</code> 时阻止触发 <code>change</code> 事件</td><td><em>boolean</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>样式变量</h3><p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--index-bar-list-item-font-size</code></td><td><code>var(--font-size-xs)</code></td></tr><tr><td><code>--index-bar-list-item-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--index-bar-list-item-active-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--index-bar-list-item-height</code></td><td><code>14px</code></td></tr><tr><td><code>--index-bar-list-item-padding</code></td><td><code>0 10px</code></td></tr></tbody></table></div>',6);function x(_,y,f,k,I,B){const a=d("var-site-code-example");return l(),n("div",i,[p,m,s("div",j,[b,u,c(a,null,{default:o(()=>[g]),_:1})]),v])}const w=e(r,[["render",x]]);export{w as default};
