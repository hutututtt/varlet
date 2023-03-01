import{_ as t,p as c,f as r,h as p,M as s,q as l,S as e,P as a}from"./vue-router.esm-bundler-0d52b99f.js";const h={components:{}},o={class:"varlet-site-doc"},i=s("h1",null,"Hover",-1),j=s("div",{class:"card"},[s("h3",null,"Intro"),s("p",null,"Style binding is performed when the pointer hovers the binding element, and the current hovering state can also be obtained through a function, which supports selective enablement on desktop or mobile.")],-1),d={class:"card"},u=s("h3",null,"Style Binding",-1),m=s("p",null,"The style binding is performed when the pointer hovers over the bound element, and the style binding is canceled when the pointer leaves the element.",-1),g=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-paper"),a(`
    `),s("span",{class:"hljs-attr"},"class"),a("="),s("span",{class:"hljs-string"},'"paper"'),a(`
    `),s("span",{class:"hljs-attr"},"ripple"),a(`
    `),s("span",{class:"hljs-attr"},":elevation"),a("="),s("span",{class:"hljs-string"},'"2"'),a(`
    `),s("span",{class:"hljs-attr"},":width"),a("="),s("span",{class:"hljs-string"},'"100"'),a(`
    `),s("span",{class:"hljs-attr"},":height"),a("="),s("span",{class:"hljs-string"},'"100"'),a(`
    `),s("span",{class:"hljs-attr"},"v-hover"),a("="),s("span",{class:"hljs-string"},`"{ color: '#fff', background: 'var(--color-primary)' }"`),a(`
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
`)])],-1),v={class:"card"},_=s("h3",null,"Function Binding",-1),f=s("p",null,"The function is triggered when the pointer hovers and leaves, and carries the current hover state.",-1),b=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"setup"),a(">")]),s("span",{class:"javascript"},[a(`
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
`)])],-1),y={class:"card"},k=s("h3",null,"Selectively enable for different devices",-1),w=s("p",null,[a("Considering the differences in "),s("code",null,"hover"),a(" effects on different platforms, the hover command can only be enabled on specific platforms.")],-1),x=s("h4",null,"Only enabled on desktop",-1),H=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-paper"),a(),s("span",{class:"hljs-attr"},"v-hover:desktop"),a("="),s("span",{class:"hljs-string"},`"{ color: '#fff' }"`),a('">')]),a("HOVER"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-paper"),a(">")]),a(`
`)])],-1),V=s("h4",null,"Only enabled on mobile",-1),O=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-paper"),a(),s("span",{class:"hljs-attr"},"v-hover:mobile"),a("="),s("span",{class:"hljs-string"},`"{ color: '#fff' }"`),a('">')]),a("HOVER"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-paper"),a(">")]),a(`
`)])],-1);function B(E,S,$,R,Y,C){const n=c("var-site-code-example");return r(),p("div",o,[i,j,s("div",d,[u,m,l(n,null,{default:e(()=>[g]),_:1})]),s("div",v,[_,f,l(n,null,{default:e(()=>[b]),_:1})]),s("div",y,[k,w,x,l(n,{"playground-ignore":""},{default:e(()=>[H]),_:1}),V,l(n,{"playground-ignore":""},{default:e(()=>[O]),_:1})])])}const T=t(h,[["render",B]]);export{T as default};
