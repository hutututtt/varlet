import{_ as e,p as c,f as p,h as r,M as s,q as t,S as n,aq as h,P as a}from"./vue-router.esm-bundler-0d52b99f.js";const o={components:{}},i={class:"varlet-site-doc"},d=s("h1",null,"水波指令",-1),j=s("div",{class:"card"},[s("h3",null,"介绍"),s("p",null,"使元素点击时生成一个水波扩散的效果。")],-1),u={class:"card"},b=s("h3",null,"基本使用",-1),m=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"div"),a(),s("span",{class:"hljs-attr"},"class"),a("="),s("span",{class:"hljs-string"},'"ripple-example-block var-elevation--2"'),a(),s("span",{class:"hljs-attr"},"v-ripple"),a(">")]),a("点击"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"div"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`

`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"style"),a(">")]),s("span",{class:"css"},[a(`
`),s("span",{class:"hljs-selector-class"},".ripple-example-block"),a(` {
  `),s("span",{class:"hljs-attribute"},"display"),a(`: flex;
  `),s("span",{class:"hljs-attribute"},"justify-content"),a(`: center;
  `),s("span",{class:"hljs-attribute"},"align-items"),a(`: center;
  `),s("span",{class:"hljs-attribute"},"height"),a(": "),s("span",{class:"hljs-number"},"100px"),a(`;
  user-select: none;
  `),s("span",{class:"hljs-attribute"},"cursor"),a(`: pointer;
  `),s("span",{class:"hljs-attribute"},"color"),a(": "),s("span",{class:"hljs-number"},"#888"),a(`;
  -webkit-tap-highlight-`),s("span",{class:"hljs-attribute"},"color"),a(": "),s("span",{class:"hljs-built_in"},"rgba"),a("("),s("span",{class:"hljs-number"},"0"),a(", "),s("span",{class:"hljs-number"},"0"),a(", "),s("span",{class:"hljs-number"},"0"),a(", "),s("span",{class:"hljs-number"},"0"),a(`);
  `),s("span",{class:"hljs-attribute"},"transition"),a(": background-color "),s("span",{class:"hljs-number"},"0.25s"),a(`;
}
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"style"),a(">")]),a(`
`)])],-1),_={class:"card"},g=s("h3",null,"修改颜色",-1),v=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"div"),a(),s("span",{class:"hljs-attr"},"class"),a("="),s("span",{class:"hljs-string"},'"ripple-example-block var-elevation--2"'),a(),s("span",{class:"hljs-attr"},"v-ripple"),a("="),s("span",{class:"hljs-string"},`"{ color: '#2979ff' }"`),a(">")]),a(`
    点击
  `),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"div"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`

`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"style"),a(">")]),s("span",{class:"css"},[a(`
`),s("span",{class:"hljs-selector-class"},".ripple-example-block"),a(` {
  `),s("span",{class:"hljs-attribute"},"display"),a(`: flex;
  `),s("span",{class:"hljs-attribute"},"justify-content"),a(`: center;
  `),s("span",{class:"hljs-attribute"},"align-items"),a(`: center;
  `),s("span",{class:"hljs-attribute"},"height"),a(": "),s("span",{class:"hljs-number"},"100px"),a(`;
  user-select: none;
  `),s("span",{class:"hljs-attribute"},"cursor"),a(`: pointer;
  `),s("span",{class:"hljs-attribute"},"color"),a(": "),s("span",{class:"hljs-number"},"#888"),a(`;
  -webkit-tap-highlight-`),s("span",{class:"hljs-attribute"},"color"),a(": "),s("span",{class:"hljs-built_in"},"rgba"),a("("),s("span",{class:"hljs-number"},"0"),a(", "),s("span",{class:"hljs-number"},"0"),a(", "),s("span",{class:"hljs-number"},"0"),a(", "),s("span",{class:"hljs-number"},"0"),a(`);
  `),s("span",{class:"hljs-attribute"},"transition"),a(": background-color "),s("span",{class:"hljs-number"},"0.25s"),a(`;
}
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"style"),a(">")]),a(`
`)])],-1),f={class:"card"},x=s("h3",null,"禁用水波",-1),y=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"div"),a(),s("span",{class:"hljs-attr"},"class"),a("="),s("span",{class:"hljs-string"},'"ripple-example-block var-elevation--2"'),a(),s("span",{class:"hljs-attr"},"v-ripple"),a("="),s("span",{class:"hljs-string"},'"{ disabled: true }"'),a(">")]),a(`
    点击
  `),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"div"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`

`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"style"),a(">")]),s("span",{class:"css"},[a(`
`),s("span",{class:"hljs-selector-class"},".ripple-example-block"),a(` {
  `),s("span",{class:"hljs-attribute"},"display"),a(`: flex;
  `),s("span",{class:"hljs-attribute"},"justify-content"),a(`: center;
  `),s("span",{class:"hljs-attribute"},"align-items"),a(`: center;
  `),s("span",{class:"hljs-attribute"},"height"),a(": "),s("span",{class:"hljs-number"},"100px"),a(`;
  user-select: none;
  `),s("span",{class:"hljs-attribute"},"cursor"),a(`: pointer;
  `),s("span",{class:"hljs-attribute"},"color"),a(": "),s("span",{class:"hljs-number"},"#888"),a(`;
  -webkit-tap-highlight-`),s("span",{class:"hljs-attribute"},"color"),a(": "),s("span",{class:"hljs-built_in"},"rgba"),a("("),s("span",{class:"hljs-number"},"0"),a(", "),s("span",{class:"hljs-number"},"0"),a(", "),s("span",{class:"hljs-number"},"0"),a(", "),s("span",{class:"hljs-number"},"0"),a(`);
  `),s("span",{class:"hljs-attribute"},"transition"),a(": background-color "),s("span",{class:"hljs-number"},"0.25s"),a(`;
}
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"style"),a(">")]),a(`
`)])],-1),k=h('<h2>API</h2><div class="card"><h3>选项</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>color</code></td><td>水波纹的颜色</td><td><em>string</em></td><td><code>currentColor</code></td></tr><tr><td><code>disabled</code></td><td>禁用状态</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="card"><h3>样式变量</h3><p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--ripple-cubic-bezier</code></td><td><code>cubic-bezier(0.68, 0.01, 0.62, 0.6)</code></td></tr><tr><td><code>--ripple-color</code></td><td><code>currentColor</code></td></tr></tbody></table></div>',3);function C(N,w,z,V,$,B){const l=c("var-site-code-example");return p(),r("div",i,[d,j,s("div",u,[b,t(l,null,{default:n(()=>[m]),_:1})]),s("div",_,[g,t(l,null,{default:n(()=>[v]),_:1})]),s("div",f,[x,t(l,null,{default:n(()=>[y]),_:1})]),k])}const S=e(o,[["render",C]]);export{S as default};
