import{e}from"./iframe-BbPQSdjv.js";import{B as r}from"./Button-DOiCXXDC.js";import{O as i}from"./OutsideClick-CEwa93-z.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-CFumFu5C.js";import"./resolveResponsiveProps-BfycuN2U.js";import"./ProgressSpinner-CJsxiQSj.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,m={title:"Utility/OutsideClick",component:i,parameters:{chromatic:{disable:!0}},argTypes:{children:{control:{disable:!0}}}},t={args:{onOutsideClick(){o("onOutsideClick"),alert("clicking outside")},children:e.createElement(r,null,"Click anywhere but here")}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    onOutsideClick() {
      action('onOutsideClick');
      alert('clicking outside');
    },
    children: <Button>Click anywhere but here</Button>
  }
}`,...t.parameters?.docs?.source}}};const p=["Standard"];export{t as Standard,p as __namedExportsOrder,m as default};
