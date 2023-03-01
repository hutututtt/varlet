import{_ as c,p as e,f as d,h,M as a,q as l,S as n,P as s,aq as p}from"./vue-router.esm-bundler-0d52b99f.js";const o={components:{}},r={class:"varlet-site-doc"},j=a("h1",null,"倒计时",-1),i=a("div",{class:"card"},[a("h3",null,"介绍"),a("p",null,"用于实时展示倒计时数值，支持毫秒精度。")],-1),m={class:"card"},u=a("h3",null,"基本使用",-1),g=a("p",null,[a("code",null,"time"),s(" 属性表示倒计时总时长，单位为毫秒。")],-1),b=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" time = ref("),a("span",{class:"hljs-number"},"30"),s(" * "),a("span",{class:"hljs-number"},"60"),s(" * "),a("span",{class:"hljs-number"},"60"),s(" * "),a("span",{class:"hljs-number"},"1000"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-countdown"),s(),a("span",{class:"hljs-attr"},":time"),s("="),a("span",{class:"hljs-string"},'"time"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),_={class:"card"},f=a("h3",null,"自定义格式",-1),v=a("p",null,[s("通过 "),a("code",null,"format"),s(" 属性设置倒计时文本的内容。")],-1),w=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" time = ref("),a("span",{class:"hljs-number"},"30"),s(" * "),a("span",{class:"hljs-number"},"60"),s(" * "),a("span",{class:"hljs-number"},"60"),s(" * "),a("span",{class:"hljs-number"},"1000"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-countdown"),s(),a("span",{class:"hljs-attr"},":time"),s("="),a("span",{class:"hljs-string"},'"time"'),s(),a("span",{class:"hljs-attr"},"format"),s("="),a("span",{class:"hljs-string"},'"DD 天 HH 时 mm 分 ss 秒"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),y={class:"card"},k=a("h3",null,"显示毫秒",-1),x=a("p",null,[s("通过 "),a("code",null,"S"),s(" 文本显示毫秒。")],-1),S=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" time = ref("),a("span",{class:"hljs-number"},"30"),s(" * "),a("span",{class:"hljs-number"},"60"),s(" * "),a("span",{class:"hljs-number"},"60"),s(" * "),a("span",{class:"hljs-number"},"1000"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-countdown"),s(),a("span",{class:"hljs-attr"},":time"),s("="),a("span",{class:"hljs-string"},'"time"'),s(),a("span",{class:"hljs-attr"},"format"),s("="),a("span",{class:"hljs-string"},'"HH:mm:ss:SS"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),D={class:"card"},H=a("h3",null,"自定义样式",-1),$=a("p",null,[s("通过插槽自定义倒计时的样式，"),a("code",null,"timeData"),s(" 对象格式见下方表格。")],-1),N=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-countdown"),s(),a("span",{class:"hljs-attr"},":time"),s("="),a("span",{class:"hljs-string"},'"108000000"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"default"),s("="),a("span",{class:"hljs-string"},'"{ hours, minutes, seconds }"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"countdown-example-block"'),s(">")]),s("{{ hours }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"countdown-example-colon"'),s(">")]),s(":"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"countdown-example-block"'),s(">")]),s("{{ minutes }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"countdown-example-colon"'),s(">")]),s(":"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"countdown-example-block"'),s(">")]),s("{{ seconds }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
     `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-countdown"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".countdown-example-block"),s(` {
  `),a("span",{class:"hljs-attribute"},"background"),s(": "),a("span",{class:"hljs-number"},"#ff9f00"),s(`;
  `),a("span",{class:"hljs-attribute"},"color"),s(`: white;
  `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"30px"),s(`;
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"30px"),s(`;
  `),a("span",{class:"hljs-attribute"},"border-radius"),s(": "),a("span",{class:"hljs-number"},"50%"),s(`;
  `),a("span",{class:"hljs-attribute"},"display"),s(`: inline-flex;
  `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: center;
}

`),a("span",{class:"hljs-selector-class"},".countdown-example-colon"),s(` {
  `),a("span",{class:"hljs-attribute"},"margin"),s(": "),a("span",{class:"hljs-number"},"0"),s(),a("span",{class:"hljs-number"},"5px"),s(`;
  `),a("span",{class:"hljs-attribute"},"font-size"),s(": "),a("span",{class:"hljs-number"},"18px"),s(`;
  `),a("span",{class:"hljs-attribute"},"font-weight"),s(": "),a("span",{class:"hljs-number"},"500"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),C={class:"card"},T=a("h3",null,"手动控制",-1),V=a("p",null,[s("通过 ref 获取到组件实例后，可以调用 "),a("code",null,"start"),s("、"),a("code",null,"pause"),s("、"),a("code",null,"reset"),s(" 方法。")],-1),B=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" countdown = ref("),a("span",{class:"hljs-literal"},"null"),s(`)

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"end"),s("("),a("span",{class:"hljs-params"}),s(") ")]),s(`{
  Snackbar.info(`),a("span",{class:"hljs-string"},"'end!'"),s(`)
}

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"change"),s("("),a("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),a("span",{class:"hljs-built_in"},"console"),s(".log("),a("span",{class:"hljs-string"},"'change'"),s(`)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-countdown"),s(`
    `),a("span",{class:"hljs-attr"},"time"),s("="),a("span",{class:"hljs-string"},'"3000"'),s(`
    `),a("span",{class:"hljs-attr"},"ref"),s("="),a("span",{class:"hljs-string"},'"countdown"'),s(`
    `),a("span",{class:"hljs-attr"},":auto-start"),s("="),a("span",{class:"hljs-string"},'"false"'),s(`
    `),a("span",{class:"hljs-attr"},"format"),s("="),a("span",{class:"hljs-string"},'"ss : SSS"'),s(`
    @`),a("span",{class:"hljs-attr"},"end"),s("="),a("span",{class:"hljs-string"},'"end"'),s(`
    @`),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"change"'),s(`
  />`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-row"),s(),a("span",{class:"hljs-attr"},"justify"),s("="),a("span",{class:"hljs-string"},'"space-between"'),s(),a("span",{class:"hljs-attr"},"align"),s("="),a("span",{class:"hljs-string"},'"center"'),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"margin-top: 10px"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"$refs.countdown.start()"'),s(">")]),s("开始"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"$refs.countdown.pause()"'),s(">")]),s("暂停"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"$refs.countdown.reset()"'),s(">")]),s("重置"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-row"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),q=p('<h2>API</h2><div class="card"><h3>属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>time</code></td><td>倒计时时长（ms）</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>format</code></td><td>时间格式</td><td><em>string</em></td><td><code>HH : mm : ss</code></td></tr><tr><td><code>auto-start</code></td><td>是否自动开始倒计时</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table></div><div class="card"><h3>format 格式</h3><table><thead><tr><th>格式</th><th>说明</th></tr></thead><tbody><tr><td><code>DD</code></td><td>天数</td></tr><tr><td><code>HH</code></td><td>小时</td></tr><tr><td><code>mm</code></td><td>分钟</td></tr><tr><td><code>ss</code></td><td>秒数</td></tr><tr><td><code>S</code></td><td>毫秒（1位）</td></tr><tr><td><code>SS</code></td><td>毫秒（2位）</td></tr><tr><td><code>SSS</code></td><td>毫秒（3位）</td></tr></tbody></table></div><div class="card"><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td><code>end</code></td><td>倒计时结束时触发</td><td><code>-</code></td></tr><tr><td><code>change</code></td><td>倒计时变化时触发</td><td><code>timeData: TimeData</code></td></tr></tbody></table></div><div class="card"><h3>插槽</h3><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>自定义内容</td><td><code>timeData: TimeData</code></td></tr></tbody></table></div><div class="card"><h3>TimeData 格式</h3><table><thead><tr><th>名称</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td><code>days</code></td><td>剩余天数</td><td><code>number</code></td></tr><tr><td><code>hours</code></td><td>剩余小时</td><td><code>number</code></td></tr><tr><td><code>minutes</code></td><td>剩余分钟</td><td><code>number</code></td></tr><tr><td><code>seconds</code></td><td>剩余秒数</td><td><code>number</code></td></tr><tr><td><code>milliseconds</code></td><td>剩余毫秒</td><td><code>number</code></td></tr></tbody></table></div><div class="card"><h3>方法</h3><p>通过 ref 可以获取到 CountDown 实例并调用实例方法.</p><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>start</code></td><td>开始倒计时</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>pause</code></td><td>暂停倒计时</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>重设倒计时，若 <code>auto-start</code> 为 <code>true</code>，重设后会自动开始倒计时</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table></div>',7);function z(P,A,E,I,M,F){const t=e("var-site-code-example");return d(),h("div",r,[j,i,a("div",m,[u,g,l(t,null,{default:n(()=>[b]),_:1})]),a("div",_,[f,v,l(t,null,{default:n(()=>[w]),_:1})]),a("div",y,[k,x,l(t,null,{default:n(()=>[S]),_:1})]),a("div",D,[H,$,l(t,null,{default:n(()=>[N]),_:1})]),a("div",C,[T,V,l(t,null,{default:n(()=>[B]),_:1})]),q])}const J=c(o,[["render",z]]);export{J as default};
