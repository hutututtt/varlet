import{_ as n,p as c,f as d,h,M as s,q as l,S as e,aq as p,P as a}from"./vue-router.esm-bundler-0d52b99f.js";const o={components:{}},i={class:"varlet-site-doc"},r=s("h1",null,"文本省略",-1),j=s("div",{class:"card"},[s("h3",null,"介绍"),s("p",null,"主要用于省略单行文字和多行文字。")],-1),m={class:"card"},_=s("h3",null,"单行省略",-1),g=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-ellipsis"),a(),s("span",{class:"hljs-attr"},"style"),a("="),s("span",{class:"hljs-string"},'"max-width: 170px"'),a(">")]),a(`
    其实没有什么事情是不可能的，我都拿到世界冠军了，真的没有什么事情是不可能的。
  `),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-ellipsis"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),u={class:"card"},v=s("h3",null,"多行省略",-1),x=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-ellipsis"),a(),s("span",{class:"hljs-attr"},"style"),a("="),s("span",{class:"hljs-string"},'"max-width: 170px"'),a(),s("span",{class:"hljs-attr"},":line-clamp"),a("="),s("span",{class:"hljs-string"},'"3"'),a(">")]),a(`
    其实没有什么事情是不可能的，我都拿到世界冠军了，真的没有什么事情是不可能的。
  `),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-ellipsis"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),f={class:"card"},b=s("h3",null,"点击文字展开",-1),y=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-ellipsis"),a(` 
    `),s("span",{class:"hljs-attr"},"style"),a("="),s("span",{class:"hljs-string"},'"max-width: 170px"'),a(` 
    `),s("span",{class:"hljs-attr"},"expand-trigger"),a("="),s("span",{class:"hljs-string"},'"click"'),a(` 
    `),s("span",{class:"hljs-attr"},":line-clamp"),a("="),s("span",{class:"hljs-string"},'"3"'),a(` 
    `),s("span",{class:"hljs-attr"},":tooltip"),a("="),s("span",{class:"hljs-string"},'"false"'),a(`
  >`)]),a(`
    其实没有什么事情是不可能的，我都拿到世界冠军了，真的没有什么事情是不可能的。
  `),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-ellipsis"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),w={class:"card"},N=s("h3",null,"自定义 Tooltip",-1),T=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-ellipsis"),a(),s("span",{class:"hljs-attr"},"style"),a("="),s("span",{class:"hljs-string"},'"max-width: 170px"'),a(),s("span",{class:"hljs-attr"},":tooltip"),a("="),s("span",{class:"hljs-string"},`"{ type: 'primary', sameWidth: false }"`),a(">")]),a(`
    其实没有什么事情是不可能的，我都拿到世界冠军了，真的没有什么事情是不可能的。

    `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(" #"),s("span",{class:"hljs-attr"},"tooltip-content"),a(">")]),a(`
      `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-icon"),a(),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"github"'),a(" />")]),a(`
    `),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-ellipsis"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),k=p('<h2>API</h2><div class="card"><h3>属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>expand-trigger</code></td><td>展开触发方式，可选值 <code>click</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>line-clamp</code></td><td>最大显示行数，兼容性见 <a href="https://caniuse.com/?search=line-clamp">line-clamp</a></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>tooltip</code></td><td>Tooltip 组件配置，用于深度定制。为了更方便使用，<code>sameWidth</code> 在这里默认为 <code>true</code></td><td><em>boolean | TooltipProps</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>插槽</h3><table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>文字内容</td><td><code>-</code></td></tr><tr><td><code>tooltip-content</code></td><td>Tooltip 的内容</td><td><code>-</code></td></tr></tbody></table></div>',3);function V($,B,C,P,q,S){const t=c("var-site-code-example");return d(),h("div",i,[r,j,s("div",m,[_,l(t,null,{default:e(()=>[g]),_:1})]),s("div",u,[v,l(t,null,{default:e(()=>[x]),_:1})]),s("div",f,[b,l(t,null,{default:e(()=>[y]),_:1})]),s("div",w,[N,l(t,null,{default:e(()=>[T]),_:1})]),k])}const z=n(o,[["render",V]]);export{z as default};
