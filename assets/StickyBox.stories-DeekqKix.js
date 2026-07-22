import{e as o,B as a,H as l}from"./iframe-BHjXsG_y.js";import{F as n}from"./FillHeightBox-OTJ_44Yp.js";import{T as s}from"./Text-1lD5z1cA.js";import{S as d}from"./StickyBox-mRi5csHq.js";import"./preload-helper-PPVm8Dsz.js";import"./useResponsiveValue-BRPQvcpS.js";import"./useMedia-vpBYOCIk.js";import"./resolveResponsiveProps-BLEzsCO-.js";import"./ScrollPane-QV8Na_wc.js";const S={title:"Layout/StickyBox",component:d},e={args:{top:"none",width:"full"},render:i=>o.createElement(n,{includeMobile:!0,bottomGap:"5",width:"full",backgroundColor:"white",borderColor:"default",borderWidth:"1",boxShadow:"1",height:"full",borderRadius:"1"},o.createElement(d,{...i},o.createElement(a,{marginTop:"9",padding:"3",width:"full",backgroundColor:"yellow700",borderRadius:"1",overflow:"hidden"},o.createElement(l,{as:"h2",color:"white"},"I'm a sticky header"))),o.createElement(a,{padding:"5",width:"full",style:{minHeight:"300vh"}},Array.from({length:100}).map((m,t)=>o.createElement(s,{key:t,as:"p"},"I am page content ",t+1))))},r={...e,args:{...e.args,noPopShadow:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    top: 'none',
    width: 'full'
  },
  render: args => <FillHeightBox includeMobile bottomGap="5" width="full" backgroundColor="white" borderColor="default" borderWidth="1" boxShadow="1" height="full" borderRadius="1">
            <StickyBox {...args}>
                <Box marginTop="9" padding="3" width="full" backgroundColor="yellow700" borderRadius="1" overflow="hidden">
                    <Heading as="h2" color="white">
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
}`,...r.parameters?.docs?.source}}};const y=["Standard","WithNoPopShadow"];export{e as Standard,r as WithNoPopShadow,y as __namedExportsOrder,S as default};
