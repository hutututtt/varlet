import{_ as c,p as e,f as d,h,M as a,q as l,S as n,P as s,aq as r}from"./vue-router.esm-bundler-0d52b99f.js";const p={components:{}},o={class:"varlet-site-doc"},j=a("h1",null,"选项卡组",-1),i=a("div",{class:"card"},[a("h3",null,"介绍"),a("p",null,[s("使用 "),a("code",null,"Tabs"),s("、"),a("code",null,"Tab"),s(" 实现选项卡组的切换。使用 "),a("code",null,"TabsItems"),s("、"),a("code",null,"TabItem"),s(" 实现和选项卡组的视图联动。")])],-1),m={class:"card"},v=a("h3",null,"基本使用",-1),b=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" active = ref("),a("span",{class:"hljs-number"},"0"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tabs"),s(),a("span",{class:"hljs-attr"},"v-model:active"),s("="),a("span",{class:"hljs-string"},'"active"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("选项1"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("选项2"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("选项3"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tabs"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),g={class:"card"},u=a("h3",null,"具名选项卡",-1),f=a("p",null,[s("Tabs 默认通过 "),a("code",null,"active"),s(" 去匹配 Tab 的 "),a("code",null,"index"),s(" 来决定哪个选项卡被激活。 您也可以通过给 Tab 设置 "),a("code",null,"name"),s(" 来命名选项卡，这时 Tabs 会优先匹配 "),a("code",null,"name"),s("。")],-1),_=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" active = ref("),a("span",{class:"hljs-string"},"'选项1'"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tabs"),s(),a("span",{class:"hljs-attr"},"v-model:active"),s("="),a("span",{class:"hljs-string"},'"active"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"选项1"'),s(">")]),s("选项1"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"选项2"'),s(">")]),s("选项2"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"选项3"'),s(">")]),s("选项3"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tabs"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),y={class:"card"},k=a("h3",null,"修改样式",-1),w=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" active = ref("),a("span",{class:"hljs-number"},"0"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tabs"),s(`
    `),a("span",{class:"hljs-attr"},"elevation"),s(`
    `),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"var(--color-primary)"'),s(`
    `),a("span",{class:"hljs-attr"},"active-color"),s("="),a("span",{class:"hljs-string"},'"#fff"'),s(`
    `),a("span",{class:"hljs-attr"},"inactive-color"),s("="),a("span",{class:"hljs-string"},'"hsla(0, 0%, 100%, .6)"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model:active"),s("="),a("span",{class:"hljs-string"},'"active"'),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("选项1"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("选项2"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("选项3"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tabs"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),x={class:"card"},T=a("h3",null,"禁用选项",-1),z=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" active = ref("),a("span",{class:"hljs-number"},"0"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tabs"),s(`
    `),a("span",{class:"hljs-attr"},"elevation"),s(`
    `),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"var(--color-primary)"'),s(`
    `),a("span",{class:"hljs-attr"},"active-color"),s("="),a("span",{class:"hljs-string"},'"#fff"'),s(`
    `),a("span",{class:"hljs-attr"},"inactive-color"),s("="),a("span",{class:"hljs-string"},'"hsla(0, 0%, 100%, .6)"'),s(`
    `),a("span",{class:"hljs-attr"},"disabled-color"),s("="),a("span",{class:"hljs-string"},'"#aaa"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model:active"),s("="),a("span",{class:"hljs-string"},'"active"'),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("选项1"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("选项2"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(),a("span",{class:"hljs-attr"},"disabled"),s(">")]),s("禁用选项"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tabs"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),S={class:"card"},I=a("h3",null,"开启滚动",-1),P=a("p",null,[s("在选项卡数量在 "),a("code",null,"四个以上"),s(" 时自动开启滚动，点击选项卡自动滚动到视口中央。")],-1),N=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" active = ref("),a("span",{class:"hljs-number"},"0"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tabs"),s(`
    `),a("span",{class:"hljs-attr"},"elevation"),s(`
    `),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"var(--color-primary)"'),s(`
    `),a("span",{class:"hljs-attr"},"active-color"),s("="),a("span",{class:"hljs-string"},'"#fff"'),s(`
    `),a("span",{class:"hljs-attr"},"inactive-color"),s("="),a("span",{class:"hljs-string"},'"hsla(0, 0%, 100%, .6)"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model:active"),s("="),a("span",{class:"hljs-string"},'"active"'),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("选项1"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("选项2"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("选项3"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("选项4"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("选项5"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("选项6"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("选项7"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("选项8"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tabs"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),V={class:"card"},C=a("h3",null,"选项垂直布局",-1),E=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" active = ref("),a("span",{class:"hljs-number"},"0"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tabs"),s(`
    `),a("span",{class:"hljs-attr"},"elevation"),s(`
    `),a("span",{class:"hljs-attr"},"item-direction"),s("="),a("span",{class:"hljs-string"},'"vertical"'),s(`
    `),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"var(--color-primary)"'),s(`
    `),a("span",{class:"hljs-attr"},"active-color"),s("="),a("span",{class:"hljs-string"},'"#fff"'),s(`
    `),a("span",{class:"hljs-attr"},"inactive-color"),s("="),a("span",{class:"hljs-string"},'"hsla(0, 0%, 100%, .6)"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model:active"),s("="),a("span",{class:"hljs-string"},'"active"'),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"tabs-example-icon"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"information"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s("选项1"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"tabs-example-icon"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s("选项2"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"tabs-example-icon"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"error"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s("选项3"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tabs"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".tabs-example-icon"),s(` {
  `),a("span",{class:"hljs-attribute"},"margin-bottom"),s(": "),a("span",{class:"hljs-number"},"5px"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),$={class:"card"},B=a("h3",null,"容器垂直布局",-1),M=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" active = ref("),a("span",{class:"hljs-number"},"0"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tabs"),s(`
    `),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"tabs-example-vertical"'),s(`
    `),a("span",{class:"hljs-attr"},"elevation"),s(`
    `),a("span",{class:"hljs-attr"},"layout-direction"),s("="),a("span",{class:"hljs-string"},'"vertical"'),s(`
    `),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"var(--color-primary)"'),s(`
    `),a("span",{class:"hljs-attr"},"active-color"),s("="),a("span",{class:"hljs-string"},'"#fff"'),s(`
    `),a("span",{class:"hljs-attr"},"inactive-color"),s("="),a("span",{class:"hljs-string"},'"hsla(0, 0%, 100%, .6)"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model:active"),s("="),a("span",{class:"hljs-string"},'"active"'),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("选项1"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("选项2"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("选项3"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tabs"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".tabs-example-vertical"),s(` {
  `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"80px"),s(),a("span",{class:"hljs-meta"},"!important"),s(`;
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"120px"),s(),a("span",{class:"hljs-meta"},"!important"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),q={class:"card"},A=a("h3",null,"视图联动",-1),D=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" active = ref("),a("span",{class:"hljs-number"},"0"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tabs"),s(`
    `),a("span",{class:"hljs-attr"},"elevation"),s(`
    `),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"var(--color-primary)"'),s(`
    `),a("span",{class:"hljs-attr"},"active-color"),s("="),a("span",{class:"hljs-string"},'"#fff"'),s(`
    `),a("span",{class:"hljs-attr"},"inactive-color"),s("="),a("span",{class:"hljs-string"},'"hsla(0, 0%, 100%, .6)"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model:active"),s("="),a("span",{class:"hljs-string"},'"active"'),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("选项1"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("选项2"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("选项3"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tabs"),s(">")]),s(`

  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tabs-items"),s(),a("span",{class:"hljs-attr"},"v-model:active"),s("="),a("span",{class:"hljs-string"},'"active"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab-item"),s(">")]),s(`
      呜啦啦啦火车笛，随着奔腾的马蹄。 小妹妹吹着口琴，夕阳下美了剪影。 我用子弹写日记，介绍完了风景。
      接下来换介绍我自己。 我虽然是个牛仔，在酒吧只点牛奶。 为什么不喝啤酒，因为啤酒伤身体。
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab-item"),s(">")]),s(`
      很多人不长眼睛，嚣张都靠武器。 赤手空拳就缩成蚂蚁。 不用麻烦了，不用麻烦了。 不用麻烦，不用麻烦了，不用麻烦了。
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab-item"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab-item"),s(">")]),s(`
      你们一起上，我在赶时间。 每天决斗观众都累了，英雄也累了。 不用麻烦了，不用麻烦了。
      副歌不长你们有几个，一起上好了。 正义呼唤我，美女需要我。 牛仔很忙的。
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab-item"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tabs-items"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),F={class:"card"},G=a("h3",null,"开启粘性布局",-1),H=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" active = ref("),a("span",{class:"hljs-number"},"0"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"sticky-example"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tabs"),s(`
      `),a("span",{class:"hljs-attr"},"sticky"),s(`
      `),a("span",{class:"hljs-attr"},"elevation"),s(`
      `),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"var(--color-primary)"'),s(`
      `),a("span",{class:"hljs-attr"},"active-color"),s("="),a("span",{class:"hljs-string"},'"#fff"'),s(`
      `),a("span",{class:"hljs-attr"},"inactive-color"),s("="),a("span",{class:"hljs-string"},'"hsla(0, 0%, 100%, .6)"'),s(`
      `),a("span",{class:"hljs-attr"},"v-model:active"),s("="),a("span",{class:"hljs-string"},'"active"'),s(`
    >`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("选项1"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("选项2"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("选项3"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tabs"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".sticky-example"),s(` {
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"200vh"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),J=r('<h2>API</h2><div class="card"><h3>属性</h3><h4>Tabs Props</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model:active</code></td><td>激活的选项卡标识, 优先匹配 name，其次是 index</td><td><em>string</em></td><td><code>default</code></td></tr><tr><td><code>layout-direction</code></td><td>选项卡组的布局方向，可选值为 <code>horizontal</code> <code>vertical</code></td><td><em>string</em></td><td><code>horizontal</code></td></tr><tr><td><code>item-direction</code></td><td>选项卡的布局方向，可选值为 <code>horizontal</code> <code>vertical</code></td><td><em>string</em></td><td><code>horizontal</code></td></tr><tr><td><code>fixed-bottom</code></td><td>是否固定在窗口底部, 可用做底部导航</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>color</code></td><td>选项卡的背景颜色</td><td><em>string</em></td><td><code>#fff</code></td></tr><tr><td><code>active-color</code></td><td>选项卡激活的主要颜色</td><td><em>string</em></td><td><code>#2979ff</code></td></tr><tr><td><code>inactive-color</code></td><td>选项卡未激活的主要颜色</td><td><em>string</em></td><td><code>#646566</code></td></tr><tr><td><code>disabled-color</code></td><td>选项卡禁用时的主要颜色</td><td><em>string</em></td><td><code>#e0e0e0</code></td></tr><tr><td><code>indicator-color</code></td><td>选项卡激活指示器的颜色</td><td><em>string</em></td><td><code>#2979ff</code></td></tr><tr><td><code>indicator-size</code></td><td>选项卡激活指示器的尺寸</td><td>_string \\</td><td>number_</td></tr><tr><td><code>elevation</code></td><td>是否启用阴影</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>sticky</code></td><td>是否启用粘性布局</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>sticky-css-mode</code></td><td>是否启用粘性布局的原生 css sticky 模式</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>sticky-z-index</code></td><td>粘性布局的层级</td><td><em>number</em></td><td><code>10</code></td></tr><tr><td><code>safe-area</code></td><td>是否开启底部安全区适配</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>offset-top</code></td><td>吸顶距离</td><td>_string \\</td><td>number_</td></tr></tbody></table><h4>Tab Props</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>name</code></td><td>选项卡的名字</td><td><em>string | number</em></td><td><code>index</code></td></tr><tr><td><code>disabled</code></td><td>是否禁用选项卡</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table><h4>TabsItems Props</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model:active</code></td><td>激活的选项卡的标识</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>can-swipe</code></td><td>是否允许滑动切换</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>loop</code></td><td>是否允许循环切换</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table><h4>TabItem Props</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>name</code></td><td>视图的名字</td><td><em>string | number</em></td><td><code>index</code></td></tr></tbody></table></div><div class="card"><h3>方法</h3><h4>Tabs Methods</h4><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>resize</code></td><td>产生位置大小变化时可以调用此方法重绘选项卡组</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>resizeSticky</code></td><td>产生位置大小变化时可以调用此方法重绘粘性布局</td><td><code>-</code></td><td><code>Promise&lt;void&gt;</code></td></tr></tbody></table><h4>TabsItems Methods</h4><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>getSwipe</code></td><td>获取 <code>swipe</code> 组件实例</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>事件</h3><h4>Tabs Events</h4><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>click</code></td><td>点击选项卡时触发, 在选项卡 <code>disabled</code> 状态为 <code>true</code> 时不触发</td><td><code>active: string | number</code></td></tr><tr><td><code>change</code></td><td>切换选项卡时触发</td><td><code>active: string | number</code></td></tr></tbody></table><h4>Tab Events</h4><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>click</code></td><td>点击选项卡时触发, 在 <code>disabled</code> 状态为 <code>true</code> 时不触发</td><td><code>active: string | number</code> <br> <code>event: Event</code></td></tr></tbody></table></div><div class="card"><h3>插槽</h3><h4>Tabs Slots</h4><table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>选项卡组的内容</td><td><code>-</code></td></tr></tbody></table><h4>Tab Slots</h4><table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>选项卡内容</td><td><code>-</code></td></tr></tbody></table><h4>TabsItems Slots</h4><table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>视图组的内容</td><td><code>-</code></td></tr></tbody></table><h4>TabItem Slots</h4><table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>视图的内容</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>样式变量</h3><p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><h4>Tabs Variables</h4><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--tabs-item-horizontal-height</code></td><td><code>44px</code></td></tr><tr><td><code>--tabs-item-vertical-height</code></td><td><code>66px</code></td></tr><tr><td><code>--tabs-radius</code></td><td><code>2px</code></td></tr><tr><td><code>--tabs-padding</code></td><td><code>12px</code></td></tr><tr><td><code>--tabs-indicator-size</code></td><td><code>2px</code></td></tr><tr><td><code>--tabs-indicator-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--tabs-background</code></td><td><code>#fff</code></td></tr></tbody></table><h4>Tab Variables</h4><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--tab-padding</code></td><td><code>12px</code></td></tr><tr><td><code>--tab-active-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--tab-inactive-color</code></td><td><code>#646566</code></td></tr><tr><td><code>--tab-disabled-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--tab-font-size</code></td><td><code>var(--font-size-md)</code></td></tr></tbody></table></div>',6);function K(L,O,Q,R,U,W){const t=e("var-site-code-example");return d(),h("div",o,[j,i,a("div",m,[v,l(t,null,{default:n(()=>[b]),_:1})]),a("div",g,[u,f,l(t,null,{default:n(()=>[_]),_:1})]),a("div",y,[k,l(t,null,{default:n(()=>[w]),_:1})]),a("div",x,[T,l(t,null,{default:n(()=>[z]),_:1})]),a("div",S,[I,P,l(t,null,{default:n(()=>[N]),_:1})]),a("div",V,[C,l(t,null,{default:n(()=>[E]),_:1})]),a("div",$,[B,l(t,null,{default:n(()=>[M]),_:1})]),a("div",q,[A,l(t,null,{default:n(()=>[D]),_:1})]),a("div",F,[G,l(t,null,{default:n(()=>[H]),_:1})]),J])}const Y=c(p,[["render",K]]);export{Y as default};
