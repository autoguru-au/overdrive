import{R as e}from"./index-DVCUSwsV.js";import{H as s}from"./Heading-eJ5ITvpa.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./Box-ClEqokAe.js";import"./useTextStyles-DsccIS_S.js";const x=[!1,!0],w=[!1,!0],O=["uppercase","capitalize",void 0],W=["normal","semiBold","bold"],y=["h1","h2","h3","h4","h5","h6"],k=["1","2","3","4","5","6","7","8","9"],f=["dark","light","neutral","primary","secondary","white","information","link","success","danger","warning","shine"],S={title:"Primatives/Heading",component:s,argTypes:{noWrap:{options:x,defaultValue:!1,control:{type:"boolean"}},breakWord:{options:w,defaultValue:!1,control:{type:"boolean"}},transform:{options:O,defaultValue:null,control:{type:"select"}},weight:{options:W,defaultValue:null,control:{type:"select"}},size:{options:k,defaultValue:void 0,control:{type:"select"}},colour:{options:f,defaultValue:void 0,control:{type:"select"}},is:{options:y,defaultValue:"h1",table:{type:{summary:"heading"},defaultValue:"h1"},description:"HTML heading tag to be used",control:{type:"select"}}}},n={args:{as:"h1",children:"I am a heading"},render:a=>e.createElement("div",{style:{maxWidth:"350px",width:"100%"}},e.createElement(s,{...a}))},r={args:{children:"I am a heading"},render:a=>e.createElement("div",{style:{maxWidth:"350px",width:"100%"}},y.map(t=>e.createElement(s,{key:t,...a,as:t})))},o={args:{children:"I am a heading"},render:a=>e.createElement("div",{style:{maxWidth:"350px",width:"100%"}},f.map((t,v)=>e.createElement("div",{key:v,style:{marginBottom:8}},e.createElement(s,{...a,colour:t}))))};var i,d,l;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    as: 'h1',
    children: 'I am a heading'
  },
  render: args => <div style={{
    maxWidth: '350px',
    width: '100%'
  }}>
            <Heading {...args} />
        </div>
}`,...(l=(d=n.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var c,p,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'I am a heading'
  },
  render: args => <div style={{
    maxWidth: '350px',
    width: '100%'
  }}>
            {headingTypeOptions.map(as => <Heading key={as} {...args} as={as} />)}
        </div>
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var h,u,g;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'I am a heading'
  },
  render: args => <div style={{
    maxWidth: '350px',
    width: '100%'
  }}>
            {colourOptions.map((colour, index) => <div key={index} style={{
      marginBottom: 8
    }}>
                    <Heading {...args} colour={colour} />
                </div>)}
        </div>
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const T=["Standard","AllTypes","AllColours"];export{o as AllColours,r as AllTypes,n as Standard,T as __namedExportsOrder,S as default};
