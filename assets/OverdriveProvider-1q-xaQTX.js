import{d as W}from"./index-D_iG_Vvt.js";import{r as p,R as v}from"./index-DVCUSwsV.js";import{t as D}from"./theme.css-CyskBIXA.js";import{t as ee,m as te}from"./tokens-Cb8XQrNE.js";import"./Box-HDBh2Tqe.js";import{i as re}from"./index-Go0z9Bjm.js";function ne(){}function I(e){return Object.getOwnPropertySymbols(e).filter(t=>Object.prototype.propertyIsEnumerable.call(e,t))}function P(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const oe="[object RegExp]",ae="[object String]",se="[object Number]",ie="[object Boolean]",k="[object Arguments]",ue="[object Symbol]",ce="[object Date]",le="[object Map]",fe="[object Set]",de="[object Array]",ge="[object Function]",pe="[object ArrayBuffer]",A="[object Object]",me="[object Error]",ye="[object DataView]",he="[object Uint8Array]",be="[object Uint8ClampedArray]",ve="[object Uint16Array]",je="[object Uint32Array]",Te="[object BigUint64Array]",Oe="[object Int8Array]",Ne="[object Int16Array]",Ae="[object Int32Array]",we="[object BigInt64Array]",xe="[object Float32Array]",Be="[object Float64Array]";function C(e){if(!e||typeof e!="object")return!1;const t=Object.getPrototypeOf(e);return t===null||t===Object.prototype||Object.getPrototypeOf(t)===null?Object.prototype.toString.call(e)==="[object Object]":!1}function Se(e,t){return e===t||Number.isNaN(e)&&Number.isNaN(t)}function Ie(e,t,r){return b(e,t,void 0,void 0,void 0,void 0,r)}function b(e,t,r,n,o,a,s){const u=s(e,t,r,n,o,a);if(u!==void 0)return u;if(typeof e==typeof t)switch(typeof e){case"bigint":case"string":case"boolean":case"symbol":case"undefined":return e===t;case"number":return e===t||Object.is(e,t);case"function":return e===t;case"object":return j(e,t,a,s)}return j(e,t,a,s)}function j(e,t,r,n){if(Object.is(e,t))return!0;let o=P(e),a=P(t);if(o===k&&(o=A),a===k&&(a=A),o!==a)return!1;switch(o){case ae:return e.toString()===t.toString();case se:{const i=e.valueOf(),l=t.valueOf();return Se(i,l)}case ie:case ce:case ue:return Object.is(e.valueOf(),t.valueOf());case oe:return e.source===t.source&&e.flags===t.flags;case ge:return e===t}r=r??new Map;const s=r.get(e),u=r.get(t);if(s!=null&&u!=null)return s===t;r.set(e,t),r.set(t,e);try{switch(o){case le:{if(e.size!==t.size)return!1;for(const[i,l]of e.entries())if(!t.has(i)||!b(l,t.get(i),i,e,t,r,n))return!1;return!0}case fe:{if(e.size!==t.size)return!1;const i=Array.from(e.values()),l=Array.from(t.values());for(let y=0;y<i.length;y++){const h=i[y],m=l.findIndex(N=>b(h,N,void 0,e,t,r,n));if(m===-1)return!1;l.splice(m,1)}return!0}case de:case he:case be:case ve:case je:case Te:case Oe:case Ne:case Ae:case we:case xe:case Be:{if(typeof Buffer<"u"&&Buffer.isBuffer(e)!==Buffer.isBuffer(t)||e.length!==t.length)return!1;for(let i=0;i<e.length;i++)if(!b(e[i],t[i],i,e,t,r,n))return!1;return!0}case pe:return e.byteLength!==t.byteLength?!1:j(new Uint8Array(e),new Uint8Array(t),r,n);case ye:return e.byteLength!==t.byteLength||e.byteOffset!==t.byteOffset?!1:j(new Uint8Array(e),new Uint8Array(t),r,n);case me:return e.name===t.name&&e.message===t.message;case A:{if(!(j(e.constructor,t.constructor,r,n)||C(e)&&C(t)))return!1;const l=[...Object.keys(e),...I(e)],y=[...Object.keys(t),...I(t)];if(l.length!==y.length)return!1;for(let h=0;h<l.length;h++){const m=l[h],N=e[m];if(!Object.hasOwn(t,m))return!1;const Z=t[m];if(!b(N,Z,m,e,t,r,n))return!1}return!0}default:return!1}}finally{r.delete(e),r.delete(t)}}function Pe(e,t){return Ie(e,t,ne)}var ke="_1f5yyro0";const Ce={name:"baseTheme",themeRef:ke,vars:D,tokens:ee};function R(e){var t=e.match(/^var\((.*)\)$/);return t?t[1]:e}function Re(e,t){var r=e;for(var n of t){if(!(n in r))throw new Error("Path ".concat(t.join(" -> ")," does not exist in object"));r=r[n]}return r}function z(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],n={};for(var o in e){var a=e[o],s=[...r,o];typeof a=="string"||typeof a=="number"||a==null?n[o]=t(a,s):typeof a=="object"&&!Array.isArray(a)?n[o]=z(a,t,s):console.warn('Skipping invalid key "'.concat(s.join("."),'". Should be a string, number, null or object. Received: "').concat(Array.isArray(a)?"Array":typeof a,'"'))}return n}function Ve(e,t){var r={};if(typeof t=="object"){var n=e;z(t,(u,i)=>{if(u!=null){var l=Re(n,i);r[R(l)]=String(u)}})}else{var o=e;for(var a in o){var s=o[a];s!=null&&(r[R(a)]=s)}}return Object.defineProperty(r,"toString",{value:function(){return Object.keys(this).map(i=>"".concat(i,":").concat(this[i])).join(";")},writable:!1}),r}var Le={grad:.9,turn:360,rad:360/(2*Math.PI)},g=function(e){return typeof e=="string"?e.length>0:typeof e=="number"},c=function(e,t,r){return t===void 0&&(t=0),r===void 0&&(r=Math.pow(10,t)),Math.round(r*e)/r+0},f=function(e,t,r){return t===void 0&&(t=0),r===void 0&&(r=1),e>r?r:e>t?e:t},K=function(e){return(e=isFinite(e)?e%360:0)>0?e:e+360},V=function(e){return{r:f(e.r,0,255),g:f(e.g,0,255),b:f(e.b,0,255),a:f(e.a)}},w=function(e){return{r:c(e.r),g:c(e.g),b:c(e.b),a:c(e.a,3)}},Ee=/^#([0-9a-f]{3,8})$/i,O=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},Y=function(e){var t=e.r,r=e.g,n=e.b,o=e.a,a=Math.max(t,r,n),s=a-Math.min(t,r,n),u=s?a===t?(r-n)/s:a===r?2+(n-t)/s:4+(t-r)/s:0;return{h:60*(u<0?u+6:u),s:a?s/a*100:0,v:a/255*100,a:o}},G=function(e){var t=e.h,r=e.s,n=e.v,o=e.a;t=t/360*6,r/=100,n/=100;var a=Math.floor(t),s=n*(1-r),u=n*(1-(t-a)*r),i=n*(1-(1-t+a)*r),l=a%6;return{r:255*[n,u,s,s,i,n][l],g:255*[i,n,n,u,s,s][l],b:255*[s,s,i,n,n,u][l],a:o}},L=function(e){return{h:K(e.h),s:f(e.s,0,100),l:f(e.l,0,100),a:f(e.a)}},E=function(e){return{h:c(e.h),s:c(e.s),l:c(e.l),a:c(e.a,3)}},M=function(e){return G((r=(t=e).s,{h:t.h,s:(r*=((n=t.l)<50?n:100-n)/100)>0?2*r/(n+r)*100:0,v:n+r,a:t.a}));var t,r,n},T=function(e){return{h:(t=Y(e)).h,s:(o=(200-(r=t.s))*(n=t.v)/100)>0&&o<200?r*n/100/(o<=100?o:200-o)*100:0,l:o/2,a:t.a};var t,r,n,o},Me=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Ue=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,He=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,qe=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,U={string:[[function(e){var t=Ee.exec(e);return t?(e=t[1]).length<=4?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?c(parseInt(e[3]+e[3],16)/255,2):1}:e.length===6||e.length===8?{r:parseInt(e.substr(0,2),16),g:parseInt(e.substr(2,2),16),b:parseInt(e.substr(4,2),16),a:e.length===8?c(parseInt(e.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(e){var t=He.exec(e)||qe.exec(e);return t?t[2]!==t[4]||t[4]!==t[6]?null:V({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:t[7]===void 0?1:Number(t[7])/(t[8]?100:1)}):null},"rgb"],[function(e){var t=Me.exec(e)||Ue.exec(e);if(!t)return null;var r,n,o=L({h:(r=t[1],n=t[2],n===void 0&&(n="deg"),Number(r)*(Le[n]||1)),s:Number(t[3]),l:Number(t[4]),a:t[5]===void 0?1:Number(t[5])/(t[6]?100:1)});return M(o)},"hsl"]],object:[[function(e){var t=e.r,r=e.g,n=e.b,o=e.a,a=o===void 0?1:o;return g(t)&&g(r)&&g(n)?V({r:Number(t),g:Number(r),b:Number(n),a:Number(a)}):null},"rgb"],[function(e){var t=e.h,r=e.s,n=e.l,o=e.a,a=o===void 0?1:o;if(!g(t)||!g(r)||!g(n))return null;var s=L({h:Number(t),s:Number(r),l:Number(n),a:Number(a)});return M(s)},"hsl"],[function(e){var t=e.h,r=e.s,n=e.v,o=e.a,a=o===void 0?1:o;if(!g(t)||!g(r)||!g(n))return null;var s=function(u){return{h:K(u.h),s:f(u.s,0,100),v:f(u.v,0,100),a:f(u.a)}}({h:Number(t),s:Number(r),v:Number(n),a:Number(a)});return G(s)},"hsv"]]},H=function(e,t){for(var r=0;r<t.length;r++){var n=t[r][0](e);if(n)return[n,t[r][1]]}return[null,void 0]},$e=function(e){return typeof e=="string"?H(e.trim(),U.string):typeof e=="object"&&e!==null?H(e,U.object):[null,void 0]},x=function(e,t){var r=T(e);return{h:r.h,s:f(r.s+100*t,0,100),l:r.l,a:r.a}},B=function(e){return(299*e.r+587*e.g+114*e.b)/1e3/255},q=function(e,t){var r=T(e);return{h:r.h,s:r.s,l:f(r.l+100*t,0,100),a:r.a}},$=function(){function e(t){this.parsed=$e(t)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return e.prototype.isValid=function(){return this.parsed!==null},e.prototype.brightness=function(){return c(B(this.rgba),2)},e.prototype.isDark=function(){return B(this.rgba)<.5},e.prototype.isLight=function(){return B(this.rgba)>=.5},e.prototype.toHex=function(){return t=w(this.rgba),r=t.r,n=t.g,o=t.b,s=(a=t.a)<1?O(c(255*a)):"","#"+O(r)+O(n)+O(o)+s;var t,r,n,o,a,s},e.prototype.toRgb=function(){return w(this.rgba)},e.prototype.toRgbString=function(){return t=w(this.rgba),r=t.r,n=t.g,o=t.b,(a=t.a)<1?"rgba("+r+", "+n+", "+o+", "+a+")":"rgb("+r+", "+n+", "+o+")";var t,r,n,o,a},e.prototype.toHsl=function(){return E(T(this.rgba))},e.prototype.toHslString=function(){return t=E(T(this.rgba)),r=t.h,n=t.s,o=t.l,(a=t.a)<1?"hsla("+r+", "+n+"%, "+o+"%, "+a+")":"hsl("+r+", "+n+"%, "+o+"%)";var t,r,n,o,a},e.prototype.toHsv=function(){return t=Y(this.rgba),{h:c(t.h),s:c(t.s),v:c(t.v),a:c(t.a,3)};var t},e.prototype.invert=function(){return d({r:255-(t=this.rgba).r,g:255-t.g,b:255-t.b,a:t.a});var t},e.prototype.saturate=function(t){return t===void 0&&(t=.1),d(x(this.rgba,t))},e.prototype.desaturate=function(t){return t===void 0&&(t=.1),d(x(this.rgba,-t))},e.prototype.grayscale=function(){return d(x(this.rgba,-1))},e.prototype.lighten=function(t){return t===void 0&&(t=.1),d(q(this.rgba,t))},e.prototype.darken=function(t){return t===void 0&&(t=.1),d(q(this.rgba,-t))},e.prototype.rotate=function(t){return t===void 0&&(t=15),this.hue(this.hue()+t)},e.prototype.alpha=function(t){return typeof t=="number"?d({r:(r=this.rgba).r,g:r.g,b:r.b,a:t}):c(this.rgba.a,3);var r},e.prototype.hue=function(t){var r=T(this.rgba);return typeof t=="number"?d({h:t,s:r.s,l:r.l,a:r.a}):c(r.h)},e.prototype.isEqual=function(t){return this.toHex()===d(t).toHex()},e}(),d=function(e){return e instanceof $?e:new $(e)};const F=({colour:e,intensity:t,direction:r,isDarkTheme:n,transparency:o=0})=>{const a=t,s=typeof o=="string"?Number(o):o;return d(e)[r==="backward"||n&&r==="forward"?"darken":"lighten"](a).alpha(typeof s=="number"?1-s:1).toHex()},Fe=["primaryBackground","primaryBackgroundMild","primaryBackgroundStrong","primaryBorder","primaryForeground"],_e=e=>{try{const t=new Option;return t.style.color=e??"",t.style.color!==""}catch{return!1}},We=(e,t)=>p.useMemo(()=>{if(!e)return{};Fe.forEach(o=>{e[o]&&!_e(e[o])&&(console.warn(`Overdrive Provider: Invalid override color value for ${o}: ${e[o]}`),delete e[o])});let r=null,n=null;return e.primaryBackground&&(r=e.primaryBackgroundMild||F({colour:e.primaryBackground,isDarkTheme:!1,direction:t==="light"?"forward":"backward",intensity:.1}),n=e.primaryBackgroundStrong||F({colour:e.primaryBackground,isDarkTheme:!1,direction:t==="light"?"forward":"backward",intensity:.1})),Ve(D,{colours:{intent:{primary:{background:{standard:e.primaryBackground??void 0,mild:r??void 0,strong:n??void 0},foreground:e.primaryForeground??void 0,border:e.primaryBorder??void 0}}},typography:{colour:{primary:e.primaryBackground??void 0}}})},[e,t]),J=p.createContext(null),Q=p.createContext(null),X="You haven't used an `<OverdriveProvider>`.",Xe=()=>{const e=p.useContext(J);return W.invariant(e!==null,X),e},Ze=()=>{const e=p.useContext(Q);return W.invariant(e!==null,X),e},De=e=>e instanceof HTMLElement&&!e.hasAttribute("onclick")&&!e.hasAttribute("onerror"),S=({breakpoints:e,children:t,colorOverrides:r,noBodyLevelTheming:n=!1,portalMountPoint:o,theme:a=Ce})=>{const s=p.useMemo(()=>te(e),[e]),u=We(r,String(a.vars.mode)),i=p.useMemo(()=>({themeClass:a.themeRef,themeName:a.name,colorOverrides:r,overrideStyles:u,portalMountPoint:o,vars:a.vars}),[r,o,u,a]);return p.useEffect(()=>{if(!(!re||n||document.body.classList.contains(a.themeRef)))return document.body.classList.add(a.themeRef),()=>{document.body.classList.remove(a.themeRef)}},[n,a]),p.useEffect(()=>{o!=null&&o.current&&!De(o.current)&&(console.error("Unsafe portal mount point detected"),o.current=null)},[o]),v.createElement(J.Provider,{value:i},v.createElement(Q.Provider,{value:s},v.createElement("div",{className:a.themeRef,style:u,"data-od-component-provider":""},t)))},_=v.memo(e=>v.createElement(S,{...e}),(e,t)=>Pe(e,t));try{S.displayName="Provider",S.__docgenInfo={description:"",displayName:"Provider",props:{theme:{defaultValue:null,description:"The theme object to be used throughout the application",name:"theme",required:!1,type:{name:"{ name: string; themeRef: string; vars: MapLeafNodes<{ mode: string; body: { backgroundColour: string; colour: string; }; contentWidth: { small: string; medium: string; large: string; }; space: { '1': string; '2': string; ... 7 more ...; none: string; }; ... 5 more ...; icon: { ...; }; }, CSSVarFunction>; tokens: To..."}},breakpoints:{defaultValue:null,description:"Custom breakpoints for responsive design",name:"breakpoints",required:!1,type:{name:"BreakPoints"}},noBodyLevelTheming:{defaultValue:{value:"false"},description:"When true, prevents applying theme styles at the body level",name:"noBodyLevelTheming",required:!1,type:{name:"boolean"}},colorOverrides:{defaultValue:null,description:"Custom colour overrides for select theme tokens",name:"colorOverrides",required:!1,type:{name:"Partial<ColorOverrides>"}},portalMountPoint:{defaultValue:null,description:"Reference to an HTML element where portals should be mounted",name:"portalMountPoint",required:!1,type:{name:"PortalMountPoint"}}}}}catch{}try{_.displayName="OverdriveProvider",_.__docgenInfo={description:"",displayName:"OverdriveProvider",props:{theme:{defaultValue:null,description:"The theme object to be used throughout the application",name:"theme",required:!1,type:{name:"{ name: string; themeRef: string; vars: MapLeafNodes<{ mode: string; body: { backgroundColour: string; colour: string; }; contentWidth: { small: string; medium: string; large: string; }; space: { '1': string; '2': string; ... 7 more ...; none: string; }; ... 5 more ...; icon: { ...; }; }, CSSVarFunction>; tokens: To..."}},breakpoints:{defaultValue:null,description:"Custom breakpoints for responsive design",name:"breakpoints",required:!1,type:{name:"BreakPoints"}},noBodyLevelTheming:{defaultValue:{value:"false"},description:"When true, prevents applying theme styles at the body level",name:"noBodyLevelTheming",required:!1,type:{name:"boolean"}},colorOverrides:{defaultValue:null,description:"Custom colour overrides for select theme tokens",name:"colorOverrides",required:!1,type:{name:"Partial<ColorOverrides>"}},portalMountPoint:{defaultValue:null,description:"Reference to an HTML element where portals should be mounted",name:"portalMountPoint",required:!1,type:{name:"PortalMountPoint"}}}}}catch{}export{_ as O,Xe as a,Ce as b,Ze as u};
