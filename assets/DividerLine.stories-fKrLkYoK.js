import{r as e}from"./index-sWIihdb-.js";import{B as i,c as x}from"./Box-CAXqhIIF.js";import{H as n}from"./Heading-HiE9ELRh.js";import{I as T}from"./Inline-uzG28vNB.js";import"./_commonjsHelpers-C932wzq6.js";import"./useTextStyles-Co5OVDhn.js";import"./index-DVF0g4jg.js";import"./useNegativeMarginTop-CJQPKjai.js";import"./Text-BXJe5vv5.js";var v={horizontal:{1:"k1y61r0",2:"k1y61r1",3:"k1y61r2"},vertical:{1:"k1y61r3",2:"k1y61r4",3:"k1y61r5"}};const r=({className:a="",isVertical:l=!1,space:c="3",colour:_="primary",size:d=1})=>e.createElement(i,{backgroundColour:_,className:x(a,{[v.horizontal[d]]:!l,[v.vertical[d]]:l}),marginY:l?void 0:c,marginX:l?c:void 0});try{r.displayName="DividerLine",r.__docgenInfo={description:"",displayName:"DividerLine",props:{isVertical:{defaultValue:{value:"false"},description:"",name:"isVertical",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},space:{defaultValue:{value:"3"},description:"",name:"space",required:!1,type:{name:"ResponsiveProp<SpaceScale>"}},colour:{defaultValue:{value:"primary"},description:"",name:"colour",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"black900"'},{value:'"black800"'},{value:'"black700"'},{value:'"black600"'},{value:'"black500"'},{value:'"black400"'},{value:'"black300"'},{value:'"black200"'},{value:'"black100"'},{value:'"gray900"'},{value:'"gray800"'},{value:'"gray700"'},{value:'"gray600"'},{value:'"gray500"'},{value:'"gray400"'},{value:'"gray300"'},{value:'"gray200"'},{value:'"gray100"'},{value:'"blue900"'},{value:'"blue800"'},{value:'"blue700"'},{value:'"blue600"'},{value:'"blue500"'},{value:'"blue400"'},{value:'"blue300"'},{value:'"blue200"'},{value:'"blue100"'},{value:'"green900"'},{value:'"green800"'},{value:'"green700"'},{value:'"green600"'},{value:'"green500"'},{value:'"green400"'},{value:'"green300"'},{value:'"green200"'},{value:'"green100"'},{value:'"red900"'},{value:'"red800"'},{value:'"red700"'},{value:'"red600"'},{value:'"red500"'},{value:'"red400"'},{value:'"red300"'},{value:'"red200"'},{value:'"red100"'},{value:'"yellow900"'},{value:'"yellow800"'},{value:'"yellow700"'},{value:'"yellow600"'},{value:'"yellow500"'},{value:'"yellow400"'},{value:'"yellow300"'},{value:'"yellow200"'},{value:'"yellow100"'},{value:'"neutral"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'},{value:'"transparent"'}]}},size:{defaultValue:{value:"1"},description:"",name:"size",required:!1,type:{name:"string | number"}}}}}catch{}const V={none:"none",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9"},C=[1,2,3],z=["primary","secondary","danger","information","warning","success","neutral","shine"],Y={title:"Components/DividerLine",component:r,argTypes:{space:{options:V,defaultValue:1,control:{type:"select"}},colour:{options:z,defaultValue:1,control:{type:"select"}},size:{options:C,defaultValue:1,control:{type:"select"}}},decorators:[a=>e.createElement("div",{style:{display:"grid",gridAutoFlow:"row dense",gridGap:"10px"}},e.createElement("div",{style:{display:"grid",gap:"10px",gridTemplateColumns:"repeat(auto-fit, minmax(10px, max-content))"}},a()))]},P=a=>e.createElement(i,null,e.createElement(n,{is:"h2",size:"7"},"Title 1"),e.createElement(r,{...a}),e.createElement(n,{is:"h2",size:"7"},"Title 1")),q=a=>e.createElement(T,{alignY:"stretch"},e.createElement(n,{is:"h2",size:"7"},"Title 1"),e.createElement(r,{...a}),e.createElement(n,{is:"h2",size:"7"},"Title 1")),A=a=>e.createElement(i,null,z.map(l=>e.createElement(e.Fragment,null,e.createElement(n,{is:"h2",size:"7"},"Title"),e.createElement(r,{...a,colour:l})))),u={space:"5",size:3,colour:"primary"},t=P.bind(u);t.args=u;const h={...u,isVertical:!0},s=q.bind(h);s.args=h;const o=A.bind(u);o.args=u;var p,m,y;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"template.bind(standardProps)",...(y=(m=t.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var g,b,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:"verticalTemplate.bind(verticalProps)",...(f=(b=s.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var E,k,w;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:"templateAllColours.bind(standardProps)",...(w=(k=o.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};const G=["standard","vertical","standardAllColours"];export{G as __namedExportsOrder,Y as default,t as standard,o as standardAllColours,s as vertical};