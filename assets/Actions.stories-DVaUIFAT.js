import{e as n}from"./iframe-euna8s5s.js";import{B as t}from"./Button-CTjmD_wc.js";import{A as o}from"./Actions-B1NoaJb-.js";import"./Icon-DqrgKwGZ.js";import"./resolveResponsiveProps-p3_9cnhH.js";import"./ProgressSpinner-CdJ-Ctri.js";import"./Column-DCUR6Gnc.js";const l={title:"Layout/Actions",tags:["review"],component:o,decorators:[a=>n.createElement("div",{style:{maxWidth:300,width:"100%"}},a())]},r={args:{noWrap:!1},render:a=>n.createElement(o,{...a},n.createElement(t,null,"Login"),n.createElement(t,{variant:"primary"},"Sign up"),n.createElement(t,{variant:"secondary"},"Action 1"),n.createElement(t,{variant:"secondary"},"Action 2"),n.createElement(t,{isLoading:!0,variant:"secondary"},"Action 3"),n.createElement(t,{minimal:!0,variant:"secondary"},"Action 4"))},e={args:{noWrap:!0},render:r.render};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const g=["Standard","NoWrap"];export{e as NoWrap,r as Standard,g as __namedExportsOrder,l as default};
