import{e as o,B as t,H as l}from"./iframe-BTBLa9qD.js";import{F as n}from"./FillHeightBox-CevA3NJ1.js";import{T as s}from"./Text-C8RNI5di.js";import{S as d}from"./StickyBox-BJY94vj7.js";import"./preload-helper-PPVm8Dsz.js";import"./useResponsiveValue-BEBfdBOz.js";import"./useMedia-C-HbWGpN.js";import"./resolveResponsiveProps-CM5NKSWG.js";import"./ScrollPane-C1wfUUf6.js";const y={title:"Layout/StickyBox",component:d},e={args:{top:"none",width:"full"},render:i=>o.createElement(n,{includeMobile:!0,bottomGap:"5",width:"full",backgroundColour:"white",borderColour:"gray",borderWidth:"1",boxShadow:"1",height:"full",borderRadius:"1"},o.createElement(d,{...i},o.createElement(t,{marginTop:"8",padding:"3",width:"full",backgroundColour:"yellow700",borderRadius:"1",overflow:"hidden"},o.createElement(l,{as:"h2",colour:"white"},"I'm a sticky header"))),o.createElement(t,{padding:"5",width:"full",style:{minHeight:"300vh"}},Array.from({length:100}).map((m,a)=>o.createElement(s,{key:a,as:"p"},"I am page content ",a+1))))},r={...e,args:{...e.args,noPopShadow:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    top: 'none',
    width: 'full'
  },
  render: args => <FillHeightBox includeMobile bottomGap="5" width="full" backgroundColour="white" borderColour="gray" borderWidth="1" boxShadow="1" height="full" borderRadius="1">
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
