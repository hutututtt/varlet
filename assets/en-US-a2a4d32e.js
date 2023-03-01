import{_ as e,p as c,f as o,h as p,M as a,q as l,S as n,P as s,aq as d}from"./vue-router.esm-bundler-0d52b99f.js";const h={components:{}},r={class:"varlet-site-doc"},j=a("h1",null,"Menu",-1),i=a("div",{class:"card"},[a("h3",null,"Intro"),a("p",null,"Displays a menu when the element is clicked, and changes the display position of the menu by controlling the placement and offset.")],-1),m={class:"card"},g=a("h3",null,"Basic Usage",-1),u=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("Basic Usage"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"menu"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s("Menu Option"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s("Menu Option"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s("Menu Option"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-menu"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),v={class:"card"},b=a("h3",null,"Placement",-1),f=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" placement = ref("),a("span",{class:"hljs-string"},"'cover-top-start'"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(` placementOptions = [
  `),a("span",{class:"hljs-string"},"'top'"),s(`,
  `),a("span",{class:"hljs-string"},"'top-start'"),s(`,
  `),a("span",{class:"hljs-string"},"'top-end'"),s(`,
  `),a("span",{class:"hljs-string"},"'bottom'"),s(`,
  `),a("span",{class:"hljs-string"},"'bottom-start'"),s(`,
  `),a("span",{class:"hljs-string"},"'bottom-end'"),s(`,
  `),a("span",{class:"hljs-string"},"'right'"),s(`,
  `),a("span",{class:"hljs-string"},"'right-start'"),s(`,
  `),a("span",{class:"hljs-string"},"'right-end'"),s(`,
  `),a("span",{class:"hljs-string"},"'left'"),s(`,
  `),a("span",{class:"hljs-string"},"'left-start'"),s(`,
  `),a("span",{class:"hljs-string"},"'left-end'"),s(`,
  `),a("span",{class:"hljs-string"},"'cover-top'"),s(`,
  `),a("span",{class:"hljs-string"},"'cover-top-start'"),s(`,
  `),a("span",{class:"hljs-string"},"'cover-top-end'"),s(`,
  `),a("span",{class:"hljs-string"},"'cover-bottom'"),s(`,
  `),a("span",{class:"hljs-string"},"'cover-bottom-start'"),s(`,
  `),a("span",{class:"hljs-string"},"'cover-bottom-end'"),s(`,
  `),a("span",{class:"hljs-string"},"'cover-left'"),s(`,
  `),a("span",{class:"hljs-string"},"'cover-right'"),s(`,
]
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-select"),s(),a("span",{class:"hljs-attr"},":hint"),s("="),a("span",{class:"hljs-string"},'"false"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"placement"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(` 
      `),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"(item, index) in placementOptions"'),s(` 
      `),a("span",{class:"hljs-attr"},":key"),s("="),a("span",{class:"hljs-string"},'"index"'),s(`
      `),a("span",{class:"hljs-attr"},":label"),s("="),a("span",{class:"hljs-string"},'"item"'),s(` 
    />`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-select"),s(">")]),s(`
  
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"placement-container"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu"),s(),a("span",{class:"hljs-attr"},":placement"),s("="),a("span",{class:"hljs-string"},'"placement"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"star"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"menu"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s("Menu Option"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s("Menu Option"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s("Menu Option"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-menu"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".placement-container"),s(` {
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"250px"),s(`;
  `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
  `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),_={class:"card"},y=a("h3",null,"Offset",-1),w=a("p",null,[s("The offset of the Menu popup can be set with "),a("code",null,"offset-x"),s(" and "),a("code",null,"offset-y"),s(".")],-1),M=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu"),s(),a("span",{class:"hljs-attr"},"offset-x"),s("="),a("span",{class:"hljs-string"},'"36px"'),s(),a("span",{class:"hljs-attr"},"offset-y"),s("="),a("span",{class:"hljs-string"},'"18px"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("Offset"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"menu"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s("Menu Option"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s("Menu Option"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s("Menu Option"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-menu"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),k={class:"card"},O=a("h3",null,"Same width as trigger element",-1),x=a("p",null,[s("Use "),a("code",null,"same-width"),s(" to make the popup menu and trigger the same width.")],-1),S=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu"),s(),a("span",{class:"hljs-attr"},"same-width"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("Same width as trigger element"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"menu"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s("Menu Option"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s("Menu Option"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s("Menu Option"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-menu"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),T={class:"card"},P=a("h3",null,"Trigger",-1),D=a("p",null,[s("Use "),a("code",null,"trigger"),s(" to change the trigger method of menu display, the optional values are "),a("code",null,"click"),s(" and "),a("code",null,"hover")],-1),N=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu"),s(),a("span",{class:"hljs-attr"},"trigger"),s("="),a("span",{class:"hljs-string"},'"hover"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("Trigger"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"menu"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s("Menu Option"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s("Menu Option"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s("Menu Option"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-menu"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),U={class:"card"},V=a("h3",null,"Events",-1),B=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu"),s(`
    @`),a("span",{class:"hljs-attr"},"open"),s("="),a("span",{class:"hljs-string"},`"Snackbar.info('open')"`),s(`
    @`),a("span",{class:"hljs-attr"},"opened"),s("="),a("span",{class:"hljs-string"},`"Snackbar.success('opened')"`),s(`
    @`),a("span",{class:"hljs-attr"},"close"),s("="),a("span",{class:"hljs-string"},`"Snackbar.warning('close')"`),s(`
    @`),a("span",{class:"hljs-attr"},"closed"),s("="),a("span",{class:"hljs-string"},`"Snackbar.error('closed')"`),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("Events"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"menu"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s("Menu Option"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s("Menu Option"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s("Menu Option"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-menu"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),E={class:"card"},C=a("h3",null,"Disabled",-1),I=a("p",null,[s("In the "),a("code",null,"disabled"),s(" state, the menu will no longer be opened.")],-1),$=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu"),s(),a("span",{class:"hljs-attr"},"disabled"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"disabled"),s(">")]),s("Disabled"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"menu"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s("Menu Option"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s("Menu Option"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s("Menu Option"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-menu"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),z={class:"card"},A=a("h3",null,"Two-way binding",-1),q=a("p",null,[s("Two-way binding control menu show and hide via "),a("code",null,"v-model:show"),s(".")],-1),W=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" show = ref("),a("span",{class:"hljs-literal"},"false"),s(`)

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"closeMenu"),s("("),a("span",{class:"hljs-params"}),s(") ")]),s(`{ 
  show.value = `),a("span",{class:"hljs-literal"},"false"),s(` 
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu"),s(),a("span",{class:"hljs-attr"},"v-model:show"),s("="),a("span",{class:"hljs-string"},'"show"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("Two-way binding"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`

    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"menu"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"closeMenu"'),s(">")]),s("Menu Option"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"closeMenu"'),s(">")]),s("Menu Option"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"closeMenu"'),s(">")]),s("Menu Option"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-menu"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),H=d('<div class="card"><h3>Notice</h3><p>Menu is an <code>inline-block</code> element that displays the menu when clicked through the default slot. If you want the Menu to be on its own line, it is recommended to wrap a <code>block</code> element.</p></div><h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model:show</code></td><td>whether to show the menu</td><td><em>string</em></td><td><code>default</code></td></tr><tr><td><code>placement</code></td><td>menu popup placement</td><td><em>Placement</em></td><td><code>cover-top-start</code></td></tr><tr><td><code>offset-x</code></td><td>The x-axis offset, relative to the menu-aligned position</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td><code>offset-y</code></td><td>The y-axis offset, relative to the menu-aligned position</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td><code>teleport</code></td><td>The location of the menu mount</td><td><em>TeleportProps[&#39;to&#39;]</em></td><td><code>body</code></td></tr><tr><td><code>disabled</code></td><td>whether to disable the menu</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>trigger</code></td><td>Menu trigger method, optional value is <code>click</code> <code>hover</code>, <code>click</code> is triggered when clicked, <code>hover</code> is triggered when hovered</td><td><em>string</em></td><td><code>click</code></td></tr><tr><td><code>same-width</code></td><td>Whether to same width as trigger element</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>default-style</code></td><td>Whether to enable default styles</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table></div><div class="card"><h3>Placement</h3><table><thead><tr><th>Prop</th><th>Description</th></tr></thead><tbody><tr><td><code>top</code></td><td>top center position</td></tr><tr><td><code>top-start</code></td><td>top left position</td></tr><tr><td><code>top-end</code></td><td>top right position</td></tr><tr><td><code>bottom</code></td><td>bottom center position</td></tr><tr><td><code>bottom-start</code></td><td>bottom left position</td></tr><tr><td><code>bottom-end</code></td><td>bottom right position</td></tr><tr><td><code>right</code></td><td>right center position</td></tr><tr><td><code>right-start</code></td><td>top right position</td></tr><tr><td><code>right-end</code></td><td>bottom right position</td></tr><tr><td><code>left</code></td><td>left center position</td></tr><tr><td><code>left-start</code></td><td>top left position</td></tr><tr><td><code>left-end</code></td><td>bottom left position</td></tr><tr><td><code>cover-top</code></td><td>top center position, overlay trigger</td></tr><tr><td><code>cover-top-start</code></td><td>top left position, overlay trigger</td></tr><tr><td><code>cover-top-end</code></td><td>top right position, overlay trigger</td></tr><tr><td><code>cover-bottom</code></td><td>bottom center position, overlay trigger</td></tr><tr><td><code>cover-bottom-start</code></td><td>bottom left position, overlay trigger</td></tr><tr><td><code>cover-bottom-end</code></td><td>bottom right position, overlay trigger</td></tr><tr><td><code>cover-left</code></td><td>left center position, overlay trigger</td></tr><tr><td><code>cover-right</code></td><td>right center position, overlay trigger</td></tr></tbody></table></div><div class="card"><h3>Methods</h3><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>open</code></td><td>Open Menu</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>Close Menu</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>resize</code></td><td>This method can be called to redraw when the default slot element of Menu changes its position and size</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>open</code></td><td>Triggered when the menu is opened</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>Triggered when the open menu animation ends</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>Triggered when the menu is closed</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>Triggered when the closing menu animation ends</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Menu trigger element</td><td><code>-</code></td></tr><tr><td><code>menu</code></td><td>Menu content</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--menu-background-color</code></td><td><code>#fff</code></td></tr></tbody></table></div>',8);function R(F,G,J,K,L,Q){const t=c("var-site-code-example");return o(),p("div",r,[j,i,a("div",m,[g,l(t,null,{default:n(()=>[u]),_:1})]),a("div",v,[b,l(t,null,{default:n(()=>[f]),_:1})]),a("div",_,[y,w,l(t,null,{default:n(()=>[M]),_:1})]),a("div",k,[O,x,l(t,null,{default:n(()=>[S]),_:1})]),a("div",T,[P,D,l(t,null,{default:n(()=>[N]),_:1})]),a("div",U,[V,l(t,null,{default:n(()=>[B]),_:1})]),a("div",E,[C,I,l(t,null,{default:n(()=>[$]),_:1})]),a("div",z,[A,q,l(t,null,{default:n(()=>[W]),_:1})]),H])}const Y=e(h,[["render",R]]);export{Y as default};
