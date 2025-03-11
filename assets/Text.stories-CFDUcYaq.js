import{R as e}from"./index-Cr_cdoBq.js";import{T as a}from"./Text-DPlsuIMt.js";import"./_commonjsHelpers-C932wzq6.js";import"./dataAttrs-C4KudU4k.js";import"./useTextStyles-ekKSp2F9.js";import"./Box-Dd8rtt69.js";const O=["span","p"],L=[!1,!0],C=[!1,!0],R=["uppercase","capitalize",void 0],U=["normal","semiBold","bold"],z=["1","2","3","4","5","6","7","8","9"],_=["left","center","right"],V=["dark","light","neutral","primary","secondary","white","information","link","success","danger","warning","shine"],G={title:"Primatives/Text",decorators:[]},B={noWrap:{options:L,defaultValue:!1,control:{type:"boolean"}},breakWord:{options:C,defaultValue:!1,control:{type:"boolean"}},transform:{options:R,defaultValue:null,control:{type:"select"}},fontWeight:{options:U,defaultValue:null,control:{type:"select"}},size:{options:z,defaultValue:void 0,control:{type:"select"}},align:{options:_,defaultValue:"left",control:{type:"select"}}},H={colour:{options:V,defaultValue:void 0,control:{type:"select"}}},p={...B,...H,is:{options:O,defaultValue:"span",table:{type:{summary:"text"},defaultValue:{summary:"span"}},description:"HTML text tag to be used",control:{type:"select"}}},o=({children:r})=>e.createElement("div",{style:{maxWidth:"350px",width:"100%"}},r),n={args:{is:"span",children:"Help people better care for their cars"},argTypes:p,render:r=>e.createElement(o,null,e.createElement(a,{...r}))},d="To avoid you coming to a halt in the middle of the road, because of a banging, crash of pistons and valves fighting with each other, let investigate what the timing belt is, what it does, and why it costs so much to replace or repair.",s={args:{children:d},argTypes:{...B,...H},render:r=>e.createElement(o,null,O.map(t=>e.createElement(a,{key:t,...r,is:t})))},i={args:{children:d},argTypes:p,render:r=>e.createElement(o,null,z.map(t=>e.createElement(a,{key:t,...r,size:t})))},l={args:{children:d},argTypes:p,render:r=>e.createElement(o,null,V.map((t,m)=>e.createElement("div",{key:m,style:{marginBottom:8}},e.createElement(a,{key:m,...r,colour:t}))))},c={args:{breakWord:!0,children:"Toavoidyoucomingtoahaltinthemiddleoftheroad,becauseofabanging,crashofpistonsandvalvesfightingwitheachother,letinvestigatewhatthetiming belt is, what it does, and why it costs so much to replace or repair."},argTypes:p,render:r=>e.createElement(o,null,e.createElement(a,{...r}))};var g,u,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    is: 'span',
    children: 'Help people better care for their cars'
  },
  argTypes,
  render: args => <Wrapper>
            <Text {...args} />
        </Wrapper>
}`,...(h=(u=n.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var y,f,T;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: longText
  },
  argTypes: {
    ...sharedArgTypes,
    ...colourArgTypes
  },
  render: args => <Wrapper>
            {textTypeOptions.map(is => <Text key={is} {...args} is={is} />)}
        </Wrapper>
}`,...(T=(f=s.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var x,v,W;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: longText
  },
  argTypes,
  render: args => <Wrapper>
            {sizeScale.map(size => <Text key={size} {...args} size={size} />)}
        </Wrapper>
}`,...(W=(v=i.parameters)==null?void 0:v.docs)==null?void 0:W.source}}};var b,w,k;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: longText
  },
  argTypes,
  render: args => <Wrapper>
            {colourOptions.map((colour, index) => <div key={index} style={{
      marginBottom: 8
    }}>
                    <Text key={index} {...args} colour={colour} />
                </div>)}
        </Wrapper>
}`,...(k=(w=l.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var E,S,A;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    breakWord: true,
    children: 'Toavoidyoucomingtoahaltinthemiddleoftheroad,becauseofabanging,crashofpistonsandvalvesfightingwitheachother,letinvestigatewhatthetiming belt is, what it does, and why it costs so much to replace or repair.'
  },
  argTypes,
  render: args => <Wrapper>
            <Text {...args} />
        </Wrapper>
}`,...(A=(S=c.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};const I=["Standard","AllTypes","AllSizes","AllColours","WithLongUnspacedText"];export{l as AllColours,i as AllSizes,s as AllTypes,n as Standard,c as WithLongUnspacedText,I as __namedExportsOrder,G as default};
