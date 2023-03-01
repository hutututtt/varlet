import{_ as e,p as c,f as d,h as o,M as l,q as t,S as n,P as s,aq as r}from"./vue-router.esm-bundler-0d52b99f.js";const h={components:{}},p={class:"varlet-site-doc"},i=l("h1",null,"无限滚动列表",-1),j=l("div",{class:"card"},[l("h3",null,"介绍"),l("p",null,"无限滚动加载列表、触底加载，支持手动检查位置并加载。支持自定义加载状态、错误状态、数据加载完成状态。")],-1),m={class:"card"},u=l("h3",null,"基本使用",-1),f=l("p",null,[s("当检测到滚动容器滚动到底部底部时会触发 "),l("code",null,"load"),s(" 事件，并会设置 "),l("code",null,"loading"),s(" 为 "),l("code",null,"true"),s("，在加载结束时您需要手动设置 "),l("code",null,"loading"),s(" 为 "),l("code",null,"false"),s("，表示加载结束。")],-1),g=l("pre",{class:"hljs"},[l("code",null,[l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"script"),s(),l("span",{class:"hljs-attr"},"setup"),s(">")]),l("span",{class:"javascript"},[s(`
`),l("span",{class:"hljs-keyword"},"import"),s(" { ref } "),l("span",{class:"hljs-keyword"},"from"),s(),l("span",{class:"hljs-string"},"'vue'"),s(`

`),l("span",{class:"hljs-keyword"},"const"),s(" loading = ref("),l("span",{class:"hljs-literal"},"false"),s(`)
`),l("span",{class:"hljs-keyword"},"const"),s(" finished = ref("),l("span",{class:"hljs-literal"},"false"),s(`)
`),l("span",{class:"hljs-keyword"},"const"),s(` list = ref([])

`),l("span",{class:"hljs-function"},[l("span",{class:"hljs-keyword"},"function"),s(),l("span",{class:"hljs-title"},"load"),s("("),l("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),l("span",{class:"hljs-built_in"},"setTimeout"),s("("),l("span",{class:"hljs-function"},"() =>"),s(` {
    `),l("span",{class:"hljs-keyword"},"for"),s(" ("),l("span",{class:"hljs-keyword"},"let"),s(" i = "),l("span",{class:"hljs-number"},"0"),s("; i < "),l("span",{class:"hljs-number"},"20"),s(`; i++) {
      list.value.push(list.value.length + `),l("span",{class:"hljs-number"},"1"),s(`)
    }

    loading.value = `),l("span",{class:"hljs-literal"},"false"),s(`

    `),l("span",{class:"hljs-keyword"},"if"),s(" (list.value.length >= "),l("span",{class:"hljs-number"},"60"),s(`) {
      finished.value = `),l("span",{class:"hljs-literal"},"true"),s(`
    }
  }, `),l("span",{class:"hljs-number"},"1000"),s(`)
}
`)]),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"var-list"),s(`
    `),l("span",{class:"hljs-attr"},":finished"),s("="),l("span",{class:"hljs-string"},'"finished"'),s(`
    `),l("span",{class:"hljs-attr"},"v-model:loading"),s("="),l("span",{class:"hljs-string"},'"loading"'),s(`
    @`),l("span",{class:"hljs-attr"},"load"),s("="),l("span",{class:"hljs-string"},'"load"'),s(`
  >`)]),s(`
    `),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"var-cell"),s(),l("span",{class:"hljs-attr"},":key"),s("="),l("span",{class:"hljs-string"},'"item"'),s(),l("span",{class:"hljs-attr"},"v-for"),s("="),l("span",{class:"hljs-string"},'"item in list"'),s(">")]),s(`
      列表项: {{ item }}
    `),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
  `),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"var-list"),s(">")]),s(`
`),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"template"),s(">")]),s(`

`)])],-1),v={class:"card"},_=l("h3",null,"加载失败",-1),y=l("p",null,[s("您可以使用 "),l("code",null,"v-model:error"),s(" 手动设置错误状态，会展示错误提示，点击错误提示会帮您把 "),l("code",null,"error"),s(" 设置成 "),l("code",null,"false"),s(" 并再次触发 "),l("code",null,"load"),s(" 事件。")],-1),b=l("pre",{class:"hljs"},[l("code",null,[l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"script"),s(),l("span",{class:"hljs-attr"},"setup"),s(">")]),l("span",{class:"javascript"},[s(`
`),l("span",{class:"hljs-keyword"},"import"),s(" { ref } "),l("span",{class:"hljs-keyword"},"from"),s(),l("span",{class:"hljs-string"},"'vue'"),s(`

`),l("span",{class:"hljs-keyword"},"const"),s(" loading = ref("),l("span",{class:"hljs-literal"},"false"),s(`)
`),l("span",{class:"hljs-keyword"},"const"),s(" error = ref("),l("span",{class:"hljs-literal"},"false"),s(`)
`),l("span",{class:"hljs-keyword"},"const"),s(` list = ref([])

`),l("span",{class:"hljs-function"},[l("span",{class:"hljs-keyword"},"function"),s(),l("span",{class:"hljs-title"},"load"),s("("),l("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),l("span",{class:"hljs-built_in"},"setTimeout"),s("("),l("span",{class:"hljs-function"},"() =>"),s(` {
    `),l("span",{class:"hljs-keyword"},"if"),s(" (list.value.length === "),l("span",{class:"hljs-number"},"40"),s(`) {
      error.value = `),l("span",{class:"hljs-literal"},"true"),s(`
      loading.value = `),l("span",{class:"hljs-literal"},"false"),s(`
      `),l("span",{class:"hljs-keyword"},"return"),s(`
    }

    `),l("span",{class:"hljs-keyword"},"for"),s(" ("),l("span",{class:"hljs-keyword"},"let"),s(" i = "),l("span",{class:"hljs-number"},"0"),s("; i < "),l("span",{class:"hljs-number"},"20"),s(`; i++) {
      list.value.push(list.value.length + `),l("span",{class:"hljs-number"},"1"),s(`)
    }

    loading.value = `),l("span",{class:"hljs-literal"},"false"),s(`
  }, `),l("span",{class:"hljs-number"},"1000"),s(`)
}
`)]),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"var-list"),s(`
    `),l("span",{class:"hljs-attr"},"v-model:error"),s("="),l("span",{class:"hljs-string"},'"error"'),s(`
    `),l("span",{class:"hljs-attr"},"v-model:loading"),s("="),l("span",{class:"hljs-string"},'"loading"'),s(`
    @`),l("span",{class:"hljs-attr"},"load"),s("="),l("span",{class:"hljs-string"},'"load"'),s(`
  >`)]),s(`
    `),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"var-cell"),s(),l("span",{class:"hljs-attr"},":key"),s("="),l("span",{class:"hljs-string"},'"item"'),s(),l("span",{class:"hljs-attr"},"v-for"),s("="),l("span",{class:"hljs-string"},'"item in list"'),s(">")]),s(`
      列表项: {{ item }}
    `),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
  `),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"var-list"),s(">")]),s(`
`),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),k={class:"card"},w=l("h3",null,"提示文字",-1),x=l("pre",{class:"hljs"},[l("code",null,[l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"script"),s(),l("span",{class:"hljs-attr"},"setup"),s(">")]),l("span",{class:"javascript"},[s(`
`),l("span",{class:"hljs-keyword"},"import"),s(" { ref } "),l("span",{class:"hljs-keyword"},"from"),s(),l("span",{class:"hljs-string"},"'vue'"),s(`

`),l("span",{class:"hljs-keyword"},"const"),s(" loading = ref("),l("span",{class:"hljs-literal"},"false"),s(`)
`),l("span",{class:"hljs-keyword"},"const"),s(" finished = ref("),l("span",{class:"hljs-literal"},"false"),s(`)
`),l("span",{class:"hljs-keyword"},"const"),s(` list = ref([])

`),l("span",{class:"hljs-function"},[l("span",{class:"hljs-keyword"},"function"),s(),l("span",{class:"hljs-title"},"load"),s("("),l("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),l("span",{class:"hljs-built_in"},"setTimeout"),s("("),l("span",{class:"hljs-function"},"() =>"),s(` {
    `),l("span",{class:"hljs-keyword"},"for"),s(" ("),l("span",{class:"hljs-keyword"},"let"),s(" i = "),l("span",{class:"hljs-number"},"0"),s("; i < "),l("span",{class:"hljs-number"},"20"),s(`; i++) {
      list.value.push(list.value.length + `),l("span",{class:"hljs-number"},"1"),s(`)
    }

    loading.value = `),l("span",{class:"hljs-literal"},"false"),s(`

    `),l("span",{class:"hljs-keyword"},"if"),s(" (list.value.length >= "),l("span",{class:"hljs-number"},"60"),s(`) {
      finished.value = `),l("span",{class:"hljs-literal"},"true"),s(`
    }
  }, `),l("span",{class:"hljs-number"},"1000"),s(`)
}
`)]),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"var-list"),s(`
    `),l("span",{class:"hljs-attr"},"loading-text"),s("="),l("span",{class:"hljs-string"},'"正在努力输出"'),s(`
    `),l("span",{class:"hljs-attr"},"finished-text"),s("="),l("span",{class:"hljs-string"},'"一滴都没有了"'),s(`
    `),l("span",{class:"hljs-attr"},"error-text"),s("="),l("span",{class:"hljs-string"},'"出错了出错了"'),s(`
    `),l("span",{class:"hljs-attr"},":finished"),s("="),l("span",{class:"hljs-string"},'"finished"'),s(`
    `),l("span",{class:"hljs-attr"},"v-model:loading"),s("="),l("span",{class:"hljs-string"},'"loading"'),s(`
    @`),l("span",{class:"hljs-attr"},"load"),s("="),l("span",{class:"hljs-string"},'"load"'),s(`
  >`)]),s(`
    `),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"var-cell"),s(),l("span",{class:"hljs-attr"},":key"),s("="),l("span",{class:"hljs-string"},'"item"'),s(),l("span",{class:"hljs-attr"},"v-for"),s("="),l("span",{class:"hljs-string"},'"item in list"'),s(">")]),s(`
      列表项: {{ item }}
    `),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
  `),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"var-list"),s(">")]),s(`
`),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),z={class:"card"},N=l("h3",null,"组合",-1),T=l("p",null,[s("与 "),l("code",null,"PullRefresh"),s(" 组件结合使用即可实现上拉加载和下拉刷新的功能，需保证"),l("code",null,"PullRefresh"),s(" 容器高度不为 "),l("code",null,"0"),s("。")],-1),P=l("pre",{class:"hljs"},[l("code",null,[l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"script"),s(),l("span",{class:"hljs-attr"},"setup"),s(">")]),l("span",{class:"javascript"},[s(`
`),l("span",{class:"hljs-keyword"},"import"),s(" { ref } "),l("span",{class:"hljs-keyword"},"from"),s(),l("span",{class:"hljs-string"},"'vue'"),s(`

`),l("span",{class:"hljs-keyword"},"const"),s(" refreshing = ref("),l("span",{class:"hljs-literal"},"false"),s(`)
`),l("span",{class:"hljs-keyword"},"const"),s(" loading = ref("),l("span",{class:"hljs-literal"},"false"),s(`)
`),l("span",{class:"hljs-keyword"},"const"),s(` list = ref([])

`),l("span",{class:"hljs-function"},[l("span",{class:"hljs-keyword"},"function"),s(),l("span",{class:"hljs-title"},"refresh"),s("("),l("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),l("span",{class:"hljs-built_in"},"setTimeout"),s("("),l("span",{class:"hljs-function"},"() =>"),s(` {
    `),l("span",{class:"hljs-built_in"},"console"),s(".log("),l("span",{class:"hljs-string"},"'refresh'"),s(`)
    refreshing.value = `),l("span",{class:"hljs-literal"},"false"),s(`
  }, `),l("span",{class:"hljs-number"},"2000"),s(`)
}

`),l("span",{class:"hljs-function"},[l("span",{class:"hljs-keyword"},"function"),s(),l("span",{class:"hljs-title"},"load"),s("("),l("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),l("span",{class:"hljs-built_in"},"setTimeout"),s("("),l("span",{class:"hljs-function"},"() =>"),s(` {
    `),l("span",{class:"hljs-keyword"},"for"),s(" ("),l("span",{class:"hljs-keyword"},"let"),s(" i = "),l("span",{class:"hljs-number"},"0"),s("; i < "),l("span",{class:"hljs-number"},"20"),s(`; i++) {
      list.value.push(list.value.length + `),l("span",{class:"hljs-number"},"1"),s(`)
    }
    
    loading.value = `),l("span",{class:"hljs-literal"},"false"),s(`
  }, `),l("span",{class:"hljs-number"},"1000"),s(`)
}
`)]),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"var-pull-refresh"),s(),l("span",{class:"hljs-attr"},"v-model"),s("="),l("span",{class:"hljs-string"},'"refreshing"'),s(" @"),l("span",{class:"hljs-attr"},"refresh"),s("="),l("span",{class:"hljs-string"},'"refresh"'),s(">")]),s(`
    `),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"var-list"),s(),l("span",{class:"hljs-attr"},"v-model:loading"),s("="),l("span",{class:"hljs-string"},'"loading"'),s(" @"),l("span",{class:"hljs-attr"},"load"),s("="),l("span",{class:"hljs-string"},'"load"'),s(">")]),s(`
      `),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"var-cell"),s(),l("span",{class:"hljs-attr"},":key"),s("="),l("span",{class:"hljs-string"},'"d"'),s(),l("span",{class:"hljs-attr"},"v-for"),s("="),l("span",{class:"hljs-string"},'"d in list"'),s(">")]),s("ListItem {{ d }}"),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
    `),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"var-list"),s(">")]),s(`
  `),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"var-pull-refresh"),s(">")]),s(`
`),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),C=r('<div class="card"><h3>注意</h3><p>我们是通过监听滚动容器的 <code>scroll</code> 事件检测是否触底并执行加载。 滚动容器是指最近的一个 <code>overflow-y</code> 为 <code>auto</code> 或者 <code>scroll</code> 的元素。 当您设置一个元素的 <code>overflow-x</code> 为除了 <code>visible</code> 以外的值时，浏览器为了维护一个 <code>bfc</code> 的结构会使您的 <code>overflow-y</code> 修正为 <code>auto</code>。 这时我们就会误认为这个元素也是一个滚动容器，注意规避。</p></div><h2>API</h2><div class="card"><h3>属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model:loading</code></td><td>加载状态</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>v-model:error</code></td><td>错误状态</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>immediate-check</code></td><td>是否在组件初始化时立刻检测位置</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>finished</code></td><td>是否加载完毕</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>offset</code></td><td>距离底部的触发距离</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>loading-text</code></td><td>加载状态文字</td><td><em>string</em></td><td><code>加载中</code></td></tr><tr><td><code>finished-text</code></td><td>加载完毕文字</td><td><em>string</em></td><td><code>没有更多了</code></td></tr><tr><td><code>error-text</code></td><td>加载失败文字</td><td><em>string</em></td><td><code>加载失败</code></td></tr></tbody></table></div><div class="card"><h3>方法</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>check</code></td><td>触发位置检查, 触底触发 load 事件。</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>load</code></td><td>触底时触发</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>插槽</h3><table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>列表内容</td><td><code>-</code></td></tr><tr><td><code>loading</code></td><td>加载中内容</td><td><code>-</code></td></tr><tr><td><code>error</code></td><td>加载失败内容</td><td><code>-</code></td></tr><tr><td><code>finished</code></td><td>加载完毕内容</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>样式变量</h3><p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--list-loading-height</code></td><td><code>50px</code></td></tr><tr><td><code>--list-finished-height</code></td><td><code>50px</code></td></tr><tr><td><code>--list-error-height</code></td><td><code>50px</code></td></tr><tr><td><code>--list-loading-color</code></td><td><code>#888</code></td></tr><tr><td><code>--list-finished-color</code></td><td><code>#888</code></td></tr><tr><td><code>--list-error-color</code></td><td><code>#888</code></td></tr><tr><td><code>--list-loading-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--list-finished-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--list-error-font-size</code></td><td><code>var(--font-size-md)</code></td></tr></tbody></table></div>',7);function V($,B,S,q,I,R){const a=c("var-site-code-example");return d(),o("div",p,[i,j,l("div",m,[u,f,t(a,null,{default:n(()=>[g]),_:1})]),l("div",v,[_,y,t(a,null,{default:n(()=>[b]),_:1})]),l("div",k,[w,t(a,null,{default:n(()=>[x]),_:1})]),l("div",z,[N,T,t(a,null,{default:n(()=>[P]),_:1})]),C])}const E=e(h,[["render",V]]);export{E as default};
