import{a as s}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{r as e,R as l}from"./index-Cr_cdoBq.js";import{n as I}from"./index-R9txMNUR.js";import{I as N}from"./Inline-C5NfQFNa.js";import{B as m}from"./Button-DD4eqKRl.js";import{I as c}from"./Icon-u2F7oOeh.js";import{I as _}from"./ChevronLeftIcon-aalJjR7X.js";import{I as b}from"./ChevronRightIcon-nv1TUYIg.js";import{B as S}from"./Box-riOnoi3Y.js";import"./v4-CQkTLCs1.js";import"./_commonjsHelpers-C932wzq6.js";import"./index-DD0GW_rr.js";import"./useNegativeMarginTop-B5m0RFWn.js";import"./Text-B-fLVrc5.js";import"./dataAttrs-BPvLuXwN.js";import"./useTextStyles-DNm53NZA.js";import"./ProgressSpinner-DIWgntFa.js";const o=({hasNext:a=!1,hasPrevious:x=!1,onChange:y=I})=>{const i=E=>()=>{y(E)};return e.createElement(N,{is:"nav",space:"6","aria-label":"pagination",alignX:"center",alignY:"center"},e.createElement(m,{rounded:!0,withDoubleClicks:!0,disabled:!x,size:"small",variant:"secondary","aria-label":"previous page",onClick:i("previous")},e.createElement(c,{size:"medium",icon:_})),e.createElement(m,{rounded:!0,withDoubleClicks:!0,disabled:!a,size:"small",variant:"secondary","aria-label":"next page",onClick:i("next")},e.createElement(c,{size:"medium",icon:b})))};try{o.displayName="SimplePagination",o.__docgenInfo={description:"",displayName:"SimplePagination",props:{hasNext:{defaultValue:{value:"false"},description:"",name:"hasNext",required:!1,type:{name:"boolean"}},hasPrevious:{defaultValue:{value:"false"},description:"",name:"hasPrevious",required:!1,type:{name:"boolean"}},onChange:{defaultValue:{value:"() => {}"},description:"",name:"onChange",required:!1,type:{name:"TOnChangeEventHandler"}}}}}catch{}const Y={title:"Primatives/Simple Pagination",component:o,decorators:[a=>l.createElement(S,{style:{height:"100vh",width:"100vw",maxHeight:"120px"},display:"flex",alignItems:"center",justifyContent:"center"},l.createElement(a,null))]},r={args:{hasNext:!0,hasPrevious:!0,onChange:s("onChange")}},n={args:{hasNext:!0,hasPrevious:!1,onChange:s("onChange")}},t={args:{hasNext:!1,hasPrevious:!0,onChange:s("onChange")}};var p,u,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    hasNext: true,
    hasPrevious: true,
    onChange: action('onChange')
  }
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var g,h,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    hasNext: true,
    hasPrevious: false,
    onChange: action('onChange')
  }
}`,...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var C,v,P;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    hasNext: false,
    hasPrevious: true,
    onChange: action('onChange')
  }
}`,...(P=(v=t.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};const A=["MiddlePage","FirstPage","LastPage"];export{n as FirstPage,t as LastPage,r as MiddlePage,A as __namedExportsOrder,Y as default};
