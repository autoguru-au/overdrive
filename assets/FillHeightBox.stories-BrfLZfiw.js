import{e as r,B as i}from"./iframe-BNimcw7I.js";import{T as l}from"./Text-Bm6LeYFJ.js";import{F as a}from"./FillHeightBox-GWXylheC.js";import"./preload-helper-PPVm8Dsz.js";import"./useResponsiveValue-Db4Sb5Ex.js";import"./useMedia-BA14ydzV.js";import"./resolveResponsiveProps-CokS9ksv.js";import"./ScrollPane-DzQ1i2BR.js";const u={title:"Layout/Fill Height Box",component:a,argTypes:{children:{control:!1}}},e={args:{includeMobile:!0,bottomGap:"5",width:"full",backgroundColour:"white",borderColour:"gray",borderWidth:"1",boxShadow:"1",height:"full",borderRadius:"1",children:r.createElement(i,{padding:"5",width:"full",style:{minHeight:"300vh"}},Array.from({length:100}).map((o,t)=>r.createElement(l,{key:t,as:"p"},"I am page content ",t+1)))},render:o=>r.createElement(a,{...o})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
