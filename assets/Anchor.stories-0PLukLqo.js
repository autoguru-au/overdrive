import{a as f}from"./argTypes-CaBVLu4n.js";import{c as v,w as g,r as n}from"./iframe-BPJhr76J.js";import{I as w}from"./Icon-D8YYTUq2.js";import{I as x}from"./Inline-BHwqQZj_.js";import{T as E}from"./Text-3IOoZozm.js";import{u as _}from"./useTextStyles-D4FwBGMO.js";import"./CheckIcon-BnIDR_qF.js";import"./StarIcon-DtJfIWmE.js";import"./PlusIcon-DaTBKoPL.js";import"./CurrencyUsdIcon-pg9owQqQ.js";import"./AlertCircleIcon-CrC2FFHn.js";import"./PhoneIcon-Co8PLIOs.js";import"./MagnifyIcon-CdCxxHji.js";import"./resolveResponsiveProps-DXxr8mrg.js";import"./useNegativeMarginTop-8MlrPDw7.js";var A="um22v0";const i=({className:t="",is:e="a",disabled:r=!1,children:l,icon:a,...c})=>{const p=_({colour:"link"}),m={className:v(g({as:e,display:"inline"}),A,p,t),disabled:r,...c},d=n.createElement(x,{space:"2"},a&&n.createElement(w,{icon:a,size:"small",className:p}),n.createElement(E,{fontWeight:"bold",size:"4",colour:"link"},l));return n.isValidElement(e)?n.cloneElement(e,m,d):n.createElement(e,m,d)};try{i.displayName="Anchor",i.__docgenInfo={description:"",displayName:"Anchor",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},is:{defaultValue:{value:"a"},description:"",name:"is",required:!1,type:{name:"ElementType | ReactElement<unknown, string | JSXElementConstructor<any>>"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"IconType"}}}}}catch{}const{expect:o,within:I}=__STORYBOOK_MODULE_TEST__,J={title:"Primatives/Anchor",tags:["polymorphic"],component:i,args:{href:"tel:07 5612 5347",icon:"Phone",children:"07 5612 5347"},argTypes:{icon:{description:"Input field Icon",...f}}},s={args:{id:"story-anchor"},play:async({args:t,canvasElement:e,step:r})=>{const a=I(e).getAllByRole("link")[0],c=e.querySelector("svg");await r("<Anchor /> renders content, href and ids",async()=>{await o(a).toHaveTextContent(t.children),await o(a).toHaveAttribute("href",t.href),await o(a).toHaveAttribute("id",t.id)}),await r("<Anchor /> renders the icon",async()=>{await o(c).toBeInTheDocument()})}};var h,u,y;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    id: 'story-anchor'
    // testId: 'test-anchor',
  },
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const anchor = canvas.getAllByRole('link')[0];
    const icon = canvasElement.querySelector('svg');
    await step('<Anchor /> renders content, href and ids', async () => {
      await expect(anchor).toHaveTextContent(args.children as string);
      await expect(anchor).toHaveAttribute('href', args.href);
      await expect(anchor).toHaveAttribute('id', args.id);
      // await expect(anchor).toHaveAttribute('data-test-id', args.testId);
    });
    await step('<Anchor /> renders the icon', async () => {
      await expect(icon).toBeInTheDocument();
    });
  }
}`,...(y=(u=s.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const K=["WithIcon"];export{s as WithIcon,K as __namedExportsOrder,J as default};
