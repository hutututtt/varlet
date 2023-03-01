import{_ as n,p as c,f as d,h,M as t,q as l,S as e,P as s,aq as o}from"./vue-router.esm-bundler-0d52b99f.js";const r={components:{}},p={class:"varlet-site-doc"},i=t("h1",null,"Sticky",-1),j=t("div",{class:"card"},[t("h3",null,"Intro"),t("p",null,[s("The sticky layout uses the "),t("code",null,"scroll"),s(" layout mode that listens to container scroll events by default. If necessary, you can switch to the "),t("code",null,"css sticky"),s(" layout mode to improve performance.")])],-1),m={class:"card"},u=t("h3",null,"Basic Use",-1),b=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"div"),s(),t("span",{class:"hljs-attr"},"class"),s("="),t("span",{class:"hljs-string"},'"sticky-example"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-sticky"),s(),t("span",{class:"hljs-attr"},":offset-top"),s("="),t("span",{class:"hljs-string"},'"54"'),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(">")]),s("Basic Use"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-sticky"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"style"),s(">")]),t("span",{class:"css"},[s(`
`),t("span",{class:"hljs-selector-class"},".sticky-example"),s(` {
  `),t("span",{class:"hljs-attribute"},"min-height"),s(": "),t("span",{class:"hljs-number"},"200vh"),s(`;
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),y={class:"card"},g=t("h3",null,"Local Sticky",-1),v=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"div"),s(),t("span",{class:"hljs-attr"},"class"),s("="),t("span",{class:"hljs-string"},'"sticky-example"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"div"),s(),t("span",{class:"hljs-attr"},"class"),s("="),t("span",{class:"hljs-string"},'"sticky-example-scroller"'),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-sticky"),s(">")]),s(`
        `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"success"'),s(">")]),s("Local Sticky"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-sticky"),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"div"),s(),t("span",{class:"hljs-attr"},"class"),s("="),t("span",{class:"hljs-string"},'"sticky-example-block"'),s(">")]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"style"),s(">")]),t("span",{class:"css"},[s(`
`),t("span",{class:"hljs-selector-class"},".sticky-example"),s(` {
  `),t("span",{class:"hljs-attribute"},"min-height"),s(": "),t("span",{class:"hljs-number"},"200vh"),s(`;
}

`),t("span",{class:"hljs-selector-class"},".sticky-example-scroller"),s(` {
  `),t("span",{class:"hljs-attribute"},"height"),s(": "),t("span",{class:"hljs-number"},"200px"),s(`;
  `),t("span",{class:"hljs-attribute"},"overflow"),s(`: auto;
  `),t("span",{class:"hljs-attribute"},"background"),s(": "),t("span",{class:"hljs-number"},"#2979ff"),s(`;
}

`),t("span",{class:"hljs-selector-class"},".sticky-example-block"),s(` {
  `),t("span",{class:"hljs-attribute"},"width"),s(": "),t("span",{class:"hljs-number"},"100%"),s(`;
  `),t("span",{class:"hljs-attribute"},"height"),s(": "),t("span",{class:"hljs-number"},"600px"),s(`;
  `),t("span",{class:"hljs-attribute"},"background"),s(": "),t("span",{class:"hljs-number"},"#2979ff"),s(`;
  `),t("span",{class:"hljs-attribute"},"opacity"),s(": ."),t("span",{class:"hljs-number"},"5"),s(`;
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),_=o('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>offset-top</code></td><td>Sticky offset top</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>z-index</code></td><td>Sticky z-index</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>css-mode</code></td><td>Enable native <code>css sticky</code> mode</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>Disable sticky, when set to <code>true</code>, the element will return to the document flow</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="card"><h3>Methods</h3><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>resize</code></td><td>trigger sticky layout redraw</td><td><code>-</code></td><td><code>Promise&lt;void&gt;</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>scroll</code></td><td>Triggered when the scroll container rolls</td><td><code>offsetTop: number</code> <br> <code>isFixed: boolean</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Sticky content</td><td><code>-</code></td></tr></tbody></table></div>',5);function f(k,x,S,w,D,P){const a=c("var-site-code-example");return d(),h("div",p,[i,j,t("div",m,[u,l(a,null,{default:e(()=>[b]),_:1})]),t("div",y,[g,l(a,null,{default:e(()=>[v]),_:1})]),_])}const N=n(r,[["render",f]]);export{N as default};
