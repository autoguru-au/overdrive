import{R as e}from"./index-Cr_cdoBq.js";import{H as s}from"./Heading-DojwlpJi.js";import"./_commonjsHelpers-C932wzq6.js";import"./dataAttrs-BPvLuXwN.js";import"./Box-B8HP0AOd.js";import"./useTextStyles-Db9gttPw.js";const x=[!1,!0],w=[!1,!0],O=["uppercase","capitalize",void 0],V=["normal","semiBold","bold"],y=["h1","h2","h3","h4","h5","h6"],W=["1","2","3","4","5","6","7","8","9"],k=["left","center","right"],f=["dark","light","neutral","primary","secondary","white","information","link","success","danger","warning","shine"],A={title:"Primatives/Heading",component:s,argTypes:{noWrap:{options:x,defaultValue:!1,control:{type:"boolean"}},breakWord:{options:w,defaultValue:!1,control:{type:"boolean"}},transform:{options:O,defaultValue:null,control:{type:"select"}},weight:{options:V,defaultValue:null,control:{type:"select"}},size:{options:W,defaultValue:void 0,control:{type:"select"}},align:{options:k,defaultValue:"left",control:{type:"select"}},colour:{options:f,defaultValue:void 0,control:{type:"select"}},is:{options:y,defaultValue:"h1",table:{type:{summary:"heading"},defaultValue:"h1"},description:"HTML heading tag to be used",control:{type:"select"}}}},n={args:{is:"h1",children:"I am a heading"},render:t=>e.createElement("div",{style:{maxWidth:"350px",width:"100%"}},e.createElement(s,{...t}))},r={args:{children:"I am a heading"},render:t=>e.createElement("div",{style:{maxWidth:"350px",width:"100%"}},y.map(a=>e.createElement(s,{key:a,...t,is:a})))},o={args:{children:"I am a heading"},render:t=>e.createElement("div",{style:{maxWidth:"350px",width:"100%"}},f.map((a,v)=>e.createElement("div",{key:v,style:{marginBottom:8}},e.createElement(s,{...t,colour:a}))))};var i,l,d;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    is: 'h1',
    children: 'I am a heading'
  },
  render: args => <div style={{
    maxWidth: '350px',
    width: '100%'
  }}>
            <Heading {...args} />
        </div>
}`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,p,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'I am a heading'
  },
  render: args => <div style={{
    maxWidth: '350px',
    width: '100%'
  }}>
            {headingTypeOptions.map(is => <Heading key={is} {...args} is={is} />)}
        </div>
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,h,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const B=["Standard","AllTypes","AllColours"];export{o as AllColours,r as AllTypes,n as Standard,B as __namedExportsOrder,A as default};
