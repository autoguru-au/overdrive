import{e as r,B as i}from"./iframe-knNj_dc4.js";import{T as l}from"./Text-DYxReNNp.js";import{F as a}from"./FillHeightBox-BOfx4WC4.js";import"./preload-helper-PPVm8Dsz.js";import"./useResponsiveValue-CTARabh_.js";import"./useMedia-BsVGI817.js";import"./resolveResponsiveProps-B51dRZJs.js";import"./ScrollPane-BtWDF7Uu.js";const u={title:"Layout/Fill Height Box",component:a,argTypes:{children:{control:!1}}},e={args:{includeMobile:!0,bottomGap:"5",width:"full",backgroundColour:"white",borderColour:"gray",borderWidth:"1",boxShadow:"1",height:"full",borderRadius:"1",children:r.createElement(i,{padding:"5",width:"full",style:{minHeight:"300vh"}},Array.from({length:100}).map((o,t)=>r.createElement(l,{key:t,as:"p"},"I am page content ",t+1)))},render:o=>r.createElement(a,{...o})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
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
}`,...e.parameters?.docs?.source}}};const b=["Standard"];export{e as Standard,b as __namedExportsOrder,u as default};
