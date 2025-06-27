import{r as a,A as ee,e as y,B as I,c as P,l as te}from"./iframe-CapgcpQw.js";import{T as ae}from"./Text-BGIV1zEQ.js";import{i as re}from"./withEnhancedInput.css-BCj9lKWC.js";var ne="_1iskjcs0",oe="_1iskjcs1",se="_1iskjcs2";const le=/^\d*\.?\d*$/,g=a.forwardRef(({as:t,colour:n="muted",size:o,display:l="inline-block",value:s,onFocus:b,onBlur:h,onKeyDown:S,onModeChange:k,tabIndex:L=0,onChange:x,type:c="text",...Y},G)=>{var _;const i=a.useRef(null),E=a.useRef(null),[u,J]=a.useState("TEXT"),[N,V]=a.useState(s),d=e=>{J(e),typeof k=="function"&&k(e)},K=a.useCallback(e=>{const T=e.currentTarget.value,O=T.charAt(T.length-1);c==="number"&&!le.test(O)||(u==="INPUT"&&V(T),typeof x=="function"&&x(e))},[x,c,u]),C=ee({as:t,colour:n,size:o}),[Q,Z]=a.useState();return a.useEffect(()=>{i.current&&Z(i.current.clientWidth)},[i.current,N]),y.createElement(I,{ref:G,display:l,tabIndex:L,position:"relative",className:ne,odComponent:"editable-text",onClick:()=>d("INPUT"),onFocus:e=>{typeof b=="function"&&b(e),V(s),d("INPUT")},onBlur:e=>{typeof h=="function"&&h(e),d("TEXT")},onKeyDown:e=>{typeof S=="function"&&S(e),(e.key==="Enter"||e.key==="Escape")&&d("TEXT")}},u==="INPUT"&&y.createElement(I,{as:"input",...Y,autoFocus:!0,ref:E,type:c==="number"?"text":c,value:N,className:P(C,re.itself.root),onChange:K,style:{width:Q}}),y.createElement(ae,{noWrap:!0,ref:i,as:t,colour:n,size:o,className:P(C,oe,{[se]:u==="INPUT"})},u==="INPUT"&&((_=E.current)==null?void 0:_.value)||s))});g.displayName="EditableText";try{g.displayName="EditableText",g.__docgenInfo={description:"",displayName:"EditableText",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onModeChange:{defaultValue:null,description:"",name:"onModeChange",required:!1,type:{name:"((mode: InputMode) => void)"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'},{value:'"4"'},{value:'"5"'},{value:'"6"'},{value:'"7"'},{value:'"8"'},{value:'"9"'}]}},colour:{defaultValue:{value:"muted"},description:"",name:"colour",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"unset"'},{value:'"white"'},{value:'"dark"'},{value:'"light"'},{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"neutral"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"information"'},{value:'"muted"'}]}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"label"'},{value:'"p"'},{value:'"span"'}]}},noWrap:{defaultValue:null,description:"",name:"noWrap",required:!1,type:{name:"boolean"}},display:{defaultValue:{value:"inline-block"},description:"",name:"display",required:!1,type:{name:`ConditionalStyleWithResponsiveArray<Values<{ none: "none"; block: "block"; contents: "contents"; flex: "flex"; grid: "grid"; inline: "inline"; inlineBlock: "inline-block"; 'inline-block': "inline-block"; inlineFlex: "inline-flex"; 'inline-flex': "inline-flex"; }, { ...; }>, ("mobile" | ... 2 more ... | "largeDesktop...`}}}}}catch{}const pe={title:"Forms & Input Fields/Editable Text",component:g,argTypes:{colour:{options:["muted","primary","secondary"],defaultValue:"primary",control:{type:"select"}}}},ue=(t=new Date)=>{const n=t.getFullYear(),o=(t.getMonth()+1).toString().padStart(2,"0"),l=t.getDate().toString().padStart(2,"0");return`${n}-${o}-${l}`},ce=ue(te()?new Date(2019,5,1):new Date),r={args:{colour:"muted",value:"Hello World",type:"text"},decorators:[(t,n)=>{const[o,l]=a.useState(n.args.value);return y.createElement(t,{args:{...n.args,value:o,onChange:s=>{l(s.currentTarget.value)}}})}]},m={...r,args:{colour:"muted",value:"20",type:"number"}},p={...r,args:{colour:"muted",value:ce,type:"date"}},f={...r,args:{colour:"muted",value:"Price is $111.01",type:"text"}},v={...r,args:{colour:"warning",value:"$999.99",type:"text",size:"6"}};var w,W,$;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...($=(W=r.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var q,D,R;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  ...Text,
  args: {
    colour: 'muted',
    value: '20',
    type: 'number'
  }
}`,...(R=(D=m.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var U,z,F;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  ...Text,
  args: {
    colour: 'muted',
    value: todayStr,
    type: 'date'
  }
}`,...(F=(z=p.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var M,H,j;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  ...Text,
  args: {
    colour: 'muted',
    value: 'Price is $111.01',
    type: 'text'
  }
}`,...(j=(H=f.parameters)==null?void 0:H.docs)==null?void 0:j.source}}};var A,B,X;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...Text,
  args: {
    colour: 'warning',
    value: '$999.99',
    type: 'text',
    size: '6'
  }
}`,...(X=(B=v.parameters)==null?void 0:B.docs)==null?void 0:X.source}}};const fe=["Text","Number","DateWithPicker","NarrowCharacters","CustomSize"];export{v as CustomSize,p as DateWithPicker,f as NarrowCharacters,m as Number,r as Text,fe as __namedExportsOrder,pe as default};
