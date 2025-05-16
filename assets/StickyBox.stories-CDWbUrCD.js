import{R as o}from"./index-DVCUSwsV.js";import{B as a}from"./Box-ClEqokAe.js";import{F as u}from"./FillHeightBox-BYq5VUrW.js";import{H as h}from"./Heading-eJ5ITvpa.js";import{T as g}from"./Text-D09diHf7.js";import{S as p}from"./StickyBox-ofNt5YF8.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./theme.css-5ro_PoLN.js";import"./useResponsiveValue-CrX6PM3Q.js";import"./useMedia-BnZrLTE2.js";import"./index-qJC9azT-.js";import"./OverdriveProvider-CtPDXQUc.js";import"./index-D_iG_Vvt.js";/* empty css                             */import"./tokens-DUw5KlBA.js";import"./resolveResponsiveProps-CKCgD9S0.js";import"./ScrollPane-g-Kf9QTs.js";import"./useTextStyles-DsccIS_S.js";const A={title:"Layout/StickyBox",component:p},r={args:{top:"none",width:"full"},render:c=>o.createElement(u,{rounded:!0,includeMobile:!0,bottomGap:"5",width:"full",backgroundColour:"white",borderColour:"gray",borderWidth:"1",boxShadow:"1",height:"full",borderRadius:"1"},o.createElement(p,{...c},o.createElement(a,{marginTop:"8",padding:"3",width:"full",backgroundColour:"yellow700",borderRadius:"1",overflow:"hidden"},o.createElement(h,{as:"h2",align:"center",colour:"white"},"I'm a sticky header"))),o.createElement(a,{padding:"5",width:"full",style:{minHeight:"300vh"}},Array.from({length:100}).map((w,t)=>o.createElement(g,{key:t,is:"p"},"I am page content ",t+1))))},e={...r,args:{...r.args,noPopShadow:!0}};var i,d,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    top: 'none',
    width: 'full'
  },
  render: args => <FillHeightBox rounded includeMobile bottomGap="5" width="full" backgroundColour="white" borderColour="gray" borderWidth="1" boxShadow="1" height="full" borderRadius="1">
            <StickyBox {...args}>
                <Box marginTop="8" padding="3" width="full" backgroundColour="yellow700" borderRadius="1" overflow="hidden">
                    <Heading as="h2" align="center" colour="white">
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
        </FillHeightBox>
}`,...(n=(d=r.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};var l,m,s;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...Standard,
  args: {
    ...Standard.args,
    noPopShadow: true
  }
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const G=["Standard","WithNoPopShadow"];export{r as Standard,e as WithNoPopShadow,G as __namedExportsOrder,A as default};
