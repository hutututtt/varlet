import{_ as e,p as c,f as r,h as p,M as a,q as l,S as n,P as s,aq as h}from"./vue-router.esm-bundler-0d52b99f.js";const d={components:{}},o={class:"varlet-site-doc"},j=a("h1",null,"AppBar",-1),i={class:"card"},g=a("h3",null,"Basic Usage",-1),m=a("p",null,[s("Set the title of the app bar through the "),a("code",null,"title"),s(" prop.")],-1),u=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
   `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-app-bar"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"title"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),v={class:"card"},b=a("h3",null,"Add Slots At Title",-1),_=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
   `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-app-bar"),s(">")]),s("Add Slots At Title"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-app-bar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),f={class:"card"},x=a("h3",null,"Add Left And Right Slot",-1),y=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-app-bar"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Title"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"left"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(`
        `),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"transparent"'),s(`
        `),a("span",{class:"hljs-attr"},"text-color"),s("="),a("span",{class:"hljs-string"},'"#fff"'),s(`
        `),a("span",{class:"hljs-attr"},"round"),s(`
        `),a("span",{class:"hljs-attr"},"text"),s(`
      >`)]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"chevron-left"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"24"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"right"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-menu"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(`
          `),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"transparent"'),s(`
          `),a("span",{class:"hljs-attr"},"text-color"),s("="),a("span",{class:"hljs-string"},'"#fff"'),s(`
          `),a("span",{class:"hljs-attr"},"round"),s(`
          `),a("span",{class:"hljs-attr"},"text"),s(`
        >`)]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"menu"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"24"'),s(" />")]),s(`
        `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`

        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"menu"),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(),a("span",{class:"hljs-attr"},"ripple"),s(">")]),s("OPTION"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(),a("span",{class:"hljs-attr"},"ripple"),s(">")]),s("OPTION"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(),a("span",{class:"hljs-attr"},"ripple"),s(">")]),s("OPTION"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-menu"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-app-bar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),T={class:"card"},S=a("h3",null,"Use Border Radius",-1),O=a("p",null,[s("Turn on rounded border with the "),a("code",null,"round"),s(" prop.")],-1),P=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
   `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-app-bar"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"Use Border Radius"'),s(),a("span",{class:"hljs-attr"},"title-position"),s("="),a("span",{class:"hljs-string"},'"center"'),s(),a("span",{class:"hljs-attr"},"round"),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),B={class:"card"},N=a("h3",null,"Custom Background Color",-1),k=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
   `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-app-bar"),s(`
     `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"title"'),s(`
     `),a("span",{class:"hljs-attr"},"title-position"),s("="),a("span",{class:"hljs-string"},'"center"'),s(`
     `),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"linear-gradient(90deg, rgba(72,176,221,1) 0%, rgba(0,208,161,1) 100%)"'),s(`
   />`)]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),z={class:"card"},I=a("h3",null,"Custom Content",-1),C=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" active = ref("),a("span",{class:"hljs-number"},"0"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-app-bar"),s(`
    `),a("span",{class:"hljs-attr"},"round"),s(`
    `),a("span",{class:"hljs-attr"},"image"),s("="),a("span",{class:"hljs-string"},'"https://varlet.gitee.io/varlet-ui/tree.jpeg"'),s(`
    `),a("span",{class:"hljs-attr"},"image-linear-gradient"),s("="),a("span",{class:"hljs-string"},'"to right top, rgba(29, 68, 147, 0.5) 0%, rgba(74, 198, 170, 0.9) 100%"'),s(`
  >`)]),s(`
    Title
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"left"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"round"),s(),a("span",{class:"hljs-attr"},"text"),s(),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"transparent"'),s(),a("span",{class:"hljs-attr"},"text-color"),s("="),a("span",{class:"hljs-string"},'"#fff"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"menu"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"24"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"right"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"round"),s(),a("span",{class:"hljs-attr"},"text"),s(),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"transparent"'),s(),a("span",{class:"hljs-attr"},"text-color"),s("="),a("span",{class:"hljs-string"},'"#fff"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"map-marker-radius"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"24"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"round"),s(),a("span",{class:"hljs-attr"},"text"),s(),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"transparent"'),s(),a("span",{class:"hljs-attr"},"text-color"),s("="),a("span",{class:"hljs-string"},'"#fff"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"star"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"24"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"round"),s(),a("span",{class:"hljs-attr"},"text"),s(),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"transparent"'),s(),a("span",{class:"hljs-attr"},"text-color"),s("="),a("span",{class:"hljs-string"},'"#fff"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"heart"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"24"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"content"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tabs"),s(`
        `),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"margin-top: 100px"'),s(`
        `),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"transparent"'),s(`
        `),a("span",{class:"hljs-attr"},"active-color"),s("="),a("span",{class:"hljs-string"},'"#fff"'),s(`
        `),a("span",{class:"hljs-attr"},"inactive-color"),s("="),a("span",{class:"hljs-string"},'"#ddd"'),s(`
        `),a("span",{class:"hljs-attr"},"v-model:active"),s("="),a("span",{class:"hljs-string"},'"active"'),s(`
      >`)]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("OPTION"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("OPTION"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("OPTION"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tabs"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-app-bar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),A=h('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>color</code></td><td>Background</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>text-color</code></td><td>Text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>title</code></td><td>Title</td><td><em>string</em></td><td>-</td></tr><tr><td><code>title-position</code></td><td>Title location,Can be set to <code>left</code>,<code>center</code>,<code>right</code></td><td><em>string</em></td><td><code>left</code></td></tr><tr><td><code>elevation</code></td><td>Whether to use elevation</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>round</code></td><td>Whether to use rounded border</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>image</code></td><td>Background image</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>image-linear-gradient</code></td><td>Background image linear gradient</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Customize the title content to override the <code>title</code> content</td><td><code>-</code></td></tr><tr><td><code>left</code></td><td>Insert the content to the left of the app bar</td><td><code>-</code></td></tr><tr><td><code>right</code></td><td>Insert the content to the right of the app bar</td><td><code>-</code></td></tr><tr><td><code>content</code></td><td>Insert the content to the extra content of the app bar</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--app-bar-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--app-bar-text-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--app-bar-height</code></td><td><code>54px</code></td></tr><tr><td><code>--app-bar-title-padding</code></td><td><code>0 12px</code></td></tr><tr><td><code>--app-bar-title-font-size</code></td><td><code>var(--font-size-lg)</code></td></tr><tr><td><code>--app-bar-left-gap</code></td><td><code>6px</code></td></tr><tr><td><code>--app-bar-right-gap</code></td><td><code>6px</code></td></tr><tr><td><code>--app-bar-border-radius</code></td><td><code>4px</code></td></tr></tbody></table></div>',4);function V(w,U,D,$,R,q){const t=c("var-site-code-example");return r(),p("div",o,[j,a("div",i,[g,m,l(t,null,{default:n(()=>[u]),_:1})]),a("div",v,[b,l(t,null,{default:n(()=>[_]),_:1})]),a("div",f,[x,l(t,null,{default:n(()=>[y]),_:1})]),a("div",T,[S,O,l(t,null,{default:n(()=>[P]),_:1})]),a("div",B,[N,l(t,null,{default:n(()=>[k]),_:1})]),a("div",z,[I,l(t,null,{default:n(()=>[C]),_:1})]),A])}const E=e(d,[["render",V]]);export{E as default};
