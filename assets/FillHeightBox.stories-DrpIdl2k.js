import{e as r,B as i}from"./iframe-qUC4cxwQ.js";import{T as l}from"./Text-DW2ue6Ex.js";import{F as a}from"./FillHeightBox-DKxr3WFA.js";import"./preload-helper-PPVm8Dsz.js";import"./useResponsiveValue-BNxdIZzt.js";import"./useMedia-s10djCht.js";import"./resolveResponsiveProps-CJD-LI9u.js";import"./ScrollPane-DIPPL6iJ.js";const u={title:"Layout/Fill Height Box",component:a,argTypes:{children:{control:!1}}},e={args:{includeMobile:!0,bottomGap:"5",width:"full",backgroundColour:"white",borderColour:"gray",borderWidth:"1",boxShadow:"1",height:"full",borderRadius:"1",children:r.createElement(i,{padding:"5",width:"full",style:{minHeight:"300vh"}},Array.from({length:100}).map((o,t)=>r.createElement(l,{key:t,as:"p"},"I am page content ",t+1)))},render:o=>r.createElement(a,{...o})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
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
}`,...e.parameters?.docs?.source}}};const b=["Standard"];export{e as Standard,b as __namedExportsOrder,u as default};
