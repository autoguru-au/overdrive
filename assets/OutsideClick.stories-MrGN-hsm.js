import{e}from"./iframe-BTBLa9qD.js";import{B as r}from"./Button-DMSOS-W_.js";import{O as i}from"./OutsideClick-fa_x_i9a.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-C6DP2-K2.js";import"./resolveResponsiveProps-CM5NKSWG.js";import"./ProgressSpinner-DC49HFAj.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,m={title:"Utility/OutsideClick",component:i,parameters:{chromatic:{disable:!0}},argTypes:{children:{control:{disable:!0}}}},t={args:{onOutsideClick(){o("onOutsideClick"),alert("clicking outside")},children:e.createElement(r,null,"Click anywhere but here")}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    onOutsideClick() {
      action('onOutsideClick');
      alert('clicking outside');
    },
    children: <Button>Click anywhere but here</Button>
  }
}`,...t.parameters?.docs?.source}}};const p=["Standard"];export{t as Standard,p as __namedExportsOrder,m as default};
