import{e}from"./iframe-CvODe0lv.js";import{B as r}from"./Button-DrLYyTDM.js";import{O as i}from"./OutsideClick-CmwH6Bz4.js";import"./Icon-CRKWC-ID.js";import"./resolveResponsiveProps-Dj_dR-0O.js";import"./ProgressSpinner-2irF96n3.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,u={title:"Utility/OutsideClick",component:i,parameters:{chromatic:{disable:!0}},argTypes:{children:{control:{disable:!0}}}},t={args:{onOutsideClick(){o("onOutsideClick"),alert("clicking outside")},children:e.createElement(r,null,"Click anywhere but here")}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    onOutsideClick() {
      action('onOutsideClick');
      alert('clicking outside');
    },
    children: <Button>Click anywhere but here</Button>
  }
}`,...t.parameters?.docs?.source}}};const m=["Standard"];export{t as Standard,m as __namedExportsOrder,u as default};
