import{r as t,B as v,c as I,t as P,n as k,e as S}from"./iframe-euna8s5s.js";import{I as q}from"./Icon-DqrgKwGZ.js";import{I as N}from"./Inline-BpZZsJdf.js";import{I as w}from"./ChevronLeftIcon-D2hNH8hD.js";import{I as A}from"./ChevronRightIcon-Bb1x67bM.js";import"./resolveResponsiveProps-p3_9cnhH.js";import"./Text-de5ME79G.js";var E="_9nf7kx0",V="_9nf7kx1",z="_9nf7kx2";const g=({className:e="",selected:a=!1,gap:n=!1,children:r,disabled:l,onClick:i})=>{let o="transparent";return a?o="green900":l&&(o="gray200"),t.createElement(v,{as:"button",backgroundColour:o,display:"flex",overflow:"hidden",alignItems:"center",flexDirection:"row",justifyContent:"center",textAlign:"center",borderRadius:"pill",pointerEvents:l?"none":void 0,className:I(e,P({colour:a?"white":"light",size:"3",weight:"bold"}),{[V]:a,[E]:n,[z]:!n}),onClick:i},n?"...":r)};try{g.displayName="Bubble",g.__docgenInfo={description:"",displayName:"Bubble",props:{selected:{defaultValue:{value:"false"},description:"",name:"selected",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},gap:{defaultValue:{value:"false"},description:"",name:"gap",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const f=({icon:e,disabled:a,label:n="",onClick:r=k})=>t.createElement(v,{as:"button","aria-disabled":a,"aria-label":n,display:"flex",overflow:"hidden",alignItems:"center",flexDirection:"row",justifyContent:"center",textAlign:"center",borderRadius:"pill",padding:"2",userSelect:"none",pointerEvents:a?"none":void 0,className:I(P({colour:"light"}),{[E]:a}),onClick:r},t.createElement(q,{size:"medium",icon:e})),B=({placeholderBubblesNum:e=3})=>t.createElement(N,{as:"span",space:"3"},t.createElement(f,{disabled:!0,icon:w}),Array.from({length:e}).fill("").map((a,n)=>t.createElement(g,{key:n,disabled:!0,className:E})),t.createElement(f,{disabled:!0,icon:A})),b=({total:e,pageSize:a,activePage:n,numPagesDisplayed:r=5,loading:l=!1,onChange:i=k})=>{const o=t.useMemo(()=>D(e,a),[e,a]),C=t.useCallback(s=>()=>{i({pageNumber:x(s,o)})},[o]),c=t.useMemo(()=>x(n,o),[n,o]);return!l&&e&&a&&n&&r?t.createElement(N,{as:"nav",space:"3","aria-label":"pagination"},t.createElement(f,{disabled:n<=1,label:"navigate back",icon:w,onClick:C(n-1)}),F(o,c,r,o-r).map(s=>t.createElement(g,{key:s,gap:s<0,selected:c===s,"aria-current":c===s?"page":"false",onClick:C(s)},s)),t.createElement(f,{disabled:n>=o,label:"navigate forward",icon:A,onClick:C(c+1)})):t.createElement(B,{placeholderBubblesNum:3})};function D(e,a){return Math.ceil(e/a)}function x(e,a){return Math.min(Math.max(1,e),a)}function y(e){return Array.from({length:e}).fill(-1).map((a,n)=>n+1)}function M(e,a,n){return y(n).map((r,l)=>{const i=l+1,o=n-1;return i<o?a+l:i===o?-1:e})}function O(e,a){return y(e).map((n,r)=>a+r+1)}function L(e,a){return y(a).map((n,r)=>{const l=r+1,i=2;return l===1?1:l===i?-1:e-4+r})}function F(e,a,n,r){return e<=n?y(e):a<=r?M(e,a,n):a>r&&a<=r+2?O(n,r):L(e,n)}try{b.displayName="Pagination",b.__docgenInfo={description:"",displayName:"Pagination",props:{numPagesDisplayed:{defaultValue:{value:"5"},description:"",name:"numPagesDisplayed",required:!1,type:{name:"number"}},activePage:{defaultValue:null,description:"",name:"activePage",required:!0,type:{name:"number"}},total:{defaultValue:null,description:"",name:"total",required:!0,type:{name:"number"}},pageSize:{defaultValue:null,description:"",name:"pageSize",required:!0,type:{name:"number"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},onChange:{defaultValue:{value:"() => {}"},description:"",name:"onChange",required:!1,type:{name:"TOnChangeEventHandler"}}}}}catch{}const{action:h}=__STORYBOOK_MODULE_ACTIONS__,U={title:"Components/Pagination",component:b},_=e=>S.createElement(v,{alignItems:"center",display:"flex",justifyContent:"center",paddingY:"6",style:{maxHeight:"350px"},width:"full"},S.createElement(b,{...e})),d={args:{activePage:5,total:100,pageSize:10,numPagesDisplayed:5,loading:!1,onChange:h("onChange")},render:_},u={args:{activePage:5,total:100,pageSize:10,numPagesDisplayed:5,loading:!0,onChange:h("onChange")},render:_},p={args:{activePage:1,total:45,pageSize:10,numPagesDisplayed:5,loading:!1,onChange:h("onChange")},render:_},m={args:{activePage:1,total:638,pageSize:10,numPagesDisplayed:5,loading:!1,onChange:h("onChange")},render:_};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    activePage: 5,
    total: 100,
    pageSize: 10,
    numPagesDisplayed: 5,
    loading: false,
    onChange: action('onChange')
  },
  render: renderPagination
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    activePage: 5,
    total: 100,
    pageSize: 10,
    numPagesDisplayed: 5,
    loading: true,
    onChange: action('onChange')
  },
  render: renderPagination
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    activePage: 1,
    total: 45,
    pageSize: 10,
    numPagesDisplayed: 5,
    loading: false,
    onChange: action('onChange')
  },
  render: renderPagination
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    activePage: 1,
    total: 638,
    pageSize: 10,
    numPagesDisplayed: 5,
    loading: false,
    onChange: action('onChange')
  },
  render: renderPagination
}`,...m.parameters?.docs?.source}}};const G=["Standard","Loading","AllPagesFit","JumpForwardStart"];export{p as AllPagesFit,m as JumpForwardStart,u as Loading,d as Standard,G as __namedExportsOrder,U as default};
