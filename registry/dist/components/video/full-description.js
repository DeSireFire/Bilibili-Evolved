!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports["video/full-description"]=n():e["video/full-description"]=n()}(self,(function(){return function(){var e={732:function(e,n,t){var o=t(645)((function(e){return e[1]}));o.push([e.id,".video-desc .info,\n.video-desc .desc-info,\n.play-up-info .play-up-self {\n  height: auto !important;\n}\n\n.video-desc .btn,\n.video-desc .toggle-btn,\n.play-up-info .play-up-self-btn {\n  display: none !important;\n}",""]),e.exports=o},645:function(e){"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},
// eslint-disable-next-line func-names
n.i=function(e,t,o){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var c=this[i][0];null!=c&&(r[c]=!0)}for(var s=0;s<e.length;s++){var a=[].concat(e[s]);o&&r[a[0]]||(t&&(a[2]?a[2]="".concat(t," and ").concat(a[2]):a[2]=t),n.push(a))}},n}},43:function(e,n,t){var o=t(732);o&&o.__esModule&&(o=o.default),e.exports="string"==typeof o?o:o.toString()}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,exports:{}};return e[o](i,i.exports,t),i.exports}t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,{a:n}),n},t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)};var o={};return function(){"use strict";t.d(o,{component:function(){return d}});var e=coreApis.utils.urls,n=coreApis.observer,r=coreApis.spinQuery,i=coreApis.style,c=t(43),s=t.n(c);const a="fullVideoDescription",u=()=>{(0,i.addStyle)(s(),a),(0,n.videoChange)((async()=>{if(!await(0,r.select)(".video-desc"))return;const e=await(0,r.select)('.video-desc .btn[report-id="abstract_spread"], .video-desc .toggle-btn');null==e||e.click()}))},d={name:a,entry:u,reload:u,unload:()=>{(0,i.removeStyle)(a)},displayName:"展开视频简介",tags:[componentsTags.video,componentsTags.style],description:{"zh-CN":"总是展开完整的视频简介."},urlInclude:e.videoAndBangumiUrls,commitHash:"67d61b5ef9dd817a4b2063b51bafa5a3ad4ba382",coreVersion:"2.2.3"}}(),o=o.component}()}));