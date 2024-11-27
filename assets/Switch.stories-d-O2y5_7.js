import{a as yt}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{r as p,R as ce}from"./index-sWIihdb-.js";import{c as ge,B as Se,u as ht}from"./Box-D0fGWDzz.js";import{u as xe}from"./useTextStyles-v_jGj5tR.js";import"./v4-CQkTLCs1.js";import"./_commonjsHelpers-C932wzq6.js";function mt(e,t,r){let[o,i]=p.useState(e||t),l=p.useRef(e!==void 0),a=e!==void 0;p.useEffect(()=>{let f=l.current;f!==a&&console.warn(`WARN: A component changed from ${f?"controlled":"uncontrolled"} to ${a?"controlled":"uncontrolled"}.`),l.current=a},[a]);let d=a?e:o,g=p.useCallback((f,...$)=>{let m=(L,...T)=>{r&&(Object.is(d,L)||r(L,...T)),a||(d=L)};typeof f=="function"?(console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"),i((T,...N)=>{let w=f(a?d:T,...N);return m(w,...$),a?T:w})):(a||i(f),m(f,...$))},[a,d,r]);return[d,g]}function Tt(e={}){let{isReadOnly:t}=e,[r,o]=mt(e.isSelected,e.defaultSelected||!1,e.onChange);function i(a){t||o(a)}function l(){t||o(!r)}return{isSelected:r,setSelected:i,toggle:l}}const Te=typeof document<"u"?ce.useLayoutEffect:()=>{};function R(e){const t=p.useRef(null);return Te(()=>{t.current=e},[e]),p.useCallback((...r)=>{const o=t.current;return o==null?void 0:o(...r)},[])}let Le=new Map;function Pt(e,t){if(e===t)return e;let r=Le.get(e);if(r)return r.forEach(i=>i(t)),t;let o=Le.get(t);return o?(o.forEach(i=>i(e)),e):t}function qe(...e){return(...t)=>{for(let r of e)typeof r=="function"&&r(...t)}}const P=e=>{var t;return(t=e==null?void 0:e.ownerDocument)!==null&&t!==void 0?t:document},F=e=>e&&"window"in e&&e.window===e?e:P(e).defaultView||window;function H(...e){let t={...e[0]};for(let r=1;r<e.length;r++){let o=e[r];for(let i in o){let l=t[i],a=o[i];typeof l=="function"&&typeof a=="function"&&i[0]==="o"&&i[1]==="n"&&i.charCodeAt(2)>=65&&i.charCodeAt(2)<=90?t[i]=qe(l,a):(i==="className"||i==="UNSAFE_className")&&typeof l=="string"&&typeof a=="string"?t[i]=ge(l,a):i==="id"&&l&&a?t.id=Pt(l,a):t[i]=a!==void 0?a:l}}return t}const Et=new Set(["id"]),wt=new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]),St=new Set(["href","hrefLang","target","rel","download","ping","referrerPolicy"]),xt=/^(data-.*)$/;function Lt(e,t={}){let{labelable:r,isLink:o,propNames:i}=t,l={};for(const a in e)Object.prototype.hasOwnProperty.call(e,a)&&(Et.has(a)||r&&wt.has(a)||o&&St.has(a)||i!=null&&i.has(a)||xt.test(a))&&(l[a]=e[a]);return l}function W(e){if(kt())e.focus({preventScroll:!0});else{let t=Ft(e);e.focus(),Dt(t)}}let te=null;function kt(){if(te==null){te=!1;try{document.createElement("div").focus({get preventScroll(){return te=!0,!0}})}catch{}}return te}function Ft(e){let t=e.parentNode,r=[],o=document.scrollingElement||document.documentElement;for(;t instanceof HTMLElement&&t!==o;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&r.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode;return o instanceof HTMLElement&&r.push({element:o,scrollTop:o.scrollTop,scrollLeft:o.scrollLeft}),r}function Dt(e){for(let{element:t,scrollTop:r,scrollLeft:o}of e)t.scrollTop=r,t.scrollLeft=o}function ue(e){var t;return typeof window>"u"||window.navigator==null?!1:((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.brands.some(r=>e.test(r.brand)))||e.test(window.navigator.userAgent)}function Pe(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function A(e){let t=null;return()=>(t==null&&(t=e()),t)}const Q=A(function(){return Pe(/^Mac/i)}),Ct=A(function(){return Pe(/^iPhone/i)}),Je=A(function(){return Pe(/^iPad/i)||Q()&&navigator.maxTouchPoints>1}),Qe=A(function(){return Ct()||Je()}),Kt=A(function(){return ue(/AppleWebKit/i)&&!Mt()}),Mt=A(function(){return ue(/Chrome/i)}),Ze=A(function(){return ue(/Android/i)}),_t=A(function(){return ue(/Firefox/i)});function Z(e,t,r=!0){var o,i;let{metaKey:l,ctrlKey:a,altKey:d,shiftKey:g}=t;_t()&&(!((i=window.event)===null||i===void 0||(o=i.type)===null||o===void 0)&&o.startsWith("key"))&&e.target==="_blank"&&(Q()?l=!0:a=!0);let f=Kt()&&Q()&&!Je()?new KeyboardEvent("keydown",{keyIdentifier:"Enter",metaKey:l,ctrlKey:a,altKey:d,shiftKey:g}):new MouseEvent("click",{metaKey:l,ctrlKey:a,altKey:d,shiftKey:g,bubbles:!0,cancelable:!0});Z.isOpening=r,W(e),e.dispatchEvent(f),Z.isOpening=!1}Z.isOpening=!1;let B=new Map,be=new Set;function ke(){if(typeof window>"u")return;function e(o){return"propertyName"in o}let t=o=>{if(!e(o)||!o.target)return;let i=B.get(o.target);i||(i=new Set,B.set(o.target,i),o.target.addEventListener("transitioncancel",r,{once:!0})),i.add(o.propertyName)},r=o=>{if(!e(o)||!o.target)return;let i=B.get(o.target);if(i&&(i.delete(o.propertyName),i.size===0&&(o.target.removeEventListener("transitioncancel",r),B.delete(o.target)),B.size===0)){for(let l of be)l();be.clear()}};document.body.addEventListener("transitionrun",t),document.body.addEventListener("transitionend",r)}typeof document<"u"&&(document.readyState!=="loading"?ke():document.addEventListener("DOMContentLoaded",ke));function et(e){requestAnimationFrame(()=>{B.size===0?e():be.add(e)})}function Ot(){let e=p.useRef(new Map),t=p.useCallback((i,l,a,d)=>{let g=d!=null&&d.once?(...f)=>{e.current.delete(a),a(...f)}:a;e.current.set(a,{type:l,eventTarget:i,fn:g,options:d}),i.addEventListener(l,a,d)},[]),r=p.useCallback((i,l,a,d)=>{var g;let f=((g=e.current.get(a))===null||g===void 0?void 0:g.fn)||a;i.removeEventListener(l,f,d),e.current.delete(a)},[]),o=p.useCallback(()=>{e.current.forEach((i,l)=>{r(i.eventTarget,i.type,l,i.options)})},[r]);return p.useEffect(()=>o,[o]),{addGlobalListener:t,removeGlobalListener:r,removeAllGlobalListeners:o}}function tt(e,t){Te(()=>{if(e&&e.ref&&t)return e.ref.current=t.current,()=>{e.ref&&(e.ref.current=null)}})}function ve(e){return e.mozInputSource===0&&e.isTrusted?!0:Ze()&&e.pointerType?e.type==="click"&&e.buttons===1:e.detail===0&&!e.pointerType}function It(e){return!Ze()&&e.width===0&&e.height===0||e.width===1&&e.height===1&&e.pressure===0&&e.detail===0&&e.pointerType==="mouse"}function Ht(e,t,r){let o=p.useRef(t),i=R(()=>{r&&r(o.current)});p.useEffect(()=>{var l;let a=e==null||(l=e.current)===null||l===void 0?void 0:l.form;return a==null||a.addEventListener("reset",i),()=>{a==null||a.removeEventListener("reset",i)}},[e,i])}let Y="default",$e="",ae=new WeakMap;function Fe(e){if(Qe()){if(Y==="default"){const t=P(e);$e=t.documentElement.style.webkitUserSelect,t.documentElement.style.webkitUserSelect="none"}Y="disabled"}else(e instanceof HTMLElement||e instanceof SVGElement)&&(ae.set(e,e.style.userSelect),e.style.userSelect="none")}function re(e){if(Qe()){if(Y!=="disabled")return;Y="restoring",setTimeout(()=>{et(()=>{if(Y==="restoring"){const t=P(e);t.documentElement.style.webkitUserSelect==="none"&&(t.documentElement.style.webkitUserSelect=$e||""),$e="",Y="default"}})},300)}else if((e instanceof HTMLElement||e instanceof SVGElement)&&e&&ae.has(e)){let t=ae.get(e);e.style.userSelect==="none"&&(e.style.userSelect=t),e.getAttribute("style")===""&&e.removeAttribute("style"),ae.delete(e)}}const rt=ce.createContext({register:()=>{}});rt.displayName="PressResponderContext";function At(e,t){return t.get?t.get.call(e):t.value}function nt(e,t,r){if(!t.has(e))throw new TypeError("attempted to "+r+" private field on non-instance");return t.get(e)}function Rt(e,t){var r=nt(e,t,"get");return At(e,r)}function Wt(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function Ut(e,t,r){Wt(e,t),t.set(e,r)}function Nt(e,t,r){if(t.set)t.set.call(e,r);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=r}}function De(e,t,r){var o=nt(e,t,"set");return Nt(e,o,r),r}function Vt(e){let t=p.useContext(rt);if(t){let{register:r,...o}=t;e=H(o,e),r()}return tt(t,e.ref),e}var ne=new WeakMap;class oe{continuePropagation(){De(this,ne,!1)}get shouldStopPropagation(){return Rt(this,ne)}constructor(t,r,o,i){Ut(this,ne,{writable:!0,value:void 0}),De(this,ne,!0);var l;let a=(l=i==null?void 0:i.target)!==null&&l!==void 0?l:o.currentTarget;const d=a==null?void 0:a.getBoundingClientRect();let g,f=0,$,m=null;o.clientX!=null&&o.clientY!=null&&($=o.clientX,m=o.clientY),d&&($!=null&&m!=null?(g=$-d.left,f=m-d.top):(g=d.width/2,f=d.height/2)),this.type=t,this.pointerType=r,this.target=o.currentTarget,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.x=g,this.y=f}}const Ce=Symbol("linkClicked");function Ke(e){let{onPress:t,onPressChange:r,onPressStart:o,onPressEnd:i,onPressUp:l,isDisabled:a,isPressed:d,preventFocusOnPress:g,shouldCancelOnPointerExit:f,allowTextSelectionOnPress:$,ref:m,...L}=Vt(e),[T,N]=p.useState(!1),w=p.useRef({isPressed:!1,ignoreEmulatedMouseEvents:!1,ignoreClickAfterPress:!1,didFirePressStart:!1,isTriggeringEvent:!1,activePointerId:null,target:null,isOverTarget:!1,pointerType:null}),{addGlobalListener:k,removeAllGlobalListeners:_}=Ot(),S=R((n,b)=>{let x=w.current;if(a||x.didFirePressStart)return!1;let u=!0;if(x.isTriggeringEvent=!0,o){let y=new oe("pressstart",b,n);o(y),u=y.shouldStopPropagation}return r&&r(!0),x.isTriggeringEvent=!1,x.didFirePressStart=!0,N(!0),u}),h=R((n,b,x=!0)=>{let u=w.current;if(!u.didFirePressStart)return!1;u.ignoreClickAfterPress=!0,u.didFirePressStart=!1,u.isTriggeringEvent=!0;let y=!0;if(i){let s=new oe("pressend",b,n);i(s),y=s.shouldStopPropagation}if(r&&r(!1),N(!1),t&&x&&!a){let s=new oe("press",b,n);t(s),y&&(y=s.shouldStopPropagation)}return u.isTriggeringEvent=!1,y}),O=R((n,b)=>{let x=w.current;if(a)return!1;if(l){x.isTriggeringEvent=!0;let u=new oe("pressup",b,n);return l(u),x.isTriggeringEvent=!1,u.shouldStopPropagation}return!0}),D=R(n=>{let b=w.current;b.isPressed&&b.target&&(b.isOverTarget&&b.pointerType!=null&&h(M(b.target,n),b.pointerType,!1),b.isPressed=!1,b.isOverTarget=!1,b.activePointerId=null,b.pointerType=null,_(),$||re(b.target))}),C=R(n=>{f&&D(n)}),$t=p.useMemo(()=>{let n=w.current,b={onKeyDown(u){if(fe(u.nativeEvent,u.currentTarget)&&u.currentTarget.contains(u.target)){var y;_e(u.target,u.key)&&u.preventDefault();let s=!0;if(!n.isPressed&&!u.repeat){n.target=u.currentTarget,n.isPressed=!0,s=S(u,"keyboard");let v=u.currentTarget,c=K=>{fe(K,v)&&!K.repeat&&v.contains(K.target)&&n.target&&O(M(n.target,K),"keyboard")};k(P(u.currentTarget),"keyup",qe(c,x),!0)}s&&u.stopPropagation(),u.metaKey&&Q()&&((y=n.metaKeyEvents)===null||y===void 0||y.set(u.key,u.nativeEvent))}else u.key==="Meta"&&(n.metaKeyEvents=new Map)},onClick(u){if(!(u&&!u.currentTarget.contains(u.target))&&u&&u.button===0&&!n.isTriggeringEvent&&!Z.isOpening){let y=!0;if(a&&u.preventDefault(),!n.ignoreClickAfterPress&&!n.ignoreEmulatedMouseEvents&&!n.isPressed&&(n.pointerType==="virtual"||ve(u.nativeEvent))){!a&&!g&&W(u.currentTarget);let s=S(u,"virtual"),v=O(u,"virtual"),c=h(u,"virtual");y=s&&v&&c}n.ignoreEmulatedMouseEvents=!1,n.ignoreClickAfterPress=!1,y&&u.stopPropagation()}}},x=u=>{var y;if(n.isPressed&&n.target&&fe(u,n.target)){var s;_e(u.target,u.key)&&u.preventDefault();let c=u.target;h(M(n.target,u),"keyboard",n.target.contains(c)),_(),u.key!=="Enter"&&Ee(n.target)&&n.target.contains(c)&&!u[Ce]&&(u[Ce]=!0,Z(n.target,u,!1)),n.isPressed=!1,(s=n.metaKeyEvents)===null||s===void 0||s.delete(u.key)}else if(u.key==="Meta"&&(!((y=n.metaKeyEvents)===null||y===void 0)&&y.size)){var v;let c=n.metaKeyEvents;n.metaKeyEvents=void 0;for(let K of c.values())(v=n.target)===null||v===void 0||v.dispatchEvent(new KeyboardEvent("keyup",K))}};if(typeof PointerEvent<"u"){b.onPointerDown=c=>{if(c.button!==0||!c.currentTarget.contains(c.target))return;if(It(c.nativeEvent)){n.pointerType="virtual";return}pe(c.currentTarget)&&c.preventDefault(),n.pointerType=c.pointerType;let K=!0;n.isPressed||(n.isPressed=!0,n.isOverTarget=!0,n.activePointerId=c.pointerId,n.target=c.currentTarget,!a&&!g&&W(c.currentTarget),$||Fe(n.target),K=S(c,n.pointerType),k(P(c.currentTarget),"pointermove",u,!1),k(P(c.currentTarget),"pointerup",y,!1),k(P(c.currentTarget),"pointercancel",v,!1)),K&&c.stopPropagation()},b.onMouseDown=c=>{c.currentTarget.contains(c.target)&&c.button===0&&(pe(c.currentTarget)&&c.preventDefault(),c.stopPropagation())},b.onPointerUp=c=>{!c.currentTarget.contains(c.target)||n.pointerType==="virtual"||c.button===0&&V(c,c.currentTarget)&&O(c,n.pointerType||c.pointerType)};let u=c=>{c.pointerId===n.activePointerId&&(n.target&&V(c,n.target)?!n.isOverTarget&&n.pointerType!=null&&(n.isOverTarget=!0,S(M(n.target,c),n.pointerType)):n.target&&n.isOverTarget&&n.pointerType!=null&&(n.isOverTarget=!1,h(M(n.target,c),n.pointerType,!1),C(c)))},y=c=>{c.pointerId===n.activePointerId&&n.isPressed&&c.button===0&&n.target&&(V(c,n.target)&&n.pointerType!=null?h(M(n.target,c),n.pointerType):n.isOverTarget&&n.pointerType!=null&&h(M(n.target,c),n.pointerType,!1),n.isPressed=!1,n.isOverTarget=!1,n.activePointerId=null,n.pointerType=null,_(),$||re(n.target),"ontouchend"in n.target&&c.pointerType!=="mouse"&&k(n.target,"touchend",s,{once:!0}))},s=c=>{ot(c.currentTarget)&&c.preventDefault()},v=c=>{D(c)};b.onDragStart=c=>{c.currentTarget.contains(c.target)&&D(c)}}else{b.onMouseDown=s=>{if(s.button!==0||!s.currentTarget.contains(s.target))return;if(pe(s.currentTarget)&&s.preventDefault(),n.ignoreEmulatedMouseEvents){s.stopPropagation();return}n.isPressed=!0,n.isOverTarget=!0,n.target=s.currentTarget,n.pointerType=ve(s.nativeEvent)?"virtual":"mouse",!a&&!g&&W(s.currentTarget),S(s,n.pointerType)&&s.stopPropagation(),k(P(s.currentTarget),"mouseup",u,!1)},b.onMouseEnter=s=>{if(!s.currentTarget.contains(s.target))return;let v=!0;n.isPressed&&!n.ignoreEmulatedMouseEvents&&n.pointerType!=null&&(n.isOverTarget=!0,v=S(s,n.pointerType)),v&&s.stopPropagation()},b.onMouseLeave=s=>{if(!s.currentTarget.contains(s.target))return;let v=!0;n.isPressed&&!n.ignoreEmulatedMouseEvents&&n.pointerType!=null&&(n.isOverTarget=!1,v=h(s,n.pointerType,!1),C(s)),v&&s.stopPropagation()},b.onMouseUp=s=>{s.currentTarget.contains(s.target)&&!n.ignoreEmulatedMouseEvents&&s.button===0&&O(s,n.pointerType||"mouse")};let u=s=>{if(s.button===0){if(n.isPressed=!1,_(),n.ignoreEmulatedMouseEvents){n.ignoreEmulatedMouseEvents=!1;return}n.target&&V(s,n.target)&&n.pointerType!=null?h(M(n.target,s),n.pointerType):n.target&&n.isOverTarget&&n.pointerType!=null&&h(M(n.target,s),n.pointerType,!1),n.isOverTarget=!1}};b.onTouchStart=s=>{if(!s.currentTarget.contains(s.target))return;let v=Bt(s.nativeEvent);if(!v)return;n.activePointerId=v.identifier,n.ignoreEmulatedMouseEvents=!0,n.isOverTarget=!0,n.isPressed=!0,n.target=s.currentTarget,n.pointerType="touch",!a&&!g&&W(s.currentTarget),$||Fe(n.target),S(I(n.target,s),n.pointerType)&&s.stopPropagation(),k(F(s.currentTarget),"scroll",y,!0)},b.onTouchMove=s=>{if(!s.currentTarget.contains(s.target))return;if(!n.isPressed){s.stopPropagation();return}let v=Me(s.nativeEvent,n.activePointerId),c=!0;v&&V(v,s.currentTarget)?!n.isOverTarget&&n.pointerType!=null&&(n.isOverTarget=!0,c=S(I(n.target,s),n.pointerType)):n.isOverTarget&&n.pointerType!=null&&(n.isOverTarget=!1,c=h(I(n.target,s),n.pointerType,!1),C(I(n.target,s))),c&&s.stopPropagation()},b.onTouchEnd=s=>{if(!s.currentTarget.contains(s.target))return;if(!n.isPressed){s.stopPropagation();return}let v=Me(s.nativeEvent,n.activePointerId),c=!0;v&&V(v,s.currentTarget)&&n.pointerType!=null?(O(I(n.target,s),n.pointerType),c=h(I(n.target,s),n.pointerType)):n.isOverTarget&&n.pointerType!=null&&(c=h(I(n.target,s),n.pointerType,!1)),c&&s.stopPropagation(),n.isPressed=!1,n.activePointerId=null,n.isOverTarget=!1,n.ignoreEmulatedMouseEvents=!0,n.target&&!$&&re(n.target),_()},b.onTouchCancel=s=>{s.currentTarget.contains(s.target)&&(s.stopPropagation(),n.isPressed&&D(I(n.target,s)))};let y=s=>{n.isPressed&&s.target.contains(n.target)&&D({currentTarget:n.target,shiftKey:!1,ctrlKey:!1,metaKey:!1,altKey:!1})};b.onDragStart=s=>{s.currentTarget.contains(s.target)&&D(s)}}return b},[k,a,g,_,$,D,C,h,S,O]);return p.useEffect(()=>()=>{var n;$||re((n=w.current.target)!==null&&n!==void 0?n:void 0)},[$]),{isPressed:d||T,pressProps:H(L,$t)}}function Ee(e){return e.tagName==="A"&&e.hasAttribute("href")}function fe(e,t){const{key:r,code:o}=e,i=t,l=i.getAttribute("role");return(r==="Enter"||r===" "||r==="Spacebar"||o==="Space")&&!(i instanceof F(i).HTMLInputElement&&!it(i,r)||i instanceof F(i).HTMLTextAreaElement||i.isContentEditable)&&!((l==="link"||!l&&Ee(i))&&r!=="Enter")}function Bt(e){const{targetTouches:t}=e;return t.length>0?t[0]:null}function Me(e,t){const r=e.changedTouches;for(let o=0;o<r.length;o++){const i=r[o];if(i.identifier===t)return i}return null}function I(e,t){let r=0,o=0;return t.targetTouches&&t.targetTouches.length===1&&(r=t.targetTouches[0].clientX,o=t.targetTouches[0].clientY),{currentTarget:e,shiftKey:t.shiftKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey,altKey:t.altKey,clientX:r,clientY:o}}function M(e,t){let r=t.clientX,o=t.clientY;return{currentTarget:e,shiftKey:t.shiftKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey,altKey:t.altKey,clientX:r,clientY:o}}function Yt(e){let t=0,r=0;return e.width!==void 0?t=e.width/2:e.radiusX!==void 0&&(t=e.radiusX),e.height!==void 0?r=e.height/2:e.radiusY!==void 0&&(r=e.radiusY),{top:e.clientY-r,right:e.clientX+t,bottom:e.clientY+r,left:e.clientX-t}}function Gt(e,t){return!(e.left>t.right||t.left>e.right||e.top>t.bottom||t.top>e.bottom)}function V(e,t){let r=t.getBoundingClientRect(),o=Yt(e);return Gt(r,o)}function pe(e){return!(e instanceof HTMLElement)||!e.hasAttribute("draggable")}function ot(e){return e instanceof HTMLInputElement?!1:e instanceof HTMLButtonElement?e.type!=="submit"&&e.type!=="reset":!Ee(e)}function _e(e,t){return e instanceof HTMLInputElement?!it(e,t):ot(e)}const Xt=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function it(e,t){return e.type==="checkbox"||e.type==="radio"?t===" ":Xt.has(e.type)}class jt{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(t,r){this.nativeEvent=r,this.target=r.target,this.currentTarget=r.currentTarget,this.relatedTarget=r.relatedTarget,this.bubbles=r.bubbles,this.cancelable=r.cancelable,this.defaultPrevented=r.defaultPrevented,this.eventPhase=r.eventPhase,this.isTrusted=r.isTrusted,this.timeStamp=r.timeStamp,this.type=t}}function at(e){let t=p.useRef({isFocused:!1,observer:null});Te(()=>{const o=t.current;return()=>{o.observer&&(o.observer.disconnect(),o.observer=null)}},[]);let r=R(o=>{e==null||e(o)});return p.useCallback(o=>{if(o.target instanceof HTMLButtonElement||o.target instanceof HTMLInputElement||o.target instanceof HTMLTextAreaElement||o.target instanceof HTMLSelectElement){t.current.isFocused=!0;let i=o.target,l=a=>{t.current.isFocused=!1,i.disabled&&r(new jt("blur",a)),t.current.observer&&(t.current.observer.disconnect(),t.current.observer=null)};i.addEventListener("focusout",l,{once:!0}),t.current.observer=new MutationObserver(()=>{if(t.current.isFocused&&i.disabled){var a;(a=t.current.observer)===null||a===void 0||a.disconnect();let d=i===document.activeElement?null:document.activeElement;i.dispatchEvent(new FocusEvent("blur",{relatedTarget:d})),i.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:d}))}}),t.current.observer.observe(i,{attributes:!0,attributeFilter:["disabled"]})}},[r])}function st(e){let{isDisabled:t,onFocus:r,onBlur:o,onFocusChange:i}=e;const l=p.useCallback(g=>{if(g.target===g.currentTarget)return o&&o(g),i&&i(!1),!0},[o,i]),a=at(l),d=p.useCallback(g=>{const f=P(g.target);g.target===g.currentTarget&&f.activeElement===g.target&&(r&&r(g),i&&i(!0),a(g))},[i,r,a]);return{focusProps:{onFocus:!t&&(r||i||o)?d:void 0,onBlur:!t&&(o||i)?l:void 0}}}let G=null,ye=new Set,J=new Map,U=!1,he=!1;const zt={Tab:!0,Escape:!0};function we(e,t){for(let r of ye)r(e,t)}function qt(e){return!(e.metaKey||!Q()&&e.altKey||e.ctrlKey||e.key==="Control"||e.key==="Shift"||e.key==="Meta")}function se(e){U=!0,qt(e)&&(G="keyboard",we("keyboard",e))}function E(e){G="pointer",(e.type==="mousedown"||e.type==="pointerdown")&&(U=!0,we("pointer",e))}function lt(e){ve(e)&&(U=!0,G="virtual")}function ct(e){e.target===window||e.target===document||(!U&&!he&&(G="virtual",we("virtual",e)),U=!1,he=!1)}function ut(){U=!1,he=!0}function me(e){if(typeof window>"u"||J.get(F(e)))return;const t=F(e),r=P(e);let o=t.HTMLElement.prototype.focus;t.HTMLElement.prototype.focus=function(){U=!0,o.apply(this,arguments)},r.addEventListener("keydown",se,!0),r.addEventListener("keyup",se,!0),r.addEventListener("click",lt,!0),t.addEventListener("focus",ct,!0),t.addEventListener("blur",ut,!1),typeof PointerEvent<"u"?(r.addEventListener("pointerdown",E,!0),r.addEventListener("pointermove",E,!0),r.addEventListener("pointerup",E,!0)):(r.addEventListener("mousedown",E,!0),r.addEventListener("mousemove",E,!0),r.addEventListener("mouseup",E,!0)),t.addEventListener("beforeunload",()=>{dt(e)},{once:!0}),J.set(t,{focus:o})}const dt=(e,t)=>{const r=F(e),o=P(e);t&&o.removeEventListener("DOMContentLoaded",t),J.has(r)&&(r.HTMLElement.prototype.focus=J.get(r).focus,o.removeEventListener("keydown",se,!0),o.removeEventListener("keyup",se,!0),o.removeEventListener("click",lt,!0),r.removeEventListener("focus",ct,!0),r.removeEventListener("blur",ut,!1),typeof PointerEvent<"u"?(o.removeEventListener("pointerdown",E,!0),o.removeEventListener("pointermove",E,!0),o.removeEventListener("pointerup",E,!0)):(o.removeEventListener("mousedown",E,!0),o.removeEventListener("mousemove",E,!0),o.removeEventListener("mouseup",E,!0)),J.delete(r))};function Jt(e){const t=P(e);let r;return t.readyState!=="loading"?me(e):(r=()=>{me(e)},t.addEventListener("DOMContentLoaded",r)),()=>dt(e,r)}typeof document<"u"&&Jt();function ft(){return G!=="pointer"}function Qt(){return G}const Zt=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function er(e,t,r){var o;const i=typeof window<"u"?F(r==null?void 0:r.target).HTMLInputElement:HTMLInputElement,l=typeof window<"u"?F(r==null?void 0:r.target).HTMLTextAreaElement:HTMLTextAreaElement,a=typeof window<"u"?F(r==null?void 0:r.target).HTMLElement:HTMLElement,d=typeof window<"u"?F(r==null?void 0:r.target).KeyboardEvent:KeyboardEvent;return e=e||(r==null?void 0:r.target)instanceof i&&!Zt.has(r==null||(o=r.target)===null||o===void 0?void 0:o.type)||(r==null?void 0:r.target)instanceof l||(r==null?void 0:r.target)instanceof a&&(r==null?void 0:r.target.isContentEditable),!(e&&t==="keyboard"&&r instanceof d&&!zt[r.key])}function tr(e,t,r){me(),p.useEffect(()=>{let o=(i,l)=>{er(!!(r!=null&&r.isTextInput),i,l)&&e(ft())};return ye.add(o),()=>{ye.delete(o)}},t)}function pt(e){let{isDisabled:t,onBlurWithin:r,onFocusWithin:o,onFocusWithinChange:i}=e,l=p.useRef({isFocusWithin:!1}),a=p.useCallback(f=>{l.current.isFocusWithin&&!f.currentTarget.contains(f.relatedTarget)&&(l.current.isFocusWithin=!1,r&&r(f),i&&i(!1))},[r,i,l]),d=at(a),g=p.useCallback(f=>{!l.current.isFocusWithin&&document.activeElement===f.target&&(o&&o(f),i&&i(!0),l.current.isFocusWithin=!0,d(f))},[o,i,d]);return t?{focusWithinProps:{onFocus:void 0,onBlur:void 0}}:{focusWithinProps:{onFocus:g,onBlur:a}}}function Oe(e){if(!e)return;let t=!0;return r=>{let o={...r,preventDefault(){r.preventDefault()},isDefaultPrevented(){return r.isDefaultPrevented()},stopPropagation(){console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.")},continuePropagation(){t=!1}};e(o),t&&r.stopPropagation()}}function rr(e){return{keyboardProps:e.isDisabled?{}:{onKeyDown:Oe(e.onKeyDown),onKeyUp:Oe(e.onKeyUp)}}}function nr(e){const t=P(e);if(Qt()==="virtual"){let r=t.activeElement;et(()=>{t.activeElement===r&&e.isConnected&&W(e)})}else W(e)}function or(e={}){let{autoFocus:t=!1,isTextInput:r,within:o}=e,i=p.useRef({isFocused:!1,isFocusVisible:t||ft()}),[l,a]=p.useState(!1),[d,g]=p.useState(()=>i.current.isFocused&&i.current.isFocusVisible),f=p.useCallback(()=>g(i.current.isFocused&&i.current.isFocusVisible),[]),$=p.useCallback(T=>{i.current.isFocused=T,a(T),f()},[f]);tr(T=>{i.current.isFocusVisible=T,f()},[],{isTextInput:r});let{focusProps:m}=st({isDisabled:o,onFocusChange:$}),{focusWithinProps:L}=pt({isDisabled:!o,onFocusWithinChange:$});return{isFocused:l,isFocusVisible:d,focusProps:o?L:m}}let ir=ce.createContext(null);function ar(e){let t=p.useContext(ir)||{};tt(t,e);let{ref:r,...o}=t;return o}function sr(e,t){let{focusProps:r}=st(e),{keyboardProps:o}=rr(e),i=H(r,o),l=ar(t),a=e.isDisabled?{}:l,d=p.useRef(e.autoFocus);return p.useEffect(()=>{d.current&&t.current&&nr(t.current),d.current=!1},[t]),{focusableProps:H({...i,tabIndex:e.excludeFromTabOrder&&!e.isDisabled?-1:void 0},a)}}function lr(e,t,r){let{isDisabled:o=!1,isReadOnly:i=!1,value:l,name:a,children:d,"aria-label":g,"aria-labelledby":f,validationState:$="valid",isInvalid:m}=e,L=C=>{C.stopPropagation(),t.setSelected(C.target.checked)},T=d!=null,N=g!=null||f!=null;!T&&!N&&console.warn("If you do not provide children, you must specify an aria-label for accessibility");let{pressProps:w,isPressed:k}=Ke({isDisabled:o}),{pressProps:_,isPressed:S}=Ke({isDisabled:o||i,onPress(){t.toggle()}}),{focusableProps:h}=sr(e,r),O=H(w,h),D=Lt(e,{labelable:!0});return Ht(r,t.isSelected,t.setSelected),{labelProps:H(_,{onClick:C=>C.preventDefault()}),inputProps:H(D,{"aria-invalid":m||$==="invalid"||void 0,"aria-errormessage":e["aria-errormessage"],"aria-controls":e["aria-controls"],"aria-readonly":i||void 0,onChange:L,disabled:o,...l==null?{}:{value:l},name:a,type:"checkbox",...O}),isSelected:t.isSelected,isPressed:k||S,isDisabled:o,isReadOnly:i,isInvalid:m||$==="invalid"}}const Ie={border:0,clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap"};function cr(e={}){let{style:t,isFocusable:r}=e,[o,i]=p.useState(!1),{focusWithinProps:l}=pt({isDisabled:!r,onFocusWithinChange:d=>i(d)}),a=p.useMemo(()=>o?t:t?{...Ie,...t}:Ie,[o]);return{visuallyHiddenProps:{...l,style:a}}}function ur(e){let{children:t,elementType:r="div",isFocusable:o,style:i,...l}=e,{visuallyHiddenProps:a}=cr(e);return ce.createElement(r,H(l,a),t)}function dr(e,t,r){let{labelProps:o,inputProps:i,isSelected:l,isPressed:a,isDisabled:d,isReadOnly:g}=lr(e,t,r);return{labelProps:o,inputProps:{...i,role:"switch",checked:l},isSelected:l,isPressed:a,isDisabled:d,isReadOnly:g}}var ie={disabled:"_6xc8dy0",default:"_6xc8dy1",transition:"_6xc8dy2"},fr="_6xc8dy3",pr="_6xc8dy4",He={default:"_6xc8dy5",toggled:"_6xc8dy6"},gr="_6xc8dy7",br="_6xc8dy8";const le=({className:e,disabled:t,toggled:r,isSelected:o,isDisabled:i,...l})=>{const a={...l,isDisabled:i||t,isSelected:o||r},d=Tt(a),g=p.useRef(null),{inputProps:f}=dr(a,d,g),{isFocusVisible:$,focusProps:m}=or();return p.createElement("label",null,p.createElement(ur,null,p.createElement("input",{...f,...m,ref:g})),p.createElement(Se,{className:ge(br,xe({size:"5"}),{[He.default]:f.disabled,[He.toggled]:d.isSelected&&f.disabled,[fr]:d.isSelected,[pr]:!d.isSelected,[gr]:$},e),tabIndex:f.disabled?-1:void 0,borderRadius:"pill",position:"relative","aria-disabled":f.disabled,"aria-label":`toggle ${d.isSelected?"on":"off"}`},p.createElement(Se,{borderWidth:"1",position:"absolute",borderRadius:"pill",backgroundColour:"white",padding:"none",pointerEvents:f.disabled?"none":void 0,boxShadow:"2",className:ge(ie.default,ht({is:"button"}),xe({colour:"white"}),{[ie.transition]:d.isSelected,[ie.default]:f.disabled,[ie.disabled]:f.disabled})})),a.children)};try{le.displayName="Switch",le.__docgenInfo={description:"",displayName:"Switch",props:{disabled:{defaultValue:null,description:"@deprecated use isDisabled instead",name:"disabled",required:!1,type:{name:"boolean"}},toggled:{defaultValue:null,description:"@deprecated use isSelected instead",name:"toggled",required:!1,type:{name:"boolean"}}}}}catch{}const Pr={title:"Components/Switch",component:le},de=({...e})=>p.createElement(le,{...e}),ee={isDisabled:!1,isSelected:!1,onChange:yt("onChange"),className:"toggleButton-class"},X=de.bind(ee);X.args=ee;const gt={...ee,isDisabled:!0},j=de.bind(gt);j.args=gt;const bt={...ee,isSelected:!0},z=de.bind(bt);z.args=bt;const vt={...ee,isSelected:!0,isDisabled:!0},q=de.bind(vt);q.args=vt;var Ae,Re,We;X.parameters={...X.parameters,docs:{...(Ae=X.parameters)==null?void 0:Ae.docs,source:{originalSource:"Template.bind(standardProps)",...(We=(Re=X.parameters)==null?void 0:Re.docs)==null?void 0:We.source}}};var Ue,Ne,Ve;j.parameters={...j.parameters,docs:{...(Ue=j.parameters)==null?void 0:Ue.docs,source:{originalSource:"Template.bind(untoggledDisabledProps)",...(Ve=(Ne=j.parameters)==null?void 0:Ne.docs)==null?void 0:Ve.source}}};var Be,Ye,Ge;z.parameters={...z.parameters,docs:{...(Be=z.parameters)==null?void 0:Be.docs,source:{originalSource:"Template.bind(toggledProps)",...(Ge=(Ye=z.parameters)==null?void 0:Ye.docs)==null?void 0:Ge.source}}};var Xe,je,ze;q.parameters={...q.parameters,docs:{...(Xe=q.parameters)==null?void 0:Xe.docs,source:{originalSource:"Template.bind(toggledDisabledProps)",...(ze=(je=q.parameters)==null?void 0:je.docs)==null?void 0:ze.source}}};const Er=["untoggled","untoggledDisabled","toggled","toggledDisabled"];export{Er as __namedExportsOrder,Pr as default,z as toggled,q as toggledDisabled,X as untoggled,j as untoggledDisabled};