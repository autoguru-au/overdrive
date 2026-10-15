import{a as h}from"./argTypes-6N01ck96.js";import{b as T}from"./argTypes-box-DoE29OMZ.js";import{T as I}from"./TextInput-BKNDI3pw.js";import{I as f}from"./EnvelopeIcon-CtB0VOBj.js";import{I as x}from"./NotePencilIcon-CoTjBRqy.js";import"./CheckIcon-_FBtuInb.js";import"./iframe-DYr4QcUl.js";import"./preload-helper-PPVm8Dsz.js";import"./StarIcon-Dn-YWgFc.js";import"./PlusIcon-DzoP_3id.js";import"./CurrencyDollarIcon-K6Anyh5h.js";import"./AlertCircleIcon-BSCQXFmB.js";import"./PhoneIcon-Dlt5pIQe.js";import"./MagnifyingGlassIcon-8yEvF4ep.js";import"./withEnhancedInput-BfF1Slyx.js";import"./Icon-ClIl3lqs.js";import"./resolveResponsiveProps-CwCD898-.js";import"./ProgressSpinner-CBe-pJ1U.js";import"./Text-_NqxEwbM.js";import"./withEnhancedInput.css-3hGivdVO.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,n="user@autoguru.com.au",e="Email address",L={NONE:"NONE",TOP:"TOP",RIGHT:"RIGHT",LEFT:"LEFT",BOTTOM:"BOTTOM",ALL:"ALL"},R={title:"Forms & Input Fields/Text Input",component:I,args:{disabled:!1,name:"text",placeholder:e,isValid:!1,isTouched:!1,isLoading:!1,isFocused:!1,reserveHintSpace:!1,hintText:"",notch:!0,prefixIcon:void 0,type:"email",onChange:g("onChange"),onFocus:g("onFocus"),onBlur:g("onBlur")},argTypes:{attach:{defaultValue:"NONE",description:"Input attach",options:Object.keys(L),control:{type:"select"}},prefixIcon:{...h,defaultValue:null,description:"Input prefix Icon"},suffixIcon:{...h,defaultValue:null,description:"Input suffix Icon"},backgroundColour:T.backgroundColour,maxLength:{defaultValue:null,description:"Set the max length of the input",control:{type:"number"}}}},r={},t={args:{value:n,placeholder:e}},c={args:{value:n,placeholder:e,isTouched:!0,isValid:!0}},l={args:{value:"user@autogur",placeholder:e,isTouched:!0,isValid:!1,hintText:"Please enter a full email address"}},i={args:{value:n,placeholder:e,disabled:!0}},d={args:{...t.args,prefixIcon:f,size:"small"}},u={args:{hintText:"Hint Text",placeholder:e}},p={args:{value:n,placeholder:e,notch:!1}},a={args:{prefixIcon:f,suffixIcon:x}},m={args:{value:n.slice(0,-5),isLoading:!0}},s={args:{attach:"ALL"}},o={args:{borderMerged:"ALL"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source},description:{story:'These input instances have the `type="email"` attribute since it\'s displaying an email address',...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    value: defaultValue,
    placeholder: defaultPlaceholder
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    value: defaultValue,
    placeholder: defaultPlaceholder,
    isTouched: true,
    isValid: true
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'user@autogur',
    placeholder: defaultPlaceholder,
    isTouched: true,
    isValid: false,
    hintText: 'Please enter a full email address'
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    value: defaultValue,
    placeholder: defaultPlaceholder,
    disabled: true
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    prefixIcon: EnvelopeIcon,
    size: 'small'
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    hintText: 'Hint Text',
    placeholder: defaultPlaceholder
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    value: defaultValue,
    placeholder: defaultPlaceholder,
    notch: false
  }
}`,...p.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    prefixIcon: EnvelopeIcon,
    suffixIcon: NotePencilIcon
  }
}`,...a.parameters?.docs?.source},description:{story:"Both prefix and suffix icons",...a.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    value: defaultValue.slice(0, -5),
    isLoading: true
  }
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    attach: 'ALL'
  }
}`,...s.parameters?.docs?.source},description:{story:"Attached border option set to all",...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    borderMerged: 'ALL'
  }
}`,...o.parameters?.docs?.source},description:{story:"Merged border option set all",...o.parameters?.docs?.description}}};const G=["Standard","Filled","Valid","Invalid","Disabled","SmallSize","WithHintText","WithoutNotchLabel","WithIcons","Loading","AttachedAll","MergedAll"];export{s as AttachedAll,i as Disabled,t as Filled,l as Invalid,m as Loading,o as MergedAll,d as SmallSize,r as Standard,c as Valid,u as WithHintText,a as WithIcons,p as WithoutNotchLabel,G as __namedExportsOrder,R as default};
