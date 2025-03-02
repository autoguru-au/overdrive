import{i as O}from"./isChromatic-AKtkhq4f.js";import{r as t,R as ee}from"./index-Cr_cdoBq.js";import{B as _,c as I}from"./Box-Dd8rtt69.js";import{i as te}from"./withEnhancedInput.css-QtbVj9Wo.js";import{u as ae}from"./useTextStyles-ekKSp2F9.js";import{T as re}from"./Text-DkmQmLYH.js";import"./_commonjsHelpers-C932wzq6.js";import"./dataAttrs-BPvLuXwN.js";var ne="_1iskjcs0",oe="_1iskjcs1",ue="_1iskjcs2";const se=/^\d*\.?\d*$/,x=t.forwardRef(({is:a,colour:n="muted",size:o,display:s="inlineBlock",value:u,onFocus:T,onBlur:h,onKeyDown:S,onModeChange:E,tabIndex:A=0,onChange:g,type:c="text",...L},Y)=>{var C;const i=t.useRef(null),N=t.useRef(null),[l,G]=t.useState("TEXT"),[b,k]=t.useState(u),m=e=>{G(e),typeof E=="function"&&E(e)},J=t.useCallback(e=>{const y=e.currentTarget.value,Z=y.charAt(y.length-1);c==="number"&&!se.test(Z)||(l==="INPUT"&&k(y),typeof g=="function"&&g(e))},[g,c,l]),V=ae({is:a,colour:n,size:o}),[K,Q]=t.useState();return t.useEffect(()=>{i.current&&Q(i.current.clientWidth)},[i.current,b]),t.createElement(_,{ref:Y,display:s,tabIndex:A,position:"relative",className:ne,onClick:()=>m("INPUT"),onFocus:e=>{typeof T=="function"&&T(e),k(u),m("INPUT")},onBlur:e=>{typeof h=="function"&&h(e),m("TEXT")},onKeyDown:e=>{typeof S=="function"&&S(e),(e.key==="Enter"||e.key==="Escape")&&m("TEXT")}},l==="INPUT"&&t.createElement(_,{is:"input",...L,autoFocus:!0,ref:N,type:c==="number"?"text":c,value:b,className:I(V,te.itself.root),onChange:J,style:{width:K}}),t.createElement(re,{noWrap:!0,ref:i,is:a,colour:n,size:o,className:I(V,oe,{[ue]:l==="INPUT"})},l==="INPUT"&&((C=N.current)==null?void 0:C.value)||u))});try{x.displayName="EditableText",x.__docgenInfo={description:"",displayName:"EditableText",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onModeChange:{defaultValue:null,description:"",name:"onModeChange",required:!1,type:{name:"((mode: InputMode) => void)"}},is:{defaultValue:null,description:"",name:"is",required:!1,type:{name:"enum",value:[{value:'"span"'},{value:'"p"'}]}},colour:{defaultValue:{value:"muted"},description:"",name:"colour",required:!1,type:{name:"enum",value:[{value:'"muted"'},{value:'"unset"'},{value:'"white"'},{value:'"link"'},{value:'"light"'},{value:'"neutral"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'},{value:'"dark"'}]}},noWrap:{defaultValue:null,description:"",name:"noWrap",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'},{value:'"4"'},{value:'"5"'},{value:'"6"'},{value:'"7"'},{value:'"8"'},{value:'"9"'}]}},display:{defaultValue:{value:"inlineBlock"},description:"",name:"display",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"flex"'},{value:'"grid"'},{value:'"block"'},{value:'"contents"'},{value:'"inline"'},{value:'"inlineFlex"'},{value:'"inlineBlock"'}]}}}}}catch{}const xe={title:"Forms & Input Fields/Editable Text",component:x,argTypes:{colour:{options:["muted","primary","secondary"],defaultValue:"primary",control:{type:"select"}}}},le=(a=new Date)=>{const n=a.getFullYear(),o=(a.getMonth()+1).toString().padStart(2,"0"),s=a.getDate().toString().padStart(2,"0");return`${n}-${o}-${s}`},ce=le(O()?new Date(2019,5,1):new Date),r={args:{colour:"muted",value:"Hello World",type:"text"},decorators:[(a,n)=>{const[o,s]=t.useState(n.args.value);return ee.createElement(a,{args:{...n.args,value:o,onChange:u=>{s(u.currentTarget.value)}}})}]},d={...r,args:{colour:"muted",value:"20",type:"number"}},p={...r,args:{colour:"muted",value:ce,type:"date"}},v={...r,args:{colour:"muted",value:"Price is $111.01",type:"text"}},f={...r,args:{colour:"warning",value:"$999.99",type:"text",size:"6"}};var P,w,W;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    colour: 'muted',
    value: 'Hello World',
    type: 'text'
  },
  decorators: [(Story, context) => {
    const [value, setValue] = useState(context.args.value);
    return <Story args={{
      ...context.args,
      value,
      onChange: (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
      }
    }} />;
  }]
}`,...(W=(w=r.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};var $,q,R;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  ...Text,
  args: {
    colour: 'muted',
    value: '20',
    type: 'number'
  }
}`,...(R=(q=d.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};var D,U,z;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...Text,
  args: {
    colour: 'muted',
    value: todayStr,
    type: 'date'
  }
}`,...(z=(U=p.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};var B,F,M;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...Text,
  args: {
    colour: 'muted',
    value: 'Price is $111.01',
    type: 'text'
  }
}`,...(M=(F=v.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var H,j,X;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  ...Text,
  args: {
    colour: 'warning',
    value: '$999.99',
    type: 'text',
    size: '6'
  }
}`,...(X=(j=f.parameters)==null?void 0:j.docs)==null?void 0:X.source}}};const Te=["Text","Number","DateWithPicker","NarrowCharacters","CustomSize"];export{f as CustomSize,p as DateWithPicker,v as NarrowCharacters,d as Number,r as Text,Te as __namedExportsOrder,xe as default};
