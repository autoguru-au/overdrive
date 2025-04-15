import{t as S}from"./theme.css-CyskBIXA.js";import{g as w}from"./_commonjsHelpers-gnU0ypJ3.js";import{t as R,c as T}from"./tokens-Cb8XQrNE.js";import"./Box-HDBh2Tqe.js";var b,s;function F(){if(s)return b;s=1;var d=function(r){return m(r)&&!g(r)};function m(e){return!!e&&typeof e=="object"}function g(e){var r=Object.prototype.toString.call(e);return r==="[object RegExp]"||r==="[object Date]"||j(e)}var y=typeof Symbol=="function"&&Symbol.for,E=y?Symbol.for("react.element"):60103;function j(e){return e.$$typeof===E}function O(e){return Array.isArray(e)?[]:{}}function o(e,r){return r.clone!==!1&&r.isMergeableObject(e)?f(O(e),e,r):e}function p(e,r,n){return e.concat(r).map(function(c){return o(c,n)})}function A(e,r){if(!r.customMerge)return f;var n=r.customMerge(e);return typeof n=="function"?n:f}function M(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(r){return Object.propertyIsEnumerable.call(e,r)}):[]}function l(e){return Object.keys(e).concat(M(e))}function i(e,r){try{return r in e}catch{return!1}}function h(e,r){return i(e,r)&&!(Object.hasOwnProperty.call(e,r)&&Object.propertyIsEnumerable.call(e,r))}function C(e,r,n){var c={};return n.isMergeableObject(e)&&l(e).forEach(function(t){c[t]=o(e[t],n)}),l(r).forEach(function(t){h(e,t)||(i(e,t)&&n.isMergeableObject(r[t])?c[t]=A(t,n)(e[t],r[t],n):c[t]=o(r[t],n))}),c}function f(e,r,n){n=n||{},n.arrayMerge=n.arrayMerge||p,n.isMergeableObject=n.isMergeableObject||d,n.cloneUnlessOtherwiseSpecified=o;var c=Array.isArray(r),t=Array.isArray(e),v=c===t;return v?c?n.arrayMerge(e,r,n):C(e,r,n):o(r,n)}f.all=function(r,n){if(!Array.isArray(r))throw new Error("first argument should be an array");return r.reduce(function(c,t){return f(c,t,n)},{})};var D=f;return b=D,b}var I=F();const x=w(I),a={black:{900:"#222222",800:"#2A2C2A",700:"#444644",600:"#626262",500:"#808080",400:"#ADB1B5",300:"#D4D9DD",200:"#DDE0E3",100:"#E4E4E4"},gray:{900:"#263238",800:"#37474F",700:"#455A64",600:"#607D8B",500:"#78909C",400:"#90A4AE",300:"#B0BEC5",200:"#CFD8DC",100:"#ECEFF1"},green:{900:"#007800",800:"#009b00",700:"#00af00",600:"#00c400",500:"#00d500",400:"#52dc42",300:"#7ce36a",200:"#a6ec98",100:"#cbf4c1"},blue:{900:"#1a259c",800:"#3530aa",700:"#4336b2",600:"#523ebb",500:"#5c43c2",400:"#765ecb",300:"#8f7ad5",200:"#b0a1e0",100:"#cfc6ec"},yellow:{900:"#cb5300",800:"#d56b00",700:"#db7903",600:"#e18807",500:"#e5930b",400:"#e8a229",300:"#ebb24e",200:"#f0c880",100:"#f6ddb2"},red:{900:"#d50000",800:"#ED0C06",700:"#fb1e0d",600:"#ff2813",500:"#ff3018",400:"#ff5a3c",300:"#ff7d5f",200:"#ffa48d",100:"#ffc8ba"}},u="0 0 0 0 rgba(0, 0, 0, 0.0)",B=x(R,{colours:{gamut:{...T(a)},foreground:{link:a.green[600]},intent:{primary:{background:{standard:a.red[600],mild:a.red[100],strong:a.red[900]},border:a.red[900]},brand:{background:{standard:a.red[600],mild:a.red[100],strong:a.red[900]},border:a.red[900]},secondary:{background:{strong:a.gray[100]},foreground:a.blue[800],border:a.blue[300]}}},elevation:{1:u,2:u,3:u,4:u,5:u},border:{radius:{min:"none",sm:"none",md:"none",1:"none"}},typography:{colour:{primary:a.red[600]}}});var P="qvisw70";const $={name:"flatRedTheme",themeRef:P,vars:S,tokens:B};export{$ as f};
