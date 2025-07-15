import{r as e,n as g,e as l,B as h}from"./iframe-Bw60F3r3.js";import{B as c}from"./Button-C8Kz0zNw.js";import{I as m}from"./Icon-DL18B8I0.js";import{I as f}from"./Inline-BWeOzgzx.js";import{I as C}from"./ChevronLeftIcon-C1wCQMZp.js";import{I as v}from"./ChevronRightIcon-C_aCAnSs.js";import"./ProgressSpinner-DSbr-4aD.js";import"./resolveResponsiveProps-DGdp35wv.js";import"./Text-Dp2MR2jg.js";const s=({hasNext:a=!1,hasPrevious:u=!1,onChange:p=g})=>{const i=d=>()=>{p(d)};return e.createElement(f,{as:"nav",space:"6","aria-label":"pagination",alignX:"center",alignY:"center"},e.createElement(c,{rounded:!0,withDoubleClicks:!0,disabled:!u,size:"small",variant:"secondary","aria-label":"previous page",onClick:i("previous")},e.createElement(m,{size:"medium",icon:C})),e.createElement(c,{rounded:!0,withDoubleClicks:!0,disabled:!a,size:"small",variant:"secondary","aria-label":"next page",onClick:i("next")},e.createElement(m,{size:"medium",icon:v})))};try{s.displayName="SimplePagination",s.__docgenInfo={description:"",displayName:"SimplePagination",props:{hasNext:{defaultValue:{value:"false"},description:"",name:"hasNext",required:!1,type:{name:"boolean"}},hasPrevious:{defaultValue:{value:"false"},description:"",name:"hasPrevious",required:!1,type:{name:"boolean"}},onChange:{defaultValue:{value:"() => {}"},description:"",name:"onChange",required:!1,type:{name:"TOnChangeEventHandler"}}}}}catch{}const{action:o}=__STORYBOOK_MODULE_ACTIONS__,O={title:"Components/Simple Pagination",component:s,decorators:[a=>l.createElement(h,{style:{height:"100vh",width:"100vw",maxHeight:"120px"},display:"flex",alignItems:"center",justifyContent:"center"},l.createElement(a,null))]},n={args:{hasNext:!0,hasPrevious:!0,onChange:o("onChange")}},r={args:{hasNext:!0,hasPrevious:!1,onChange:o("onChange")}},t={args:{hasNext:!1,hasPrevious:!0,onChange:o("onChange")}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    hasNext: true,
    hasPrevious: true,
    onChange: action('onChange')
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    hasNext: true,
    hasPrevious: false,
    onChange: action('onChange')
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    hasNext: false,
    hasPrevious: true,
    onChange: action('onChange')
  }
}`,...t.parameters?.docs?.source}}};const k=["MiddlePage","FirstPage","LastPage"];export{r as FirstPage,t as LastPage,n as MiddlePage,k as __namedExportsOrder,O as default};
