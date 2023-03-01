import{_ as c,p as l,f as o,h as n,M as t,q as d,S as a,P as s,aq as r}from"./vue-router.esm-bundler-0d52b99f.js";const p={components:{}},i={class:"varlet-site-doc"},h=t("h1",null,"TimePicker",-1),m=t("div",{class:"card"},[t("h3",null,"Intro"),t("p",null,"Used to select a time.")],-1),j={class:"card"},u=t("h3",null,"Basic Usage",-1),k=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" date = ref("),t("span",{class:"hljs-string"},"'11:20'"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-time-picker"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"date"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),g={class:"card"},f=t("h3",null,"24hr Format",-1),_=t("p",null,[s("Use "),t("code",null,"format"),s(" prop to change the format of the picker. The default value of "),t("code",null,"format"),s(" is "),t("code",null,"ampm"),s(".")],-1),v=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" date = ref("),t("span",{class:"hljs-string"},"'15:20'"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-time-picker"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"date"'),s(),t("span",{class:"hljs-attr"},"format"),s("="),t("span",{class:"hljs-string"},'"24hr"'),s(),t("span",{class:"hljs-attr"},"elevation"),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),b={class:"card"},y=t("h3",null,"Show Seconds",-1),w=t("p",null,[s("use "),t("code",null,"use-seconds"),s(" prop to show seconds.")],-1),x=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" date = ref("),t("span",{class:"hljs-string"},"'17:36:22'"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-time-picker"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"date"'),s(),t("span",{class:"hljs-attr"},"format"),s("="),t("span",{class:"hljs-string"},'"24hr"'),s(),t("span",{class:"hljs-attr"},"use-seconds"),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),S={class:"card"},T=t("h3",null,"Readonly",-1),P=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" date = ref("),t("span",{class:"hljs-string"},"'07:10'"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-time-picker"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"date"'),s(),t("span",{class:"hljs-attr"},"readonly"),s(),t("span",{class:"hljs-attr"},"elevation"),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),D={class:"card"},I=t("h3",null,"Time Limit",-1),U=t("p",null,[s("Use "),t("code",null,"min"),s(", "),t("code",null,"max"),s(" and "),t("code",null,"allowed-time"),s(" prop to allow the maximum and minimum time.")],-1),V=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" date = ref("),t("span",{class:"hljs-string"},"'07:10:12'"),s(`)

`),t("span",{class:"hljs-keyword"},"const"),s(` allowedTime = {
  `),t("span",{class:"hljs-attr"},"hours"),s(": "),t("span",{class:"hljs-function"},[s("("),t("span",{class:"hljs-params"},"hour"),s(") =>")]),s(" hour % "),t("span",{class:"hljs-number"},"2"),s(" === "),t("span",{class:"hljs-number"},"0"),s(`,
  `),t("span",{class:"hljs-attr"},"minutes"),s(": "),t("span",{class:"hljs-function"},[s("("),t("span",{class:"hljs-params"},"minute"),s(") =>")]),s(" minute % "),t("span",{class:"hljs-number"},"15"),s(" !== "),t("span",{class:"hljs-number"},"0"),s(`,
  `),t("span",{class:"hljs-attr"},"seconds"),s(": "),t("span",{class:"hljs-function"},[s("("),t("span",{class:"hljs-params"},"second"),s(") =>")]),s(" second % "),t("span",{class:"hljs-number"},"2"),s(" !== "),t("span",{class:"hljs-number"},"0"),s(`,
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-time-picker"),s(`
    `),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"date"'),s(`
    `),t("span",{class:"hljs-attr"},"format"),s("="),t("span",{class:"hljs-string"},'"24hr"'),s(`
    `),t("span",{class:"hljs-attr"},"use-seconds"),s(`
    `),t("span",{class:"hljs-attr"},"min"),s("="),t("span",{class:"hljs-string"},'"2:28:38"'),s(`
    `),t("span",{class:"hljs-attr"},"max"),s("="),t("span",{class:"hljs-string"},'"19:40:22"'),s(`
    `),t("span",{class:"hljs-attr"},":allowed-time"),s("="),t("span",{class:"hljs-string"},'"allowedTime"'),s(`
  />`)]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),C={class:"card"},H=t("h3",null,"Custom",-1),z=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" date = ref("),t("span",{class:"hljs-string"},"'05:10'"),s(`)

`),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"change"),s("("),t("span",{class:"hljs-params"},"time"),s(") ")]),s(`{
  `),t("span",{class:"hljs-built_in"},"console"),s(`.log(time)
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-time-picker"),s(`
    `),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"date"'),s(`
    `),t("span",{class:"hljs-attr"},"header-color"),s("="),t("span",{class:"hljs-string"},'"purple"'),s(`
    `),t("span",{class:"hljs-attr"},"color"),s("="),t("span",{class:"hljs-string"},'"#7bb872"'),s(`
    `),t("span",{class:"hljs-attr"},"min"),s("="),t("span",{class:"hljs-string"},'"2:28:38"'),s(`
    `),t("span",{class:"hljs-attr"},"max"),s("="),t("span",{class:"hljs-string"},'"19:40:22"'),s(`
    `),t("span",{class:"hljs-attr"},"elevation"),s(`
    @`),t("span",{class:"hljs-attr"},"change"),s("="),t("span",{class:"hljs-string"},'"change"'),s(`
  />`)]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),B=r('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>Selected time（ISO 8601 format, <code>HH:mm</code> or <code>HH:mm:ss</code>）</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>format</code></td><td>Picker type, optional values <code>ampm, 24hr</code></td><td><em>string</em></td><td><code>ampm</code></td></tr><tr><td><code>color</code></td><td>Picker color</td><td><em>string</em></td><td><code>#2979ff</code></td></tr><tr><td><code>header-color</code></td><td>Color of picker header. If not specified it will use the color defined by color prop or the default picker color.</td><td><em>string</em></td><td><code>#2979ff</code></td></tr><tr><td><code>elevation</code></td><td>Whether to enable shadows</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>min</code></td><td>Minimum allowed time (ISO 8601 format)</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>max</code></td><td>Maximum allowed time (ISO 8601 format)</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>allowed-time</code></td><td>Restricts which time can be selected</td><td><em>AllowedTime</em></td><td><code>-</code></td></tr><tr><td><code>readonly</code></td><td>Readonly</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>use-seconds</code></td><td>Whether to display seconds</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="card"><h3>TimePicker AllowedTime</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>hours</code></td><td>Limit the optional <code>hour</code></td><td><em>Function: hour =&gt; boolean</em></td><td><code>-</code></td></tr><tr><td><code>minutes</code></td><td>Limit the optional <code>minute</code></td><td><em>Function: minute =&gt; boolean</em></td><td><code>-</code></td></tr><tr><td><code>seconds</code></td><td>Limit the optional <code>second</code></td><td><em>Function: second =&gt; boolean</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>arguments</th></tr></thead><tbody><tr><td><code>change</code></td><td>Emitted after time changed</td><td><code>value: string</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--time-picker-border-radius</code></td><td><code>4px</code></td></tr><tr><td><code>--time-picker-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--time-picker-min-width</code></td><td><code>290px</code></td></tr><tr><td><code>--time-picker-height</code></td><td><code>385px</code></td></tr><tr><td><code>--time-picker-title-padding</code></td><td><code>16px</code></td></tr><tr><td><code>--time-picker-title-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--time-picker-title-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--time-picker-title-time-font-size</code></td><td><code>50px</code></td></tr><tr><td><code>--time-picker-title-time-margin</code></td><td><code>0 5px</code></td></tr><tr><td><code>--time-picker-title-ampm-margin-left</code></td><td><code>5px</code></td></tr><tr><td><code>--time-picker-clock-left</code></td><td><code>27px</code></td></tr><tr><td><code>--time-picker-clock-right</code></td><td><code>27px</code></td></tr><tr><td><code>--time-picker-clock-top</code></td><td><code>27px</code></td></tr><tr><td><code>--time-picker-clock-bottom</code></td><td><code>27px</code></td></tr><tr><td><code>--time-picker-clock-container-width</code></td><td><code>270px</code></td></tr><tr><td><code>--time-picker-clock-container-height</code></td><td><code>270px</code></td></tr><tr><td><code>--time-picker-clock-container-background</code></td><td><code>#e0e0e0</code></td></tr><tr><td><code>--time-picker-clock-hand-height</code></td><td><code>calc(50% - 4px)</code></td></tr><tr><td><code>--time-picker-clock-hand-width</code></td><td><code>2px</code></td></tr><tr><td><code>--time-picker-clock-hand-bottom</code></td><td><code>50%</code></td></tr><tr><td><code>--time-picker-clock-hand-left</code></td><td><code>calc(50% - 1px)</code></td></tr><tr><td><code>--time-picker-clock-hand-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--time-picker-clock-hand-border-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--time-picker-clock-hand-before-width</code></td><td><code>10px</code></td></tr><tr><td><code>--time-picker-clock-hand-before-height</code></td><td><code>10px</code></td></tr><tr><td><code>--time-picker-clock-hand-before-border-width</code></td><td><code>2px</code></td></tr><tr><td><code>--time-picker-clock-hand-after-width</code></td><td><code>4px</code></td></tr><tr><td><code>--time-picker-clock-hand-after-height</code></td><td><code>4px</code></td></tr><tr><td><code>--time-picker-clock-item-height</code></td><td><code>32px</code></td></tr><tr><td><code>--time-picker-clock-item-width</code></td><td><code>32px</code></td></tr><tr><td><code>--time-picker-clock-item-active-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--time-picker-clock-item-active-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--time-picker-clock-item-disable-color</code></td><td><code>rgba(0, 0, 0, 0.26)</code></td></tr><tr><td><code>--time-picker-inner-left</code></td><td><code>36px</code></td></tr><tr><td><code>--time-picker-inner-right</code></td><td><code>36px</code></td></tr><tr><td><code>--time-picker-inner-top</code></td><td><code>36px</code></td></tr><tr><td><code>--time-picker-inner-bottom</code></td><td><code>36px</code></td></tr><tr><td><code>--time-picker-body-background</code></td><td><code>transparent</code></td></tr></tbody></table></div>',5);function E(F,L,N,$,A,M){const e=l("var-site-code-example");return o(),n("div",i,[h,m,t("div",j,[u,d(e,null,{default:a(()=>[k]),_:1})]),t("div",g,[f,_,d(e,null,{default:a(()=>[v]),_:1})]),t("div",b,[y,w,d(e,null,{default:a(()=>[x]),_:1})]),t("div",S,[T,d(e,null,{default:a(()=>[P]),_:1})]),t("div",D,[I,U,d(e,null,{default:a(()=>[V]),_:1})]),t("div",C,[H,d(e,null,{default:a(()=>[z]),_:1})]),B])}const R=c(p,[["render",E]]);export{R as default};
