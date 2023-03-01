import{_ as e,p as c,f as d,h as p,M as a,q as t,S as n,P as s,aq as h}from"./vue-router.esm-bundler-0d52b99f.js";const o={components:{}},r={class:"varlet-site-doc"},j=a("h1",null,"折叠面板",-1),i=a("div",{class:"card"},[a("h3",null,"介绍"),a("p",null,"可以折叠/展开的内容区域。")],-1),m={class:"card"},g=a("h3",null,"基本使用",-1),v=a("p",null,[s("通过 "),a("code",null,"v-model"),s(" 控制展开的面板列表，"),a("code",null,"value"),s(" 为数组格式。")],-1),u=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" value = ref(["),a("span",{class:"hljs-string"},"'1'"),s(`])

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"changeHandle"),s("("),a("span",{class:"hljs-params"},"val"),s(") ")]),s(`{
  `),a("span",{class:"hljs-built_in"},"console"),s(`.log(val)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"changeHandle"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse-item"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"标题"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"1"'),s(">")]),s("文本"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse-item"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"标题"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"2"'),s(">")]),s("文本"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),_={class:"card"},b=a("h3",null,"隐藏边距",-1),f=a("p",null,[s("使用 "),a("code",null,"offset"),s(" 属性隐藏边距。")],-1),y=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" value = ref(["),a("span",{class:"hljs-string"},"'2'"),s(`])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},":offset"),s("="),a("span",{class:"hljs-string"},'"false"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse-item"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"标题"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"1"'),s(">")]),s("文本"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse-item"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"标题"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"2"'),s(">")]),s("文本"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),k={class:"card"},w=a("h3",null,"手风琴模式",-1),x=a("p",null,[s("使用 "),a("code",null,"accordion"),s(" 属性开启手风琴模式，此时 "),a("code",null,"value"),s(" 为字符串。")],-1),C=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" value = ref("),a("span",{class:"hljs-string"},"''"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},"accordion"),s(),a("span",{class:"hljs-attr"},":offset"),s("="),a("span",{class:"hljs-string"},'"false"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse-item"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"标题"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"1"'),s(">")]),s("文本"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse-item"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"标题"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"2"'),s(">")]),s("文本"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),z={class:"card"},N=a("h3",null,"禁用",-1),P=a("p",null,[s("在 "),a("code",null,"collapse-item"),s(" 上使用 "),a("code",null,"disabled"),s(" 属性禁用当前面板。")],-1),S=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" value = ref(["),a("span",{class:"hljs-number"},"1"),s(`])

`),a("span",{class:"hljs-keyword"},"const"),s(" disabled = ref("),a("span",{class:"hljs-literal"},"false"),s(`)  
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-space"),s(),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"column"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"[8, 8]"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"disabled = !disabled"'),s(">")]),s(`
      {{ disabled ? '启用' : '禁用' }}
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse-item"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"标题"'),s(),a("span",{class:"hljs-attr"},":name"),s("="),a("span",{class:"hljs-string"},'"1"'),s(),a("span",{class:"hljs-attr"},":disabled"),s("="),a("span",{class:"hljs-string"},'"disabled"'),s(">")]),s(`
        文本
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse-item"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse-item"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"标题"'),s(),a("span",{class:"hljs-attr"},":name"),s("="),a("span",{class:"hljs-string"},'"2"'),s(),a("span",{class:"hljs-attr"},":disabled"),s("="),a("span",{class:"hljs-string"},'"disabled"'),s(">")]),s(`
        文本
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),V={class:"card"},$=a("h3",null,"自定义内容",-1),B=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" value = ref(["),a("span",{class:"hljs-string"},"'1'"),s(`])  
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse-item"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"这是标题"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"1"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"account-circle"'),s(">")]),s(`
      文本
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-collapse-item"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"2"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"title"),s(">")]),s("这是标题"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"icon"),s(">")]),s("^_^"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
      这是内容
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-collapse"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),I=h('<h2>API</h2><div class="card"><h3>属性</h3><h4>Collapse Props</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>当前展开面板的 name</td><td>手风琴模式： <em>string | number</em><br> 非手风琴模式：<em>string[] | number[]</em></td><td><code>-</code></td></tr><tr><td><code>accordion</code></td><td>是否开启手风琴模式</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>offset</code></td><td>是否显示边距</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table><h4>CollapseItem Props</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>name</code></td><td>唯一标识符，默认为索引值</td><td><em>string | number</em></td><td><code>index</code></td></tr><tr><td><code>title</code></td><td>面板标题</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>icon 的名称</td><td><em>string</em></td><td><code>chevron-down</code></td></tr><tr><td><code>disabled</code></td><td>是否禁用面板</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="card"><h3>事件</h3><h4>Collapse Events</h4><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td><code>change</code></td><td>切换面板时触发</td><td><code>value: 类型与 v-model 绑定的值一致</code></td></tr></tbody></table></div><div class="card"><h3>插槽</h3><h4>Collapse Slots</h4><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>折叠面板的内容</td><td><code>-</code></td></tr></tbody></table><h4>CollapseItem Slots</h4><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>面板的内容</td><td><code>-</code></td></tr><tr><td><code>title</code></td><td>面板的标题</td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>自定义右侧 icon</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>样式变量</h3><p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--collapse-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--collapse-text-color</code></td><td><code>#232222</code></td></tr><tr><td><code>--collapse-header-font-size</code></td><td><code>var(--font-size-lg)</code></td></tr><tr><td><code>--collapse-header-padding</code></td><td><code>10px 12px</code></td></tr><tr><td><code>--collapse-content-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--collapse-content-padding</code></td><td><code>0 12px 10px</code></td></tr><tr><td><code>--collapse-item-margin-top</code></td><td><code>16px</code></td></tr><tr><td><code>--collapse-disable-color</code></td><td><code>#bdbdbd</code></td></tr><tr><td><code>--collapse-border-top</code></td><td><code>thin solid rgba(0, 0, 0, 0.12)</code></td></tr></tbody></table></div>',5);function q(E,H,A,M,T,D){const l=c("var-site-code-example");return d(),p("div",r,[j,i,a("div",m,[g,v,t(l,null,{default:n(()=>[u]),_:1})]),a("div",_,[b,f,t(l,null,{default:n(()=>[y]),_:1})]),a("div",k,[w,x,t(l,null,{default:n(()=>[C]),_:1})]),a("div",z,[N,P,t(l,null,{default:n(()=>[S]),_:1})]),a("div",V,[$,t(l,null,{default:n(()=>[B]),_:1})]),I])}const G=e(o,[["render",q]]);export{G as default};
