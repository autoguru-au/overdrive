import{r as e,n as g,e as l,B as h}from"./iframe-C9Ql_8pE.js";import{B as c}from"./Button-BC4NTZ_E.js";import{i as f}from"./flex-Blzo1G7q.js";import{I as m}from"./Icon-DX3P_hEq.js";import{I as C}from"./CaretLeftIcon-DAEz-PJb.js";import{I as v}from"./CaretRightIcon-BDkJiWdg.js";import"./preload-helper-PPVm8Dsz.js";import"./ProgressSpinner-CNlKbz44.js";import"./resolveResponsiveProps-6v5T8fj2.js";const s=({hasNext:a=!1,hasPrevious:u=!1,onChange:p=g})=>{const i=d=>()=>{p(d)};return e.createElement("nav",{className:f({gap:"6",center:!0}),"aria-label":"pagination"},e.createElement(c,{rounded:!0,withDoubleClicks:!0,disabled:!u,size:"small",variant:"secondary","aria-label":"previous page",onClick:i("previous")},e.createElement(m,{size:"medium",icon:C})),e.createElement(c,{rounded:!0,withDoubleClicks:!0,disabled:!a,size:"small",variant:"secondary","aria-label":"next page",onClick:i("next")},e.createElement(m,{size:"medium",icon:v})))};try{s.displayName="SimplePagination",s.__docgenInfo={description:"",displayName:"SimplePagination",props:{hasNext:{defaultValue:{value:"false"},description:"",name:"hasNext",required:!1,type:{name:"boolean"}},hasPrevious:{defaultValue:{value:"false"},description:"",name:"hasPrevious",required:!1,type:{name:"boolean"}},onChange:{defaultValue:{value:"() => {}"},description:"",name:"onChange",required:!1,type:{name:"TOnChangeEventHandler"}}}}}catch{}const{action:o}=__STORYBOOK_MODULE_ACTIONS__,O={title:"Components/Simple Pagination",component:s,decorators:[a=>l.createElement(h,{style:{height:"100vh",width:"100vw",maxHeight:"120px"},display:"flex",alignItems:"center",justifyContent:"center"},l.createElement(a,null))]},n={args:{hasNext:!0,hasPrevious:!0,onChange:o("onChange")}},r={args:{hasNext:!0,hasPrevious:!1,onChange:o("onChange")}},t={args:{hasNext:!1,hasPrevious:!0,onChange:o("onChange")}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
