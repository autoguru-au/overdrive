import{r as w,R as e}from"./index-Cr_cdoBq.js";import{B as o,c as x}from"./Box-riOnoi3Y.js";import{H as t}from"./Heading-t0NRGq8z.js";import{I as H}from"./Inline-D4FJmuWo.js";import"./_commonjsHelpers-C932wzq6.js";import"./dataAttrs-BPvLuXwN.js";import"./useTextStyles-DNm53NZA.js";import"./index-DceDftY5.js";import"./useNegativeMarginTop-B5m0RFWn.js";import"./Text-B-fLVrc5.js";var d={horizontal:{1:"k1y61r0",2:"k1y61r1",3:"k1y61r2"},vertical:{1:"k1y61r3",2:"k1y61r4",3:"k1y61r5"}};const n=({className:a="",isVertical:r=!1,space:u="3",colour:E="primary",size:c=1})=>w.createElement(o,{backgroundColour:E,className:x(a,{[d.horizontal[c]]:!r,[d.vertical[c]]:r}),marginY:r?void 0:u,marginX:r?u:void 0});try{n.displayName="DividerLine",n.__docgenInfo={description:"",displayName:"DividerLine",props:{isVertical:{defaultValue:{value:"false"},description:"",name:"isVertical",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},space:{defaultValue:{value:"3"},description:"",name:"space",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},colour:{defaultValue:{value:"primary"},description:"",name:"colour",required:!1,type:{name:"enum",value:[{value:'"transparent"'},{value:'"white"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"neutral"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'},{value:'"black900"'},{value:'"black800"'},{value:'"black700"'},{value:'"black600"'},{value:'"black500"'},{value:'"black400"'},{value:'"black300"'},{value:'"black200"'},{value:'"black100"'},{value:'"gray900"'},{value:'"gray800"'},{value:'"gray700"'},{value:'"gray600"'},{value:'"gray500"'},{value:'"gray400"'},{value:'"gray300"'},{value:'"gray200"'},{value:'"gray100"'},{value:'"blue900"'},{value:'"blue800"'},{value:'"blue700"'},{value:'"blue600"'},{value:'"blue500"'},{value:'"blue400"'},{value:'"blue300"'},{value:'"blue200"'},{value:'"blue100"'},{value:'"green900"'},{value:'"green800"'},{value:'"green700"'},{value:'"green600"'},{value:'"green500"'},{value:'"green400"'},{value:'"green300"'},{value:'"green200"'},{value:'"green100"'},{value:'"red900"'},{value:'"red800"'},{value:'"red700"'},{value:'"red600"'},{value:'"red500"'},{value:'"red400"'},{value:'"red300"'},{value:'"red200"'},{value:'"red100"'},{value:'"yellow900"'},{value:'"yellow800"'},{value:'"yellow700"'},{value:'"yellow600"'},{value:'"yellow500"'},{value:'"yellow400"'},{value:'"yellow300"'},{value:'"yellow200"'},{value:'"yellow100"'}]}},size:{defaultValue:{value:"1"},description:"",name:"size",required:!1,type:{name:"string | number"}}}}}catch{}const T={none:"none",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9"},S=[1,2,3],k=["primary","secondary","danger","information","warning","success","neutral","shine"],F={title:"Primatives/Divider Line",component:n,argTypes:{space:{options:T,defaultValue:1,control:{type:"select"}},colour:{options:k,defaultValue:1,control:{type:"select"}},size:{options:S,defaultValue:1,control:{type:"select"}}},decorators:[a=>e.createElement("div",{style:{display:"grid",gridAutoFlow:"row dense",gridGap:"10px"}},e.createElement("div",{style:{display:"grid",gap:"10px",gridTemplateColumns:"repeat(auto-fit, minmax(10px, max-content))"}},a()))]},l={args:{space:"5",size:3,colour:"primary"},render:a=>e.createElement(o,null,e.createElement(t,{is:"h2",size:"7"},"Title 1"),e.createElement(n,{...a}),e.createElement(t,{is:"h2",size:"7"},"Title 1"))},i={args:{...l.args,isVertical:!0},render:a=>e.createElement(H,{alignY:"stretch"},e.createElement(t,{is:"h2",size:"7"},"Title 1"),e.createElement(n,{...a}),e.createElement(t,{is:"h2",size:"7"},"Title 1"))},s={args:{...l.args},render:a=>e.createElement(o,null,k.map(r=>e.createElement(e.Fragment,{key:r},e.createElement(t,{is:"h2",size:"7"},"Title"),e.createElement(n,{...a,colour:r}))))};var v,m,p;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    space: '5',
    size: 3,
    colour: 'primary'
  },
  render: args => <Box>
            <Heading is="h2" size="7">
                Title 1
            </Heading>
            <DividerLine {...args} />
            <Heading is="h2" size="7">
                Title 1
            </Heading>
        </Box>
}`,...(p=(m=l.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,y,f;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    isVertical: true
  },
  render: args => <Inline alignY="stretch">
            <Heading is="h2" size="7">
                Title 1
            </Heading>
            <DividerLine {...args} />
            <Heading is="h2" size="7">
                Title 1
            </Heading>
        </Inline>
}`,...(f=(y=i.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var b,z,h;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Standard.args
  },
  render: args => <Box>
            {colours.map(colour => <React.Fragment key={colour}>
                    <Heading is="h2" size="7">
                        Title
                    </Heading>
                    <DividerLine {...args} colour={colour} />
                </React.Fragment>)}
        </Box>
}`,...(h=(z=s.parameters)==null?void 0:z.docs)==null?void 0:h.source}}};const A=["Standard","Vertical","StandardAllColours"];export{l as Standard,s as StandardAllColours,i as Vertical,A as __namedExportsOrder,F as default};
