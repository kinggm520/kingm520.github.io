(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{452:function(t,a,s){"use strict";s.r(a);var n=s(2),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"java-api使用避坑合集"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java-api使用避坑合集"}},[t._v("#")]),t._v(" Java API使用避坑合集")]),t._v(" "),a("h3",{attrs:{id:"总结常见的容易踩坑点记录下来以供参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结常见的容易踩坑点记录下来以供参考"}},[t._v("#")]),t._v(" 总结常见的容易踩坑点记录下来以供参考")]),t._v(" "),a("p",[t._v("相当于避坑大杂烩、会涉及各种坑，持续更新...")]),t._v(" "),a("h3",{attrs:{id:"_1、数组转集合-arrays-aslist-方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、数组转集合-arrays-aslist-方法"}},[t._v("#")]),t._v(" 1、数组转集合 Arrays.asList() 方法")]),t._v(" "),a("p",[t._v("Arrays.asList() 方法 返回的集合不支持修改操作，否则会抛异常"),a("br"),t._v("\njava.lang.UnsupportedOperationException")]),t._v(" "),a("h3",{attrs:{id:"_2、bigdecimal-数据的比较-请使用compareto方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、bigdecimal-数据的比较-请使用compareto方法"}},[t._v("#")]),t._v(" 2、BigDecimal 数据的比较 请使用compareTo方法")]),t._v(" "),a("ul",[a("li",[t._v("A.compareTo(B)  结果等于0  表示 A=B ,结果>0 表示 A>B, 结果小于0 表示A<B；")]),t._v(" "),a("li",[t._v("如果使用equals 那么会连同小数位数一块比较  0.0和0 使用equals比较 返回false ，因为0.0有一位小数 而0没有。")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BigDecimal")]),t._v(" bigDecimal "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BigDecimal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BigDecimal")]),t._v(" bigDecimal1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BigDecimal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bigDecimal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("equals")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bigDecimal1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bigDecimal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("compareTo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bigDecimal1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"_3、spring-clould-注册指定网段的ip地址-到服务中心"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、spring-clould-注册指定网段的ip地址-到服务中心"}},[t._v("#")]),t._v(" 3、spring clould 注册指定网段的IP地址 到服务中心")]),t._v(" "),a("p",[t._v("添加以下配置 10.211.为需要指定的网段")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("spring.cloud.inetutils.preferred-networks"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.211")]),t._v(".\n")])])]),a("h3",{attrs:{id:"_4、在mybatis的-if-标签中-判断-bigdecimal-类型或者-date类型-字段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、在mybatis的-if-标签中-判断-bigdecimal-类型或者-date类型-字段"}},[t._v("#")]),t._v(" 4、在Mybatis的 <if> 标签中 判断 BigDecimal 类型或者 Date类型 字段")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("如果用了 !=''  不等于空串 判断  BigDecimal类型字段 ， mybatis会自动把BigDecimal类型转为String，并且如果你的BigDecimal 字段值是0 就会被mybatis转为 null，巨坑无比；")])]),t._v(" "),a("li",[a("p",[t._v("如果用了 !=''  不等于空串 判断  Date会直接报错 。")])])]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("--")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("错误示例")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("!--")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("bigDecimalNum !=null and bigDecimalNum !=''"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" \n \n "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" \n\n "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("startDate !=null and startDate !=''"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" \n \n "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" \n")])])]),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("--")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("正确示例")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("!--")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("bigDecimalNum !=null"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" \n \n "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" \n\n "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("startDate !=null"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" \n \n "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" \n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);