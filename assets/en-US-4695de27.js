import{_ as e,p as c,f as d,h as p,M as a,q as t,S as n,aq as r,P as s}from"./vue-router-0bbd6486.js";const o={components:{}},h={class:"varlet-site-doc"},j=a("h1",null,"Select",-1),i=a("div",{class:"card"},[a("h3",null,"Intro"),a("p",null,"Display and select the content through the drop-down menu.")],-1),g={class:"card"},m=a("h3",null,"Standard Variant",-1),v=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` value = ref()
`),a("span",{class:"hljs-keyword"},"const"),s(` value2 = ref()
`),a("span",{class:"hljs-keyword"},"const"),s(` value3 = ref()
`),a("span",{class:"hljs-keyword"},"const"),s(` value4 = ref()
`),a("span",{class:"hljs-keyword"},"const"),s(` value5 = ref()
`),a("span",{class:"hljs-keyword"},"const"),s(` value6 = ref()
`),a("span",{class:"hljs-keyword"},"const"),s(` value7 = ref([])
`),a("span",{class:"hljs-keyword"},"const"),s(` value8 = ref([])
`),a("span",{class:"hljs-keyword"},"const"),s(` value9 = ref()
`),a("span",{class:"hljs-keyword"},"const"),s(` value10 = ref([])
`),a("span",{class:"hljs-keyword"},"const"),s(` value11 = ref()
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-space"),s(),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"column"'),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"large"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-select"),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Please select one the options"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Eat"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Sleep"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-select"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-select"),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Label relation value"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value2"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Eat"'),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"1"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Sleep"'),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"2"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-select"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"relation"'),s(">")]),s("The current selection is: {{ value2 }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-select"),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Readonly"'),s(),a("span",{class:"hljs-attr"},"readonly"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value3"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Eat"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Sleep"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-select"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-select"),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Disabled"'),s(),a("span",{class:"hljs-attr"},"disabled"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value4"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Eat"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Sleep"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-select"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-select"),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Clearable"'),s(),a("span",{class:"hljs-attr"},"clearable"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value5"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Eat"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Sleep"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-select"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-select"),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Custom Icon"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value6"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"default"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Eat"'),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"selected-icon"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"cake-variant"'),s(" />")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(">")]),s("Eat"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-option"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Sleep"'),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"selected-icon"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"weather-night"'),s(" />")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(">")]),s("Sleep"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-option"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"selected"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"selected-icon"'),s(),a("span",{class:"hljs-attr"},":name"),s("="),a("span",{class:"hljs-string"},`"value6 === 'Eat' ? 'cake-variant' : 'weather-night'"`),s(" />")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(">")]),s("{{ value6 }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"prepend-icon"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"prepend-icon"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"github"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"append-icon"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"append-icon"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"github"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"arrow-icon"),s("="),a("span",{class:"hljs-string"},'"{ focus }"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"chevron-down"'),s(),a("span",{class:"hljs-attr"},":transition"),s("="),a("span",{class:"hljs-string"},'"300"'),s(),a("span",{class:"hljs-attr"},":class"),s("="),a("span",{class:"hljs-string"},`"{ 'arrow-icon-rotate': focus }"`),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-select"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-select"),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Multiple Selection"'),s(),a("span",{class:"hljs-attr"},"multiple"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value7"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Eat"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Sleep"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Play game"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Coding"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-select"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-select"),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Multiple choice of paper style"'),s(),a("span",{class:"hljs-attr"},"chip"),s(),a("span",{class:"hljs-attr"},"multiple"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value8"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Eat"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Sleep"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Play game"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Coding"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-select"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-select"),s(`
      `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Validate"'),s(`
      `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[(v) => v === 'Rest' || 'You must choose to rest']"`),s(`
      `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value9"'),s(`
    >`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Eat"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Sleep"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Rest"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-select"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-select"),s(`
      `),a("span",{class:"hljs-attr"},"multiple"),s(`
      `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Multiple Validate"'),s(`
      `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[(v) => v.length >= 2 || 'You select at least two options']"`),s(`
      `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value10"'),s(`
    >`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Eat"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Sleep"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Play game"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Coding"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-select"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-select"),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"small"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Small Size"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value11"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Eat"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Sleep"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-select"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".selected-icon"),s(` {
  `),a("span",{class:"hljs-attribute"},"margin-right"),s(": "),a("span",{class:"hljs-number"},"6px"),s(`;
}

`),a("span",{class:"hljs-selector-class"},".prepend-icon"),s(` {
  `),a("span",{class:"hljs-attribute"},"margin-right"),s(": "),a("span",{class:"hljs-number"},"6px"),s(`;
}

`),a("span",{class:"hljs-selector-class"},".append-icon"),s(` {
  `),a("span",{class:"hljs-attribute"},"margin-left"),s(": "),a("span",{class:"hljs-number"},"6px"),s(`;
}

`),a("span",{class:"hljs-selector-class"},".arrow-icon-rotate"),s(` {
  `),a("span",{class:"hljs-attribute"},"transform"),s(": "),a("span",{class:"hljs-built_in"},"rotate"),s("("),a("span",{class:"hljs-number"},"180deg"),s(`);
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),u={class:"card"},b=a("h3",null,"Outlined Variant",-1),f=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` value = ref()
`),a("span",{class:"hljs-keyword"},"const"),s(` value2 = ref()
`),a("span",{class:"hljs-keyword"},"const"),s(` value3 = ref()
`),a("span",{class:"hljs-keyword"},"const"),s(` value4 = ref()
`),a("span",{class:"hljs-keyword"},"const"),s(` value5 = ref()
`),a("span",{class:"hljs-keyword"},"const"),s(` value6 = ref()
`),a("span",{class:"hljs-keyword"},"const"),s(` value7 = ref([])
`),a("span",{class:"hljs-keyword"},"const"),s(` value8 = ref([])
`),a("span",{class:"hljs-keyword"},"const"),s(` value9 = ref()
`),a("span",{class:"hljs-keyword"},"const"),s(` value10 = ref([])
`),a("span",{class:"hljs-keyword"},"const"),s(` value11 = ref()
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-space"),s(),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"column"'),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"large"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-select"),s(),a("span",{class:"hljs-attr"},"variant"),s("="),a("span",{class:"hljs-string"},'"outlined"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Please select one the options"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Eat"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Sleep"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-select"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-select"),s(),a("span",{class:"hljs-attr"},"variant"),s("="),a("span",{class:"hljs-string"},'"outlined"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Label relation value"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value2"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Eat"'),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"1"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Sleep"'),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"2"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-select"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"relation"'),s(">")]),s("The current selection is: {{ value2 }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-select"),s(),a("span",{class:"hljs-attr"},"variant"),s("="),a("span",{class:"hljs-string"},'"outlined"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Readonly"'),s(),a("span",{class:"hljs-attr"},"readonly"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value3"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Eat"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Sleep"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-select"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-select"),s(),a("span",{class:"hljs-attr"},"variant"),s("="),a("span",{class:"hljs-string"},'"outlined"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Disabled"'),s(),a("span",{class:"hljs-attr"},"disabled"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value4"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Eat"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Sleep"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-select"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-select"),s(),a("span",{class:"hljs-attr"},"variant"),s("="),a("span",{class:"hljs-string"},'"outlined"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Clearable"'),s(),a("span",{class:"hljs-attr"},"clearable"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value5"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Eat"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Sleep"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-select"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-select"),s(),a("span",{class:"hljs-attr"},"variant"),s("="),a("span",{class:"hljs-string"},'"outlined"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Custom Icon"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value6"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"default"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Eat"'),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"selected-icon"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"cake-variant"'),s(" />")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(">")]),s("Eat"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-option"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Sleep"'),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"selected-icon"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"weather-night"'),s(" />")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(">")]),s("Sleep"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-option"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"selected"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"selected-icon"'),s(),a("span",{class:"hljs-attr"},":name"),s("="),a("span",{class:"hljs-string"},`"value6 === 'Eat' ? 'cake-variant' : 'weather-night'"`),s(" />")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(">")]),s("{{ value6 }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"prepend-icon"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"prepend-icon"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"github"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"append-icon"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"append-icon"'),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"github"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"arrow-icon"),s("="),a("span",{class:"hljs-string"},'"{ focus }"'),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"chevron-down"'),s(),a("span",{class:"hljs-attr"},":transition"),s("="),a("span",{class:"hljs-string"},'"300"'),s(),a("span",{class:"hljs-attr"},":class"),s("="),a("span",{class:"hljs-string"},`"{ 'arrow-icon-rotate': focus }"`),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-select"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-select"),s(),a("span",{class:"hljs-attr"},"variant"),s("="),a("span",{class:"hljs-string"},'"outlined"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Multiple Selection"'),s(),a("span",{class:"hljs-attr"},"multiple"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value7"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Eat"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Sleep"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Play game"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Coding"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-select"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-select"),s(),a("span",{class:"hljs-attr"},"variant"),s("="),a("span",{class:"hljs-string"},'"outlined"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Multiple choice of paper style"'),s(),a("span",{class:"hljs-attr"},"chip"),s(),a("span",{class:"hljs-attr"},"multiple"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value8"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Eat"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Sleep"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Play game"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Coding"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-select"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-select"),s(`
      `),a("span",{class:"hljs-attr"},"variant"),s("="),a("span",{class:"hljs-string"},'"outlined"'),s(`
      `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Validate"'),s(`
      `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[(v) => v === 'Rest' || 'You must choose to rest']"`),s(`
      `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value9"'),s(`
    >`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Eat"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Sleep"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Rest"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-select"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-select"),s(`
      `),a("span",{class:"hljs-attr"},"variant"),s("="),a("span",{class:"hljs-string"},'"outlined"'),s(`
      `),a("span",{class:"hljs-attr"},"multiple"),s(`
      `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Multiple Validate"'),s(`
      `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[(v) => v.length >= 2 || 'You select at least two options']"`),s(`
      `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value10"'),s(`
    >`)]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Eat"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Sleep"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Play game"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Coding"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-select"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-select"),s(),a("span",{class:"hljs-attr"},"variant"),s("="),a("span",{class:"hljs-string"},'"outlined"'),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"small"'),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"Small Size"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value11"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Eat"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-option"),s(),a("span",{class:"hljs-attr"},"label"),s("="),a("span",{class:"hljs-string"},'"Sleep"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-select"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".selected-icon"),s(` {
  `),a("span",{class:"hljs-attribute"},"margin-right"),s(": "),a("span",{class:"hljs-number"},"6px"),s(`;
}

`),a("span",{class:"hljs-selector-class"},".prepend-icon"),s(` {
  `),a("span",{class:"hljs-attribute"},"margin-right"),s(": "),a("span",{class:"hljs-number"},"6px"),s(`;
}

`),a("span",{class:"hljs-selector-class"},".append-icon"),s(` {
  `),a("span",{class:"hljs-attribute"},"margin-left"),s(": "),a("span",{class:"hljs-number"},"6px"),s(`;
}

`),a("span",{class:"hljs-selector-class"},".arrow-icon-rotate"),s(` {
  `),a("span",{class:"hljs-attribute"},"transform"),s(": "),a("span",{class:"hljs-built_in"},"rotate"),s("("),a("span",{class:"hljs-number"},"180deg"),s(`);
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),y=r('<h2>API</h2><div class="card"><h3>Props</h3><h4>Select Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>The value of the binding</td><td><em>any | any[]</em></td><td><code>-</code></td></tr><tr><td><code>placeholder</code></td><td>placeholder</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>multiple</code></td><td>Whether to enable multiple selection</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>offset-y</code></td><td>The vertical offset of the drop-down menu</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>chip</code></td><td>Whether to use chip style (multiple choices only)</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>line</code></td><td>Whether to display a dividing line</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>hint</code></td><td>Whether to use placeholders as prompts</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>text-color</code></td><td>Text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>focus-color</code></td><td>The primary color in focus</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>blur-color</code></td><td>The primary color in blur</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>readonly</code></td><td>Whether the readonly</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>Whether the disabled</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>clearable</code></td><td>Whether the clearable</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>validate-trigger</code></td><td>Timing to trigger validation， Optional value is <code>onFocus</code> <code>onBlur</code> <code>onChange</code> <code>onClick</code> <code>onClear</code> <code>onClose</code></td><td><em>ValidateTriggers[]</em></td><td><code>[&#39;onChange&#39;, &#39;onClear&#39;, &#39;onClose&#39;]</code></td></tr><tr><td><code>rules</code></td><td>The validation rules，Returns <code>true</code> to indicate that the validation passed，The remaining values are converted to text as user prompts</td><td><em>Array&lt;(v: any | any[]) =&gt; any&gt;</em></td><td><code>-</code></td></tr></tbody></table><h4>Option Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>label</code></td><td>The text that the option displays</td><td><em>any</em></td><td><code>-</code></td></tr><tr><td><code>value</code></td><td>The value of the option binding</td><td><em>any</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Methods</h3><h4>Select Methods</h4><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>focus</code></td><td>Focus</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>blur</code></td><td>Blur</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>validate</code></td><td>Trigger validate</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>Clearing validate messages</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>Clear the value of the binding (single set to &#39;undefined&#39;, multiple set to &#39;[]&#39;) and the validation messages</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><h4>Select Events</h4><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>focus</code></td><td>Trigger while focusing</td><td><code>event: Event</code></td></tr><tr><td><code>blur</code></td><td>Triggered when out of focus</td><td><code>event: Event</code></td></tr><tr><td><code>click</code></td><td>Triggered on click</td><td><code>event: Event</code></td></tr><tr><td><code>clear</code></td><td>Triggered on clearance</td><td><code>value: any | any[]</code></td></tr><tr><td><code>close</code></td><td>Triggered on close</td><td><code>value: any | any[]</code></td></tr><tr><td><code>change</code></td><td>Triggered when change</td><td><code>value: any | any[]</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><h4>Select Slots</h4><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>selected</code></td><td>Select the contents of the area</td><td><code>-</code></td></tr><tr><td><code>prepend-icon</code></td><td>Prepend icon</td><td><code>-</code></td></tr><tr><td><code>append-icon</code></td><td>Append icon</td><td><code>-</code></td></tr><tr><td><code>arrow-icon</code></td><td>Arrow icon</td><td><code>focus: boolean</code> Whether to focus</td></tr></tbody></table><h4>Option Slots</h4><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Options to display the content</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><h4>Select Variables</h4><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--field-decorator-text-color</code></td><td><code>#555</code></td></tr><tr><td><code>--field-decorator-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--field-decorator-blur-color</code></td><td><code>#888</code></td></tr><tr><td><code>--field-decorator-focus-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--field-decorator-placeholder-size</code></td><td><code>16px</code></td></tr><tr><td><code>--field-decorator-icon-size</code></td><td><code>20px</code></td></tr><tr><td><code>--field-decorator-line-size</code></td><td><code>1px</code></td></tr><tr><td><code>--field-decorator-line-focus-size</code></td><td><code>2px</code></td></tr><tr><td><code>--field-decorator-disabled-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--field-decorator-standard-normal-padding-top</code></td><td><code>20px</code></td></tr><tr><td><code>--field-decorator-standard-normal-padding-bottom</code></td><td><code>4px</code></td></tr><tr><td><code>--field-decorator-standard-normal-icon-padding</code></td><td><code>20px 0 4px</code></td></tr><tr><td><code>--field-decorator-standard-small-padding-top</code></td><td><code>16px</code></td></tr><tr><td><code>--field-decorator-standard-small-padding-bottom</code></td><td><code>4px</code></td></tr><tr><td><code>--field-decorator-standard-small-icon-padding</code></td><td><code>16px 0 4px</code></td></tr><tr><td><code>--field-decorator-outlined-normal-padding-top</code></td><td><code>16px</code></td></tr><tr><td><code>--field-decorator-outlined-normal-padding-bottom</code></td><td><code>16px</code></td></tr><tr><td><code>--field-decorator-outlined-normal-padding-left</code></td><td><code>16px</code></td></tr><tr><td><code>--field-decorator-outlined-normal-padding-right</code></td><td><code>16px</code></td></tr><tr><td><code>--field-decorator-outlined-normal-placeholder-space</code></td><td><code>4px</code></td></tr><tr><td><code>--field-decorator-outlined-normal-icon-padding</code></td><td><code>16px 0 16px</code></td></tr><tr><td><code>--field-decorator-outlined-small-padding-top</code></td><td><code>8px</code></td></tr><tr><td><code>--field-decorator-outlined-small-padding-bottom</code></td><td><code>8px</code></td></tr><tr><td><code>--field-decorator-outlined-small-padding-left</code></td><td><code>12px</code></td></tr><tr><td><code>--field-decorator-outlined-small-padding-right</code></td><td><code>12px</code></td></tr><tr><td><code>--field-decorator-outlined-small-placeholder-space</code></td><td><code>2px</code></td></tr><tr><td><code>--field-decorator-outlined-small-icon-padding</code></td><td><code>8px 0 8px</code></td></tr><tr><td><code>--select-scroller-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--select-scroller-padding</code></td><td><code>6px 0</code></td></tr><tr><td><code>--select-scroller-max-height</code></td><td><code>278px</code></td></tr><tr><td><code>--select-chip-margin</code></td><td><code>5px 5px 0</code></td></tr><tr><td><code>--select-arrow-size</code></td><td><code>20px</code></td></tr><tr><td><code>--select-standard-scroller-margin</code></td><td><code>calc(var(--input-decorator-placeholder-size) * 0.75 + 8px) 0 0 0</code></td></tr><tr><td><code>--select-outlined-scroller-margin</code></td><td><code>0</code></td></tr></tbody></table><h4>Option Variables</h4><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--option-height</code></td><td><code>38px</code></td></tr><tr><td><code>--option-padding</code></td><td><code>0 12px</code></td></tr><tr><td><code>--option-selected-background</code></td><td><code>var(--input-decorator-focus-color)</code></td></tr></tbody></table></div>',6);function x(S,w,_,k,E,T){const l=c("var-site-code-example");return d(),p("div",h,[j,i,a("div",g,[m,t(l,null,{default:n(()=>[v]),_:1})]),a("div",u,[b,t(l,null,{default:n(()=>[f]),_:1})]),y])}const P=e(o,[["render",x]]);export{P as default};
