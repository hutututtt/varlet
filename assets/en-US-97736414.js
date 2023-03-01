import{_ as n,p as o,f as c,h as p,M as s,q as l,S as e,aq as d,P as t}from"./vue-router.esm-bundler-0d52b99f.js";const i={components:{}},h={class:"varlet-site-doc"},r=s("h1",null,"Ellipsis",-1),m=s("div",{class:"card"},[s("h3",null,"Intro"),s("p",null,"Mainly used to omit single-line text and multi-line text.")],-1),j={class:"card"},u=s("h3",null,"Single Line Ellipsis",-1),_=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-ellipsis"),t(),s("span",{class:"hljs-attr"},"style"),t("="),s("span",{class:"hljs-string"},'"max-width: 170px"'),t(">")]),t(`
    I want to say english to everyone like, even you still are normal people, you still can work a world champion and no one trust you!
  `),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-ellipsis"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1),g={class:"card"},v=s("h3",null,"Multiple Line Ellipsis",-1),y=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-ellipsis"),t(),s("span",{class:"hljs-attr"},"style"),t("="),s("span",{class:"hljs-string"},'"max-width: 170px"'),t(),s("span",{class:"hljs-attr"},":line-clamp"),t("="),s("span",{class:"hljs-string"},'"3"'),t(">")]),t(`
    I want to say english to everyone like, even you still are normal people, you still can work a world champion and no one trust you!
  `),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-ellipsis"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1),x={class:"card"},f=s("h3",null,"Click on the text to expand",-1),w=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-ellipsis"),t(` 
    `),s("span",{class:"hljs-attr"},"style"),t("="),s("span",{class:"hljs-string"},'"max-width: 170px"'),t(` 
    `),s("span",{class:"hljs-attr"},"expand-trigger"),t("="),s("span",{class:"hljs-string"},'"click"'),t(` 
    `),s("span",{class:"hljs-attr"},":line-clamp"),t("="),s("span",{class:"hljs-string"},'"3"'),t(` 
    `),s("span",{class:"hljs-attr"},":tooltip"),t("="),s("span",{class:"hljs-string"},'"false"'),t(`
  >`)]),t(`
    I want to say english to everyone like, even you still are normal people, you still can work a world champion and no one trust you!
  `),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-ellipsis"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1),k={class:"card"},b=s("h3",null,"Custom Tooltip",-1),T=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-ellipsis"),t(),s("span",{class:"hljs-attr"},"style"),t("="),s("span",{class:"hljs-string"},'"max-width: 50vw"'),t(),s("span",{class:"hljs-attr"},":tooltip"),t("="),s("span",{class:"hljs-string"},`"{ type: 'primary', sameWidth: false }"`),t(">")]),t(`
    I want to say english to everyone like, even you still are normal people, you still can work a world champion and no one trust you!

    `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(" #"),s("span",{class:"hljs-attr"},"tooltip-content"),t(">")]),t(`
      `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-icon"),t(),s("span",{class:"hljs-attr"},"name"),t("="),s("span",{class:"hljs-string"},'"github"'),t(" />")]),t(`
    `),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-ellipsis"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1),I=d('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>expand-trigger</code></td><td>Expand trigger method, optional value <code>click</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>line-clamp</code></td><td>Maximum number of display lines, see <a href="https://caniuse.com/?search=line-clamp">line-clamp</a> for compatibility</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>tooltip</code></td><td>Tooltip component props, for deep customization. For more convenience, <code>sameWidth</code> defaults to <code>true</code> here</td><td><em>boolean | TooltipProps</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Text content</td><td><code>-</code></td></tr><tr><td><code>tooltip-content</code></td><td>Tooltip content</td><td><code>-</code></td></tr></tbody></table></div>',3);function P(S,E,N,C,M,V){const a=o("var-site-code-example");return c(),p("div",h,[r,m,s("div",j,[u,l(a,null,{default:e(()=>[_]),_:1})]),s("div",g,[v,l(a,null,{default:e(()=>[y]),_:1})]),s("div",x,[f,l(a,null,{default:e(()=>[w]),_:1})]),s("div",k,[b,l(a,null,{default:e(()=>[T]),_:1})]),I])}const B=n(i,[["render",P]]);export{B as default};
