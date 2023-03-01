import{_ as e,p as c,f as d,h as r,M as a,q as t,S as l,P as s,aq as o}from"./vue-router.esm-bundler-0d52b99f.js";const h={components:{}},p={class:"varlet-site-doc"},j=a("h1",null,"多列选择器",-1),i=a("div",{class:"card"},[a("h3",null,"介绍"),a("p",null,"提供了函数和组件两种调用方式。同时支持级联模式，可以处理多级联动。")],-1),m=a("h2",null,"函数调用",-1),u={class:"card"},b=a("h3",null,"单列选择",-1),y=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Picker } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" columns = ["),a("span",{class:"hljs-built_in"},"Array"),s(".from({ "),a("span",{class:"hljs-attr"},"length"),s(": "),a("span",{class:"hljs-number"},"20"),s(" }).map("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"_, index"),s(") =>")]),s(` index)]

`),a("span",{class:"hljs-keyword"},"async"),s(),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"picker"),s("("),a("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),a("span",{class:"hljs-keyword"},"await"),s(` Picker(columns)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"picker"'),s(">")]),s("单列选择"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),g={class:"card"},k=a("h3",null,"多列选择",-1),w=a("p",null,[s("Picker 传入一个二维数组 "),a("code",null,"columns"),s(", "),a("code",null,"columns"),s(" 的每一项就是每一列的内容。 Picker 返回用户触发状态，选择的文本，选择的下标。")],-1),f=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Picker } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` columns = [
  `),a("span",{class:"hljs-built_in"},"Array"),s(".from({ "),a("span",{class:"hljs-attr"},"length"),s(": "),a("span",{class:"hljs-number"},"20"),s(" }).map("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"_, index"),s(") =>")]),s(` index),
  `),a("span",{class:"hljs-built_in"},"Array"),s(".from({ "),a("span",{class:"hljs-attr"},"length"),s(": "),a("span",{class:"hljs-number"},"20"),s(" }).map("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"_, index"),s(") =>")]),s(` index),
  `),a("span",{class:"hljs-built_in"},"Array"),s(".from({ "),a("span",{class:"hljs-attr"},"length"),s(": "),a("span",{class:"hljs-number"},"20"),s(" }).map("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"_, index"),s(") =>")]),s(` index)
]

`),a("span",{class:"hljs-keyword"},"async"),s(),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"picker"),s("("),a("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),a("span",{class:"hljs-keyword"},"const"),s(" { state, texts, indexes } = "),a("span",{class:"hljs-keyword"},"await"),s(` Picker(columns)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"picker"'),s(">")]),s("多列选择"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),x={class:"card"},_=a("h3",null,"级联选择",-1),v=a("p",null,[s("Picker 传入一个 "),a("code",null,"cascade"),s(" 属性开启级联滚动。 组件库内置提供了省市区三级联动，引入 "),a("code",null,"area.json"),s("。")],-1),C=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Picker } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" columns "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui/json/area.json'"),s(`

`),a("span",{class:"hljs-keyword"},"async"),s(),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"picker"),s("("),a("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),a("span",{class:"hljs-keyword"},"const"),s(" { state, texts, indexes } = "),a("span",{class:"hljs-keyword"},"await"),s(` Picker({
    `),a("span",{class:"hljs-attr"},"cascade"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`,
    columns
  })
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"picker"'),s(">")]),s("级联选择"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),D={class:"card"},P=a("h3",null,"文本格式化",-1),Y=a("p",null,[s("Picker 传入一个 "),a("code",null,"textFormatter"),s(" 属性可对文本进行自定义。 "),a("code",null,"textFormatter"),s(" 接受两个参数, 第一个参数 "),a("code",null,"text"),s(" 是当前文本, 第二个参数 "),a("code",null,"columnIndex"),s(" 是当前文本所在列的下标。 下面是年月日选择的案例。")],-1),I=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Picker } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" genCounts = "),a("span",{class:"hljs-function"},[a("span",{class:"hljs-params"},"length"),s(" =>")]),s(),a("span",{class:"hljs-built_in"},"Array"),s(".from({ length }, "),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"_, index"),s(") =>")]),s(" index + "),a("span",{class:"hljs-number"},"1"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" months = genCounts("),a("span",{class:"hljs-number"},"12"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" leapYearFebruaryDates = genCounts("),a("span",{class:"hljs-number"},"29"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" februaryDates = genCounts("),a("span",{class:"hljs-number"},"28"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" oddMonthDates = genCounts("),a("span",{class:"hljs-number"},"31"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" evenMonthDates = genCounts("),a("span",{class:"hljs-number"},"30"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" columns = genColumns("),a("span",{class:"hljs-number"},"1970"),s(", "),a("span",{class:"hljs-number"},"2100"),s(`)

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"isOddMonth"),s("("),a("span",{class:"hljs-params"},"month"),s(") ")]),s(`{ 
  `),a("span",{class:"hljs-keyword"},"return"),s(" ["),a("span",{class:"hljs-number"},"1"),s(", "),a("span",{class:"hljs-number"},"3"),s(", "),a("span",{class:"hljs-number"},"5"),s(", "),a("span",{class:"hljs-number"},"7"),s(", "),a("span",{class:"hljs-number"},"8"),s(", "),a("span",{class:"hljs-number"},"10"),s(", "),a("span",{class:"hljs-number"},"12"),s(`].includes(month) 
}

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"isLeapYear"),s("("),a("span",{class:"hljs-params"},"year"),s(") ")]),s(`{
  `),a("span",{class:"hljs-keyword"},"return"),s(" (year % "),a("span",{class:"hljs-number"},"4"),s(" === "),a("span",{class:"hljs-number"},"0"),s(" && year % "),a("span",{class:"hljs-number"},"100"),s(" !== "),a("span",{class:"hljs-number"},"0"),s(") || year % "),a("span",{class:"hljs-number"},"400"),s(" === "),a("span",{class:"hljs-number"},"0"),s(`
}

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"genDates"),s("("),a("span",{class:"hljs-params"},"year, month"),s(") ")]),s(`{
  `),a("span",{class:"hljs-keyword"},"if"),s(" (isLeapYear(year) && month === "),a("span",{class:"hljs-number"},"2"),s(`) {
    `),a("span",{class:"hljs-keyword"},"return"),s(` leapYearFebruaryDates
  }

  `),a("span",{class:"hljs-keyword"},"if"),s(" (!isLeapYear(year) && month === "),a("span",{class:"hljs-number"},"2"),s(`) {
    `),a("span",{class:"hljs-keyword"},"return"),s(` februaryDates
  }

  `),a("span",{class:"hljs-keyword"},"if"),s(` (isOddMonth(month)) {
    `),a("span",{class:"hljs-keyword"},"return"),s(` oddMonthDates
  }

  `),a("span",{class:"hljs-keyword"},"return"),s(` evenMonthDates
}

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"genColumns"),s("("),a("span",{class:"hljs-params"},"startYear, endYear"),s(") ")]),s(`{
  `),a("span",{class:"hljs-keyword"},"const"),s(` columns = []
  
  `),a("span",{class:"hljs-keyword"},"for"),s(" ("),a("span",{class:"hljs-keyword"},"let"),s(` year = startYear; year < endYear; year++) {
    columns.push({
      `),a("span",{class:"hljs-attr"},"text"),s(`: year,
      `),a("span",{class:"hljs-attr"},"children"),s(": months.map("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"month"),s(") =>")]),s(` {
        `),a("span",{class:"hljs-keyword"},"return"),s(` {
          `),a("span",{class:"hljs-attr"},"text"),s(`: month,
          `),a("span",{class:"hljs-attr"},"children"),s(": genDates(year, month).map("),a("span",{class:"hljs-function"},[a("span",{class:"hljs-params"},"date"),s(" =>")]),s(" ({ "),a("span",{class:"hljs-attr"},"text"),s(`: date }))
        }
      })
    })
  }

  `),a("span",{class:"hljs-keyword"},"return"),s(` columns
}

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"textFormatter"),s("("),a("span",{class:"hljs-params"},"text, columnIndex"),s(") ")]),s(`{
  `),a("span",{class:"hljs-keyword"},"if"),s(" (columnIndex === "),a("span",{class:"hljs-number"},"0"),s(") "),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${text}"),s("年`")]),s(`
  `),a("span",{class:"hljs-keyword"},"else"),s(),a("span",{class:"hljs-keyword"},"if"),s(" (columnIndex === "),a("span",{class:"hljs-number"},"1"),s(") "),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${text}"),s("月`")]),s(`
  `),a("span",{class:"hljs-keyword"},"else"),s(),a("span",{class:"hljs-keyword"},"if"),s(" (columnIndex === "),a("span",{class:"hljs-number"},"2"),s(") "),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${text}"),s("日`")]),s(`
}

`),a("span",{class:"hljs-keyword"},"async"),s(),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"picker"),s("("),a("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),a("span",{class:"hljs-keyword"},"const"),s(" { state, texts, indexes } = "),a("span",{class:"hljs-keyword"},"await"),s(` Picker({
    `),a("span",{class:"hljs-attr"},"cascade"),s(": "),a("span",{class:"hljs-literal"},"true"),s(`,
    columns,
    textFormatter,
  })
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"picker"'),s(">")]),s("文本格式化"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),T={class:"card"},M=a("h3",null,"值映射",-1),A=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Picker, Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` rawColumns = [
  [
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'灰烬之灵'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"1"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'风暴之灵'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"2"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'大地之灵'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'虚空之灵'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"4"),s(` },
  ],
  [
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'灰烬之灵'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"1"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'风暴之灵'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"2"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'大地之灵'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'虚空之灵'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"4"),s(` },
  ],
  [
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'灰烬之灵'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"1"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'风暴之灵'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"2"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'大地之灵'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'虚空之灵'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"4"),s(` },
  ]
]
`),a("span",{class:"hljs-keyword"},"const"),s(" normalizedColumns = rawColumns.map("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"column"),s(") =>")]),s(" column.map("),a("span",{class:"hljs-function"},[a("span",{class:"hljs-params"},"option"),s(" =>")]),s(` option.label))

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"handleChange"),s("("),a("span",{class:"hljs-params"},"_, [i1, i2, i3]"),s(") ")]),s(`{
  `),a("span",{class:"hljs-keyword"},"const"),s(` [c1, c2, c3] = rawColumns
  `),a("span",{class:"hljs-keyword"},"const"),s(` ids = [c1[i1].id, c2[i2].id, c3[i3].id]
  Snackbar(ids.toString())
}

`),a("span",{class:"hljs-keyword"},"async"),s(),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"picker"),s("("),a("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),a("span",{class:"hljs-keyword"},"const"),s(" { state, texts, indexes } = "),a("span",{class:"hljs-keyword"},"await"),s(` Picker({
    `),a("span",{class:"hljs-attr"},"columns"),s(`: normalizedColumns,
    `),a("span",{class:"hljs-attr"},"onChange"),s(`: handleChange
  })
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(),a("span",{class:"hljs-attr"},"block"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"picker"'),s(">")]),s("值的映射"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),F=a("h2",null,"组件调用",-1),$={class:"card"},N=a("h3",null,"单列选择",-1),S=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" columns = ref(["),a("span",{class:"hljs-built_in"},"Array"),s(".from({ "),a("span",{class:"hljs-attr"},"length"),s(": "),a("span",{class:"hljs-number"},"20"),s(" }).map("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"_, index"),s(") =>")]),s(` index)])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-picker"),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),z={class:"card"},B=a("h3",null,"多列选择",-1),O=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` columns = ref([
  `),a("span",{class:"hljs-built_in"},"Array"),s(".from({ "),a("span",{class:"hljs-attr"},"length"),s(": "),a("span",{class:"hljs-number"},"20"),s(" }).map("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"_, index"),s(") =>")]),s(` index),
  `),a("span",{class:"hljs-built_in"},"Array"),s(".from({ "),a("span",{class:"hljs-attr"},"length"),s(": "),a("span",{class:"hljs-number"},"20"),s(" }).map("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"_, index"),s(") =>")]),s(` index),
  `),a("span",{class:"hljs-built_in"},"Array"),s(".from({ "),a("span",{class:"hljs-attr"},"length"),s(": "),a("span",{class:"hljs-number"},"20"),s(" }).map("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"_, index"),s(") =>")]),s(` index)
])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-picker"),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),L={class:"card"},V=a("h3",null,"级联选择",-1),q=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" area "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui/json/area.json'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` columns = ref(area)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-picker"),s(),a("span",{class:"hljs-attr"},"cascade"),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),E={class:"card"},H=a("h3",null,"文本格式化",-1),K=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" genCounts = "),a("span",{class:"hljs-function"},[a("span",{class:"hljs-params"},"length"),s(" =>")]),s(),a("span",{class:"hljs-built_in"},"Array"),s(".from({ length }, "),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"_, index"),s(") =>")]),s(" index + "),a("span",{class:"hljs-number"},"1"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" months = genCounts("),a("span",{class:"hljs-number"},"12"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" leapYearFebruaryDates = genCounts("),a("span",{class:"hljs-number"},"29"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" februaryDates = genCounts("),a("span",{class:"hljs-number"},"28"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" oddMonthDates = genCounts("),a("span",{class:"hljs-number"},"31"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" evenMonthDates = genCounts("),a("span",{class:"hljs-number"},"30"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" columns = ref(genColumns("),a("span",{class:"hljs-number"},"1970"),s(", "),a("span",{class:"hljs-number"},"2100"),s(`))

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"isOddMonth"),s("("),a("span",{class:"hljs-params"},"month"),s(") ")]),s(`{
  `),a("span",{class:"hljs-keyword"},"return"),s(" ["),a("span",{class:"hljs-number"},"1"),s(", "),a("span",{class:"hljs-number"},"3"),s(", "),a("span",{class:"hljs-number"},"5"),s(", "),a("span",{class:"hljs-number"},"7"),s(", "),a("span",{class:"hljs-number"},"8"),s(", "),a("span",{class:"hljs-number"},"10"),s(", "),a("span",{class:"hljs-number"},"12"),s(`].includes(month)
}

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"isLeapYear"),s("("),a("span",{class:"hljs-params"},"year"),s(") ")]),s(`{
  `),a("span",{class:"hljs-keyword"},"return"),s(" (year % "),a("span",{class:"hljs-number"},"4"),s(" === "),a("span",{class:"hljs-number"},"0"),s(" && year % "),a("span",{class:"hljs-number"},"100"),s(" !== "),a("span",{class:"hljs-number"},"0"),s(") || year % "),a("span",{class:"hljs-number"},"400"),s(" === "),a("span",{class:"hljs-number"},"0"),s(`
}

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"genDates"),s("("),a("span",{class:"hljs-params"},"year, month"),s(") ")]),s(`{
  `),a("span",{class:"hljs-keyword"},"if"),s(" (isLeapYear(year) && month === "),a("span",{class:"hljs-number"},"2"),s(`) {
    `),a("span",{class:"hljs-keyword"},"return"),s(` leapYearFebruaryDates
  }

  `),a("span",{class:"hljs-keyword"},"if"),s(" (!isLeapYear(year) && month === "),a("span",{class:"hljs-number"},"2"),s(`) {
    `),a("span",{class:"hljs-keyword"},"return"),s(` februaryDates
  }

  `),a("span",{class:"hljs-keyword"},"if"),s(` (isOddMonth(month)) {
    `),a("span",{class:"hljs-keyword"},"return"),s(` oddMonthDates
  }

  `),a("span",{class:"hljs-keyword"},"return"),s(` evenMonthDates
}

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"genColumns"),s("("),a("span",{class:"hljs-params"},"startYear, endYear"),s(") ")]),s(`{   
  `),a("span",{class:"hljs-keyword"},"const"),s(` columns = []

  `),a("span",{class:"hljs-keyword"},"for"),s(" ("),a("span",{class:"hljs-keyword"},"let"),s(` year = startYear; year < endYear; year++) {
    columns.push({
      `),a("span",{class:"hljs-attr"},"text"),s(`: year,
      `),a("span",{class:"hljs-attr"},"children"),s(": months.map("),a("span",{class:"hljs-function"},[s("("),a("span",{class:"hljs-params"},"month"),s(") =>")]),s(` {
        `),a("span",{class:"hljs-keyword"},"return"),s(` {
          `),a("span",{class:"hljs-attr"},"text"),s(`: month,
          `),a("span",{class:"hljs-attr"},"children"),s(": genDates(year, month).map("),a("span",{class:"hljs-function"},[a("span",{class:"hljs-params"},"date"),s(" =>")]),s(" ({ "),a("span",{class:"hljs-attr"},"text"),s(`: date }))
        }
      })
    })
  }

  `),a("span",{class:"hljs-keyword"},"return"),s(` columns
}

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"textFormatter"),s("("),a("span",{class:"hljs-params"},"text, columnIndex"),s(") ")]),s(`{
  `),a("span",{class:"hljs-keyword"},"if"),s(" (columnIndex === "),a("span",{class:"hljs-number"},"0"),s(") "),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${text}"),s("年`")]),s(`
  `),a("span",{class:"hljs-keyword"},"else"),s(),a("span",{class:"hljs-keyword"},"if"),s(" (columnIndex === "),a("span",{class:"hljs-number"},"1"),s(") "),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${text}"),s("月`")]),s(`
  `),a("span",{class:"hljs-keyword"},"else"),s(),a("span",{class:"hljs-keyword"},"if"),s(" (columnIndex === "),a("span",{class:"hljs-number"},"2"),s(") "),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-string"},[s("`"),a("span",{class:"hljs-subst"},"${text}"),s("日`")]),s(`
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-picker"),s(),a("span",{class:"hljs-attr"},"cascade"),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(),a("span",{class:"hljs-attr"},":text-formatter"),s("="),a("span",{class:"hljs-string"},'"textFormatter"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),G={class:"card"},J=a("h3",null,"值的映射",-1),Q=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` rawColumns = [
  [
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'灰烬之灵'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"1"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'风暴之灵'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"2"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'大地之灵'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'虚空之灵'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"4"),s(` },
  ],
  [
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'灰烬之灵'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"1"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'风暴之灵'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"2"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'大地之灵'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'虚空之灵'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"4"),s(` },
  ],
  [
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'灰烬之灵'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"1"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'风暴之灵'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"2"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'大地之灵'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"3"),s(` },
    { `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'虚空之灵'"),s(", "),a("span",{class:"hljs-attr"},"id"),s(": "),a("span",{class:"hljs-number"},"4"),s(` },
  ]
]
`),a("span",{class:"hljs-keyword"},"const"),s(" normalizedColumns = rawColumns.map("),a("span",{class:"hljs-function"},[a("span",{class:"hljs-params"},"column"),s(" =>")]),s(" column.map("),a("span",{class:"hljs-function"},[a("span",{class:"hljs-params"},"option"),s(" =>")]),s(` option.label))
`),a("span",{class:"hljs-keyword"},"const"),s(` columns = ref(normalizedColumns)

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"handleChange"),s("("),a("span",{class:"hljs-params"},"_, [i1, i2, i3]"),s(") ")]),s(`{
  `),a("span",{class:"hljs-keyword"},"const"),s(` [c1, c2, c3] = rawColumns
  `),a("span",{class:"hljs-keyword"},"const"),s(` ids = [c1[i1].id, c2[i2].id, c3[i3].id]
  Snackbar(ids.toString())
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-picker"),s(),a("span",{class:"hljs-attr"},":columns"),s("="),a("span",{class:"hljs-string"},'"columns"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"handleChange"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),R=o('<h2>API</h2><div class="card"><h3>属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>columns</code></td><td>列内容</td><td><em>NormalColumn[] | CascadeColumn[] | Texts</em></td><td><code>[]</code></td></tr><tr><td><code>title</code></td><td>标题</td><td><em>string</em></td><td><code>提示</code></td></tr><tr><td><code>text-key</code></td><td>文本的属性 key</td><td><em>string</em></td><td><code>text</code></td></tr><tr><td><code>toolbar</code></td><td>是否显示上方工具栏</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>cascade</code></td><td>是否开启级联模式</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>cascade-initial-indexes</code></td><td>级联模式的初始化索引列表</td><td><em>number[]</em></td><td><code>-</code></td></tr><tr><td><code>text-formatter</code></td><td>文本格式化</td><td><em>(text: any, columnIndex: number) =&gt; any</em></td><td><code>text =&gt; text</code></td></tr><tr><td><code>option-height</code></td><td>选项的高度(px rem)</td><td><em>string | number</em></td><td><code>44</code></td></tr><tr><td><code>option-count</code></td><td>可见的选项个数</td><td><em>string | number</em></td><td><code>6</code></td></tr><tr><td><code>confirm-button-text</code></td><td>确认按钮文字</td><td><em>string</em></td><td><code>确认</code></td></tr><tr><td><code>cancel-button-text</code></td><td>取消按钮文字</td><td><em>string</em></td><td><code>取消</code></td></tr><tr><td><code>confirm-button-text-color</code></td><td>确认按钮文字颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancel-button-text-color</code></td><td>取消按钮文字颜色</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Picker Options</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>columns</code></td><td>列内容</td><td><em>NormalColumn[] | CascadeColumn[] | Texts</em></td><td><code>[]</code></td></tr><tr><td><code>title</code></td><td>标题</td><td><em>string</em></td><td><code>提示</code></td></tr><tr><td><code>textKey</code></td><td>文本的属性 key</td><td><em>string</em></td><td><code>text</code></td></tr><tr><td><code>toolbar</code></td><td>是否显示上方工具栏</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>cascade</code></td><td>是否开启级联模式</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>cascadeInitialIndexes</code></td><td>级联模式的初始化索引列表</td><td><em>number[]</em></td><td><code>-</code></td></tr><tr><td><code>textFormatter</code></td><td>文本格式化</td><td><em>(text: any, columnIndex: number) =&gt; any</em></td><td><code>text =&gt; text</code></td></tr><tr><td><code>optionHeight</code></td><td>选项的高度</td><td><em>string | number</em></td><td><code>44</code></td></tr><tr><td><code>optionCount</code></td><td>可见的选项个数</td><td><em>string | number</em></td><td><code>6</code></td></tr><tr><td><code>confirmButtonText</code></td><td>确认按钮文字</td><td><em>string</em></td><td><code>确认</code></td></tr><tr><td><code>cancelButtonText</code></td><td>取消按钮文字</td><td><em>string</em></td><td><code>取消</code></td></tr><tr><td><code>confirmButtonTextColor</code></td><td>确认按钮文字颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancelButtonTextColor</code></td><td>取消按钮文字颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>onOpen</code></td><td>弹出层开启回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>弹出层开启动画结束回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>弹出层关闭回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>关闭弹出层动画结束时回调</td><td><em>(texts: Texts, indexes: number[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr><tr><td><code>onChange</code></td><td>选择内容变化时回调</td><td><em>(texts: Texts, indexes: number[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr><tr><td><code>onConfirm</code></td><td>点击确认按钮时触发</td><td><em>(texts: Texts, indexes: number[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr><tr><td><code>onCancel</code></td><td>点击取消按钮时触发</td><td><em>(texts: Texts, indexes: number[]) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr></tbody></table></div><div class="card"><h3>Picker NormalColumn</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>texts</code></td><td>文本数组</td><td><em>Texts</em></td><td><code>-</code></td></tr><tr><td><code>initialIndex</code></td><td>初始化索引</td><td><em>number</em></td><td><code>0</code></td></tr></tbody></table></div><div class="card"><h3>Picker CascadeColumn</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>text</code></td><td>每一行的文本</td><td><em>any</em></td><td><code>-</code></td></tr><tr><td><code>children</code></td><td>子级</td><td><em>CascadeColumn[]</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>方法</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>confirm</code></td><td>立刻停止滚动并触发 confirm 事件</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>cancel</code></td><td>立刻停止滚动并触发 cancel 事件</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>change</code></td><td>选择内容变化时触发</td><td><code>texts: Texts</code> 选择的内容数组 <br> <code>indexes: number[]</code> 选择的下标数组</td></tr><tr><td><code>cancel</code></td><td>点击取消按钮时触发</td><td><code>texts: Texts</code> 选择的内容数组 <br> <code>indexes: number[]</code> 选择的下标数组</td></tr><tr><td><code>confirm</code></td><td>点击确认按钮时触发</td><td><code>texts: Texts</code> 选择的内容数组 <br> <code>indexes: number[]</code> 选择的下标数组</td></tr></tbody></table></div><div class="card"><h3>插槽</h3><table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>cancel</code></td><td>取消按钮内容</td><td><code>-</code></td></tr><tr><td><code>title</code></td><td>标题内容</td><td><code>-</code></td></tr><tr><td><code>confirm</code></td><td>确认按钮内容</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>样式变量</h3><p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--picker-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--picker-toolbar-height</code></td><td><code>44px</code></td></tr><tr><td><code>--picker-confirm-button-text-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--picker-cancel-button-text-color</code></td><td><code>#888</code></td></tr><tr><td><code>--picker-picked-border</code></td><td><code>1px solid rgba(0, 0, 0, 0.12)</code></td></tr><tr><td><code>--picker-title-font-size</code></td><td><code>16px</code></td></tr><tr><td><code>--picker-toolbar-padding</code></td><td><code>0 4px</code></td></tr><tr><td><code>--picker-mask-background-image</code></td><td><code>linear-gradient(180deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4)),linear-gradient(0deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4))</code></td></tr></tbody></table></div>',9);function U(W,X,Z,ss,as,ns){const n=c("var-site-code-example");return d(),r("div",p,[j,i,m,a("div",u,[b,t(n,null,{default:l(()=>[y]),_:1})]),a("div",g,[k,w,t(n,null,{default:l(()=>[f]),_:1})]),a("div",x,[_,v,t(n,null,{default:l(()=>[C]),_:1})]),a("div",D,[P,Y,t(n,null,{default:l(()=>[I]),_:1})]),a("div",T,[M,t(n,null,{default:l(()=>[A]),_:1})]),F,a("div",$,[N,t(n,null,{default:l(()=>[S]),_:1})]),a("div",z,[B,t(n,null,{default:l(()=>[O]),_:1})]),a("div",L,[V,t(n,null,{default:l(()=>[q]),_:1})]),a("div",E,[H,t(n,null,{default:l(()=>[K]),_:1})]),a("div",G,[J,t(n,null,{default:l(()=>[Q]),_:1})]),R])}const ls=e(h,[["render",U]]);export{ls as default};
