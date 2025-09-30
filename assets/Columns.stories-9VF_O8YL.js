import{e as r,B as o}from"./iframe-C9jllvPJ.js";import{C as i,c as n,a as e}from"./Column-Br-OF2ub.js";import"./preload-helper-PPVm8Dsz.js";/* empty css                              */import"./resolveResponsiveProps-DGBAxJXa.js";const C={title:"Layout/Columns",tags:[],component:i,args:{align:"bottom",noWrap:!1,space:void 0,spaceX:["1","3","8"],spaceY:["1","5"],wrappingDirection:void 0},argTypes:{align:{options:Object.keys(n.classNames.variants.align)},noWrap:{options:Object.keys(n.classNames.variants.noWrap)},wrappingDirection:{options:Object.keys(n.classNames.variants.wrappingDirection)}}},t={render:l=>r.createElement(i,{...l},r.createElement(e,{width:["full","1/3","1/5"],order:["0","2"],as:"section"},r.createElement(o,{borderColour:"gray",borderWidth:"1",padding:"4",borderRadius:"1",backgroundColour:"green100",style:{width:"100%",height:"100%"}},"Col 1")),r.createElement(e,{width:["1/2","1/3","1/5"],alignSelf:"stretch",as:"section"},r.createElement(o,{borderColour:"gray",borderWidth:"1",padding:"4",borderRadius:"1",backgroundColour:"red100",style:{width:"100%",height:"100%"}},"Col 2")),r.createElement(e,{width:["1/2","1/3","1/5"],as:"section"},r.createElement(o,{borderColour:"gray",borderWidth:"1",padding:"4",borderRadius:"1",backgroundColour:"blue100",style:{width:"100%",height:"100%"}},"Col 3")),r.createElement(e,{width:["full","full","2/5"],as:"section"},r.createElement(o,{borderColour:"gray",borderWidth:"1",padding:"4",borderRadius:"1",backgroundColour:"yellow100",style:{width:"100%",height:"500px"}},"Col 4")))},d={as:"section",width:["full","1/3","1/5"]},a={args:{},render:l=>r.createElement(i,{...l},r.createElement(e,{...d},r.createElement(o,{borderColour:"gray",borderWidth:"1",padding:"4",borderRadius:"1",backgroundColour:"green100",style:{width:"100%",height:"100%"}},"Col 1")),r.createElement(e,{...d},r.createElement(o,{borderColour:"gray",borderWidth:"1",padding:"4",borderRadius:"1",backgroundColour:"red100",style:{width:"100%",height:"100%"}},"Col 2")),r.createElement(e,{...d},r.createElement(o,{borderColour:"gray",borderWidth:"1",padding:"4",borderRadius:"1",backgroundColour:"blue100",style:{width:"100%",height:"100%"}},"Col 3")),r.createElement(e,{...d},r.createElement(o,{borderColour:"gray",borderWidth:"1",padding:"4",borderRadius:"1",backgroundColour:"yellow100",style:{width:"100%",height:"500px"}},"Col 4")),r.createElement(e,{...d},r.createElement(o,{borderColour:"gray",borderWidth:"1",padding:"4",borderRadius:"1",backgroundColour:"green100",style:{width:"100%",height:"100%",minHeight:"200px"}},"Col 5")))};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <Columns {...args}>
            <Column width={['full', '1/3', '1/5']} order={['0', '2']} as="section">
                <Box borderColour="gray" borderWidth="1" padding="4" borderRadius="1" backgroundColour="green100" style={{
        width: '100%',
        height: '100%'
      }}>
                    Col 1
                </Box>
            </Column>
            <Column width={['1/2', '1/3', '1/5']} alignSelf="stretch" as="section">
                <Box borderColour="gray" borderWidth="1" padding="4" borderRadius="1" backgroundColour="red100" style={{
        width: '100%',
        height: '100%'
      }}>
                    Col 2
                </Box>
            </Column>
            <Column width={['1/2', '1/3', '1/5']} as="section">
                <Box borderColour="gray" borderWidth="1" padding="4" borderRadius="1" backgroundColour="blue100" style={{
        width: '100%',
        height: '100%'
      }}>
                    Col 3
                </Box>
            </Column>
            <Column width={['full', 'full', '2/5']} as="section">
                <Box borderColour="gray" borderWidth="1" padding="4" borderRadius="1" backgroundColour="yellow100" style={{
        width: '100%',
        height: '500px'
      }}>
                    Col 4
                </Box>
            </Column>
        </Columns>
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => <Columns {...args}>
            <Column {...columnProps}>
                <Box borderColour="gray" borderWidth="1" padding="4" borderRadius="1" backgroundColour="green100" style={{
        width: '100%',
        height: '100%'
      }}>
                    Col 1
                </Box>
            </Column>
            <Column {...columnProps}>
                <Box borderColour="gray" borderWidth="1" padding="4" borderRadius="1" backgroundColour="red100" style={{
        width: '100%',
        height: '100%'
      }}>
                    Col 2
                </Box>
            </Column>
            <Column {...columnProps}>
                <Box borderColour="gray" borderWidth="1" padding="4" borderRadius="1" backgroundColour="blue100" style={{
        width: '100%',
        height: '100%'
      }}>
                    Col 3
                </Box>
            </Column>
            <Column {...columnProps}>
                <Box borderColour="gray" borderWidth="1" padding="4" borderRadius="1" backgroundColour="yellow100" style={{
        width: '100%',
        height: '500px'
      }}>
                    Col 4
                </Box>
            </Column>
            <Column {...columnProps}>
                <Box borderColour="gray" borderWidth="1" padding="4" borderRadius="1" backgroundColour="green100" style={{
        width: '100%',
        height: '100%',
        minHeight: '200px'
      }}>
                    Col 5
                </Box>
            </Column>
        </Columns>
}`,...a.parameters?.docs?.source}}};const b=["Standard","StandardColumn"];export{t as Standard,a as StandardColumn,b as __namedExportsOrder,C as default};
