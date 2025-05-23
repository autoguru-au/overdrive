import{r as e,n as E,e as l,B as I}from"./iframe-B8iXgyt9.js";import{B as c}from"./Button-MYj80liu.js";import{I as m}from"./Icon-C88vUc02.js";import{I as N}from"./Inline-C5F93m_p.js";import{I as b}from"./ChevronLeftIcon-qL6OxpBS.js";import{I as S}from"./ChevronRightIcon-CtlhFT-3.js";import"./ProgressSpinner-BA3DmeTG.js";import"./resolveResponsiveProps-jhGTtHr7.js";import"./Text-BLEkj1El.js";const s=({hasNext:a=!1,hasPrevious:x=!1,onChange:_=E})=>{const i=y=>()=>{_(y)};return e.createElement(N,{as:"nav",space:"6","aria-label":"pagination",alignX:"center",alignY:"center"},e.createElement(c,{rounded:!0,withDoubleClicks:!0,disabled:!x,size:"small",variant:"secondary","aria-label":"previous page",onClick:i("previous")},e.createElement(m,{size:"medium",icon:b})),e.createElement(c,{rounded:!0,withDoubleClicks:!0,disabled:!a,size:"small",variant:"secondary","aria-label":"next page",onClick:i("next")},e.createElement(m,{size:"medium",icon:S})))};try{s.displayName="SimplePagination",s.__docgenInfo={description:"",displayName:"SimplePagination",props:{hasNext:{defaultValue:{value:"false"},description:"",name:"hasNext",required:!1,type:{name:"boolean"}},hasPrevious:{defaultValue:{value:"false"},description:"",name:"hasPrevious",required:!1,type:{name:"boolean"}},onChange:{defaultValue:{value:"() => {}"},description:"",name:"onChange",required:!1,type:{name:"TOnChangeEventHandler"}}}}}catch{}const{action:o}=__STORYBOOK_MODULE_ACTIONS__,T={title:"Primatives/Simple Pagination",component:s,decorators:[a=>l.createElement(I,{style:{height:"100vh",width:"100vw",maxHeight:"120px"},display:"flex",alignItems:"center",justifyContent:"center"},l.createElement(a,null))]},n={args:{hasNext:!0,hasPrevious:!0,onChange:o("onChange")}},r={args:{hasNext:!0,hasPrevious:!1,onChange:o("onChange")}},t={args:{hasNext:!1,hasPrevious:!0,onChange:o("onChange")}};var u,p,d;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    hasNext: true,
    hasPrevious: true,
    onChange: action('onChange')
  }
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var g,h,f;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    hasNext: true,
    hasPrevious: false,
    onChange: action('onChange')
  }
}`,...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var C,v,P;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    hasNext: false,
    hasPrevious: true,
    onChange: action('onChange')
  }
}`,...(P=(v=t.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};const V=["MiddlePage","FirstPage","LastPage"];export{r as FirstPage,t as LastPage,n as MiddlePage,V as __namedExportsOrder,T as default};
