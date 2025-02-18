import{a as h}from"./chunk-D5ZWXAHU-Dm3eDOzv.js";import{r as t,R as x}from"./index-Cr_cdoBq.js";import{B as _,c as F}from"./Box-B8HP0AOd.js";import{n as J}from"./index-IxcCI6ud.js";import{u as L}from"./useTextStyles-Db9gttPw.js";import{I as H}from"./Inline-CugQujX7.js";import{I as R}from"./ChevronLeftIcon-aalJjR7X.js";import{I as j}from"./ChevronRightIcon-nv1TUYIg.js";import{I as T}from"./Icon-B6rvmQwO.js";import"./v4-CtRu48qb.js";import"./_commonjsHelpers-C932wzq6.js";import"./index-DceDftY5.js";import"./useNegativeMarginTop-CCu3uhyU.js";import"./Text-XoxmVRhK.js";import"./dataAttrs-BPvLuXwN.js";var E="_9nf7kx0",O="_9nf7kx1",W="_9nf7kx2";const g=({className:e="",selected:a=!1,gap:n=!1,children:r,disabled:i,onClick:l})=>{let o="transparent";return a?o="green900":i&&(o="gray200"),t.createElement(_,{is:"button",backgroundColour:o,display:"flex",overflow:"hidden",alignItems:"center",flexDirection:"row",justifyContent:"center",textAlign:"center",borderRadius:"pill",pointerEvents:i?"none":void 0,className:F(e,L({fontWeight:"bold",colour:a?"white":"light",size:"3"}),{[O]:a,[E]:n,[W]:!n}),onClick:l},n?"...":r)};try{g.displayName="Bubble",g.__docgenInfo={description:"",displayName:"Bubble",props:{selected:{defaultValue:{value:"false"},description:"",name:"selected",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},gap:{defaultValue:{value:"false"},description:"",name:"gap",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const f=({icon:e,disabled:a,label:n="",onClick:r=J})=>t.createElement(_,{is:"button","aria-disabled":a,"aria-label":n,display:"flex",overflow:"hidden",alignItems:"center",flexDirection:"row",justifyContent:"center",textAlign:"center",borderRadius:"pill",padding:"2",userSelect:"none",pointerEvents:a?"none":void 0,className:F(L({colour:"light"}),{[E]:a}),onClick:r},t.createElement(T,{size:"medium",icon:e})),G=({placeholderBubblesNum:e=3})=>t.createElement(H,{is:"span",space:"3"},t.createElement(f,{disabled:!0,icon:R}),Array.from({length:e}).fill("").map((a,n)=>t.createElement(g,{key:n,children:"",disabled:!0,className:E})),t.createElement(f,{disabled:!0,icon:j})),b=({total:e,pageSize:a,activePage:n,numPagesDisplayed:r=5,loading:i=!1,onChange:l=J})=>{const o=t.useMemo(()=>K(e,a),[e,a]),v=t.useCallback(s=>()=>{l({pageNumber:P(s,o)})},[o]),c=t.useMemo(()=>P(n,o),[n,o]);return!i&&e&&a&&n&&r?t.createElement(H,{is:"nav",space:"3","aria-label":"pagination"},t.createElement(f,{disabled:n<=1,label:"navigate back",icon:R,onClick:v(n-1)}),Y(o,c,r,o-r).map(s=>t.createElement(g,{key:s,gap:s<0,selected:c===s,"aria-current":c===s?"page":"false",onClick:v(s)},s)),t.createElement(f,{disabled:n>=o,label:"navigate forward",icon:j,onClick:v(c+1)})):t.createElement(G,{placeholderBubblesNum:3})};function K(e,a){return Math.ceil(e/a)}function P(e,a){return Math.min(Math.max(1,e),a)}function y(e){return Array.from({length:e}).fill(-1).map((a,n)=>n+1)}function Q(e,a,n){return y(n).map((r,i)=>{const l=i+1,o=n-1;return l<o?a+i:l===o?-1:e})}function U(e,a){return y(e).map((n,r)=>a+r+1)}function X(e,a){return y(a).map((n,r)=>{const i=r+1,l=2;return i===1?1:i===l?-1:e-4+r})}function Y(e,a,n,r){return e<=n?y(e):a<=r?Q(e,a,n):a>r&&a<=r+2?U(n,r):X(e,n)}try{b.displayName="Pagination",b.__docgenInfo={description:"",displayName:"Pagination",props:{numPagesDisplayed:{defaultValue:{value:"5"},description:"",name:"numPagesDisplayed",required:!1,type:{name:"number"}},activePage:{defaultValue:null,description:"",name:"activePage",required:!0,type:{name:"number"}},total:{defaultValue:null,description:"",name:"total",required:!0,type:{name:"number"}},pageSize:{defaultValue:null,description:"",name:"pageSize",required:!0,type:{name:"number"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},onChange:{defaultValue:{value:"() => {}"},description:"",name:"onChange",required:!1,type:{name:"TOnChangeEventHandler"}}}}}catch{}const pe={title:"Components/Pagination",component:b},C=e=>x.createElement(_,{style:{height:"100vh",width:"100vw",maxHeight:"350px"},display:"flex",alignItems:"center",justifyContent:"center"},x.createElement(b,{...e})),d={args:{activePage:5,total:100,pageSize:10,numPagesDisplayed:5,loading:!1,onChange:h("onChange")},render:C},u={args:{activePage:5,total:100,pageSize:10,numPagesDisplayed:5,loading:!0,onChange:h("onChange")},render:C},m={args:{activePage:1,total:45,pageSize:10,numPagesDisplayed:5,loading:!1,onChange:h("onChange")},render:C},p={args:{activePage:1,total:638,pageSize:10,numPagesDisplayed:5,loading:!1,onChange:h("onChange")},render:C};var S,I,k;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    activePage: 5,
    total: 100,
    pageSize: 10,
    numPagesDisplayed: 5,
    loading: false,
    onChange: action('onChange')
  },
  render: renderPagination
}`,...(k=(I=d.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var w,N,q;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    activePage: 5,
    total: 100,
    pageSize: 10,
    numPagesDisplayed: 5,
    loading: true,
    onChange: action('onChange')
  },
  render: renderPagination
}`,...(q=(N=u.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var A,V,z;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    activePage: 1,
    total: 45,
    pageSize: 10,
    numPagesDisplayed: 5,
    loading: false,
    onChange: action('onChange')
  },
  render: renderPagination
}`,...(z=(V=m.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var B,D,M;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    activePage: 1,
    total: 638,
    pageSize: 10,
    numPagesDisplayed: 5,
    loading: false,
    onChange: action('onChange')
  },
  render: renderPagination
}`,...(M=(D=p.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};const ge=["Standard","Loading","AllPagesFit","JumpForwardStart"];export{m as AllPagesFit,p as JumpForwardStart,u as Loading,d as Standard,ge as __namedExportsOrder,pe as default};
