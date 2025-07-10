import{e}from"./iframe-euna8s5s.js";import{B as r}from"./Button-CTjmD_wc.js";import{O as i}from"./OutsideClick-S4idsBQv.js";import"./Icon-DqrgKwGZ.js";import"./resolveResponsiveProps-p3_9cnhH.js";import"./ProgressSpinner-CdJ-Ctri.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,u={title:"Utility/OutsideClick",component:i,parameters:{chromatic:{disable:!0}},argTypes:{children:{control:{disable:!0}}}},t={args:{onOutsideClick(){o("onOutsideClick"),alert("clicking outside")},children:e.createElement(r,null,"Click anywhere but here")}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    onOutsideClick() {
      action('onOutsideClick');
      alert('clicking outside');
    },
    children: <Button>Click anywhere but here</Button>
  }
}`,...t.parameters?.docs?.source}}};const m=["Standard"];export{t as Standard,m as __namedExportsOrder,u as default};
