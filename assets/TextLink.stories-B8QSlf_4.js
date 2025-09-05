import{r as s,l as _,e as t,c as S,B}from"./iframe-PgZJ2afo.js";import{T as h}from"./Text-BWnBe8RO.js";import{I as L}from"./Icon-C4-JpBuo.js";import{I as k}from"./ChevronRightIcon-BM29uIPi.js";import{I as w}from"./ArrowRightIcon-C5mvpqZ2.js";import"./preload-helper-D9Z9MdNV.js";import"./resolveResponsiveProps-CdSEa9T5.js";var R="_5ax1bk0",W="_5ax1bk1",A="_5ax1bk2 onxwju64 onxwju8h",z="_5ax1bk3";const d=s.forwardRef(({as:e,children:n,className:r,color:p,colour:a,icon:m,muted:y=!1,noWrap:b,size:T,strong:E,transform:q,weight:I="semiBold",...v},V)=>{_.invariant(!(e!==void 0&&v.href!==void 0),"You cannot have both href and as defined.");const f=t.createElement(h,{colour:y?"muted":"link",noWrap:b,pr:m?"5":void 0,size:T,strong:E,transform:q,weight:I,className:[A,{[z]:y}]},n,m?t.createElement(L,{icon:m,size:"small",display:"inline-block",className:S(W)}):null),g={rel:v.rel??"noopener noreferrer",...v,ref:V};return e===void 0?t.createElement(B,{as:"a",color:p,colour:a,className:[r,R],...g},f):s.isValidElement(e)?s.cloneElement(e,g,f):s.createElement(e,g,f)});d.displayName="TextLink";try{d.displayName="TextLink",d.__docgenInfo={description:"TextLink component for rendering navigation links",displayName:"TextLink",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType | ReactElement<unknown, string | JSXElementConstructor<any>>"}},muted:{defaultValue:{value:"false"},description:"",name:"muted",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"Optional icon, displayed after the link text",name:"icon",required:!1,type:{name:"IconType"}},strong:{defaultValue:null,description:"Bold font weight",name:"strong",required:!1,type:{name:"boolean"}},color:{defaultValue:null,description:"Set the text colour",name:"color",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"soft"'},{value:'"success"'},{value:'"info"'},{value:'"danger"'},{value:'"warning"'},{value:'"inverse"'}]}},size:{defaultValue:null,description:"Font size of the text",name:"size",required:!1,type:{name:'ConditionalStyleWithResponsiveArray<Values<Record<"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9", `var(--${string})`>, { defaultClass: string; conditions: { mobile: string; tablet: string; desktop: string; largeDesktop: string; }; }>, ("mobile" | ... 2 more ... | "largeDesktop")[] & { ...; }>'}},transform:{defaultValue:null,description:"Applies text capitalisation style",name:"transform",required:!1,type:{name:"enum",value:[{value:'"capitalize"'},{value:'"lowercase"'},{value:'"uppercase"'}]}},wordBreak:{defaultValue:null,description:"Control word break during wrapping",name:"wordBreak",required:!1,type:{name:"enum",value:[{value:'"break-word"'},{value:'"break-all"'},{value:'"keep-all"'}]}},colour:{defaultValue:null,description:"_in transistion_ Prefer `color`",name:"colour",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"unset"'},{value:'"white"'},{value:'"dark"'},{value:'"light"'},{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"neutral"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"information"'},{value:'"muted"'}]}},weight:{defaultValue:{value:"semiBold"},description:"The font weight",name:"weight",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"bold"'},{value:'"semiBold"'}]}},breakWord:{defaultValue:null,description:"Forces long words to break",name:"breakWord",required:!1,type:{name:"boolean"}},noWrap:{defaultValue:null,description:"@deprecated prefer `wrap` prop as it supports all wrapping values",name:"noWrap",required:!1,type:{name:"boolean"}}}}}catch{}const{expect:i,userEvent:H,within:x}=__STORYBOOK_MODULE_TEST__,O=["1","2","3","4","5","6","7","8","9"],N=["normal","semiBold","bold"],P=[!1,!0],C=["uppercase","capitalize",void 0],M={title:"Content/Text Link",component:d,decorators:[e=>t.createElement("div",{style:{maxWidth:300}},t.createElement(e,null))],args:{size:"4",weight:"semiBold",icon:void 0,muted:!1,noWrap:void 0,transform:void 0,href:"#link",children:"Hello"},argTypes:{icon:{defaultValue:null,description:"Input field Icon",options:["Arrow Right","Chevron Right"],mapping:{"Arrow Right":w,"Chevron Right":k}},noWrap:{options:P,defaultValue:!1,control:{type:"boolean"}},transform:{options:C,defaultValue:null,control:{type:"select"}},weight:{options:N,defaultValue:null,control:{type:"select"}},size:{options:O,defaultValue:void 0,control:{type:"select"}}}},l={play:async({args:e,canvasElement:n,step:r})=>{const a=x(n).getAllByRole("link")[0];await r("<TextLink /> renders content and attributes",async()=>{await i(a).toHaveAttribute("href",e.href),await i(a).toHaveTextContent(e.children)})}},o={decorators:[e=>t.createElement(h,{as:"p"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad,"," ",t.createElement(e,null)," autem consectetur consequuntur eius fugiat illo ipsum nobis numquam, officiis placeat quia, quidem reprehenderit rerum temporibus veniam vero.")]},c={args:{icon:k},play:async({canvasElement:e,step:n})=>{const r=H.setup(),a=x(e).getAllByRole("link")[0];await n("<TextLink /> has SVG icon",async()=>{await i(a.querySelector("svg")).toBeInTheDocument()}),await n("<TextLink /> is interactive",async()=>{await i(a).toHaveStyle({cursor:"pointer"}),await r.keyboard("{Tab}"),await i(a).toHaveFocus(),await r.hover(a)})}},u={args:{icon:w},decorators:o.decorators};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <Text as="p">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad,{' '}
                <Story /> autem consectetur consequuntur eius fugiat illo ipsum
                nobis numquam, officiis placeat quia, quidem reprehenderit rerum
                temporibus veniam vero.
            </Text>]
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    icon: ArrowRightIcon
  },
  decorators: InsideParagraph.decorators
}`,...u.parameters?.docs?.source}}};const U=["Standard","InsideParagraph","WithIcon","WithIconInsideParagraph"];export{o as InsideParagraph,l as Standard,c as WithIcon,u as WithIconInsideParagraph,U as __namedExportsOrder,M as default};
