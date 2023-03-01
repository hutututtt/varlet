import{_ as c,p as n,f as d,h as r,M as t,q as e,S as l,P as s,aq as h}from"./vue-router.esm-bundler-0d52b99f.js";const p={components:{}},o={class:"varlet-site-doc"},i=t("h1",null,"步骤条",-1),j=t("div",{class:"card"},[t("h3",null,"介绍"),t("p",null,"引导用户按照流程完成任务的导航条。")],-1),v={class:"card"},m=t("h3",null,"基本使用",-1),g=t("p",null,[s("通过 "),t("code",null,"active"),s(" 属性控制当前步骤条的进度，值为当前 "),t("code",null,"step"),s(" 的索引，从 "),t("code",null,"0"),s(" 起计。")],-1),u=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" active = ref("),t("span",{class:"hljs-number"},"0"),s(`)

`),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"next"),s("("),t("span",{class:"hljs-params"}),s(") ")]),s(`{
  active.value = (active.value + `),t("span",{class:"hljs-number"},"1"),s(") % "),t("span",{class:"hljs-number"},"4"),s(`
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-steps"),s(),t("span",{class:"hljs-attr"},":active"),s("="),t("span",{class:"hljs-string"},'"active"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-step"),s(">")]),s("步骤1"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-step"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-step"),s(">")]),s("步骤2"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-step"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-step"),s(">")]),s("步骤3"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-step"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-step"),s(">")]),s("步骤4"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-step"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-steps"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"next"'),s(">")]),s("下一步"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),f={class:"card"},_=t("h3",null,"自定义样式",-1),b=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" active = ref("),t("span",{class:"hljs-number"},"0"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-steps"),s(`
    `),t("span",{class:"hljs-attr"},":active"),s("="),t("span",{class:"hljs-string"},'"active"'),s(`
    `),t("span",{class:"hljs-attr"},"active-color"),s("="),t("span",{class:"hljs-string"},'"#f44336"'),s(`
    `),t("span",{class:"hljs-attr"},"inactive-color"),s("="),t("span",{class:"hljs-string"},'"#e99eb4"'),s(`
  >`)]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-step"),s(),t("span",{class:"hljs-attr"},"active-icon"),s("="),t("span",{class:"hljs-string"},'"heart"'),s(),t("span",{class:"hljs-attr"},"current-icon"),s("="),t("span",{class:"hljs-string"},'"fire"'),s(),t("span",{class:"hljs-attr"},"inactive-icon"),s("="),t("span",{class:"hljs-string"},'"heart-half-full"'),s(">")]),s(`
      步骤1
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-step"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-step"),s(),t("span",{class:"hljs-attr"},"active-icon"),s("="),t("span",{class:"hljs-string"},'"heart"'),s(),t("span",{class:"hljs-attr"},"current-icon"),s("="),t("span",{class:"hljs-string"},'"fire"'),s(),t("span",{class:"hljs-attr"},"inactive-icon"),s("="),t("span",{class:"hljs-string"},'"heart-half-full"'),s(">")]),s(`
      步骤2
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-step"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-step"),s(),t("span",{class:"hljs-attr"},"active-icon"),s("="),t("span",{class:"hljs-string"},'"heart"'),s(),t("span",{class:"hljs-attr"},"current-icon"),s("="),t("span",{class:"hljs-string"},'"fire"'),s(),t("span",{class:"hljs-attr"},"inactive-icon"),s("="),t("span",{class:"hljs-string"},'"heart-half-full"'),s(">")]),s(`
      步骤3
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-step"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-step"),s(),t("span",{class:"hljs-attr"},"active-icon"),s("="),t("span",{class:"hljs-string"},'"heart"'),s(),t("span",{class:"hljs-attr"},"current-icon"),s("="),t("span",{class:"hljs-string"},'"fire"'),s(),t("span",{class:"hljs-attr"},"inactive-icon"),s("="),t("span",{class:"hljs-string"},'"heart-half-full"'),s(">")]),s(`
      步骤4
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-step"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-steps"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),y={class:"card"},k=t("h3",null,"垂直模式",-1),x=t("p",null,[s("通过 "),t("code",null,"direction"),s(" 属性改变步骤条的显示方向。")],-1),w=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" active = ref("),t("span",{class:"hljs-number"},"0"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-steps"),s(),t("span",{class:"hljs-attr"},"direction"),s("="),t("span",{class:"hljs-string"},'"vertical"'),s(),t("span",{class:"hljs-attr"},":active"),s("="),t("span",{class:"hljs-string"},'"active"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-step"),s(">")]),s("步骤1"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-step"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-step"),s(">")]),s("步骤2"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-step"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-step"),s(">")]),s("步骤3"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-step"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-step"),s(">")]),s("步骤4"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-step"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-steps"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),z=h('<h2>API</h2><div class="card"><h3>属性</h3><h4>Steps Props</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>active</code></td><td>当前步骤</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>direction</code></td><td>显示方向，可选值为 <code>vertical</code></td><td><em>string</em></td><td><code>horizontal</code></td></tr><tr><td><code>active-color</code></td><td>激活状态颜色</td><td><em>string</em></td><td><code>#2979ff</code></td></tr><tr><td><code>inactive-color</code></td><td>未激活状态颜色</td><td><em>string</em></td><td><code>#9e9e9e</code></td></tr></tbody></table><h4>Step Props</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>active-icon</code></td><td>激活状态图标</td><td><em>string</em></td><td><code>check</code></td></tr><tr><td><code>current-icon</code></td><td>当前步骤时的图标</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>inactive-icon</code></td><td>未激活状态图标</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>事件</h3><h4>Steps Events</h4><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td><code>click-step</code></td><td>点击步骤的标题或图标时触发</td><td><code>index: number</code></td></tr></tbody></table></div><div class="card"><h3>插槽</h3><h4>Steps Slots</h4><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>steps 的内容</td><td><code>-</code></td></tr></tbody></table><h4>Step Slots</h4><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>step 的内容</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>样式变量</h3><p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--step-tag-size</code></td><td><code>20px</code></td></tr><tr><td><code>--step-tag-background</code></td><td><code>#9e9e9e</code></td></tr><tr><td><code>--step-tag-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--step-tag-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--step-tag-active-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--step-tag-margin</code></td><td><code>4px 0</code></td></tr><tr><td><code>--step-tag-icon-size</code></td><td><code>var(--font-size-lg)</code></td></tr><tr><td><code>--step-content-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--step-content-color</code></td><td><code>rgba(0, 0, 0, 0.38)</code></td></tr><tr><td><code>--step-content-active-color</code></td><td><code>#000</code></td></tr><tr><td><code>--step-line-background</code></td><td><code>#000</code></td></tr><tr><td><code>--step-vertical-min-height</code></td><td><code>30px</code></td></tr><tr><td><code>--step-vertical-tag-margin</code></td><td><code>0 4px</code></td></tr><tr><td><code>--step-vertical-line-height</code></td><td><code>calc(100% - 30px)</code></td></tr><tr><td><code>--step-vertical-line-min-height</code></td><td><code>20px</code></td></tr></tbody></table></div>',5);function S(N,P,C,V,$,B){const a=n("var-site-code-example");return d(),r("div",o,[i,j,t("div",v,[m,g,e(a,null,{default:l(()=>[u]),_:1})]),t("div",f,[_,e(a,null,{default:l(()=>[b]),_:1})]),t("div",y,[k,x,e(a,null,{default:l(()=>[w]),_:1})]),z])}const E=c(p,[["render",S]]);export{E as default};
