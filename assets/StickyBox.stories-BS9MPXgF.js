import{e as o,B as t,H as p}from"./iframe-C_bA5shj.js";import{F as c}from"./FillHeightBox-BZolABuF.js";import{T as g}from"./Text-Bu_KMAJq.js";import{S as u}from"./StickyBox-uE0G4x5g.js";import"./useResponsiveValue-BZ9YCq6E.js";import"./useMedia-5yuCFQWq.js";import"./resolveResponsiveProps-CWlS2Mbp.js";import"./ScrollPane-Yq1crcXt.js";const E={title:"Layout/StickyBox",component:u},e={args:{top:"none",width:"full"},render:h=>o.createElement(c,{rounded:!0,includeMobile:!0,bottomGap:"5",width:"full",backgroundColour:"white",borderColour:"gray",borderWidth:"1",boxShadow:"1",height:"full",borderRadius:"1"},o.createElement(u,{...h},o.createElement(t,{marginTop:"8",padding:"3",width:"full",backgroundColour:"yellow700",borderRadius:"1",overflow:"hidden"},o.createElement(p,{as:"h2",colour:"white"},"I'm a sticky header"))),o.createElement(t,{padding:"5",width:"full",style:{minHeight:"300vh"}},Array.from({length:100}).map((w,a)=>o.createElement(g,{key:a,as:"p"},"I am page content ",a+1))))},r={...e,args:{...e.args,noPopShadow:!0}};var d,i,n;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(n=(i=e.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var l,s,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...Standard,
  args: {
    ...Standard.args,
    noPopShadow: true
  }
}`,...(m=(s=r.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const C=["Standard","WithNoPopShadow"];export{e as Standard,r as WithNoPopShadow,C as __namedExportsOrder,E as default};
