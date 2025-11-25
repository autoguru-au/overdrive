import{e}from"./iframe-TtMUic4I.js";import{B as r}from"./Button-BnAJZEXS.js";import{O as i}from"./OutsideClick-KCMspxSq.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-CVCn9x6N.js";import"./resolveResponsiveProps-Bf2dZkOp.js";import"./ProgressSpinner-DCxfSEwa.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,m={title:"Utility/OutsideClick",component:i,parameters:{chromatic:{disable:!0}},argTypes:{children:{control:{disable:!0}}}},t={args:{onOutsideClick(){o("onOutsideClick"),alert("clicking outside")},children:e.createElement(r,null,"Click anywhere but here")}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    onOutsideClick() {
      action('onOutsideClick');
      alert('clicking outside');
    },
    children: <Button>Click anywhere but here</Button>
  }
}`,...t.parameters?.docs?.source}}};const p=["Standard"];export{t as Standard,p as __namedExportsOrder,m as default};
