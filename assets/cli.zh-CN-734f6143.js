import{_ as n,p as s,f as a,h as r,M as t,q as d,S as o,aq as c,P as l}from"./vue-router.esm-bundler-0d52b99f.js";const i={components:{}},h={class:"varlet-site-doc"},u=c('<h1>组件库快速成型工具</h1><div class="card"><h3>介绍</h3><p>开箱即用的 <code>Vue3组件库</code> 快速成型工具，提供了一系列命令和工具去解决组件库开发上的问题。</p></div><div class="card"><h3>特性</h3><ul><li>📦  开箱即用的组件库开发环境</li><li>📦  开箱即用的组件库编译工具，支持导出 <code>esm</code>, <code>cjs</code>, <code>umd</code> 三种模块代码</li><li>🛠️  基于配置文件的组件库文档站点，支持百度统计和主题定制</li><li>🛠️  支持 <code>sfc</code> 和 <code>tsx</code> 两种风格的组件库编写风格</li><li>📦  开箱即用的代码检查工具</li><li>📦  开箱即用的单元测试工具</li><li>📦  开箱即用的代码发布工具,同时发布到 <code>npm</code> 和 <code>github</code>, 并自动生成更新日志</li><li>💪  支持 <code>VSCode</code> 插件开发</li><li>💪  支持 <code>字体图标打包</code></li><li>💪  支持 <code>Typescript</code></li><li>💪  支持 <code>暗黑模式</code></li><li>🌍  支持 <code>国际化</code></li><li>🚀  基于 <code>pnpm</code></li></ul></div>',3),_={class:"card"},p=t("h3",null,"快速开始",-1),g=t("p",null,[t("code",null,"@varlet/cli"),l(" 内置了 "),t("code",null,"sfc"),l(" 和 "),t("code",null,"tsx"),l(" 两种风格的组件库项目模板，可以通过 "),t("code",null,"gen"),l(" 命令直接生成。 方便您直接进入组件库开发。")],-1),m=t("pre",{class:"hljs"},[t("code",null,`pnpm add @varlet/cli -g
varlet-cli gen
`)],-1),v=c('<h2>高级定制</h2><div class="card"><h3>配置文件</h3><p>项目根目录下的 <code>varlet.config.mjs</code> 用来管理整个组件库项目的具体细节。 默认配置可查阅 <a href="https://github.com/varletjs/varlet/blob/dev/packages/varlet-cli/src/node/config/varlet.default.config.ts">varlet.default.config.ts</a>。 也可以参考 <code>@varlet/ui</code> 的 <a href="https://github.com/varletjs/varlet/blob/dev/packages/varlet-ui/varlet.config.mjs">varlet.config.mjs</a>。</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>name</code></td><td>组件库全名，会作为包名</td><td><em>string</em></td><td><code>Varlet</code></td></tr><tr><td><code>namespace</code></td><td>组件库命名空间, 会作为组件前缀</td><td><em>string</em></td><td><code>var</code></td></tr><tr><td><code>host</code></td><td>开发服务器主机</td><td><em>number</em></td><td><code>localhost</code></td></tr><tr><td><code>port</code></td><td>开发服务器端口</td><td><em>number</em></td><td><code>8080</code></td></tr><tr><td><code>title</code></td><td>文档中组件库的标题</td><td><em>string</em></td><td><code>VARLET</code></td></tr><tr><td><code>logo</code></td><td>文档中组件库的logo</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>defaultLanguage</code></td><td>文档默认语言</td><td><em>string</em></td><td><code>zh-CN</code></td></tr><tr><td><code>useMobile</code></td><td>是否显示右侧手机预览</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>lightTheme</code></td><td>亮色模式文档主题</td><td><em>Record&lt;string, any&gt;</em></td><td><code>-</code></td></tr><tr><td><code>darkTheme</code></td><td>暗黑模式文档主题</td><td><em>Record&lt;string, any&gt;</em></td><td><code>-</code></td></tr><tr><td><code>highlight</code></td><td>文档代码片段样式相关</td><td><em>{ style: string }</em></td><td><code>-</code></td></tr><tr><td><code>analysis</code></td><td>文档统计相关</td><td><em>{ baidu: string }</em></td><td><code>-</code></td></tr><tr><td><code>pc</code></td><td>pc 端文档结构配置</td><td><em>Record&lt;string, any&gt;</em></td><td><code>-</code></td></tr><tr><td><code>mobile</code></td><td>mobile 端文档结构配置</td><td><em>Record&lt;string, any&gt;</em></td><td><code>-</code></td></tr><tr><td><code>copy</code></td><td>复制文件配置</td><td><em><a href="https://github.com/varletjs/varlet/blob/dev/packages/varlet-vite-plugins/src/copy.ts">CopyPath[]</a></em></td><td><code>-</code></td></tr><tr><td><code>icons</code></td><td>字体图标打包相关配置</td><td><em><a href="https://github.com/varletjs/varlet/blob/dev/packages/varlet-cli/src/node/config/varlet.config.ts">VarletConfigIcons</a></em></td><td><code>-</code></td></tr></tbody></table><h4>Menu</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>doc</code></td><td>文档页面应匹配的文件名称, 必填</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>type</code></td><td>menu 类型, 当 type 为 <code>1</code> 时表示分类 menu, 类型为 <code>2</code> 时 doc 字段匹配 src 下的组件文件, 类型为 <code>3</code> 时 doc 字段匹配 docs 下的 md 文件</td><td><em>MenuTypes</em></td><td><code>-</code></td></tr><tr><td><code>text</code></td><td>menu 所展示的文字, 当设置国际化时可配置英文展示文字</td><td><em>Record&lt;string, string&gt;</em></td><td><code>-</code></td></tr><tr><td><code>useMobile</code></td><td>是否在当前文档页显示右侧手机预览, 如不填写, 默认取 config 中的 useMobile</td><td><em>boolean</em></td><td><code>-</code></td></tr></tbody></table></div>',2),f={class:"card"},b=t("h3",null,"自定义页面",-1),y=t("p",null,[l("如果想在组件库中插入其他页面，可以在项目根目录下的创建 "),t("code",null,"pages"),l(" 文件夹编写 vue 组件， 用来生成其他的页面。 目录结构如下：")],-1),j=t("pre",{class:"hljs"},[t("code",null,`|-- varlet-ui
  |-- src
  |-- docs
  |-- pages
    |-- sponsor
      |-- index.vue
    |-- contributor
      |-- locale
        |-- en-US.ts
      |-- index.vue
    |-- changelog
      |-- locale
        |-- zh-CN.ts
        |-- en-US.ts
      |-- index.vue
`)],-1),x=t("p",null,"生成的路由如下：",-1),C=t("pre",{class:"hljs"},[t("code",null,`/zh-CN/sponsor
/en-US/contributor
/zh-CN/changelog
/en-US/changelog
`)],-1),V={class:"card"},N=t("h3",null,"命令相关",-1),S=t("h4",null,"启动开发服务器",-1),k=t("pre",{class:"hljs"},[t("code",null,`varlet-cli dev
`)],-1),M=t("h4",null,"构建文档站点",-1),R=t("pre",{class:"hljs"},[t("code",null,`varlet-cli build
`)],-1),T=t("h4",null,"预览文档站点",-1),w=t("pre",{class:"hljs"},[t("code",null,`varlet-cli preview
`)],-1),z=t("h4",null,"构建组件库",-1),U=t("pre",{class:"hljs"},[t("code",null,`varlet-cli compile
`)],-1),$=t("h4",null,"启动 VSCode 插件开发环境",-1),B=t("pre",{class:"hljs"},[t("code",null,`varlet-cli dev:extension
`)],-1),q=t("h4",null,"构建 VSCode 插件",-1),E=t("pre",{class:"hljs"},[t("code",null,`varlet-cli build:extension
`)],-1),L=t("h4",null,"打包字体图标",-1),O=t("pre",{class:"hljs"},[t("code",null,`varlet-cli build:icons
`)],-1),P=t("h4",null,"执行所有的单元测试",-1),A=t("pre",{class:"hljs"},[t("code",null,`varlet-cli test
`)],-1),I=t("h4",null,"以 watch 模式执行单元测试",-1),D=t("pre",{class:"hljs"},[t("code",null,`varlet-cli test -w
or
varlet-cli test -wa
`)],-1),F=t("h4",null,"检查代码",-1),G=t("pre",{class:"hljs"},[t("code",null,`varlet-cli lint
`)],-1),H=t("h4",null,"校验提交信息",-1),J=t("pre",{class:"hljs"},[t("code",null,`varlet-cli commit-lint
`)],-1),K=t("h4",null,"生成更新日志",-1),Q=t("pre",{class:"hljs"},[t("code",null,`varlet-cli changelog
`)],-1),W=t("h4",null,"发布组件库",-1),X=t("pre",{class:"hljs"},[t("code",null,`varlet-cli release
`)],-1),Y=t("h4",null,"生成一个项目模板",-1),Z=t("pre",{class:"hljs"},[t("code",null,[l(`varlet-cli gen
`),t("span",{class:"hljs-meta"},`
#`),t("span",{class:"bash"}," Options"),l(`
-n
--name
  项目名
-s
--sfc
  生成 sfc 风格的项目模板
-t
--tsx
  生成 tsx 格式项目
-l
--locale
  需要支持国际化
`)])],-1),tt=t("h4",null,"创建组件模板文件",-1),et=t("pre",{class:"hljs"},[t("code",null,[l(`varlet-cli create
`),t("span",{class:"hljs-meta"},`
#`),t("span",{class:"bash"}," Options"),l(`
-n
--name
  组件名
-s
--sfc
  生成 sfc 风格的组件
-t
--tsx
  生成 tsx 风格的文件
-l
--locale
  需要支持国际化
`)])],-1),dt=t("div",{class:"card"},[t("h3",null,"发布前注意"),t("ul",null,[t("li",null,[l("1."),t("code",null,"npm"),l(" 的仓库源必须指向 "),t("code",null,"npm"),l(" 官方镜像")]),t("li",null,[l("2.执行 "),t("code",null,"npm login"),l(" 进行登录")])])],-1);function ot(lt,ct,nt,st,at,rt){const e=s("var-site-code-example");return a(),r("div",h,[u,t("div",_,[p,g,d(e,{"playground-ignore":""},{default:o(()=>[m]),_:1})]),v,t("div",f,[b,y,d(e,{"playground-ignore":""},{default:o(()=>[j]),_:1}),x,d(e,{"playground-ignore":""},{default:o(()=>[C]),_:1})]),t("div",V,[N,S,d(e,{"playground-ignore":""},{default:o(()=>[k]),_:1}),M,d(e,{"playground-ignore":""},{default:o(()=>[R]),_:1}),T,d(e,{"playground-ignore":""},{default:o(()=>[w]),_:1}),z,d(e,{"playground-ignore":""},{default:o(()=>[U]),_:1}),$,d(e,{"playground-ignore":""},{default:o(()=>[B]),_:1}),q,d(e,{"playground-ignore":""},{default:o(()=>[E]),_:1}),L,d(e,{"playground-ignore":""},{default:o(()=>[O]),_:1}),P,d(e,{"playground-ignore":""},{default:o(()=>[A]),_:1}),I,d(e,{"playground-ignore":""},{default:o(()=>[D]),_:1}),F,d(e,{"playground-ignore":""},{default:o(()=>[G]),_:1}),H,d(e,{"playground-ignore":""},{default:o(()=>[J]),_:1}),K,d(e,{"playground-ignore":""},{default:o(()=>[Q]),_:1}),W,d(e,{"playground-ignore":""},{default:o(()=>[X]),_:1}),Y,d(e,{"playground-ignore":""},{default:o(()=>[Z]),_:1}),tt,d(e,{"playground-ignore":""},{default:o(()=>[et]),_:1})]),dt])}const ht=n(i,[["render",ot]]);export{ht as default};
