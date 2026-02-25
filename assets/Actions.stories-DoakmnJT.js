import{e as t}from"./iframe-C21AoxKa.js";import{B as n}from"./Button-DU3nP0bg.js";import{A as o}from"./Actions-FsHiOQEI.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-C9qtG5Fb.js";import"./resolveResponsiveProps-CiZvzJMm.js";import"./ProgressSpinner-BECVKnD8.js";import"./Column-3Fw3XYBa.js";const g={title:"Layout/Actions",tags:["review"],component:o,decorators:[a=>t.createElement("div",{style:{maxWidth:300,width:"100%"}},a())]},r={args:{noWrap:!1},render:a=>t.createElement(o,{...a},t.createElement(n,null,"Login"),t.createElement(n,{variant:"primary"},"Sign up"),t.createElement(n,{variant:"secondary"},"Action 1"),t.createElement(n,{variant:"secondary"},"Action 2"),t.createElement(n,{isLoading:!0,variant:"secondary"},"Action 3"),t.createElement(n,{minimal:!0,variant:"secondary"},"Action 4"))},e={args:{noWrap:!0},render:r.render};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    noWrap: false
  },
  render: args => <Actions {...args}>
            <Button>Login</Button>
            <Button variant="primary">Sign up</Button>
            <Button variant="secondary">Action 1</Button>
            <Button variant="secondary">Action 2</Button>
            <Button isLoading variant="secondary">
                Action 3
            </Button>
            <Button minimal variant="secondary">
                Action 4
            </Button>
        </Actions>
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    noWrap: true
  },
  render: Standard.render
}`,...e.parameters?.docs?.source}}};const B=["Standard","NoWrap"];export{e as NoWrap,r as Standard,B as __namedExportsOrder,g as default};
