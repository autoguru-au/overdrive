import{e,B as a,H as o}from"./iframe-C_ToDWZR.js";import{S as l}from"./StickyBox-Ch6KnbZZ.js";import{T as n}from"./Text-BJAzHH1m.js";import{S as i}from"./ScrollPane-OSxHmENg.js";import"./preload-helper-D9Z9MdNV.js";const h={title:"Layout/Scroll Pane",component:i,argTypes:{children:{control:!1}}},t={args:{style:{maxHeight:"300px"},children:e.createElement(e.Fragment,null,e.createElement(l,{width:"full"},e.createElement(a,{textAlign:"center",marginTop:"8",padding:"3",width:"full",backgroundColour:"yellow700",borderRadius:"1",overflow:"hidden"},e.createElement(o,{as:"h2",colour:"white"},"I'm a sticky header"))),e.createElement(a,{padding:"5",width:"full",style:{minHeight:"300vh"}},Array.from({length:100}).map((d,r)=>e.createElement(n,{key:r,as:"p"},"I am page content ",r+1))))}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const u=["Standard"];export{t as Standard,u as __namedExportsOrder,h as default};
