import{a as h}from"./argTypes-yosfBw2I.js";import{b as T}from"./argTypes-box-CRUkLFl3.js";import{T as x}from"./TextInput-HNEi1XsI.js";import{I as f}from"./EmailIcon-BVegXgAM.js";import{b as I}from"./CurrencyUsdIcon-Cb3vmfMV.js";import"./CheckIcon-BaYN2ktu.js";import"./iframe-PgZJ2afo.js";import"./preload-helper-D9Z9MdNV.js";import"./StarIcon-Ds4gfD0C.js";import"./PlusIcon-Dq84puHS.js";import"./AlertCircleIcon-BhUyTtFo.js";import"./PhoneIcon-CtNr_bCS.js";import"./MagnifyIcon-Cgxx0NtY.js";import"./withEnhancedInput-BR3JA5T-.js";import"./Icon-C4-JpBuo.js";import"./resolveResponsiveProps-CdSEa9T5.js";import"./ProgressSpinner-B7o5Hl7X.js";import"./Text-BWnBe8RO.js";import"./withEnhancedInput.css-qqrRJH-6.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,n="user@autoguru.com.au",e="Email address",L={NONE:"NONE",TOP:"TOP",RIGHT:"RIGHT",LEFT:"LEFT",BOTTOM:"BOTTOM",ALL:"ALL"},D={title:"Forms & Input Fields/Text Input",component:x,args:{disabled:!1,name:"text",placeholder:e,isValid:!1,isTouched:!1,isLoading:!1,isFocused:!1,reserveHintSpace:!1,hintText:"",notch:!0,prefixIcon:void 0,type:"email",onChange:g("onChange"),onFocus:g("onFocus"),onBlur:g("onBlur")},argTypes:{attach:{defaultValue:"NONE",description:"Input attach",options:Object.keys(L),control:{type:"select"}},prefixIcon:{...h,defaultValue:null,description:"Input prefix Icon"},suffixIcon:{...h,defaultValue:null,description:"Input suffix Icon"},backgroundColour:T.backgroundColour,maxLength:{defaultValue:null,description:"Set the max length of the input",control:{type:"number"}}}},r={},t={args:{value:n,placeholder:e}},c={args:{value:n,placeholder:e,isTouched:!0,isValid:!0}},l={args:{value:"user@autogur",placeholder:e,isTouched:!0,isValid:!1,hintText:"Please enter a full email address"}},i={args:{value:n,placeholder:e,disabled:!0}},d={args:{...t.args,prefixIcon:f,size:"small"}},u={args:{hintText:"Hint Text",placeholder:e}},p={args:{value:n,placeholder:e,notch:!1}},a={args:{prefixIcon:f,suffixIcon:I}},m={args:{value:n.slice(0,-5),isLoading:!0}},s={args:{attach:"ALL"}},o={args:{borderMerged:"ALL"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source},description:{story:'These input instances have the `type="email"` attribute since it\'s displaying an email address',...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
    prefixIcon: EmailIcon,
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
    prefixIcon: EmailIcon,
    suffixIcon: AccountEditIcon
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
}`,...o.parameters?.docs?.source},description:{story:"Merged border option set all",...o.parameters?.docs?.description}}};const R=["Standard","Filled","Valid","Invalid","Disabled","SmallSize","WithHintText","WithoutNotchLabel","WithIcons","Loading","AttachedAll","MergedAll"];export{s as AttachedAll,i as Disabled,t as Filled,l as Invalid,m as Loading,o as MergedAll,d as SmallSize,r as Standard,c as Valid,u as WithHintText,a as WithIcons,p as WithoutNotchLabel,R as __namedExportsOrder,D as default};
