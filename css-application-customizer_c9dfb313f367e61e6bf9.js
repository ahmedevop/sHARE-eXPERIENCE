define("c15bf76d-20d0-4338-87a6-009fe73888b2_0.0.1",["@microsoft/sp-core-library","@microsoft/sp-application-base","CssApplicationCustomizerStrings"],(e,t,n)=>(()=>{"use strict";var a={23:e=>{e.exports=t},878:t=>{t.exports=e},630:e=>{e.exports=n}},i={};function r(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={exports:{}};return a[e](n,n.exports,r),n.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return(()=>{r.r(o),r.d(o,{default:()=>s});var e,t=r(878),n=r(23),a=r(630),i=(e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)},function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)});const s=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return i(n,e),n.prototype.onInit=function(){t.Log.info("CssApplicationCustomizer","Initialized ".concat(a.Title));var e=this.context.pageContext.site.serverRelativeUrl+this.properties.CSSFileLocation;if(e){var n=document.getElementsByTagName("head")[0]||document.documentElement,i=document.createElement("link");i.href=e,i.rel="stylesheet",i.type="text/css",n.insertAdjacentElement("beforeEnd",i)}return Promise.resolve()},n}(n.BaseApplicationCustomizer)})(),o})());