!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports["live/danmaku-sendbar"]=n():e["live/danmaku-sendbar"]=n()}(self,(function(){return function(){var e,n,t={129:function(e,n,t){"use strict";t.d(n,{Jd:function(){return o},M6:function(){return r},xO:function(){return a}});const r=".control-panel-ctnr .chat-input-ctnr .chat-input",o=".control-panel-ctnr .chat-input-ctnr ~ .bottom-actions .bl-button--primary",a=".left-area"},634:function(e,n,t){var r=t(645)((function(e){return e[1]}));r.push([e.id,".live-web-player-controller .danmaku-send-bar {\n  display: none;\n}\n.live-web-player-controller {\n  background-image: linear-gradient(to bottom, transparent 20%, rgba(0, 0, 0, 0.9));\n}\n@media screen and (min-width: 1038px) {\n.player-full-win:not(.danmaku-send-bar-unloaded) .live-web-player-controller .control-area .danmaku-send-bar {\n    display: flex;\n    margin: 0 24px;\n    flex: 1 1 0;\n    height: 24px;\n    justify-content: center;\n    align-items: center;\n}\n.player-full-win:not(.danmaku-send-bar-unloaded) .live-web-player-controller .control-area .danmaku-send-bar input {\n    outline: none !important;\n    border: none;\n    border-bottom: 2px solid rgba(255, 255, 255, 0.5333333333);\n    background-color: transparent;\n    color: #fff;\n    padding: 4px;\n    line-height: normal;\n    flex: 1;\n    width: 0;\n    max-width: 400px;\n    min-width: 70px;\n}\n.player-full-win:not(.danmaku-send-bar-unloaded) .live-web-player-controller .control-area .danmaku-send-bar input:focus-within {\n    border-color: var(--theme-color);\n}\n.player-full-win:not(.danmaku-send-bar-unloaded) .live-web-player-controller .control-area .danmaku-send-bar input::-webkit-input-placeholder {\n    color: rgba(255, 255, 255, 0.5333333333) !important;\n}\n.player-full-win:not(.danmaku-send-bar-unloaded) .live-web-player-controller .control-area .right-area {\n    flex: 0 0 auto !important;\n}\n}",""]),e.exports=r},645:function(e){"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},
// eslint-disable-next-line func-names
n.i=function(e,t,r){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){
// eslint-disable-next-line prefer-destructuring
var i=this[a][0];null!=i&&(o[i]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&o[u[0]]||(t&&(u[2]?u[2]="".concat(t," and ").concat(u[2]):u[2]=t),n.push(u))}},n}},379:function(e,n,t){"use strict";var r,o=function(){return void 0===r&&(
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// @see https://github.com/webpack-contrib/style-loader/issues/177
r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function l(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function u(e,n){for(var t={},r=[],o=0;o<e.length;o++){var a=e[o],u=n.base?a[0]+n.base:a[0],s=t[u]||0,c="".concat(u," ").concat(s);t[u]=s+1;var d=l(c),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:c,updater:h(f,n),references:1}),r.push(c)}return r}function s(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var c,d=(c=[],function(e,n){return c[e]=n,c.filter(Boolean).join("\n")});function f(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(n,o);else{var a=document.createTextNode(o),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(a,i[n]):e.appendChild(a)}}function p(e,n,t){var r=t.css,o=t.media,a=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var v=null,m=0;function h(e,n){var t,r,o;if(n.singleton){var a=m++;t=v||(v=s(n)),r=f.bind(null,t,a,!1),o=f.bind(null,t,a,!0)}else t=s(n),r=p.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var t=u(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=l(t[r]);i[o].references--}for(var a=u(e,n),s=0;s<t.length;s++){var c=l(t[s]);0===i[c].references&&(i[c].updater(),i.splice(c,1))}t=a}}}},702:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return m}});var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"danmaku-send-bar"},[t("input",{attrs:{type:"text",placeholder:"发个弹幕呗~",maxlength:"30"},domProps:{value:e.value},on:{keydown:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.send()},input:function(n){return e.updateValue(n.target.value)}}})])};r._withStripped=!0;var o=coreApis.spinQuery,a=t(605),i=t(129);let l=!1;var u=Vue.extend({data:()=>({originalTextArea:null,sendButton:null,value:""}),async mounted(){const e=await(0,o.select)(i.M6),n=await(0,o.select)(i.Jd);if(!e||!n)throw new Error(`[danmakuSendBar] ref elements not found. originalTextArea = ${null===e} sendButton = ${null===n}`);if(this.originalTextArea=e,this.sendButton=n,this.value=e.value,e.addEventListener("input",this.listenChange),e.addEventListener("change",this.listenChange),!l){const n=Object.getOwnPropertyDescriptors(HTMLTextAreaElement.prototype).value;Object.defineProperty(e,"value",{...n,set(t){var r;null===(r=n.set)||void 0===r||r.call(this,t),(0,a.raiseEvent)(e,"input")}}),l=!0}},beforeDestroy(){this.originalTextArea.removeEventListener("input",this.listenChange),this.originalTextArea.removeEventListener("change",this.listenChange)},methods:{updateValue(e){this.originalTextArea.value=e,(0,a.raiseEvent)(this.originalTextArea,"input")},send(){this.sendButton.disabled||(this.value="",this.sendButton.click())},listenChange(e){this.value=e.target.value}}}),s=t(379),c=t.n(s),d=t(634),f=t.n(d),p={insert:"head",singleton:!1};c()(f(),p),f().locals;var v=function(e,n,t,r,o,a,i,l){var u,s="function"==typeof e?e.options:e;if(n&&(s.render=n,s.staticRenderFns=t,s._compiled=!0),r&&(s.functional=!0),a&&(s._scopeId="data-v-"+a),i?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},s._ssrRegister=u):o&&(u=l?function(){o.call(this,(s.functional?this.parent:this).$root.$options.shadowRoot)}:o),u)if(s.functional){s._injectStyles=u;var c=s.render;s.render=function(e,n){return u.call(n),c(e,n)}}else{var d=s.beforeCreate;s.beforeCreate=d?[].concat(d,u):[u]}return{exports:e,options:s}}(u,r,[],!1,null,null,null);v.options.__file="registry/lib/components/live/danmaku-sendbar/DanmakuSendbar.vue";var m=v.exports},605:function(e){"use strict";e.exports=coreApis.utils}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var a=r[e]={id:e,exports:{}};return t[e](a,a.exports,o),a.exports}o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,{a:n}),n},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},o.t=function(t,r){if(1&r&&(t=this(t)),8&r)return t;if("object"==typeof t&&t){if(4&r&&t.__esModule)return t;if(16&r&&"function"==typeof t.then)return t}var a=Object.create(null);o.r(a);var i={};e=e||[null,n({}),n([]),n(n)];for(var l=2&r&&t;"object"==typeof l&&!~e.indexOf(l);l=n(l))Object.getOwnPropertyNames(l).forEach((function(e){i[e]=function(){return t[e]}}));return i.default=function(){return t},o.d(a,i),a},o.d=function(e,n){for(var t in n)o.o(n,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return function(){"use strict";o.d(a,{component:function(){return i}});var e=coreApis.componentApis.live.liveControlBar,n=o(605),t=coreApis.utils.urls,r=o(129);const i={name:"liveDanmakuSendbar",displayName:"直播弹幕发送栏",tags:[componentsTags.live],description:{"zh-CN":"在直播的网页全屏和全屏模式状态下, 在底部显示弹幕栏."},entry:async()=>{if(!(0,n.getUID)())return;let t;(0,e.waitForControlBar)({callback:async e=>{const n=dq(e,r.xO);if(!n)throw new Error("[danmakuSendBar] leftController not found");if(!dq(e,".danmaku-send-bar")){if(!t){const{mountVueComponent:e}=await Promise.resolve().then(o.t.bind(o,605,23)),n=await Promise.resolve().then(o.bind(o,702));t=e(n).$el}n.insertAdjacentElement("afterend",t)}}})},reload:()=>document.body.classList.remove("danmaku-send-bar-unloaded"),unload:()=>document.body.classList.add("danmaku-send-bar-unloaded"),urlInclude:t.liveUrls,commitHash:"67d61b5ef9dd817a4b2063b51bafa5a3ad4ba382",coreVersion:"2.2.3"}}(),a=a.component}()}));