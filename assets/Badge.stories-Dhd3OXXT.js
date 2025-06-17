import{e as r}from"./iframe-BPJhr76J.js";import{B as s}from"./Badge-BuWTNA43.js";const m=["blue","red","green","yellow","neutral"],f={title:"Components/Badge",component:s},l={decorators:[],args:{label:"TITANIUM"}},a={decorators:[o=>r.createElement("div",{style:{display:"grid",gridAutoFlow:"row dense",gridGap:"10px"}},r.createElement("div",{style:{display:"grid",gap:"10px",gridTemplateColumns:"repeat(auto-fit, minmax(10px, max-content))"}},o()))],args:{label:"TITANIUM"},render:o=>r.createElement(r.Fragment,null,m.map(e=>r.createElement(s,{key:e,...o,colour:e})))},n={decorators:a.decorators,args:{label:"TITANIUM",size:"large"},render:o=>r.createElement(r.Fragment,null,m.map(e=>r.createElement(s,{key:e,...o,colour:e})))},t={decorators:a.decorators,args:{label:"TITANIUM",size:"small"},render:o=>r.createElement(r.Fragment,null,m.map(e=>r.createElement(s,{key:e,...o,colour:e})))},d={decorators:a.decorators,args:{label:"TITANIUM",look:"inverted"}},c={decorators:a.decorators,args:{label:"TITANIUM",look:"inverted"},render:o=>r.createElement(r.Fragment,null,m.map(e=>r.createElement(s,{key:e,...o,colour:e})))};var u,p,g;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  decorators: [],
  args: {
    label: 'TITANIUM'
  }
}`,...(g=(p=l.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var i,I,A;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(A=(I=a.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var T,y,S;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  decorators: StandardAllColours.decorators,
  args: {
    label: 'TITANIUM',
    size: 'large'
  },
  render: args => <>
            {colours.map(colour => <Badge key={colour} {...args} colour={colour} />)}
        </>
}`,...(S=(y=n.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var C,v,b;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  decorators: StandardAllColours.decorators,
  args: {
    label: 'TITANIUM',
    size: 'small'
  },
  render: args => <>
            {colours.map(colour => <Badge key={colour} {...args} colour={colour} />)}
        </>
}`,...(b=(v=t.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var k,x,M;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(E=(U=c.parameters)==null?void 0:U.docs)==null?void 0:E.source}}};const w=["Standard","StandardAllColours","LargeAllColours","SmallAllColours","Inverted","InvertedAllColours"];export{d as Inverted,c as InvertedAllColours,n as LargeAllColours,t as SmallAllColours,l as Standard,a as StandardAllColours,w as __namedExportsOrder,f as default};
