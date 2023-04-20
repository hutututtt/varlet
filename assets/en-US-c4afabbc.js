import{_ as d,p as a,f as o,h as c,M as e,q as l,S as n,aq as r,P as t}from"./vue-router-0bbd6486.js";const h={components:{}},i={class:"varlet-site-doc"},p=e("h1",null,"BackTop",-1),m=e("div",{class:"card"},[e("h3",null,"Intro"),e("p",null,"A button to back to top.")],-1),b={class:"card"},u=e("h3",null,"Basic Usage",-1),v=e("pre",{class:"hljs"},[e("code",null,[e("span",{class:"hljs-tag"},[t("<"),e("span",{class:"hljs-name"},"script"),t(),e("span",{class:"hljs-attr"},"setup"),t(">")]),e("span",{class:"javascript"},[t(`
`),e("span",{class:"hljs-keyword"},"const"),t(" lists = [...Array("),e("span",{class:"hljs-number"},"100"),t(`).keys()]
`)]),e("span",{class:"hljs-tag"},[t("</"),e("span",{class:"hljs-name"},"script"),t(">")]),t(`

`),e("span",{class:"hljs-tag"},[t("<"),e("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),e("span",{class:"hljs-tag"},[t("<"),e("span",{class:"hljs-name"},"div"),t(">")]),t(`
    `),e("span",{class:"hljs-tag"},[t("<"),e("span",{class:"hljs-name"},"var-cell"),t(),e("span",{class:"hljs-attr"},"v-for"),t("="),e("span",{class:"hljs-string"},'"list in lists"'),t(),e("span",{class:"hljs-attr"},":key"),t("="),e("span",{class:"hljs-string"},'"list"'),t(">")]),t("Scroll to bottom {{ list }}"),e("span",{class:"hljs-tag"},[t("</"),e("span",{class:"hljs-name"},"var-cell"),t(">")]),t(`
    `),e("span",{class:"hljs-tag"},[t("<"),e("span",{class:"hljs-name"},"var-back-top"),t(),e("span",{class:"hljs-attr"},":duration"),t("="),e("span",{class:"hljs-string"},'"300"'),t(" />")]),t(`
  `),e("span",{class:"hljs-tag"},[t("</"),e("span",{class:"hljs-name"},"div"),t(">")]),t(`
`),e("span",{class:"hljs-tag"},[t("</"),e("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1),g=r('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>target</code></td><td>The target to trigger scroll, If it is undefined back top will listen to the nearest scrollable parent.</td><td><em>string | HTMLElement</em></td><td><code>-</code></td></tr><tr><td><code>visibility-height</code></td><td>The button will not show until the scroll height reaches this value</td><td><em>string | number</em></td><td><code>200</code></td></tr><tr><td><code>bottom</code></td><td>Distance between <code>BackTop</code> and page bottom</td><td><em>string | number</em></td><td><code>40</code></td></tr><tr><td><code>right</code></td><td>Distance between <code>BackTop</code> and page right</td><td><em>string | number</em></td><td><code>40</code></td></tr><tr><td><code>elevation</code></td><td>Elevation level, options <code>true</code> <code>false</code> and level of <code>0-24</code></td><td><em>string | number | boolean</em></td><td><code>true</code></td></tr><tr><td><code>duration</code></td><td>Time to return to top（ms）</td><td><em>number</em></td><td><code>300</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>arguments</th></tr></thead><tbody><tr><td><code>click</code></td><td>Triggers when click</td><td><code>event: Event</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Custom the content</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--back-top-right</code></td><td><code>40px</code></td></tr><tr><td><code>--back-top-bottom</code></td><td><code>40px</code></td></tr><tr><td><code>--back-top-button-size</code></td><td><code>40px</code></td></tr></tbody></table></div>',5);function j(_,y,f,k,S,x){const s=a("var-site-code-example");return o(),c("div",i,[p,m,e("div",b,[u,l(s,null,{default:n(()=>[v]),_:1})]),g])}const w=d(h,[["render",j]]);export{w as default};
