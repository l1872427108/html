(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{442:function(t,a,s){"use strict";s.r(a);var n=s(56),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"h5拖拽api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#h5拖拽api"}},[t._v("#")]),t._v(" H5拖拽API")]),t._v(" "),s("p",[t._v("拖拽：Drag。 释放：Drop。")]),t._v(" "),s("p",[t._v("源对象：指的是我们鼠标点击的一个事物，可以是任何事物。")]),t._v(" "),s("p",[t._v("目标对象：指的是我们拖放源对象后移动到一块区域，源对象可以进入这个区域。")]),t._v(" "),s("h3",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),s("p",[t._v("源对象触发的事件：")]),t._v(" "),s("ol",[s("li",[t._v("ondragstart 源对象开始被拖动。")]),t._v(" "),s("li",[t._v("ondrag: 源对象被拖动过程中。")]),t._v(" "),s("li",[t._v("ondragend: 源对象被拖动结束。")])]),t._v(" "),s("p",[t._v("目标对象触发的事件：")]),t._v(" "),s("ol",[s("li",[t._v("ondragenter: 目标对象被源对象拖动着进入。")]),t._v(" "),s("li",[t._v("ondragover: 目标对象被源对象拖动着悬停在上方。")]),t._v(" "),s("li",[t._v("ondragleave：源对象拖动着离开目标对象。")]),t._v(" "),s("li",[t._v("ondrop：源对象拖动着在目标对象上方释放/松手。")])]),t._v(" "),s("h3",{attrs:{id:"在二者之间传递数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在二者之间传递数据"}},[t._v("#")]),t._v(" 在二者之间传递数据")]),t._v(" "),s("p",[t._v("e.dataTransfer {} // 数据传递对象。\n用于在源对象和目标对象的事件间传递数据。")]),t._v(" "),s("p",[t._v("源对象保存数据。\ne.dataTransfer.setData(k, v); // k, v string类型")]),t._v(" "),s("p",[t._v("目标对象上的事件处理中读取数据。\ne.dataTransfer.getData(k);")]),t._v(" "),s("h3",{attrs:{id:"注意"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[t._v("#")]),t._v(" 注意：")]),t._v(" "),s("ol",[s("li",[t._v("ondrag 事件最后一刻，无法读取鼠标的坐标， pageX 和 pageY 都是 0.")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不处理拖动最后一刻 X 和 Y 都是 0 的情况。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("ondragover 有一个默认行为， 当 ondragover 触发时，ondrap 会失效。\n(可能是浏览器的版本问题)。")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("div"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("ondragover")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 阻止默认行为，使得 drop 可以触发。")]),t._v("\n    e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("preventDefault")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("h3",{attrs:{id:"拖拽电脑文件上传"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#拖拽电脑文件上传"}},[t._v("#")]),t._v(" 拖拽电脑文件上传")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("电脑中拖拽一张图片到浏览器中实现的下载操作！！！ \n按照"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("H5")]),t._v("之前的标准，\n要实现直接拖拽一张图片到浏览器中显示是无法完成！！但是自从"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("H5")]),t._v("新特性出来之后增加了拖拽"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),t._v("的特性，完美的实现了这一功能！！！\n\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("H5")]),t._v(" 新增的文件操作对象\n"),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("File")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 代表一个文件对象"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("fileList")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 代表一个文件列表对象，类数组。\n"),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("FileReader")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 用于从文件中读取数据。\n"),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("FileWriter")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 想文件中写出数据\ne"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dataTransfer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("files"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" 找到拖放的文件\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FileReader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 创建文件读取器。\nfs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("radAsURLData 读取文件内容。\nfr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onload "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 读取完成\nimg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" 读取到的数据。\n\n\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);