import{_ as c,p as e,f as p,h as r,M as a,q as t,S as n,aq as h,P as s}from"./vue-router-0bbd6486.js";const d={components:{}},o={class:"varlet-site-doc"},j=a("h1",null,"悬浮动作按钮",-1),i=a("div",{class:"card"},[a("h3",null,"介绍"),a("p",null,"悬浮动作按钮组件，按下可显示一组动作按钮。")],-1),g={class:"card"},m=a("h3",null,"主题色按钮",-1),u=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" type = ref("),a("span",{class:"hljs-string"},"'primary'"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-select"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"type"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"默认"'),s(),a("span",{class:"hljs-attr"},"value"),s("="),a("span",{class:"hljs-string"},'"default"'),s("/>")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"主要"'),s(),a("span",{class:"hljs-attr"},"value"),s("="),a("span",{class:"hljs-string"},'"primary"'),s("/>")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"信息"'),s(),a("span",{class:"hljs-attr"},"value"),s("="),a("span",{class:"hljs-string"},'"info"'),s("/>")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"成功"'),s(),a("span",{class:"hljs-attr"},"value"),s("="),a("span",{class:"hljs-string"},'"success"'),s("/>")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"警告"'),s(),a("span",{class:"hljs-attr"},"value"),s("="),a("span",{class:"hljs-string"},'"warning"'),s("/>")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"危险"'),s(),a("span",{class:"hljs-attr"},"value"),s("="),a("span",{class:"hljs-string"},'"danger"'),s("/>")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-select"),s(">")]),s(`

  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-fab"),s(),a("span",{class:"hljs-attr"},":type"),s("="),a("span",{class:"hljs-string"},'"type"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),v={class:"card"},b=a("h3",null,"触发器位置",-1),f=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" position = ref("),a("span",{class:"hljs-string"},"'right-bottom'"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-radio-group"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"position"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-radio"),s(),a("span",{class:"hljs-attr"},"checked-value"),s("="),a("span",{class:"hljs-string"},'"left-top"'),s(">")]),s("left-top"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-radio"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-radio"),s(),a("span",{class:"hljs-attr"},"checked-value"),s("="),a("span",{class:"hljs-string"},'"right-top"'),s(">")]),s("right-top"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-radio"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-radio"),s(),a("span",{class:"hljs-attr"},"checked-value"),s("="),a("span",{class:"hljs-string"},'"left-bottom"'),s(">")]),s("left-bottom"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-radio"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-radio"),s(),a("span",{class:"hljs-attr"},"checked-value"),s("="),a("span",{class:"hljs-string"},'"right-bottom"'),s(">")]),s("right-bottom"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-radio"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-radio-group"),s(">")]),s(`

  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-fab"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},":position"),s("="),a("span",{class:"hljs-string"},'"position"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),y={class:"card"},_=a("h3",null,"触发方式",-1),k=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" trigger = ref("),a("span",{class:"hljs-string"},"'click'"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-radio-group"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"trigger"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-radio"),s(),a("span",{class:"hljs-attr"},"checked-value"),s("="),a("span",{class:"hljs-string"},'"click"'),s(">")]),s("click"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-radio"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-radio"),s(),a("span",{class:"hljs-attr"},"checked-value"),s("="),a("span",{class:"hljs-string"},'"hover"'),s(">")]),s("hover"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-radio"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-radio-group"),s(">")]),s(`

  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-fab"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},":trigger"),s("="),a("span",{class:"hljs-string"},'"trigger"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"action"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"info"'),s(),a("span",{class:"hljs-attr"},"round"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"account-circle"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"action"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"success"'),s(),a("span",{class:"hljs-attr"},"round"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"checkbox-marked-circle"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"action"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(),a("span",{class:"hljs-attr"},"round"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"bell"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"action"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"danger"'),s(),a("span",{class:"hljs-attr"},"round"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"delete"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-fab"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),w={class:"card"},x=a("h3",null,"动作菜单弹出方向",-1),z=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" direction = ref("),a("span",{class:"hljs-string"},"'top'"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-radio-group"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"direction"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-radio"),s(),a("span",{class:"hljs-attr"},"checked-value"),s("="),a("span",{class:"hljs-string"},'"top"'),s(">")]),s("top"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-radio"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-radio"),s(),a("span",{class:"hljs-attr"},"checked-value"),s("="),a("span",{class:"hljs-string"},'"right"'),s(">")]),s("right"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-radio"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-radio"),s(),a("span",{class:"hljs-attr"},"checked-value"),s("="),a("span",{class:"hljs-string"},'"bottom"'),s(">")]),s("bottom"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-radio"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-radio"),s(),a("span",{class:"hljs-attr"},"checked-value"),s("="),a("span",{class:"hljs-string"},'"left"'),s(">")]),s("left"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-radio"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-radio-group"),s(">")]),s(`

  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-fab"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},":direction"),s("="),a("span",{class:"hljs-string"},'"direction"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"action"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"info"'),s(),a("span",{class:"hljs-attr"},"round"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"account-circle"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"action"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"success"'),s(),a("span",{class:"hljs-attr"},"round"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"checkbox-marked-circle"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"action"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(),a("span",{class:"hljs-attr"},"round"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"bell"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"action"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"danger"'),s(),a("span",{class:"hljs-attr"},"round"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"delete"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-fab"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".action"),s(` {
  `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
  `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"40px"),s(),a("span",{class:"hljs-meta"},"!important"),s(`;
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"40px"),s(),a("span",{class:"hljs-meta"},"!important"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),N={class:"card"},C=a("h3",null,"禁用",-1),P=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" disabled = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-switch"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"disabled"'),s(" />")]),s(`

  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-fab"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},":disabled"),s("="),a("span",{class:"hljs-string"},'"disabled"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),V={class:"card"},$=a("h3",null,"触发器显示/隐藏",-1),B=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" show = ref("),a("span",{class:"hljs-literal"},"true"),s(`)

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"toggle"),s("("),a("span",{class:"hljs-params"}),s(") ")]),s(`{
  show.value = !show.value
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(" @"),a("span",{class:"hljs-attr"},"click.stop"),s("="),a("span",{class:"hljs-string"},'"toggle"'),s(">")]),s("切换"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`

  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-fab"),s(),a("span",{class:"hljs-attr"},":show"),s("="),a("span",{class:"hljs-string"},'"show"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),S={class:"card"},q=a("h3",null,"动作菜单显示/隐藏",-1),E=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" active = ref("),a("span",{class:"hljs-literal"},"false"),s(`)

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"toggle"),s("("),a("span",{class:"hljs-params"}),s(") ")]),s(`{
  active.value = !active.value
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(" @"),a("span",{class:"hljs-attr"},"click.stop"),s("="),a("span",{class:"hljs-string"},'"toggle"'),s(">")]),s("切换"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`

  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-fab"),s(),a("span",{class:"hljs-attr"},"v-model:active"),s("="),a("span",{class:"hljs-string"},'"active"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"action"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"info"'),s(),a("span",{class:"hljs-attr"},"round"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"account-circle"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"action"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"success"'),s(),a("span",{class:"hljs-attr"},"round"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"checkbox-marked-circle"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"action"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(),a("span",{class:"hljs-attr"},"round"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"bell"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"action"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"danger"'),s(),a("span",{class:"hljs-attr"},"round"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"delete"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-fab"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".action"),s(` {
  `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
  `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"40px"),s(),a("span",{class:"hljs-meta"},"!important"),s(`;
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"40px"),s(),a("span",{class:"hljs-meta"},"!important"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),T={class:"card"},A=a("h3",null,"自定义触发器",-1),I=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-fab"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"action"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"info"'),s(),a("span",{class:"hljs-attr"},"round"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"account-circle"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"24"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"action"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"success"'),s(),a("span",{class:"hljs-attr"},"round"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"checkbox-marked-circle"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"24"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"action"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(),a("span",{class:"hljs-attr"},"round"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"bell"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"24"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"action"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"danger"'),s(),a("span",{class:"hljs-attr"},"round"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"delete"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"24"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`

    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"trigger"),s("="),a("span",{class:"hljs-string"},'"{ active }"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"trigger"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"round"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},":name"),s("="),a("span",{class:"hljs-string"},`"active ? 'heart' : 'heart-half-full'"`),s(),a("span",{class:"hljs-attr"},"animation-class"),s("="),a("span",{class:"hljs-string"},'"fade"'),s(),a("span",{class:"hljs-attr"},":transition"),s("="),a("span",{class:"hljs-string"},'"300"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"24"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-fab"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".trigger"),s(` {
  `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"64px"),s(),a("span",{class:"hljs-meta"},"!important"),s(`;
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"64px"),s(),a("span",{class:"hljs-meta"},"!important"),s(`;
  `),a("span",{class:"hljs-attribute"},"border-radius"),s(": "),a("span",{class:"hljs-number"},"8px"),s(),a("span",{class:"hljs-meta"},"!important"),s(`;
}

`),a("span",{class:"hljs-selector-class"},".action"),s(` {
  `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
  `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"44px"),s(),a("span",{class:"hljs-meta"},"!important"),s(`;
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"44px"),s(),a("span",{class:"hljs-meta"},"!important"),s(`;
  `),a("span",{class:"hljs-attribute"},"border-radius"),s(": "),a("span",{class:"hljs-number"},"6px"),s(),a("span",{class:"hljs-meta"},"!important"),s(`;
}

`),a("span",{class:"hljs-selector-class"},".fade"),s(` {
  `),a("span",{class:"hljs-attribute"},"transition-property"),s(`: opacity, transform;
  `),a("span",{class:"hljs-attribute"},"opacity"),s(": "),a("span",{class:"hljs-number"},"0"),s(`;
  `),a("span",{class:"hljs-attribute"},"transform"),s(": "),a("span",{class:"hljs-built_in"},"rotate"),s("("),a("span",{class:"hljs-number"},"90deg"),s(`)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),M=h('<h2>API</h2><div class="card"><h3>属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model:active</code></td><td>是否激活动作菜单</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>show</code></td><td>是否显示触发器</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>type</code></td><td>类型，可选值为 <code>default</code> <code>primary</code> <code>info</code> <code>success</code> <code>warning</code> <code>danger</code></td><td><em>string</em></td><td><code>primary</code></td></tr><tr><td><code>position</code></td><td>触发器位置，可选值为 <code>left-top</code> <code>right-top</code> <code>left-bottom</code> <code>right-bottom</code></td><td><em>string</em></td><td><code>right-bottom</code></td></tr><tr><td><code>direction</code></td><td>动作菜单弹出方向，可选值为 <code>top</code> <code>bottom</code> <code>left</code> <code>right</code></td><td><em>string</em></td><td><code>top</code></td></tr><tr><td><code>trigger</code></td><td>触发方式 <code>click</code> <code>hover</code></td><td><em>string</em></td><td><code>click</code></td></tr><tr><td><code>disabled</code></td><td>是否禁用</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>color</code></td><td>触发器颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>inactive-icon</code></td><td>未激活时触发器图标</td><td><em>string</em></td><td><code>plus</code></td></tr><tr><td><code>active-icon</code></td><td>激活时触发器图标</td><td><em>string</em></td><td><code>window-close</code></td></tr><tr><td><code>inactive-icon-size</code></td><td>未激活时触发器图标尺寸</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>active-icon-size</code></td><td>激活时触发器图标尺寸</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>fixed</code></td><td>是否使用固定定位，设置为 <code>false</code> 可开启绝对定位</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>z-index</code></td><td>同 css z-index，用于自定义触发器层级</td><td><em>string | number</em></td><td><code>90</code></td></tr><tr><td><code>top</code></td><td>同 css top，用于自定义触发器位置</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>bottom</code></td><td>同 css bottom，用于自定义触发器位置</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>left</code></td><td>同 css left，用于自定义触发器位置</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>right</code></td><td>同 css right，用于自定义触发器位置</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>safe-area</code></td><td>是否开启底部安全区适配</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>teleport</code></td><td>组件挂载的元素</td><td><em>TeleportProps[&#39;to&#39;]</em></td><td><code>-</code></td></tr><tr><td><code>elevation</code></td><td>海拔高度，可选值为 <code>true</code>、<code>false</code> 和 <code>0-24</code> 的等级</td><td><em>string | number</em> | <em>boolean</em></td><td><code>true</code></td></tr></tbody></table></div><div class="card"><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>click</code></td><td>点击触发器时触发，在 <code>disabled</code> 状态为 <code>true</code> 时不触发</td><td><code>active: boolean, event: Event</code></td></tr><tr><td><code>open</code></td><td>在激活并打开动作菜单时触发</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>在激活并打开动作菜单的动画结束时触发</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>在失活并关闭动作菜单时触发</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>在失活并关闭动作菜单的动画结束时触发</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>插槽</h3><table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>动作菜单</td><td><code>-</code></td></tr><tr><td><code>trigger</code></td><td>触发器</td><td><code>{ active: boolean }</code></td></tr></tbody></table></div><div class="card"><h3>样式变量</h3><p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--fab-top</code></td><td><code>70px</code></td></tr><tr><td><code>--fab-bottom</code></td><td><code>16px</code></td></tr><tr><td><code>--fab-left</code></td><td><code>16px</code></td></tr><tr><td><code>--fab-right</code></td><td><code>16px</code></td></tr><tr><td><code>--fab-trigger-size</code></td><td><code>56px</code></td></tr><tr><td><code>--fab-trigger-inactive-icon-size</code></td><td><code>26px</code></td></tr><tr><td><code>--fab-trigger-active-icon-size</code></td><td><code>22px</code></td></tr><tr><td><code>--fab-actions-padding</code></td><td><code>10px 0</code></td></tr><tr><td><code>--fab-action-margin</code></td><td><code>6px</code></td></tr><tr><td><code>--fab-transition-standard-easing</code></td><td><code>cubic-bezier(0.4, 0, 0.2, 1)</code></td></tr></tbody></table></div>',5);function D(F,G,H,J,K,L){const l=e("var-site-code-example");return p(),r("div",o,[j,i,a("div",g,[m,t(l,null,{default:n(()=>[u]),_:1})]),a("div",v,[b,t(l,null,{default:n(()=>[f]),_:1})]),a("div",y,[_,t(l,null,{default:n(()=>[k]),_:1})]),a("div",w,[x,t(l,null,{default:n(()=>[z]),_:1})]),a("div",N,[C,t(l,null,{default:n(()=>[P]),_:1})]),a("div",V,[$,t(l,null,{default:n(()=>[B]),_:1})]),a("div",S,[q,t(l,null,{default:n(()=>[E]),_:1})]),a("div",T,[A,t(l,null,{default:n(()=>[I]),_:1})]),M])}const Q=c(d,[["render",D]]);export{Q as default};
