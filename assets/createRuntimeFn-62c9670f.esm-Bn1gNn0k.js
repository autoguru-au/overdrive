function c(r,t){if(typeof r!="object"||!r)return r;var a=r[Symbol.toPrimitive];if(a!==void 0){var e=a.call(r,t);if(typeof e!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(r)}function O(r){var t=c(r,"string");return typeof t=="symbol"?t:String(t)}function y(r,t,a){return t=O(t),t in r?Object.defineProperty(r,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[t]=a,r}function l(r,t){var a=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);t&&(e=e.filter(function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})),a.push.apply(a,e)}return a}function p(r){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?l(Object(a),!0).forEach(function(e){y(r,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(a,e))})}return r}function v(r,t){var a={};for(var e in r)a[e]=t(r[e],e);return a}var d=(r,t,a)=>{for(var e of Object.keys(r)){var n;if(r[e]!==((n=t[e])!==null&&n!==void 0?n:a[e]))return!1}return!0},j=r=>{var t=a=>{var e=r.defaultClassName,n=p(p({},r.defaultVariants),a);for(var i in n){var s,o=(s=n[i])!==null&&s!==void 0?s:r.defaultVariants[i];if(o!=null){var u=o;typeof u=="boolean"&&(u=u===!0?"true":"false");var f=r.variantClassNames[i][u];f&&(e+=" "+f)}}for(var[b,m]of r.compoundVariants)d(b,n,r.defaultVariants)&&(e+=" "+m);return e};return t.variants=()=>Object.keys(r.variantClassNames),t.classNames={get base(){return r.defaultClassName.split(" ")[0]},get variants(){return v(r.variantClassNames,a=>v(a,e=>e.split(" ")[0]))}},t};export{j as c};
