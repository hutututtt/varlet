import{_ as e,p as c,f as p,h,M as s,q as l,S as n,P as a,aq as r}from"./vue-router.esm-bundler-0d52b99f.js";const o={components:{}},d={class:"varlet-site-doc"},i=s("h1",null,"图片懒加载",-1),j=s("div",{class:"card"},[s("h3",null,"介绍"),s("p",null,"在图片可见时进行加载。")],-1),m={class:"card"},g=s("h3",null,"基本用法",-1),u=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"img"),a(),s("span",{class:"hljs-attr"},"class"),a("="),s("span",{class:"hljs-string"},'"lazy-example-cat"'),a(),s("span",{class:"hljs-attr"},"v-lazy"),a("="),s("span",{class:"hljs-string"},`"'https://varlet.gitee.io/varlet-ui/cat.jpg'"`),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`

`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"style"),a(">")]),s("span",{class:"css"},[a(`
`),s("span",{class:"hljs-selector-class"},".lazy-example-cat"),a(` {
  `),s("span",{class:"hljs-attribute"},"width"),a(": "),s("span",{class:"hljs-number"},"100%"),a(`;
  `),s("span",{class:"hljs-attribute"},"height"),a(": "),s("span",{class:"hljs-number"},"200px"),a(`;
  `),s("span",{class:"hljs-attribute"},"object-fit"),a(`: cover;
  `),s("span",{class:"hljs-attribute"},"background-size"),a(`: cover;
  `),s("span",{class:"hljs-attribute"},"pointer-events"),a(`: none;
}
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"style"),a(">")]),a(`
`)])],-1),_={class:"card"},v=s("h3",null,"背景图懒加载",-1),b=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"div"),a(` 
    `),s("span",{class:"hljs-attr"},"class"),a("="),s("span",{class:"hljs-string"},'"lazy-example-cat"'),a(` 
    `),s("span",{class:"hljs-attr"},"v-lazy:background-image"),a("="),s("span",{class:"hljs-string"},`"'https://varlet.gitee.io/varlet-ui/cat.jpg'"`),a(`
  >`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"div"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`

`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"style"),a(">")]),s("span",{class:"css"},[a(`
`),s("span",{class:"hljs-selector-class"},".lazy-example-cat"),a(` {
  `),s("span",{class:"hljs-attribute"},"width"),a(": "),s("span",{class:"hljs-number"},"100%"),a(`;
  `),s("span",{class:"hljs-attribute"},"height"),a(": "),s("span",{class:"hljs-number"},"200px"),a(`;
  `),s("span",{class:"hljs-attribute"},"object-fit"),a(`: cover;
  `),s("span",{class:"hljs-attribute"},"background-size"),a(`: cover;
  `),s("span",{class:"hljs-attribute"},"pointer-events"),a(`: none;
}
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"style"),a(">")]),a(`
`)])],-1),y={class:"card"},x=s("h3",null,"内联属性",-1),z=s("p",null,[a("可以通过内联属性修改 "),s("code",null,"loading"),a("、 "),s("code",null,"error"),a(" 图片和"),s("code",null,"加载失败时尝试重新加载的次数"),a("。")],-1),f=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"img"),a(`
    `),s("span",{class:"hljs-attr"},"class"),a("="),s("span",{class:"hljs-string"},'"lazy-example-cat"'),a(`
    `),s("span",{class:"hljs-attr"},"v-lazy"),a("="),s("span",{class:"hljs-string"},`"'https://varlet.gitee.io/varlet-ui/cat.jpg'"`),a(`
    `),s("span",{class:"hljs-attr"},"lazy-loading"),a("="),s("span",{class:"hljs-string"},'"https://xxx.cn/loading.png"'),a(`
    `),s("span",{class:"hljs-attr"},"lazy-error"),a("="),s("span",{class:"hljs-string"},'"https://xxx.cn/error.png"'),a(`
    `),s("span",{class:"hljs-attr"},"lazy-attempt"),a("="),s("span",{class:"hljs-string"},'"3"'),a(`
  >`)]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`

`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"style"),a(">")]),s("span",{class:"css"},[a(`
`),s("span",{class:"hljs-selector-class"},".lazy-example-cat"),a(` {
  `),s("span",{class:"hljs-attribute"},"width"),a(": "),s("span",{class:"hljs-number"},"100%"),a(`;
  `),s("span",{class:"hljs-attribute"},"height"),a(": "),s("span",{class:"hljs-number"},"200px"),a(`;
  `),s("span",{class:"hljs-attribute"},"object-fit"),a(`: cover;
  `),s("span",{class:"hljs-attribute"},"background-size"),a(`: cover;
  `),s("span",{class:"hljs-attribute"},"pointer-events"),a(`: none;
}
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"style"),a(">")]),a(`
`)])],-1),k={class:"card"},w=s("h3",null,"插件",-1),N=s("p",null,[s("code",null,"Lazy"),a(" 提供了在插件注册时传入的选项，可以设置默认的懒加载选项。")],-1),L=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),a(" { createApp } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'vue'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { Lazy } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/ui'"),a(`

createApp().use(Lazy, {
  `),s("span",{class:"hljs-attr"},"loading"),a(": "),s("span",{class:"hljs-string"},"'https://xxx.cn/loading.png'"),a(`,
  `),s("span",{class:"hljs-attr"},"error"),a(": "),s("span",{class:"hljs-string"},"'https://xxx.cn/error.png'"),a(`,
  `),s("span",{class:"hljs-attr"},"attempt"),a(": "),s("span",{class:"hljs-number"},"3"),a(`,
  `),s("span",{class:"hljs-attr"},"throttleWait"),a(": "),s("span",{class:"hljs-number"},"300"),a(`,
  `),s("span",{class:"hljs-attr"},"events"),a(`: [
    `),s("span",{class:"hljs-string"},"'scroll'"),a(`,
    `),s("span",{class:"hljs-string"},"'wheel'"),a(`,
    `),s("span",{class:"hljs-string"},"'mousewheel'"),a(`,
    `),s("span",{class:"hljs-string"},"'resize'"),a(`,
    `),s("span",{class:"hljs-string"},"'animationend'"),a(`,
    `),s("span",{class:"hljs-string"},"'transitionend'"),a(`,
    `),s("span",{class:"hljs-string"},"'touchmove'"),a(`
  ],
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"filter"),a("("),s("span",{class:"hljs-params"},"lazy"),a(")")]),a(` {
    `),s("span",{class:"hljs-comment"},"// 可以访问 lazy 上下文的所有属性,执行一些属性拦截,"),a(`
    `),s("span",{class:"hljs-comment"},"// 比如简单修改所有的图片地址 http -> https"),a(`
    lazy.src.replace(`),s("span",{class:"hljs-string"},"'http://'"),a(", "),s("span",{class:"hljs-string"},"'https://'"),a(`)
  }
})
`)])],-1),V=r('<h2>API</h2><div class="card"><h3>插件选项</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>loading</code></td><td>加载中的图片，尽可能选择加载速度很快的图片</td><td><em>string</em></td><td><code>1像素透明图片</code></td></tr><tr><td><code>error</code></td><td>加载失败显示的图片</td><td><em>string</em></td><td><code>1像素透明图片</code></td></tr><tr><td><code>attempt</code></td><td>加载失败时尝试重新加载的次数</td><td><em>number</em></td><td><code>3</code></td></tr><tr><td><code>throttleWait</code></td><td>节流时间，数值越大事件触发频率越低</td><td><em>number</em></td><td><code>300</code></td></tr><tr><td><code>events</code></td><td>触发可见性检测注册的事件列表</td><td><em>string[]</em></td><td><code>[&#39;scroll&#39;...]</code></td></tr><tr><td><code>filter</code></td><td>属性拦截函数</td><td><em>(lazy: Lazy) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr></tbody></table></div>',2);function $(A,B,C,q,P,S){const t=c("var-site-code-example");return p(),h("div",d,[i,j,s("div",m,[g,l(t,null,{default:n(()=>[u]),_:1})]),s("div",_,[v,l(t,null,{default:n(()=>[b]),_:1})]),s("div",y,[x,z,l(t,null,{default:n(()=>[f]),_:1})]),s("div",k,[w,N,l(t,{"playground-ignore":""},{default:n(()=>[L]),_:1})]),V])}const E=e(o,[["render",$]]);export{E as default};
