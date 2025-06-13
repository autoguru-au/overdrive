import{r as a,z as ee,e as g,B as P,c as I,l as te}from"./iframe-Dl5X8CFQ.js";import{T as ae}from"./Text-CZG_rW-B.js";import{i as re}from"./withEnhancedInput.css-CeMKWYq_.js";import"./useTextStyles-BJe2PR_c.js";import"./resolveResponsiveProps-Cley6Wsn.js";var ne="_1iskjcs0",oe="_1iskjcs1",se="_1iskjcs2";const le=/^\d*\.?\d*$/,y=a.forwardRef(({as:t,colour:n="muted",size:o,display:l="inline-block",value:s,onFocus:b,onBlur:h,onKeyDown:S,onModeChange:k,tabIndex:L=0,onChange:x,type:i="text",...Y},G)=>{var C;const c=a.useRef(null),E=a.useRef(null),[u,J]=a.useState("TEXT"),[N,V]=a.useState(s),d=e=>{J(e),typeof k=="function"&&k(e)},K=a.useCallback(e=>{const T=e.currentTarget.value,O=T.charAt(T.length-1);i==="number"&&!le.test(O)||(u==="INPUT"&&V(T),typeof x=="function"&&x(e))},[x,i,u]),_=ee({as:`${t}`,colour:n,size:o}),[Q,Z]=a.useState();return a.useEffect(()=>{c.current&&Z(c.current.clientWidth)},[c.current,N]),g.createElement(P,{ref:G,display:l,tabIndex:L,position:"relative",className:ne,onClick:()=>d("INPUT"),onFocus:e=>{typeof b=="function"&&b(e),V(s),d("INPUT")},onBlur:e=>{typeof h=="function"&&h(e),d("TEXT")},onKeyDown:e=>{typeof S=="function"&&S(e),(e.key==="Enter"||e.key==="Escape")&&d("TEXT")}},u==="INPUT"&&g.createElement(P,{as:"input",...Y,autoFocus:!0,ref:E,type:i==="number"?"text":i,value:N,className:I(_,re.itself.root),onChange:K,style:{width:Q}}),g.createElement(ae,{noWrap:!0,ref:c,as:t,colour:n,size:o,className:I(_,oe,{[se]:u==="INPUT"})},u==="INPUT"&&((C=E.current)==null?void 0:C.value)||s))});y.displayName="EditableText";try{y.displayName="EditableText",y.__docgenInfo={description:"",displayName:"EditableText",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onModeChange:{defaultValue:null,description:"",name:"onModeChange",required:!1,type:{name:"((mode: InputMode) => void)"}},size:{defaultValue:null,description:"Font size of the text",name:"size",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'},{value:'"4"'},{value:'"5"'},{value:'"6"'},{value:'"7"'},{value:'"8"'},{value:'"9"'}]}},colour:{defaultValue:{value:"muted"},description:"_in transistion_ Prefer `color`",name:"colour",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"unset"'},{value:'"white"'},{value:'"dark"'},{value:'"light"'},{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"neutral"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"information"'},{value:'"muted"'}]}},as:{defaultValue:null,description:"HTML element to render as",name:"as",required:!1,type:{name:"enum",value:[{value:'"label"'},{value:'"p"'},{value:'"span"'}]}},noWrap:{defaultValue:null,description:"Prevents text from wrapping",name:"noWrap",required:!1,type:{name:"boolean"}},display:{defaultValue:{value:"inline-block"},description:"",name:"display",required:!1,type:{name:`ConditionalStyleWithResponsiveArray<Values<{ none: "none"; block: "block"; contents: "contents"; flex: "flex"; grid: "grid"; inline: "inline"; inlineBlock: "inline-block"; 'inline-block': "inline-block"; inlineFlex: "inline-flex"; 'inline-flex': "inline-flex"; }, { ...; }>, ("mobile" | ... 2 more ... | "largeDesktop...`}}}}}catch{}const ve={title:"Forms & Input Fields/Editable Text",component:y,argTypes:{colour:{options:["muted","primary","secondary"],defaultValue:"primary",control:{type:"select"}}}},ue=(t=new Date)=>{const n=t.getFullYear(),o=(t.getMonth()+1).toString().padStart(2,"0"),l=t.getDate().toString().padStart(2,"0");return`${n}-${o}-${l}`},ie=ue(te()?new Date(2019,5,1):new Date),r={args:{colour:"muted",value:"Hello World",type:"text"},decorators:[(t,n)=>{const[o,l]=a.useState(n.args.value);return g.createElement(t,{args:{...n.args,value:o,onChange:s=>{l(s.currentTarget.value)}}})}]},m={...r,args:{colour:"muted",value:"20",type:"number"}},p={...r,args:{colour:"muted",value:ie,type:"date"}},f={...r,args:{colour:"muted",value:"Price is $111.01",type:"text"}},v={...r,args:{colour:"warning",value:"$999.99",type:"text",size:"6"}};var w,W,$;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...($=(W=r.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var q,D,z;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  ...Text,
  args: {
    colour: 'muted',
    value: '20',
    type: 'number'
  }
}`,...(z=(D=m.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};var R,F,M;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  ...Text,
  args: {
    colour: 'muted',
    value: todayStr,
    type: 'date'
  }
}`,...(M=(F=p.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var U,H,j;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  ...Text,
  args: {
    colour: 'muted',
    value: 'Price is $111.01',
    type: 'text'
  }
}`,...(j=(H=f.parameters)==null?void 0:H.docs)==null?void 0:j.source}}};var B,X,A;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...Text,
  args: {
    colour: 'warning',
    value: '$999.99',
    type: 'text',
    size: '6'
  }
}`,...(A=(X=v.parameters)==null?void 0:X.docs)==null?void 0:A.source}}};const ge=["Text","Number","DateWithPicker","NarrowCharacters","CustomSize"];export{v as CustomSize,p as DateWithPicker,f as NarrowCharacters,m as Number,r as Text,ge as __namedExportsOrder,ve as default};
