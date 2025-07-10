import{a as h}from"./argTypes-DqBhbc93.js";import{z as u,c as y,A as f,r as n,B as g}from"./iframe-euna8s5s.js";import{I as A}from"./Icon-DqrgKwGZ.js";import"./CheckIcon-f4EwY2cG.js";import"./StarIcon-B3cV3mxO.js";import"./PlusIcon-BigSy_q1.js";import"./CurrencyUsdIcon-XcgaaV3A.js";import"./AlertCircleIcon-CoqtXUIm.js";import"./PhoneIcon-Dppxv2XR.js";import"./MagnifyIcon-BRwVylNr.js";import"./resolveResponsiveProps-p3_9cnhH.js";var v="tq83zq0";const w="a",c=({className:e,as:t=w,disabled:s=!1,testId:l,children:a,icon:o,...m})=>{const d={className:y(f({as:t,colour:"link",display:"inline-flex"}),v,e),disabled:s,...u({testid:l}),...m},p=n.createElement(g,{as:"span",alignItems:"center",colour:"link",display:"inline-flex",fontSize:"4",fontWeight:"bold",gap:"2"},o&&n.createElement(A,{icon:o,size:"small"}),n.createElement("span",null,a));return n.isValidElement(t)?n.cloneElement(t,d,p):n.createElement(t,d,p)};try{c.displayName="Anchor",c.__docgenInfo={description:"",displayName:"Anchor",props:{as:{defaultValue:{value:"a"},description:"",name:"as",required:!1,type:{name:"ElementType | ReactElement<unknown, string | JSXElementConstructor<any>>"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"IconType"}},testId:{defaultValue:null,description:"The test ID will be rendered as a data attribute `data-testid` on the element for use with test assertions",name:"testId",required:!1,type:{name:"string"}}}}}catch{}const{expect:r,within:I}=__STORYBOOK_MODULE_TEST__,R={title:"Content/Anchor",tags:["polymorphic"],component:c,args:{href:"tel:07 5612 5347",icon:"Phone",children:"07 5612 5347"},argTypes:{icon:{description:"Input field Icon",...h}}},i={args:{id:"story-anchor",testId:"test-anchor"},play:async({args:e,canvasElement:t,step:s})=>{const a=I(t).getAllByRole("link")[0],o=t.querySelector("svg");await s("<Anchor /> renders content, href and ids",async()=>{await r(a).toHaveTextContent(e.children),await r(a).toHaveAttribute("href",e.href),await r(a).toHaveAttribute("id",e.id),await r(a).toHaveAttribute("data-testid",e.testId)}),await s("<Anchor /> renders the icon",async()=>{await r(o).toBeInTheDocument()})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const V=["WithIcon"];export{i as WithIcon,V as __namedExportsOrder,R as default};
