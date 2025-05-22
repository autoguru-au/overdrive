import{e,B as r,H as i}from"./iframe-C_bA5shj.js";import{S as d}from"./StickyBox-uE0G4x5g.js";import{T as s}from"./Text-Bu_KMAJq.js";import{S as m}from"./ScrollPane-Yq1crcXt.js";const x={title:"Layout/Scroll Pane",component:m},t={args:{style:{maxHeight:"300px"},children:e.createElement(e.Fragment,null,e.createElement(d,{width:"full"},e.createElement(r,{textAlign:"center",marginTop:"8",padding:"3",width:"full",backgroundColour:"yellow700",borderRadius:"1",overflow:"hidden"},e.createElement(i,{as:"h2",colour:"white"},"I'm a sticky header"))),e.createElement(r,{padding:"5",width:"full",style:{minHeight:"300vh"}},Array.from({length:100}).map((c,a)=>e.createElement(s,{key:a,as:"p"},"I am page content ",a+1))))}};var o,l,n;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(l=t.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};const y=["Standard"];export{t as Standard,y as __namedExportsOrder,x as default};
