import{v as d,e,B as l,H as t}from"./iframe-YGgNJyOm.js";import{F as m}from"./FlexInline-Di3N9ke8.js";import{D as i}from"./DividerLine-BKBlaKqd.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-Cl1JDW1x.js";const p=[1,2,3],c=["primary","secondary","danger","information","warning","success","neutral","shine"],h={title:"Primitives/Divider Line",component:i,argTypes:{space:{options:d.spaceWithNone,defaultValue:1,control:{type:"select"}},colour:{options:c,defaultValue:1,control:{type:"select"}},size:{options:p,defaultValue:1,control:{type:"select"}}},decorators:[r=>e.createElement("div",{style:{display:"grid",gridAutoFlow:"row dense",gridGap:"10px"}},e.createElement("div",{style:{display:"grid",gap:"10px",gridTemplateColumns:"repeat(auto-fit, minmax(10px, max-content))"}},r()))]},a={args:{space:"5",size:3,colour:"primary"},render:r=>e.createElement(l,null,e.createElement(t,{as:"h2",size:"7"},"Title 1"),e.createElement(i,{...r}),e.createElement(t,{as:"h2",size:"7"},"Title 1"))},s={args:{...a.args,isVertical:!0},render:r=>e.createElement(m,{justify:"stretch"},e.createElement(t,{as:"h2",size:"7"},"Title 1"),e.createElement(i,{...r}),e.createElement(t,{as:"h2",size:"7"},"Title 1"))},n={args:{...a.args},render:r=>e.createElement(l,null,c.map(o=>e.createElement(e.Fragment,{key:o},e.createElement(t,{as:"h2",size:"7"},"Title"),e.createElement(i,{...r,colour:o}))))};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const z=["Standard","Vertical","StandardAllColours"];export{a as Standard,n as StandardAllColours,s as Vertical,z as __namedExportsOrder,h as default};
