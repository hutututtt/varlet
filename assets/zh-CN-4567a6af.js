import{_ as a,p as l,f as o,h as n,M as s,q as d,S as c,P as t,aq as r}from"./vue-router.esm-bundler-0d52b99f.js";const p={components:{}},h={class:"varlet-site-doc"},i=s("h1",null,"时间选择器",-1),m=s("div",{class:"card"},[s("h3",null,"介绍"),s("p",null,"用于选择时间。")],-1),j={class:"card"},k=s("h3",null,"基本使用",-1),u=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"javascript"},[t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`

`),s("span",{class:"hljs-keyword"},"const"),t(" date = ref("),s("span",{class:"hljs-string"},"'11:20'"),t(`)
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"script"),t(">")]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-time-picker"),t(),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"date"'),t(" />")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1),g={class:"card"},_=s("h3",null,"24小时格式",-1),f=s("p",null,[t("使用 "),s("code",null,"format"),t(" 属性切换选择器的时间格式，"),s("code",null,"format"),t(" 默认值为 "),s("code",null,"ampm"),t("。")],-1),v=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"javascript"},[t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`

`),s("span",{class:"hljs-keyword"},"const"),t(" date = ref("),s("span",{class:"hljs-string"},"'15:20'"),t(`)
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"script"),t(">")]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-time-picker"),t(),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"date"'),t(),s("span",{class:"hljs-attr"},"format"),t("="),s("span",{class:"hljs-string"},'"24hr"'),t(),s("span",{class:"hljs-attr"},"elevation"),t(" />")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1),b={class:"card"},x=s("h3",null,"显示秒",-1),y=s("p",null,[t("使用 "),s("code",null,"use-seconds"),t(" 属性显示秒。")],-1),w=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"javascript"},[t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`

`),s("span",{class:"hljs-keyword"},"const"),t(" date = ref("),s("span",{class:"hljs-string"},"'17:36:22'"),t(`)
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"script"),t(">")]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-time-picker"),t(),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"date"'),t(),s("span",{class:"hljs-attr"},"format"),t("="),s("span",{class:"hljs-string"},'"24hr"'),t(),s("span",{class:"hljs-attr"},"use-seconds"),t(" />")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1),N={class:"card"},S=s("h3",null,"只读",-1),T=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"javascript"},[t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`

`),s("span",{class:"hljs-keyword"},"const"),t(" date = ref("),s("span",{class:"hljs-string"},"'07:10'"),t(`)
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"script"),t(">")]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-time-picker"),t(),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"date"'),t(),s("span",{class:"hljs-attr"},"readonly"),t(),s("span",{class:"hljs-attr"},"elevation"),t(" />")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1),z={class:"card"},C=s("h3",null,"时间限制",-1),H=s("p",null,[t("通过 "),s("code",null,"min"),t("、"),s("code",null,"max"),t(" 和 "),s("code",null,"allowed-time"),t(" 属性来控制可选择的时间范围。")],-1),I=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"javascript"},[t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`

`),s("span",{class:"hljs-keyword"},"const"),t(" date = ref("),s("span",{class:"hljs-string"},"'07:10:12'"),t(`)

`),s("span",{class:"hljs-keyword"},"const"),t(` allowedTime = {
  `),s("span",{class:"hljs-attr"},"hours"),t(": "),s("span",{class:"hljs-function"},[t("("),s("span",{class:"hljs-params"},"hour"),t(") =>")]),t(" hour % "),s("span",{class:"hljs-number"},"2"),t(" === "),s("span",{class:"hljs-number"},"0"),t(`,
  `),s("span",{class:"hljs-attr"},"minutes"),t(": "),s("span",{class:"hljs-function"},[t("("),s("span",{class:"hljs-params"},"minute"),t(") =>")]),t(" minute % "),s("span",{class:"hljs-number"},"15"),t(" !== "),s("span",{class:"hljs-number"},"0"),t(`,
  `),s("span",{class:"hljs-attr"},"seconds"),t(": "),s("span",{class:"hljs-function"},[t("("),s("span",{class:"hljs-params"},"second"),t(") =>")]),t(" second % "),s("span",{class:"hljs-number"},"2"),t(" !== "),s("span",{class:"hljs-number"},"0"),t(`,
}
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"script"),t(">")]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-time-picker"),t(`
    `),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"date"'),t(`
    `),s("span",{class:"hljs-attr"},"format"),t("="),s("span",{class:"hljs-string"},'"24hr"'),t(`
    `),s("span",{class:"hljs-attr"},"use-seconds"),t(`
    `),s("span",{class:"hljs-attr"},"min"),t("="),s("span",{class:"hljs-string"},'"2:28:38"'),t(`
    `),s("span",{class:"hljs-attr"},"max"),t("="),s("span",{class:"hljs-string"},'"19:40:22"'),t(`
    `),s("span",{class:"hljs-attr"},":allowed-time"),t("="),s("span",{class:"hljs-string"},'"allowedTime"'),t(`
  />`)]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1),P={class:"card"},V=s("h3",null,"自定义",-1),$=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"javascript"},[t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`

`),s("span",{class:"hljs-keyword"},"const"),t(" date = ref("),s("span",{class:"hljs-string"},"'05:10'"),t(`)

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),t(),s("span",{class:"hljs-title"},"change"),t("("),s("span",{class:"hljs-params"},"time"),t(") ")]),t(`{
  `),s("span",{class:"hljs-built_in"},"console"),t(`.log(time)
}
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"script"),t(">")]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-time-picker"),t(`
    `),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"date"'),t(`
    `),s("span",{class:"hljs-attr"},"header-color"),t("="),s("span",{class:"hljs-string"},'"purple"'),t(`
    `),s("span",{class:"hljs-attr"},"color"),t("="),s("span",{class:"hljs-string"},'"#7bb872"'),t(`
    `),s("span",{class:"hljs-attr"},"min"),t("="),s("span",{class:"hljs-string"},'"2:28:38"'),t(`
    `),s("span",{class:"hljs-attr"},"max"),t("="),s("span",{class:"hljs-string"},'"19:40:22"'),t(`
    `),s("span",{class:"hljs-attr"},"elevation"),t(`
    @`),s("span",{class:"hljs-attr"},"change"),t("="),s("span",{class:"hljs-string"},'"change"'),t(`
  />`)]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1),A=r('<h2>API</h2><div class="card"><h3>属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>被选择的时间（ISO 8601 格式，<code>HH:mm</code> 或 <code>HH:mm:ss</code>）</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>format</code></td><td>选择器时间格式，可选值为 <code>ampm 24hr</code></td><td><em>string</em></td><td><code>ampm</code></td></tr><tr><td><code>color</code></td><td>选择器的颜色</td><td><em>string</em></td><td><code>#2979ff</code></td></tr><tr><td><code>header-color</code></td><td>标题背景色。如果未指定，将使用由 color 属性或默认颜色。</td><td><em>string</em></td><td><code>#2979ff</code></td></tr><tr><td><code>elevation</code></td><td>是否添加阴影</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>min</code></td><td>允许的最小时间（ISO 8601格式）</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>max</code></td><td>允许的最大时间（ISO 8601格式）</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>allowed-time</code></td><td>限制可以选择的时间</td><td><em>AllowedTime</em></td><td><code>-</code></td></tr><tr><td><code>readonly</code></td><td>是否只读</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>use-seconds</code></td><td>是否显示秒</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="card"><h3>TimePicker AllowedTime</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>hours</code></td><td>限制可选的 <code>hour</code></td><td><em>Function: hour =&gt; boolean</em></td><td><code>-</code></td></tr><tr><td><code>minutes</code></td><td>限制可选的 <code>minute</code></td><td><em>Function: minute =&gt; boolean</em></td><td><code>-</code></td></tr><tr><td><code>seconds</code></td><td>限制可选的 <code>second</code></td><td><em>Function: second =&gt; boolean</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td><code>change</code></td><td>时间变化时触发</td><td><code>value: string</code></td></tr></tbody></table></div><div class="card"><h3>样式变量</h3><p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--time-picker-border-radius</code></td><td><code>4px</code></td></tr><tr><td><code>--time-picker-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--time-picker-min-width</code></td><td><code>290px</code></td></tr><tr><td><code>--time-picker-height</code></td><td><code>385px</code></td></tr><tr><td><code>--time-picker-title-padding</code></td><td><code>16px</code></td></tr><tr><td><code>--time-picker-title-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--time-picker-title-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--time-picker-title-time-font-size</code></td><td><code>50px</code></td></tr><tr><td><code>--time-picker-title-time-margin</code></td><td><code>0 5px</code></td></tr><tr><td><code>--time-picker-title-ampm-margin-left</code></td><td><code>5px</code></td></tr><tr><td><code>--time-picker-clock-left</code></td><td><code>27px</code></td></tr><tr><td><code>--time-picker-clock-right</code></td><td><code>27px</code></td></tr><tr><td><code>--time-picker-clock-top</code></td><td><code>27px</code></td></tr><tr><td><code>--time-picker-clock-bottom</code></td><td><code>27px</code></td></tr><tr><td><code>--time-picker-clock-container-width</code></td><td><code>270px</code></td></tr><tr><td><code>--time-picker-clock-container-height</code></td><td><code>270px</code></td></tr><tr><td><code>--time-picker-clock-container-background</code></td><td><code>#e0e0e0</code></td></tr><tr><td><code>--time-picker-clock-hand-height</code></td><td><code>calc(50% - 4px)</code></td></tr><tr><td><code>--time-picker-clock-hand-width</code></td><td><code>2px</code></td></tr><tr><td><code>--time-picker-clock-hand-bottom</code></td><td><code>50%</code></td></tr><tr><td><code>--time-picker-clock-hand-left</code></td><td><code>calc(50% - 1px)</code></td></tr><tr><td><code>--time-picker-clock-hand-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--time-picker-clock-hand-border-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--time-picker-clock-hand-before-width</code></td><td><code>10px</code></td></tr><tr><td><code>--time-picker-clock-hand-before-height</code></td><td><code>10px</code></td></tr><tr><td><code>--time-picker-clock-hand-before-border-width</code></td><td><code>2px</code></td></tr><tr><td><code>--time-picker-clock-hand-after-width</code></td><td><code>4px</code></td></tr><tr><td><code>--time-picker-clock-hand-after-height</code></td><td><code>4px</code></td></tr><tr><td><code>--time-picker-clock-item-height</code></td><td><code>32px</code></td></tr><tr><td><code>--time-picker-clock-item-width</code></td><td><code>32px</code></td></tr><tr><td><code>--time-picker-clock-item-active-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--time-picker-clock-item-active-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--time-picker-clock-item-disable-color</code></td><td><code>rgba(0, 0, 0, 0.26)</code></td></tr><tr><td><code>--time-picker-inner-left</code></td><td><code>36px</code></td></tr><tr><td><code>--time-picker-inner-right</code></td><td><code>36px</code></td></tr><tr><td><code>--time-picker-inner-top</code></td><td><code>36px</code></td></tr><tr><td><code>--time-picker-inner-bottom</code></td><td><code>36px</code></td></tr><tr><td><code>--time-picker-body-background</code></td><td><code>transparent</code></td></tr></tbody></table></div>',5);function B(F,O,q,E,M,D){const e=l("var-site-code-example");return o(),n("div",h,[i,m,s("div",j,[k,d(e,null,{default:c(()=>[u]),_:1})]),s("div",g,[_,f,d(e,null,{default:c(()=>[v]),_:1})]),s("div",b,[x,y,d(e,null,{default:c(()=>[w]),_:1})]),s("div",N,[S,d(e,null,{default:c(()=>[T]),_:1})]),s("div",z,[C,H,d(e,null,{default:c(()=>[I]),_:1})]),s("div",P,[V,d(e,null,{default:c(()=>[$]),_:1})]),A])}const J=a(p,[["render",B]]);export{J as default};
