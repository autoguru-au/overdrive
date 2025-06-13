import{e as o,B as a,H as p}from"./iframe-Dl5X8CFQ.js";import{F as c}from"./FillHeightBox-CCo0Hw6x.js";import{T as g}from"./Text-CZG_rW-B.js";import{S as u}from"./StickyBox-E8KBbKlA.js";import"./useResponsiveValue-BQoGHbj_.js";import"./useMedia-siNYyqhF.js";import"./resolveResponsiveProps-Cley6Wsn.js";import"./ScrollPane-B4CYMAGN.js";import"./useTextStyles-BJe2PR_c.js";const C={title:"Layout/StickyBox",component:u},e={args:{top:"none",width:"full"},render:h=>o.createElement(c,{rounded:!0,includeMobile:!0,bottomGap:"5",width:"full",backgroundColour:"white",borderColour:"gray",borderWidth:"1",boxShadow:"1",height:"full",borderRadius:"1"},o.createElement(u,{...h},o.createElement(a,{marginTop:"8",padding:"3",width:"full",backgroundColour:"yellow700",borderRadius:"1",overflow:"hidden"},o.createElement(p,{as:"h2",colour:"white"},"I'm a sticky header"))),o.createElement(a,{padding:"5",width:"full",style:{minHeight:"300vh"}},Array.from({length:100}).map((w,t)=>o.createElement(g,{key:t,as:"p"},"I am page content ",t+1))))},r={...e,args:{...e.args,noPopShadow:!0}};var d,i,n;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(m=(s=r.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const T=["Standard","WithNoPopShadow"];export{e as Standard,r as WithNoPopShadow,T as __namedExportsOrder,C as default};
