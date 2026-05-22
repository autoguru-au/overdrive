import{e}from"./iframe-BNimcw7I.js";import{B as r}from"./Button-C8v7PRHz.js";import{O as i}from"./OutsideClick-BIN2gruG.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-Cj-g7sro.js";import"./resolveResponsiveProps-CokS9ksv.js";import"./ProgressSpinner-BekTt4R6.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,m={title:"Utility/OutsideClick",component:i,parameters:{chromatic:{disable:!0}},argTypes:{children:{control:{disable:!0}}}},t={args:{onOutsideClick(){o("onOutsideClick"),alert("clicking outside")},children:e.createElement(r,null,"Click anywhere but here")}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    onOutsideClick() {
      action('onOutsideClick');
      alert('clicking outside');
    },
    children: <Button>Click anywhere but here</Button>
  }
}`,...t.parameters?.docs?.source}}};const p=["Standard"];export{t as Standard,p as __namedExportsOrder,m as default};
