import{r as a,t as ee,e as y,B as I,c as P,m as te}from"./iframe-C_bA5shj.js";import{T as ae}from"./Text-Bu_KMAJq.js";import{i as re}from"./withEnhancedInput.css-B9hBnbGB.js";var ne="_1iskjcs0",se="_1iskjcs1",oe="_1iskjcs2";const le=/^\d*\.?\d*$/,v=a.forwardRef(({as:t,colour:n="muted",size:s,display:l="inline-block",value:o,onFocus:S,onBlur:h,onKeyDown:b,onModeChange:E,tabIndex:J=0,onChange:x,type:c="text",...L},Y)=>{var _;const i=a.useRef(null),k=a.useRef(null),[u,G]=a.useState("TEXT"),[C,N]=a.useState(o),d=e=>{G(e),typeof E=="function"&&E(e)},K=a.useCallback(e=>{const T=e.currentTarget.value,O=T.charAt(T.length-1);c==="number"&&!le.test(O)||(u==="INPUT"&&N(T),typeof x=="function"&&x(e))},[x,c,u]),V=ee({as:`${t}`,colour:n,size:s}),[Q,Z]=a.useState();return a.useEffect(()=>{i.current&&Z(i.current.clientWidth)},[i.current,C]),y.createElement(I,{ref:Y,display:l,tabIndex:J,position:"relative",className:ne,onClick:()=>d("INPUT"),onFocus:e=>{typeof S=="function"&&S(e),N(o),d("INPUT")},onBlur:e=>{typeof h=="function"&&h(e),d("TEXT")},onKeyDown:e=>{typeof b=="function"&&b(e),(e.key==="Enter"||e.key==="Escape")&&d("TEXT")}},u==="INPUT"&&y.createElement(I,{as:"input",...L,autoFocus:!0,ref:k,type:c==="number"?"text":c,value:C,className:P(V,re.itself.root),onChange:K,style:{width:Q}}),y.createElement(ae,{noWrap:!0,ref:i,as:t,colour:n,size:s,className:P(V,se,{[oe]:u==="INPUT"})},u==="INPUT"&&((_=k.current)==null?void 0:_.value)||o))});v.displayName="EditableText";try{v.displayName="EditableText",v.__docgenInfo={description:"",displayName:"EditableText",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onModeChange:{defaultValue:null,description:"",name:"onModeChange",required:!1,type:{name:"((mode: InputMode) => void)"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:'"span" | ReactElement<unknown, string | JSXElementConstructor<any>>'}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"ConditionalStyle<Values<{}, { defaultClass: string; }> | Values<{}, { defaultClass: string; }>>"}},colour:{defaultValue:{value:"muted"},description:"",name:"colour",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"unset"'},{value:'"white"'},{value:'"dark"'},{value:'"light"'},{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"neutral"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"information"'},{value:'"muted"'}]}},noWrap:{defaultValue:null,description:"Prefer the `textWrap` prop on Box/boxStyles\n@deprecated",name:"noWrap",required:!1,type:{name:"boolean"}},display:{defaultValue:{value:"inline-block"},description:"",name:"display",required:!1,type:{name:'ConditionalStyleWithResponsiveArray<Values<("none" | "flex" | "grid" | "block" | "contents" | "inline" | "inline-block" | "inline-flex")[], { defaultClass: string; conditions: { mobile: string; tablet: string; desktop: string; largeDesktop: string; }; }>, ("mobile" | ... 2 more ... | "largeDesktop")[] & { ...; }>'}}}}}catch{}const me={title:"Forms & Input Fields/Editable Text",component:v,argTypes:{colour:{options:["muted","primary","secondary"],defaultValue:"primary",control:{type:"select"}}}},ue=(t=new Date)=>{const n=t.getFullYear(),s=(t.getMonth()+1).toString().padStart(2,"0"),l=t.getDate().toString().padStart(2,"0");return`${n}-${s}-${l}`},ce=ue(te()?new Date(2019,5,1):new Date),r={args:{colour:"muted",value:"Hello World",type:"text"},decorators:[(t,n)=>{const[s,l]=a.useState(n.args.value);return y.createElement(t,{args:{...n.args,value:s,onChange:o=>{l(o.currentTarget.value)}}})}]},p={...r,args:{colour:"muted",value:"20",type:"number"}},m={...r,args:{colour:"muted",value:ce,type:"date"}},f={...r,args:{colour:"muted",value:"Price is $111.01",type:"text"}},g={...r,args:{colour:"warning",value:"$999.99",type:"text",size:"6"}};var w,W,$;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...($=(W=r.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var D,q,R;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...Text,
  args: {
    colour: 'muted',
    value: '20',
    type: 'number'
  }
}`,...(R=(q=p.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};var U,z,M;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  ...Text,
  args: {
    colour: 'muted',
    value: todayStr,
    type: 'date'
  }
}`,...(M=(z=m.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var F,H,X;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...Text,
  args: {
    colour: 'muted',
    value: 'Price is $111.01',
    type: 'text'
  }
}`,...(X=(H=f.parameters)==null?void 0:H.docs)==null?void 0:X.source}}};var j,B,A;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...Text,
  args: {
    colour: 'warning',
    value: '$999.99',
    type: 'text',
    size: '6'
  }
}`,...(A=(B=g.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};const fe=["Text","Number","DateWithPicker","NarrowCharacters","CustomSize"];export{g as CustomSize,m as DateWithPicker,f as NarrowCharacters,p as Number,r as Text,fe as __namedExportsOrder,me as default};
