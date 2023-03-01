import{_ as c,p as e,f as o,h,M as a,q as l,S as n,aq as r,P as s}from"./vue-router.esm-bundler-0d52b99f.js";const d={components:{}},p={class:"varlet-site-doc"},i=a("h1",null,"底部导航栏",-1),j={class:"card"},m=a("h3",null,"基础用法",-1),g=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" active = ref("),a("span",{class:"hljs-number"},"0"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation"),s(),a("span",{class:"hljs-attr"},"v-model:active"),s("="),a("span",{class:"hljs-string"},'"active"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"标签"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"home"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"标签"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"magnify"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"标签"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"heart"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"标签"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"account-circle"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-bottom-navigation"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),v={class:"card"},b=a("h3",null,"名称匹配",-1),u=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" active = ref("),a("span",{class:"hljs-string"},"'home'"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation"),s(),a("span",{class:"hljs-attr"},"v-model:active"),s("="),a("span",{class:"hljs-string"},'"active"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"home"'),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"标签"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"home"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"search"'),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"标签"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"magnify"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"heart"'),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"标签"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"heart"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"user"'),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"标签"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"account-circle"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-bottom-navigation"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),f={class:"card"},_=a("h3",null,"徽标提示",-1),y=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref, reactive } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" active = ref("),a("span",{class:"hljs-number"},"0"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(` badgeProps = reactive({
  `),a("span",{class:"hljs-attr"},"type"),s(": "),a("span",{class:"hljs-string"},"'primary'"),s(`,
  `),a("span",{class:"hljs-attr"},"value"),s(": "),a("span",{class:"hljs-string"},"'66'"),s(`
})
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation"),s(),a("span",{class:"hljs-attr"},"v-model:active"),s("="),a("span",{class:"hljs-string"},'"active"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"标签"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"home"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"标签"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"magnify"'),s(),a("span",{class:"hljs-attr"},"badge"),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"标签"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"heart"'),s(),a("span",{class:"hljs-attr"},":badge"),s("="),a("span",{class:"hljs-string"},'"badgeProps"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"标签"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"account-circle"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-bottom-navigation"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),k={class:"card"},w=a("h3",null,"自定义颜色",-1),x=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" active = ref("),a("span",{class:"hljs-number"},"0"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation"),s(),a("span",{class:"hljs-attr"},"active-color"),s("="),a("span",{class:"hljs-string"},'"#ba68c8"'),s(),a("span",{class:"hljs-attr"},"v-model:active"),s("="),a("span",{class:"hljs-string"},'"active"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"标签"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"home"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"标签"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"magnify"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"标签"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"heart"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"标签"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"account-circle"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-bottom-navigation"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),N={class:"card"},B=a("h3",null,"监听切换事件",-1),C=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" active = ref("),a("span",{class:"hljs-number"},"0"),s(`)

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"handleChange"),s("("),a("span",{class:"hljs-params"},"active"),s(") ")]),s(`{
  Snackbar.info(`),a("span",{class:"hljs-string"},[s("`changed to "),a("span",{class:"hljs-subst"},"${active}"),s("`")]),s(`)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation"),s(),a("span",{class:"hljs-attr"},"v-model:active"),s("="),a("span",{class:"hljs-string"},'"active"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"handleChange"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"标签"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"home"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"标签"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"magnify"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"标签"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"heart"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"标签"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"account-circle"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-bottom-navigation"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),z={class:"card"},P=a("h3",null,"监听点击事件",-1),S=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" active = ref("),a("span",{class:"hljs-number"},"0"),s(`)

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"handleClick"),s("("),a("span",{class:"hljs-params"},"active"),s(") ")]),s(`{
  Snackbar.success(`),a("span",{class:"hljs-string"},[s("`clicked "),a("span",{class:"hljs-subst"},"${active}"),s("`")]),s(`)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation"),s(),a("span",{class:"hljs-attr"},"v-model:active"),s("="),a("span",{class:"hljs-string"},'"active"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"标签"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"home"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"handleClick"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"标签"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"magnify"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"handleClick"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"标签"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"heart"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"handleClick"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"标签"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"account-circle"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"handleClick"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-bottom-navigation"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),I={class:"card"},E=a("h3",null,"悬浮按钮",-1),V=a("p",null,"Item 数量为偶数时，悬浮按钮在中间位置，为奇数时在最右侧。",-1),$=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" active = ref("),a("span",{class:"hljs-number"},"0"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" isEven = ref("),a("span",{class:"hljs-literal"},"true"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation"),s(` 
    `),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"bottom-navigation-example"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model:active"),s("="),a("span",{class:"hljs-string"},'"active"'),s(`
    @`),a("span",{class:"hljs-attr"},"fab-click"),s("="),a("span",{class:"hljs-string"},'"isEven = !isEven"'),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"标签"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"home"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"标签"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"magnify"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"标签"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"heart"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"标签"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"bell"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-bottom-navigation-item"),s(),a("span",{class:"hljs-attr"},"v-if"),s("="),a("span",{class:"hljs-string"},'"!isEven"'),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"标签"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"account-circle"'),s(" />")]),s(`

    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"fab"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"heart"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-bottom-navigation"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".bottom-navigation-example"),s(` {
  `),a("span",{class:"hljs-attribute"},"margin-top"),s(": "),a("span",{class:"hljs-number"},"40px"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),q=r('<h2>API</h2><div class="card"><h3>属性</h3><h4>BottomNavigation Props</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model:active</code></td><td>选中标签的名称或者索引值</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td><code>fixed</code></td><td>是否固定在底部</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>border</code></td><td>是否显示外边框</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>safe-area</code></td><td>是否开启底部安全区适配</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>z-index</code></td><td>元素 z-index</td><td><em>number | string</em></td><td><code>1</code></td></tr><tr><td><code>active-color</code></td><td>选中标签的颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>inactive-color</code></td><td>未选中标签的颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>fab-props</code></td><td>悬浮按钮属性</td><td><em>ButtonProps</em></td><td><code>{type: &quot;primary&quot;}</code></td></tr></tbody></table><h4>BottomNavigationItem Props</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>name</code></td><td>标签名称，作为匹配的标识符</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>图标名称，等同于 Icon 组件的 <a href="/#/zh-CN/icon">name</a></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>label</code></td><td>标签文字内容</td><td><em>string</em></td><td>-</td></tr><tr><td><code>namespace</code></td><td>图标的命名空间, 可扩展自定义图标库，等同于 Icon 组件的 <a href="/#/zh-CN/icon">namespace</a></td><td><em>string</em></td><td><code>var-icon</code></td></tr><tr><td><code>badge</code></td><td>图标右上角徽标</td><td><em>boolean | BadgeProps</em></td><td><code>false</code></td></tr></tbody></table></div><div class="card"><h3>事件</h3><h4>BottomNavigation Events</h4><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td><code>before-change</code></td><td>切换标签前的回调函数，返回 false 可阻止切换，支持返回 Promise</td><td><code>active: number | string</code></td></tr><tr><td><code>change</code></td><td>切换标签时触发</td><td><code>active: number | string</code></td></tr><tr><td><code>fab-click</code></td><td>悬浮按钮点击时触发</td><td><code>-</code></td></tr></tbody></table><h4>BottomNavigationItem Events</h4><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td><code>click</code></td><td>点击时触发</td><td><code>active: number | string</code></td></tr></tbody></table></div><div class="card"><h3>插槽</h3><h4>BottomNavigation Slots</h4><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>底部导航栏内容</td><td><code>-</code></td></tr><tr><td><code>fab</code></td><td>支持在组件中插入一个自定义的 fab 按钮</td><td><code>-</code></td></tr></tbody></table><h4>BottomNavigationItem Slots</h4><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>自定义标签文字内容，会覆盖 <code>label</code> 的内容</td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>自定义图标</td><td><code>active: boolean</code></td></tr></tbody></table></div><div class="card"><h3>样式变量</h3><p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><h4>BottomNavigation Variables</h4><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--bottom-navigation-height</code></td><td><code>50px</code></td></tr><tr><td><code>--bottom-navigation-z-index</code></td><td><code>1</code></td></tr><tr><td><code>--bottom-navigation-background-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--bottom-navigation-border-color</code></td><td><code>#bcc2cb</code></td></tr><tr><td><code>--bottom-navigation-fab-offset</code></td><td><code>4px</code></td></tr></tbody></table><h4>BottomNavigationItem Variables</h4><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--bottom-navigation-item-font-size</code></td><td><code>var(--font-size-sm)</code></td></tr><tr><td><code>--bottom-navigation-item-inactive-color</code></td><td><code>#646566</code></td></tr><tr><td><code>--bottom-navigation-item-active-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--bottom-navigation-item-active-background-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--bottom-navigation-item-line-height</code></td><td><code>1</code></td></tr><tr><td><code>--bottom-navigation-item-icon-size</code></td><td><code>22px</code></td></tr><tr><td><code>--bottom-navigation-item-icon-margin-bottom</code></td><td><code>5px</code></td></tr></tbody></table></div>',5);function A(M,T,D,F,G,H){const t=e("var-site-code-example");return o(),h("div",p,[i,a("div",j,[m,l(t,null,{default:n(()=>[g]),_:1})]),a("div",v,[b,l(t,null,{default:n(()=>[u]),_:1})]),a("div",f,[_,l(t,null,{default:n(()=>[y]),_:1})]),a("div",k,[w,l(t,null,{default:n(()=>[x]),_:1})]),a("div",N,[B,l(t,null,{default:n(()=>[C]),_:1})]),a("div",z,[P,l(t,null,{default:n(()=>[S]),_:1})]),a("div",I,[E,V,l(t,null,{default:n(()=>[$]),_:1})]),q])}const K=c(d,[["render",A]]);export{K as default};
