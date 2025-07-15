import{e as o,B as t,H as n}from"./iframe-Bw60F3r3.js";import{F as l}from"./FillHeightBox-iwJU-0tA.js";import{T as s}from"./Text-Dp2MR2jg.js";import{S as d}from"./StickyBox-CzhmrOPO.js";import"./useResponsiveValue-CMHawzUk.js";import"./useMedia-VC8ZgA1l.js";import"./resolveResponsiveProps-DGdp35wv.js";import"./ScrollPane-CeWUHvgL.js";const b={title:"Layout/StickyBox",component:d},e={args:{top:"none",width:"full"},render:i=>o.createElement(l,{rounded:!0,includeMobile:!0,bottomGap:"5",width:"full",backgroundColour:"white",borderColour:"gray",borderWidth:"1",boxShadow:"1",height:"full",borderRadius:"1"},o.createElement(d,{...i},o.createElement(t,{marginTop:"8",padding:"3",width:"full",backgroundColour:"yellow700",borderRadius:"1",overflow:"hidden"},o.createElement(n,{as:"h2",colour:"white"},"I'm a sticky header"))),o.createElement(t,{padding:"5",width:"full",style:{minHeight:"300vh"}},Array.from({length:100}).map((m,a)=>o.createElement(s,{key:a,as:"p"},"I am page content ",a+1))))},r={...e,args:{...e.args,noPopShadow:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const y=["Standard","WithNoPopShadow"];export{e as Standard,r as WithNoPopShadow,y as __namedExportsOrder,b as default};
