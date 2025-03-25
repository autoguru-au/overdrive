import{R as o}from"./index-CIentmI6.js";import{S as p}from"./StickyBox-DM0rqHfa.js";import{F as u}from"./FillHeightBox-Dqvnq5ka.js";import{B as a}from"./Box-CSmK6Tsy.js";import{H as h}from"./Heading-B-O_2Y2f.js";import{T as g}from"./Text-CNba1erP.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./theme.css-CLh832fT.js";import"./useResponsiveValue-dT0O8lvQ.js";import"./index--QB1QYf1.js";import"./useMedia-Cuf9YVnT.js";import"./ThemeProvider-DCihBTvv.js";import"./index-D_iG_Vvt.js";import"./makeTheme-BvwTE3C0.js";import"./ScrollPane-B0U2DzYX.js";import"./dataAttrs-C4KudU4k.js";import"./useTextStyles-Bmw3-gkn.js";const _={title:"Layout/StickyBox",component:p},r={args:{top:"none",width:"full"},render:c=>o.createElement(u,{rounded:!0,includeMobile:!0,bottomGap:"5",width:"full",backgroundColour:"white",borderColour:"gray",borderWidth:"1",boxShadow:"1",height:"full",borderRadius:"1"},o.createElement(p,{...c},o.createElement(a,{marginTop:"8",padding:"3",width:"full",backgroundColour:"yellow700",borderRadius:"1",overflow:"hidden"},o.createElement(h,{is:"h2",align:"center",colour:"white"},"I'm a sticky header"))),o.createElement(a,{padding:"5",width:"full",style:{minHeight:"300vh"}},Array.from({length:100}).map((w,t)=>o.createElement(g,{key:t,is:"p"},"I am page content ",t+1))))},e={...r,args:{...r.args,noPopShadow:!0}};var i,d,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    top: 'none',
    width: 'full'
  },
  render: args => <FillHeightBox rounded includeMobile bottomGap="5" width="full" backgroundColour="white" borderColour="gray" borderWidth="1" boxShadow="1" height="full" borderRadius="1">
            <StickyBox {...args}>
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
        </FillHeightBox>
}`,...(n=(d=r.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};var l,m,s;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...Standard,
  args: {
    ...Standard.args,
    noPopShadow: true
  }
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const A=["Standard","WithNoPopShadow"];export{r as Standard,e as WithNoPopShadow,A as __namedExportsOrder,_ as default};
