import{e as o,B as a,H as n}from"./iframe-B6_QgceS.js";import{F as l}from"./FillHeightBox-7c0kjOU3.js";import{T as s}from"./Text-Bm62SiFA.js";import{S as d}from"./StickyBox-BQy880z_.js";import"./preload-helper-D9Z9MdNV.js";import"./useResponsiveValue-BM5swn67.js";import"./useMedia-RjPqp7fE.js";import"./resolveResponsiveProps-CzS1S_1C.js";import"./ScrollPane-AKaSmUDV.js";const y={title:"Layout/StickyBox",component:d},e={args:{top:"none",width:"full"},render:i=>o.createElement(l,{rounded:!0,includeMobile:!0,bottomGap:"5",width:"full",backgroundColour:"white",borderColour:"gray",borderWidth:"1",boxShadow:"1",height:"full",borderRadius:"1"},o.createElement(d,{...i},o.createElement(a,{marginTop:"8",padding:"3",width:"full",backgroundColour:"yellow700",borderRadius:"1",overflow:"hidden"},o.createElement(n,{as:"h2",colour:"white"},"I'm a sticky header"))),o.createElement(a,{padding:"5",width:"full",style:{minHeight:"300vh"}},Array.from({length:100}).map((m,t)=>o.createElement(s,{key:t,as:"p"},"I am page content ",t+1))))},r={...e,args:{...e.args,noPopShadow:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    top: 'none',
    width: 'full'
  },
  render: args => <FillHeightBox rounded includeMobile bottomGap="5" width="full" backgroundColour="white" borderColour="gray" borderWidth="1" boxShadow="1" height="full" borderRadius="1">
            <StickyBox {...args}>
                <Box marginTop="8" padding="3" width="full" backgroundColour="yellow700" borderRadius="1" overflow="hidden">
                    <Heading as="h2" colour="white">
                        I&apos;m a sticky header
                    </Heading>
                </Box>
            </StickyBox>
            <Box padding="5" width="full" style={{
      minHeight: '300vh'
    }}>
                {Array.from({
        length: 100
      }).map((_, i) => <Text key={i} as="p">
                        I am page content {i + 1}
                    </Text>)}
            </Box>
        </FillHeightBox>
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  ...Standard,
  args: {
    ...Standard.args,
    noPopShadow: true
  }
}`,...r.parameters?.docs?.source}}};const S=["Standard","WithNoPopShadow"];export{e as Standard,r as WithNoPopShadow,S as __namedExportsOrder,y as default};
