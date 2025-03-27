import{a as g}from"./index-B-lxVbXh.js";import{a as h}from"./argTypes-Bll2w-Fa.js";import{b as ce}from"./argTypes-BLEQHQZP.js";import{T as le}from"./TextInput-D4mphPWC.js";import{I as ne}from"./EmailIcon-CZTVFvMP.js";import{a as ie}from"./CurrencyUsdIcon-DRLnBt55.js";import"./v4-CtRu48qb.js";import"./CheckIcon-Bn_JtJCx.js";import"./index-CIentmI6.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./StarIcon-BW5zhlRG.js";import"./PlusIcon-a_PJVwc9.js";import"./AlertCircleIcon-B6yQnM-8.js";import"./CarIcon-CnMDIGZ2.js";import"./MagnifyIcon-lVfWayKf.js";import"./tokens-Cu0NKl3A.js";import"./makeTheme-BvwTE3C0.js";import"./withEnhancedInput-BhDBp6WX.js";import"./index-D_iG_Vvt.js";import"./Box-Bevh8JBX.js";import"./index--QB1QYf1.js";import"./Text-BOKces_e.js";import"./dataAttrs-C4KudU4k.js";import"./useTextStyles-BBYvKUtt.js";import"./withEnhancedInput.css-BNMQkBDR.js";import"./Icon-CDjFf78x.js";import"./ProgressSpinner-CyLHlAHx.js";const n="user@autoguru.com.au",e="Email address",de={NONE:"NONE",TOP:"TOP",RIGHT:"RIGHT",LEFT:"LEFT",BOTTOM:"BOTTOM",ALL:"ALL"},ke={title:"Forms & Input Fields/Text Input",component:le,args:{disabled:!1,name:"text",placeholder:e,isValid:!1,isTouched:!1,isLoading:!1,isFocused:!1,reserveHintSpace:!1,hintText:"",notch:!0,prefixIcon:void 0,type:"email",onChange:g("onChange"),onFocus:g("onFocus"),onBlur:g("onBlur")},argTypes:{attach:{defaultValue:"NONE",description:"Input attach",options:Object.keys(de),control:{type:"select"}},prefixIcon:{...h,defaultValue:null,description:"Input prefix Icon"},suffixIcon:{...h,defaultValue:null,description:"Input suffix Icon"},backgroundColour:ce.backgroundColour,maxLength:{defaultValue:null,description:"Set the max length of the input",control:{type:"number"}}}},r={},t={args:{value:n,placeholder:e}},c={args:{value:n,placeholder:e,isTouched:!0,isValid:!0}},l={args:{value:"user@autogur",placeholder:e,isTouched:!0,isValid:!1,hintText:"Please enter a full email address"}},i={args:{value:n,placeholder:e,disabled:!0}},d={args:{...t.args,prefixIcon:ne,size:"small"}},p={args:{hintText:"Hint Text",placeholder:e}},u={args:{value:n,placeholder:e,notch:!1}},a={args:{prefixIcon:ne,suffixIcon:ie}},m={args:{value:n.slice(0,-5),isLoading:!0}},s={args:{attach:"ALL"}},o={args:{borderMerged:"ALL"}};var f,x,T,I,L;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(T=(x=r.parameters)==null?void 0:x.docs)==null?void 0:T.source},description:{story:'These input instances have the `type="email"` attribute since it\'s displaying an email address',...(L=(I=r.parameters)==null?void 0:I.docs)==null?void 0:L.description}}};var S,b,v;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    value: defaultValue,
    placeholder: defaultPlaceholder
  }
}`,...(v=(b=t.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var V,A,y;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    value: defaultValue,
    placeholder: defaultPlaceholder,
    isTouched: true,
    isValid: true
  }
}`,...(y=(A=c.parameters)==null?void 0:A.docs)==null?void 0:y.source}}};var O,E,P;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    value: 'user@autogur',
    placeholder: defaultPlaceholder,
    isTouched: true,
    isValid: false,
    hintText: 'Please enter a full email address'
  }
}`,...(P=(E=l.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var F,N,H;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    value: defaultValue,
    placeholder: defaultPlaceholder,
    disabled: true
  }
}`,...(H=(N=i.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};var M,W,B;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    prefixIcon: EmailIcon,
    size: 'small'
  }
}`,...(B=(W=d.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var z,C,k;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    hintText: 'Hint Text',
    placeholder: defaultPlaceholder
  }
}`,...(k=(C=p.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var D,G,R;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    value: defaultValue,
    placeholder: defaultPlaceholder,
    notch: false
  }
}`,...(R=(G=u.parameters)==null?void 0:G.docs)==null?void 0:R.source}}};var _,j,$,q,w;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    prefixIcon: EmailIcon,
    suffixIcon: AccountEditIcon
  }
}`,...($=(j=a.parameters)==null?void 0:j.docs)==null?void 0:$.source},description:{story:"Both prefix and suffix icons",...(w=(q=a.parameters)==null?void 0:q.docs)==null?void 0:w.description}}};var J,K,Q;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    value: defaultValue.slice(0, -5),
    isLoading: true
  }
}`,...(Q=(K=m.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y,Z,ee;s.parameters={...s.parameters,docs:{...(U=s.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    attach: 'ALL'
  }
}`,...(Y=(X=s.parameters)==null?void 0:X.docs)==null?void 0:Y.source},description:{story:"Attached border option set to all",...(ee=(Z=s.parameters)==null?void 0:Z.docs)==null?void 0:ee.description}}};var re,ae,se,oe,te;o.parameters={...o.parameters,docs:{...(re=o.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    borderMerged: 'ALL'
  }
}`,...(se=(ae=o.parameters)==null?void 0:ae.docs)==null?void 0:se.source},description:{story:"Merged border option set all",...(te=(oe=o.parameters)==null?void 0:oe.docs)==null?void 0:te.description}}};const De=["Standard","Filled","Valid","Invalid","Disabled","SmallSize","WithHintText","WithoutNotchLabel","WithIcons","Loading","AttachedAll","MergedAll"];export{s as AttachedAll,i as Disabled,t as Filled,l as Invalid,m as Loading,o as MergedAll,d as SmallSize,r as Standard,c as Valid,p as WithHintText,a as WithIcons,u as WithoutNotchLabel,De as __namedExportsOrder,ke as default};
