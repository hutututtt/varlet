import{_ as n,p as c,f as r,h,M as a,q as l,S as e,P as s,aq as d}from"./vue-router.esm-bundler-0d52b99f.js";const p={components:{}},o={class:"varlet-site-doc"},m=a("h1",null,"Breadcrumbs",-1),j=a("div",{class:"card"},[a("h3",null,"Intro"),a("p",null,"Used to display information hierarchically.")],-1),b={class:"card"},i=a("h3",null,"Basic Usage",-1),u=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
   `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-breadcrumbs"),s(">")]),s(`
     `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s("Home"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s(`
     `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s("Link 1"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s(`
     `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s("Link 2"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s(`
   `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-breadcrumbs"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),g={class:"card"},v=a("h3",null,"Separator",-1),_=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
   `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-breadcrumbs"),s(),a("span",{class:"hljs-attr"},"separator"),s("="),a("span",{class:"hljs-string"},'"\\"'),s(">")]),s(`
     `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s("Home"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s(`
     `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s("Link 1"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s(`
     `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s("Link 2"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s(`
   `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-breadcrumbs"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),k={class:"card"},y=a("h3",null,"Child Separator",-1),f=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
   `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-breadcrumbs"),s(">")]),s(`
     `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s("Home"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s(`
     `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(),a("span",{class:"hljs-attr"},"separator"),s("="),a("span",{class:"hljs-string"},'"~"'),s(">")]),s("Link 1"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s(`
     `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s("Link 2"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s(`
   `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-breadcrumbs"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),S={class:"card"},x=a("h3",null,"Separator Slot",-1),L=a("p",null,"Custom content can be used as separator by setting slot.",-1),B=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-breadcrumbs"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s(`
      Home
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"separator"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"menu-right"'),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"margin: 1px 4px 0"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s(`
      Link 1
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"separator"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"menu-right"'),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"margin: 1px 4px 0"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s("Link 2"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-breadcrumbs"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),P={class:"card"},C=a("h3",null,"Events",-1),D=a("p",null,[s("Register the click event of the breadcrumb through "),a("code",null,"@click"),s(", the last breadcrumb will not trigger the click event.")],-1),H=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-breadcrumbs"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"Snackbar('Home')"`),s(">")]),s("Home"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"Snackbar('Link 1')"`),s(">")]),s("Link 1"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},`"Snackbar('Link 2')"`),s(">")]),s("Link 2"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-breadcrumb"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-breadcrumbs"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),V=d('<h2>API</h2><div class="card"><h3>Props</h3><h4>Breadcrumbs Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>separator</code></td><td>separator</td><td><em>string</em></td><td><code>/</code></td></tr></tbody></table><h4>Breadcrumb Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>separator</code></td><td>separator</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><h4>Breadcrumb Events</h4><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>click</code></td><td>Triggered when a breadcrumb is clicked</td><td><code>event: Event</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><h4>Breadcrumbs Slots</h4><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Customize the default content</td><td><code>-</code></td></tr></tbody></table><h4>Breadcrumb Slots</h4><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Customize the default content</td><td><code>-</code></td></tr><tr><td><code>separator</code></td><td>Customize separator content</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><h4>Breadcrumb Variables</h4><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--breadcrumb-active-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--breadcrumb-inactive-color</code></td><td><code>#888</code></td></tr><tr><td><code>--breadcrumb-separator-margin</code></td><td><code>0 10px</code></td></tr><tr><td><code>--breadcrumb-separator-font-size</code></td><td><code>14px</code></td></tr></tbody></table></div>',5);function E(N,w,z,T,U,$){const t=c("var-site-code-example");return r(),h("div",o,[m,j,a("div",b,[i,l(t,null,{default:e(()=>[u]),_:1})]),a("div",g,[v,l(t,null,{default:e(()=>[_]),_:1})]),a("div",k,[y,l(t,null,{default:e(()=>[f]),_:1})]),a("div",S,[x,L,l(t,null,{default:e(()=>[B]),_:1})]),a("div",P,[C,D,l(t,null,{default:e(()=>[H]),_:1})]),V])}const A=n(p,[["render",E]]);export{A as default};
