(window.webpackJsonp=window.webpackJsonp||[]).push([[19,31],{323:function(e,t,o){"use strict";o.d(t,"b",(function(){return d})),o.d(t,"a",(function(){return m}));var r=o(325),n=o.n(r),a=(o(324),o(0)),c=o(1),s=function(e,t,o,r){var n,a=arguments.length,c=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(c=(a<3?n(c):a>3?n(t,o,c):n(t,o))||c);return a>3&&c&&Object.defineProperty(t,o,c),c};const i=/^(\w+)\-/,l=a.b.extend({props:{icon:{type:String,default:""},link:{type:String,default:""}}});let u=class extends l{getClass(e){return i.test(e)?e.replace(i,(...e)=>"reco"===e[1]?"iconfont "+e[0]:`${e[1]} ${e[0]}`):e}go(e){""!==e&&window.open(e)}render(){return(0,arguments[0])("i",n()([{},{class:this.getClass(this.icon),on:{click:this.go.bind(this,this.link)}}]),[this.$slots.default])}};u=s([c.b],u);var d=u,f=function(e,t,o,r){var n,a=arguments.length,c=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(c=(a<3?n(c):a>3?n(t,o,c):n(t,o))||c);return a>3&&c&&Object.defineProperty(t,o,c),c};const h=a.b.extend({props:{delay:{type:String,default:"0"},duration:{type:String,default:".25"},transform:{type:Array,default:()=>["translateY(-20px)","translateY(0)"]}}});let p=class extends h{setStyle(e){e.style.transition=`transform ${this.duration}s ease-in-out ${this.delay}s, opacity ${this.duration}s ease-in-out ${this.delay}s`,e.style.transform=this.transform[0],e.style.opacity=0}unsetStyle(e){e.style.transform=this.transform[1],e.style.opacity=1}render(){return(0,arguments[0])("transition",{attrs:{name:"module"},on:{enter:this.setStyle,appear:this.setStyle,"before-leave":this.setStyle,"after-appear":this.unsetStyle,"after-enter":this.unsetStyle}},[this.$slots.default])}};p=f([c.b],p);var m=p},324:function(e,t,o){"use strict";var r=o(21),n=o(4),a=o(326);r({global:!0},{Reflect:{}}),a(n.Reflect,"Reflect",!0)},325:function(e,t,o){"use strict";function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t,o=1;o<arguments.length;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)}var n=["attrs","props","domProps"],a=["class","style","directives"],c=["on","nativeOn"],s=function(e,t){return function(){e&&e.apply(this,arguments),t&&t.apply(this,arguments)}};e.exports=function(e){return e.reduce((function(e,t){for(var o in t)if(e[o])if(-1!==n.indexOf(o))e[o]=r({},e[o],t[o]);else if(-1!==a.indexOf(o)){var i=e[o]instanceof Array?e[o]:[e[o]],l=t[o]instanceof Array?t[o]:[t[o]];e[o]=[].concat(i,l)}else if(-1!==c.indexOf(o))for(var u in t[o])if(e[o][u]){var d=e[o][u]instanceof Array?e[o][u]:[e[o][u]],f=t[o][u]instanceof Array?t[o][u]:[t[o][u]];e[o][u]=[].concat(d,f)}else e[o][u]=t[o][u];else if("hook"===o)for(var h in t[o])e[o][h]=e[o][h]?s(e[o][h],t[o][h]):t[o][h];else e[o]=t[o];else e[o]=t[o];return e}),{})}},326:function(e,t,o){"use strict";var r=o(18).f,n=o(13),a=o(26)("toStringTag");e.exports=function(e,t,o){e&&!o&&(e=e.prototype),e&&!n(e,a)&&r(e,a,{configurable:!0,value:t})}},346:function(e,t,o){},358:function(e,t,o){"use strict";o.d(t,"a",(function(){return a}));var r={light:{"--default-color-10":"rgba(255, 255, 255, 1)","--default-color-9":"rgba(255, 255, 255, .9)","--default-color-8":"rgba(255, 255, 255, .8)","--default-color-7":"rgba(255, 255, 255, .7)","--default-color-6":"rgba(255, 255, 255, .6)","--default-color-5":"rgba(255, 255, 255, .5)","--default-color-4":"rgba(255, 255, 255, .4)","--default-color-3":"rgba(255, 255, 255, .3)","--default-color-2":"rgba(255, 255, 255, .2)","--default-color-1":"rgba(255, 255, 255, .1)","--background-color":"#fff","--box-shadow":"0 1px 8px 0 rgba(0, 0, 0, 0.1)","--box-shadow-hover":"0 2px 16px 0 rgba(0, 0, 0, 0.2)","--text-color":"#242424","--text-color-sub":"#7F7F7F","--border-color":"#eaecef","--code-color":"rgba(27, 31, 35, 0.05)","--mask-color":"#888"},dark:{"--default-color-10":"rgba(0, 0, 0, 1)","--default-color-9":"rgba(0, 0, 0, .9)","--default-color-8":"rgba(0, 0, 0, .8)","--default-color-7":"rgba(0, 0, 0, .7)","--default-color-6":"rgba(0, 0, 0, .6)","--default-color-5":"rgba(0, 0, 0, .5)","--default-color-4":"rgba(0, 0, 0, .4)","--default-color-3":"rgba(0, 0, 0, .3)","--default-color-2":"rgba(0, 0, 0, .2)","--default-color-1":"rgba(0, 0, 0, .1)","--background-color":"#181818","--box-shadow":"0 1px 8px 0 rgba(0, 0, 0, .6)","--box-shadow-hover":"0 2px 16px 0 rgba(0, 0, 0, .7)","--text-color":"rgba(255, 255, 255, .8)","--text-color-sub":"#8B8B8B","--border-color":"rgba(0, 0, 0, .3)","--code-color":"rgba(0, 0, 0, .3)","--mask-color":"#000"}};function n(e){const t=document.querySelector(":root"),o=r[e],n="dark"===e?"light":"dark";for(const e in o)t.style.setProperty(e,o[e]);t.classList.remove(n),t.classList.add(e)}function a(e){if("auto"!==e)return void n(e);const t=window.matchMedia("(prefers-color-scheme: dark)").matches,o=window.matchMedia("(prefers-color-scheme: light)").matches;if(t&&n("dark"),o&&n("light"),!t&&!o){console.log("You specified no preference for a color scheme or your browser does not support it. I schedule dark mode during night time.");const e=(new Date).getHours();n(e<6||e>=18?"dark":"light")}}},365:function(e,t,o){"use strict";o(346)},366:function(e,t,o){},381:function(e,t,o){"use strict";o.r(t);var r=o(358),n={name:"ModeOptions",data:()=>({modeOptions:[{mode:"dark",title:"dark"},{mode:"auto",title:"auto"},{mode:"light",title:"light"}],currentMode:"auto"}),mounted(){this.currentMode=localStorage.getItem("mode")||this.$themeConfig.mode||"auto";var e=this;window.matchMedia("(prefers-color-scheme: dark)").addListener(()=>{"auto"===e.$data.currentMode&&Object(r.a)(e.$data.currentMode)}),window.matchMedia("(prefers-color-scheme: light)").addListener(()=>{"auto"===e.$data.currentMode&&Object(r.a)(e.$data.currentMode)}),Object(r.a)(this.currentMode)},methods:{selectMode(e){e!==this.currentMode&&(this.currentMode=e,Object(r.a)(e),localStorage.setItem("mode",e))},getClass(e){return e!==this.currentMode?e:e+" active"}}},a=(o(365),o(2)),c=Object(a.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"mode-options"},[t("h4",{staticClass:"title"},[e._v("Choose mode")]),e._v(" "),t("ul",{staticClass:"color-mode-options"},e._l(e.modeOptions,(function(o,r){return t("li",{key:r,class:e.getClass(o.mode),on:{click:function(t){return e.selectMode(o.mode)}}},[e._v(e._s(o.title))])})),0)])}),[],!1,null,null,null);t.default=c.exports},384:function(e,t){function o(e){return"function"==typeof e.value||(console.warn("[Vue-click-outside:] provided expression",e.expression,"is not a function."),!1)}function r(e){return void 0!==e.componentInstance&&e.componentInstance.$isServer}e.exports={bind:function(e,t,n){if(!o(t))return;function a(t){if(n.context){var o=t.path||t.composedPath&&t.composedPath();o&&o.length>0&&o.unshift(t.target),e.contains(t.target)||function(e,t){if(!e||!t)return!1;for(var o=0,r=t.length;o<r;o++)try{if(e.contains(t[o]))return!0;if(t[o].contains(e))return!1}catch(e){return!1}return!1}(n.context.popupItem,o)||e.__vueClickOutside__.callback(t)}}e.__vueClickOutside__={handler:a,callback:t.value};const c="ontouchstart"in document.documentElement?"touchstart":"click";!r(n)&&document.addEventListener(c,a)},update:function(e,t){o(t)&&(e.__vueClickOutside__.callback=t.value)},unbind:function(e,t,o){const n="ontouchstart"in document.documentElement?"touchstart":"click";!r(o)&&e.__vueClickOutside__&&document.removeEventListener(n,e.__vueClickOutside__.handler),delete e.__vueClickOutside__}}},385:function(e,t,o){"use strict";o(366)},409:function(e,t,o){"use strict";o.r(t);var r=o(323),n=o(384),a=o.n(n),c=o(381),s=o(358),i={name:"UserSettings",directives:{"click-outside":a.a},components:{ModePicker:c.default,RecoIcon:r.b,ModuleTransition:r.a},data:()=>({showMenu:!1}),mounted(){const e=this.$themeConfig.mode||"auto",{modePicker:t}=this.$themeConfig;!1===t&&("auto"===e&&(window.matchMedia("(prefers-color-scheme: dark)").addListener(()=>{Object(s.a)(e)}),window.matchMedia("(prefers-color-scheme: light)").addListener(()=>{Object(s.a)(e)})),Object(s.a)(e))},methods:{hideMenu(){this.showMenu=!1}}},l=(o(385),o(2)),u=Object(l.a)(i,(function(){var e=this,t=e._self._c;return!1!==e.$themeConfig.modePicker?t("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.hideMenu,expression:"hideMenu"}],staticClass:"color-picker"},[t("a",{staticClass:"color-button",on:{click:function(t){t.preventDefault(),e.showMenu=!e.showMenu}}},[t("reco-icon",{attrs:{icon:"reco-color"}})],1),e._v(" "),t("ModuleTransition",{attrs:{transform:["translate(-50%, 0)","translate(-50%, -10px)"]}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.showMenu,expression:"showMenu"}],staticClass:"color-picker-menu"},[t("ModePicker")],1)])],1):e._e()}),[],!1,null,null,null);t.default=u.exports}}]);