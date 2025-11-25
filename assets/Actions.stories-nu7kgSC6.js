import{e as t}from"./iframe-TtMUic4I.js";import{B as r}from"./Button-BnAJZEXS.js";import{A as o}from"./Actions-BOQIY8u-.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-CVCn9x6N.js";import"./resolveResponsiveProps-Bf2dZkOp.js";import"./ProgressSpinner-DCxfSEwa.js";import"./Column-CpA1mMx5.js";/* empty css                              */const B={title:"Layout/Actions",tags:["review"],component:o,decorators:[a=>t.createElement("div",{style:{maxWidth:300,width:"100%"}},a())]},n={args:{noWrap:!1},render:a=>t.createElement(o,{...a},t.createElement(r,null,"Login"),t.createElement(r,{variant:"primary"},"Sign up"),t.createElement(r,{variant:"secondary"},"Action 1"),t.createElement(r,{variant:"secondary"},"Action 2"),t.createElement(r,{isLoading:!0,variant:"secondary"},"Action 3"),t.createElement(r,{minimal:!0,variant:"secondary"},"Action 4"))},e={args:{noWrap:!0},render:n.render};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    noWrap: true
  },
  render: Standard.render
}`,...e.parameters?.docs?.source}}};const A=["Standard","NoWrap"];export{e as NoWrap,n as Standard,A as __namedExportsOrder,B as default};
