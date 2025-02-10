import{i as R}from"./isChromatic-AKtkhq4f.js";import{r as l,R as e}from"./index-Cr_cdoBq.js";import{P as n,E as o}from"./Positioner-CyaEUi3t.js";import{B as m}from"./Button-DD4eqKRl.js";import{B as d}from"./Box-riOnoi3Y.js";import{T as g}from"./Text-B-fLVrc5.js";import"./_commonjsHelpers-C932wzq6.js";import"./index-R9txMNUR.js";import"./Portal-BgVXMDzT.js";import"./index-DmBm8MVW.js";import"./index-CAtvbLPT.js";import"./ThemeProvider-DaUrEAYU.js";import"./index-CYx1ALmS.js";import"./makeTheme-BvwTE3C0.js";import"./dataAttrs-BPvLuXwN.js";import"./Icon-u2F7oOeh.js";import"./useTextStyles-DNm53NZA.js";import"./ProgressSpinner-DIWgntFa.js";const V={title:"Layout/Positioner",component:n,parameters:{chromatic:{}},argTypes:{alignment:{options:o,defaultValue:o.BOTTOM_LEFT,control:{type:"select"}},triggerOffset:{control:{type:"range",min:0,max:400}}}},i={args:{alignment:o.BOTTOM_LEFT,isOpen:!1,triggerOffset:12},render:t=>{const r=l.useRef(null);return e.createElement("div",null,e.createElement(m,{ref:r,size:"small"},"Open me"),e.createElement(n,{...t,triggerRef:r},e.createElement(d,{boxShadow:1,backgroundColour:"white",borderRadius:"1",borderWidth:"1",borderColour:"gray",padding:"2"},e.createElement(g,{is:"p"},"Hello im from the consumer:"," ",R()?"999":Math.ceil(Math.random()*100)))))}},a={args:{alignment:o.BOTTOM_LEFT,isOpen:!0,triggerOffset:12},render:t=>{const r=l.useRef(null);return e.createElement("div",null,e.createElement(m,{ref:r,size:"small"},"Open me"),e.createElement(n,{...t,triggerRef:r},e.createElement(d,{boxShadow:1,backgroundColour:"white",borderRadius:"1",borderWidth:"1",borderColour:"gray",padding:"2"},e.createElement(g,{is:"p"},"Hello im from the consumer:"," ",R()?"999":Math.ceil(Math.random()*100)))))}},s={args:{alignment:o.BOTTOM_LEFT,isOpen:!0,triggerOffset:12},render:t=>{const r=l.useRef(null);return e.createElement("div",{style:{height:"100%",width:"100%"}},e.createElement("div",{style:{height:"calc(100vh*5)",width:"calc(100vw*5)"}},e.createElement("div",{style:{paddingTop:"calc((100vh*5) / 2)",paddingLeft:"calc((100vw*5) / 2)"}},e.createElement(m,{ref:r,size:"small"},"I'm the trigger")),e.createElement(n,{...t,triggerRef:r},e.createElement(d,{boxShadow:1,backgroundColour:"white",borderRadius:"1",borderWidth:"1",borderColour:"gray",padding:"2"},e.createElement(g,{is:"p"},"Hello im from the consumer:"," ",Math.ceil(Math.random()*100))))))},parameters:{chromatic:{disableSnapshot:!0}}};var c,u,p;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
                    <Box boxShadow={1} backgroundColour="white" borderRadius="1" borderWidth="1" borderColour="gray" padding="2">
                        <Text is="p">
                            Hello im from the consumer:{' '}
                            {isChromatic() ? '999' : Math.ceil(Math.random() * 100)}
                        </Text>
                    </Box>
                </Positioner>
            </div>;
  }
}`,...(p=(u=i.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var h,f,O;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
                    <Box boxShadow={1} backgroundColour="white" borderRadius="1" borderWidth="1" borderColour="gray" padding="2">
                        <Text is="p">
                            Hello im from the consumer:{' '}
                            {isChromatic() ? '999' : Math.ceil(Math.random() * 100)}
                        </Text>
                    </Box>
                </Positioner>
            </div>;
  }
}`,...(O=(f=a.parameters)==null?void 0:f.docs)==null?void 0:O.source}}};var b,T,E;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
                            I'm the trigger
                        </Button>
                    </div>
                    <Positioner {...args} triggerRef={triggerRef}>
                        <Box boxShadow={1} backgroundColour="white" borderRadius="1" borderWidth="1" borderColour="gray" padding="2">
                            <Text is="p">
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
}`,...(E=(T=s.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};const j=["Closed","Open","IllustrateAScroll"];export{i as Closed,s as IllustrateAScroll,a as Open,j as __namedExportsOrder,V as default};
