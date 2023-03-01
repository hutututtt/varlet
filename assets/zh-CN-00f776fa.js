import{_ as c,p as e,f as n,h as o,M as t,q as d,S as l,P as s,aq as r}from"./vue-router.esm-bundler-0d52b99f.js";const h={components:{}},p={class:"varlet-site-doc"},i=t("h1",null,"对话框",-1),j=t("div",{class:"card"},[t("h3",null,"介绍"),t("p",null,[s("弹出一个对话框展示内容并处理用户交互。 "),t("code",null,"Dialog"),s(" 提供了函数式和组件式两种使用方式，两种使用效果和参数并没有本质区别。")])],-1),m=t("h2",null,"函数调用",-1),g={class:"card"},u=t("h3",null,"基本使用",-1),f=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Dialog } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},`"Dialog('兰亭临帖 行书如行云流水')"`),s(">")]),s("基本使用"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),b={class:"card"},v=t("h3",null,"修改标题",-1),_=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Dialog } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"modifyTitle"),s("("),t("span",{class:"hljs-params"}),s(") ")]),s(`{
  Dialog({
    `),t("span",{class:"hljs-attr"},"title"),s(": "),t("span",{class:"hljs-string"},"'兰亭序'"),s(`,
    `),t("span",{class:"hljs-attr"},"message"),s(": "),t("span",{class:"hljs-string"},"'兰亭临帖 行书如行云流水'"),s(`,
  })
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"modifyTitle"'),s(">")]),s("修改标题"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),y={class:"card"},k=t("h3",null,"隐藏按钮",-1),w=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Dialog } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"hideButton"),s("("),t("span",{class:"hljs-params"}),s(") ")]),s(`{
  Dialog({
    `),t("span",{class:"hljs-attr"},"message"),s(": "),t("span",{class:"hljs-string"},"'兰亭临帖 行书如行云流水'"),s(`,
    `),t("span",{class:"hljs-attr"},"confirmButton"),s(": "),t("span",{class:"hljs-literal"},"false"),s(`,
    `),t("span",{class:"hljs-attr"},"cancelButton"),s(": "),t("span",{class:"hljs-literal"},"false"),s(`,
  })
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"hideButton"'),s(">")]),s("隐藏按钮"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),x={class:"card"},S=t("h3",null,"处理用户行为",-1),C=t("p",null,[s("可以通过 "),t("code",null,"Dialog"),s(" 方法的返回值获取用户行为, 返回值是一个 "),t("code",null,"promise"),s("。 包含 "),t("code",null,"confirm(确认)"),s("、"),t("code",null,"cancel(取消)"),s("、"),t("code",null,"close(通过点击遮罩层触发关闭)"),s(" 三种状态。")],-1),B=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Dialog, Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` actions = {
  `),t("span",{class:"hljs-attr"},"confirm"),s(": "),t("span",{class:"hljs-function"},"() =>"),s(" Snackbar.success("),t("span",{class:"hljs-string"},"'confirm'"),s(`),
  `),t("span",{class:"hljs-attr"},"cancel"),s(": "),t("span",{class:"hljs-function"},"() =>"),s(" Snackbar.error("),t("span",{class:"hljs-string"},"'cancel'"),s(`),
  `),t("span",{class:"hljs-attr"},"close"),s(": "),t("span",{class:"hljs-function"},"() =>"),s(" Snackbar.info("),t("span",{class:"hljs-string"},"'close'"),s(`),
}

`),t("span",{class:"hljs-keyword"},"async"),s(),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"createAction"),s("("),t("span",{class:"hljs-params"}),s(") ")]),s(`{
  actions[`),t("span",{class:"hljs-keyword"},"await"),s(" Dialog("),t("span",{class:"hljs-string"},"'兰亭临帖 行书如行云流水'"),s(`)]()
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"createAction"'),s(">")]),s("处理用户行为"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),D={class:"card"},T=t("h3",null,"异步关闭",-1),O=t("p",null,[t("code",null,"Dialog"),s(" 可以通过 "),t("code",null,"onBeforeClose"),s(" 进行关闭前的拦截，可以从参数中得到用户行为和触发关闭的回调函数。")],-1),A=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Dialog, Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` actions = {
  `),t("span",{class:"hljs-attr"},"confirm"),s(": "),t("span",{class:"hljs-function"},"() =>"),s(" Snackbar.success("),t("span",{class:"hljs-string"},"'confirm'"),s(`),
  `),t("span",{class:"hljs-attr"},"cancel"),s(": "),t("span",{class:"hljs-function"},"() =>"),s(" Snackbar.error("),t("span",{class:"hljs-string"},"'cancel'"),s(`),
  `),t("span",{class:"hljs-attr"},"close"),s(": "),t("span",{class:"hljs-function"},"() =>"),s(" Snackbar.info("),t("span",{class:"hljs-string"},"'close'"),s(`),
}

`),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"onBeforeClose"),s("("),t("span",{class:"hljs-params"},"action, done"),s(") ")]),s(`{
  Snackbar.loading(`),t("span",{class:"hljs-string"},"'正在异步关闭'"),s(`)
  
  `),t("span",{class:"hljs-built_in"},"setTimeout"),s("("),t("span",{class:"hljs-function"},"() =>"),s(` {
    actions[action]()
    done()
  }, `),t("span",{class:"hljs-number"},"1000"),s(`)
}

`),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"createAction"),s("("),t("span",{class:"hljs-params"}),s(") ")]),s(`{
  Dialog({
    `),t("span",{class:"hljs-attr"},"message"),s(": "),t("span",{class:"hljs-string"},"'兰亭临帖 行书如行云流水'"),s(`,
    onBeforeClose
  })
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"createAction"'),s(">")]),s("异步关闭"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),z=t("h2",null,"组件调用",-1),N={class:"card"},P=t("h3",null,"基本使用",-1),V=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`
   
`),t("span",{class:"hljs-keyword"},"const"),s(" show = ref("),t("span",{class:"hljs-literal"},"false"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"warning"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"show = true"'),s(">")]),s("基本使用"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-dialog"),s(`
    `),t("span",{class:"hljs-attr"},"title"),s("="),t("span",{class:"hljs-string"},'"兰亭序"'),s(`
    `),t("span",{class:"hljs-attr"},"message"),s("="),t("span",{class:"hljs-string"},'"兰亭临帖 行书如行云流水"'),s(`
    `),t("span",{class:"hljs-attr"},"v-model:show"),s("="),t("span",{class:"hljs-string"},'"show"'),s(`
    @`),t("span",{class:"hljs-attr"},"confirm"),s("="),t("span",{class:"hljs-string"},`"() => Snackbar.success('confirm')"`),s(`
    @`),t("span",{class:"hljs-attr"},"cancel"),s("="),t("span",{class:"hljs-string"},`"() => Snackbar.error('cancel')"`),s(`
    @`),t("span",{class:"hljs-attr"},"closed"),s("="),t("span",{class:"hljs-string"},`"() => Snackbar.info('closed')"`),s(`
  />`)]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),$={class:"card"},q=t("h3",null,"异步关闭",-1),F=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" show = ref("),t("span",{class:"hljs-literal"},"false"),s(`)

`),t("span",{class:"hljs-keyword"},"const"),s(` actions = {
  `),t("span",{class:"hljs-attr"},"confirm"),s(": "),t("span",{class:"hljs-function"},"() =>"),s(" Snackbar.success("),t("span",{class:"hljs-string"},"'confirm'"),s(`),
  `),t("span",{class:"hljs-attr"},"cancel"),s(": "),t("span",{class:"hljs-function"},"() =>"),s(" Snackbar.error("),t("span",{class:"hljs-string"},"'cancel'"),s(`),
  `),t("span",{class:"hljs-attr"},"close"),s(": "),t("span",{class:"hljs-function"},"() =>"),s(" Snackbar.info("),t("span",{class:"hljs-string"},"'close'"),s(`),
}

`),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"onBeforeClose"),s("("),t("span",{class:"hljs-params"},"action, done"),s(") ")]),s(`{
  Snackbar.loading(`),t("span",{class:"hljs-string"},"'Asynchronous shutdown in progress'"),s(`)

  `),t("span",{class:"hljs-built_in"},"setTimeout"),s("("),t("span",{class:"hljs-function"},"() =>"),s(` {
    actions[action]()
    done()
   }, `),t("span",{class:"hljs-number"},"1000"),s(`)
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"warning"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"show = true"'),s(">")]),s("异步关闭"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-dialog"),s(`
    `),t("span",{class:"hljs-attr"},"title"),s("="),t("span",{class:"hljs-string"},'"兰亭序"'),s(`
    `),t("span",{class:"hljs-attr"},"message"),s("="),t("span",{class:"hljs-string"},'"兰亭临帖 行书如行云流水"'),s(`
    `),t("span",{class:"hljs-attr"},"v-model:show"),s("="),t("span",{class:"hljs-string"},'"show"'),s(`
    @`),t("span",{class:"hljs-attr"},"before-close"),s("="),t("span",{class:"hljs-string"},'"onBeforeClose"'),s(`
  />`)]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),E={class:"card"},I=t("h3",null,"自定义插槽",-1),M=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" show = ref("),t("span",{class:"hljs-literal"},"false"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"warning"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"show = true"'),s(">")]),s("自定义插槽"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-dialog"),s(),t("span",{class:"hljs-attr"},"v-model:show"),s("="),t("span",{class:"hljs-string"},'"show"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(" #"),t("span",{class:"hljs-attr"},"title"),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-icon"),s(),t("span",{class:"hljs-attr"},"name"),s("="),t("span",{class:"hljs-string"},'"information"'),s(),t("span",{class:"hljs-attr"},"color"),s("="),t("span",{class:"hljs-string"},'"#2979ff"'),s(" />")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`

    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s("兰亭临帖 行书如行云流水"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s("兰亭临帖 行书如行云流水"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s("兰亭临帖 行书如行云流水"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-dialog"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),G=r('<h2>API</h2><div class="card"><h3>属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model:show</code></td><td>是否显示对话框</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>title</code></td><td>对话框标题</td><td><em>string</em></td><td><code>提示</code></td></tr><tr><td><code>width</code></td><td>对话框宽度</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>message</code></td><td>对话框内容</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>message-align</code></td><td>对话框内容文字对齐方式，可选值 <code>center</code> <code>left</code> <code>right</code></td><td><em>string</em></td><td><code>left</code></td></tr><tr><td><code>confirm-button</code></td><td>是否显示确认按钮</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>cancel-button</code></td><td>是否显示取消按钮</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>confirm-button-text</code></td><td>确认按钮文字</td><td><em>string</em></td><td><code>确认</code></td></tr><tr><td><code>cancel-button-text</code></td><td>取消按钮文字</td><td><em>string</em></td><td><code>取消</code></td></tr><tr><td><code>confirm-button-text-color</code></td><td>确认按钮文字颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancel-button-text-color</code></td><td>取消按钮文字颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>confirm-button-color</code></td><td>确认按钮背景颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancel-button-color</code></td><td>取消按钮背景颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>dialog-class</code></td><td>对话框主体区域的 class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>dialog-style</code></td><td>对话框主体区域的 style</td><td><em>object</em></td><td><code>-</code></td></tr><tr><td><code>overlay</code></td><td>是否显示遮罩层</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>overlay-class</code></td><td>自定义遮罩层的 class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>overlay-style</code></td><td>自定义遮罩层的 style</td><td><em>object</em></td><td><code>-</code></td></tr><tr><td><code>lock-scroll</code></td><td>是否禁止滚动穿透，禁止时滚动弹出层不会引发 body 的滚动</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>close-on-click-overlay</code></td><td>是否点击遮罩层关闭弹出层</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>teleport</code></td><td>弹出层挂载的位置</td><td><em>TeleportProps[&#39;to&#39;]</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>open</code></td><td>打开对话框时触发</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>打开对话框动画结束时触发</td><td><code>-</code></td></tr><tr><td><code>before-close</code></td><td>对话框关闭前触发，会阻止关闭</td><td><code>action: confirm | cancel | close</code> <br> <code>done: Function</code></td></tr><tr><td><code>close</code></td><td>关闭对话框时触发</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>关闭对话框动画结束时触发</td><td><code>-</code></td></tr><tr><td><code>confirm</code></td><td>确认时触发</td><td><code>-</code></td></tr><tr><td><code>cancel</code></td><td>取消时触发</td><td><code>-</code></td></tr><tr><td><code>click-overlay</code></td><td>点击遮罩层时触发</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>方法</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>Dialog</code></td><td>显示对话框</td><td><em>options | string</em></td><td><code>-</code></td></tr><tr><td><code>Dialog.setDefaultOptions</code></td><td>设置默认的选项配置</td><td><em>options</em></td><td><code>-</code></td></tr><tr><td><code>Dialog.resetDefaultOptions</code></td><td>重置默认的选项配置</td><td><em>-</em></td><td><code>-</code></td></tr><tr><td><code>Dialog.close</code></td><td>关闭对话框</td><td><em>-</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Dialog Options</h3><h4>函数式调用时传入的选项</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>title</code></td><td>对话框标题</td><td><em>string</em></td><td><code>提示</code></td></tr><tr><td><code>width</code></td><td>对话框宽度</td><td>_string | number</td><td><code>-</code></td></tr><tr><td><code>message</code></td><td>对话框内容</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>messageAlign</code></td><td>对话框内容文字对齐方式，可选值 <code>center</code> <code>left</code> <code>right</code></td><td><em>string</em></td><td><code>left</code></td></tr><tr><td><code>confirmButton</code></td><td>是否显示确认按钮</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>cancelButton</code></td><td>是否显示取消按钮</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>confirmButtonText</code></td><td>确认按钮文字</td><td><em>string</em></td><td><code>确认</code></td></tr><tr><td><code>cancelButtonText</code></td><td>取消按钮文字</td><td><em>string</em></td><td><code>取消</code></td></tr><tr><td><code>confirmButtonTextColor</code></td><td>确认按钮文字颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancelButtonTextColor</code></td><td>取消按钮文字颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>confirmButtonColor</code></td><td>确认按钮背景颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancelButtonColor</code></td><td>取消按钮背景颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>dialogClass</code></td><td>对话框主体区域的 class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>dialogStyle</code></td><td>对话框主体区域的 style</td><td><em>object</em></td><td><code>-</code></td></tr><tr><td><code>overlay</code></td><td>是否显示遮罩层</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>overlayClass</code></td><td>自定义遮罩层的 class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>overlayStyle</code></td><td>自定义遮罩层的 style</td><td><em>object</em></td><td><code>-</code></td></tr><tr><td><code>lockScroll</code></td><td>是否禁止滚动穿透，禁止时滚动弹出层不会引发 body 的滚动</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>closeOnClickOverlay</code></td><td>是否点击遮罩层关闭弹出层</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>onOpen</code></td><td>对话框开启回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>对话框开启动画结束回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onBeforeClose</code></td><td>对话框关闭前回调，会阻止关闭</td><td><em>(action: confirm | cancel | close, done: Function) =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>对话框关闭回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>对话框关闭动画结束回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onConfirm</code></td><td>确认回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onCancel</code></td><td>取消回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClickOverlay</code></td><td>遮罩层点击回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>插槽</h3><table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>对话框主要内容</td><td><code>-</code></td></tr><tr><td><code>title</code></td><td>对话框标题</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>样式变量</h3><p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--dialog-width</code></td><td><code>280px</code></td></tr><tr><td><code>--dialog-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--dialog-border-radius</code></td><td><code>3px</code></td></tr><tr><td><code>--dialog-title-padding</code></td><td><code>20px 20px 0</code></td></tr><tr><td><code>--dialog-title-font-size</code></td><td><code>var(--font-size-lg)</code></td></tr><tr><td><code>--dialog-message-color</code></td><td><code>#888</code></td></tr><tr><td><code>--dialog-message-padding</code></td><td><code>12px 20px</code></td></tr><tr><td><code>--dialog-message-line-height</code></td><td><code>24px</code></td></tr><tr><td><code>--dialog-message-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--dialog-actions-padding</code></td><td><code>0 12px 12px</code></td></tr><tr><td><code>--dialog-button-margin-left</code></td><td><code>6px</code></td></tr><tr><td><code>--dialog-confirm-button-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--dialog-cancel-button-color</code></td><td><code>var(--color-primary)</code></td></tr></tbody></table></div>',7);function H(J,K,L,Q,R,U){const a=e("var-site-code-example");return n(),o("div",p,[i,j,m,t("div",g,[u,d(a,null,{default:l(()=>[f]),_:1})]),t("div",b,[v,d(a,null,{default:l(()=>[_]),_:1})]),t("div",y,[k,d(a,null,{default:l(()=>[w]),_:1})]),t("div",x,[S,C,d(a,null,{default:l(()=>[B]),_:1})]),t("div",D,[T,O,d(a,null,{default:l(()=>[A]),_:1})]),z,t("div",N,[P,d(a,null,{default:l(()=>[V]),_:1})]),t("div",$,[q,d(a,null,{default:l(()=>[F]),_:1})]),t("div",E,[I,d(a,null,{default:l(()=>[M]),_:1})]),G])}const X=c(h,[["render",H]]);export{X as default};
