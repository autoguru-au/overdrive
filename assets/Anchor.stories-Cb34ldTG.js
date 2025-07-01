import{a as f}from"./argTypes-DvwKb3jj.js";import{q as v,c as g,v as w,r as n,w as I}from"./iframe-BCt8Udfy.js";import{I as A}from"./Icon-DQv8cRXC.js";import{I as E}from"./Inline-o2dnEXRD.js";import{T as _}from"./Text-jNEoN6Nm.js";import"./CheckIcon-DB1BCBUR.js";import"./StarIcon-BhFNRycX.js";import"./PlusIcon-B53QHctc.js";import"./CurrencyUsdIcon-BoV2HmDP.js";import"./AlertCircleIcon-C4XAFpmY.js";import"./PhoneIcon-CYDrIktv.js";import"./MagnifyIcon-B6u6dF6c.js";import"./resolveResponsiveProps-OZ0auyPc.js";import"./useNegativeMarginTop-DaJy5DoG.js";var x="tq83zq0";const c=({className:e="",is:t="a",disabled:s=!1,testId:l,children:a,icon:o,...y})=>{const d={className:g(w({as:t,colour:"link",display:"inline-flex"}),x,e),disabled:s,...v({testid:l}),...y},p=n.createElement(E,{space:"2"},o&&n.createElement(A,{icon:o,size:"small",className:I({colour:"link"})}),n.createElement(_,{weight:"bold",size:"4",colour:"link"},a));return n.isValidElement(t)?n.cloneElement(t,d,p):n.createElement(t,d,p)};try{c.displayName="Anchor",c.__docgenInfo={description:"",displayName:"Anchor",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},is:{defaultValue:{value:"a"},description:"",name:"is",required:!1,type:{name:"ElementType | ReactElement<unknown, string | JSXElementConstructor<any>>"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"IconType"}},testId:{defaultValue:null,description:"The test ID will be rendered as a data attribute on the element for e2e testing purposes",name:"testId",required:!1,type:{name:"string"}}}}}catch{}const{expect:r,within:T}=__STORYBOOK_MODULE_TEST__,J={title:"Primatives/Anchor",tags:["polymorphic"],component:c,args:{href:"tel:07 5612 5347",icon:"Phone",children:"07 5612 5347"},argTypes:{icon:{description:"Input field Icon",...f}}},i={args:{id:"story-anchor",testId:"test-anchor"},play:async({args:e,canvasElement:t,step:s})=>{const a=T(t).getAllByRole("link")[0],o=t.querySelector("svg");await s("<Anchor /> renders content, href and ids",async()=>{await r(a).toHaveTextContent(e.children),await r(a).toHaveAttribute("href",e.href),await r(a).toHaveAttribute("id",e.id),await r(a).toHaveAttribute("data-testid",e.testId)}),await s("<Anchor /> renders the icon",async()=>{await r(o).toBeInTheDocument()})}};var m,u,h;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    id: 'story-anchor',
    testId: 'test-anchor'
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
      await expect(anchor).toHaveAttribute('data-testid', args.testId);
    });
    await step('<Anchor /> renders the icon', async () => {
      await expect(icon).toBeInTheDocument();
    });
  }
}`,...(h=(u=i.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const K=["WithIcon"];export{i as WithIcon,K as __namedExportsOrder,J as default};
