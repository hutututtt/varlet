import{_ as c,p as d,f as r,h as p,M as a,q as t,S as n,P as s,aq as e}from"./vue-router.esm-bundler-0d52b99f.js";const o={components:{}},h={class:"varlet-site-doc"},j=a("h1",null,"滑块",-1),i=a("div",{class:"card"},[a("h3",null,"介绍"),a("p",null,"用于在给定范围内取值。")],-1),m={class:"card"},u=a("h3",null,"基本使用",-1),g=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" value = ref("),a("span",{class:"hljs-number"},"3"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-slider"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),v={class:"card"},b=a("h3",null,"指定步长",-1),_=a("p",null,[s("通过 "),a("code",null,"step"),s(" 属性来设置步进增量。")],-1),f=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" value = ref("),a("span",{class:"hljs-number"},"25"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-slider"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},"step"),s("="),a("span",{class:"hljs-string"},'"10"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),y={class:"card"},k=a("h3",null,"双滑块",-1),w=a("p",null,[s("通过 "),a("code",null,"range"),s(" 属性开启双滑块模式，确保 "),a("code",null,"value"),s(" 的值是一个"),a("strong",null,"数组"),s("。")],-1),x=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" value = ref(["),a("span",{class:"hljs-number"},"24"),s(", "),a("span",{class:"hljs-number"},"50"),s(`])

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"handleChange"),s("("),a("span",{class:"hljs-params"},"value"),s(") ")]),s(`{
  `),a("span",{class:"hljs-built_in"},"console"),s(`.log(value)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-slider"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},"range"),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"handleChange"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),z={class:"card"},V=a("h3",null,"选择范围",-1),C=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" value = ref("),a("span",{class:"hljs-number"},"0"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-slider"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},"max"),s("="),a("span",{class:"hljs-string"},'"210"'),s(),a("span",{class:"hljs-attr"},"min"),s("="),a("span",{class:"hljs-string"},'"-50"'),s(),a("span",{class:"hljs-attr"},"label-visible"),s("="),a("span",{class:"hljs-string"},'"always"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),N={class:"card"},$=a("h3",null,"禁用",-1),B=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" value = ref("),a("span",{class:"hljs-number"},"40"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-slider"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},"disabled"),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),P={class:"card"},S=a("h3",null,"只读",-1),q=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" value = ref("),a("span",{class:"hljs-number"},"40"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-slider"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},"readonly"),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),A={class:"card"},E=a("h3",null,"不同大小",-1),I=a("p",null,[s("通过 "),a("code",null,"track-height"),s(" 和 "),a("code",null,"thumb-size"),s(" 控制slider的大小。")],-1),M=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" value = ref(["),a("span",{class:"hljs-number"},"7"),s(", "),a("span",{class:"hljs-number"},"64"),s(`])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-slider"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},"track-height"),s("="),a("span",{class:"hljs-string"},'"4"'),s(),a("span",{class:"hljs-attr"},"thumb-size"),s("="),a("span",{class:"hljs-string"},'"8"'),s(),a("span",{class:"hljs-attr"},"range"),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),T={class:"card"},D=a("h3",null,"自定义样式",-1),F=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" value = ref("),a("span",{class:"hljs-number"},"20"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-slider"),s(`
    `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(`
    `),a("span",{class:"hljs-attr"},"label-color"),s("="),a("span",{class:"hljs-string"},'"purple"'),s(`
    `),a("span",{class:"hljs-attr"},"active-color"),s("="),a("span",{class:"hljs-string"},'"#e0732c"'),s(`
    `),a("span",{class:"hljs-attr"},"track-color"),s("="),a("span",{class:"hljs-string"},'"#3a68b4"'),s(`
    `),a("span",{class:"hljs-attr"},"thumb-color"),s("="),a("span",{class:"hljs-string"},'"#e25241"'),s(`
    `),a("span",{class:"hljs-attr"},"label-text-color"),s("="),a("span",{class:"hljs-string"},'"#ededed"'),s(`
  />`)]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),G={class:"card"},H=a("h3",null,"自定义按钮",-1),J=a("p",null,[s("使用插槽自定义按钮时，"),a("code",null,"label-visible"),s("、"),a("code",null,"label-text-color"),s("、"),a("code",null,"thumb-size"),s(" 等属性均无效。")],-1),K=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" value = ref(["),a("span",{class:"hljs-number"},"5"),s(", "),a("span",{class:"hljs-number"},"38"),s(`])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-slider"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},"range"),s(),a("span",{class:"hljs-attr"},"active-color"),s("="),a("span",{class:"hljs-string"},'"#52af77"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"button"),s("="),a("span",{class:"hljs-string"},'"{ currentValue }"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"slider-example__block"'),s(">")]),s("{{ currentValue }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-slider"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".slider-example__block"),s(` {
  `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"24px"),s(`;
  `),a("span",{class:"hljs-attribute"},"border"),s(": "),a("span",{class:"hljs-number"},"1px"),s(" solid "),a("span",{class:"hljs-number"},"#52af77"),s(`;
  `),a("span",{class:"hljs-attribute"},"color"),s(": "),a("span",{class:"hljs-number"},"#52af77"),s(`;
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"24px"),s(`;
  `),a("span",{class:"hljs-attribute"},"margin"),s(": "),a("span",{class:"hljs-number"},"0"),s(" -"),a("span",{class:"hljs-number"},"12px"),s(`;
  `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
  `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"box-shadow"),s(": "),a("span",{class:"hljs-number"},"#ebebeb"),s(),a("span",{class:"hljs-number"},"0"),s(),a("span",{class:"hljs-number"},"2px"),s(),a("span",{class:"hljs-number"},"2px"),s(`;
  `),a("span",{class:"hljs-attribute"},"border-radius"),s(": "),a("span",{class:"hljs-number"},"50%"),s(`;
  `),a("span",{class:"hljs-attribute"},"font-size"),s(": "),a("span",{class:"hljs-number"},"12px"),s(`;
  `),a("span",{class:"hljs-attribute"},"background-color"),s(": "),a("span",{class:"hljs-number"},"#fff"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),L={class:"card"},O=a("h3",null,"显示标签",-1),Q=a("p",null,[s("通过 "),a("code",null,"label-visible"),s(" 属性控制标签的显示。")],-1),R=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" value = ref("),a("span",{class:"hljs-number"},"20"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" value1 = ref("),a("span",{class:"hljs-number"},"70"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" value2 = ref("),a("span",{class:"hljs-number"},"50"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-slider"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},"label-visible"),s("="),a("span",{class:"hljs-string"},'"never"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-slider"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value1"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-slider"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value2"'),s(),a("span",{class:"hljs-attr"},"label-visible"),s("="),a("span",{class:"hljs-string"},'"always"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),U={class:"card"},W=e('<h3>值的校验</h3><p>通过 <code>rules</code> 属性对值进行校验。</p><p><span style="font-size:12px;"><code>rules</code> 是一个可以接受 <code>function</code>、<code>boolean</code> 和 <code>string</code> 的数组。 函数传递输入值作为参数，必须返回 <code>true</code> / <code>false</code> 或包含错误消息的 <code>string</code>，如果函数返回 (或数组包含的任何值) <code>false</code> 或 <code>string</code>，输入字段将输入错误状态。</span></p>',3),X=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" value = ref("),a("span",{class:"hljs-number"},"20"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-slider"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[(v) => v > 35 || 'error message']"`),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),Y=e('<h2>API</h2><div class="card"><h3>属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>当前进度值</td><td><em>number | [number, number]</em></td><td><code>0</code></td></tr><tr><td><code>step</code></td><td>步长，取值必须大于 0</td><td><em>string | number</em></td><td><code>1</code></td></tr><tr><td><code>range</code></td><td>是否启用双滑块</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>max</code></td><td>最大值</td><td><em>string | number</em></td><td><code>100</code></td></tr><tr><td><code>min</code></td><td>最小值</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>label-visible</code></td><td>是否显示标签，可选值为 <code>always normal never</code></td><td><em>string</em></td><td><code>normal</code></td></tr><tr><td><code>label-text-color</code></td><td>标签文字颜色</td><td><em>string</em></td><td><code>#fff</code></td></tr><tr><td><code>label-color</code></td><td>标签颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>active-color</code></td><td>已激活的轨道背景颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>track-color</code></td><td>轨道背景颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>track-height</code></td><td>轨道的高度</td><td><em>string | number</em></td><td><code>2</code></td></tr><tr><td><code>thumb-size</code></td><td>滑块的大小</td><td><em>string | number</em></td><td><code>12</code></td></tr><tr><td><code>thumb-color</code></td><td>滑块的背景颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>disabled</code></td><td>是否禁用</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>readonly</code></td><td>是否只读</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>rules</code></td><td>校验规则</td><td><em>array</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td><code>change</code></td><td>值改变时触发</td><td>value: 当前进度</td></tr><tr><td><code>start</code></td><td>开始拖动时触发</td><td><code>-</code></td></tr><tr><td><code>end</code></td><td>结束拖动时触发</td><td>value: 当前进度</td></tr></tbody></table></div><div class="card"><h3>插槽</h3><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>button</code></td><td>自定义滑动按钮</td><td><code>currentValue</code>: 当前进度</td></tr></tbody></table></div><div class="card"><h3>样式变量</h3><p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--slider-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--slider-track-background</code></td><td><code>#bdbdbd</code></td></tr><tr><td><code>--slider-track-fill-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--slider-thumb-block-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--slider-thumb-ripple-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--slider-thumb-label-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--slider-thumb-label-font-size</code></td><td><code>var(--font-size-sm)</code></td></tr><tr><td><code>--slider-disabled-opacity</code></td><td><code>var(--opacity-disabled)</code></td></tr></tbody></table></div>',5);function Z(ss,as,ls,ts,ns,es){const l=d("var-site-code-example");return r(),p("div",h,[j,i,a("div",m,[u,t(l,null,{default:n(()=>[g]),_:1})]),a("div",v,[b,_,t(l,null,{default:n(()=>[f]),_:1})]),a("div",y,[k,w,t(l,null,{default:n(()=>[x]),_:1})]),a("div",z,[V,t(l,null,{default:n(()=>[C]),_:1})]),a("div",N,[$,t(l,null,{default:n(()=>[B]),_:1})]),a("div",P,[S,t(l,null,{default:n(()=>[q]),_:1})]),a("div",A,[E,I,t(l,null,{default:n(()=>[M]),_:1})]),a("div",T,[D,t(l,null,{default:n(()=>[F]),_:1})]),a("div",G,[H,J,t(l,null,{default:n(()=>[K]),_:1})]),a("div",L,[O,Q,t(l,null,{default:n(()=>[R]),_:1})]),a("div",U,[W,t(l,null,{default:n(()=>[X]),_:1})]),Y])}const ds=c(o,[["render",Z]]);export{ds as default};
