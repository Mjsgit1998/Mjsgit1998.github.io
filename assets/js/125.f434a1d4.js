(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{438:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_04-hook规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_04-hook规则"}},[t._v("#")]),t._v(" 04. Hook规则")]),t._v(" "),s("p",[t._v("Hook 本质就是 JavaScript 函数，但是在使用它时需要遵循"),s("strong",[t._v("两条规则")]),t._v("。我们提供了一个 "),s("a",{attrs:{href:"https://www.npmjs.com/package/eslint-plugin-react-hooks",target:"_blank",rel:"noopener noreferrer"}},[t._v("linter 插件"),s("OutboundLink")],1),t._v("来强制执行这些规则：")]),t._v(" "),s("h2",{attrs:{id:"只在最顶层使用-hook"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#只在最顶层使用-hook"}},[t._v("#")]),t._v(" 只在最顶层使用 Hook")]),t._v(" "),s("p",[t._v("不要在循环，条件或嵌套函数中调用 Hook， 确保"),s("strong",[t._v("总是在你的 React 函数的最顶层以及任何 return 之前调用他们")]),t._v("。遵守这条规则，你就能确保 Hook 在每一次渲染中都按照同样的顺序被调用。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("React 怎么知道哪个 state 对应哪个 "),s("code",[t._v("useState")]),t._v("？答案是 React 靠的是 Hook 调用的顺序")])]),t._v(" "),s("li",[s("p",[t._v("如果我们想要有条件地执行一个 effect，可以将判断放到 Hook 的"),s("em",[t._v("内部")]),t._v("：")])])]),t._v(" "),s("div",{staticClass:"language-jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useEffect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("persistForm")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 👍 将条件判断放置在 effect 中")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      localStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'formData'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),s("h2",{attrs:{id:"只在-react-函数中调用-hook"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#只在-react-函数中调用-hook"}},[t._v("#")]),t._v(" 只在 React 函数中调用 Hook")]),t._v(" "),s("p",[t._v("**不要在普通的 JavaScript 函数中调用 Hook。**你可以：")]),t._v(" "),s("ul",[s("li",[t._v("✅ 在 React 的函数组件中调用 Hook")]),t._v(" "),s("li",[t._v("✅ 在自定义 Hook 中调用其他 Hook")])]),t._v(" "),s("h2",{attrs:{id:"eslint-插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#eslint-插件"}},[t._v("#")]),t._v(" ESLint 插件")]),t._v(" "),s("p",[t._v("我们发布了一个名为 "),s("a",{attrs:{href:"https://www.npmjs.com/package/eslint-plugin-react-hooks",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("eslint-plugin-react-hooks")]),s("OutboundLink")],1),t._v(" 的 ESLint 插件来强制执行这两条规则。")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" eslint-plugin-react-hooks --save-dev\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 你的 ESLint 配置")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"plugins"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"react-hooks"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"rules"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"react-hooks/rules-of-hooks"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 检查 Hook 的规则")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"react-hooks/exhaustive-deps"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"warn"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 检查 effect 的依赖")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);