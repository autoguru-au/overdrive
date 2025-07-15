import{r as a,t as M,e as g,B as w,c as I,p as U}from"./iframe-Bw60F3r3.js";import{T as B}from"./Text-Dp2MR2jg.js";import{i as H}from"./withEnhancedInput.css-CtnAsipF.js";var j="_1iskjcs0",X="_1iskjcs1",A="_1iskjcs2";const L=/^\d*\.?\d*$/,y=a.forwardRef(({as:t,color:n,colour:l="muted",size:o,display:x="inline-block",value:s,onFocus:k,onBlur:E,onKeyDown:N,onModeChange:V,tabIndex:P=0,onChange:T,type:i="text",...$},q)=>{const h=a.useRef(null),C=a.useRef(null),[u,W]=a.useState("TEXT"),[b,S]=a.useState(s),c=e=>{`${b}`.length===0&&S(s),W(e),typeof V=="function"&&V(e)},D=a.useCallback(e=>{const d=e.currentTarget.value,F=d.charAt(d.length-1);i==="number"&&!L.test(F)||(u==="INPUT"&&S(d),`${d}`.length>0&&typeof T=="function"&&T(e))},[T,i,u]),_=M({as:t,colour:l,size:o}),[R,z]=a.useState(10);return a.useEffect(()=>{h.current&&z(Math.ceil(h.current.getBoundingClientRect().width))},[b]),g.createElement(w,{ref:q,display:x,tabIndex:P,position:"relative",className:j,odComponent:"editable-text",onClick:()=>c("INPUT"),onFocus:e=>{typeof k=="function"&&k(e),S(s),c("INPUT")},onBlur:e=>{typeof E=="function"&&E(e),c("TEXT")},onKeyDown:e=>{typeof N=="function"&&N(e),(e.key==="Enter"||e.key==="Escape")&&c("TEXT")}},u==="INPUT"&&g.createElement(w,{as:"input",...$,autoFocus:!0,ref:C,type:i==="number"?"text":i,name:"editable-text",value:b,className:I(_,H.itself.root),onChange:D,style:{width:R}}),g.createElement(B,{noWrap:!0,ref:h,as:t,color:n,colour:l,size:o,className:I(_,X,{[A]:u==="INPUT"})},u==="INPUT"&&C.current?.value||s))});y.displayName="EditableText";try{y.displayName="EditableText",y.__docgenInfo={description:"",displayName:"EditableText",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onModeChange:{defaultValue:null,description:"",name:"onModeChange",required:!1,type:{name:"((mode: InputMode) => void)"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"label"'},{value:'"span"'},{value:'"p"'}]}},color:{defaultValue:null,description:"Set the text colour",name:"color",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"soft"'},{value:'"success"'},{value:'"info"'},{value:'"danger"'},{value:'"warning"'},{value:'"inverse"'}]}},size:{defaultValue:null,description:"Font size of the text",name:"size",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'},{value:'"4"'},{value:'"5"'},{value:'"6"'},{value:'"7"'},{value:'"8"'},{value:'"9"'}]}},colour:{defaultValue:{value:"muted"},description:"_in transistion_ Prefer `color`",name:"colour",required:!1,type:{name:"enum",value:[{value:'"muted"'},{value:'"unset"'},{value:'"white"'},{value:'"dark"'},{value:'"light"'},{value:'"link"'},{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"neutral"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"information"'}]}},noWrap:{defaultValue:null,description:"@deprecated prefer `wrap` prop as it supports all wrapping values",name:"noWrap",required:!1,type:{name:"boolean"}},display:{defaultValue:{value:"inline-block"},description:"",name:"display",required:!1,type:{name:`ConditionalStyleWithResponsiveArray<Values<{ none: "none"; block: "block"; contents: "contents"; flex: "flex"; grid: "grid"; inline: "inline"; inlineBlock: "inline-block"; 'inline-block': "inline-block"; inlineFlex: "inline-flex"; 'inline-flex': "inline-flex"; }, { ...; }>, ("mobile" | ... 2 more ... | "largeDesktop...`}}}}}catch{}const Z={title:"Forms & Input Fields/Editable Text",component:y,argTypes:{colour:{options:["muted","primary","secondary"],defaultValue:"primary",control:{type:"select"}}}},Y=(t=new Date)=>{const n=t.getFullYear(),l=(t.getMonth()+1).toString().padStart(2,"0"),o=t.getDate().toString().padStart(2,"0");return`${n}-${l}-${o}`},G=Y(U()?new Date(2019,5,1):new Date),r={args:{colour:"muted",value:"Hello World",type:"text"},decorators:[(t,n)=>{const[l,o]=a.useState(n.args.value);return g.createElement(t,{args:{...n.args,value:l,onChange:x=>{o(x.currentTarget.value)}}})}]},p={...r,args:{colour:"muted",value:"20",type:"number"}},m={...r,args:{colour:"muted",value:G,type:"date"}},f={...r,args:{colour:"muted",value:"Price is $111.01",type:"text"}},v={...r,args:{colour:"warning",value:"$999.99",type:"text",size:"6"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  ...Text,
  args: {
    colour: 'muted',
    value: '20',
    type: 'number'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  ...Text,
  args: {
    colour: 'muted',
    value: todayStr,
    type: 'date'
  }
}`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  ...Text,
  args: {
    colour: 'muted',
    value: 'Price is $111.01',
    type: 'text'
  }
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  ...Text,
  args: {
    colour: 'warning',
    value: '$999.99',
    type: 'text',
    size: '6'
  }
}`,...v.parameters?.docs?.source}}};const O=["Text","Number","DateWithPicker","NarrowCharacters","CustomSize"];export{v as CustomSize,m as DateWithPicker,f as NarrowCharacters,p as Number,r as Text,O as __namedExportsOrder,Z as default};
