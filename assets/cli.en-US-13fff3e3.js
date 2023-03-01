import{_ as c,p as s,f as i,h as r,M as e,q as o,S as d,aq as l,P as n}from"./vue-router.esm-bundler-0d52b99f.js";const a={components:{}},h={class:"varlet-site-doc"},u=l('<h1>Components Library Tools</h1><div class="card"><h3>Intro</h3><p>The out-of-the-box <code>Vue3 component library</code> rapid prototyping tool provides a series of commands and tools to solve the problem of component library development.</p></div><div class="card"><h3>Features</h3><ul><li>📦  Out-of-the-box component library development environment</li><li>📦  An out-of-the-box component library compilation tool that supports exporting <code>esm</code>, <code>cjs</code>, <code>umd</code> module codes</li><li>🛠️  Configuration file-based component library documentation site, support Baidu statistics and theme customization</li><li>🛠️  Supports both <code>sfc</code> and <code>tsx</code> styles for writing component libraries</li><li>📦  Out-of-the-box code inspection tool</li><li>📦  Out-of-the-box unit testing tools</li><li>📦  Out-of-the-box code publishing tool, publishes to both <code>npm</code> and <code>github</code>, and automatically generates changelogs</li><li>💪  Support for <code>VSCode</code> extension development</li><li>💪  Support <code>build svg to web fonts</code></li><li>💪  Support for <code>Typescript</code></li><li>💪  Support <code>Dark Mode</code></li><li>🌍  Support <code>Internationalization</code></li><li>🚀  Based on <code>pnpm</code></li></ul></div>',3),p={class:"card"},m=e("h3",null,"Quickstart",-1),g=e("p",null,[e("code",null,"@varlet/cli"),n(" has built-in "),e("code",null,"sfc"),n(" and "),e("code",null,"tsx"),n(" style component library project templates, which can be generated directly by the "),e("code",null,"gen"),n(" command. It is convenient for you to directly enter the component library development.")],-1),_=e("pre",{class:"hljs"},[e("code",null,`pnpm add @varlet/cli -g
varlet-cli gen
`)],-1),f=l('<h2>Advanced customization</h2><div class="card"><h3>Configuration file</h3><p>The <code>varlet.config.mjs</code> in the project root directory is used to manage the specific details of the entire component library project. The default configuration can be viewed <a href="https://github.com/varletjs/varlet/blob/dev/packages/varlet-cli/src/node/config/varlet.default.config.ts">varlet.default.config.ts</a>. Also refer to <code>@varlet/ui</code> <a href="https://github.com/varletjs/varlet/blob/dev/packages/varlet-ui/varlet.config.mjs">varlet.config.mjs</a>.</p><table><thead><tr><th>Parameter</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>name</code></td><td>The full name of the component library, which will be used as the package name</td><td><em>string</em></td><td><code>Varlet</code></td></tr><tr><td><code>namespace</code></td><td>Component library namespace, which will be used as a component prefix</td><td><em>string</em></td><td><code>var</code></td></tr><tr><td><code>host</code></td><td>Development server host</td><td><em>number</em></td><td><code>localhost</code></td></tr><tr><td><code>port</code></td><td>Development server port</td><td><em>number</em></td><td><code>8080</code></td></tr><tr><td><code>title</code></td><td>The title of the component library in the documentation</td><td><em>string</em></td><td><code>VARLET</code></td></tr><tr><td><code>logo</code></td><td>The logo of the component library in the documentation</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>defaultLanguage</code></td><td>Documentation default language</td><td><em>string</em></td><td><code>zh-CN</code></td></tr><tr><td><code>useMobile</code></td><td>Whether to show the preview of the right mobile phone</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>lightTheme</code></td><td>Light Mode Documentation Theme</td><td><em>Record&lt;string, any&gt;</em></td><td><code>-</code></td></tr><tr><td><code>darkTheme</code></td><td>Dark Mode Documentation Theme</td><td><em>Record&lt;string, any&gt;</em></td><td><code>-</code></td></tr><tr><td><code>highlight</code></td><td>Documentation snippet style related</td><td><em>{ style: string }</em></td><td><code>-</code></td></tr><tr><td><code>analysis</code></td><td>Document statistics related</td><td><em>{ baidu: string }</em></td><td><code>-</code></td></tr><tr><td><code>pc</code></td><td>PC-side document structure configuration</td><td><em>Record&lt;string, any&gt;</em></td><td><code>-</code></td></tr><tr><td><code>mobile</code></td><td>Mobile side document structure configuration</td><td><em>Record&lt;string, any&gt;</em></td><td><code>-</code></td></tr><tr><td><code>copy</code></td><td>Copy file options</td><td><em><a href="https://github.com/varletjs/varlet/blob/dev/packages/varlet-vite-plugins/src/copy.ts">CopyPath[]</a></em></td><td><code>-</code></td></tr><tr><td><code>icons</code></td><td>Font icon packaging related configuration</td><td><em><a href="https://github.com/varletjs/varlet/blob/dev/packages/varlet-cli/src/node/config/varlet.config.ts">VarletConfigIcons</a></em></td><td><code>-</code></td></tr></tbody></table><h4>Menu</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>doc</code></td><td>The document page corresponds to the matching file name, required</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>type</code></td><td>The type of menu, when the type is <code>1</code>, it means the category menu, when the type is <code>2</code>, the doc field matches the component file under src, when the type is <code>3</code>, the doc field matches the md file under docs, required</td><td><em>MenuTypes</em></td><td><code>-</code></td></tr><tr><td><code>text</code></td><td>The text displayed in the menu, English display text can be configured when internationalization is set, required</td><td><em>Record&lt;string, string&gt;</em></td><td><code>-</code></td></tr><tr><td><code>useMobile</code></td><td>Whether to display the mobile phone preview on the right side on the current document page, if not filled, the default value is useMobile in config</td><td><em>boolean</em></td><td><code>-</code></td></tr></tbody></table></div>',2),v={class:"card"},b=e("h3",null,"Custom pages",-1),y=e("p",null,[n("If you want to insert other pages into the component library, you can create a "),e("code",null,"pages"),n(" folder in the project root directory to write a vue component to generate other pages. The directory structure is as follows:")],-1),j=e("pre",{class:"hljs"},[e("code",null,`|-- varlet-ui
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
      
`)],-1),x=e("p",null,"The resulting route is as follows:",-1),w=e("pre",{class:"hljs"},[e("code",null,`/zh-CN/sponsor
/en-US/contributor
/zh-CN/changelog
/en-US/changelog
`)],-1),C={class:"card"},T=e("h3",null,"Command related",-1),S=e("h4",null,"Start the development server",-1),k=e("pre",{class:"hljs"},[e("code",null,`varlet-cli dev
`)],-1),D=e("h4",null,"Build a documentation site",-1),N=e("pre",{class:"hljs"},[e("code",null,`varlet-cli build
`)],-1),V=e("h4",null,"Preview documentation site",-1),z=e("pre",{class:"hljs"},[e("code",null,`varlet-cli preview
`)],-1),M=e("h4",null,"Compile component library",-1),B=e("pre",{class:"hljs"},[e("code",null,`varlet-cli compile
`)],-1),R=e("h4",null,"Run VSCode extension development environment",-1),E=e("pre",{class:"hljs"},[e("code",null,`varlet-cli dev:extension
`)],-1),G=e("h4",null,"Build VSCode extension for production",-1),L=e("pre",{class:"hljs"},[e("code",null,`varlet-cli build:extension
`)],-1),O=e("h4",null,"Build svg to web fonts",-1),q=e("pre",{class:"hljs"},[e("code",null,`varlet-cli build:icons
`)],-1),I=e("h4",null,"Execute all unit tests",-1),P=e("pre",{class:"hljs"},[e("code",null,`varlet-cli test
`)],-1),U=e("h4",null,"Execute unit tests in watch mode",-1),A=e("pre",{class:"hljs"},[e("code",null,`varlet-cli test -w
or
varlet-cli test -wa
`)],-1),$=e("h4",null,"Lint the code",-1),F=e("pre",{class:"hljs"},[e("code",null,`varlet-cli lint
`)],-1),W=e("h4",null,"Lint git commit message",-1),Q=e("pre",{class:"hljs"},[e("code",null,`varlet-cli commit-lint
`)],-1),H=e("h4",null,"Generate changelog",-1),J=e("pre",{class:"hljs"},[e("code",null,`varlet-cli changelog
`)],-1),K=e("h4",null,"Release component library",-1),X=e("pre",{class:"hljs"},[e("code",null,`varlet-cli release
`)],-1),Y=e("h4",null,"Generate a project template",-1),Z=e("pre",{class:"hljs"},[e("code",null,[n(`varlet-cli gen
`),e("span",{class:"hljs-meta"},`
#`),e("span",{class:"bash"}," Options"),n(`
-n
--name
  project name
-s
--sfc
  Generate sfc-style project templates
-t
--tsx
  Generate tsx-style project templates
-l
--locale
  Need to support internationalization
`)])],-1),ee=e("h4",null,"Create a component template file",-1),te=e("pre",{class:"hljs"},[e("code",null,[n(`varlet-cli create
`),e("span",{class:"hljs-meta"},`
#`),e("span",{class:"bash"}," Options"),n(`
-n
--name
  project name
-s
--sfc
  Generate sfc-style component
-t
--tsx
  Generate tsx-style component
-l
--locale
  Need to support internationalization
`)])],-1),oe=e("div",{class:"card"},[e("h3",null,"Note before publish"),e("ul",null,[e("li",null,[n("1."),e("code",null,"npm"),n(" repository registry must set to "),e("code",null,"npm"),n(" official mirror")]),e("li",null,[n("2.Execute "),e("code",null,"npm login"),n(" to log in")])])],-1);function de(ne,le,ce,se,ie,re){const t=s("var-site-code-example");return i(),r("div",h,[u,e("div",p,[m,g,o(t,{"playground-ignore":""},{default:d(()=>[_]),_:1})]),f,e("div",v,[b,y,o(t,{"playground-ignore":""},{default:d(()=>[j]),_:1}),x,o(t,{"playground-ignore":""},{default:d(()=>[w]),_:1})]),e("div",C,[T,S,o(t,{"playground-ignore":""},{default:d(()=>[k]),_:1}),D,o(t,{"playground-ignore":""},{default:d(()=>[N]),_:1}),V,o(t,{"playground-ignore":""},{default:d(()=>[z]),_:1}),M,o(t,{"playground-ignore":""},{default:d(()=>[B]),_:1}),R,o(t,{"playground-ignore":""},{default:d(()=>[E]),_:1}),G,o(t,{"playground-ignore":""},{default:d(()=>[L]),_:1}),O,o(t,{"playground-ignore":""},{default:d(()=>[q]),_:1}),I,o(t,{"playground-ignore":""},{default:d(()=>[P]),_:1}),U,o(t,{"playground-ignore":""},{default:d(()=>[A]),_:1}),$,o(t,{"playground-ignore":""},{default:d(()=>[F]),_:1}),W,o(t,{"playground-ignore":""},{default:d(()=>[Q]),_:1}),H,o(t,{"playground-ignore":""},{default:d(()=>[J]),_:1}),K,o(t,{"playground-ignore":""},{default:d(()=>[X]),_:1}),Y,o(t,{"playground-ignore":""},{default:d(()=>[Z]),_:1}),ee,o(t,{"playground-ignore":""},{default:d(()=>[te]),_:1})]),oe])}const he=c(a,[["render",de]]);export{he as default};
