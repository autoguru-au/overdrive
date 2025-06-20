import{e as t,o as O}from"./iframe-CFwUcJnX.js";import{T as n}from"./Text-Bekh4-oh.js";const{expect:p,within:H}=__STORYBOOK_MODULE_TEST__,W=["p","label","span"],_=({children:e})=>t.createElement("div",{style:{maxWidth:"350px",width:"100%"}},e),I={title:"Primatives/Text",tags:["polymorphic"],component:n,decorators:[e=>t.createElement(_,null,e())],args:{as:"p",size:"4",strong:!1,display:"inline",weight:"normal",color:void 0,noWrap:void 0,breakWord:void 0,transform:void 0}},s={args:{children:"Help people better care for their cars",id:"story-text",testId:"test-text"},play:async({args:e,canvasElement:a,step:r})=>{const d=H(a).getAllByRole("paragraph")[0];await r("<Text /> renders content and id attributes",async()=>{await p(d).toHaveTextContent(e.children),await p(d).toHaveAttribute("id",e.id),await p(d).toHaveAttribute("data-testid",e.testId)})}},g="To avoid you coming to a halt in the middle of the road, because of a banging, crash of pistons and valves fighting with each other, let investigate what the timing belt is, what it does, and why it costs so much to replace or repair.",o={args:{children:g,display:"block",size:void 0,weight:void 0,my:"2"},render:e=>t.createElement(t.Fragment,null,W.map(a=>t.createElement(n,{...e,as:a,key:a})))},i={args:{children:g},render:e=>t.createElement(t.Fragment,null,Object.keys(O.typography.size).map(a=>t.createElement(n,{key:a,...e,size:a})))},c={args:{children:g},render:({children:e,...a})=>t.createElement(t.Fragment,null,Object.keys(O.typography.colour).map(r=>t.createElement("div",{key:r,style:{marginBottom:8}},t.createElement(n,{as:"p",size:"3",strong:!0},r),t.createElement(n,{...a,as:"p",colour:r},e))))},l={args:{as:"label",breakWord:!0,children:"Toavoidyoucomingtoahaltinthemiddleoftheroad,becauseofabanging,crashofpistonsandvalvesfightingwitheachother,letinvestigatewhatthetiming belt is, what it does, and why it costs so much to replace or repair."}};var m,h,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
      await expect(para).toHaveAttribute('data-testid', args.testId);
    });
  }
}`,...(u=(h=s.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var y,v,x;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: longText,
    display: 'block',
    size: undefined,
    weight: undefined,
    my: '2'
  },
  render: args => <>
            {elements.map(as => <Text {...args} as={as} key={as} />)}
        </>
}`,...(x=(v=o.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var T,b,w;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: longText
  },
  render: args => <>
            {Object.keys(overdriveTokens.typography.size).map(size => <Text key={size} {...args} size={size as TextProps['size']} />)}
        </>
}`,...(w=(b=i.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var f,k,E;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: longText
  },
  render: ({
    children,
    ...args
  }) => <>
            {Object.keys(overdriveTokens.typography.colour).map(colour => <div key={colour} style={{
      marginBottom: 8
    }}>
                    <Text as="p" size="3" strong>
                        {colour}
                    </Text>
                    {/*@ts-expect-error wrong ref type */}
                    <Text {...args} as="p" colour={colour}>
                        {children}
                    </Text>
                </div>)}
        </>
}`,...(E=(k=c.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var z,A,S;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    as: 'label',
    breakWord: true,
    children: 'Toavoidyoucomingtoahaltinthemiddleoftheroad,becauseofabanging,crashofpistonsandvalvesfightingwitheachother,letinvestigatewhatthetiming belt is, what it does, and why it costs so much to replace or repair.'
  }
}`,...(S=(A=l.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};const F=["Standard","AllTypes","AllSizes","AllColours","WithLongUnspacedText"];export{c as AllColours,i as AllSizes,o as AllTypes,s as Standard,l as WithLongUnspacedText,F as __namedExportsOrder,I as default};
