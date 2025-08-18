import{e}from"./iframe-C_ToDWZR.js";import{B as r}from"./Button-C6X-pLj4.js";import{O as i}from"./OutsideClick-2kAJ29wU.js";import"./preload-helper-D9Z9MdNV.js";import"./Icon-B1NaPOMJ.js";import"./resolveResponsiveProps-D4tqr0Ct.js";import"./ProgressSpinner-Bemph7Ca.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,m={title:"Utility/OutsideClick",component:i,parameters:{chromatic:{disable:!0}},argTypes:{children:{control:{disable:!0}}}},t={args:{onOutsideClick(){o("onOutsideClick"),alert("clicking outside")},children:e.createElement(r,null,"Click anywhere but here")}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    onOutsideClick() {
      action('onOutsideClick');
      alert('clicking outside');
    },
    children: <Button>Click anywhere but here</Button>
  }
}`,...t.parameters?.docs?.source}}};const p=["Standard"];export{t as Standard,p as __namedExportsOrder,m as default};
