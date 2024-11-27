import{r as a}from"./index-sWIihdb-.js";import{b as Ce,s as je}from"./argTypes-DWwBcpdC.js";import{B as C,c as Te}from"./Box-D0fGWDzz.js";import{f as xe}from"./index-CaeieD2U.js";import{S as Me}from"./Section-DriPpe5X.js";import{a as B,C as _e}from"./Column-DFk6n3Y0.js";import{S as ke}from"./Stack-AaFpQHnl.js";import{B as J}from"./Button-B6igyGzo.js";import{I as Q}from"./Icon-CfSZGzIU.js";import{I as Ie}from"./ChevronLeftIcon-lQceBY25.js";import{I as Ae}from"./ChevronRightIcon-CU43CnqQ.js";import{S as Ue}from"./SliderProgress-zrDI9yrU.js";import"./_commonjsHelpers-C932wzq6.js";import"./tokens-JYR_Lhlb.js";import"./makeTheme-BvwTE3C0.js";import"./useNegativeMarginTop-BTcm4eR4.js";import"./tiny-invariant-CopsF_GD.js";import"./useTextStyles-v_jGj5tR.js";import"./ProgressSpinner-twgjDr5q.js";const De="Left",Ne="Right",qe="Up",Ve="Down",j={delta:10,preventScrollOnSwipe:!1,rotationAngle:0,trackMouse:!1,trackTouch:!0,swipeDuration:1/0,touchEventOptions:{passive:!0}},R={first:!0,initial:[0,0],start:0,swiping:!1,xy:[0,0]},Z="mousemove",ee="mouseup",Ge="touchend",Le="touchmove",Be="touchstart";function Re(e,t,r,i){return e>t?r>0?Ne:De:i>0?Ve:qe}function te(e,t){if(t===0)return e;const r=Math.PI/180*t,i=e[0]*Math.cos(r)+e[1]*Math.sin(r),g=e[1]*Math.cos(r)-e[0]*Math.sin(r);return[i,g]}function ze(e,t){const r=n=>{const s="touches"in n;s&&n.touches.length>1||e((o,u)=>{u.trackMouse&&!s&&(document.addEventListener(Z,i),document.addEventListener(ee,l));const{clientX:p,clientY:b}=s?n.touches[0]:n,v=te([p,b],u.rotationAngle);return u.onTouchStartOrOnMouseDown&&u.onTouchStartOrOnMouseDown({event:n}),Object.assign(Object.assign(Object.assign({},o),R),{initial:v.slice(),xy:v,start:n.timeStamp||0})})},i=n=>{e((s,o)=>{const u="touches"in n;if(u&&n.touches.length>1)return s;if(n.timeStamp-s.start>o.swipeDuration)return s.swiping?Object.assign(Object.assign({},s),{swiping:!1}):s;const{clientX:p,clientY:b}=u?n.touches[0]:n,[v,E]=te([p,b],o.rotationAngle),m=v-s.xy[0],f=E-s.xy[1],w=Math.abs(m),P=Math.abs(f),x=(n.timeStamp||0)-s.start,G=Math.sqrt(w*w+P*P)/(x||1),L=[m/(x||1),f/(x||1)],M=Re(w,P,m,f),y=typeof o.delta=="number"?o.delta:o.delta[M.toLowerCase()]||j.delta;if(w<y&&P<y&&!s.swiping)return s;const S={absX:w,absY:P,deltaX:m,deltaY:f,dir:M,event:n,first:s.first,initial:s.initial,velocity:G,vxvy:L};S.first&&o.onSwipeStart&&o.onSwipeStart(S),o.onSwiping&&o.onSwiping(S);let N=!1;return(o.onSwiping||o.onSwiped||o[`onSwiped${M}`])&&(N=!0),N&&o.preventScrollOnSwipe&&o.trackTouch&&n.cancelable&&n.preventDefault(),Object.assign(Object.assign({},s),{first:!1,eventData:S,swiping:!0})})},g=n=>{e((s,o)=>{let u;if(s.swiping&&s.eventData){if(n.timeStamp-s.start<o.swipeDuration){u=Object.assign(Object.assign({},s.eventData),{event:n}),o.onSwiped&&o.onSwiped(u);const p=o[`onSwiped${u.dir}`];p&&p(u)}}else o.onTap&&o.onTap({event:n});return o.onTouchEndOrOnMouseUp&&o.onTouchEndOrOnMouseUp({event:n}),Object.assign(Object.assign(Object.assign({},s),R),{eventData:u})})},h=()=>{document.removeEventListener(Z,i),document.removeEventListener(ee,l)},l=n=>{h(),g(n)},c=(n,s)=>{let o=()=>{};if(n&&n.addEventListener){const u=Object.assign(Object.assign({},j.touchEventOptions),s.touchEventOptions),p=[[Be,r,u],[Le,i,Object.assign(Object.assign({},u),s.preventScrollOnSwipe?{passive:!1}:{})],[Ge,g,u]];p.forEach(([b,v,E])=>n.addEventListener(b,v,E)),o=()=>p.forEach(([b,v])=>n.removeEventListener(b,v))}return o},O={ref:n=>{n!==null&&e((s,o)=>{if(s.el===n)return s;const u={};return s.el&&s.el!==n&&s.cleanUpTouch&&(s.cleanUpTouch(),u.cleanUpTouch=void 0),o.trackTouch&&n&&(u.cleanUpTouch=c(n,o)),Object.assign(Object.assign(Object.assign({},s),{el:n}),u)})}};return t.trackMouse&&(O.onMouseDown=r),[O,c]}function He(e,t,r,i){return!t.trackTouch||!e.el?(e.cleanUpTouch&&e.cleanUpTouch(),Object.assign(Object.assign({},e),{cleanUpTouch:void 0})):e.cleanUpTouch?t.preventScrollOnSwipe!==r.preventScrollOnSwipe||t.touchEventOptions.passive!==r.touchEventOptions.passive?(e.cleanUpTouch(),Object.assign(Object.assign({},e),{cleanUpTouch:i(e.el,t)})):e:Object.assign(Object.assign({},e),{cleanUpTouch:i(e.el,t)})}function Xe(e){const{trackMouse:t}=e,r=a.useRef(Object.assign({},R)),i=a.useRef(Object.assign({},j)),g=a.useRef(Object.assign({},i.current));g.current=Object.assign({},i.current),i.current=Object.assign(Object.assign({},j),e);let h;for(h in j)i.current[h]===void 0&&(i.current[h]=j[h]);const[l,c]=a.useMemo(()=>ze(d=>r.current=d(r.current,i.current),{trackMouse:t}),[t]);return r.current=He(r.current,i.current,g.current,c),l}var re="_2i92q00",ne="_2i92q01",$e="_2i92q02",Ye="_2i92q03",We="_2i92q04",Ke="_2i92q05",z=new Map,q=new WeakMap,ae=0,Fe=void 0;function Je(e){return e?(q.has(e)||(ae+=1,q.set(e,ae.toString())),q.get(e)):"0"}function Qe(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?Je(e.root):e[t]}`).toString()}function Ze(e){const t=Qe(e);let r=z.get(t);if(!r){const i=new Map;let g;const h=new IntersectionObserver(l=>{l.forEach(c=>{var d;const O=c.isIntersecting&&g.some(n=>c.intersectionRatio>=n);e.trackVisibility&&typeof c.isVisible>"u"&&(c.isVisible=O),(d=i.get(c.target))==null||d.forEach(n=>{n(O,c)})})},e);g=h.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:h,elements:i},z.set(t,r)}return r}function et(e,t,r={},i=Fe){if(typeof window.IntersectionObserver>"u"&&i!==void 0){const d=e.getBoundingClientRect();return t(i,{isIntersecting:i,target:e,intersectionRatio:typeof r.threshold=="number"?r.threshold:0,time:0,boundingClientRect:d,intersectionRect:d,rootBounds:d}),()=>{}}const{id:g,observer:h,elements:l}=Ze(r),c=l.get(e)||[];return l.has(e)||l.set(e,c),c.push(t),h.observe(e),function(){c.splice(c.indexOf(t),1),c.length===0&&(l.delete(e),h.unobserve(e)),l.size===0&&(h.disconnect(),z.delete(g))}}function tt({threshold:e,delay:t,trackVisibility:r,rootMargin:i,root:g,triggerOnce:h,skip:l,initialInView:c,fallbackInView:d,onChange:O}={}){var n;const[s,o]=a.useState(null),u=a.useRef(),[p,b]=a.useState({inView:!!c,entry:void 0});u.current=O,a.useEffect(()=>{if(l||!s)return;let f;return f=et(s,(w,P)=>{b({inView:w,entry:P}),u.current&&u.current(w,P),P.isIntersecting&&h&&f&&(f(),f=void 0)},{root:g,rootMargin:i,threshold:e,trackVisibility:r,delay:t},d),()=>{f&&f()}},[Array.isArray(e)?e.toString():e,s,g,i,h,l,r,d,t]);const v=(n=p.entry)==null?void 0:n.target,E=a.useRef();!s&&v&&!h&&!l&&E.current!==v&&(E.current=v,b({inView:!!c,entry:void 0}));const m=[o,p.inView,p.entry];return m.ref=m[0],m.inView=m[1],m.entry=m[2],m}const se=e=>typeof e.activePage=="number"&&e.activePage+1<e.pageCount?e.activePage+1:0,rt=e=>typeof e.activePage=="number"&&e.activePage-1>=0?e.activePage-1:e.pageCount-1,nt=(e,t)=>{switch(t.type){case"GO_TO_PAGE":return{...e,activePage:t.payload};case"SET_PAGE_COUNT":return{...e,pageCount:t.payload};case"NEXT_PAGE":return{...e,paused:!1,activePage:se(e)};case"CLICK_NEXT":return{...e,paused:!1,activePage:se(e)};case"PREV_PAGE":return{...e,paused:!1,activePage:rt(e)};case"PAUSE":return{...e,paused:!0};case"RESUME":return{...e,paused:!1};default:return e}},at=({itemsRef:e,itemsPerPage:t=1,paused:r=!1,activePage:i=null,onChange:g=()=>{}})=>{const[{pageCount:h,activePage:l,paused:c},d]=a.useReducer(nt,{paused:r,activePage:void 0,pageCount:e!=null&&e.length?Math.ceil(e.length/t):1});a.useEffect(()=>{d({type:"SET_PAGE_COUNT",payload:e!=null&&e.length?Math.ceil(e.length/t):1})},[e==null?void 0:e.length,t]);const O=a.useCallback(f=>{f&&typeof l!="number"&&d({type:"GO_TO_PAGE",payload:typeof i=="number"?i:0})},[i,l]),[n,s,o]=tt({triggerOnce:!1,rootMargin:"0px",onChange:O}),u=a.useCallback(()=>{d({type:"NEXT_PAGE"})},[]),p=a.useCallback(()=>{d({type:"PREV_PAGE"})},[]),b=a.useCallback(f=>{d({type:"GO_TO_PAGE",payload:f})},[]),v=a.useCallback(()=>{d({type:"CLICK_NEXT"})},[]),E=a.useCallback(()=>{d({type:"PAUSE"})},[]),m=a.useCallback(()=>{d({type:"RESUME"})},[]);return a.useEffect(()=>{typeof l!="number"||!(e!=null&&e.length)||(g(l),a.startTransition(()=>{o==null||o.target.scrollTo({top:0,left:e[l].getBoundingClientRect().left-e[0].getBoundingClientRect().left,behavior:"smooth"})}))},[e,l,o==null?void 0:o.target,g]),a.useMemo(()=>({containerRef:n,paused:c||!s,pageCount:h,activePage:l,next:u,prev:p,goToPage:b,onClick:v,pause:E,resume:m}),[n,h,l,c,s])},V=({sliderProgressColour:e="primary",noControls:t=!1,space:r="5",durationSeconds:i=10,children:g,itemsPerPage:h,paused:l,activePage:c,columnWidth:d="1/2",className:O})=>{const n=a.useMemo(()=>xe(g),[g]),[s,o]=a.useState(c),[u,p]=a.useState(),b=a.useMemo(()=>{const y=[],S=n.map((N,K)=>a.createElement(B,{ref:F=>{F&&y.push(F)},key:K,noShrink:!0,width:d,justifyContent:"stretch",alignSelf:"stretch"},a.createElement(C,{width:"full",className:Te(We,{[Ke]:K===s})},N)));return p(y),S},[n,s,d]),{containerRef:v,pageCount:E,activePage:m,paused:f,next:w,prev:P,onClick:x,pause:G,resume:L}=at({itemsRef:u,itemsPerPage:h,paused:l,activePage:c,onChange:o}),M=Xe({onSwiped:y=>{y.dir==="Left"?w():P()}});return b.length<2?a.createElement(a.Fragment,null,b):a.createElement(ke,{className:O,space:"5"},a.createElement(C,{overflow:"hidden",position:"relative",...M,onContextMenu:y=>{y.preventDefault(),y.stopPropagation()},onTouchStart:G,onTouchEnd:L,onClick:x},t?null:a.createElement(C,{className:[re,$e],display:"flex",alignItems:"center",justifyContent:"flexStart",position:"absolute"},a.createElement(J,{rounded:!0,onClick:y=>{y.stopPropagation(),y.preventDefault(),P()},variant:"secondary"},a.createElement(Q,{icon:Ie}))),a.createElement(_e,{ref:v,overflow:"hidden",noWrap:!0,width:"full",space:r},t?null:a.createElement(B,{noShrink:!0,className:ne},a.createElement("span",null)),b,t?null:a.createElement(B,{noShrink:!0,className:ne},a.createElement("span",null))),t?null:a.createElement(C,{className:[re,Ye],display:"flex",alignItems:"center",justifyContent:"flexEnd",position:"absolute"},a.createElement(J,{rounded:!0,onClick:y=>{y.stopPropagation(),y.preventDefault(),w()},variant:"secondary"},a.createElement(Q,{icon:Ae})))),a.createElement(Me,{width:"small"},a.createElement(Ue,{backgroundColour:e,duration:`${i}s`,paused:f,onRequestNext:w,totalCount:E,activeIndex:m||0})))};try{V.displayName="HorizontalAutoScroller",V.__docgenInfo={description:"",displayName:"HorizontalAutoScroller",props:{durationSeconds:{defaultValue:{value:"10"},description:"",name:"durationSeconds",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},columnWidth:{defaultValue:{value:"1/2"},description:"",name:"columnWidth",required:!1,type:{name:"ResponsiveProp<string | number>"}},sliderProgressColour:{defaultValue:{value:"primary"},description:"",name:"sliderProgressColour",required:!1,type:{name:"enum",value:[{value:'"transparent"'},{value:'"white"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"neutral"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'},{value:'"black900"'},{value:'"black800"'},{value:'"black700"'},{value:'"black600"'},{value:'"black500"'},{value:'"black400"'},{value:'"black300"'},{value:'"black200"'},{value:'"black100"'},{value:'"gray900"'},{value:'"gray800"'},{value:'"gray700"'},{value:'"gray600"'},{value:'"gray500"'},{value:'"gray400"'},{value:'"gray300"'},{value:'"gray200"'},{value:'"gray100"'},{value:'"blue900"'},{value:'"blue800"'},{value:'"blue700"'},{value:'"blue600"'},{value:'"blue500"'},{value:'"blue400"'},{value:'"blue300"'},{value:'"blue200"'},{value:'"blue100"'},{value:'"green900"'},{value:'"green800"'},{value:'"green700"'},{value:'"green600"'},{value:'"green500"'},{value:'"green400"'},{value:'"green300"'},{value:'"green200"'},{value:'"green100"'},{value:'"red900"'},{value:'"red800"'},{value:'"red700"'},{value:'"red600"'},{value:'"red500"'},{value:'"red400"'},{value:'"red300"'},{value:'"red200"'},{value:'"red100"'},{value:'"yellow900"'},{value:'"yellow800"'},{value:'"yellow700"'},{value:'"yellow600"'},{value:'"yellow500"'},{value:'"yellow400"'},{value:'"yellow300"'},{value:'"yellow200"'},{value:'"yellow100"'}]}},noControls:{defaultValue:{value:"false"},description:"",name:"noControls",required:!1,type:{name:"boolean"}},space:{defaultValue:{value:"5"},description:"",name:"space",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((page: number) => void)"}},paused:{defaultValue:null,description:"",name:"paused",required:!1,type:{name:"boolean"}},activePage:{defaultValue:null,description:"",name:"activePage",required:!1,type:{name:"number | null"}},itemsPerPage:{defaultValue:null,description:"",name:"itemsPerPage",required:!1,type:{name:"number"}}}}}catch{}class X{static _xfnv1a(t){let r=2166136261;for(let i=0;i<t.length;i++)r=Math.imul(r^t.charCodeAt(i),16777619);return()=>(r+=r<<13,r^=r>>>7,r+=r<<3,r^=r>>>17,(r+=r<<5)>>>0)}}class $ extends X{constructor(t){super(),Object.defineProperty(this,"a",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.a=$._xfnv1a(t)()}next(){let t=this.a+=1831565813;return t=Math.imul(t^t>>>15,1|t),t^=t+Math.imul(t^t>>>7,61|t),((t^t>>>14)>>>0)/4294967296}}class Y extends X{constructor(t){super(),Object.defineProperty(this,"a",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"b",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"c",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"d",{enumerable:!0,configurable:!0,writable:!0,value:void 0});const r=Y._xfnv1a(t);this.a=r(),this.b=r(),this.c=r(),this.d=r()}next(){this.a>>>=0,this.b>>>=0,this.c>>>=0,this.d>>>=0;let t=this.a+this.b|0;return this.a=this.b^this.b>>>9,this.b=this.c+(this.c<<3)|0,this.c=this.c<<21|this.c>>>11,this.d=this.d+1|0,t=t+this.d|0,this.c=this.c+t|0,(t>>>0)/4294967296}}class W extends X{constructor(t){super(),Object.defineProperty(this,"a",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"b",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"c",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"d",{enumerable:!0,configurable:!0,writable:!0,value:void 0});const r=W._xfnv1a(t);this.a=r(),this.b=r(),this.c=r(),this.d=r()}next(){const t=this.b<<9;let r=5*this.b;return r=9*(r<<7|r>>>25),this.c^=this.a,this.d^=this.b,this.b^=this.c,this.a^=this.d,this.c^=t,this.d=this.d<<11|this.d>>>21,(r>>>0)/4294967296}}var H;(function(e){e.sfc32="sfc32",e.mulberry32="mulberry32",e.xoshiro128ss="xoshiro128ss"})(H||(H={}));class st{constructor(t,r=H.sfc32){Object.defineProperty(this,"str",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"prng",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"generator",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.str=t,this.prng=r,this.generator=this._initializeGenerator()}next(){return this.generator.next()}_initializeGenerator(){if((r=>r===null)(t=this.str)||(r=>r===void 0)(t))return this.wrap();var t;switch(this.prng){case"sfc32":return new Y(this.str);case"mulberry32":return new $(this.str);case"xoshiro128ss":return new W(this.str);default:return this.wrap()}}wrap(){return{next:()=>Math.random()}}}const jt={title:"Components/HorizontalAutoScroller",component:V,argTypes:{sliderProgressColour:Ce.backgroundColour,space:{options:je,control:{type:"select"}},paused:{control:{type:"boolean"}},noControls:{control:{type:"boolean"}}}},ot=new st("storybook"),D=({childrenNum:e,...t})=>a.createElement(V,{...t},Array.from({length:e}).map((r,i)=>a.createElement(C,{key:i,backgroundColour:"gray200",padding:"3",display:"flex",width:"full",height:"full",alignItems:"center",justifyContent:"center"},a.createElement(C,{style:{width:"100%",height:20+Math.ceil(ot.next()*300)},backgroundColour:"gray900"})))),T={paused:!1,activePage:0,childrenNum:9},_=D.bind(T);_.args=T;const Pe={...T,activePage:3},k=D.bind(Pe);k.args=Pe;const Oe={...T,durationSeconds:1},I=D.bind(Oe);I.args=Oe;const Ee={...T,sliderProgressColour:"yellow500"},A=D.bind(Ee);A.args=Ee;const Se={...T,childrenNum:50},U=D.bind(Se);U.args=Se;var oe,ie,ue;_.parameters={..._.parameters,docs:{...(oe=_.parameters)==null?void 0:oe.docs,source:{originalSource:"template.bind(standardProps)",...(ue=(ie=_.parameters)==null?void 0:ie.docs)==null?void 0:ue.source}}};var le,ce,de;k.parameters={...k.parameters,docs:{...(le=k.parameters)==null?void 0:le.docs,source:{originalSource:"template.bind(widthStartPageProps)",...(de=(ce=k.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var he,ge,pe;I.parameters={...I.parameters,docs:{...(he=I.parameters)==null?void 0:he.docs,source:{originalSource:"template.bind(withCustomDurationProps)",...(pe=(ge=I.parameters)==null?void 0:ge.docs)==null?void 0:pe.source}}};var fe,be,ve;A.parameters={...A.parameters,docs:{...(fe=A.parameters)==null?void 0:fe.docs,source:{originalSource:"template.bind(withProgressColourProps)",...(ve=(be=A.parameters)==null?void 0:be.docs)==null?void 0:ve.source}}};var me,ye,we;U.parameters={...U.parameters,docs:{...(me=U.parameters)==null?void 0:me.docs,source:{originalSource:"template.bind(withManySlidesProps)",...(we=(ye=U.parameters)==null?void 0:ye.docs)==null?void 0:we.source}}};const Tt=["standard","widthStartPage","withCustomDuration","withProgressColour","withManySlides"];export{Tt as __namedExportsOrder,jt as default,_ as standard,k as widthStartPage,I as withCustomDuration,U as withManySlides,A as withProgressColour};