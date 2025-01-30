import{a as h}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{i as F}from"./isChromatic-AKtkhq4f.js";import{r as e}from"./index-Cr_cdoBq.js";import{E as M}from"./Positioner-C1lhU0xQ.js";import{d as $}from"./index-CYx1ALmS.js";import{f as be}from"./index-DD0GW_rr.js";import{f as Ce,u as xe,b as Ie,o as Se,g as we}from"./index-CZU0ijaN.js";import{B as E,u as D,c as H}from"./Box-DR0gsLKr.js";import{B as X}from"./Button-BODOGyC7.js";import{I as W}from"./Icon-Bbb_NbMF.js";import{I as Pe,a as Ne}from"./OttoIcon-BrtPeAtQ.js";import{u as Ee}from"./useTextStyles-DhWtNzlP.js";import{I as We}from"./ArrowRightIcon-B3tByGC3.js";import{I as R}from"./Inline-DY_LsrtW.js";import{T as Be}from"./Text-wtC0s5rP.js";import{S as fe}from"./Stack-BmosDNuH.js";import{T as Y}from"./Tooltip-A3iOEshm.js";import{I as ke}from"./AlertIcon-FgS-VANv.js";import{S as Le}from"./StarRating-D3KagOCs.js";import"./v4-CQkTLCs1.js";import"./_commonjsHelpers-C932wzq6.js";import"./Portal-B5nACBPc.js";import"./index-DmBm8MVW.js";import"./index-CAtvbLPT.js";import"./ThemeProvider-DaUrEAYU.js";import"./makeTheme-BvwTE3C0.js";import"./ProgressSpinner-DWCzUqYi.js";import"./useNegativeMarginTop-b515oCYq.js";import"./dataAttrs-BPvLuXwN.js";import"./StarHalfIcon-BFcO0sSZ.js";import"./StarIcon-DwMJajzk.js";const w=e.createContext(null),q=({id:a,active:o=0,onChange:r,children:n})=>{const[i,s]=Ce(o,r),l=xe(a??void 0);return e.createElement(w.Provider,{value:e.useMemo(()=>({id:l,activeIndex:i,onChange:s}),[l,i])},n)};try{w.displayName="TabsContext",w.__docgenInfo={description:"",displayName:"TabsContext",props:{}}}catch{}try{q.displayName="Tabs",q.__docgenInfo={description:"",displayName:"Tabs",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | null"}},active:{defaultValue:{value:"0"},description:"",name:"active",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((index: number) => void)"}}}}}catch{}var j={default:"_11wt3mu0",active:"_11wt3mu1"},Ve="_11wt3mu2",J={default:"_11wt3mu3",active:"_11wt3mu4"},U={default:"_1cu98lp0",scroll:"_1cu98lp1"},Re="_1cu98lp2";const B=e.createContext(null),b=({children:a,stretch:o=!1,scrollable:r=!1})=>{$.invariant(!(o&&r),"Tabs: `stretch={true}` and `scrollable={true}` cannot be used at the same time.");const n=e.useRef(null),i=e.useRef(null),s=e.Children.map(be(a),(u,p)=>e.isValidElement(u)?e.createElement(B.Provider,{value:p},u):null),[l,c]=e.useState({start:!1,end:!1}),T=Ie(()=>{if(r){const{scrollWidth:u,clientWidth:p,scrollLeft:z}=n.current,A=z>1,O=z<u-p-1;(A!==l.start||O!==l.end)&&c({start:A,end:O})}}),L=e.useCallback(()=>{T()},[]),_=u=>{if(n.current){const p=n.current.scrollLeft+u;we(n.current,"scrollLeft",p,300)}},P=()=>void _(-n.current.clientWidth),N=()=>void _(n.current.clientWidth);e.useEffect(()=>{const u=Se(n.current),p=()=>{T()};return u.addEventListener("resize",p,{passive:!0}),()=>{u.removeEventListener("resize",p)}},[]),e.useEffect(()=>{T()},[a]);const V=r&&(l.start||l.end);return e.createElement(E,{overflow:"hidden",alignItems:"center",className:[U.default,V&&U.scroll]},V?e.createElement(X,{minimal:!0,rounded:!0,withDoubleClicks:!0,size:"small",disabled:!l.start,onClick:P},e.createElement(W,{icon:Pe})):null,e.createElement(E,{ref:n,className:[r&&Re],onScroll:L},e.createElement(E,{ref:i,display:o?"flex":"block",flexWrap:"nowrap",width:"full",role:"tablist","aria-orientation":"horizontal",className:Ee({noWrap:!0})},s)),V?e.createElement(X,{minimal:!0,rounded:!0,withDoubleClicks:!0,size:"small",disabled:!l.end,onClick:N},e.createElement(W,{icon:We})):null)};try{B.displayName="TabListContext",B.__docgenInfo={description:"",displayName:"TabListContext",props:{}}}catch{}try{b.displayName="TabList",b.__docgenInfo={description:"",displayName:"TabList",props:{stretch:{defaultValue:{value:"false"},description:"",name:"stretch",required:!1,type:{name:"boolean"}},scrollable:{defaultValue:{value:"false"},description:"",name:"scrollable",required:!1,type:{name:"boolean"}}}}}catch{}const t=e.forwardRef(({children:a,id:o=null,indication:r=null,is:n="button"},i)=>{const s=e.useContext(w),l=e.useContext(B);$.invariant(s!==null&&l!==null,"This tab pane isnt nested beneath <Tabs /> or <TabPanes />>");const c=s.activeIndex===l,T=D({display:"inlineBlock",paddingX:"1",borderRadius:"pill"}),L=typeof o=="string"?o:`${s.id}-${l}-tab`,_={className:H(D({is:typeof n=="string"?n:"button",display:"inlineFlex",justifyContent:"center",backgroundColour:"transparent",marginRight:"6"}),Ee({noWrap:!0,size:"3",fontWeight:"bold",colour:"light"}),j.default,{[j.active]:c}),role:"tab","aria-selected":c?"true":"false","aria-controls":L,tabIndex:c?void 0:-1,onClick:()=>{var N;return(N=s.onChange)==null?void 0:N.call(s,l)},ref:i},P=e.createElement(R,{noWrap:!0,space:"2",alignY:"center",alignX:"center"},e.createElement("span",{className:Ve},a),typeof r=="number"&&e.createElement(Be,{strong:!0,is:"span",size:"2",align:"center",display:"block",colour:c?"white":"dark",className:H(J.default,T,{[J.active]:c})},r));return e.isValidElement(n)?e.cloneElement(n,_,P):e.createElement(n,_,P)});try{t.displayName="Tab",t.__docgenInfo={description:"",displayName:"Tab",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},is:{defaultValue:null,description:"",name:"is",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements> | ReactElement<unknown, string | JSXElementConstructor<any>>"}},indication:{defaultValue:{value:"null"},description:"",name:"indication",required:!1,type:{name:"number"}}}}}catch{}var qe="_1e18dwc0",$e="_15xyz920";const k=e.createContext(null),f=({renderInactivePanes:a=!1,children:o,paddingTop:r="6",paddingBottom:n="6"})=>e.createElement(E,{paddingTop:r,paddingBottom:n,className:$e,width:"full"},e.Children.map(be(o),(i,s)=>e.createElement(k.Provider,{value:{paneIndex:s,renderInactive:a}},i)));try{k.displayName="TabPanesContext",k.__docgenInfo={description:"",displayName:"TabPanesContext",props:{}}}catch{}try{f.displayName="TabPanes",f.__docgenInfo={description:"",displayName:"TabPanes",props:{renderInactivePanes:{defaultValue:{value:"false"},description:"Render tab panels even when visually hidden.",name:"renderInactivePanes",required:!1,type:{name:"boolean"}},paddingTop:{defaultValue:{value:"6"},description:"",name:"paddingTop",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},paddingBottom:{defaultValue:{value:"6"},description:"",name:"paddingBottom",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}}}}}catch{}const m=({children:a,id:o=null})=>{const r=e.useContext(k),n=e.useContext(w);$.invariant(r!==null&&n!==null,"TabPane rendered outside Tabs or TabPanes");const{paneIndex:i,renderInactive:s}=r,l=typeof o=="string"?o:`${n.id}-${i}-tab`,c=n.activeIndex===i;return e.createElement(E,{display:c?void 0:"none","aria-hidden":c?void 0:!0,className:qe,tabIndex:0,role:"tabpanel",id:l,width:"full"},c||s?a:void 0)};try{m.displayName="TabPane",m.__docgenInfo={description:"",displayName:"TabPane",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}const d=({label:a})=>{const[o,r]=e.useState(F()?.5:Math.random()*5);return e.useEffect(()=>{const n=setInterval(()=>{r(F()?.5:Math.random()*5)},1e3);return()=>{clearInterval(n)}},[]),e.createElement(Le,{rating:o,label:a})},Et={title:"Components/Tabs",decorators:[a=>e.createElement("div",{style:{maxWidth:"500px",width:"100%"}},a())],argTypes:{children:{control:{disable:!0}}}},g=a=>e.createElement(q,{...a}),he={active:0,onChange:h("onChange"),children:e.createElement(e.Fragment,null,e.createElement(b,null,e.createElement(t,null,"Tab 1"),e.createElement(t,null,"Tab 2")),e.createElement(f,null,e.createElement(m,null,"Content A"),e.createElement(m,null,e.createElement(fe,null,e.createElement(d,{label:"5"}),e.createElement(d,{label:"4"}),e.createElement(d,{label:"3"}),e.createElement(d,{label:"2"}),e.createElement(d,{label:"1"})))))},y=g.bind(he);y.args=he;const ge={active:0,onChange:h("onChange"),children:e.createElement(e.Fragment,null,e.createElement(b,null,e.createElement(t,{indication:2},"Tab 1"),e.createElement(t,{indication:0},"Tab 2")),e.createElement(f,null,e.createElement(m,null,"Content A"),e.createElement(m,null,"Content B")))},v=g.bind(ge);v.args=ge;const Te={active:0,onChange:h("onChange"),children:e.createElement(e.Fragment,null,e.createElement(b,null,e.createElement(t,{indication:2},e.createElement(R,{alignY:"center"},"Tab 1",e.createElement(Y,{alignment:M.BOTTOM,label:"This tab is a winner"},e.createElement(E,null,e.createElement(W,{icon:Ne}))))),e.createElement(t,null,e.createElement(R,{alignY:"center"},"Tab 2",e.createElement(Y,{alignment:M.BOTTOM,label:"This tab is less awesome"},e.createElement(E,null,e.createElement(W,{icon:ke})))))),e.createElement(f,null,e.createElement(m,null,"Content A"),e.createElement(m,null,"Content B")))},C=g.bind(Te);C.args=Te;const _e={active:0,onChange:h("onChange"),children:e.createElement(b,null,e.createElement(t,{id:"tab-1",is:e.createElement("a",{href:"/#tab-1"})},"Tab 1"),e.createElement(t,{id:"tab-2",is:e.createElement("a",{href:"/#tab-2"})},"Tab 2"))},x=g.bind(_e);x.args=_e;const ye={active:0,onChange:h("onChange"),children:e.createElement(e.Fragment,null,e.createElement(b,{stretch:!0},e.createElement(t,null,"Tab 1"),e.createElement(t,null,"Tab 2")),e.createElement(f,null,e.createElement(m,null,"Content A"),e.createElement(m,null,e.createElement(fe,null,e.createElement(d,{label:"5"}),e.createElement(d,{label:"4"}),e.createElement(d,{label:"3"}),e.createElement(d,{label:"2"}),e.createElement(d,{label:"1"})))))},I=g.bind(ye);I.args=ye;const ve={active:0,onChange:h("onChange"),children:e.createElement(b,{scrollable:!0},e.createElement(t,null,"Hello"),e.createElement(t,{indication:5},"Why isnt"),e.createElement(t,null,"This a terribly"),e.createElement(t,null,"Long"),e.createElement(t,null,"Tab list"),e.createElement(t,null,"Hello"),e.createElement(t,null,"Why isnt"),e.createElement(t,null,"This a terribly"),e.createElement(t,null,"Long"),e.createElement(t,null,"Tab list"),e.createElement(t,null,"Hello"),e.createElement(t,null,"Why isnt"),e.createElement(t,null,"This a terribly"),e.createElement(t,null,"Long"),e.createElement(t,null,"Tab list"))},S=g.bind(ve);S.args=ve;var G,K,Q;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:"Template.bind(standardProps)",...(Q=(K=y.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Z,ee,te;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:"Template.bind(withIndicationProps)",...(te=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,ne,re;C.parameters={...C.parameters,docs:{...(ae=C.parameters)==null?void 0:ae.docs,source:{originalSource:"Template.bind(withComplexTabProps)",...(re=(ne=C.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var le,oe,se;x.parameters={...x.parameters,docs:{...(le=x.parameters)==null?void 0:le.docs,source:{originalSource:"Template.bind(tabsWithoutPanesProps)",...(se=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ie,ce,de;I.parameters={...I.parameters,docs:{...(ie=I.parameters)==null?void 0:ie.docs,source:{originalSource:"Template.bind(withStretchProps)",...(de=(ce=I.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var me,ue,pe;S.parameters={...S.parameters,docs:{...(me=S.parameters)==null?void 0:me.docs,source:{originalSource:"Template.bind(scrollableProps)",...(pe=(ue=S.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};const ft=["standard","withIndication","withComplexTab","tabsWithoutPanes","withStretch","scrollable"];export{ft as __namedExportsOrder,Et as default,S as scrollable,y as standard,x as tabsWithoutPanes,C as withComplexTab,v as withIndication,I as withStretch};
