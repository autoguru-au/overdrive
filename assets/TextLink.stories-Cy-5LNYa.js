import{r as i,j as V,e as n,c as S,B}from"./iframe-CQI638ZW.js";import{T as h}from"./Text-DHDH6YSo.js";import{I as L}from"./Icon-CcnEMbtT.js";import{I as k}from"./ChevronRightIcon-CCHn7kic.js";import{I as w}from"./ArrowRightIcon-C1ov3-Ac.js";import"./resolveResponsiveProps-BSDOymb9.js";var R="_5ax1bk0",W="_5ax1bk1",A="_5ax1bk2 onxwju6m onxwju8z",z="_5ax1bk3";const d=i.forwardRef(({as:e,children:t,className:r,color:p,colour:a,icon:m,muted:g=!1,noWrap:b,size:T,strong:E,transform:q,weight:I="semiBold",...v},_)=>{V.invariant(!(e!==void 0&&v.href!==void 0),"You cannot have both href and as defined.");const f=n.createElement(h,{colour:g?"muted":"link",noWrap:b,pr:m?"5":void 0,size:T,strong:E,transform:q,weight:I,className:[A,{[z]:g}]},t,m?n.createElement(L,{icon:m,size:"small",display:"inline-block",className:S(W)}):null),y={rel:v.rel??"noopener noreferrer",...v,ref:_};return e===void 0?n.createElement(B,{as:"a",color:p,colour:a,className:[r,R],...y},f):i.isValidElement(e)?i.cloneElement(e,y,f):i.createElement(e,y,f)});d.displayName="TextLink";try{d.displayName="TextLink",d.__docgenInfo={description:"TextLink component for rendering navigation links",displayName:"TextLink",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>> | ElementType"}},muted:{defaultValue:{value:"false"},description:"",name:"muted",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"Optional icon, displayed after the link text",name:"icon",required:!1,type:{name:"IconType"}},color:{defaultValue:null,description:"Set the text colour",name:"color",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"soft"'},{value:'"success"'},{value:'"info"'},{value:'"danger"'},{value:'"warning"'},{value:'"inverse"'}]}},size:{defaultValue:null,description:"Font size of the text",name:"size",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'},{value:'"4"'},{value:'"5"'},{value:'"6"'},{value:'"7"'},{value:'"8"'},{value:'"9"'}]}},transform:{defaultValue:null,description:"Applies text capitalisation style",name:"transform",required:!1,type:{name:"enum",value:[{value:'"capitalize"'},{value:'"lowercase"'},{value:'"uppercase"'}]}},wordBreak:{defaultValue:null,description:"Control word break during wrapping",name:"wordBreak",required:!1,type:{name:"enum",value:[{value:'"break-word"'},{value:'"break-all"'},{value:'"keep-all"'}]}},colour:{defaultValue:null,description:"_in transistion_ Prefer `color`",name:"colour",required:!1,type:{name:"enum",value:[{value:'"muted"'},{value:'"unset"'},{value:'"white"'},{value:'"dark"'},{value:'"light"'},{value:'"link"'},{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"neutral"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"information"'}]}},weight:{defaultValue:{value:"semiBold"},description:"The font weight",name:"weight",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"bold"'},{value:'"semiBold"'}]}},strong:{defaultValue:null,description:"Bold font weight",name:"strong",required:!1,type:{name:"boolean"}},breakWord:{defaultValue:null,description:"Forces long words to break",name:"breakWord",required:!1,type:{name:"boolean"}},noWrap:{defaultValue:null,description:"@deprecated prefer `wrap` prop as it supports all wrapping values",name:"noWrap",required:!1,type:{name:"boolean"}}}}}catch{}const{expect:l,userEvent:H,within:x}=__STORYBOOK_MODULE_TEST__,O=["1","2","3","4","5","6","7","8","9"],N=["normal","semiBold","bold"],P=[!1,!0],C=["uppercase","capitalize",void 0],K={title:"Content/Text Link",component:d,decorators:[e=>n.createElement("div",{style:{maxWidth:300}},n.createElement(e,null))],args:{size:"4",weight:"semiBold",icon:void 0,muted:!1,noWrap:void 0,transform:void 0,href:"#link",children:"Hello"},argTypes:{icon:{defaultValue:null,description:"Input field Icon",options:["Arrow Right","Chevron Right"],mapping:{"Arrow Right":w,"Chevron Right":k}},noWrap:{options:P,defaultValue:!1,control:{type:"boolean"}},transform:{options:C,defaultValue:null,control:{type:"select"}},weight:{options:N,defaultValue:null,control:{type:"select"}},size:{options:O,defaultValue:void 0,control:{type:"select"}}}},s={play:async({args:e,canvasElement:t,step:r})=>{const a=x(t).getAllByRole("link")[0];await r("<TextLink /> renders content and attributes",async()=>{await l(a).toHaveAttribute("href",e.href),await l(a).toHaveTextContent(e.children)})}},o={decorators:[e=>n.createElement(h,{as:"p"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad,"," ",n.createElement(e,null)," autem consectetur consequuntur eius fugiat illo ipsum nobis numquam, officiis placeat quia, quidem reprehenderit rerum temporibus veniam vero.")]},u={args:{icon:k},play:async({canvasElement:e,step:t})=>{const r=H.setup(),a=x(e).getAllByRole("link")[0];await t("<TextLink /> has SVG icon",async()=>{await l(a.querySelector("svg")).toBeInTheDocument()}),await t("<TextLink /> is interactive",async()=>{await l(a).toHaveStyle({cursor:"pointer"}),await r.keyboard("{Tab}"),await l(a).toHaveFocus(),await r.hover(a)})}},c={args:{icon:w},decorators:o.decorators};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <Text as="p">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad,{' '}
                <Story /> autem consectetur consequuntur eius fugiat illo ipsum
                nobis numquam, officiis placeat quia, quidem reprehenderit rerum
                temporibus veniam vero.
            </Text>]
}`,...o.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    icon: ArrowRightIcon
  },
  decorators: InsideParagraph.decorators
}`,...c.parameters?.docs?.source}}};const M=["Standard","InsideParagraph","WithIcon","WithIconInsideParagraph"];export{o as InsideParagraph,s as Standard,u as WithIcon,c as WithIconInsideParagraph,M as __namedExportsOrder,K as default};
