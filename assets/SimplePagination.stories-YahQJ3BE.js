import{a as s}from"./index-B-lxVbXh.js";import{r as e,R as l}from"./index-DVCUSwsV.js";import{B as I}from"./Box-DIPDnkNs.js";import{n as N}from"./index-qJC9azT-.js";import{B as m}from"./Button-BzfBSmfJ.js";import{I as c}from"./Icon-C_SEX2PX.js";import{I as _}from"./Inline-B2m9Rf9M.js";import{I as b}from"./ChevronLeftIcon-B8jWV3Ne.js";import{I as S}from"./ChevronRightIcon-dN6UG2U0.js";import"./v4-CtRu48qb.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./ProgressSpinner-Cou6gzq4.js";import"./useTextStyles-CPzSss8t.js";/* empty css                                    */import"./createRuntimeFn-62c9670f.esm-BkdTE7RR.js";import"./resolveResponsiveProps-CZKwGxeg.js";import"./index-4KvmGZzY.js";import"./Text-CZSIapSJ.js";const o=({hasNext:a=!1,hasPrevious:x=!1,onChange:y=N})=>{const i=E=>()=>{y(E)};return e.createElement(_,{as:"nav",space:"6","aria-label":"pagination",alignX:"center",alignY:"center"},e.createElement(m,{rounded:!0,withDoubleClicks:!0,disabled:!x,size:"small",variant:"secondary","aria-label":"previous page",onClick:i("previous")},e.createElement(c,{size:"medium",icon:b})),e.createElement(m,{rounded:!0,withDoubleClicks:!0,disabled:!a,size:"small",variant:"secondary","aria-label":"next page",onClick:i("next")},e.createElement(c,{size:"medium",icon:S})))};try{o.displayName="SimplePagination",o.__docgenInfo={description:"",displayName:"SimplePagination",props:{hasNext:{defaultValue:{value:"false"},description:"",name:"hasNext",required:!1,type:{name:"boolean"}},hasPrevious:{defaultValue:{value:"false"},description:"",name:"hasPrevious",required:!1,type:{name:"boolean"}},onChange:{defaultValue:{value:"() => {}"},description:"",name:"onChange",required:!1,type:{name:"TOnChangeEventHandler"}}}}}catch{}const A={title:"Primatives/Simple Pagination",component:o,decorators:[a=>l.createElement(I,{style:{height:"100vh",width:"100vw",maxHeight:"120px"},display:"flex",alignItems:"center",justifyContent:"center"},l.createElement(a,null))]},r={args:{hasNext:!0,hasPrevious:!0,onChange:s("onChange")}},t={args:{hasNext:!0,hasPrevious:!1,onChange:s("onChange")}},n={args:{hasNext:!1,hasPrevious:!0,onChange:s("onChange")}};var p,u,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    hasNext: true,
    hasPrevious: true,
    onChange: action('onChange')
  }
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var g,h,f;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    hasNext: true,
    hasPrevious: false,
    onChange: action('onChange')
  }
}`,...(f=(h=t.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var C,v,P;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    hasNext: false,
    hasPrevious: true,
    onChange: action('onChange')
  }
}`,...(P=(v=n.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};const G=["MiddlePage","FirstPage","LastPage"];export{t as FirstPage,n as LastPage,r as MiddlePage,G as __namedExportsOrder,A as default};
