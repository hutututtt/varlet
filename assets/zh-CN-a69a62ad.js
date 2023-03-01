import{_ as n,p as c,f as d,h as r,M as a,q as t,S as e,P as s,aq as h}from"./vue-router.esm-bundler-0d52b99f.js";const o={components:{}},p={class:"varlet-site-doc"},i=a("h1",null,"下拉刷新",-1),j=a("div",{class:"card"},[a("h3",null,"介绍"),a("p",null,"用于提供下拉刷新的交互操作。")],-1),u={class:"card"},m=a("h3",null,"基本使用",-1),f=a("p",null,[s("下拉到刷新位置时松开会触发 "),a("code",null,"refresh"),s(" 事件， 在事件开始时将 "),a("code",null,"v-model"),s(" 设置为 "),a("code",null,"true"),s(" 表示正在加载，完成后将 "),a("code",null,"v-model"),s(" 设置为 "),a("code",null,"false"),s(" 表示加载结束。")],-1),g=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" data1 = "),a("span",{class:"hljs-built_in"},"Array"),s("("),a("span",{class:"hljs-number"},"30"),s(").fill("),a("span",{class:"hljs-string"},"'List Item'"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" data2 = "),a("span",{class:"hljs-built_in"},"Array"),s("("),a("span",{class:"hljs-number"},"30"),s(").fill("),a("span",{class:"hljs-string"},"'This is new List Item'"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" isRefresh = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(` data = ref(data1)

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"refresh"),s("("),a("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
    data.value = data.value[`),a("span",{class:"hljs-number"},"0"),s("] === "),a("span",{class:"hljs-string"},"'List Item'"),s(` ? data2 : data1
    isRefresh.value = `),a("span",{class:"hljs-literal"},"false"),s(`
  }, `),a("span",{class:"hljs-number"},"2000"),s(`)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-pull-refresh"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"isRefresh"'),s(" @"),a("span",{class:"hljs-attr"},"refresh"),s("="),a("span",{class:"hljs-string"},'"refresh"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(`
      `),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"(item, index) in data"'),s(`
      `),a("span",{class:"hljs-attr"},":key"),s("="),a("span",{class:"hljs-string"},'"index"'),s(`
      `),a("span",{class:"hljs-attr"},"border"),s(`
    >`)]),s(`
      {{ item + ' ' + (index + 1) }}
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-pull-refresh"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),v={class:"card"},_=a("h3",null,"组合",-1),b=a("p",null,[s("与 "),a("code",null,"List"),s(" 组件结合使用即可实现上拉加载和下拉刷新的功能，需保证 "),a("code",null,"PullRefresh"),s(" 容器高度不为 "),a("code",null,"0"),s("。")],-1),y=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" refreshing = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" loading = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(` list = ref([])

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"refresh"),s("("),a("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
    `),a("span",{class:"hljs-built_in"},"console"),s(".log("),a("span",{class:"hljs-string"},"'refresh'"),s(`)
    refreshing.value = `),a("span",{class:"hljs-literal"},"false"),s(`
  }, `),a("span",{class:"hljs-number"},"2000"),s(`)
}

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"load"),s("("),a("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
    `),a("span",{class:"hljs-keyword"},"for"),s(" ("),a("span",{class:"hljs-keyword"},"let"),s(" i = "),a("span",{class:"hljs-number"},"0"),s("; i < "),a("span",{class:"hljs-number"},"20"),s(`; i++) {
      list.value.push(list.value.length + `),a("span",{class:"hljs-number"},"1"),s(`)
    }
    
    loading.value = `),a("span",{class:"hljs-literal"},"false"),s(`
  }, `),a("span",{class:"hljs-number"},"1000"),s(`)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-pull-refresh"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"refreshing"'),s(" @"),a("span",{class:"hljs-attr"},"refresh"),s("="),a("span",{class:"hljs-string"},'"refresh"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-list"),s(),a("span",{class:"hljs-attr"},"v-model:loading"),s("="),a("span",{class:"hljs-string"},'"loading"'),s(" @"),a("span",{class:"hljs-attr"},"load"),s("="),a("span",{class:"hljs-string"},'"load"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(),a("span",{class:"hljs-attr"},":key"),s("="),a("span",{class:"hljs-string"},'"d"'),s(),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"d in list"'),s(">")]),s("ListItem {{ d }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-list"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-pull-refresh"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),k={class:"card"},w=a("h3",null,"注意",-1),x=a("p",null,[s("当 "),a("code",null,"PullRefresh"),s(" 容器高度为 "),a("code",null,"0"),s(" 时会导致下拉功能失效，所以需保证其子元素高度"),a("strong",null,"不为"),s(),a("code",null,"0"),s(" 或为 "),a("code",null,"PullRefresh"),s(" 容器设置高度:")],-1),C=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-pull-refresh"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"height: 200px"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-pull-refresh"),s(">")]),s(`

  `),a("span",{class:"hljs-comment"},"<!-- 或 -->"),s(`
  
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-pull-refresh"),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"height: 200px"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-pull-refresh"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),L=h('<h2>API</h2><div class="card"><h3>属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>是否处于加载中状态</td><td><em>boolean</em></td><td><code>-</code></td></tr><tr><td><code>disabled</code></td><td>是否禁用下拉刷新</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>target</code></td><td>触发滚动的对象，如果为 undefined 会监听距离最近的一个可滚动的祖先节点</td><td><em>string | HTMLElement</em></td><td><code>-</code></td></tr><tr><td><code>animation-duration</code></td><td>加载结束后回到初始位置的动画时长（ms）</td><td><em>string | number</em></td><td><code>300</code></td></tr><tr><td><code>success-duration</code></td><td>成功提示展示时长（ms）</td><td><em>string | number</em></td><td><code>2000</code></td></tr><tr><td><code>bg-color</code></td><td>control 的背景颜色</td><td><em>string</em></td><td><code>#005CAF</code></td></tr><tr><td><code>color</code></td><td>control 的颜色</td><td><em>string</em></td><td><code>#ffffff</code></td></tr><tr><td><code>success-bg-color</code></td><td>成功状态下 control 的背景颜色</td><td><em>string</em></td><td><code>#4CAF50</code></td></tr><tr><td><code>success-color</code></td><td>成功状态下 control 的颜色</td><td><em>string</em></td><td><code>ffffff</code></td></tr></tbody></table></div><div class="card"><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td><code>refresh</code></td><td>下拉刷新时触发</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>插槽</h3><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>默认插槽</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>样式变量</h3><p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--pull-refresh-size</code></td><td><code>40px</code></td></tr><tr><td><code>--pull-refresh-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--pull-refresh-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--pull-refresh-success-color</code></td><td><code>var(--color-success)</code></td></tr><tr><td><code>--pull-refresh-icon-size</code></td><td><code>25px</code></td></tr></tbody></table></div>',5);function N(P,R,T,A,I,z){const l=c("var-site-code-example");return d(),r("div",p,[i,j,a("div",u,[m,f,t(l,null,{default:e(()=>[g]),_:1})]),a("div",v,[_,b,t(l,null,{default:e(()=>[y]),_:1})]),a("div",k,[w,x,t(l,{"playground-ignore":""},{default:e(()=>[C]),_:1})]),L])}const $=n(o,[["render",N]]);export{$ as default};
