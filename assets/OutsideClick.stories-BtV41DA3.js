import{e}from"./iframe-C4sSev8-.js";import{B as r}from"./Button-Dc85r5Ai.js";import{O as i}from"./OutsideClick-D7bJL_Gs.js";import"./preload-helper-D9Z9MdNV.js";import"./Icon-CXO3Gmtu.js";import"./resolveResponsiveProps-JBHQbJiX.js";import"./ProgressSpinner-Cu-26nfN.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,m={title:"Utility/OutsideClick",component:i,parameters:{chromatic:{disable:!0}},argTypes:{children:{control:{disable:!0}}}},t={args:{onOutsideClick(){o("onOutsideClick"),alert("clicking outside")},children:e.createElement(r,null,"Click anywhere but here")}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    onOutsideClick() {
      action('onOutsideClick');
      alert('clicking outside');
    },
    children: <Button>Click anywhere but here</Button>
  }
}`,...t.parameters?.docs?.source}}};const p=["Standard"];export{t as Standard,p as __namedExportsOrder,m as default};
