import{a as h}from"./argTypes-CaBVLu4n.js";import{b as ce}from"./argTypes-box-6RL_rRk-.js";import{T as le}from"./TextInput-arR0G12b.js";import{I as ne}from"./EmailIcon-BqaU9oV4.js";import{b as ie}from"./CurrencyUsdIcon-pg9owQqQ.js";import"./CheckIcon-BnIDR_qF.js";import"./iframe-BPJhr76J.js";import"./StarIcon-DtJfIWmE.js";import"./PlusIcon-DaTBKoPL.js";import"./AlertCircleIcon-CrC2FFHn.js";import"./PhoneIcon-Co8PLIOs.js";import"./MagnifyIcon-CdCxxHji.js";import"./withEnhancedInput-BiHVdbaS.js";import"./Icon-D8YYTUq2.js";import"./resolveResponsiveProps-DXxr8mrg.js";import"./ProgressSpinner-6peMk8TN.js";import"./Text-3IOoZozm.js";import"./useTextStyles-D4FwBGMO.js";import"./withEnhancedInput.css-8rkb5nL6.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,n="user@autoguru.com.au",e="Email address",de={NONE:"NONE",TOP:"TOP",RIGHT:"RIGHT",LEFT:"LEFT",BOTTOM:"BOTTOM",ALL:"ALL"},Fe={title:"Forms & Input Fields/Text Input",component:le,args:{disabled:!1,name:"text",placeholder:e,isValid:!1,isTouched:!1,isLoading:!1,isFocused:!1,reserveHintSpace:!1,hintText:"",notch:!0,prefixIcon:void 0,type:"email",onChange:g("onChange"),onFocus:g("onFocus"),onBlur:g("onBlur")},argTypes:{attach:{defaultValue:"NONE",description:"Input attach",options:Object.keys(de),control:{type:"select"}},prefixIcon:{...h,defaultValue:null,description:"Input prefix Icon"},suffixIcon:{...h,defaultValue:null,description:"Input suffix Icon"},backgroundColour:ce.backgroundColour,maxLength:{defaultValue:null,description:"Set the max length of the input",control:{type:"number"}}}},r={},t={args:{value:n,placeholder:e}},c={args:{value:n,placeholder:e,isTouched:!0,isValid:!0}},l={args:{value:"user@autogur",placeholder:e,isTouched:!0,isValid:!1,hintText:"Please enter a full email address"}},i={args:{value:n,placeholder:e,disabled:!0}},d={args:{...t.args,prefixIcon:ne,size:"small"}},u={args:{hintText:"Hint Text",placeholder:e}},p={args:{value:n,placeholder:e,notch:!1}},a={args:{prefixIcon:ne,suffixIcon:ie}},m={args:{value:n.slice(0,-5),isLoading:!0}},s={args:{attach:"ALL"}},o={args:{borderMerged:"ALL"}};var f,T,x,I,L;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(x=(T=r.parameters)==null?void 0:T.docs)==null?void 0:x.source},description:{story:'These input instances have the `type="email"` attribute since it\'s displaying an email address',...(L=(I=r.parameters)==null?void 0:I.docs)==null?void 0:L.description}}};var S,b,v;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    value: defaultValue,
    placeholder: defaultPlaceholder
  }
}`,...(v=(b=t.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var O,V,A;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    value: defaultValue,
    placeholder: defaultPlaceholder,
    isTouched: true,
    isValid: true
  }
}`,...(A=(V=c.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var y,E,P;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    value: 'user@autogur',
    placeholder: defaultPlaceholder,
    isTouched: true,
    isValid: false,
    hintText: 'Please enter a full email address'
  }
}`,...(P=(E=l.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var F,N,M;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    value: defaultValue,
    placeholder: defaultPlaceholder,
    disabled: true
  }
}`,...(M=(N=i.parameters)==null?void 0:N.docs)==null?void 0:M.source}}};var _,H,B;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Filled.args,
    prefixIcon: EmailIcon,
    size: 'small'
  }
}`,...(B=(H=d.parameters)==null?void 0:H.docs)==null?void 0:B.source}}};var W,C,z;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    hintText: 'Hint Text',
    placeholder: defaultPlaceholder
  }
}`,...(z=(C=u.parameters)==null?void 0:C.docs)==null?void 0:z.source}}};var k,D,R;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    value: defaultValue,
    placeholder: defaultPlaceholder,
    notch: false
  }
}`,...(R=(D=p.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var G,j,K,U,Y;a.parameters={...a.parameters,docs:{...(G=a.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    prefixIcon: EmailIcon,
    suffixIcon: AccountEditIcon
  }
}`,...(K=(j=a.parameters)==null?void 0:j.docs)==null?void 0:K.source},description:{story:"Both prefix and suffix icons",...(Y=(U=a.parameters)==null?void 0:U.docs)==null?void 0:Y.description}}};var $,q,w;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    value: defaultValue.slice(0, -5),
    isLoading: true
  }
}`,...(w=(q=m.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var J,Q,X,Z,ee;s.parameters={...s.parameters,docs:{...(J=s.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    attach: 'ALL'
  }
}`,...(X=(Q=s.parameters)==null?void 0:Q.docs)==null?void 0:X.source},description:{story:"Attached border option set to all",...(ee=(Z=s.parameters)==null?void 0:Z.docs)==null?void 0:ee.description}}};var re,ae,se,oe,te;o.parameters={...o.parameters,docs:{...(re=o.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    borderMerged: 'ALL'
  }
}`,...(se=(ae=o.parameters)==null?void 0:ae.docs)==null?void 0:se.source},description:{story:"Merged border option set all",...(te=(oe=o.parameters)==null?void 0:oe.docs)==null?void 0:te.description}}};const Ne=["Standard","Filled","Valid","Invalid","Disabled","SmallSize","WithHintText","WithoutNotchLabel","WithIcons","Loading","AttachedAll","MergedAll"];export{s as AttachedAll,i as Disabled,t as Filled,l as Invalid,m as Loading,o as MergedAll,d as SmallSize,r as Standard,c as Valid,u as WithHintText,a as WithIcons,p as WithoutNotchLabel,Ne as __namedExportsOrder,Fe as default};
