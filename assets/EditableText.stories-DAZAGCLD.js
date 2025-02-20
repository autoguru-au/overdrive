import{i as Z}from"./isChromatic-AKtkhq4f.js";import{r as t,R as ee}from"./index-Cr_cdoBq.js";import{B as _,c as I}from"./Box-ByZNOjEZ.js";import{i as te}from"./withEnhancedInput.css-CYHd4Z61.js";import{u as ae}from"./useTextStyles-c8XbNcHW.js";import{T as re}from"./Text-Bw6Amj0y.js";import"./_commonjsHelpers-C932wzq6.js";import"./dataAttrs-BPvLuXwN.js";var ne="_1iskjcs0",ue="_1iskjcs1",oe="_1iskjcs2";const se=/^\d*\.?\d*$/,y=t.forwardRef(({is:a,colour:n="muted",size:u,display:s="inlineBlock",value:o,onFocus:l,onBlur:h,onKeyDown:S,onModeChange:E,tabIndex:A=0,onChange:T,type:i="text",...L},O)=>{var k;const m=t.useRef(null),C=t.useRef(null),[c,Y]=t.useState("TEXT"),[N,V]=t.useState(o),d=e=>{Y(e),typeof E=="function"&&E(e)},G=t.useCallback(e=>{const x=e.currentTarget.value,Q=x.charAt(x.length-1);i==="number"&&!se.test(Q)||(c==="INPUT"&&V(x),typeof T=="function"&&T(e))},[T,i,c]),b=ae({is:a,colour:n,size:u}),[J,K]=t.useState();return t.useEffect(()=>{m.current&&K(m.current.clientWidth)},[m.current,N]),t.createElement(_,{ref:O,display:s,tabIndex:A,position:"relative",className:ne,onClick:()=>d("INPUT"),onFocus:e=>{typeof l=="function"&&l(e),V(o),d("INPUT")},onBlur:e=>{typeof h=="function"&&h(e),d("TEXT")},onKeyDown:e=>{typeof S=="function"&&S(e),(e.key==="Enter"||e.key==="Escape")&&d("TEXT")}},c==="INPUT"&&t.createElement(_,{is:"input",...L,autoFocus:!0,ref:C,type:i==="number"?"text":i,value:N,className:I(b,te.itself.root),onChange:G,style:{width:J}}),t.createElement(re,{noWrap:!0,ref:m,is:a,colour:n,size:u,className:I(b,ue,{[oe]:c==="INPUT"})},c==="INPUT"&&((k=C.current)==null?void 0:k.value)||o))});try{y.displayName="EditableText",y.__docgenInfo={description:"",displayName:"EditableText",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onModeChange:{defaultValue:null,description:"",name:"onModeChange",required:!1,type:{name:"((mode: InputMode) => void)"}},is:{defaultValue:null,description:"",name:"is",required:!1,type:{name:"enum",value:[{value:'"span"'},{value:'"p"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'},{value:'"4"'},{value:'"5"'},{value:'"6"'},{value:'"7"'},{value:'"8"'},{value:'"9"'}]}},colour:{defaultValue:{value:"muted"},description:"",name:"colour",required:!1,type:{name:"enum",value:[{value:'"muted"'},{value:'"link"'},{value:'"unset"'},{value:'"white"'},{value:'"dark"'},{value:'"light"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"neutral"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'}]}},noWrap:{defaultValue:null,description:"",name:"noWrap",required:!1,type:{name:"boolean"}},display:{defaultValue:{value:"inlineBlock"},description:"",name:"display",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"flex"'},{value:'"grid"'},{value:'"contents"'},{value:'"block"'},{value:'"inlineFlex"'},{value:'"inline"'},{value:'"inlineBlock"'}]}}}}}catch{}const Te={title:"Forms & Input Fields/Editable Text",component:y,argTypes:{colour:{options:["muted","primary","secondary"],defaultValue:"primary",control:{type:"select"}}}},le=(a=new Date)=>{const n=a.getFullYear(),u=(a.getMonth()+1).toString().padStart(2,"0"),s=a.getDate().toString().padStart(2,"0");return`${n}-${u}-${s}`},ce=le(Z()?new Date(2019,5,1):new Date),r={args:{colour:"muted",value:"Hello World",type:"text"},render:({onChange:a,value:n,...u})=>{const[s,o]=t.useState(n);return ee.createElement(y,{onChange:l=>{o(l.currentTarget.value),typeof a=="function"&&a(l.currentTarget.value)},value:s,...u})}},p={...r,args:{colour:"muted",value:"20",type:"number"}},v={...r,args:{colour:"muted",value:ce,type:"date"}},f={...r,args:{colour:"muted",value:"Price is $111.01",type:"text"}},g={...r,args:{colour:"warning",value:"$999.99",type:"text",size:"6"}};var P,w,W;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    colour: 'muted',
    value: 'Hello World',
    type: 'text'
  },
  render: ({
    onChange: incomingOnChange,
    value: incomingValue,
    ...args
  }) => {
    const [value, setValue] = useState(incomingValue);
    return <EditableText onChange={(e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.currentTarget.value);
      typeof incomingOnChange === 'function' && incomingOnChange(e.currentTarget.value);
    }} value={value} {...args} />;
  }
}`,...(W=(w=r.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};var $,q,R;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  ...Text,
  args: {
    colour: 'muted',
    value: '20',
    type: 'number'
  }
}`,...(R=(q=p.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};var D,U,z;v.parameters={...v.parameters,docs:{...(D=v.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...Text,
  args: {
    colour: 'muted',
    value: todayStr,
    type: 'date'
  }
}`,...(z=(U=v.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};var B,F,M;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...Text,
  args: {
    colour: 'muted',
    value: 'Price is $111.01',
    type: 'text'
  }
}`,...(M=(F=f.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var H,j,X;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  ...Text,
  args: {
    colour: 'warning',
    value: '$999.99',
    type: 'text',
    size: '6'
  }
}`,...(X=(j=g.parameters)==null?void 0:j.docs)==null?void 0:X.source}}};const xe=["Text","Number","DateWithPicker","NarrowCharacters","CustomSize"];export{g as CustomSize,v as DateWithPicker,f as NarrowCharacters,p as Number,r as Text,xe as __namedExportsOrder,Te as default};
