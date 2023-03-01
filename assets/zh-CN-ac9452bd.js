import{_ as n,p as c,f as d,h,M as a,q as l,S as e,P as s,aq as o}from"./vue-router.esm-bundler-0d52b99f.js";const p={components:{}},r={class:"varlet-site-doc"},i=a("h1",null,"粘性布局",-1),j=a("div",{class:"card"},[a("h3",null,"介绍"),a("p",null,[s("粘性布局默认使用监听容器滚动事件的 "),a("code",null,"scroll"),s(" 模式，如有需要可以切换成基于 "),a("code",null,"css sticky"),s(" 的模式来提升性能。")])],-1),m={class:"card"},b=a("h3",null,"基本使用",-1),u=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"sticky-example"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-sticky"),s(),a("span",{class:"hljs-attr"},":offset-top"),s("="),a("span",{class:"hljs-string"},'"54"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("基本使用"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-sticky"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".sticky-example"),s(` {
  `),a("span",{class:"hljs-attribute"},"min-height"),s(": "),a("span",{class:"hljs-number"},"200vh"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),g={class:"card"},v=a("h3",null,"局部吸顶",-1),_=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"sticky-example"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"sticky-example-scroller"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-sticky"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"success"'),s(">")]),s("局部吸顶"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-sticky"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"sticky-example-block"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".sticky-example"),s(` {
  `),a("span",{class:"hljs-attribute"},"min-height"),s(": "),a("span",{class:"hljs-number"},"200vh"),s(`;
}

`),a("span",{class:"hljs-selector-class"},".sticky-example-scroller"),s(` {
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"200px"),s(`;
  `),a("span",{class:"hljs-attribute"},"overflow"),s(`: auto;
  `),a("span",{class:"hljs-attribute"},"background"),s(": "),a("span",{class:"hljs-number"},"#2979ff"),s(`;
}

`),a("span",{class:"hljs-selector-class"},".sticky-example-block"),s(` {
  `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"100%"),s(`;
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"600px"),s(`;
  `),a("span",{class:"hljs-attribute"},"background"),s(": "),a("span",{class:"hljs-number"},"#2979ff"),s(`;
  `),a("span",{class:"hljs-attribute"},"opacity"),s(": ."),a("span",{class:"hljs-number"},"5"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),y=o('<h2>API</h2><div class="card"><h3>属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>offset-top</code></td><td>吸顶距离</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>z-index</code></td><td>吸顶时的层级</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>css-mode</code></td><td>开启原生 <code>css sticky</code> 模式</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>禁用吸顶, 设置为 <code>true</code> 时, 元素会回到文档流中</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="card"><h3>方法</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>resize</code></td><td>触发粘性布局重绘</td><td><code>-</code></td><td><code>Promise&lt;void&gt;</code></td></tr></tbody></table></div><div class="card"><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>scroll</code></td><td>当滚动容器滚动时触发</td><td><code>offsetTop: number</code> 距离顶部的 px 值 <br> <code>isFixed: boolean</code> 是否吸顶</td></tr></tbody></table></div><div class="card"><h3>插槽</h3><table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>粘性布局的内容</td><td><code>-</code></td></tr></tbody></table></div>',5);function f(k,x,N,V,$,w){const t=c("var-site-code-example");return d(),h("div",r,[i,j,a("div",m,[b,l(t,null,{default:e(()=>[u]),_:1})]),a("div",g,[v,l(t,null,{default:e(()=>[_]),_:1})]),y])}const B=n(p,[["render",f]]);export{B as default};
