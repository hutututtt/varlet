import{_ as e,p as c,f as h,h as d,M as a,q as t,S as n,aq as p,P as s}from"./vue-router.esm-bundler-0d52b99f.js";const r={components:{}},j={class:"varlet-site-doc"},o=a("h1",null,"表格",-1),m=a("div",{class:"card"},[a("h3",null,"介绍"),a("p",null,"一个极简的表格，当你需要以表格的形式展示一些数据的时候，可能会用的上它。")],-1),i={class:"card"},g=a("h3",null,"基本使用",-1),b=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-table"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"thead"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"tr"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"th"),s(">")]),s("姓名"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"th"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"th"),s(">")]),s("数学"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"th"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"th"),s(">")]),s("英语"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"th"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"tr"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"thead"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"tbody"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"tr"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"td"),s(">")]),s("耗子君"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"td"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"td"),s(">")]),s("124"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"td"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"td"),s(">")]),s("38"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"td"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"tr"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"tr"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"td"),s(">")]),s("火猫桑"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"td"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"td"),s(">")]),s("100"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"td"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"td"),s(">")]),s("135"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"td"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"tr"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"tbody"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-table"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),u={class:"card"},_=a("h3",null,"尾部插槽",-1),f=a("p",null,"可以在尾部插槽中插入一些东西，最常见的是插入分页组件。",-1),y=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" list = ref(gen("),a("span",{class:"hljs-number"},"1"),s(", "),a("span",{class:"hljs-number"},"10"),s(`))

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"gen"),s("("),a("span",{class:"hljs-params"},"current, size"),s(") ")]),s(`{
  `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-built_in"},"Array"),s(".from({ "),a("span",{class:"hljs-attr"},"length"),s(": size }).map("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"_, index"),s(") =>")]),s(` {
    `),a("span",{class:"hljs-keyword"},"const"),s(" id = (current - "),a("span",{class:"hljs-number"},"1"),s(") * size + index + "),a("span",{class:"hljs-number"},"1"),s(`

    `),a("span",{class:"hljs-keyword"},"return"),s(` {
      `),a("span",{class:"hljs-attr"},"name"),s(": "),a("span",{class:"hljs-string"},[s("`Name "),a("span",{class:"hljs-subst"},"${id}"),s("`")]),s(`,
      `),a("span",{class:"hljs-attr"},"math"),s(`: id,
      `),a("span",{class:"hljs-attr"},"english"),s(`: id,
    }
  })
}

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"get"),s("("),a("span",{class:"hljs-params"},"current, size"),s(") ")]),s(`{
  list.value = gen(current, size)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-table"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"thead"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"tr"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"th"),s(">")]),s("姓名"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"th"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"th"),s(">")]),s("数学"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"th"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"th"),s(">")]),s("英语"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"th"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"tr"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"thead"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"tbody"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"tr"),s(),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"l in list"'),s(),a("span",{class:"hljs-attr"},":key"),s("="),a("span",{class:"hljs-string"},'"l.name"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"td"),s(">")]),s("{{ l.name }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"td"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"td"),s(">")]),s("{{ l.math }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"td"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"td"),s(">")]),s("{{ l.english }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"td"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"tr"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"tbody"),s(">")]),s(`

    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"footer"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"table-example-footer"'),s(">")]),s(`
        `),a("span",{class:"hljs-comment"},"<!-- 手机预览模式下分页使用了simple为true的模式，对小屏设备更友好 -->"),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-pagination"),s(`
          `),a("span",{class:"hljs-attr"},":simple"),s("="),a("span",{class:"hljs-string"},'"false"'),s(`
          `),a("span",{class:"hljs-attr"},":current"),s("="),a("span",{class:"hljs-string"},'"1"'),s(`
          `),a("span",{class:"hljs-attr"},":total"),s("="),a("span",{class:"hljs-string"},'"100"'),s(`
          `),a("span",{class:"hljs-attr"},":size-option"),s("="),a("span",{class:"hljs-string"},'"[5, 10]"'),s(`
          @`),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"get"'),s(`
        />`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-table"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".table-example-footer"),s(`  {
  `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
  `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: flex-end;
  `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"60px"),s(`;
  `),a("span",{class:"hljs-attribute"},"padding"),s(": "),a("span",{class:"hljs-number"},"0"),s(),a("span",{class:"hljs-number"},"16px"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),v=p('<h2>API</h2><div class="card"><h3>属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>full-width</code></td><td><code>table</code> 的宽度(包含可滚动部分)</td><td><em>string | number</em></td><td><code>100%</code></td></tr></tbody></table></div><div class="card"><h3>插槽</h3><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>Table的内容</td><td><code>-</code></td></tr><tr><td><code>footer</code></td><td>Table尾部内容</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>样式变量</h3><p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--table-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--table-border-radius</code></td><td><code>2px</code></td></tr><tr><td><code>--table-thead-border-bottom</code></td><td><code>thin solid rgba(0, 0, 0, 0.12)</code></td></tr><tr><td><code>--table-thead-th-text-color</code></td><td><code>rgba(0, 0, 0, 0.6)</code></td></tr><tr><td><code>--table-thead-th-font-size</code></td><td><code>14px</code></td></tr><tr><td><code>--table-thead-tr-border-bottom</code></td><td><code>thin solid rgba(0, 0, 0, 0.12)</code></td></tr><tr><td><code>--table-tbody-tr-hover-background</code></td><td><code>#eee</code></td></tr><tr><td><code>--table-tbody-tr-border-bottom</code></td><td><code>thin solid rgba(0, 0, 0, 0.12)</code></td></tr><tr><td><code>--table-tbody-td-font-size</code></td><td><code>16px</code></td></tr><tr><td><code>--table-row-height</code></td><td><code>46px</code></td></tr><tr><td><code>--table-row-padding</code></td><td><code>0 16px</code></td></tr><tr><td><code>--table-footer-border-top</code></td><td><code>thin solid rgba(0, 0, 0, 0.12)</code></td></tr></tbody></table></div>',4);function x(k,w,z,N,$,C){const l=c("var-site-code-example");return h(),d("div",j,[o,m,a("div",i,[g,t(l,null,{default:n(()=>[b]),_:1})]),a("div",u,[_,f,t(l,null,{default:n(()=>[y]),_:1})]),v])}const B=e(r,[["render",x]]);export{B as default};
