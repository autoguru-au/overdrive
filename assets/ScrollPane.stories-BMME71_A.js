import{R as e}from"./index-Cr_cdoBq.js";import{S as n}from"./ScrollPane-DAekkJKK.js";import{S as m}from"./StickyBox-ClszOs6m.js";import{B as o}from"./Box-ByZNOjEZ.js";import{H as d}from"./Heading-DlTFW9hB.js";import{T as s}from"./Text-Bw6Amj0y.js";import"./_commonjsHelpers-C932wzq6.js";import"./dataAttrs-BPvLuXwN.js";import"./useTextStyles-c8XbNcHW.js";const k={title:"Layout/Scroll Pane",component:n},r={args:{style:{maxHeight:"300px"},children:e.createElement(e.Fragment,null,e.createElement(m,{width:"full"},e.createElement(o,{marginTop:"8",padding:"3",width:"full",backgroundColour:"yellow700",borderRadius:"1",overflow:"hidden"},e.createElement(d,{is:"h2",align:"center",colour:"white"},"I'm a sticky header"))),e.createElement(o,{padding:"5",width:"full",style:{minHeight:"300vh"}},Array.from({length:100}).map((c,t)=>e.createElement(s,{key:t,is:"p"},"I am page content ",t+1))))}};var a,i,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    style: {
      maxHeight: '300px'
    },
    children: <>
                <StickyBox width="full">
                    <Box marginTop="8" padding="3" width="full" backgroundColour="yellow700" borderRadius="1" overflow="hidden">
                        <Heading is="h2" align="center" colour="white">
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
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const B=["Standard"];export{r as Standard,B as __namedExportsOrder,k as default};
