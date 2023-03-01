import{_ as c,p as d,f as n,h as o,M as t,q as e,S as l,aq as r,P as s}from"./vue-router.esm-bundler-0d52b99f.js";const h={components:{}},p={class:"varlet-site-doc"},i=t("h1",null,"Cell",-1),j=t("div",{class:"card"},[t("h3",null,"Intro"),t("p",null,"The cell is a single display item in the list.")],-1),m={class:"card"},g=t("h3",null,"Basic Usage",-1),_=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s("This is Cell"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),v={class:"card"},f=t("h3",null,"Show Icon",-1),b=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-cell"),s(),t("span",{class:"hljs-attr"},"icon"),s("="),t("span",{class:"hljs-string"},'"fire"'),s(),t("span",{class:"hljs-attr"},"title"),s("="),t("span",{class:"hljs-string"},'"This is Cell"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(" #"),t("span",{class:"hljs-attr"},"extra"),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-icon"),s(),t("span",{class:"hljs-attr"},"name"),s("="),t("span",{class:"hljs-string"},'"information"'),s(" />")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),u={class:"card"},x=t("h3",null,"Show Description",-1),y=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-cell"),s(),t("span",{class:"hljs-attr"},"title"),s("="),t("span",{class:"hljs-string"},'"This is Cell"'),s(),t("span",{class:"hljs-attr"},"description"),s("="),t("span",{class:"hljs-string"},'"description"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),S={class:"card"},k=t("h3",null,"Show Border",-1),w=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-cell"),s(),t("span",{class:"hljs-attr"},"border"),s(">")]),s("This is Cell"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),C={class:"card"},T=t("h3",null,"Use As List Item",-1),D=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(` items = ref([
  {
    `),t("span",{class:"hljs-attr"},"name"),s(": "),t("span",{class:"hljs-string"},"'Vue2'"),s(`,
    `),t("span",{class:"hljs-attr"},"icon"),s(": "),t("span",{class:"hljs-string"},"'star'"),s(`,
    `),t("span",{class:"hljs-attr"},"enabled"),s(": "),t("span",{class:"hljs-literal"},"false"),s(`,
  },
  {
    `),t("span",{class:"hljs-attr"},"name"),s(": "),t("span",{class:"hljs-string"},"'Vue3'"),s(`,
    `),t("span",{class:"hljs-attr"},"icon"),s(": "),t("span",{class:"hljs-string"},"'heart'"),s(`,
    `),t("span",{class:"hljs-attr"},"enabled"),s(": "),t("span",{class:"hljs-literal"},"false"),s(`,
  },
  {
    `),t("span",{class:"hljs-attr"},"name"),s(": "),t("span",{class:"hljs-string"},"'React'"),s(`,
    `),t("span",{class:"hljs-attr"},"icon"),s(": "),t("span",{class:"hljs-string"},"'close-circle'"),s(`,
    `),t("span",{class:"hljs-attr"},"enabled"),s(": "),t("span",{class:"hljs-literal"},"false"),s(`,
  },
])

`),t("span",{class:"hljs-keyword"},"const"),s(" handleClick = "),t("span",{class:"hljs-function"},[s("("),t("span",{class:"hljs-params"},"item"),s(") =>")]),s(` {
  item.enabled = !item.enabled
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-paper"),s(),t("span",{class:"hljs-attr"},":elevation"),s("="),t("span",{class:"hljs-string"},'"2"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-cell"),s(`
      `),t("span",{class:"hljs-attr"},"v-for"),s("="),t("span",{class:"hljs-string"},'"(item, index) in items"'),s(`
      `),t("span",{class:"hljs-attr"},":key"),s("="),t("span",{class:"hljs-string"},'"item.name"'),s(`
      `),t("span",{class:"hljs-attr"},"ripple"),s(`
      `),t("span",{class:"hljs-attr"},":icon"),s("="),t("span",{class:"hljs-string"},'"item.icon"'),s(`
      `),t("span",{class:"hljs-attr"},":border"),s("="),t("span",{class:"hljs-string"},'"index !== items.length - 1"'),s(`
      `),t("span",{class:"hljs-attr"},":border-offset"),s("="),t("span",{class:"hljs-string"},'"0"'),s(`
      @`),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"handleClick(item)"'),s(`
    >`)]),s(`
      {{ item.name }}

      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(" #"),t("span",{class:"hljs-attr"},"extra"),s(">")]),s(`
        `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-switch"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"item.enabled"'),s(" @"),t("span",{class:"hljs-attr"},"click.stop"),s(" />")]),s(`
      `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-paper"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),N=r('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>title</code></td><td>Title</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>Icon name</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>description</code></td><td>Description</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>border</code></td><td>Whether to show border</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>border-offset</code></td><td>Border offset</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>icon-class</code></td><td>Icon className</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>title-class</code></td><td>Title className</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>description-class</code></td><td>Description className</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>extra-class</code></td><td>Extra className</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>ripple</code></td><td>Whether to enable the water wave effect</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>click</code></td><td>Triggered when the cell is clicked.</td><td><code>event: Event</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Content of cell</td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>Icon of cell</td><td><code>-</code></td></tr><tr><td><code>description</code></td><td>Description of cell</td><td><code>-</code></td></tr><tr><td><code>extra</code></td><td>Extra of cell</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--cell-color</code></td><td><code>var(--color-text)</code></td></tr><tr><td><code>--cell-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--cell-description-font-size</code></td><td><code>var(--font-size-sm)</code></td></tr><tr><td><code>--cell-description-color</code></td><td><code>rgba(0, 0, 0, 0.6)</code></td></tr><tr><td><code>--cell-padding</code></td><td><code>10px 12px</code></td></tr><tr><td><code>--cell-min-height</code></td><td><code>40px</code></td></tr><tr><td><code>--cell-border-color</code></td><td><code>#bcc2cb</code></td></tr><tr><td><code>--cell-border-left</code></td><td><code>12px</code></td></tr><tr><td><code>--cell-border-right</code></td><td><code>12px</code></td></tr><tr><td><code>--cell-icon-right</code></td><td><code>8px</code></td></tr><tr><td><code>--cell-extra-left</code></td><td><code>8px</code></td></tr></tbody></table></div>',5);function V(I,B,E,P,z,U){const a=d("var-site-code-example");return n(),o("div",p,[i,j,t("div",m,[g,e(a,null,{default:l(()=>[_]),_:1})]),t("div",v,[f,e(a,null,{default:l(()=>[b]),_:1})]),t("div",u,[x,e(a,null,{default:l(()=>[y]),_:1})]),t("div",S,[k,e(a,null,{default:l(()=>[w]),_:1})]),t("div",C,[T,e(a,null,{default:l(()=>[D]),_:1})]),N])}const A=c(h,[["render",V]]);export{A as default};
