!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports["video/player/legacy-auto-play"]=o():e["video/player/legacy-auto-play"]=o()}(self,(function(){return function(){"use strict";var e={d:function(o,t){for(var i in t)e.o(t,i)&&!e.o(o,i)&&Object.defineProperty(o,i,{enumerable:!0,get:t[i]})},o:function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}},o={};e.d(o,{component:function(){return l}});var t=coreApis.observer,i=coreApis.spinQuery,n=coreApis.utils,a=coreApis.utils.urls;const l={name:"legacyAutoPlay",displayName:"传统连播模式",description:"模拟传统的多 P 连播策略: 仅连播视频的分 P, 最后 1P 放完禁止连播其他推荐视频.",tags:[componentsTags.video],urlInclude:a.videoUrls,entry:async()=>{const e={enable:[".base-video-sections .next-button",".multi-page .next-button",".player-auxiliary-autoplay-switch input"],disable:[".recommend-list .next-button"]},o=[()=>Boolean(dq(".multi-page .list-box li.on:last-child")),()=>Boolean(dq(".video-sections-item:last-child .video-episode-card:last-child .video-episode-card__info-playing")),()=>Boolean(dq(".video-sections-item:last-child .video-episode-card:last-child .video-episode-card__info-title-playing"))];await(0,n.playerReady)();const a=async()=>{const t=await(0,i.select)([...e.disable,...e.enable].join(","));if(!t)return;var n;(e.enable.some((e=>t.matches(e)))&&o.every((e=>!e())))!==(n=t,Boolean(n.querySelector(".switch-button.on")||n.matches(":checked")))&&t.click()};(0,t.videoChange)((async()=>{a();const e=await(0,i.select)(".bilibili-player-video video");null==e||e.addEventListener("play",a,{once:!0})}))},commitHash:"67d61b5ef9dd817a4b2063b51bafa5a3ad4ba382",coreVersion:"2.2.3"};return o=o.component}()}));