import{_ as d,p as c,f as n,h as o,M as t,q as l,S as e,P as s,aq as r}from"./vue-router.esm-bundler-0d52b99f.js";const p={components:{}},h={class:"varlet-site-doc"},j=t("h1",null,"输入框",-1),i={class:"card"},m=t("h3",null,"基本使用",-1),u=t("p",null,[s("输入框的行为和基本原生一致，用户输入时始终获得一个符合 "),t("code",null,"type"),s(" 规则的字符串。")],-1),g=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" value = ref("),t("span",{class:"hljs-string"},"''"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-input"),s(),t("span",{class:"hljs-attr"},"placeholder"),s("="),t("span",{class:"hljs-string"},'"请输入文本"'),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),v={class:"card"},_=t("h3",null,"朴素模式",-1),f=t("p",null,"如果只需要组件的基本功能，可以通过属性去除部分样式。",-1),y=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" value = ref("),t("span",{class:"hljs-string"},"''"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-input"),s(`
    `),t("span",{class:"hljs-attr"},":hint"),s("="),t("span",{class:"hljs-string"},'"false"'),s(`
    `),t("span",{class:"hljs-attr"},":line"),s("="),t("span",{class:"hljs-string"},'"false"'),s(`
    `),t("span",{class:"hljs-attr"},"placeholder"),s("="),t("span",{class:"hljs-string"},'"请输入文本"'),s(`
    `),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value"'),s(`
  />`)]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),b={class:"card"},k=t("h3",null,"文本域",-1),w=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" value = ref("),t("span",{class:"hljs-string"},"''"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-input"),s(),t("span",{class:"hljs-attr"},"placeholder"),s("="),t("span",{class:"hljs-string"},'"请输入文本"'),s(),t("span",{class:"hljs-attr"},"textarea"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),x={class:"card"},C=t("h3",null,"最大长度",-1),z=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" value = ref("),t("span",{class:"hljs-string"},"''"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-input"),s(),t("span",{class:"hljs-attr"},"placeholder"),s("="),t("span",{class:"hljs-string"},'"请输入文本"'),s(),t("span",{class:"hljs-attr"},":maxlength"),s("="),t("span",{class:"hljs-string"},'"10"'),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),E={class:"card"},N=t("h3",null,"禁用",-1),V=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" value = ref("),t("span",{class:"hljs-string"},"''"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-input"),s(),t("span",{class:"hljs-attr"},"placeholder"),s("="),t("span",{class:"hljs-string"},'"请输入文本"'),s(),t("span",{class:"hljs-attr"},"disabled"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),B={class:"card"},P=t("h3",null,"只读",-1),$=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" value = ref("),t("span",{class:"hljs-string"},"''"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-input"),s(),t("span",{class:"hljs-attr"},"placeholder"),s("="),t("span",{class:"hljs-string"},'"请输入文本"'),s(),t("span",{class:"hljs-attr"},"readonly"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),I={class:"card"},S=t("h3",null,"可清除",-1),q=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" value = ref("),t("span",{class:"hljs-string"},"''"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-input"),s(),t("span",{class:"hljs-attr"},"placeholder"),s("="),t("span",{class:"hljs-string"},'"请输入文本"'),s(),t("span",{class:"hljs-attr"},"clearable"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),A={class:"card"},T=t("h3",null,"显示图标",-1),F=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" value = ref("),t("span",{class:"hljs-string"},"''"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-input"),s(),t("span",{class:"hljs-attr"},"placeholder"),s("="),t("span",{class:"hljs-string"},'"请输入文本"'),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(" #"),t("span",{class:"hljs-attr"},"prepend-icon"),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-icon"),s(),t("span",{class:"hljs-attr"},"name"),s("="),t("span",{class:"hljs-string"},'"plus"'),s("/>")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(" #"),t("span",{class:"hljs-attr"},"append-icon"),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-icon"),s(),t("span",{class:"hljs-attr"},"name"),s("="),t("span",{class:"hljs-string"},'"minus"'),s("/>")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-input"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),M={class:"card"},D=t("h3",null,"字段校验",-1),G=t("p",null,[s("通过传入一个校验器数组可以对值进行校验，校验器返回 "),t("code",null,"true"),s(" 则为校验通过。 以外的值将转换为文本作为用户提示。")],-1),H=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" value = ref("),t("span",{class:"hljs-string"},"''"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-input"),s(`
    `),t("span",{class:"hljs-attr"},"placeholder"),s("="),t("span",{class:"hljs-string"},'"请输入文本"'),s(`
    `),t("span",{class:"hljs-attr"},":rules"),s("="),t("span",{class:"hljs-string"},`"[v => v.length > 6 || '文本长度必须大于6']"`),s(`
    `),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"value"'),s(`
  />`)]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),J=r('<h2>API</h2><div class="card"><h3>属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>绑定的值</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>placeholder</code></td><td>占位符</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>type</code></td><td>输入框类型, 可选值为 <code>text</code> <code>password</code> <code>number</code> <code>tel</code></td><td><em>string</em></td><td><code>text</code></td></tr><tr><td><code>maxlength</code></td><td>最大长度</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>textarea</code></td><td>是否是文本域</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>rows</code></td><td>文本域的显示行数</td><td><em>string | number</em></td><td><code>8</code></td></tr><tr><td><code>line</code></td><td>是否显示分割线</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>hint</code></td><td>是否使用占位符作为提示</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>text-color</code></td><td>文字颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>focus-color</code></td><td>聚焦时的主要颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>blur-color</code></td><td>失焦时的主要颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>readonly</code></td><td>是否只读</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>是否禁用</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>clearable</code></td><td>是否可清除</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>resize</code></td><td>文本域是否可以拖动调整尺寸</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>autofocus</code></td><td>是否自动聚焦</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>validate-trigger</code></td><td>触发验证的时机，可选值为 <code>onFocus</code> <code>onBlur</code> <code>onChange</code> <code>onClick</code> <code>onClear</code> <code>onInput</code></td><td><em>ValidateTriggers[]</em></td><td><code>[&#39;onInput&#39;, &#39;onClear&#39;]</code></td></tr><tr><td><code>rules</code></td><td>验证规则，返回 <code>true</code> 表示验证通过，其余的值则转换为文本作为用户提示</td><td><em>Array&lt;(v: string) =&gt; any&gt;</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>方法</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>focus</code></td><td>聚焦</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>blur</code></td><td>失焦</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>validate</code></td><td>触发校验</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>清空校验信息</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>清空绑定的值和校验信息</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>focus</code></td><td>聚焦时触发</td><td><code>event: Event</code></td></tr><tr><td><code>blur</code></td><td>失焦时触发</td><td><code>event: Event</code></td></tr><tr><td><code>click</code></td><td>点击时触发</td><td><code>event: Event</code></td></tr><tr><td><code>clear</code></td><td>清除时触发</td><td><code>value: string</code></td></tr><tr><td><code>input</code></td><td>输入时触发</td><td><code>value: string</code>, <code>event: Event</code></td></tr><tr><td><code>change</code></td><td>更新时触发</td><td><code>value: string</code>, <code>event: Event</code></td></tr></tbody></table></div><div class="card"><h3>插槽</h3><table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>prepend-icon</code></td><td>前置图标</td><td><code>-</code></td></tr><tr><td><code>append-icon</code></td><td>后置图标</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>样式变量</h3><p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--input-input-text-color</code></td><td><code>#555</code></td></tr><tr><td><code>--input-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--input-blur-color</code></td><td><code>#888</code></td></tr><tr><td><code>--input-focus-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--input-placeholder-size</code></td><td><code>16px</code></td></tr><tr><td><code>--input-textarea-height</code></td><td><code>auto</code></td></tr><tr><td><code>--input-textarea-padding-top</code></td><td><code>8px</code></td></tr><tr><td><code>--input-icon-padding</code></td><td><code>16px 0 0</code></td></tr><tr><td><code>--input-icon-size</code></td><td><code>20px</code></td></tr><tr><td><code>--input-line-size</code></td><td><code>1px</code></td></tr><tr><td><code>--input-line-spread-size</code></td><td><code>2px</code></td></tr><tr><td><code>--input-disabled-color</code></td><td><code>var(--color-text-disabled)</code></td></tr></tbody></table></div>',6);function K(L,O,Q,R,U,W){const a=c("var-site-code-example");return n(),o("div",h,[j,t("div",i,[m,u,l(a,null,{default:e(()=>[g]),_:1})]),t("div",v,[_,f,l(a,null,{default:e(()=>[y]),_:1})]),t("div",b,[k,l(a,null,{default:e(()=>[w]),_:1})]),t("div",x,[C,l(a,null,{default:e(()=>[z]),_:1})]),t("div",E,[N,l(a,null,{default:e(()=>[V]),_:1})]),t("div",B,[P,l(a,null,{default:e(()=>[$]),_:1})]),t("div",I,[S,l(a,null,{default:e(()=>[q]),_:1})]),t("div",A,[T,l(a,null,{default:e(()=>[F]),_:1})]),t("div",M,[D,G,l(a,null,{default:e(()=>[H]),_:1})]),J])}const Y=d(p,[["render",K]]);export{Y as default};
