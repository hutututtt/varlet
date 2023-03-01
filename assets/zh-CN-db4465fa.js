import{_ as c,p as e,f as p,h as r,M as a,q as l,S as n,P as s,aq as h}from"./vue-router.esm-bundler-0d52b99f.js";const d={components:{}},o={class:"varlet-site-doc"},j=a("h1",null,"导航栏",-1),i={class:"card"},g=a("h3",null,"基础导航栏",-1),m=a("p",null,[s("通过 "),a("code",null,"title"),s(" 属性设置导航栏标题。")],-1),v=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-app-bar"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"标题"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),u={class:"card"},_=a("h3",null,"添加标题处插槽",-1),b=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-app-bar"),s(">")]),s("添加标题处插槽"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-app-bar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),f={class:"card"},x=a("h3",null,"添加左右插槽",-1),y=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-app-bar"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"标题"'),s(">")]),s(`
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
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(),a("span",{class:"hljs-attr"},"ripple"),s(">")]),s("选项卡"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(),a("span",{class:"hljs-attr"},"ripple"),s(">")]),s("选项卡"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(),a("span",{class:"hljs-attr"},"ripple"),s(">")]),s("选项卡"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-menu"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-app-bar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),z={class:"card"},k=a("h3",null,"开启圆角",-1),N=a("p",null,[s("通过 "),a("code",null,"round"),s(" 属性开启圆角。")],-1),w=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-app-bar"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"开启圆角"'),s(),a("span",{class:"hljs-attr"},"title-position"),s("="),a("span",{class:"hljs-string"},'"center"'),s(),a("span",{class:"hljs-attr"},"round"),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),C={class:"card"},V=a("h3",null,"自定义背景色",-1),$=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-app-bar"),s(`
    `),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"标题"'),s(` 
    `),a("span",{class:"hljs-attr"},"title-position"),s("="),a("span",{class:"hljs-string"},'"center"'),s(` 
    `),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"linear-gradient(90deg, rgba(72,176,221,1) 0%, rgba(0,208,161,1) 100%)"'),s(`
  />`)]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),B={class:"card"},P=a("h3",null,"扩展内容",-1),S=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" active = ref("),a("span",{class:"hljs-number"},"0"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-app-bar"),s(`
    `),a("span",{class:"hljs-attr"},"round"),s(`
    `),a("span",{class:"hljs-attr"},"image"),s("="),a("span",{class:"hljs-string"},'"https://varlet.gitee.io/varlet-ui/tree.jpeg"'),s(`
    `),a("span",{class:"hljs-attr"},"image-linear-gradient"),s("="),a("span",{class:"hljs-string"},'"to right top, rgba(29, 68, 147, 0.5) 0%, rgba(74, 198, 170, 0.9) 100%"'),s(`
  >`)]),s(`
    标题
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
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("选项卡"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("选项卡"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s("选项卡"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tab"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-tabs"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-app-bar"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),q=h('<h2>API</h2><div class="card"><h3>属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>color</code></td><td>背景颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>text-color</code></td><td>文字颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>title</code></td><td>标题</td><td><em>string</em></td><td>-</td></tr><tr><td><code>title-position</code></td><td>标题位置，可选值为 <code>left</code> <code>center</code> <code>right</code></td><td><em>string</em></td><td><code>left</code></td></tr><tr><td><code>elevation</code></td><td>是否使用海拔</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>round</code></td><td>是否使用圆角</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>image</code></td><td>背景图片</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>image-linear-gradient</code></td><td>背景图片渐变色</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>插槽</h3><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>自定义标题内容，会覆盖 <code>title</code> 的内容</td><td><code>-</code></td></tr><tr><td><code>left</code></td><td>插入至导航栏左侧的内容</td><td><code>-</code></td></tr><tr><td><code>right</code></td><td>插入至导航栏右侧的内容</td><td><code>-</code></td></tr><tr><td><code>content</code></td><td>扩展内容</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>样式变量</h3><p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--app-bar-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--app-bar-text-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--app-bar-height</code></td><td><code>54px</code></td></tr><tr><td><code>--app-bar-title-padding</code></td><td><code>0 12px</code></td></tr><tr><td><code>--app-bar-title-font-size</code></td><td><code>var(--font-size-lg)</code></td></tr><tr><td><code>--app-bar-left-gap</code></td><td><code>6px</code></td></tr><tr><td><code>--app-bar-right-gap</code></td><td><code>6px</code></td></tr><tr><td><code>--app-bar-border-radius</code></td><td><code>4px</code></td></tr><tr><td><code>--app-bar-font-size</code></td><td><code>var(--font-size-lg)</code></td></tr></tbody></table></div>',4);function A(E,I,M,T,D,F){const t=e("var-site-code-example");return p(),r("div",o,[j,a("div",i,[g,m,l(t,null,{default:n(()=>[v]),_:1})]),a("div",u,[_,l(t,null,{default:n(()=>[b]),_:1})]),a("div",f,[x,l(t,null,{default:n(()=>[y]),_:1})]),a("div",z,[k,N,l(t,null,{default:n(()=>[w]),_:1})]),a("div",C,[V,l(t,null,{default:n(()=>[$]),_:1})]),a("div",B,[P,l(t,null,{default:n(()=>[S]),_:1})]),q])}const H=c(d,[["render",A]]);export{H as default};
