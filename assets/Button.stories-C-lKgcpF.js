import{e,B as f}from"./iframe-Bw60F3r3.js";import{I as t}from"./Icon-DL18B8I0.js";import{I as E}from"./Inline-BWeOzgzx.js";import{B as r}from"./Button-C8Kz0zNw.js";import{I as v}from"./ArrowLeftIcon-vmfflyxu.js";import{I as o}from"./AccountBoxIcon-CsWm_v5u.js";import"./resolveResponsiveProps-DGdp35wv.js";import"./Text-Dp2MR2jg.js";import"./ProgressSpinner-DSbr-4aD.js";const{fn:b}=__STORYBOOK_MODULE_TEST__,P={title:"Primitives/Buttons",tags:["polymorphic"],component:r,args:{variant:"secondary",size:"medium",minimal:!1,rounded:!1,children:void 0,isFullWidth:!1,isLoading:!1,disabled:!1,as:void 0,onClick:b(),withDoubleClicks:!1,testId:"storybook-button"},argTypes:{as:{options:["button","a"]}}},c={args:{children:"Login"}},s={args:{children:e.createElement(e.Fragment,null,e.createElement(t,{icon:v}),"Change car"),size:"xsmall",rounded:!0}},i=({children:p,onClick:S,variant:y})=>e.createElement(e.Fragment,null,["medium","small"].map(g=>{const a={children:p,onClick:S,size:g,variant:y};return e.createElement(e.Fragment,null,e.createElement(f,{textAlign:"right",style:{textTransform:"capitalize"}},g),e.createElement(E,{space:"3"},e.createElement(r,{...a},"Login"),e.createElement(r,{...a},e.createElement(t,{icon:o}),"Login"),e.createElement(r,{...a,"aria-label":"login"},e.createElement(t,{icon:o})),e.createElement(r,{rounded:!0,...a,"aria-label":"login"},e.createElement(t,{icon:o})),e.createElement(r,{isLoading:!0,...a},"A very very very long button Label"),e.createElement(r,{disabled:!0,...a},"Login")),e.createElement("div",null,e.createElement(r,{isFullWidth:!0,...a},"Full Width")),e.createElement(E,{space:"3"},e.createElement(r,{minimal:!0,...a},"Login"),e.createElement(r,{minimal:!0,...a},e.createElement(t,{icon:o}),"Login"),e.createElement(r,{minimal:!0,...a,"aria-label":"login"},e.createElement(t,{icon:o})),e.createElement(r,{minimal:!0,rounded:!0,...a},"1"),e.createElement(r,{minimal:!0,rounded:!0,...a,"aria-label":"login"},e.createElement(t,{icon:o}),"1"),e.createElement(r,{minimal:!0,rounded:!0,...a,"aria-label":"login"},e.createElement(t,{icon:o})),e.createElement(r,{minimal:!0,isLoading:!0,...a},"Login"),e.createElement(r,{minimal:!0,disabled:!0,...a},"Login")))})),n={decorators:[p=>e.createElement("div",{style:{display:"grid",gridGap:"12px",gridAutoFlow:"row dense"}},e.createElement(p,null))],args:{variant:"primary"},render:i},l={decorators:n.decorators,args:{variant:"secondary"},render:i},m={decorators:n.decorators,args:{variant:"information"},render:i},d={decorators:n.decorators,args:{variant:"warning"},render:i},u={decorators:n.decorators,args:{variant:"success"},render:i};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Login'
  }
}`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
                <Icon icon={ArrowLeftIcon} />
                Change car
            </>,
    size: 'xsmall',
    rounded: true
  }
}`,...s.parameters?.docs?.source},description:{story:"Example of a the extra small rounded button with a back arrow icon",...s.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  decorators: PrimarySet.decorators,
  args: {
    variant: 'secondary'
  },
  render: TemplateMulti
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  decorators: PrimarySet.decorators,
  args: {
    variant: 'information'
  },
  render: TemplateMulti
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  decorators: PrimarySet.decorators,
  args: {
    variant: 'warning'
  },
  render: TemplateMulti
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  decorators: PrimarySet.decorators,
  args: {
    variant: 'success'
  },
  render: TemplateMulti
}`,...u.parameters?.docs?.source}}};const B=["Standard","ExtraSmall","PrimarySet","SecondarySet","InformationSet","WarningSet","SuccessSet"];export{s as ExtraSmall,m as InformationSet,n as PrimarySet,l as SecondarySet,c as Standard,u as SuccessSet,d as WarningSet,B as __namedExportsOrder,P as default};
