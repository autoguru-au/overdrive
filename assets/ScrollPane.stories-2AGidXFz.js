import{e,B as r,H as o}from"./iframe-COJ7wZQX.js";import{S as l}from"./StickyBox-CG39_RY7.js";import{T as n}from"./Text-C4nXpCEU.js";import{S as i}from"./ScrollPane-qpTR8BA5.js";const g={title:"Layout/Scroll Pane",component:i},t={args:{style:{maxHeight:"300px"},children:e.createElement(e.Fragment,null,e.createElement(l,{width:"full"},e.createElement(r,{textAlign:"center",marginTop:"8",padding:"3",width:"full",backgroundColour:"yellow700",borderRadius:"1",overflow:"hidden"},e.createElement(o,{as:"h2",colour:"white"},"I'm a sticky header"))),e.createElement(r,{padding:"5",width:"full",style:{minHeight:"300vh"}},Array.from({length:100}).map((d,a)=>e.createElement(n,{key:a,as:"p"},"I am page content ",a+1))))}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const h=["Standard"];export{t as Standard,h as __namedExportsOrder,g as default};
