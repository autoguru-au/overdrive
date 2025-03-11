import{a as T}from"./argTypes-2UZgVhCi.js";import{c as V,u as v}from"./Box-Dd8rtt69.js";import{r as e}from"./index-Cr_cdoBq.js";import{u as B}from"./useTextStyles-ekKSp2F9.js";import{I as N}from"./Inline-tlqGCB6n.js";import{I as W}from"./Icon-B_bwRvwH.js";import{T as b}from"./Text-DPlsuIMt.js";import{I as q}from"./PhoneIcon-Czp_TMeK.js";import{B as A}from"./Button-C8B-L6TN.js";import"./CheckIcon-qb3DRtZd.js";import"./StarIcon-DwMJajzk.js";import"./PlusIcon-BwhzlTq3.js";import"./CurrencyUsdIcon-BTiJTlzw.js";import"./AlertCircleIcon-BOrB_4ur.js";import"./CarIcon-BPYgb7mD.js";import"./MagnifyIcon-C8SSV07c.js";import"./_commonjsHelpers-C932wzq6.js";import"./index-DceDftY5.js";import"./useNegativeMarginTop-Bi5mjSTV.js";import"./dataAttrs-C4KudU4k.js";import"./ProgressSpinner-Ds-xXc0i.js";var k="um22v0";const o=({className:n="",is:r="a",disabled:x=!1,children:S,icon:i,..._})=>{const c=B({colour:"link"}),l={className:V(k,c,v({is:typeof r=="string"?r:void 0,display:"inline"}),n),disabled:x,..._},m=e.createElement(N,{space:"2"},i&&e.createElement(W,{icon:i,size:"small",className:c}),e.createElement(b,{fontWeight:"bold",size:"4",colour:"link"},S));return e.isValidElement(r)?e.cloneElement(r,l,m):e.createElement(r,l,m)};try{o.displayName="Anchor",o.__docgenInfo={description:"",displayName:"Anchor",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},is:{defaultValue:null,description:"",name:"is",required:!1,type:{name:"ElementType | ReactElement<unknown, string | JSXElementConstructor<any>>"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"IconType"}}}}}catch{}const ee={title:"Primatives/Anchor",component:o,argTypes:{icon:{defaultValue:null,description:"Input field Icon",...T},is:{control:{disable:!0}},children:{defaultValue:"07 5612 5347",control:{type:"text"}}}},t={args:{href:"tel:07 5612 5347",children:"07 5612 5347"}},a={args:{...t.args,icon:q}},s={args:{...a.args,is:A}};var p,d,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    href: 'tel:07 5612 5347',
    children: '07 5612 5347'
  }
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var f,g,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    icon: PhoneIcon
  }
}`,...(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var h,I,E;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...WithIcon.args,
    is: Button
  }
}`,...(E=(I=s.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};const re=["Standard","WithIcon","WithButton"];export{t as Standard,s as WithButton,a as WithIcon,re as __namedExportsOrder,ee as default};
