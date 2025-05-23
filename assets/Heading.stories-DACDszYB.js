import{e as n,H as l,o as A}from"./iframe-B8iXgyt9.js";const{expect:d,within:T}=__STORYBOOK_MODULE_TEST__,g=["h1","h2","h3","h4","h5","h6"],b={title:"Primatives/Heading",component:l,decorators:[e=>n.createElement("div",{style:{maxWidth:"350px",width:"100%"}},n.createElement(e,null))],args:{children:"I am a heading"}},r={args:{as:"h1",children:"This heading has used a few small words, to demo balanced wrapping",id:"story-heading",testId:"test-heading"},play:async({args:e,canvasElement:a,step:c})=>{const t=T(a).getAllByRole("heading",{level:1})[0];await c("<Heading /> renders content and ids",async()=>{await d(t).toHaveTextContent(e.children),await d(t).toHaveAttribute("id",e.id),await d(t).toHaveAttribute("data-test-id",e.testId)})}},o={render:e=>n.createElement(n.Fragment,null,g.map(a=>n.createElement(l,{key:a,...e,as:a}))),play:async({canvasElement:e,step:a})=>{const c=T(e);await a("<Heading /> renders one of each level",async()=>{g.forEach(async s=>{const t=c.getAllByRole("heading",{level:Number(s==null?void 0:s.charAt(1))})[0];await d(t).toBeInTheDocument()})})}},i={render:e=>n.createElement(n.Fragment,null,Object.keys(A.typography.colour).map(a=>n.createElement("div",{key:a,style:{marginBottom:8}},n.createElement(l,{...e,colour:a}))))};var h,p,m;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    as: 'h1',
    children: 'This heading has used a few small words, to demo balanced wrapping',
    id: 'story-heading',
    testId: 'test-heading'
  },
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const heading = canvas.getAllByRole('heading', {
      level: 1
    })[0];
    await step('<Heading /> renders content and ids', async () => {
      await expect(heading).toHaveTextContent(args.children as string);
      await expect(heading).toHaveAttribute('id', args.id);
      await expect(heading).toHaveAttribute('data-test-id', args.testId);
    });
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var y,u,v;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <>
            {headingTypeOptions.map(as => <Heading key={as} {...args} as={as} />)}
        </>,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('<Heading /> renders one of each level', async () => {
      headingTypeOptions.forEach(async level => {
        const heading = canvas.getAllByRole('heading', {
          level: Number(level?.charAt(1))
        })[0];
        await expect(heading).toBeInTheDocument();
      });
    });
  }
}`,...(v=(u=o.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var w,E,H;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <>
            {Object.keys(overdriveTokens.typography.colour).map(colour => <div key={colour} style={{
      marginBottom: 8
    }}>
                    <Heading {...args} colour={colour as HeadingProps['colour']} />
                </div>)}
        </>
}`,...(H=(E=i.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};const O=["Standard","AllTypes","AllColours"];export{i as AllColours,o as AllTypes,r as Standard,O as __namedExportsOrder,b as default};
