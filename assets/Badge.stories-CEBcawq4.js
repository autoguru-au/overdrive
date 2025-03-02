import{R as e}from"./index-Cr_cdoBq.js";import{B as o}from"./Badge-Bn8blsT8.js";import"./_commonjsHelpers-C932wzq6.js";import"./index-CYx1ALmS.js";import"./Box-Dd8rtt69.js";import"./dataAttrs-BPvLuXwN.js";import"./createRuntimeFn-62c9670f.esm-Bn1gNn0k.js";const d=["blue","red","green","yellow","neutral"],R={title:"Components/Badge",component:o,decorators:[a=>e.createElement("div",{style:{display:"grid",gridAutoFlow:"row dense",gridGap:"10px"}},e.createElement("div",{style:{display:"grid",gap:"10px",gridTemplateColumns:"repeat(auto-fit, minmax(10px, max-content))"}},a()))],tags:["updated"]},s={args:{label:"TITANIUM"}},l={args:{label:"TITANIUM"},render:a=>e.createElement(e.Fragment,null,d.map(r=>e.createElement(o,{key:r,...a,colour:r})))},n={args:{label:"TITANIUM",size:"large"},render:a=>e.createElement(e.Fragment,null,d.map(r=>e.createElement(o,{key:r,...a,colour:r})))},t={args:{label:"TITANIUM",size:"small"},render:a=>e.createElement(e.Fragment,null,d.map(r=>e.createElement(o,{key:r,...a,colour:r})))},c={args:{label:"TITANIUM",look:"inverted"}},m={args:{label:"TITANIUM",look:"inverted"},render:a=>e.createElement(e.Fragment,null,d.map(r=>e.createElement(o,{key:r,...a,colour:r})))};var u,p,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'TITANIUM'
  }
}`,...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var i,I,T;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'TITANIUM'
  },
  render: args => <>
            {colours.map(colour => <Badge key={colour} {...args} colour={colour} />)}
        </>
}`,...(T=(I=l.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var A,b,y;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'TITANIUM',
    size: 'large'
  },
  render: args => <>
            {colours.map(colour => <Badge key={colour} {...args} colour={colour} />)}
        </>
}`,...(y=(b=n.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var k,M,N;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'TITANIUM',
    size: 'small'
  },
  render: args => <>
            {colours.map(colour => <Badge key={colour} {...args} colour={colour} />)}
        </>
}`,...(N=(M=t.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var S,U,E;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'TITANIUM',
    look: 'inverted'
  }
}`,...(E=(U=c.parameters)==null?void 0:U.docs)==null?void 0:E.source}}};var v,C,B;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'TITANIUM',
    look: 'inverted'
  },
  render: args => <>
            {colours.map(colour => <Badge key={colour} {...args} colour={colour} />)}
        </>
}`,...(B=(C=m.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};const G=["Standard","StandardAllColours","LargeAllColours","SmallAllColours","Inverted","InvertedAllColours"];export{c as Inverted,m as InvertedAllColours,n as LargeAllColours,t as SmallAllColours,s as Standard,l as StandardAllColours,G as __namedExportsOrder,R as default};
