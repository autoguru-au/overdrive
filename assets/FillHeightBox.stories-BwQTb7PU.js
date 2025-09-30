import{e as r,B as i}from"./iframe-C9jllvPJ.js";import{T as d}from"./Text-DggnGx7l.js";import{F as a}from"./FillHeightBox-DBS_kmRm.js";import"./preload-helper-PPVm8Dsz.js";import"./useResponsiveValue-Cm55mfwu.js";import"./useMedia-ChPJLaTC.js";import"./resolveResponsiveProps-DGBAxJXa.js";import"./ScrollPane-BbUuwBdn.js";const c={title:"Layout/Fill Height Box",component:a,argTypes:{children:{control:!1}}},e={args:{rounded:!0,includeMobile:!0,bottomGap:"5",width:"full",backgroundColour:"white",borderColour:"gray",borderWidth:"1",boxShadow:"1",height:"full",borderRadius:"1",children:r.createElement(i,{padding:"5",width:"full",style:{minHeight:"300vh"}},Array.from({length:100}).map((o,t)=>r.createElement(d,{key:t,as:"p"},"I am page content ",t+1)))},render:o=>r.createElement(a,{...o})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    rounded: true,
    includeMobile: true,
    bottomGap: '5',
    width: 'full',
    backgroundColour: 'white',
    borderColour: 'gray',
    borderWidth: '1',
    boxShadow: '1',
    height: 'full',
    borderRadius: '1',
    children: <Box padding="5" width="full" style={{
      minHeight: '300vh'
    }}>
                {Array.from({
        length: 100
      }).map((_, i) => <Text key={i} as="p">
                        I am page content {i + 1}
                    </Text>)}
            </Box>
  },
  render: args => <FillHeightBox {...args} />
}`,...e.parameters?.docs?.source}}};const b=["Standard"];export{e as Standard,b as __namedExportsOrder,c as default};
