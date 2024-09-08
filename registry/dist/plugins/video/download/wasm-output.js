!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/download/wasm-output"]=t():e["video/download/wasm-output"]=t()}(globalThis,(()=>(()=>{"use strict";var e={d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};e.d(t,{plugin:()=>$,T:()=>S});const o=coreApis.toast,n=coreApis.download,a=coreApis.meta,i=coreApis.settings;function r(e,t,o){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var n=o.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t,o){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,o)}function c(e,t,o){return function(e,t,o){if(t.set)t.set.call(e,o);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=o}}(e,u(e,t,"set"),o),o}function l(e,t){return function(e,t){if(t.get)return t.get.call(e);return t.value}
/* eslint-disable @typescript-eslint/naming-convention */(e,u(e,t,"get"))}function u(e,t,o){if(!t.has(e))throw new TypeError("attempted to "+o+" private field on non-instance");return t.get(e)}const d=(()=>{let e=0;return()=>e++})();var p=function(e){return e.LOAD="LOAD",e.EXEC="EXEC",e.WRITE_FILE="WRITE_FILE",e.READ_FILE="READ_FILE",e.ERROR="ERROR",e}(p||{}),f=new WeakMap,h=new WeakMap,w=new WeakMap,m=new WeakMap,g=new WeakMap;const y=coreApis.utils.formatters,b={cache:"cache"};async function v(e,t){return async function(){return new Promise(((e,t)=>{const o=unsafeWindow.indexedDB.open("bilibili-evolved-wasm-output",124);o.onerror=t,o.onupgradeneeded=()=>{const e=o.result;for(const t of e.objectStoreNames)e.deleteObjectStore(t);Object.values(b).forEach((t=>{e.createObjectStore(t)}))},o.onsuccess=()=>e(o.result)}))}().then((o=>new Promise(((n,a)=>{const i=o.transaction(e,t);n(i.objectStore(e)),i.onerror=a}))))}async function E(e,t,o){const n=await v(e).then((e=>async function(e,t){return new Promise(((o,n)=>{const a=e.get(t);a.onerror=n,a.onsuccess=()=>o(a.result)}))}(e,t)));if(n)return n;const a=await o(t);return await v(e,"readwrite").then((e=>async function(e,t,o){return new Promise(((n,a)=>{const i=e.put(t,o);i.onerror=a,i.onsuccess=()=>n(i.result)}))}(e,a,t))),a}function F(e,t){return(o,n)=>{e.message=`${t}: ${(0,y.formatFileSize)(o)}${n>0?` / ${(0,y.formatFileSize)(n)} @ ${(0,y.formatPercent)(o/n)}`:""}`}}async function A(e,t){const o=await fetch(e);if(!o.ok)throw new Error(`${o.status} ${o.statusText}`);const n=o.body.getReader(),a=o.headers.get("Content-Encoding")?-1:parseInt(o.headers.get("Content-Length"));let i=0;const r=[];
// eslint-disable-next-line no-constant-condition
for(;;){const{done:e,value:o}=await n.read();if(e)break;r.push(o),i+=o.length,t(i,a)}const s=new Uint8Array(i);let c=0;for(const e of r)s.set(e,c),c+=e.length;return s}async function R(e,t,o){return E(b.cache,e,(async()=>A(t,o)))}function k(e,t){const o=new Blob([e],{type:t});return URL.createObjectURL(o)}const L=new class{constructor(){var e=this;s(this,f,{writable:!0,value:null}),s(this,h,{writable:!0,value:{}}),s(this,w,{writable:!0,value:{}}),r(this,"loaded",!1),s(this,m,{writable:!0,value:()=>{l(this,f)&&(l(this,f).onmessage=e=>{let{data:{id:t,type:o,data:n}}=e;switch(o){case p.LOAD:this.loaded=!0,l(this,h)[t](n);break;case p.EXEC:case p.WRITE_FILE:case p.READ_FILE:l(this,h)[t](n);break;case p.ERROR:l(this,w)[t](n)}delete l(this,h)[t],delete l(this,w)[t]})}}),s(this,g,{writable:!0,value:function(t){let{type:o,data:n}=t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=arguments.length>2?arguments[2]:void 0;return l(e,f)?new Promise(((t,r)=>{const s=d();l(e,f)&&l(e,f).postMessage({id:s,type:o,data:n},a),l(e,h)[s]=t,l(e,w)[s]=r,i?.addEventListener("abort",(()=>{r(new DOMException(`Message # ${s} was aborted`,"AbortError"))}),{once:!0})})):Promise.reject(new Error("FFmpeg is not loaded"))}}),r(this,"load",((e,t)=>(l(this,f)||(c(this,f,new Worker(e.workerLoadURL,{type:"classic"})),l(this,m).call(this)),l(this,g).call(this,{type:p.LOAD,data:e},void 0,t)))),r(this,"exec",(function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,n=arguments.length>2?arguments[2]:void 0;return l(e,g).call(e,{type:p.EXEC,data:{args:t,timeout:o}},void 0,n)})),r(this,"terminate",(()=>{const e=Object.keys(l(this,w));for(const t of e)l(this,w)[t](new Error("FFmpeg terminated")),delete l(this,w)[t],delete l(this,h)[t];l(this,f)&&(l(this,f).terminate(),c(this,f,null),this.loaded=!1)})),r(this,"writeFile",((e,t,o)=>{const n=[];return n.push(t.buffer),l(this,g).call(this,{type:p.WRITE_FILE,data:{path:e,data:t}},n,o)})),r(this,"readFile",((e,t)=>l(this,g).call(this,{type:p.READ_FILE,data:{path:e,encoding:"binary"}},void 0,t)))}};async function j(e,t,a,i){let r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;const c=o.Toast.info("",`${S} - ${r} / ${s}`);L.writeFile("video",await A(t,F(c,"正在下载视频流"))),L.writeFile("audio",await A(a,F(c,"正在下载音频流"))),c.message="混流中……";const l=i?"mkv":"mp4";e=e.replace(/.[^/.]+$/,`.${l}`),await L.exec(["-i","video","-i","audio","-c:v","copy","-c:a","copy","-f",i?"matroska":"mp4",`output.${l}`]);const u=await L.readFile(`output.${l}`),d=new Blob([u],{type:i?"video/x-matroska":"video/mp4"});c.message="完成！",c.duration=1e3,await n.DownloadPackage.single(e,d)}async function x(e){L.loaded||await async function(){const e=o.Toast.info("正在加载 FFmpeg",`${S} - 初始化`);await L.load({workerLoadURL:k(await R("ffmpeg-worker",a.meta.compilationInfo.altCdn.library.ffmpeg.worker,F(e,"正在加载 FFmpeg Worker")),"text/javascript"),coreURL:k(await R("ffmpeg-core",a.meta.compilationInfo.altCdn.library.ffmpeg.core,F(e,"正在加载 FFmpeg Core")),"text/javascript"),wasmURL:k(await R("ffmpeg-wasm",a.meta.compilationInfo.altCdn.library.ffmpeg.wasm,F(e,"正在加载 FFmpeg WASM")),"application/wasm")}),e.message="完成！",e.close()}();const{dashAudioExtension:t,dashFlacAudioExtension:n,dashVideoExtension:r}=(0,i.getComponentSettings)("downloadVideo").options,s=e.infos;for(let e=0;e<s.length;e++){const o=s[e],[a,i]=o.titledFragments;if(2!==o.fragments.length||a.extension!==r||i.extension!==t&&i.extension!==n)throw new Error("仅支持 DASH 格式视频和音频");await j(a.title,a.url,i.url,i.extension===n,e+1,s.length)}}const S="WASM 混流输出",W="使用 WASM 在浏览器中下载并合并音视频, 支持批量下载",$={name:"downloadVideo.outputs.wasm",displayName:`下载视频 - ${S}`,description:W,author:{name:"WakelessSloth56",link:"https://github.com/WakelessSloth56"},setup:e=>{let{addData:t}=e;t("downloadVideo.outputs",(e=>{e.push({name:"wasm",displayName:"WASM",description:`${W}，运行过程中请勿关闭页面，初次使用或清除缓存后需要加载约 30 MB 的 WASM 文件`,runAction:async e=>{try{await x(e)}catch(e){o.Toast.error(String(e),S)}}})}))},commitHash:"99743eecf82280666cde8b64af6a660babc70153",coreVersion:"2.9.2"};return t=t.plugin})()));