import{_ as e,p as c,f as p,h as r,M as s,q as n,S as t,P as a}from"./vue-router.esm-bundler-0d52b99f.js";const h={components:{}},o={class:"varlet-site-doc"},i=s("h1",null,"悬停指令",-1),j=s("div",{class:"card"},[s("h3",null,"介绍"),s("p",null,"指针悬停在绑定元素上时进行样式绑定，也可以通过函数获得当前悬停的状态，支持在桌面端或移动端中选择性启用。")],-1),u={class:"card"},d=s("h3",null,"样式绑定",-1),m=s("p",null,"指针悬停在绑定元素上时进行样式绑定, 离开元素时取消样式绑定。",-1),g=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-paper"),a(`
    `),s("span",{class:"hljs-attr"},"class"),a("="),s("span",{class:"hljs-string"},'"paper"'),a(`
    `),s("span",{class:"hljs-attr"},"ripple"),a(`
    `),s("span",{class:"hljs-attr"},":elevation"),a("="),s("span",{class:"hljs-string"},'"2"'),a(`
    `),s("span",{class:"hljs-attr"},":width"),a("="),s("span",{class:"hljs-string"},'"100"'),a(`
    `),s("span",{class:"hljs-attr"},":height"),a("="),s("span",{class:"hljs-string"},'"100"'),a(`
    `),s("span",{class:"hljs-attr"},"v-hover"),a("="),s("span",{class:"hljs-string"},`"{ color: '#fff', background: ' var(--color-primary)' }"`),a(`
  >`)]),a(`
    HOVER
  `),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-paper"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`

`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"style"),a(">")]),s("span",{class:"css"},[a(`
`),s("span",{class:"hljs-selector-class"},".paper"),a(` {
  `),s("span",{class:"hljs-attribute"},"display"),a(`: flex;
  `),s("span",{class:"hljs-attribute"},"align-items"),a(`: center;
  `),s("span",{class:"hljs-attribute"},"justify-content"),a(`: center;
  `),s("span",{class:"hljs-attribute"},"cursor"),a(`: pointer;
}
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"style"),a(">")]),a(`
`)])],-1),_={class:"card"},v=s("h3",null,"函数绑定",-1),f=s("p",null,"指针悬停和离开时会触发函数，并携带当前的悬停状态。",-1),b=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"setup"),a(">")]),s("span",{class:"javascript"},[a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { ref } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'vue'"),a(`

`),s("span",{class:"hljs-keyword"},"const"),a(" translateY = ref("),s("span",{class:"hljs-string"},"'100%'"),a(`)

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),a(),s("span",{class:"hljs-title"},"handleHover"),a("("),s("span",{class:"hljs-params"},"hovering"),a(") ")]),a(`{
  translateY.value = hovering ? `),s("span",{class:"hljs-string"},"'0'"),a(" : "),s("span",{class:"hljs-string"},"'100%'"),a(`
}
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`

`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"div"),a(),s("span",{class:"hljs-attr"},"class"),a("="),s("span",{class:"hljs-string"},'"image-container"'),a(),s("span",{class:"hljs-attr"},"v-hover"),a("="),s("span",{class:"hljs-string"},'"handleHover"'),a(">")]),a(`
    `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-image"),a(),s("span",{class:"hljs-attr"},"src"),a("="),s("span",{class:"hljs-string"},'"https://varlet.gitee.io/varlet-ui/tree.jpeg"'),a(" />")]),a(`
    `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"div"),a(),s("span",{class:"hljs-attr"},"class"),a("="),s("span",{class:"hljs-string"},'"image-mask"'),a(),s("span",{class:"hljs-attr"},":style"),a("="),s("span",{class:"hljs-string"},'"{ transform: `translateY(${translateY})` }"'),a(">")]),a("HOVER"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"div"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"div"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`

`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"style"),a(">")]),s("span",{class:"css"},[a(`
`),s("span",{class:"hljs-selector-class"},".image-container"),a(` {
  `),s("span",{class:"hljs-attribute"},"position"),a(`: relative;
  `),s("span",{class:"hljs-attribute"},"overflow"),a(`: hidden;
  `),s("span",{class:"hljs-attribute"},"cursor"),a(`: pointer;
  `),s("span",{class:"hljs-attribute"},"border-radius"),a(": "),s("span",{class:"hljs-number"},"6px"),a(`;
}

`),s("span",{class:"hljs-selector-class"},".image-mask"),a(` {
  `),s("span",{class:"hljs-attribute"},"display"),a(`: flex;
  `),s("span",{class:"hljs-attribute"},"align-items"),a(`: center;
  `),s("span",{class:"hljs-attribute"},"justify-content"),a(`: center;
  `),s("span",{class:"hljs-attribute"},"position"),a(`: absolute;
  `),s("span",{class:"hljs-attribute"},"top"),a(": "),s("span",{class:"hljs-number"},"0"),a(`;
  `),s("span",{class:"hljs-attribute"},"left"),a(": "),s("span",{class:"hljs-number"},"0"),a(`;
  `),s("span",{class:"hljs-attribute"},"width"),a(": "),s("span",{class:"hljs-number"},"100%"),a(`;
  `),s("span",{class:"hljs-attribute"},"height"),a(": "),s("span",{class:"hljs-number"},"100%"),a(`;
  `),s("span",{class:"hljs-attribute"},"transition"),a(": all "),s("span",{class:"hljs-number"},"0.3s"),a(`;
  `),s("span",{class:"hljs-attribute"},"color"),a(": "),s("span",{class:"hljs-number"},"#fff"),a(`;
  `),s("span",{class:"hljs-attribute"},"background-color"),a(": "),s("span",{class:"hljs-built_in"},"var"),a(`(--color-primary);
  `),s("span",{class:"hljs-attribute"},"font-size"),a(": "),s("span",{class:"hljs-number"},"50px"),a(`;
}
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"style"),a(">")]),a(`
`)])],-1),y={class:"card"},k=s("h3",null,"针对不同设备选择性启用",-1),x=s("p",null,[a("考虑到在不同平台的 "),s("code",null,"hover"),a(" 效果的差异性，悬停指令可以只启用于特定的平台。")],-1),w=s("h4",null,"只在桌面端启用",-1),V=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-paper"),a(),s("span",{class:"hljs-attr"},"v-hover:desktop"),a("="),s("span",{class:"hljs-string"},`"{ color: '#fff' }"`),a('">')]),a("HOVER"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-paper"),a(">")]),a(`
`)])],-1),H=s("h4",null,"只在移动端启用",-1),E=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-paper"),a(),s("span",{class:"hljs-attr"},"v-hover:mobile"),a("="),s("span",{class:"hljs-string"},`"{ color: '#fff' }"`),a('">')]),a("HOVER"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-paper"),a(">")]),a(`
`)])],-1);function $(N,O,R,Y,B,C){const l=c("var-site-code-example");return p(),r("div",o,[i,j,s("div",u,[d,m,n(l,null,{default:t(()=>[g]),_:1})]),s("div",_,[v,f,n(l,null,{default:t(()=>[b]),_:1})]),s("div",y,[k,x,w,n(l,{"playground-ignore":""},{default:t(()=>[V]),_:1}),H,n(l,{"playground-ignore":""},{default:t(()=>[E]),_:1})])])}const q=e(h,[["render",$]]);export{q as default};
