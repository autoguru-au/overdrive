import{e}from"./iframe-PgZJ2afo.js";import{B as r}from"./Button-rZDT_fmr.js";import{O as i}from"./OutsideClick-C8hCIGi-.js";import"./preload-helper-D9Z9MdNV.js";import"./Icon-C4-JpBuo.js";import"./resolveResponsiveProps-CdSEa9T5.js";import"./ProgressSpinner-B7o5Hl7X.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,m={title:"Utility/OutsideClick",component:i,parameters:{chromatic:{disable:!0}},argTypes:{children:{control:{disable:!0}}}},t={args:{onOutsideClick(){o("onOutsideClick"),alert("clicking outside")},children:e.createElement(r,null,"Click anywhere but here")}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    onOutsideClick() {
      action('onOutsideClick');
      alert('clicking outside');
    },
    children: <Button>Click anywhere but here</Button>
  }
}`,...t.parameters?.docs?.source}}};const p=["Standard"];export{t as Standard,p as __namedExportsOrder,m as default};
