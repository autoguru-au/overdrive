import{e,B as l,H as t}from"./iframe-DrpTQ52u.js";import{F as d}from"./FlexInline-DBfpYdkn.js";import{D as i}from"./DividerLine-DUJjIqGC.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-w0qCovFb.js";const m={none:"none",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9"},p=[1,2,3],c=["primary","secondary","danger","information","warning","success","neutral","shine"],z={title:"Primitives/Divider Line",component:i,argTypes:{space:{options:Object.keys(m),defaultValue:1,control:{type:"select"}},colour:{options:c,defaultValue:1,control:{type:"select"}},size:{options:p,defaultValue:1,control:{type:"select"}}},decorators:[r=>e.createElement("div",{style:{display:"grid",gridAutoFlow:"row dense",gridGap:"10px"}},e.createElement("div",{style:{display:"grid",gap:"10px",gridTemplateColumns:"repeat(auto-fit, minmax(10px, max-content))"}},r()))]},a={args:{space:"5",size:3,colour:"primary"},render:r=>e.createElement(l,null,e.createElement(t,{as:"h2",size:"7"},"Title 1"),e.createElement(i,{...r}),e.createElement(t,{as:"h2",size:"7"},"Title 1"))},n={args:{...a.args,isVertical:!0},render:r=>e.createElement(d,{justify:"stretch"},e.createElement(t,{as:"h2",size:"7"},"Title 1"),e.createElement(i,{...r}),e.createElement(t,{as:"h2",size:"7"},"Title 1"))},s={args:{...a.args},render:r=>e.createElement(l,null,c.map(o=>e.createElement(e.Fragment,{key:o},e.createElement(t,{as:"h2",size:"7"},"Title"),e.createElement(i,{...r,colour:o}))))};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    space: '5',
    size: 3,
    colour: 'primary'
  },
  render: args => <Box>
            <Heading as="h2" size="7">
                Title 1
            </Heading>
            <DividerLine {...args} />
            <Heading as="h2" size="7">
                Title 1
            </Heading>
        </Box>
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    isVertical: true
  },
  render: args => <FlexInline justify="stretch">
            <Heading as="h2" size="7">
                Title 1
            </Heading>
            <DividerLine {...args} />
            <Heading as="h2" size="7">
                Title 1
            </Heading>
        </FlexInline>
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Standard.args
  },
  render: args => <Box>
            {colours.map(colour => <React.Fragment key={colour}>
                    <Heading as="h2" size="7">
                        Title
                    </Heading>
                    <DividerLine {...args} colour={colour} />
                </React.Fragment>)}
        </Box>
}`,...s.parameters?.docs?.source}}};const h=["Standard","Vertical","StandardAllColours"];export{a as Standard,s as StandardAllColours,n as Vertical,h as __namedExportsOrder,z as default};
