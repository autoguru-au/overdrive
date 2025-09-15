import{e as r,B as i}from"./iframe-B6_QgceS.js";import{T as d}from"./Text-Bm62SiFA.js";import{F as a}from"./FillHeightBox-7c0kjOU3.js";import"./preload-helper-D9Z9MdNV.js";import"./useResponsiveValue-BM5swn67.js";import"./useMedia-RjPqp7fE.js";import"./resolveResponsiveProps-CzS1S_1C.js";import"./ScrollPane-AKaSmUDV.js";const c={title:"Layout/Fill Height Box",component:a,argTypes:{children:{control:!1}}},e={args:{rounded:!0,includeMobile:!0,bottomGap:"5",width:"full",backgroundColour:"white",borderColour:"gray",borderWidth:"1",boxShadow:"1",height:"full",borderRadius:"1",children:r.createElement(i,{padding:"5",width:"full",style:{minHeight:"300vh"}},Array.from({length:100}).map((o,t)=>r.createElement(d,{key:t,as:"p"},"I am page content ",t+1)))},render:o=>r.createElement(a,{...o})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    rounded: true,
    includeMobile: true,
    bottomGap: '5',
    width: 'full',
    backgroundColour: 'white',
    borderColour: 'gray',
    borderWidth: '1',
    boxShadow: '1',
    height: 'full',
    borderRadius: '1',
    children: <Box padding="5" width="full" style={{
      minHeight: '300vh'
    }}>
                {Array.from({
        length: 100
      }).map((_, i) => <Text key={i} as="p">
                        I am page content {i + 1}
                    </Text>)}
            </Box>
  },
  render: args => <FillHeightBox {...args} />
}`,...e.parameters?.docs?.source}}};const b=["Standard"];export{e as Standard,b as __namedExportsOrder,c as default};
