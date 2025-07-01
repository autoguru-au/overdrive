import{r as l,e,B as d,l as R}from"./iframe-BCt8Udfy.js";import{B as m}from"./Button-BvFIh2Kc.js";import{T as g}from"./Text-jNEoN6Nm.js";import{E as o,P as n}from"./Positioner-OQto3sTN.js";import"./Icon-DQv8cRXC.js";import"./resolveResponsiveProps-OZ0auyPc.js";import"./ProgressSpinner-bQpPwE0w.js";import"./Portal-CaDP47qE.js";import"./index-2gw1hHn7.js";import"./index-DV5X3zHe.js";const _={title:"Layout/Positioner",component:n,parameters:{chromatic:{}},argTypes:{alignment:{options:Object.values(o),defaultValue:o.BOTTOM_LEFT,control:{type:"select"}},triggerOffset:{control:{type:"range",min:0,max:400}}}},a={args:{alignment:o.BOTTOM_LEFT,isOpen:!1,triggerOffset:12},render:t=>{const r=l.useRef(null);return e.createElement("div",null,e.createElement(m,{ref:r,size:"small"},"Open me"),e.createElement(n,{...t,triggerRef:r},e.createElement(d,{boxShadow:"1",backgroundColour:"white",borderRadius:"1",borderWidth:"1",borderColour:"gray",padding:"2"},e.createElement(g,{as:"p"},"Hello im from the consumer:"," ",R()?"999":Math.ceil(Math.random()*100)))))}},i={args:{alignment:o.BOTTOM_LEFT,isOpen:!0,triggerOffset:12},render:t=>{const r=l.useRef(null);return e.createElement("div",null,e.createElement(m,{ref:r,size:"small"},"Open me"),e.createElement(n,{...t,triggerRef:r},e.createElement(d,{boxShadow:"1",backgroundColour:"white",borderRadius:"1",borderWidth:"1",borderColour:"gray",padding:"2"},e.createElement(g,{as:"p"},"Hello im from the consumer:"," ",R()?"999":Math.ceil(Math.random()*100)))))}},s={args:{alignment:o.BOTTOM_LEFT,isOpen:!0,triggerOffset:12},render:t=>{const r=l.useRef(null);return e.createElement("div",{style:{height:"100%",width:"100%"}},e.createElement("div",{style:{height:"calc(100vh*5)",width:"calc(100vw*5)"}},e.createElement("div",{style:{paddingTop:"calc((100vh*5) / 2)",paddingLeft:"calc((100vw*5) / 2)"}},e.createElement(m,{ref:r,size:"small"},"I'm the trigger")),e.createElement(n,{...t,triggerRef:r},e.createElement(d,{boxShadow:"1",backgroundColour:"white",borderRadius:"1",borderWidth:"1",borderColour:"gray",padding:"2"},e.createElement(g,{as:"p"},"Hello im from the consumer:"," ",Math.ceil(Math.random()*100))))))},parameters:{chromatic:{disableSnapshot:!0}}};var c,u,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var h,f,O;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(O=(f=i.parameters)==null?void 0:f.docs)==null?void 0:O.source}}};var b,T,E;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(E=(T=s.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};const F=["Closed","Open","IllustrateAScroll"];export{a as Closed,s as IllustrateAScroll,i as Open,F as __namedExportsOrder,_ as default};
