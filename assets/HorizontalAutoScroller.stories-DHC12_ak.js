import{r as o,R as P}from"./index-Cr_cdoBq.js";import{b as we,s as Se}from"./argTypes-C5cQ_jgM.js";import{B as j,c as Ee}from"./Box-riOnoi3Y.js";import{f as Oe}from"./index-DD0GW_rr.js";import{S as Pe}from"./Section-Bm5ccDAq.js";import{a as L,C as Ce}from"./Column-D6cLH2tJ.js";import{S as je}from"./Stack-BUFBT331.js";import{B as J}from"./Button-DD4eqKRl.js";import{I as Q}from"./Icon-u2F7oOeh.js";import{I as Te}from"./ChevronLeftIcon-aalJjR7X.js";import{I as xe}from"./ChevronRightIcon-nv1TUYIg.js";import{S as Me}from"./SliderProgress-aRsxDlSE.js";import"./_commonjsHelpers-C932wzq6.js";import"./tokens-BrgPbGY2.js";import"./makeTheme-BvwTE3C0.js";import"./index-CYx1ALmS.js";import"./useNegativeMarginTop-B5m0RFWn.js";import"./dataAttrs-BPvLuXwN.js";import"./useTextStyles-DNm53NZA.js";import"./ProgressSpinner-DIWgntFa.js";const _e="Left",ke="Right",Ae="Up",Ne="Down",T={delta:10,preventScrollOnSwipe:!1,rotationAngle:0,trackMouse:!1,trackTouch:!0,swipeDuration:1/0,touchEventOptions:{passive:!0}},B={first:!0,initial:[0,0],start:0,swiping:!1,xy:[0,0]},Z="mousemove",ee="mouseup",Ie="touchend",Ue="touchmove",De="touchstart";function qe(e,t,r,i){return e>t?r>0?ke:_e:i>0?Ne:Ae}function te(e,t){if(t===0)return e;const r=Math.PI/180*t,i=e[0]*Math.cos(r)+e[1]*Math.sin(r),f=e[1]*Math.cos(r)-e[0]*Math.sin(r);return[i,f]}function Re(e,t){const r=n=>{const a="touches"in n;a&&n.touches.length>1||e((s,l)=>{l.trackMouse&&!a&&(document.addEventListener(Z,i),document.addEventListener(ee,u));const{clientX:g,clientY:v}=a?n.touches[0]:n,m=te([g,v],l.rotationAngle);return l.onTouchStartOrOnMouseDown&&l.onTouchStartOrOnMouseDown({event:n}),Object.assign(Object.assign(Object.assign({},s),B),{initial:m.slice(),xy:m,start:n.timeStamp||0})})},i=n=>{e((a,s)=>{const l="touches"in n;if(l&&n.touches.length>1)return a;if(n.timeStamp-a.start>s.swipeDuration)return a.swiping?Object.assign(Object.assign({},a),{swiping:!1}):a;const{clientX:g,clientY:v}=l?n.touches[0]:n,[m,O]=te([g,v],s.rotationAngle),b=m-a.xy[0],p=O-a.xy[1],S=Math.abs(b),E=Math.abs(p),x=(n.timeStamp||0)-a.start,V=Math.sqrt(S*S+E*E)/(x||1),G=[b/(x||1),p/(x||1)],M=qe(S,E,b,p),y=typeof s.delta=="number"?s.delta:s.delta[M.toLowerCase()]||T.delta;if(S<y&&E<y&&!a.swiping)return a;const C={absX:S,absY:E,deltaX:b,deltaY:p,dir:M,event:n,first:a.first,initial:a.initial,velocity:V,vxvy:G};C.first&&s.onSwipeStart&&s.onSwipeStart(C),s.onSwiping&&s.onSwiping(C);let k=!1;return(s.onSwiping||s.onSwiped||s[`onSwiped${M}`])&&(k=!0),k&&s.preventScrollOnSwipe&&s.trackTouch&&n.cancelable&&n.preventDefault(),Object.assign(Object.assign({},a),{first:!1,eventData:C,swiping:!0})})},f=n=>{e((a,s)=>{let l;if(a.swiping&&a.eventData){if(n.timeStamp-a.start<s.swipeDuration){l=Object.assign(Object.assign({},a.eventData),{event:n}),s.onSwiped&&s.onSwiped(l);const g=s[`onSwiped${l.dir}`];g&&g(l)}}else s.onTap&&s.onTap({event:n});return s.onTouchEndOrOnMouseUp&&s.onTouchEndOrOnMouseUp({event:n}),Object.assign(Object.assign(Object.assign({},a),B),{eventData:l})})},h=()=>{document.removeEventListener(Z,i),document.removeEventListener(ee,u)},u=n=>{h(),f(n)},c=(n,a)=>{let s=()=>{};if(n&&n.addEventListener){const l=Object.assign(Object.assign({},T.touchEventOptions),a.touchEventOptions),g=[[De,r,l],[Ue,i,Object.assign(Object.assign({},l),a.preventScrollOnSwipe?{passive:!1}:{})],[Ie,f,l]];g.forEach(([v,m,O])=>n.addEventListener(v,m,O)),s=()=>g.forEach(([v,m])=>n.removeEventListener(v,m))}return s},w={ref:n=>{n!==null&&e((a,s)=>{if(a.el===n)return a;const l={};return a.el&&a.el!==n&&a.cleanUpTouch&&(a.cleanUpTouch(),l.cleanUpTouch=void 0),s.trackTouch&&n&&(l.cleanUpTouch=c(n,s)),Object.assign(Object.assign(Object.assign({},a),{el:n}),l)})}};return t.trackMouse&&(w.onMouseDown=r),[w,c]}function Ve(e,t,r,i){return!t.trackTouch||!e.el?(e.cleanUpTouch&&e.cleanUpTouch(),Object.assign(Object.assign({},e),{cleanUpTouch:void 0})):e.cleanUpTouch?t.preventScrollOnSwipe!==r.preventScrollOnSwipe||t.touchEventOptions.passive!==r.touchEventOptions.passive?(e.cleanUpTouch(),Object.assign(Object.assign({},e),{cleanUpTouch:i(e.el,t)})):e:Object.assign(Object.assign({},e),{cleanUpTouch:i(e.el,t)})}function Ge(e){const{trackMouse:t}=e,r=o.useRef(Object.assign({},B)),i=o.useRef(Object.assign({},T)),f=o.useRef(Object.assign({},i.current));f.current=Object.assign({},i.current),i.current=Object.assign(Object.assign({},T),e);let h;for(h in T)i.current[h]===void 0&&(i.current[h]=T[h]);const[u,c]=o.useMemo(()=>Re(d=>r.current=d(r.current,i.current),{trackMouse:t}),[t]);return r.current=Ve(r.current,i.current,f.current,c),u}var re="_2i92q00",ne="_2i92q01",Le="_2i92q02",Be="_2i92q03",We="_2i92q04",ze="_2i92q05",W=new Map,A=new WeakMap,ae=0,He=void 0;function Xe(e){return e?(A.has(e)||(ae+=1,A.set(e,ae.toString())),A.get(e)):"0"}function $e(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?Xe(e.root):e[t]}`).toString()}function Ye(e){const t=$e(e);let r=W.get(t);if(!r){const i=new Map;let f;const h=new IntersectionObserver(u=>{u.forEach(c=>{var d;const w=c.isIntersecting&&f.some(n=>c.intersectionRatio>=n);e.trackVisibility&&typeof c.isVisible>"u"&&(c.isVisible=w),(d=i.get(c.target))==null||d.forEach(n=>{n(w,c)})})},e);f=h.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:h,elements:i},W.set(t,r)}return r}function Ke(e,t,r={},i=He){if(typeof window.IntersectionObserver>"u"&&i!==void 0){const d=e.getBoundingClientRect();return t(i,{isIntersecting:i,target:e,intersectionRatio:typeof r.threshold=="number"?r.threshold:0,time:0,boundingClientRect:d,intersectionRect:d,rootBounds:d}),()=>{}}const{id:f,observer:h,elements:u}=Ye(r),c=u.get(e)||[];return u.has(e)||u.set(e,c),c.push(t),h.observe(e),function(){c.splice(c.indexOf(t),1),c.length===0&&(u.delete(e),h.unobserve(e)),u.size===0&&(h.disconnect(),W.delete(f))}}function Fe({threshold:e,delay:t,trackVisibility:r,rootMargin:i,root:f,triggerOnce:h,skip:u,initialInView:c,fallbackInView:d,onChange:w}={}){var n;const[a,s]=o.useState(null),l=o.useRef(w),[g,v]=o.useState({inView:!!c,entry:void 0});l.current=w,o.useEffect(()=>{if(u||!a)return;let p;return p=Ke(a,(S,E)=>{v({inView:S,entry:E}),l.current&&l.current(S,E),E.isIntersecting&&h&&p&&(p(),p=void 0)},{root:f,rootMargin:i,threshold:e,trackVisibility:r,delay:t},d),()=>{p&&p()}},[Array.isArray(e)?e.toString():e,a,f,i,h,u,r,d,t]);const m=(n=g.entry)==null?void 0:n.target,O=o.useRef(void 0);!a&&m&&!h&&!u&&O.current!==m&&(O.current=m,v({inView:!!c,entry:void 0}));const b=[s,g.inView,g.entry];return b.ref=b[0],b.inView=b[1],b.entry=b[2],b}const Je=e=>typeof e.activePage=="number"&&e.activePage+1<e.pageCount?e.activePage+1:0,Qe=e=>typeof e.activePage=="number"&&e.activePage-1>=0?e.activePage-1:e.pageCount-1,Ze=(e,t)=>{switch(t.type){case"GO_TO_PAGE":return{...e,activePage:t.payload};case"SET_PAGE_COUNT":return{...e,pageCount:t.payload};case"NEXT_PAGE":case"CLICK_NEXT":return{...e,paused:!1,activePage:Je(e)};case"PREV_PAGE":return{...e,paused:!1,activePage:Qe(e)};case"PAUSE":return{...e,paused:!0};case"RESUME":return{...e,paused:!1};default:return e}},et=({itemsRef:e,itemsPerPage:t=1,paused:r=!1,activePage:i=null,onChange:f=()=>{}})=>{const[{pageCount:h,activePage:u,paused:c},d]=o.useReducer(Ze,{paused:r,activePage:void 0,pageCount:e!=null&&e.length?Math.ceil(e.length/t):1});o.useEffect(()=>{d({type:"SET_PAGE_COUNT",payload:e!=null&&e.length?Math.ceil(e.length/t):1})},[e==null?void 0:e.length,t]);const w=o.useCallback(p=>{p&&typeof u!="number"&&d({type:"GO_TO_PAGE",payload:typeof i=="number"?i:0})},[i,u]),[n,a,s]=Fe({triggerOnce:!1,rootMargin:"0px",onChange:w}),l=o.useCallback(()=>{d({type:"NEXT_PAGE"})},[]),g=o.useCallback(()=>{d({type:"PREV_PAGE"})},[]),v=o.useCallback(p=>{d({type:"GO_TO_PAGE",payload:p})},[]),m=o.useCallback(()=>{d({type:"CLICK_NEXT"})},[]),O=o.useCallback(()=>{d({type:"PAUSE"})},[]),b=o.useCallback(()=>{d({type:"RESUME"})},[]);return o.useEffect(()=>{typeof u!="number"||!(e!=null&&e.length)||(f(u),o.startTransition(()=>{s==null||s.target.scrollTo({top:0,left:e[u].getBoundingClientRect().left-e[0].getBoundingClientRect().left,behavior:"smooth"})}))},[e,u,s==null?void 0:s.target,f]),o.useMemo(()=>({containerRef:n,paused:c||!a,pageCount:h,activePage:u,next:l,prev:g,goToPage:v,onClick:m,pause:O,resume:b}),[n,h,u,c,a])},R=({sliderProgressColour:e="primary",noControls:t=!1,space:r="5",durationSeconds:i=10,children:f,itemsPerPage:h,paused:u,activePage:c,columnWidth:d="1/2",className:w})=>{const n=o.useMemo(()=>Oe(f),[f]),[a,s]=o.useState(c),[l,g]=o.useState(),v=o.useMemo(()=>{const y=[],C=n.map((k,K)=>o.createElement(L,{ref:F=>{F&&y.push(F)},key:K,noShrink:!0,width:d,justifyContent:"stretch",alignSelf:"stretch"},o.createElement(j,{width:"full",className:Ee(We,{[ze]:K===a})},k)));return g(y),C},[n,a,d]),{containerRef:m,pageCount:O,activePage:b,paused:p,next:S,prev:E,onClick:x,pause:V,resume:G}=et({itemsRef:l,itemsPerPage:h,paused:u,activePage:c,onChange:s}),M=Ge({onSwiped:y=>{y.dir==="Left"?S():E()}});return v.length<2?o.createElement(o.Fragment,null,v):o.createElement(je,{className:w,space:"5"},o.createElement(j,{overflow:"hidden",position:"relative",...M,onContextMenu:y=>{y.preventDefault(),y.stopPropagation()},onTouchStart:V,onTouchEnd:G,onClick:x},t?null:o.createElement(j,{className:[re,Le],display:"flex",alignItems:"center",justifyContent:"flexStart",position:"absolute"},o.createElement(J,{rounded:!0,onClick:y=>{y.stopPropagation(),y.preventDefault(),E()},variant:"secondary"},o.createElement(Q,{icon:Te}))),o.createElement(Ce,{ref:m,overflow:"hidden",noWrap:!0,width:"full",space:r},t?null:o.createElement(L,{noShrink:!0,className:ne},o.createElement("span",null)),v,t?null:o.createElement(L,{noShrink:!0,className:ne},o.createElement("span",null))),t?null:o.createElement(j,{className:[re,Be],display:"flex",alignItems:"center",justifyContent:"flexEnd",position:"absolute"},o.createElement(J,{rounded:!0,onClick:y=>{y.stopPropagation(),y.preventDefault(),S()},variant:"secondary"},o.createElement(Q,{icon:xe})))),o.createElement(Pe,{width:"small"},o.createElement(Me,{backgroundColour:e,duration:`${i}s`,paused:p,onRequestNext:S,totalCount:O,activeIndex:b||0})))};try{R.displayName="HorizontalAutoScroller",R.__docgenInfo={description:"",displayName:"HorizontalAutoScroller",props:{durationSeconds:{defaultValue:{value:"10"},description:"",name:"durationSeconds",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},columnWidth:{defaultValue:{value:"1/2"},description:"",name:"columnWidth",required:!1,type:{name:"ResponsiveProp<string | number>"}},sliderProgressColour:{defaultValue:{value:"primary"},description:"",name:"sliderProgressColour",required:!1,type:{name:"enum",value:[{value:'"transparent"'},{value:'"white"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"neutral"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'},{value:'"black900"'},{value:'"black800"'},{value:'"black700"'},{value:'"black600"'},{value:'"black500"'},{value:'"black400"'},{value:'"black300"'},{value:'"black200"'},{value:'"black100"'},{value:'"gray900"'},{value:'"gray800"'},{value:'"gray700"'},{value:'"gray600"'},{value:'"gray500"'},{value:'"gray400"'},{value:'"gray300"'},{value:'"gray200"'},{value:'"gray100"'},{value:'"blue900"'},{value:'"blue800"'},{value:'"blue700"'},{value:'"blue600"'},{value:'"blue500"'},{value:'"blue400"'},{value:'"blue300"'},{value:'"blue200"'},{value:'"blue100"'},{value:'"green900"'},{value:'"green800"'},{value:'"green700"'},{value:'"green600"'},{value:'"green500"'},{value:'"green400"'},{value:'"green300"'},{value:'"green200"'},{value:'"green100"'},{value:'"red900"'},{value:'"red800"'},{value:'"red700"'},{value:'"red600"'},{value:'"red500"'},{value:'"red400"'},{value:'"red300"'},{value:'"red200"'},{value:'"red100"'},{value:'"yellow900"'},{value:'"yellow800"'},{value:'"yellow700"'},{value:'"yellow600"'},{value:'"yellow500"'},{value:'"yellow400"'},{value:'"yellow300"'},{value:'"yellow200"'},{value:'"yellow100"'}]}},noControls:{defaultValue:{value:"false"},description:"",name:"noControls",required:!1,type:{name:"boolean"}},space:{defaultValue:{value:"5"},description:"",name:"space",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((page: number) => void)"}},paused:{defaultValue:null,description:"",name:"paused",required:!1,type:{name:"boolean"}},activePage:{defaultValue:null,description:"",name:"activePage",required:!1,type:{name:"number | null"}},itemsPerPage:{defaultValue:null,description:"",name:"itemsPerPage",required:!1,type:{name:"number"}}}}}catch{}class H{static _xfnv1a(t){let r=2166136261;for(let i=0;i<t.length;i++)r=Math.imul(r^t.charCodeAt(i),16777619);return()=>(r+=r<<13,r^=r>>>7,r+=r<<3,r^=r>>>17,(r+=r<<5)>>>0)}}class X extends H{constructor(t){super(),Object.defineProperty(this,"a",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.a=X._xfnv1a(t)()}next(){let t=this.a+=1831565813;return t=Math.imul(t^t>>>15,1|t),t^=t+Math.imul(t^t>>>7,61|t),((t^t>>>14)>>>0)/4294967296}}class $ extends H{constructor(t){super(),Object.defineProperty(this,"a",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"b",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"c",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"d",{enumerable:!0,configurable:!0,writable:!0,value:void 0});const r=$._xfnv1a(t);this.a=r(),this.b=r(),this.c=r(),this.d=r()}next(){this.a>>>=0,this.b>>>=0,this.c>>>=0,this.d>>>=0;let t=this.a+this.b|0;return this.a=this.b^this.b>>>9,this.b=this.c+(this.c<<3)|0,this.c=this.c<<21|this.c>>>11,this.d=this.d+1|0,t=t+this.d|0,this.c=this.c+t|0,(t>>>0)/4294967296}}class Y extends H{constructor(t){super(),Object.defineProperty(this,"a",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"b",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"c",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"d",{enumerable:!0,configurable:!0,writable:!0,value:void 0});const r=Y._xfnv1a(t);this.a=r(),this.b=r(),this.c=r(),this.d=r()}next(){const t=this.b<<9;let r=5*this.b;return r=9*(r<<7|r>>>25),this.c^=this.a,this.d^=this.b,this.b^=this.c,this.a^=this.d,this.c^=t,this.d=this.d<<11|this.d>>>21,(r>>>0)/4294967296}}var z;(function(e){e.sfc32="sfc32",e.mulberry32="mulberry32",e.xoshiro128ss="xoshiro128ss"})(z||(z={}));class tt{constructor(t,r=z.sfc32){Object.defineProperty(this,"str",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"prng",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"generator",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.str=t,this.prng=r,this.generator=this._initializeGenerator()}next(){return this.generator.next()}_initializeGenerator(){if((r=>r===null)(t=this.str)||(r=>r===void 0)(t))return this.wrap();var t;switch(this.prng){case"sfc32":return new $(this.str);case"mulberry32":return new X(this.str);case"xoshiro128ss":return new Y(this.str);default:return this.wrap()}}wrap(){return{next:()=>Math.random()}}}const Ot={title:"Components/Horizontal Auto Scroller",component:R,argTypes:{sliderProgressColour:we.backgroundColour,space:{options:Se,control:{type:"select"}},paused:{control:{type:"boolean"}},noControls:{control:{type:"boolean"}}}},rt=new tt("storybook"),_=e=>P.createElement(R,{...e},Array.from({length:e.childrenNum}).map((t,r)=>P.createElement(j,{key:r,backgroundColour:"gray200",padding:"3",display:"flex",width:"full",height:"full",alignItems:"center",justifyContent:"center"},P.createElement(j,{style:{width:"100%",height:20+Math.ceil(rt.next()*300)},backgroundColour:"gray900"})))),N={render:()=>P.createElement(_,{paused:!1,activePage:0,childrenNum:9})},I={render:()=>P.createElement(_,{paused:!1,activePage:3,childrenNum:9})},U={render:()=>P.createElement(_,{paused:!1,activePage:0,childrenNum:9,durationSeconds:1})},D={render:()=>P.createElement(_,{paused:!1,activePage:0,childrenNum:9,sliderProgressColour:"yellow500"})},q={render:()=>P.createElement(_,{paused:!1,activePage:0,childrenNum:50})};var oe,se,ie;N.parameters={...N.parameters,docs:{...(oe=N.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <RenderAutoScroller paused={false} activePage={0} childrenNum={9} />
}`,...(ie=(se=N.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var le,ue,ce;I.parameters={...I.parameters,docs:{...(le=I.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <RenderAutoScroller paused={false} activePage={3} childrenNum={9} />
}`,...(ce=(ue=I.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};var de,he,fe;U.parameters={...U.parameters,docs:{...(de=U.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => <RenderAutoScroller paused={false} activePage={0} childrenNum={9} durationSeconds={1} />
}`,...(fe=(he=U.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};var ge,pe,ve;D.parameters={...D.parameters,docs:{...(ge=D.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => <RenderAutoScroller paused={false} activePage={0} childrenNum={9} sliderProgressColour="yellow500" />
}`,...(ve=(pe=D.parameters)==null?void 0:pe.docs)==null?void 0:ve.source}}};var me,be,ye;q.parameters={...q.parameters,docs:{...(me=q.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => <RenderAutoScroller paused={false} activePage={0} childrenNum={50} />
}`,...(ye=(be=q.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};const Pt=["Standard","WidthStartPage","WithCustomDuration","WithProgressColour","WithManySlides"];export{N as Standard,I as WidthStartPage,U as WithCustomDuration,q as WithManySlides,D as WithProgressColour,Pt as __namedExportsOrder,Ot as default};
