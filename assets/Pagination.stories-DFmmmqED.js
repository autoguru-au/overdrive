import{r as t,B as v,c as O,z as L,n as F,e as S}from"./iframe-Dl5X8CFQ.js";import{I as j}from"./Icon-IKMSJ4nR.js";import{I as J}from"./Inline-DS_RBcHB.js";import{I as H}from"./ChevronLeftIcon-CyCAaeDY.js";import{I as T}from"./ChevronRightIcon-DhXI8kbz.js";import"./resolveResponsiveProps-Cley6Wsn.js";import"./Text-CZG_rW-B.js";import"./useTextStyles-BJe2PR_c.js";import"./useNegativeMarginTop-14a5w23w.js";var E="_9nf7kx0",R="_9nf7kx1",Y="_9nf7kx2";const g=({className:e="",selected:a=!1,gap:n=!1,children:r,disabled:i,onClick:l})=>{let o="transparent";return a?o="green900":i&&(o="gray200"),t.createElement(v,{as:"button",backgroundColour:o,display:"flex",overflow:"hidden",alignItems:"center",flexDirection:"row",justifyContent:"center",textAlign:"center",borderRadius:"pill",pointerEvents:i?"none":void 0,className:O(e,L({fontWeight:"bold",colour:a?"white":"light",size:"3"}),{[R]:a,[E]:n,[Y]:!n}),onClick:l},n?"...":r)};try{g.displayName="Bubble",g.__docgenInfo={description:"",displayName:"Bubble",props:{selected:{defaultValue:{value:"false"},description:"",name:"selected",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},gap:{defaultValue:{value:"false"},description:"",name:"gap",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const f=({icon:e,disabled:a,label:n="",onClick:r=F})=>t.createElement(v,{as:"button","aria-disabled":a,"aria-label":n,display:"flex",overflow:"hidden",alignItems:"center",flexDirection:"row",justifyContent:"center",textAlign:"center",borderRadius:"pill",padding:"2",userSelect:"none",pointerEvents:a?"none":void 0,className:O(L({colour:"light"}),{[E]:a}),onClick:r},t.createElement(j,{size:"medium",icon:e})),K=({placeholderBubblesNum:e=3})=>t.createElement(J,{as:"span",space:"3"},t.createElement(f,{disabled:!0,icon:H}),Array.from({length:e}).fill("").map((a,n)=>t.createElement(g,{key:n,disabled:!0,className:E})),t.createElement(f,{disabled:!0,icon:T})),b=({total:e,pageSize:a,activePage:n,numPagesDisplayed:r=5,loading:i=!1,onChange:l=F})=>{const o=t.useMemo(()=>U(e,a),[e,a]),C=t.useCallback(s=>()=>{l({pageNumber:x(s,o)})},[o]),c=t.useMemo(()=>x(n,o),[n,o]);return!i&&e&&a&&n&&r?t.createElement(J,{as:"nav",space:"3","aria-label":"pagination"},t.createElement(f,{disabled:n<=1,label:"navigate back",icon:H,onClick:C(n-1)}),X(o,c,r,o-r).map(s=>t.createElement(g,{key:s,gap:s<0,selected:c===s,"aria-current":c===s?"page":"false",onClick:C(s)},s)),t.createElement(f,{disabled:n>=o,label:"navigate forward",icon:T,onClick:C(c+1)})):t.createElement(K,{placeholderBubblesNum:3})};function U(e,a){return Math.ceil(e/a)}function x(e,a){return Math.min(Math.max(1,e),a)}function y(e){return Array.from({length:e}).fill(-1).map((a,n)=>n+1)}function W(e,a,n){return y(n).map((r,i)=>{const l=i+1,o=n-1;return l<o?a+i:l===o?-1:e})}function G(e,a){return y(e).map((n,r)=>a+r+1)}function Q(e,a){return y(a).map((n,r)=>{const i=r+1,l=2;return i===1?1:i===l?-1:e-4+r})}function X(e,a,n,r){return e<=n?y(e):a<=r?W(e,a,n):a>r&&a<=r+2?G(n,r):Q(e,n)}try{b.displayName="Pagination",b.__docgenInfo={description:"",displayName:"Pagination",props:{numPagesDisplayed:{defaultValue:{value:"5"},description:"",name:"numPagesDisplayed",required:!1,type:{name:"number"}},activePage:{defaultValue:null,description:"",name:"activePage",required:!0,type:{name:"number"}},total:{defaultValue:null,description:"",name:"total",required:!0,type:{name:"number"}},pageSize:{defaultValue:null,description:"",name:"pageSize",required:!0,type:{name:"number"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},onChange:{defaultValue:{value:"() => {}"},description:"",name:"onChange",required:!1,type:{name:"TOnChangeEventHandler"}}}}}catch{}const{action:h}=__STORYBOOK_MODULE_ACTIONS__,le={title:"Components/Pagination",component:b},_=e=>S.createElement(v,{alignItems:"center",display:"flex",justifyContent:"center",paddingY:"6",style:{maxHeight:"350px"},width:"full"},S.createElement(b,{...e})),d={args:{activePage:5,total:100,pageSize:10,numPagesDisplayed:5,loading:!1,onChange:h("onChange")},render:_},u={args:{activePage:5,total:100,pageSize:10,numPagesDisplayed:5,loading:!0,onChange:h("onChange")},render:_},p={args:{activePage:1,total:45,pageSize:10,numPagesDisplayed:5,loading:!1,onChange:h("onChange")},render:_},m={args:{activePage:1,total:638,pageSize:10,numPagesDisplayed:5,loading:!1,onChange:h("onChange")},render:_};var I,P,k;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(A=(w=u.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var q,z,V;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    activePage: 1,
    total: 45,
    pageSize: 10,
    numPagesDisplayed: 5,
    loading: false,
    onChange: action('onChange')
  },
  render: renderPagination
}`,...(V=(z=p.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var B,D,M;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    activePage: 1,
    total: 638,
    pageSize: 10,
    numPagesDisplayed: 5,
    loading: false,
    onChange: action('onChange')
  },
  render: renderPagination
}`,...(M=(D=m.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};const se=["Standard","Loading","AllPagesFit","JumpForwardStart"];export{p as AllPagesFit,m as JumpForwardStart,u as Loading,d as Standard,se as __namedExportsOrder,le as default};
