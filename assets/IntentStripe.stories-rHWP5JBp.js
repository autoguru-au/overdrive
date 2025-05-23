import{e,B as i}from"./iframe-B8iXgyt9.js";import{I as g}from"./IntentStripe-DuRVih5K.js";const y={title:"Components/Intent Stripe",component:g,argTypes:{intent:{options:["information","success","warning","danger"],defaultValue:"primary",control:{type:"select"}}}},r=t=>e.createElement(i,{position:"relative",width:"full",padding:"6",backgroundColour:"gray200",borderRadius:"1",overflow:"hidden"},e.createElement(g,{...t})),n={args:{intent:void 0,className:void 0},render:t=>e.createElement(i,{style:{display:"grid",gridAutoFlow:"row dense",gridGap:"24px",width:"100%"}},e.createElement(r,{...t}))},a={args:{intent:void 0,className:void 0},render:t=>e.createElement(i,{style:{display:"grid",gridAutoFlow:"row dense",gridGap:"24px",width:"100%"}},e.createElement(r,{...t,intent:"success"}),e.createElement(r,{...t,intent:"warning"}),e.createElement(r,{...t,intent:"danger"}),e.createElement(r,{...t,intent:"information"}))};var s,o,d;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(d=(o=n.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var l,p,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const w=["Standard","StandardAllIntents"];export{n as Standard,a as StandardAllIntents,w as __namedExportsOrder,y as default};
