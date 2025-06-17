import{r as l,h as O,e as t,c as h,w as P,B as F}from"./iframe-BPJhr76J.js";import{T as B}from"./Text-3IOoZozm.js";import{I as D}from"./Icon-D8YYTUq2.js";import{I as L}from"./ChevronRightIcon-7F7FnAbu.js";import{I as R}from"./ArrowRightIcon-BAdLSRR2.js";import"./useTextStyles-D4FwBGMO.js";import"./resolveResponsiveProps-DXxr8mrg.js";var C="_5ax1bk0",U="_5ax1bk1",G="_5ax1bk2";const d=l.forwardRef(({is:e,children:n,className:r,color:p,strong:a,fontWeight:H="semiBold",muted:g=!1,size:z,icon:m,...v},N)=>{O.invariant(!(e!==void 0&&v.href!==void 0),"You cannot have both href and as defined.");const f=t.createElement(B,{as:"span",colour:g?"muted":"link",size:z,fontWeight:H,strong:a,className:h(P({as:"span",pointerEvents:"none",position:"relative",paddingRight:m?"5":void 0}),{[G]:g})},n,m?t.createElement(D,{icon:m,size:"small",display:"inline-block",className:h(U)}):null),y={rel:v.rel??"noopener noreferrer",...v,ref:N};return e===void 0?t.createElement(F,{as:"a",colour:p,className:[r,C],...y},f):l.isValidElement(e)?l.cloneElement(e,y,f):l.createElement(e,y,f)});d.displayName="TextLink";try{d.displayName="TextLink",d.__docgenInfo={description:"",displayName:"TextLink",props:{strong:{defaultValue:null,description:"Use bold font weight",name:"strong",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},is:{defaultValue:null,description:"",name:"is",required:!1,type:{name:"ElementType | ReactElement<unknown, string | JSXElementConstructor<any>>"}},size:{defaultValue:null,description:"Font size of the text",name:"size",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'},{value:'"4"'},{value:'"5"'},{value:'"6"'},{value:'"7"'},{value:'"8"'},{value:'"9"'}]}},testId:{defaultValue:null,description:"The test ID will be rendered as a data attribute on the element for e2e testing purposes",name:"testId",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"Set the text colour",name:"color",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"unset"'},{value:'"white"'},{value:'"dark"'},{value:'"light"'},{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"neutral"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"information"'},{value:'"muted"'}]}},display:{defaultValue:null,description:"Select CSS display property",name:"display",required:!1,type:{name:"enum",value:[{value:'"block"'},{value:'"inline"'},{value:'"inlineBlock"'}]}},fontWeight:{defaultValue:{value:"semiBold"},description:"Font weight of the text",name:"fontWeight",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"bold"'},{value:'"semiBold"'}]}},transform:{defaultValue:null,description:"Text transformation (uppercase, lowercase, etc.)",name:"transform",required:!1,type:{name:"enum",value:[{value:'"capitalize"'},{value:'"uppercase"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"IconType"}},muted:{defaultValue:{value:"false"},description:"",name:"muted",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"HTML element to render as",name:"as",required:!1,type:{name:"enum",value:[{value:'"label"'},{value:'"p"'},{value:'"span"'}]}},align:{defaultValue:null,description:"@deprecated Use `useBoxStyles` for alignment instead of `useTextStyles`",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},noWrap:{defaultValue:null,description:"Prevents text from wrapping",name:"noWrap",required:!1,type:{name:"boolean"}},breakWord:{defaultValue:null,description:"Forces long words to break",name:"breakWord",required:!1,type:{name:"boolean"}}}}}catch{}const{expect:s,userEvent:M,within:A}=__STORYBOOK_MODULE_TEST__,Y=["1","2","3","4","5","6","7","8","9"],J=["normal","semiBold","bold"],K=[!1,!0],X=["uppercase","capitalize",void 0],ne={title:"Primatives/Text Link",component:d,decorators:[e=>t.createElement("div",{style:{maxWidth:300}},t.createElement(e,null))],args:{size:"4",fontWeight:"semiBold",icon:void 0,muted:!1,noWrap:void 0,transform:void 0,href:"#link",children:"Hello"},argTypes:{icon:{defaultValue:null,description:"Input field Icon",options:["Arrow Right","Chevron Right"],mapping:{"Arrow Right":R,"Chevron Right":L}},noWrap:{options:K,defaultValue:!1,control:{type:"boolean"}},transform:{options:X,defaultValue:null,control:{type:"select"}},fontWeight:{options:J,defaultValue:null,control:{type:"select"}},size:{options:Y,defaultValue:void 0,control:{type:"select"}}}},i={play:async({args:e,canvasElement:n,step:r})=>{const a=A(n).getAllByRole("link")[0];await r("<TextLink /> renders content and attributes",async()=>{await s(a).toHaveAttribute("href",e.href),await s(a).toHaveTextContent(e.children)})}},o={decorators:[e=>t.createElement(B,{as:"p"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad,"," ",t.createElement(e,null)," autem consectetur consequuntur eius fugiat illo ipsum nobis numquam, officiis placeat quia, quidem reprehenderit rerum temporibus veniam vero.")]},u={args:{icon:L},play:async({canvasElement:e,step:n})=>{const r=M.setup(),a=A(e).getAllByRole("link")[0];await n("<TextLink /> has SVG icon",async()=>{await s(a.querySelector("svg")).toBeInTheDocument()}),await n("<TextLink /> is interactive",async()=>{await s(a).toHaveStyle({cursor:"pointer"}),await r.keyboard("{Tab}"),await s(a).toHaveFocus(),await r.hover(a)})}},c={args:{icon:R},decorators:o.decorators};var k,x,w;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(w=(x=i.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var b,T,I;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  decorators: [Story => <Text as="p">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad,{' '}
                <Story /> autem consectetur consequuntur eius fugiat illo ipsum
                nobis numquam, officiis placeat quia, quidem reprehenderit rerum
                temporibus veniam vero.
            </Text>]
}`,...(I=(T=o.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var q,E,S;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(S=(E=u.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var V,_,W;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    icon: ArrowRightIcon
  },
  decorators: InsideParagraph.decorators
}`,...(W=(_=c.parameters)==null?void 0:_.docs)==null?void 0:W.source}}};const re=["Standard","InsideParagraph","WithIcon","WithIconInsideParagraph"];export{o as InsideParagraph,i as Standard,u as WithIcon,c as WithIconInsideParagraph,re as __namedExportsOrder,ne as default};
