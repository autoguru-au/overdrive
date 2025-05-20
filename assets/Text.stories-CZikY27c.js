import{R as e}from"./index-DVCUSwsV.js";import{T as a}from"./Text-CZSIapSJ.js";import{s as S,c as W}from"./useTextStyles-CPzSss8t.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./Box-DIPDnkNs.js";const A=["p","label","span"],O=({children:r})=>e.createElement("div",{style:{maxWidth:"350px",width:"100%"}},r),L={title:"Primatives/Text",component:a,decorators:[r=>e.createElement(O,null,r())],args:{as:"p",size:"4",strong:!1,display:"inline",fontWeight:"normal",color:void 0,noWrap:void 0,breakWord:void 0,transform:void 0}},s={args:{children:"Help people better care for their cars"}},d="To avoid you coming to a halt in the middle of the road, because of a banging, crash of pistons and valves fighting with each other, let investigate what the timing belt is, what it does, and why it costs so much to replace or repair.",n={args:{children:d,display:"block"},render:r=>e.createElement(e.Fragment,null,A.map(t=>e.createElement(a,{...r,as:t,key:t})))},o={args:{children:d},render:r=>e.createElement(e.Fragment,null,Object.keys(S).map(t=>e.createElement(a,{key:t,...r,size:t})))},i={args:{children:d},render:({children:r,...t})=>e.createElement(e.Fragment,null,Object.keys(W).map(l=>e.createElement("div",{key:l,style:{marginBottom:8}},e.createElement(a,{as:"p",size:"3",strong:!0},l),e.createElement(a,{...t,as:"p",colour:l},r))))},c={args:{breakWord:!0,children:"Toavoidyoucomingtoahaltinthemiddleoftheroad,becauseofabanging,crashofpistonsandvalvesfightingwitheachother,letinvestigatewhatthetiming belt is, what it does, and why it costs so much to replace or repair."},render:r=>e.createElement(e.Fragment,null,e.createElement(a,{...r}))};var m,p,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'Help people better care for their cars'
  }
}`,...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var h,u,y;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: longText,
    display: 'block'
  },
  render: args => <>
            {elements.map(as => <Text {...args} as={as} key={as} />)}
        </>
}`,...(y=(u=n.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var f,T,b;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: longText
  },
  render: args => <>
            {Object.keys(styles.sizes).map(size => <Text key={size} {...args} size={size as TextSize} />)}
        </>
}`,...(b=(T=o.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var v,x,k;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: longText
  },
  render: ({
    children,
    ...args
  }) => <>
            {Object.keys(styles.colours).map(color => <div key={color} style={{
      marginBottom: 8
    }}>
                    <Text as="p" size="3" strong>
                        {color}
                    </Text>
                    <Text {...args} as="p" colour={color as keyof typeof styles.colours}>
                        {children}
                    </Text>
                </div>)}
        </>
}`,...(k=(x=i.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var w,E,z;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    breakWord: true,
    children: 'Toavoidyoucomingtoahaltinthemiddleoftheroad,becauseofabanging,crashofpistonsandvalvesfightingwitheachother,letinvestigatewhatthetiming belt is, what it does, and why it costs so much to replace or repair.'
  },
  render: args => <>
            <Text {...args} />
        </>
}`,...(z=(E=c.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};const R=["Standard","AllTypes","AllSizes","AllColours","WithLongUnspacedText"];export{i as AllColours,o as AllSizes,n as AllTypes,s as Standard,c as WithLongUnspacedText,R as __namedExportsOrder,L as default};
