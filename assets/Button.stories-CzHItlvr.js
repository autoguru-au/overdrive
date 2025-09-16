import{e,B as f}from"./iframe-ilUwcptX.js";import{F as E}from"./FlexInline-Bdgux0-Z.js";import{I as t}from"./Icon-DIVFT0TM.js";import{B as r}from"./Button-B9wh2I7n.js";import{I as v}from"./ArrowLeftIcon-BV2CfXO7.js";import{I as o}from"./AccountBoxIcon-mEQ3drHv.js";import"./preload-helper-D9Z9MdNV.js";import"./flex-BfQbQ2qz.js";import"./resolveResponsiveProps-CDLJUN0S.js";import"./ProgressSpinner-g4eEavT9.js";const{fn:b}=__STORYBOOK_MODULE_TEST__,B={title:"Primitives/Buttons",tags:["polymorphic"],component:r,args:{as:"button",variant:"secondary",size:"medium",minimal:!1,rounded:!1,isFullWidth:!1,isLoading:!1,disabled:!1,withDoubleClicks:!1,children:void 0,localeText:void 0,testId:"storybook-button",onClick:b()},argTypes:{as:{options:["button","a"]}}},c={args:{children:"Login"}},s={args:{children:e.createElement(e.Fragment,null,e.createElement(t,{icon:v}),"Change car"),size:"xsmall",rounded:!0}},i=({children:p,onClick:S,variant:y})=>e.createElement(e.Fragment,null,["medium","small"].map(g=>{const a={children:p,onClick:S,size:g,variant:y};return e.createElement(e.Fragment,null,e.createElement(f,{textAlign:"right",style:{textTransform:"capitalize"}},g),e.createElement(E,{gap:"3"},e.createElement(r,{...a},"Login"),e.createElement(r,{...a},e.createElement(t,{icon:o}),"Login"),e.createElement(r,{...a,"aria-label":"login"},e.createElement(t,{icon:o})),e.createElement(r,{rounded:!0,...a,"aria-label":"login"},e.createElement(t,{icon:o})),e.createElement(r,{isLoading:!0,...a},"A very very very long button Label"),e.createElement(r,{disabled:!0,...a},"Login")),e.createElement("div",null,e.createElement(r,{isFullWidth:!0,...a},"Full Width")),e.createElement(E,{gap:"3"},e.createElement(r,{minimal:!0,...a},"Login"),e.createElement(r,{minimal:!0,...a},e.createElement(t,{icon:o}),"Login"),e.createElement(r,{minimal:!0,...a,"aria-label":"login"},e.createElement(t,{icon:o})),e.createElement(r,{minimal:!0,rounded:!0,...a},"1"),e.createElement(r,{minimal:!0,rounded:!0,...a,"aria-label":"login"},e.createElement(t,{icon:o}),"1"),e.createElement(r,{minimal:!0,rounded:!0,...a,"aria-label":"login"},e.createElement(t,{icon:o})),e.createElement(r,{minimal:!0,isLoading:!0,...a},"Login"),e.createElement(r,{minimal:!0,disabled:!0,...a},"Login")))})),n={decorators:[p=>e.createElement("div",{style:{display:"grid",gridGap:"12px",gridAutoFlow:"row dense"}},e.createElement(p,null))],args:{variant:"primary"},render:i},l={decorators:n.decorators,args:{variant:"secondary"},render:i},m={decorators:n.decorators,args:{variant:"information"},render:i},d={decorators:n.decorators,args:{variant:"warning"},render:i},u={decorators:n.decorators,args:{variant:"success"},render:i};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const A=["Standard","ExtraSmall","PrimarySet","SecondarySet","InformationSet","WarningSet","SuccessSet"];export{s as ExtraSmall,m as InformationSet,n as PrimarySet,l as SecondarySet,c as Standard,u as SuccessSet,d as WarningSet,A as __namedExportsOrder,B as default};
