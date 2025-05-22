import{e,B as K}from"./iframe-C_bA5shj.js";import{I as t}from"./Icon-BzD9lmaF.js";import{I as E}from"./Inline-r3ivNJ6m.js";import{B as r}from"./Button-DlNVolKd.js";import{I as R}from"./ArrowLeftIcon-rsC1U6dx.js";import{I as o}from"./AccountBoxIcon-CGrnhSO2.js";import"./resolveResponsiveProps-CWlS2Mbp.js";import"./Text-Bu_KMAJq.js";import"./ProgressSpinner-DKoyI-KV.js";const{fn:U}=__STORYBOOK_MODULE_TEST__,Z={title:"Primatives/Buttons",tags:["polymorphic"],component:r,args:{variant:"secondary",size:"medium",minimal:!1,rounded:!1,children:void 0,isFullWidth:!1,isLoading:!1,disabled:!1,is:void 0,onClick:U(),withDoubleClicks:!1,testId:"storybook-button"},argTypes:{is:{options:["button","a"]}}},c={args:{children:"Login"}},s={args:{children:e.createElement(e.Fragment,null,e.createElement(t,{icon:R}),"Change car"),size:"xsmall",rounded:!0}},i=({children:p,onClick:G,variant:$})=>e.createElement(e.Fragment,null,["medium","small"].map(g=>{const a={children:p,onClick:G,size:g,variant:$};return e.createElement(e.Fragment,null,e.createElement(K,{textAlign:"right",style:{textTransform:"capitalize"}},g),e.createElement(E,{space:"3"},e.createElement(r,{...a},"Login"),e.createElement(r,{...a},e.createElement(t,{icon:o}),"Login"),e.createElement(r,{...a,"aria-label":"login"},e.createElement(t,{icon:o})),e.createElement(r,{rounded:!0,...a,"aria-label":"login"},e.createElement(t,{icon:o})),e.createElement(r,{isLoading:!0,...a},"A very very very long button Label"),e.createElement(r,{disabled:!0,...a},"Login")),e.createElement("div",null,e.createElement(r,{isFullWidth:!0,...a},"Full Width")),e.createElement(E,{space:"3"},e.createElement(r,{minimal:!0,...a},"Login"),e.createElement(r,{minimal:!0,...a},e.createElement(t,{icon:o}),"Login"),e.createElement(r,{minimal:!0,...a,"aria-label":"login"},e.createElement(t,{icon:o})),e.createElement(r,{minimal:!0,rounded:!0,...a},"1"),e.createElement(r,{minimal:!0,rounded:!0,...a,"aria-label":"login"},e.createElement(t,{icon:o}),"1"),e.createElement(r,{minimal:!0,rounded:!0,...a,"aria-label":"login"},e.createElement(t,{icon:o})),e.createElement(r,{minimal:!0,isLoading:!0,...a},"Login"),e.createElement(r,{minimal:!0,disabled:!0,...a},"Login")))})),n={decorators:[p=>e.createElement("div",{style:{display:"grid",gridGap:"12px",gridAutoFlow:"row dense"}},e.createElement(p,null))],args:{variant:"primary"},render:i},l={decorators:n.decorators,args:{variant:"secondary"},render:i},m={decorators:n.decorators,args:{variant:"information"},render:i},d={decorators:n.decorators,args:{variant:"warning"},render:i},u={decorators:n.decorators,args:{variant:"success"},render:i};var S,y,f;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'Login'
  }
}`,...(f=(y=c.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var v,b,h,L,x;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: <>
                <Icon icon={ArrowLeftIcon} />
                Change car
            </>,
    size: 'xsmall',
    rounded: true
  }
}`,...(h=(b=s.parameters)==null?void 0:b.docs)==null?void 0:h.source},description:{story:"Example of a the extra small rounded button with a back arrow icon",...(x=(L=s.parameters)==null?void 0:L.docs)==null?void 0:x.description}}};var I,T,w;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    display: 'grid',
    gridGap: '12px',
    gridAutoFlow: 'row dense'
  }}>
                <Story />
            </div>],
  args: {
    variant: 'primary'
  },
  render: TemplateMulti
}`,...(w=(T=n.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var F,_,M;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  decorators: PrimarySet.decorators,
  args: {
    variant: 'secondary'
  },
  render: TemplateMulti
}`,...(M=(_=l.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var P,B,A;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  decorators: PrimarySet.decorators,
  args: {
    variant: 'information'
  },
  render: TemplateMulti
}`,...(A=(B=m.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var O,W,k;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  decorators: PrimarySet.decorators,
  args: {
    variant: 'warning'
  },
  render: TemplateMulti
}`,...(k=(W=d.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var C,z,D;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  decorators: PrimarySet.decorators,
  args: {
    variant: 'success'
  },
  render: TemplateMulti
}`,...(D=(z=u.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};const ee=["Standard","ExtraSmall","PrimarySet","SecondarySet","InformationSet","WarningSet","SuccessSet"];export{s as ExtraSmall,m as InformationSet,n as PrimarySet,l as SecondarySet,c as Standard,u as SuccessSet,d as WarningSet,ee as __namedExportsOrder,Z as default};
