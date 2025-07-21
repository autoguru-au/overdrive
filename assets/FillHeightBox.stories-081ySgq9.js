import{e as r,B as i}from"./iframe-D_ivnAPa.js";import{T as d}from"./Text-IE4mIZod.js";import{F as a}from"./FillHeightBox-DZRrcNIm.js";import"./useResponsiveValue-CyCiosnU.js";import"./useMedia-CRfujCql.js";import"./resolveResponsiveProps-DkJAzUcH.js";import"./ScrollPane-DgwfTEVR.js";const g={title:"Layout/Fill Height Box",component:a},e={args:{rounded:!0,includeMobile:!0,bottomGap:"5",width:"full",backgroundColour:"white",borderColour:"gray",borderWidth:"1",boxShadow:"1",height:"full",borderRadius:"1",children:r.createElement(i,{padding:"5",width:"full",style:{minHeight:"300vh"}},Array.from({length:100}).map((o,t)=>r.createElement(d,{key:t,as:"p"},"I am page content ",t+1)))},render:o=>r.createElement(a,{...o})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const c=["Standard"];export{e as Standard,c as __namedExportsOrder,g as default};
