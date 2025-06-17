import{r as e,n as E,e as l,B as I}from"./iframe-BPJhr76J.js";import{B as c}from"./Button-C-CLfH2z.js";import{I as m}from"./Icon-D8YYTUq2.js";import{I as N}from"./Inline-BHwqQZj_.js";import{I as b}from"./ChevronLeftIcon-BvtTd9Uw.js";import{I as S}from"./ChevronRightIcon-7F7FnAbu.js";import"./ProgressSpinner-6peMk8TN.js";import"./useTextStyles-D4FwBGMO.js";import"./resolveResponsiveProps-DXxr8mrg.js";import"./Text-3IOoZozm.js";import"./useNegativeMarginTop-8MlrPDw7.js";const s=({hasNext:a=!1,hasPrevious:x=!1,onChange:_=E})=>{const i=y=>()=>{_(y)};return e.createElement(N,{as:"nav",space:"6","aria-label":"pagination",alignX:"center",alignY:"center"},e.createElement(c,{rounded:!0,withDoubleClicks:!0,disabled:!x,size:"small",variant:"secondary","aria-label":"previous page",onClick:i("previous")},e.createElement(m,{size:"medium",icon:b})),e.createElement(c,{rounded:!0,withDoubleClicks:!0,disabled:!a,size:"small",variant:"secondary","aria-label":"next page",onClick:i("next")},e.createElement(m,{size:"medium",icon:S})))};try{s.displayName="SimplePagination",s.__docgenInfo={description:"",displayName:"SimplePagination",props:{hasNext:{defaultValue:{value:"false"},description:"",name:"hasNext",required:!1,type:{name:"boolean"}},hasPrevious:{defaultValue:{value:"false"},description:"",name:"hasPrevious",required:!1,type:{name:"boolean"}},onChange:{defaultValue:{value:"() => {}"},description:"",name:"onChange",required:!1,type:{name:"TOnChangeEventHandler"}}}}}catch{}const{action:o}=__STORYBOOK_MODULE_ACTIONS__,F={title:"Primatives/Simple Pagination",component:s,decorators:[a=>l.createElement(I,{style:{height:"100vh",width:"100vw",maxHeight:"120px"},display:"flex",alignItems:"center",justifyContent:"center"},l.createElement(a,null))]},r={args:{hasNext:!0,hasPrevious:!0,onChange:o("onChange")}},n={args:{hasNext:!0,hasPrevious:!1,onChange:o("onChange")}},t={args:{hasNext:!1,hasPrevious:!0,onChange:o("onChange")}};var u,p,d;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    hasNext: true,
    hasPrevious: true,
    onChange: action('onChange')
  }
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var g,h,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(P=(v=t.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};const H=["MiddlePage","FirstPage","LastPage"];export{n as FirstPage,t as LastPage,r as MiddlePage,H as __namedExportsOrder,F as default};
