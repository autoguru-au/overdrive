import{e,B as a,H as n}from"./iframe-Dl5X8CFQ.js";import{S as d}from"./StickyBox-E8KBbKlA.js";import{T as m}from"./Text-CZG_rW-B.js";import{S as s}from"./ScrollPane-B4CYMAGN.js";import"./useTextStyles-BJe2PR_c.js";import"./resolveResponsiveProps-Cley6Wsn.js";const f={title:"Layout/Scroll Pane",component:s},t={args:{style:{maxHeight:"300px"},children:e.createElement(e.Fragment,null,e.createElement(d,{width:"full"},e.createElement(a,{textAlign:"center",marginTop:"8",padding:"3",width:"full",backgroundColour:"yellow700",borderRadius:"1",overflow:"hidden"},e.createElement(n,{as:"h2",colour:"white"},"I'm a sticky header"))),e.createElement(a,{padding:"5",width:"full",style:{minHeight:"300vh"}},Array.from({length:100}).map((c,r)=>e.createElement(m,{key:r,as:"p"},"I am page content ",r+1))))}};var o,l,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    style: {
      maxHeight: '300px'
    },
    children: <>
                <StickyBox width="full">
                    <Box textAlign="center" marginTop="8" padding="3" width="full" backgroundColour="yellow700" borderRadius="1" overflow="hidden">
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
            </>
  }
}`,...(i=(l=t.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const w=["Standard"];export{t as Standard,w as __namedExportsOrder,f as default};
