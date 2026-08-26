import{e,B as f}from"./iframe-knNj_dc4.js";import{F as S}from"./FlexInline-Bk50ppJw.js";import{I as n}from"./Icon-Pa4szK58.js";import{B as r}from"./Button-_xGdpBwV.js";import{I as h}from"./ArrowLeftIcon-DrN1NiwH.js";import{I as o}from"./UserSquareIcon-Bo_mneH-.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-te1JVRl7.js";import"./resolveResponsiveProps-B51dRZJs.js";import"./ProgressSpinner-twp3-hnc.js";const{fn:w}=__STORYBOOK_MODULE_TEST__,k={title:"Primitives/Buttons",tags:["polymorphic"],component:r,args:{as:"button",variant:"secondary",size:"medium",minimal:!1,outlined:!1,rounded:!1,isFullWidth:!1,isLoading:!1,disabled:!1,withDoubleClicks:!1,children:void 0,localeText:void 0,testId:"storybook-button",onClick:w()},argTypes:{as:{options:["button","a"]}}},l={args:{children:"Login"}},i={args:{children:e.createElement(e.Fragment,null,e.createElement(n,{icon:h}),"Change car"),size:"xsmall",rounded:!0}},s=({children:g,onClick:y,outlined:v,variant:b})=>e.createElement(e.Fragment,null,["medium","small"].map(E=>{const a={children:g,onClick:y,outlined:v,size:E,variant:b};return e.createElement(e.Fragment,null,e.createElement(f,{textAlign:"right",style:{textTransform:"capitalize"}},E),e.createElement(S,{gap:"3"},e.createElement(r,{...a},"Login"),e.createElement(r,{...a},e.createElement(n,{icon:o}),"Login"),e.createElement(r,{...a,"aria-label":"login"},e.createElement(n,{icon:o})),e.createElement(r,{rounded:!0,...a,"aria-label":"login"},e.createElement(n,{icon:o})),e.createElement(r,{isLoading:!0,...a},"A very very very long button Label"),e.createElement(r,{disabled:!0,...a},"Login")),e.createElement("div",null,e.createElement(r,{isFullWidth:!0,...a},"Full Width")),e.createElement(S,{gap:"3"},e.createElement(r,{minimal:!0,...a},"Login"),e.createElement(r,{minimal:!0,...a},e.createElement(n,{icon:o}),"Login"),e.createElement(r,{minimal:!0,...a,"aria-label":"login"},e.createElement(n,{icon:o})),e.createElement(r,{minimal:!0,rounded:!0,...a},"1"),e.createElement(r,{minimal:!0,rounded:!0,...a,"aria-label":"login"},e.createElement(n,{icon:o}),"1"),e.createElement(r,{minimal:!0,rounded:!0,...a,"aria-label":"login"},e.createElement(n,{icon:o})),e.createElement(r,{minimal:!0,isLoading:!0,...a},"Login"),e.createElement(r,{minimal:!0,disabled:!0,...a},"Login")))})),t={decorators:[g=>e.createElement("div",{style:{display:"grid",gridGap:"12px",gridAutoFlow:"row dense"}},e.createElement(g,null))],args:{variant:"primary"},render:s},m={decorators:t.decorators,args:{variant:"secondary"},render:s},d={decorators:t.decorators,args:{variant:"information"},render:s},u={decorators:t.decorators,args:{variant:"warning"},render:s},p={decorators:t.decorators,args:{variant:"success"},render:s},c={decorators:t.decorators,args:{variant:"primary",outlined:!0},render:s};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Login'
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
                <Icon icon={ArrowLeftIcon} />
                Change car
            </>,
    size: 'xsmall',
    rounded: true
  }
}`,...i.parameters?.docs?.source},description:{story:"Example of a the extra small rounded button with a back arrow icon",...i.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  decorators: PrimarySet.decorators,
  args: {
    variant: 'secondary'
  },
  render: TemplateMulti
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  decorators: PrimarySet.decorators,
  args: {
    variant: 'information'
  },
  render: TemplateMulti
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  decorators: PrimarySet.decorators,
  args: {
    variant: 'warning'
  },
  render: TemplateMulti
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  decorators: PrimarySet.decorators,
  args: {
    variant: 'success'
  },
  render: TemplateMulti
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  decorators: PrimarySet.decorators,
  args: {
    variant: 'primary',
    outlined: true
  },
  render: TemplateMulti
}`,...c.parameters?.docs?.source},description:{story:"The outlined primary button — transparent fill, brand border, brand label.\n\nIts colours come from the `color.button.primary.outlined.*` tokens, which a\ntenant re-brands at runtime through `OverdriveProvider`'s `colorOverrides`.\nThe `minimal` rows below show `minimal` correctly winning over `outlined`.",...c.parameters?.docs?.description}}};const A=["Standard","ExtraSmall","PrimarySet","SecondarySet","InformationSet","WarningSet","SuccessSet","PrimaryOutlinedSet"];export{i as ExtraSmall,d as InformationSet,c as PrimaryOutlinedSet,t as PrimarySet,m as SecondarySet,l as Standard,p as SuccessSet,u as WarningSet,A as __namedExportsOrder,k as default};
