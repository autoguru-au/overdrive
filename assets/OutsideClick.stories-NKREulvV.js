import{e as o}from"./iframe-C_bA5shj.js";import{B as n}from"./Button-DlNVolKd.js";import{O as s}from"./OutsideClick-C0qLKk3G.js";import"./Icon-BzD9lmaF.js";import"./resolveResponsiveProps-CWlS2Mbp.js";import"./ProgressSpinner-DKoyI-KV.js";const{action:a}=__STORYBOOK_MODULE_ACTIONS__,O={title:"Utility/OutsideClick",component:s,parameters:{chromatic:{disable:!0}},argTypes:{children:{control:{disable:!0}}}},t={args:{onOutsideClick(){a("onOutsideClick"),alert("clicking outside")},children:o.createElement(n,null,"Click anywhere but here")}};var e,r,i;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    onOutsideClick() {
      action('onOutsideClick');
      alert('clicking outside');
    },
    children: <Button>Click anywhere but here</Button>
  }
}`,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const k=["Standard"];export{t as Standard,k as __namedExportsOrder,O as default};
