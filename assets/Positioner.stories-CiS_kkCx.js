import{r as l,e,B as d,i as c}from"./iframe-DrpTQ52u.js";import{B as m}from"./Button-C6MvA4KB.js";import{T as g}from"./Text-DPZ6oucp.js";import{E as o,P as n}from"./Positioner-Xa-0diky.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-W9klhI_r.js";import"./resolveResponsiveProps-DghjqN5W.js";import"./ProgressSpinner-Bl530ASo.js";import"./Portal-CKTxQqXV.js";import"./index-B6bI3RZS.js";import"./index-BeJSyWLT.js";const B={title:"Layout/Positioner",component:n,parameters:{chromatic:{}},argTypes:{alignment:{options:Object.values(o),defaultValue:o.BOTTOM_LEFT,control:{type:"select"}},triggerOffset:{control:{type:"range",min:0,max:400}}}},a={args:{alignment:o.BOTTOM_LEFT,isOpen:!1,triggerOffset:12},render:t=>{const r=l.useRef(null);return e.createElement("div",null,e.createElement(m,{ref:r,size:"small"},"Open me"),e.createElement(n,{...t,triggerRef:r},e.createElement(d,{boxShadow:"1",backgroundColour:"white",borderRadius:"1",borderWidth:"1",borderColour:"gray",padding:"2"},e.createElement(g,{as:"p"},"Hello im from the consumer:"," ",c()?"999":Math.ceil(Math.random()*100)))))}},i={args:{alignment:o.BOTTOM_LEFT,isOpen:!0,triggerOffset:12},render:t=>{const r=l.useRef(null);return e.createElement("div",null,e.createElement(m,{ref:r,size:"small"},"Open me"),e.createElement(n,{...t,triggerRef:r},e.createElement(d,{boxShadow:"1",backgroundColour:"white",borderRadius:"1",borderWidth:"1",borderColour:"gray",padding:"2"},e.createElement(g,{as:"p"},"Hello im from the consumer:"," ",c()?"999":Math.ceil(Math.random()*100)))))}},s={args:{alignment:o.BOTTOM_LEFT,isOpen:!0,triggerOffset:12},render:t=>{const r=l.useRef(null);return e.createElement("div",{style:{height:"100%",width:"100%"}},e.createElement("div",{style:{height:"calc(100vh*5)",width:"calc(100vw*5)"}},e.createElement("div",{style:{paddingTop:"calc((100vh*5) / 2)",paddingLeft:"calc((100vw*5) / 2)"}},e.createElement(m,{ref:r,size:"small"},"I'm the trigger")),e.createElement(n,{...t,triggerRef:r},e.createElement(d,{boxShadow:"1",backgroundColour:"white",borderRadius:"1",borderWidth:"1",borderColour:"gray",padding:"2"},e.createElement(g,{as:"p"},"Hello im from the consumer:"," ",Math.ceil(Math.random()*100))))))},parameters:{chromatic:{disableSnapshot:!0}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    alignment: EAlignment.BOTTOM_LEFT,
    isOpen: false,
    triggerOffset: 12
  },
  render: args => {
    const triggerRef = useRef(null);
    return <div>
                <Button ref={triggerRef} size="small">
                    Open me
                </Button>
                <Positioner {...args} triggerRef={triggerRef}>
                    <Box boxShadow="1" backgroundColour="white" borderRadius="1" borderWidth="1" borderColour="gray" padding="2">
                        <Text as="p">
                            Hello im from the consumer:{' '}
                            {isChromatic() ? '999' : Math.ceil(Math.random() * 100)}
                        </Text>
                    </Box>
                </Positioner>
            </div>;
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    alignment: EAlignment.BOTTOM_LEFT,
    isOpen: true,
    triggerOffset: 12
  },
  render: args => {
    const triggerRef = useRef(null);
    return <div>
                <Button ref={triggerRef} size="small">
                    Open me
                </Button>
                <Positioner {...args} triggerRef={triggerRef}>
                    <Box boxShadow="1" backgroundColour="white" borderRadius="1" borderWidth="1" borderColour="gray" padding="2">
                        <Text as="p">
                            Hello im from the consumer:{' '}
                            {isChromatic() ? '999' : Math.ceil(Math.random() * 100)}
                        </Text>
                    </Box>
                </Positioner>
            </div>;
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    alignment: EAlignment.BOTTOM_LEFT,
    isOpen: true,
    triggerOffset: 12
  },
  render: args => {
    const triggerRef = useRef(null);
    return <div style={{
      height: '100%',
      width: '100%'
    }}>
                <div style={{
        height: 'calc(100vh*5)',
        width: 'calc(100vw*5)'
      }}>
                    <div style={{
          paddingTop: 'calc((100vh*5) / 2)',
          paddingLeft: 'calc((100vw*5) / 2)'
        }}>
                        <Button ref={triggerRef} size="small">
                            I&apos;m the trigger
                        </Button>
                    </div>
                    <Positioner {...args} triggerRef={triggerRef}>
                        <Box boxShadow="1" backgroundColour="white" borderRadius="1" borderWidth="1" borderColour="gray" padding="2">
                            <Text as="p">
                                Hello im from the consumer:{' '}
                                {Math.ceil(Math.random() * 100)}
                            </Text>
                        </Box>
                    </Positioner>
                </div>
            </div>;
  },
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...s.parameters?.docs?.source}}};const w=["Closed","Open","IllustrateAScroll"];export{a as Closed,s as IllustrateAScroll,i as Open,w as __namedExportsOrder,B as default};
