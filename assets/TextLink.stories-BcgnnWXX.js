import{e as l}from"./iframe-DrpTQ52u.js";import{T as h}from"./Text-DPZ6oucp.js";import{T as v}from"./TextLink-Bivsqc99.js";import{I as p}from"./ChevronRightIcon-COGQUgK9.js";import{I as u}from"./ArrowRightIcon-KAUQh0MX.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-W9klhI_r.js";import"./resolveResponsiveProps-DghjqN5W.js";const{expect:n,userEvent:g,within:m}=__STORYBOOK_MODULE_TEST__,y=["1","2","3","4","5","6","7","8","9"],f=["normal","semiBold","bold"],w=[!1,!0],k=["uppercase","capitalize",void 0],R={title:"Content/Text Link",component:v,decorators:[e=>l.createElement("div",{style:{maxWidth:300}},l.createElement(e,null))],args:{size:"4",weight:"semiBold",icon:void 0,muted:!1,noWrap:void 0,transform:void 0,href:"#link",children:"Hello"},argTypes:{icon:{defaultValue:null,description:"Input field Icon",options:["Arrow Right","Chevron Right"],mapping:{"Arrow Right":u,"Chevron Right":p}},noWrap:{options:w,defaultValue:!1,control:{type:"boolean"}},transform:{options:k,defaultValue:null,control:{type:"select"}},weight:{options:f,defaultValue:null,control:{type:"select"}},size:{options:y,defaultValue:void 0,control:{type:"select"}}}},s={play:async({args:e,canvasElement:o,step:r})=>{const t=m(o).getAllByRole("link")[0];await r("<TextLink /> renders content and attributes",async()=>{await n(t).toHaveAttribute("href",e.href),await n(t).toHaveTextContent(e.children)})}},a={decorators:[e=>l.createElement(h,{as:"p"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad,"," ",l.createElement(e,null)," autem consectetur consequuntur eius fugiat illo ipsum nobis numquam, officiis placeat quia, quidem reprehenderit rerum temporibus veniam vero.")]},i={args:{icon:p},play:async({canvasElement:e,step:o})=>{const r=g.setup(),t=m(e).getAllByRole("link")[0];await o("<TextLink /> has SVG icon",async()=>{await n(t.querySelector("svg")).toBeInTheDocument()}),await o("<TextLink /> is interactive",async()=>{await n(t).toHaveStyle({cursor:"pointer"}),await r.keyboard("{Tab}"),await n(t).toHaveFocus(),await r.hover(t)})}},c={args:{icon:u},decorators:a.decorators};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const link = canvas.getAllByRole('link')[0];
    await step('<TextLink /> renders content and attributes', async () => {
      await expect(link).toHaveAttribute('href', args.href);
      await expect(link).toHaveTextContent(args.children as string);
    });
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <Text as="p">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad,{' '}
                <Story /> autem consectetur consequuntur eius fugiat illo ipsum
                nobis numquam, officiis placeat quia, quidem reprehenderit rerum
                temporibus veniam vero.
            </Text>]
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    icon: ChevronRightIcon
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const user = userEvent.setup();
    const canvas = within(canvasElement);
    const link = canvas.getAllByRole('link')[0];
    await step('<TextLink /> has SVG icon', async () => {
      await expect(link.querySelector('svg')).toBeInTheDocument();
    });
    await step('<TextLink /> is interactive', async () => {
      await expect(link).toHaveStyle({
        cursor: 'pointer'
      });
      await user.keyboard('{Tab}');
      await expect(link).toHaveFocus();
      await user.hover(link);
    });
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    icon: ArrowRightIcon
  },
  decorators: InsideParagraph.decorators
}`,...c.parameters?.docs?.source}}};const q=["Standard","InsideParagraph","WithIcon","WithIconInsideParagraph"];export{a as InsideParagraph,s as Standard,i as WithIcon,c as WithIconInsideParagraph,q as __namedExportsOrder,R as default};
