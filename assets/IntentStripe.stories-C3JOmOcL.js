import{e,B as i}from"./iframe-COJ7wZQX.js";import{I as s}from"./IntentStripe-BaDcfINV.js";const l={title:"Content/Intent Stripe",component:s,argTypes:{intent:{options:["information","success","warning","danger"],defaultValue:"primary",control:{type:"select"}}}},r=t=>e.createElement(i,{position:"relative",width:"full",padding:"6",backgroundColour:"gray200",borderRadius:"1",overflow:"hidden"},e.createElement(s,{...t})),n={args:{intent:void 0,className:void 0},render:t=>e.createElement(i,{style:{display:"grid",gridAutoFlow:"row dense",gridGap:"24px",width:"100%"}},e.createElement(r,{...t}))},a={args:{intent:void 0,className:void 0},render:t=>e.createElement(i,{style:{display:"grid",gridAutoFlow:"row dense",gridGap:"24px",width:"100%"}},e.createElement(r,{...t,intent:"success"}),e.createElement(r,{...t,intent:"warning"}),e.createElement(r,{...t,intent:"danger"}),e.createElement(r,{...t,intent:"information"}))};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    intent: void 0,
    className: void 0
  },
  render: args => <Box style={{
    display: 'grid',
    gridAutoFlow: 'row dense',
    gridGap: '24px',
    width: '100%'
  }}>
            <MyStripe {...args} />
        </Box>
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    intent: void 0,
    className: void 0
  },
  render: args => <Box style={{
    display: 'grid',
    gridAutoFlow: 'row dense',
    gridGap: '24px',
    width: '100%'
  }}>
            <MyStripe {...args} intent="success" />
            <MyStripe {...args} intent="warning" />
            <MyStripe {...args} intent="danger" />
            <MyStripe {...args} intent="information" />
        </Box>
}`,...a.parameters?.docs?.source}}};const c=["Standard","StandardAllIntents"];export{n as Standard,a as StandardAllIntents,c as __namedExportsOrder,l as default};
