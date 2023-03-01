import{_ as c,p as d,f as e,h as o,M as a,q as n,S as l,P as s,aq as r}from"./vue-router.esm-bundler-0d52b99f.js";const p={components:{}},h={class:"varlet-site-doc"},j=a("h1",null,"消息条",-1),i=a("div",{class:"card"},[a("h3",null,"介绍"),a("p",null,"用于向用户显示快速消息。")],-1),m=a("h2",null,"组件调用",-1),g={class:"card"},b=a("h3",null,"基本使用",-1),u=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" show = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = !show"'),s(">")]),s("基本使用"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-snackbar"),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"show"'),s(">")]),s("这是一个消息条！！"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-snackbar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),k={class:"card"},v=a("h3",null,"垂直排列",-1),_=a("p",null,[s("通过 "),a("code",null,"vertical"),s(" 属性改变 "),a("code",null,"snackbar"),s(" 排列方式，通过 "),a("code",null,"自定义插槽"),s(" 创建右边 action。")],-1),y=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" show = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-snackbar"),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"show"'),s(),a("span",{class:"hljs-attr"},":vertical"),s("="),a("span",{class:"hljs-string"},'"true"'),s(">")]),s(`
    这是一个消息条！！
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"action"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = !show"'),s(">")]),s("关闭"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-snackbar"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = true"'),s(">")]),s("垂直排列"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),f={class:"card"},w=a("h3",null,"底部显示",-1),S=a("p",null,[s("通过 "),a("code",null,"position"),s(" 属性改变 "),a("code",null,"snackbar"),s(" 显示位置。")],-1),x=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" show = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-snackbar"),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"show"'),s(),a("span",{class:"hljs-attr"},"position"),s("="),a("span",{class:"hljs-string"},'"bottom"'),s(">")]),s(`
    这是一个消息条！！
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"action"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = false"'),s(">")]),s("关闭"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-snackbar"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = true"'),s(">")]),s("底部显示"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),L={class:"card"},C=a("h3",null,"显示时长",-1),z=a("p",null,[s("通过 "),a("code",null,"duration"),s(" 属性改变 "),a("code",null,"snackbar"),s(" 显示时长。")],-1),N=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" show = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-snackbar"),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"show"'),s(),a("span",{class:"hljs-attr"},":duration"),s("="),a("span",{class:"hljs-string"},'"1000"'),s(">")]),s(" 这是一个消息条！！"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-snackbar"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = true"'),s(">")]),s(`
    显示时长
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),M={class:"card"},O=a("h3",null,"禁止穿透点击",-1),T=a("p",null,[s("使用 "),a("code",null,"forbid-click"),s(" 控制是否禁止穿透点击。")],-1),P=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" show = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-snackbar"),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"show"'),s(),a("span",{class:"hljs-attr"},":forbid-click"),s("="),a("span",{class:"hljs-string"},'"true"'),s(">")]),s(`
    这是一个消息条！！
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-snackbar"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"show = true"'),s(">")]),s(`
    禁止穿透
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),V=a("h2",null,"函数调用",-1),$={class:"card"},B=a("h3",null,"基本使用",-1),q=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"Snackbar("'),s('这是一个消息条")">')]),s("基本使用"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),D={class:"card"},A=a("h3",null,"显示时长",-1),E=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"createSnackbar"),s("("),a("span",{class:"hljs-params"}),s(") ")]),s(`{
  Snackbar({
    `),a("span",{class:"hljs-attr"},"content"),s(": "),a("span",{class:"hljs-string"},'"这是一个消息条!!"'),s(`,
    `),a("span",{class:"hljs-attr"},"duration"),s(": "),a("span",{class:"hljs-number"},"1000"),s(`
  })
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"createSnackbar"'),s(">")]),s("显示时长"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),I={class:"card"},R=a("h3",null,"底部显示",-1),F=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"createSnackbar"),s("("),a("span",{class:"hljs-params"}),s(") ")]),s(`{
  Snackbar({
    `),a("span",{class:"hljs-attr"},"content"),s(": "),a("span",{class:"hljs-string"},'"这是一个消息条！！"'),s(`,
    `),a("span",{class:"hljs-attr"},"position"),s(": "),a("span",{class:"hljs-string"},"'bottom'"),s(`
  })
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"createSnackbar"'),s(">")]),s("底部显示"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),G={class:"card"},H=a("h3",null,"Snackbar 类型",-1),J=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"createSnackbar"),s("("),a("span",{class:"hljs-params"},"type"),s(") ")]),s(`{
  Snackbar[type](`),a("span",{class:"hljs-string"},'"这是一个消息条"'),s(`)
  `),a("span",{class:"hljs-keyword"},"if"),s(" (type === "),a("span",{class:"hljs-string"},"'loading'"),s(`) {
    `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
      Snackbar.success(`),a("span",{class:"hljs-string"},'"加载成功"'),s(`)
    }, `),a("span",{class:"hljs-number"},"2000"),s(`)
  }
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-space"),s(),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"column"'),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"large"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(` 
      `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"success"'),s(` 
      `),a("span",{class:"hljs-attr"},"block"),s(` 
      @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"createSnackbar('success')"`),s(`
    >`)]),s(`
      成功
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(` 
      `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(` 
      `),a("span",{class:"hljs-attr"},"block"),s(` 
      @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"createSnackbar('warning')"`),s(`
    >`)]),s(`
      警告
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(` 
      `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"info"'),s(` 
      `),a("span",{class:"hljs-attr"},"block"),s(` 
      @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"createSnackbar('info')"`),s(`
    >`)]),s(`
      消息
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(` 
      `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"danger"'),s(` 
      `),a("span",{class:"hljs-attr"},"block"),s(` 
      @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"createSnackbar('error')"`),s(`
    >`)]),s(`
      错误
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(` 
      `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(` 
      `),a("span",{class:"hljs-attr"},"block"),s(` 
      @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"createSnackbar('loading')"`),s(`
    >`)]),s(`
      加载
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),K={class:"card"},Q=a("h3",null,"多例模式",-1),U=a("p",null,"使用函数式调用时，Snackbar 默认采用单例模式，即同一时间只会存在一个 Snackbar，如果需要在同一时间弹出多个 Snackbar，可以参考下面的示例:",-1),W=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"openMultiple"),s("("),a("span",{class:"hljs-params"}),s(") ")]),s(`{
  Snackbar.allowMultiple(`),a("span",{class:"hljs-literal"},"true"),s(`)

  `),a("span",{class:"hljs-keyword"},"const"),s(" snackbar1 = Snackbar("),a("span",{class:"hljs-string"},"'Snackbar 1'"),s(`);
  Snackbar.success(`),a("span",{class:"hljs-string"},"'Snackbar 2'"),s(`);

  `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
    snackbar1.clear()
  }, `),a("span",{class:"hljs-number"},"1000"),s(`)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"openMultiple"'),s(">")]),s("多例模式"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),X=r('<h2>API</h2><div class="card"><h3>属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model:show</code></td><td>是否显示 <code>Snackbar</code></td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>type</code></td><td><code>Snackbar</code> 类型，可选值为 <code>success warning info error loading</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>position</code></td><td><code>Snackbar</code> 位置，可选值为 <code>top center bottom</code></td><td><em>string</em></td><td><code>top</code></td></tr><tr><td><code>duration</code></td><td>显示时长</td><td><em>number</em></td><td><code>3000</code></td></tr><tr><td><code>content</code></td><td>自定义内容</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>content-class</code></td><td>自定义内容的类名</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>vertical</code></td><td>是否启用竖直排列方式</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>loading-type</code></td><td>Loading类型(见 <code>Loading</code> 组件)</td><td><em>string</em></td><td><code>circle</code></td></tr><tr><td><code>loading-size</code></td><td>Loading大小(见 <code>Loading</code> 组件)</td><td><em>string</em></td><td><code>normal</code></td></tr><tr><td><code>loading-color</code></td><td>loading颜色(见<code>_loading</code>组件)</td><td><em>string</em></td><td><code>current_color</code></td></tr><tr><td><code>loading-radius</code></td><td>Loading半径大小(见 <code>Loading</code> 组件)</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>lock-scroll</code></td><td>是否禁止滚动穿透</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>forbid-click</code></td><td>是否禁止穿透点击</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>teleport</code></td><td>弹出层挂载的位置</td><td><em>TeleportProps[&#39;to&#39;]</em></td><td><code>body</code></td></tr></tbody></table></div><div class="card"><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td><code>open</code></td><td>打开 <code>Snackbar</code> 时触发</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>打开 <code>Snackbar</code> 动画结束时触发</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>关闭 <code>Snackbar</code> 时触发</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>关闭 <code>Snackbar</code> 动画结束时触发</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>插槽</h3><table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td><code>Snackbar</code> 内容</td><td><code>-</code></td></tr><tr><td><code>action</code></td><td><code>Snackbar</code> 右边动作区</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>方法</h3><p>实例上的 <code>clear</code> 方法可关闭当前实例，全局 <code>clear</code> 方法可关闭所有的消息条。</p><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>Snackbar</code></td><td>显示消息条</td><td><em>options | string</em></td><td><code>snackbar 实例</code></td></tr><tr><td><code>Snackbar.success</code></td><td>显示成功消息条</td><td><em>options | string</em></td><td><code>snackbar 实例</code></td></tr><tr><td><code>Snackbar.info</code></td><td>显示普通消息条</td><td><em>options | string</em></td><td><code>snackbar 实例</code></td></tr><tr><td><code>Snackbar.warning</code></td><td>显示警告消息条</td><td><em>options | string</em></td><td><code>snackbar 实例</code></td></tr><tr><td><code>Snackbar.error</code></td><td>显示错误消息条</td><td><em>options | string</em></td><td><code>snackbar 实例</code></td></tr><tr><td><code>Snackbar.loading</code></td><td>显示加载消息条</td><td><em>options | string</em></td><td><code>snackbar 实例</code></td></tr><tr><td><code>Snackbar.clear</code></td><td>关闭消息条</td><td><em>-</em></td><td><code>-</code></td></tr><tr><td><code>Snackbar.allowMultiple</code></td><td>是否允许多例模式</td><td><em>boolean</em></td><td><code>-</code></td></tr><tr><td><code>Snackbar.setDefaultOptions</code></td><td>设置默认的选项配置</td><td><em>options</em></td><td><code>-</code></td></tr><tr><td><code>Snackbar.resetDefaultOptions</code></td><td>重置默认的选项配置</td><td><em>-</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Snackbar Options</h3><h4>函数式调用时传入的选项</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>type</code></td><td><code>Snackbar</code> 类型，可选值为 <code>success warning info error loading</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>position</code></td><td><code>Snackbar</code> 位置，可选值为 <code>top center bottom</code></td><td><em>string</em></td><td><code>top</code></td></tr><tr><td><code>duration</code></td><td>显示时长(当 <code>type</code> 属性为 <code>loading</code> 时，需要手动关闭)</td><td><em>number</em></td><td><code>3000</code></td></tr><tr><td><code>content</code></td><td>自定义内容</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>contentClass</code></td><td>自定义内容的类名</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>vertical</code></td><td>是否启用竖直排列方式</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>loadingType</code></td><td>Loading类型(见 <code>Loading</code> 组件)</td><td><em>string</em></td><td><code>circle</code></td></tr><tr><td><code>loadingSize</code></td><td>Loading大小(见 <code>Loading</code> 组件)</td><td><em>string</em></td><td><code>normal</code></td></tr><tr><td><code>loadingColor</code></td><td>Loading颜色(见 <code>Loading</code> 组件)</td><td><em>string</em></td><td><code>currentColor</code></td></tr><tr><td><code>loadingRadius</code></td><td>Loading半径大小(见 <code>Loading</code> 组件)</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>lockScroll</code></td><td>是否禁止滚动穿透</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>forbidClick</code></td><td>是否禁止穿透点击(当 <code>type</code> 属性为 <code>loading</code> 时，默认为 <code>true</code>)</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>onOpen</code></td><td>打开 <code>Snackbar</code> 时触发</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>打开 <code>Snackbar</code> 动画结束时触发</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>关闭 <code>Snackbar</code> 时触发</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>关闭 <code>Snackbar</code> 动画结束时触发</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>样式变量</h3><p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--snackbar-width</code></td><td><code>256px</code></td></tr><tr><td><code>--snackbar-color</code></td><td><code>rgba(255, 255, 255, .87)</code></td></tr><tr><td><code>--snackbar-border-radius</code></td><td><code>4px</code></td></tr><tr><td><code>--snackbar-background</code></td><td><code>#333</code></td></tr><tr><td><code>--snackbar-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--snackbar-margin</code></td><td><code>6px 24px</code></td></tr><tr><td><code>--snackbar-border-color</code></td><td><code>currentColor</code></td></tr><tr><td><code>--snackbar-success-background</code></td><td><code>var(--color-success)</code></td></tr><tr><td><code>--snackbar-info-background</code></td><td><code>var(--color-info)</code></td></tr><tr><td><code>--snackbar-error-background</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--snackbar-warning-background</code></td><td><code>var(--color-warning)</code></td></tr><tr><td><code>--snackbar-content-padding</code></td><td><code>14px 16px</code></td></tr><tr><td><code>--snackbar-action-margin</code></td><td><code>0 16px 0 0</code></td></tr></tbody></table></div>',7);function Y(Z,ss,as,ts,ns,ls){const t=d("var-site-code-example");return e(),o("div",h,[j,i,m,a("div",g,[b,n(t,null,{default:l(()=>[u]),_:1})]),a("div",k,[v,_,n(t,null,{default:l(()=>[y]),_:1})]),a("div",f,[w,S,n(t,null,{default:l(()=>[x]),_:1})]),a("div",L,[C,z,n(t,null,{default:l(()=>[N]),_:1})]),a("div",M,[O,T,n(t,null,{default:l(()=>[P]),_:1})]),V,a("div",$,[B,n(t,null,{default:l(()=>[q]),_:1})]),a("div",D,[A,n(t,null,{default:l(()=>[E]),_:1})]),a("div",I,[R,n(t,null,{default:l(()=>[F]),_:1})]),a("div",G,[H,n(t,null,{default:l(()=>[J]),_:1})]),a("div",K,[Q,U,n(t,null,{default:l(()=>[W]),_:1})]),X])}const ds=c(p,[["render",Y]]);export{ds as default};
