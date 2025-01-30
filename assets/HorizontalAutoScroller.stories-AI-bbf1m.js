import{r as a}from"./index-Cr_cdoBq.js";import{b as Ee,s as Ce}from"./argTypes-C5cQ_jgM.js";import{B as C,c as je}from"./Box-BgJfRyZk.js";import{f as Te}from"./index-DD0GW_rr.js";import{S as xe}from"./Section-CWqn1IYj.js";import{a as B,C as Me}from"./Column-CX14_eOH.js";import{S as _e}from"./Stack-JJTXvuyz.js";import{B as J}from"./Button-C47VPPWg.js";import{I as Q}from"./Icon-BXN3T9_P.js";import{I as ke}from"./ChevronLeftIcon-aalJjR7X.js";import{I as Ie}from"./ChevronRightIcon-nv1TUYIg.js";import{S as Ae}from"./SliderProgress-CmEoUFPS.js";import"./_commonjsHelpers-C932wzq6.js";import"./tokens-BrgPbGY2.js";import"./makeTheme-BvwTE3C0.js";import"./index-CYx1ALmS.js";import"./useNegativeMarginTop-1XxPf5Tb.js";import"./dataAttrs-BPvLuXwN.js";import"./useTextStyles-BOnRnbMM.js";import"./ProgressSpinner-BXEJeo_x.js";const Ue="Left",De="Right",Ne="Up",qe="Down",j={delta:10,preventScrollOnSwipe:!1,rotationAngle:0,trackMouse:!1,trackTouch:!0,swipeDuration:1/0,touchEventOptions:{passive:!0}},R={first:!0,initial:[0,0],start:0,swiping:!1,xy:[0,0]},Z="mousemove",ee="mouseup",Ve="touchend",Ge="touchmove",Le="touchstart";function Be(e,t,r,i){return e>t?r>0?De:Ue:i>0?qe:Ne}function te(e,t){if(t===0)return e;const r=Math.PI/180*t,i=e[0]*Math.cos(r)+e[1]*Math.sin(r),g=e[1]*Math.cos(r)-e[0]*Math.sin(r);return[i,g]}function Re(e,t){const r=n=>{const s="touches"in n;s&&n.touches.length>1||e((o,u)=>{u.trackMouse&&!s&&(document.addEventListener(Z,i),document.addEventListener(ee,l));const{clientX:p,clientY:v}=s?n.touches[0]:n,b=te([p,v],u.rotationAngle);return u.onTouchStartOrOnMouseDown&&u.onTouchStartOrOnMouseDown({event:n}),Object.assign(Object.assign(Object.assign({},o),R),{initial:b.slice(),xy:b,start:n.timeStamp||0})})},i=n=>{e((s,o)=>{const u="touches"in n;if(u&&n.touches.length>1)return s;if(n.timeStamp-s.start>o.swipeDuration)return s.swiping?Object.assign(Object.assign({},s),{swiping:!1}):s;const{clientX:p,clientY:v}=u?n.touches[0]:n,[b,S]=te([p,v],o.rotationAngle),m=b-s.xy[0],f=S-s.xy[1],P=Math.abs(m),O=Math.abs(f),x=(n.timeStamp||0)-s.start,G=Math.sqrt(P*P+O*O)/(x||1),L=[m/(x||1),f/(x||1)],M=Be(P,O,m,f),y=typeof o.delta=="number"?o.delta:o.delta[M.toLowerCase()]||j.delta;if(P<y&&O<y&&!s.swiping)return s;const E={absX:P,absY:O,deltaX:m,deltaY:f,dir:M,event:n,first:s.first,initial:s.initial,velocity:G,vxvy:L};E.first&&o.onSwipeStart&&o.onSwipeStart(E),o.onSwiping&&o.onSwiping(E);let N=!1;return(o.onSwiping||o.onSwiped||o[`onSwiped${M}`])&&(N=!0),N&&o.preventScrollOnSwipe&&o.trackTouch&&n.cancelable&&n.preventDefault(),Object.assign(Object.assign({},s),{first:!1,eventData:E,swiping:!0})})},g=n=>{e((s,o)=>{let u;if(s.swiping&&s.eventData){if(n.timeStamp-s.start<o.swipeDuration){u=Object.assign(Object.assign({},s.eventData),{event:n}),o.onSwiped&&o.onSwiped(u);const p=o[`onSwiped${u.dir}`];p&&p(u)}}else o.onTap&&o.onTap({event:n});return o.onTouchEndOrOnMouseUp&&o.onTouchEndOrOnMouseUp({event:n}),Object.assign(Object.assign(Object.assign({},s),R),{eventData:u})})},h=()=>{document.removeEventListener(Z,i),document.removeEventListener(ee,l)},l=n=>{h(),g(n)},c=(n,s)=>{let o=()=>{};if(n&&n.addEventListener){const u=Object.assign(Object.assign({},j.touchEventOptions),s.touchEventOptions),p=[[Le,r,u],[Ge,i,Object.assign(Object.assign({},u),s.preventScrollOnSwipe?{passive:!1}:{})],[Ve,g,u]];p.forEach(([v,b,S])=>n.addEventListener(v,b,S)),o=()=>p.forEach(([v,b])=>n.removeEventListener(v,b))}return o},w={ref:n=>{n!==null&&e((s,o)=>{if(s.el===n)return s;const u={};return s.el&&s.el!==n&&s.cleanUpTouch&&(s.cleanUpTouch(),u.cleanUpTouch=void 0),o.trackTouch&&n&&(u.cleanUpTouch=c(n,o)),Object.assign(Object.assign(Object.assign({},s),{el:n}),u)})}};return t.trackMouse&&(w.onMouseDown=r),[w,c]}function ze(e,t,r,i){return!t.trackTouch||!e.el?(e.cleanUpTouch&&e.cleanUpTouch(),Object.assign(Object.assign({},e),{cleanUpTouch:void 0})):e.cleanUpTouch?t.preventScrollOnSwipe!==r.preventScrollOnSwipe||t.touchEventOptions.passive!==r.touchEventOptions.passive?(e.cleanUpTouch(),Object.assign(Object.assign({},e),{cleanUpTouch:i(e.el,t)})):e:Object.assign(Object.assign({},e),{cleanUpTouch:i(e.el,t)})}function He(e){const{trackMouse:t}=e,r=a.useRef(Object.assign({},R)),i=a.useRef(Object.assign({},j)),g=a.useRef(Object.assign({},i.current));g.current=Object.assign({},i.current),i.current=Object.assign(Object.assign({},j),e);let h;for(h in j)i.current[h]===void 0&&(i.current[h]=j[h]);const[l,c]=a.useMemo(()=>Re(d=>r.current=d(r.current,i.current),{trackMouse:t}),[t]);return r.current=ze(r.current,i.current,g.current,c),l}var re="_2i92q00",ne="_2i92q01",Xe="_2i92q02",$e="_2i92q03",Ye="_2i92q04",We="_2i92q05",z=new Map,q=new WeakMap,ae=0,Ke=void 0;function Fe(e){return e?(q.has(e)||(ae+=1,q.set(e,ae.toString())),q.get(e)):"0"}function Je(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?Fe(e.root):e[t]}`).toString()}function Qe(e){const t=Je(e);let r=z.get(t);if(!r){const i=new Map;let g;const h=new IntersectionObserver(l=>{l.forEach(c=>{var d;const w=c.isIntersecting&&g.some(n=>c.intersectionRatio>=n);e.trackVisibility&&typeof c.isVisible>"u"&&(c.isVisible=w),(d=i.get(c.target))==null||d.forEach(n=>{n(w,c)})})},e);g=h.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:h,elements:i},z.set(t,r)}return r}function Ze(e,t,r={},i=Ke){if(typeof window.IntersectionObserver>"u"&&i!==void 0){const d=e.getBoundingClientRect();return t(i,{isIntersecting:i,target:e,intersectionRatio:typeof r.threshold=="number"?r.threshold:0,time:0,boundingClientRect:d,intersectionRect:d,rootBounds:d}),()=>{}}const{id:g,observer:h,elements:l}=Qe(r),c=l.get(e)||[];return l.has(e)||l.set(e,c),c.push(t),h.observe(e),function(){c.splice(c.indexOf(t),1),c.length===0&&(l.delete(e),h.unobserve(e)),l.size===0&&(h.disconnect(),z.delete(g))}}function et({threshold:e,delay:t,trackVisibility:r,rootMargin:i,root:g,triggerOnce:h,skip:l,initialInView:c,fallbackInView:d,onChange:w}={}){var n;const[s,o]=a.useState(null),u=a.useRef(w),[p,v]=a.useState({inView:!!c,entry:void 0});u.current=w,a.useEffect(()=>{if(l||!s)return;let f;return f=Ze(s,(P,O)=>{v({inView:P,entry:O}),u.current&&u.current(P,O),O.isIntersecting&&h&&f&&(f(),f=void 0)},{root:g,rootMargin:i,threshold:e,trackVisibility:r,delay:t},d),()=>{f&&f()}},[Array.isArray(e)?e.toString():e,s,g,i,h,l,r,d,t]);const b=(n=p.entry)==null?void 0:n.target,S=a.useRef(void 0);!s&&b&&!h&&!l&&S.current!==b&&(S.current=b,v({inView:!!c,entry:void 0}));const m=[o,p.inView,p.entry];return m.ref=m[0],m.inView=m[1],m.entry=m[2],m}const tt=e=>typeof e.activePage=="number"&&e.activePage+1<e.pageCount?e.activePage+1:0,rt=e=>typeof e.activePage=="number"&&e.activePage-1>=0?e.activePage-1:e.pageCount-1,nt=(e,t)=>{switch(t.type){case"GO_TO_PAGE":return{...e,activePage:t.payload};case"SET_PAGE_COUNT":return{...e,pageCount:t.payload};case"NEXT_PAGE":case"CLICK_NEXT":return{...e,paused:!1,activePage:tt(e)};case"PREV_PAGE":return{...e,paused:!1,activePage:rt(e)};case"PAUSE":return{...e,paused:!0};case"RESUME":return{...e,paused:!1};default:return e}},at=({itemsRef:e,itemsPerPage:t=1,paused:r=!1,activePage:i=null,onChange:g=()=>{}})=>{const[{pageCount:h,activePage:l,paused:c},d]=a.useReducer(nt,{paused:r,activePage:void 0,pageCount:e!=null&&e.length?Math.ceil(e.length/t):1});a.useEffect(()=>{d({type:"SET_PAGE_COUNT",payload:e!=null&&e.length?Math.ceil(e.length/t):1})},[e==null?void 0:e.length,t]);const w=a.useCallback(f=>{f&&typeof l!="number"&&d({type:"GO_TO_PAGE",payload:typeof i=="number"?i:0})},[i,l]),[n,s,o]=et({triggerOnce:!1,rootMargin:"0px",onChange:w}),u=a.useCallback(()=>{d({type:"NEXT_PAGE"})},[]),p=a.useCallback(()=>{d({type:"PREV_PAGE"})},[]),v=a.useCallback(f=>{d({type:"GO_TO_PAGE",payload:f})},[]),b=a.useCallback(()=>{d({type:"CLICK_NEXT"})},[]),S=a.useCallback(()=>{d({type:"PAUSE"})},[]),m=a.useCallback(()=>{d({type:"RESUME"})},[]);return a.useEffect(()=>{typeof l!="number"||!(e!=null&&e.length)||(g(l),a.startTransition(()=>{o==null||o.target.scrollTo({top:0,left:e[l].getBoundingClientRect().left-e[0].getBoundingClientRect().left,behavior:"smooth"})}))},[e,l,o==null?void 0:o.target,g]),a.useMemo(()=>({containerRef:n,paused:c||!s,pageCount:h,activePage:l,next:u,prev:p,goToPage:v,onClick:b,pause:S,resume:m}),[n,h,l,c,s])},V=({sliderProgressColour:e="primary",noControls:t=!1,space:r="5",durationSeconds:i=10,children:g,itemsPerPage:h,paused:l,activePage:c,columnWidth:d="1/2",className:w})=>{const n=a.useMemo(()=>Te(g),[g]),[s,o]=a.useState(c),[u,p]=a.useState(),v=a.useMemo(()=>{const y=[],E=n.map((N,K)=>a.createElement(B,{ref:F=>{F&&y.push(F)},key:K,noShrink:!0,width:d,justifyContent:"stretch",alignSelf:"stretch"},a.createElement(C,{width:"full",className:je(Ye,{[We]:K===s})},N)));return p(y),E},[n,s,d]),{containerRef:b,pageCount:S,activePage:m,paused:f,next:P,prev:O,onClick:x,pause:G,resume:L}=at({itemsRef:u,itemsPerPage:h,paused:l,activePage:c,onChange:o}),M=He({onSwiped:y=>{y.dir==="Left"?P():O()}});return v.length<2?a.createElement(a.Fragment,null,v):a.createElement(_e,{className:w,space:"5"},a.createElement(C,{overflow:"hidden",position:"relative",...M,onContextMenu:y=>{y.preventDefault(),y.stopPropagation()},onTouchStart:G,onTouchEnd:L,onClick:x},t?null:a.createElement(C,{className:[re,Xe],display:"flex",alignItems:"center",justifyContent:"flexStart",position:"absolute"},a.createElement(J,{rounded:!0,onClick:y=>{y.stopPropagation(),y.preventDefault(),O()},variant:"secondary"},a.createElement(Q,{icon:ke}))),a.createElement(Me,{ref:b,overflow:"hidden",noWrap:!0,width:"full",space:r},t?null:a.createElement(B,{noShrink:!0,className:ne},a.createElement("span",null)),v,t?null:a.createElement(B,{noShrink:!0,className:ne},a.createElement("span",null))),t?null:a.createElement(C,{className:[re,$e],display:"flex",alignItems:"center",justifyContent:"flexEnd",position:"absolute"},a.createElement(J,{rounded:!0,onClick:y=>{y.stopPropagation(),y.preventDefault(),P()},variant:"secondary"},a.createElement(Q,{icon:Ie})))),a.createElement(xe,{width:"small"},a.createElement(Ae,{backgroundColour:e,duration:`${i}s`,paused:f,onRequestNext:P,totalCount:S,activeIndex:m||0})))};try{V.displayName="HorizontalAutoScroller",V.__docgenInfo={description:"",displayName:"HorizontalAutoScroller",props:{durationSeconds:{defaultValue:{value:"10"},description:"",name:"durationSeconds",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},columnWidth:{defaultValue:{value:"1/2"},description:"",name:"columnWidth",required:!1,type:{name:"ResponsiveProp<string | number>"}},sliderProgressColour:{defaultValue:{value:"primary"},description:"",name:"sliderProgressColour",required:!1,type:{name:"enum",value:[{value:'"transparent"'},{value:'"white"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"neutral"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'},{value:'"black900"'},{value:'"black800"'},{value:'"black700"'},{value:'"black600"'},{value:'"black500"'},{value:'"black400"'},{value:'"black300"'},{value:'"black200"'},{value:'"black100"'},{value:'"gray900"'},{value:'"gray800"'},{value:'"gray700"'},{value:'"gray600"'},{value:'"gray500"'},{value:'"gray400"'},{value:'"gray300"'},{value:'"gray200"'},{value:'"gray100"'},{value:'"blue900"'},{value:'"blue800"'},{value:'"blue700"'},{value:'"blue600"'},{value:'"blue500"'},{value:'"blue400"'},{value:'"blue300"'},{value:'"blue200"'},{value:'"blue100"'},{value:'"green900"'},{value:'"green800"'},{value:'"green700"'},{value:'"green600"'},{value:'"green500"'},{value:'"green400"'},{value:'"green300"'},{value:'"green200"'},{value:'"green100"'},{value:'"red900"'},{value:'"red800"'},{value:'"red700"'},{value:'"red600"'},{value:'"red500"'},{value:'"red400"'},{value:'"red300"'},{value:'"red200"'},{value:'"red100"'},{value:'"yellow900"'},{value:'"yellow800"'},{value:'"yellow700"'},{value:'"yellow600"'},{value:'"yellow500"'},{value:'"yellow400"'},{value:'"yellow300"'},{value:'"yellow200"'},{value:'"yellow100"'}]}},noControls:{defaultValue:{value:"false"},description:"",name:"noControls",required:!1,type:{name:"boolean"}},space:{defaultValue:{value:"5"},description:"",name:"space",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((page: number) => void)"}},paused:{defaultValue:null,description:"",name:"paused",required:!1,type:{name:"boolean"}},activePage:{defaultValue:null,description:"",name:"activePage",required:!1,type:{name:"number | null"}},itemsPerPage:{defaultValue:null,description:"",name:"itemsPerPage",required:!1,type:{name:"number"}}}}}catch{}class X{static _xfnv1a(t){let r=2166136261;for(let i=0;i<t.length;i++)r=Math.imul(r^t.charCodeAt(i),16777619);return()=>(r+=r<<13,r^=r>>>7,r+=r<<3,r^=r>>>17,(r+=r<<5)>>>0)}}class $ extends X{constructor(t){super(),Object.defineProperty(this,"a",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.a=$._xfnv1a(t)()}next(){let t=this.a+=1831565813;return t=Math.imul(t^t>>>15,1|t),t^=t+Math.imul(t^t>>>7,61|t),((t^t>>>14)>>>0)/4294967296}}class Y extends X{constructor(t){super(),Object.defineProperty(this,"a",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"b",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"c",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"d",{enumerable:!0,configurable:!0,writable:!0,value:void 0});const r=Y._xfnv1a(t);this.a=r(),this.b=r(),this.c=r(),this.d=r()}next(){this.a>>>=0,this.b>>>=0,this.c>>>=0,this.d>>>=0;let t=this.a+this.b|0;return this.a=this.b^this.b>>>9,this.b=this.c+(this.c<<3)|0,this.c=this.c<<21|this.c>>>11,this.d=this.d+1|0,t=t+this.d|0,this.c=this.c+t|0,(t>>>0)/4294967296}}class W extends X{constructor(t){super(),Object.defineProperty(this,"a",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"b",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"c",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"d",{enumerable:!0,configurable:!0,writable:!0,value:void 0});const r=W._xfnv1a(t);this.a=r(),this.b=r(),this.c=r(),this.d=r()}next(){const t=this.b<<9;let r=5*this.b;return r=9*(r<<7|r>>>25),this.c^=this.a,this.d^=this.b,this.b^=this.c,this.a^=this.d,this.c^=t,this.d=this.d<<11|this.d>>>21,(r>>>0)/4294967296}}var H;(function(e){e.sfc32="sfc32",e.mulberry32="mulberry32",e.xoshiro128ss="xoshiro128ss"})(H||(H={}));class st{constructor(t,r=H.sfc32){Object.defineProperty(this,"str",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"prng",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"generator",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.str=t,this.prng=r,this.generator=this._initializeGenerator()}next(){return this.generator.next()}_initializeGenerator(){if((r=>r===null)(t=this.str)||(r=>r===void 0)(t))return this.wrap();var t;switch(this.prng){case"sfc32":return new Y(this.str);case"mulberry32":return new $(this.str);case"xoshiro128ss":return new W(this.str);default:return this.wrap()}}wrap(){return{next:()=>Math.random()}}}const Tt={title:"Components/Horizontal Auto Scroller",component:V,argTypes:{sliderProgressColour:Ee.backgroundColour,space:{options:Ce,control:{type:"select"}},paused:{control:{type:"boolean"}},noControls:{control:{type:"boolean"}}}},ot=new st("storybook"),D=({childrenNum:e,...t})=>a.createElement(V,{...t},Array.from({length:e}).map((r,i)=>a.createElement(C,{key:i,backgroundColour:"gray200",padding:"3",display:"flex",width:"full",height:"full",alignItems:"center",justifyContent:"center"},a.createElement(C,{style:{width:"100%",height:20+Math.ceil(ot.next()*300)},backgroundColour:"gray900"})))),T={paused:!1,activePage:0,childrenNum:9},_=D.bind(T);_.args=T;const we={...T,activePage:3},k=D.bind(we);k.args=we;const Pe={...T,durationSeconds:1},I=D.bind(Pe);I.args=Pe;const Oe={...T,sliderProgressColour:"yellow500"},A=D.bind(Oe);A.args=Oe;const Se={...T,childrenNum:50},U=D.bind(Se);U.args=Se;var se,oe,ie;_.parameters={..._.parameters,docs:{...(se=_.parameters)==null?void 0:se.docs,source:{originalSource:"template.bind(standardProps)",...(ie=(oe=_.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var ue,le,ce;k.parameters={...k.parameters,docs:{...(ue=k.parameters)==null?void 0:ue.docs,source:{originalSource:"template.bind(widthStartPageProps)",...(ce=(le=k.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var de,he,ge;I.parameters={...I.parameters,docs:{...(de=I.parameters)==null?void 0:de.docs,source:{originalSource:"template.bind(withCustomDurationProps)",...(ge=(he=I.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};var pe,fe,ve;A.parameters={...A.parameters,docs:{...(pe=A.parameters)==null?void 0:pe.docs,source:{originalSource:"template.bind(withProgressColourProps)",...(ve=(fe=A.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};var be,me,ye;U.parameters={...U.parameters,docs:{...(be=U.parameters)==null?void 0:be.docs,source:{originalSource:"template.bind(withManySlidesProps)",...(ye=(me=U.parameters)==null?void 0:me.docs)==null?void 0:ye.source}}};const xt=["standard","widthStartPage","withCustomDuration","withProgressColour","withManySlides"];export{xt as __namedExportsOrder,Tt as default,_ as standard,k as widthStartPage,I as withCustomDuration,U as withManySlides,A as withProgressColour};
