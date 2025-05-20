import{i as ee}from"./isChromatic-AKtkhq4f.js";import{r as a,R as g}from"./index-DVCUSwsV.js";import{B as w,c as _}from"./Box-DIPDnkNs.js";import{T as te}from"./Text-CZSIapSJ.js";import{u as ae}from"./useTextStyles-CPzSss8t.js";import{i as re}from"./withEnhancedInput.css-CqBQHTLl.js";import"./_commonjsHelpers-gnU0ypJ3.js";var ne="_1iskjcs0",se="_1iskjcs1",oe="_1iskjcs2";const ue=/^\d*\.?\d*$/,y=a.forwardRef(({is:t,colour:n="muted",size:s,display:u="inline-block",value:o,onFocus:h,onBlur:b,onKeyDown:S,onModeChange:k,tabIndex:L=0,onChange:x,type:c="text",...Y},G)=>{var P;const i=a.useRef(null),E=a.useRef(null),[l,J]=a.useState("TEXT"),[N,V]=a.useState(o),d=e=>{J(e),typeof k=="function"&&k(e)},K=a.useCallback(e=>{const T=e.currentTarget.value,O=T.charAt(T.length-1);c==="number"&&!ue.test(O)||(l==="INPUT"&&V(T),typeof x=="function"&&x(e))},[x,c,l]),C=ae({is:t,colour:n,size:s}),[Q,Z]=a.useState();return a.useEffect(()=>{i.current&&Z(i.current.clientWidth)},[i.current,N]),g.createElement(w,{ref:G,display:u,tabIndex:L,position:"relative",className:ne,onClick:()=>d("INPUT"),onFocus:e=>{typeof h=="function"&&h(e),V(o),d("INPUT")},onBlur:e=>{typeof b=="function"&&b(e),d("TEXT")},onKeyDown:e=>{typeof S=="function"&&S(e),(e.key==="Enter"||e.key==="Escape")&&d("TEXT")}},l==="INPUT"&&g.createElement(w,{as:"input",...Y,autoFocus:!0,ref:E,type:c==="number"?"text":c,value:N,className:_(C,re.itself.root),onChange:K,style:{width:Q}}),g.createElement(te,{noWrap:!0,ref:i,as:t,colour:n,size:s,className:_(C,se,{[oe]:l==="INPUT"})},l==="INPUT"&&((P=E.current)==null?void 0:P.value)||o))});y.displayName="EditableText";try{y.displayName="EditableText",y.__docgenInfo={description:"",displayName:"EditableText",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onModeChange:{defaultValue:null,description:"",name:"onModeChange",required:!1,type:{name:"((mode: InputMode) => void)"}},is:{defaultValue:null,description:"@deprecated Prefer `as`",name:"is",required:!1,type:{name:"enum",value:[{value:'"p"'},{value:'"label"'},{value:'"span"'}]}},size:{defaultValue:null,description:"Font size of the text",name:"size",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'},{value:'"4"'},{value:'"5"'},{value:'"6"'},{value:'"7"'},{value:'"8"'},{value:'"9"'}]}},colour:{defaultValue:{value:"muted"},description:"Prefer `color` prop which uses new token structure",name:"colour",required:!1,type:{name:"enum",value:[{value:'"unset"'},{value:'"white"'},{value:'"dark"'},{value:'"light"'},{value:'"link"'},{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"neutral"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"information"'},{value:'"muted"'}]}},noWrap:{defaultValue:null,description:"Prevents text from wrapping",name:"noWrap",required:!1,type:{name:"boolean"}},display:{defaultValue:{value:"inline-block"},description:"",name:"display",required:!1,type:{name:'ConditionalStyleWithResponsiveArray<Values<("none" | "flex" | "grid" | "block" | "contents" | "inline" | "inline-block" | "inline-flex")[], { defaultClass: string; conditions: { mobile: string; tablet: string; desktop: string; largeDesktop: string; }; }>, ("mobile" | ... 2 more ... | "largeDesktop")[] & { ...; }>'}}}}}catch{}const ye={title:"Forms & Input Fields/Editable Text",component:y,argTypes:{colour:{options:["muted","primary","secondary"],defaultValue:"primary",control:{type:"select"}}}},le=(t=new Date)=>{const n=t.getFullYear(),s=(t.getMonth()+1).toString().padStart(2,"0"),u=t.getDate().toString().padStart(2,"0");return`${n}-${s}-${u}`},ce=le(ee()?new Date(2019,5,1):new Date),r={args:{colour:"muted",value:"Hello World",type:"text"},decorators:[(t,n)=>{const[s,u]=a.useState(n.args.value);return g.createElement(t,{args:{...n.args,value:s,onChange:o=>{u(o.currentTarget.value)}}})}]},p={...r,args:{colour:"muted",value:"20",type:"number"}},m={...r,args:{colour:"muted",value:ce,type:"date"}},f={...r,args:{colour:"muted",value:"Price is $111.01",type:"text"}},v={...r,args:{colour:"warning",value:"$999.99",type:"text",size:"6"}};var I,W,D;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(D=(W=r.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var R,$,q;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  ...Text,
  args: {
    colour: 'muted',
    value: '20',
    type: 'number'
  }
}`,...(q=($=p.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var z,U,F;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  ...Text,
  args: {
    colour: 'muted',
    value: todayStr,
    type: 'date'
  }
}`,...(F=(U=m.parameters)==null?void 0:U.docs)==null?void 0:F.source}}};var M,H,j;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  ...Text,
  args: {
    colour: 'muted',
    value: 'Price is $111.01',
    type: 'text'
  }
}`,...(j=(H=f.parameters)==null?void 0:H.docs)==null?void 0:j.source}}};var X,A,B;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
  ...Text,
  args: {
    colour: 'warning',
    value: '$999.99',
    type: 'text',
    size: '6'
  }
}`,...(B=(A=v.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};const xe=["Text","Number","DateWithPicker","NarrowCharacters","CustomSize"];export{v as CustomSize,m as DateWithPicker,f as NarrowCharacters,p as Number,r as Text,xe as __namedExportsOrder,ye as default};
