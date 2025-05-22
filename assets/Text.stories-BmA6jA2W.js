import{e as t,v as W,o as H}from"./iframe-C_bA5shj.js";import{T as n}from"./Text-Bu_KMAJq.js";const{expect:p,within:_}=__STORYBOOK_MODULE_TEST__,O=["p","label","span"],B=({children:e})=>t.createElement("div",{style:{maxWidth:"350px",width:"100%"}},e),L={title:"Primatives/Text",tags:["polymorphic"],component:n,decorators:[e=>t.createElement(B,null,e())],args:{as:"p",size:"4",strong:!1,display:"inline",fontWeight:"normal",color:void 0,noWrap:void 0,breakWord:void 0,transform:void 0}},s={args:{children:"Help people better care for their cars",id:"story-text",testId:"test-text"},play:async({args:e,canvasElement:a,step:r})=>{const d=_(a).getAllByRole("paragraph")[0];await r("<Text /> renders content and id attributes",async()=>{await p(d).toHaveTextContent(e.children),await p(d).toHaveAttribute("id",e.id),await p(d).toHaveAttribute("data-test-id",e.testId)})}},m="To avoid you coming to a halt in the middle of the road, because of a banging, crash of pistons and valves fighting with each other, let investigate what the timing belt is, what it does, and why it costs so much to replace or repair.",o={args:{children:m,display:"block"},render:e=>t.createElement(t.Fragment,null,O.map(a=>t.createElement(n,{...e,as:a,key:a})))},i={args:{children:m},render:e=>t.createElement(t.Fragment,null,W.fontSizes.map(a=>t.createElement(n,{key:a,...e,size:a})))},c={args:{children:m},render:({children:e,...a})=>t.createElement(t.Fragment,null,Object.keys(H.typography.colour).map(r=>t.createElement("div",{key:r,style:{marginBottom:8}},t.createElement(n,{as:"p",size:"3",strong:!0},r),t.createElement(n,{...a,as:"p",colour:r},e))))},l={args:{as:"label",breakWord:!0,children:"Toavoidyoucomingtoahaltinthemiddleoftheroad,becauseofabanging,crashofpistonsandvalvesfightingwitheachother,letinvestigatewhatthetiming belt is, what it does, and why it costs so much to replace or repair."}};var g,h,u;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: 'Help people better care for their cars',
    id: 'story-text',
    testId: 'test-text'
  },
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const para = canvas.getAllByRole('paragraph')[0];
    await step('<Text /> renders content and id attributes', async () => {
      await expect(para).toHaveTextContent(args.children as string);
      await expect(para).toHaveAttribute('id', args.id);
      await expect(para).toHaveAttribute('data-test-id', args.testId);
    });
  }
}`,...(u=(h=s.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var v,y,x;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: longText,
    display: 'block'
  },
  render: args => <>
            {elements.map(as => <Text {...args} as={as} key={as} />)}
        </>
}`,...(x=(y=o.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var T,b,w;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: longText
  },
  render: args => <>
            {valueArrays.fontSizes.map(size => <Text key={size} {...args} size={size} />)}
        </>
}`,...(w=(b=i.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var f,k,E;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: longText
  },
  render: ({
    children,
    ...args
  }) => <>
            {Object.keys(overdriveTokens.typography.colour).map(color => <div key={color} style={{
      marginBottom: 8
    }}>
                    <Text as="p" size="3" strong>
                        {color}
                    </Text>
                    {/*@ts-expect-error wrong ref type */}
                    <Text {...args} as="p" colour={color}>
                        {children}
                    </Text>
                </div>)}
        </>
}`,...(E=(k=c.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var A,S,z;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    as: 'label',
    breakWord: true,
    children: 'Toavoidyoucomingtoahaltinthemiddleoftheroad,becauseofabanging,crashofpistonsandvalvesfightingwitheachother,letinvestigatewhatthetiming belt is, what it does, and why it costs so much to replace or repair.'
  }
}`,...(z=(S=l.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};const R=["Standard","AllTypes","AllSizes","AllColours","WithLongUnspacedText"];export{c as AllColours,i as AllSizes,o as AllTypes,s as Standard,l as WithLongUnspacedText,R as __namedExportsOrder,L as default};
