import{_ as c,p as e,f as d,h as o,M as t,q as l,S as n,P as s,aq as p}from"./vue-router.esm-bundler-0d52b99f.js";const r={components:{}},h={class:"varlet-site-doc"},j=t("h1",null,"提示",-1),i=t("div",{class:"card"},[t("h3",null,"介绍"),t("p",null,"当元素点击或悬停时显示一个提示，通过控制弹出位置和偏移量改变提示的显示位置。")],-1),g={class:"card"},m=t("h3",null,"基本使用",-1),v=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-tooltip"),s(),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},'"Tooltip"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(">")]),s("基本使用"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-tooltip"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),u={class:"card"},_=t("h3",null,"内容插槽",-1),b=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-tooltip"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(">")]),s("内容插槽"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(" #"),t("span",{class:"hljs-attr"},"content"),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-icon"),s(),t("span",{class:"hljs-attr"},"name"),s("="),t("span",{class:"hljs-string"},'"star"'),s(" />")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-tooltip"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),y={class:"card"},f=t("h3",null,"弹出位置",-1),T=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" placement = ref("),t("span",{class:"hljs-string"},"'top'"),s(`)
`),t("span",{class:"hljs-keyword"},"const"),s(` placementOptions = [
  `),t("span",{class:"hljs-string"},"'top'"),s(`,
  `),t("span",{class:"hljs-string"},"'top-start'"),s(`,
  `),t("span",{class:"hljs-string"},"'top-end'"),s(`,
  `),t("span",{class:"hljs-string"},"'bottom'"),s(`,
  `),t("span",{class:"hljs-string"},"'bottom-start'"),s(`,
  `),t("span",{class:"hljs-string"},"'bottom-end'"),s(`,
  `),t("span",{class:"hljs-string"},"'right'"),s(`,
  `),t("span",{class:"hljs-string"},"'right-start'"),s(`,
  `),t("span",{class:"hljs-string"},"'right-end'"),s(`,
  `),t("span",{class:"hljs-string"},"'left'"),s(`,
  `),t("span",{class:"hljs-string"},"'left-start'"),s(`,
  `),t("span",{class:"hljs-string"},"'left-end'"),s(`,
]
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-select"),s(),t("span",{class:"hljs-attr"},":hint"),s("="),t("span",{class:"hljs-string"},'"false"'),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"placement"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-option"),s(` 
      `),t("span",{class:"hljs-attr"},"v-for"),s("="),t("span",{class:"hljs-string"},'"(item, index) in placementOptions"'),s(` 
      `),t("span",{class:"hljs-attr"},":key"),s("="),t("span",{class:"hljs-string"},'"index"'),s(`
      `),t("span",{class:"hljs-attr"},":label"),s("="),t("span",{class:"hljs-string"},'"item"'),s(` 
    />`)]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-select"),s(">")]),s(`
  
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"div"),s(),t("span",{class:"hljs-attr"},"class"),s("="),t("span",{class:"hljs-string"},'"placement-container"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-tooltip"),s(),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},'"Tooltip"'),s(),t("span",{class:"hljs-attr"},":placement"),s("="),t("span",{class:"hljs-string"},'"placement"'),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(">")]),s(`
        `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-icon"),s(),t("span",{class:"hljs-attr"},"name"),s("="),t("span",{class:"hljs-string"},'"star"'),s(" />")]),s(`
      `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-tooltip"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"style"),s(">")]),t("span",{class:"css"},[s(`
`),t("span",{class:"hljs-selector-class"},".placement-container"),s(` {
  `),t("span",{class:"hljs-attribute"},"height"),s(": "),t("span",{class:"hljs-number"},"250px"),s(`;
  `),t("span",{class:"hljs-attribute"},"display"),s(`: flex;
  `),t("span",{class:"hljs-attribute"},"justify-content"),s(`: center;
  `),t("span",{class:"hljs-attribute"},"align-items"),s(`: center;
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),x={class:"card"},k=t("h3",null,"主题色",-1),w=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-space"),s(),t("span",{class:"hljs-attr"},":size"),s("="),t("span",{class:"hljs-string"},'"[54, 10]"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-tooltip"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"default"'),s(),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},'"Tooltip"'),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"default"'),s(">")]),s("默认"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-tooltip"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-tooltip"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},'"Tooltip"'),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(">")]),s("主要"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-tooltip"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-tooltip"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"info"'),s(),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},'"Tooltip"'),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"info"'),s(">")]),s("信息"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-tooltip"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-tooltip"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"success"'),s(),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},'"Tooltip"'),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"success"'),s(">")]),s("成功"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-tooltip"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-tooltip"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"warning"'),s(),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},'"Tooltip"'),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"warning"'),s(">")]),s("警告"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-tooltip"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-tooltip"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"danger"'),s(),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},'"Tooltip"'),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"danger"'),s(">")]),s("危险"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-tooltip"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),S={class:"card"},N=t("h3",null,"自定义颜色",-1),P=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-tooltip"),s(),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},'"Tooltip"'),s(),t("span",{class:"hljs-attr"},"color"),s("="),t("span",{class:"hljs-string"},'"#d81b60"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(">")]),s("自定义颜色"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-tooltip"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),z={class:"card"},C=t("h3",null,"偏移量",-1),V=t("p",null,[s("通过 "),t("code",null,"offset-x"),s(" 和 "),t("code",null,"offset-y"),s(" 设置 "),t("code",null,"Tooltip"),s(" 弹出的偏移量。")],-1),$=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-tooltip"),s(),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},'"Tooltip"'),s(),t("span",{class:"hljs-attr"},":offset-x"),s("="),t("span",{class:"hljs-string"},'"64"'),s(),t("span",{class:"hljs-attr"},":offset-y"),s("="),t("span",{class:"hljs-string"},'"-10"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(">")]),s("偏移量"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-tooltip"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),B={class:"card"},q=t("h3",null,"触发方式",-1),O=t("p",null,[s("通过 "),t("code",null,"trigger"),s(" 改变 "),t("code",null,"Tooltip"),s(" 显示的触发方式，可选值为 "),t("code",null,"click"),s(" 和 "),t("code",null,"hover"),s("。")],-1),A=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-tooltip"),s(),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},'"Tooltip"'),s(),t("span",{class:"hljs-attr"},"trigger"),s("="),t("span",{class:"hljs-string"},'"hover"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(">")]),s("触发方式"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-tooltip"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),E={class:"card"},I=t("h3",null,"注册事件",-1),M=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-tooltip"),s(`
    `),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},'"Tooltip"'),s(`
    @`),t("span",{class:"hljs-attr"},"open"),s("="),t("span",{class:"hljs-string"},`"Snackbar.info('open')"`),s(`
    @`),t("span",{class:"hljs-attr"},"opened"),s("="),t("span",{class:"hljs-string"},`"Snackbar.success('opened')"`),s(`
    @`),t("span",{class:"hljs-attr"},"close"),s("="),t("span",{class:"hljs-string"},`"Snackbar.warning('close')"`),s(`
    @`),t("span",{class:"hljs-attr"},"closed"),s("="),t("span",{class:"hljs-string"},`"Snackbar.error('closed')"`),s(`
  >`)]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(">")]),s("注册事件"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-tooltip"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),D={class:"card"},F=t("h3",null,"禁用提示",-1),G=t("p",null,[s("在 "),t("code",null,"disabled"),s(" 状态下，"),t("code",null,"Tooltip"),s(" 将不再被打开。")],-1),H=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-tooltip"),s(),t("span",{class:"hljs-attr"},"content"),s("="),t("span",{class:"hljs-string"},'"Tooltip"'),s(),t("span",{class:"hljs-attr"},"disabled"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"disabled"),s(">")]),s("禁用提示"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-tooltip"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),J=p('<h2>API</h2><div class="card"><h3>属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model:show</code></td><td>是否显示</td><td><em>string</em></td><td><code>false</code></td></tr><tr><td><code>content</code></td><td>显示的内容</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>color</code></td><td>背景颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>type</code></td><td>类型，可选值为 <code>default</code> <code>primary</code> <code>info</code> <code>success</code> <code>warning</code> <code>danger</code></td><td><em>string</em></td><td><code>default</code></td></tr><tr><td><code>placement</code></td><td>弹出位置</td><td><em>Placement</em></td><td><code>top</code></td></tr><tr><td><code>offset-x</code></td><td>x 轴偏移量， 相对于 <code>Tooltip</code> 对齐后的位置</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td><code>offset-y</code></td><td>y 轴偏移量， 相对于 <code>Tooltip</code> 对齐后的位置</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td><code>teleport</code></td><td>挂载的位置</td><td><em>TeleportProps[&#39;to&#39;]</em></td><td><code>body</code></td></tr><tr><td><code>same-width</code></td><td>是否与触发元素同宽</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>是否禁用 Tooltip</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>trigger</code></td><td>触发方式，可选值为 <code>click</code> <code>hover</code>, <code>click</code> 为点击时触发, <code>hover</code> 为悬停时触发</td><td><em>string</em></td><td><code>hover</code></td></tr></tbody></table></div><div class="card"><h3>Placement</h3><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td><code>top</code></td><td>顶部中心位置</td></tr><tr><td><code>top-start</code></td><td>顶部左侧位置</td></tr><tr><td><code>top-end</code></td><td>顶部右侧位置</td></tr><tr><td><code>bottom</code></td><td>底部中心位置</td></tr><tr><td><code>bottom-start</code></td><td>底部左侧位置</td></tr><tr><td><code>bottom-end</code></td><td>底部右侧位置</td></tr><tr><td><code>right</code></td><td>右侧中心位置</td></tr><tr><td><code>right-start</code></td><td>右侧上方位置</td></tr><tr><td><code>right-end</code></td><td>右侧下方位置</td></tr><tr><td><code>left</code></td><td>左侧中心位置</td></tr><tr><td><code>left-start</code></td><td>左侧上方位置</td></tr><tr><td><code>left-end</code></td><td>左侧下方位置</td></tr></tbody></table></div><div class="card"><h3>方法</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>open</code></td><td>打开 <code>Tooltip</code></td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>关闭 <code>Tooltip</code></td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>resize</code></td><td><code>Tooltip</code> 默认插槽元素产生位置大小变化时可以调用此方法进行重绘</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>open</code></td><td>打开 <code>Tooltip</code> 时触发</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>打开 <code>Tooltip</code> 动画结束时触发</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>关闭 <code>Tooltip</code> 时触发</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>关闭 <code>Tooltip</code> 动画结束时触发</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>插槽</h3><table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td><code>Tooltip</code> 关联的触发元素</td><td><code>-</code></td></tr><tr><td><code>content</code></td><td><code>Tooltip</code> 内容</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>样式变量</h3><p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--tooltip-opacity</code></td><td><code>0.9</code></td></tr><tr><td><code>--tooltip-border-radius</code></td><td><code>4px</code></td></tr><tr><td><code>--tooltip-font-size</code></td><td><code>14px</code></td></tr><tr><td><code>--tooltip-padding</code></td><td><code>8px 16px</code></td></tr><tr><td><code>--tooltip-default-color</code></td><td><code>#616161</code></td></tr><tr><td><code>--tooltip-offset</code></td><td><code>10px</code></td></tr><tr><td><code>--tooltip-primary-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--tooltip-info-color</code></td><td><code>var(--color-info)</code></td></tr><tr><td><code>--tooltip-success-color</code></td><td><code>var(--color-success)</code></td></tr><tr><td><code>--tooltip-warning-color</code></td><td><code>var(--color-warning)</code></td></tr><tr><td><code>--tooltip-danger-color</code></td><td><code>var(--color-danger)</code></td></tr></tbody></table></div>',7);function K(L,Q,R,U,W,X){const a=e("var-site-code-example");return d(),o("div",h,[j,i,t("div",g,[m,l(a,null,{default:n(()=>[v]),_:1})]),t("div",u,[_,l(a,null,{default:n(()=>[b]),_:1})]),t("div",y,[f,l(a,null,{default:n(()=>[T]),_:1})]),t("div",x,[k,l(a,null,{default:n(()=>[w]),_:1})]),t("div",S,[N,l(a,null,{default:n(()=>[P]),_:1})]),t("div",z,[C,V,l(a,null,{default:n(()=>[$]),_:1})]),t("div",B,[q,O,l(a,null,{default:n(()=>[A]),_:1})]),t("div",E,[I,l(a,null,{default:n(()=>[M]),_:1})]),t("div",D,[F,G,l(a,null,{default:n(()=>[H]),_:1})]),J])}const Z=c(r,[["render",K]]);export{Z as default};
