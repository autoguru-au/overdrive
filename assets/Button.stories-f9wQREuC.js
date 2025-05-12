import{f as O}from"./index-mRD-OtaA.js";import{R as e}from"./index-DVCUSwsV.js";import{B as r}from"./Button-oTWH8QOX.js";import{I as t}from"./Icon-DdhtP5AX.js";import{I as j}from"./ArrowLeftIcon-DbBlxnL0.js";import{I as o}from"./AccountBoxIcon-mnox3Dg_.js";import{B as q}from"./Box-Daq3CeQj.js";import{I as E}from"./Inline-QBFcBq5c.js";import"./_commonjsHelpers-gnU0ypJ3.js";/* empty css                                    */import"./createRuntimeFn-62c9670f.esm-BkdTE7RR.js";import"./useTextStyles-DdOkPJce.js";import"./ProgressSpinner-BpFyV377.js";import"./resolveResponsiveProps-xS_DNhU6.js";import"./index-4KvmGZzY.js";import"./Text--khTZFS_.js";const se={title:"Primatives/Buttons",component:r,args:{variant:"secondary",size:"medium",minimal:!1,rounded:!1,children:void 0,isFullWidth:!1,isLoading:!1,disabled:!1,is:void 0,onClick:O(),withDoubleClicks:!1,testId:"storybook-button"},argTypes:{is:{options:["button","a"]}}},c={args:{children:"Login"}},s={args:{children:e.createElement(e.Fragment,null,e.createElement(t,{icon:j}),"Change car"),size:"xsmall",rounded:!0}},i=({children:p,onClick:$,variant:D})=>e.createElement(e.Fragment,null,["medium","small"].map(g=>{const a={children:p,onClick:$,size:g,variant:D};return e.createElement(e.Fragment,null,e.createElement(q,{textAlign:"right",style:{textTransform:"capitalize"}},g),e.createElement(E,{space:"3"},e.createElement(r,{...a},"Login"),e.createElement(r,{...a},e.createElement(t,{icon:o}),"Login"),e.createElement(r,{...a,"aria-label":"login"},e.createElement(t,{icon:o})),e.createElement(r,{rounded:!0,...a,"aria-label":"login"},e.createElement(t,{icon:o})),e.createElement(r,{isLoading:!0,...a},"A very very very long button Label"),e.createElement(r,{disabled:!0,...a},"Login")),e.createElement("div",null,e.createElement(r,{isFullWidth:!0,...a},"Full Width")),e.createElement(E,{space:"3"},e.createElement(r,{minimal:!0,...a},"Login"),e.createElement(r,{minimal:!0,...a},e.createElement(t,{icon:o}),"Login"),e.createElement(r,{minimal:!0,...a,"aria-label":"login"},e.createElement(t,{icon:o})),e.createElement(r,{minimal:!0,rounded:!0,...a},"1"),e.createElement(r,{minimal:!0,rounded:!0,...a,"aria-label":"login"},e.createElement(t,{icon:o}),"1"),e.createElement(r,{minimal:!0,rounded:!0,...a,"aria-label":"login"},e.createElement(t,{icon:o})),e.createElement(r,{minimal:!0,isLoading:!0,...a},"Login"),e.createElement(r,{minimal:!0,disabled:!0,...a},"Login")))})),n={decorators:[p=>e.createElement("div",{style:{display:"grid",gridGap:"12px",gridAutoFlow:"row dense"}},e.createElement(p,null))],args:{variant:"primary"},render:i},m={decorators:n.decorators,args:{variant:"secondary"},render:i},l={decorators:n.decorators,args:{variant:"information"},render:i},d={decorators:n.decorators,args:{variant:"warning"},render:i},u={decorators:n.decorators,args:{variant:"success"},render:i};var S,y,f;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(h=(b=s.parameters)==null?void 0:b.docs)==null?void 0:h.source},description:{story:"Example of a the extra small rounded button with a back arrow icon",...(x=(L=s.parameters)==null?void 0:L.docs)==null?void 0:x.description}}};var I,w,F;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(F=(w=n.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var T,P,M;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  decorators: PrimarySet.decorators,
  args: {
    variant: 'secondary'
  },
  render: TemplateMulti
}`,...(M=(P=m.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var A,B,W;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  decorators: PrimarySet.decorators,
  args: {
    variant: 'information'
  },
  render: TemplateMulti
}`,...(W=(B=l.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};var k,C,z;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  decorators: PrimarySet.decorators,
  args: {
    variant: 'warning'
  },
  render: TemplateMulti
}`,...(z=(C=d.parameters)==null?void 0:C.docs)==null?void 0:z.source}}};var G,R,_;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  decorators: PrimarySet.decorators,
  args: {
    variant: 'success'
  },
  render: TemplateMulti
}`,...(_=(R=u.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};const ie=["Standard","ExtraSmall","PrimarySet","SecondarySet","InformationSet","WarningSet","SuccessSet"];export{s as ExtraSmall,l as InformationSet,n as PrimarySet,m as SecondarySet,c as Standard,u as SuccessSet,d as WarningSet,ie as __namedExportsOrder,se as default};
