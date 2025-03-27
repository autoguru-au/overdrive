import{R as r}from"./index-CIentmI6.js";import{B as s}from"./Badge-BsvnuJZO.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./index-D_iG_Vvt.js";import"./Box-Bevh8JBX.js";import"./dataAttrs-C4KudU4k.js";/* empty css                                  */import"./createRuntimeFn-62c9670f.esm-BkdTE7RR.js";const m=["blue","red","green","yellow","neutral"],R={title:"Components/Badge",component:s,tags:["updated"]},l={decorators:[],args:{label:"TITANIUM"}},a={decorators:[o=>r.createElement("div",{style:{display:"grid",gridAutoFlow:"row dense",gridGap:"10px"}},r.createElement("div",{style:{display:"grid",gap:"10px",gridTemplateColumns:"repeat(auto-fit, minmax(10px, max-content))"}},o()))],args:{label:"TITANIUM"},render:o=>r.createElement(r.Fragment,null,m.map(e=>r.createElement(s,{key:e,...o,colour:e})))},t={decorators:a.decorators,args:{label:"TITANIUM",size:"large"},render:o=>r.createElement(r.Fragment,null,m.map(e=>r.createElement(s,{key:e,...o,colour:e})))},n={decorators:a.decorators,args:{label:"TITANIUM",size:"small"},render:o=>r.createElement(r.Fragment,null,m.map(e=>r.createElement(s,{key:e,...o,colour:e})))},d={decorators:a.decorators,args:{label:"TITANIUM",look:"inverted"}},c={decorators:a.decorators,args:{label:"TITANIUM",look:"inverted"},render:o=>r.createElement(r.Fragment,null,m.map(e=>r.createElement(s,{key:e,...o,colour:e})))};var p,u,g;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  decorators: [],
  args: {
    label: 'TITANIUM'
  }
}`,...(g=(u=l.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var i,I,A;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  decorators: [story => <div style={{
    display: 'grid',
    gridAutoFlow: 'row dense',
    gridGap: '10px'
  }}>
                <div style={{
      display: 'grid',
      gap: '10px',
      gridTemplateColumns: 'repeat(auto-fit, minmax(10px, max-content))'
    }}>
                    {story()}
                </div>
            </div>],
  args: {
    label: 'TITANIUM'
  },
  render: args => <>
            {colours.map(colour => <Badge key={colour} {...args} colour={colour} />)}
        </>
}`,...(A=(I=a.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var T,y,S;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  decorators: StandardAllColours.decorators,
  args: {
    label: 'TITANIUM',
    size: 'large'
  },
  render: args => <>
            {colours.map(colour => <Badge key={colour} {...args} colour={colour} />)}
        </>
}`,...(S=(y=t.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var C,v,b;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  decorators: StandardAllColours.decorators,
  args: {
    label: 'TITANIUM',
    size: 'small'
  },
  render: args => <>
            {colours.map(colour => <Badge key={colour} {...args} colour={colour} />)}
        </>
}`,...(b=(v=n.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var k,x,M;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  decorators: StandardAllColours.decorators,
  args: {
    label: 'TITANIUM',
    look: 'inverted'
  }
}`,...(M=(x=d.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};var N,U,E;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  decorators: StandardAllColours.decorators,
  args: {
    label: 'TITANIUM',
    look: 'inverted'
  },
  render: args => <>
            {colours.map(colour => <Badge key={colour} {...args} colour={colour} />)}
        </>
}`,...(E=(U=c.parameters)==null?void 0:U.docs)==null?void 0:E.source}}};const O=["Standard","StandardAllColours","LargeAllColours","SmallAllColours","Inverted","InvertedAllColours"];export{d as Inverted,c as InvertedAllColours,t as LargeAllColours,n as SmallAllColours,l as Standard,a as StandardAllColours,O as __namedExportsOrder,R as default};
