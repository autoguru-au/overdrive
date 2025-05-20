import{R as e}from"./index-DVCUSwsV.js";import{B as a}from"./Box-DIPDnkNs.js";import{H as n}from"./Heading-sl8mRLG7.js";import{S as d}from"./StickyBox-Bx_GWlK5.js";import{T as m}from"./Text-CZSIapSJ.js";import{S as s}from"./ScrollPane-R5_cvJRM.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./useTextStyles-CPzSss8t.js";const S={title:"Layout/Scroll Pane",component:s},t={args:{style:{maxHeight:"300px"},children:e.createElement(e.Fragment,null,e.createElement(d,{width:"full"},e.createElement(a,{textAlign:"center",marginTop:"8",padding:"3",width:"full",backgroundColour:"yellow700",borderRadius:"1",overflow:"hidden"},e.createElement(n,{as:"h2",colour:"white"},"I'm a sticky header"))),e.createElement(a,{padding:"5",width:"full",style:{minHeight:"300vh"}},Array.from({length:100}).map((c,r)=>e.createElement(m,{key:r,is:"p"},"I am page content ",r+1))))}};var o,i,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
        }).map((_, i) => <Text key={i} is="p">
                            I am page content {i + 1}
                        </Text>)}
                </Box>
            </>
  }
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const k=["Standard"];export{t as Standard,k as __namedExportsOrder,S as default};
