import{e}from"./iframe-BIDnS-AI.js";import{B as r}from"./Button-CjHgngEJ.js";import{O as i}from"./OutsideClick-CkFKbquS.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-DbrnBHWs.js";import"./resolveResponsiveProps-CwZrgFwa.js";import"./ProgressSpinner-C_aM8xWn.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,m={title:"Utility/OutsideClick",component:i,parameters:{chromatic:{disable:!0}},argTypes:{children:{control:{disable:!0}}}},t={args:{onOutsideClick(){o("onOutsideClick"),alert("clicking outside")},children:e.createElement(r,null,"Click anywhere but here")}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    onOutsideClick() {
      action('onOutsideClick');
      alert('clicking outside');
    },
    children: <Button>Click anywhere but here</Button>
  }
}`,...t.parameters?.docs?.source}}};const p=["Standard"];export{t as Standard,p as __namedExportsOrder,m as default};
