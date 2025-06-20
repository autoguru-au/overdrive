import{r as t,B as v,c as O,A as L,n as F,e as S}from"./iframe-CFwUcJnX.js";import{I as j}from"./Icon-DeLX8lrb.js";import{I as J}from"./Inline-C4wfw7Gl.js";import{I as H}from"./ChevronLeftIcon-BMzfAMkC.js";import{I as T}from"./ChevronRightIcon-D9coEbP6.js";import"./resolveResponsiveProps-BLCo0nz9.js";import"./Text-Bekh4-oh.js";import"./useNegativeMarginTop-CiLZ67so.js";var E="_9nf7kx0",R="_9nf7kx1",Y="_9nf7kx2";const g=({className:e="",selected:a=!1,gap:n=!1,children:r,disabled:l,onClick:i})=>{let o="transparent";return a?o="green900":l&&(o="gray200"),t.createElement(v,{as:"button",backgroundColour:o,display:"flex",overflow:"hidden",alignItems:"center",flexDirection:"row",justifyContent:"center",textAlign:"center",borderRadius:"pill",pointerEvents:l?"none":void 0,className:O(e,L({colour:a?"white":"light",size:"3",weight:"bold"}),{[R]:a,[E]:n,[Y]:!n}),onClick:i},n?"...":r)};try{g.displayName="Bubble",g.__docgenInfo={description:"",displayName:"Bubble",props:{selected:{defaultValue:{value:"false"},description:"",name:"selected",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},gap:{defaultValue:{value:"false"},description:"",name:"gap",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const f=({icon:e,disabled:a,label:n="",onClick:r=F})=>t.createElement(v,{as:"button","aria-disabled":a,"aria-label":n,display:"flex",overflow:"hidden",alignItems:"center",flexDirection:"row",justifyContent:"center",textAlign:"center",borderRadius:"pill",padding:"2",userSelect:"none",pointerEvents:a?"none":void 0,className:O(L({colour:"light"}),{[E]:a}),onClick:r},t.createElement(j,{size:"medium",icon:e})),K=({placeholderBubblesNum:e=3})=>t.createElement(J,{as:"span",space:"3"},t.createElement(f,{disabled:!0,icon:H}),Array.from({length:e}).fill("").map((a,n)=>t.createElement(g,{key:n,disabled:!0,className:E})),t.createElement(f,{disabled:!0,icon:T})),b=({total:e,pageSize:a,activePage:n,numPagesDisplayed:r=5,loading:l=!1,onChange:i=F})=>{const o=t.useMemo(()=>U(e,a),[e,a]),C=t.useCallback(s=>()=>{i({pageNumber:x(s,o)})},[o]),c=t.useMemo(()=>x(n,o),[n,o]);return!l&&e&&a&&n&&r?t.createElement(J,{as:"nav",space:"3","aria-label":"pagination"},t.createElement(f,{disabled:n<=1,label:"navigate back",icon:H,onClick:C(n-1)}),X(o,c,r,o-r).map(s=>t.createElement(g,{key:s,gap:s<0,selected:c===s,"aria-current":c===s?"page":"false",onClick:C(s)},s)),t.createElement(f,{disabled:n>=o,label:"navigate forward",icon:T,onClick:C(c+1)})):t.createElement(K,{placeholderBubblesNum:3})};function U(e,a){return Math.ceil(e/a)}function x(e,a){return Math.min(Math.max(1,e),a)}function y(e){return Array.from({length:e}).fill(-1).map((a,n)=>n+1)}function G(e,a,n){return y(n).map((r,l)=>{const i=l+1,o=n-1;return i<o?a+l:i===o?-1:e})}function Q(e,a){return y(e).map((n,r)=>a+r+1)}function W(e,a){return y(a).map((n,r)=>{const l=r+1,i=2;return l===1?1:l===i?-1:e-4+r})}function X(e,a,n,r){return e<=n?y(e):a<=r?G(e,a,n):a>r&&a<=r+2?Q(n,r):W(e,n)}try{b.displayName="Pagination",b.__docgenInfo={description:"",displayName:"Pagination",props:{numPagesDisplayed:{defaultValue:{value:"5"},description:"",name:"numPagesDisplayed",required:!1,type:{name:"number"}},activePage:{defaultValue:null,description:"",name:"activePage",required:!0,type:{name:"number"}},total:{defaultValue:null,description:"",name:"total",required:!0,type:{name:"number"}},pageSize:{defaultValue:null,description:"",name:"pageSize",required:!0,type:{name:"number"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},onChange:{defaultValue:{value:"() => {}"},description:"",name:"onChange",required:!1,type:{name:"TOnChangeEventHandler"}}}}}catch{}const{action:h}=__STORYBOOK_MODULE_ACTIONS__,le={title:"Components/Pagination",component:b},_=e=>S.createElement(v,{alignItems:"center",display:"flex",justifyContent:"center",paddingY:"6",style:{maxHeight:"350px"},width:"full"},S.createElement(b,{...e})),d={args:{activePage:5,total:100,pageSize:10,numPagesDisplayed:5,loading:!1,onChange:h("onChange")},render:_},u={args:{activePage:5,total:100,pageSize:10,numPagesDisplayed:5,loading:!0,onChange:h("onChange")},render:_},p={args:{activePage:1,total:45,pageSize:10,numPagesDisplayed:5,loading:!1,onChange:h("onChange")},render:_},m={args:{activePage:1,total:638,pageSize:10,numPagesDisplayed:5,loading:!1,onChange:h("onChange")},render:_};var I,P,k;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    activePage: 5,
    total: 100,
    pageSize: 10,
    numPagesDisplayed: 5,
    loading: false,
    onChange: action('onChange')
  },
  render: renderPagination
}`,...(k=(P=d.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var N,w,A;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    activePage: 5,
    total: 100,
    pageSize: 10,
    numPagesDisplayed: 5,
    loading: true,
    onChange: action('onChange')
  },
  render: renderPagination
}`,...(A=(w=u.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var q,V,z;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    activePage: 1,
    total: 45,
    pageSize: 10,
    numPagesDisplayed: 5,
    loading: false,
    onChange: action('onChange')
  },
  render: renderPagination
}`,...(z=(V=p.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var B,D,M;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    activePage: 1,
    total: 638,
    pageSize: 10,
    numPagesDisplayed: 5,
    loading: false,
    onChange: action('onChange')
  },
  render: renderPagination
}`,...(M=(D=m.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};const ie=["Standard","Loading","AllPagesFit","JumpForwardStart"];export{p as AllPagesFit,m as JumpForwardStart,u as Loading,d as Standard,ie as __namedExportsOrder,le as default};
