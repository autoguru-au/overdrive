import{r as a,t as M,e as v,B as w,c as I,p as U}from"./iframe-CB5JKjWu.js";import{T as B}from"./Text-Cf0Mhz-X.js";import{i as H}from"./withEnhancedInput.css-DjH6JPyh.js";import"./preload-helper-D9Z9MdNV.js";var j="_1iskjcs0",A="_1iskjcs1",X="_1iskjcs2";const L=/^\d*\.?\d*$/,y=a.forwardRef(({as:t,color:n,colour:o="muted",size:s,display:x="inline-block",value:l,onFocus:k,onBlur:E,onKeyDown:C,onModeChange:N,tabIndex:P=0,onChange:b,type:i="text",...$},D)=>{const h=a.useRef(null),V=a.useRef(null),[u,R]=a.useState("TEXT"),[T,S]=a.useState(l),c=e=>{`${T}`.length===0&&S(l),R(e),typeof N=="function"&&N(e)},W=a.useCallback(e=>{const d=e.currentTarget.value,F=d.charAt(d.length-1);i==="number"&&!L.test(F)||(u==="INPUT"&&S(d),`${d}`.length>0&&typeof b=="function"&&b(e))},[b,i,u]),_=M({as:t,colour:o,size:s}),[q,z]=a.useState(10);return a.useEffect(()=>{h.current&&z(Math.ceil(h.current.getBoundingClientRect().width))},[T]),v.createElement(w,{ref:D,display:x,tabIndex:P,position:"relative",className:j,odComponent:"editable-text",onClick:()=>c("INPUT"),onFocus:e=>{typeof k=="function"&&k(e),S(l),c("INPUT")},onBlur:e=>{typeof E=="function"&&E(e),c("TEXT")},onKeyDown:e=>{typeof C=="function"&&C(e),(e.key==="Enter"||e.key==="Escape")&&c("TEXT")}},u==="INPUT"&&v.createElement(w,{as:"input",...$,autoFocus:!0,ref:V,type:i==="number"?"text":i,name:"editable-text",value:T,className:I(_,H.itself.root),onChange:W,style:{width:q}}),v.createElement(B,{noWrap:!0,ref:h,as:t,color:n,colour:o,size:s,className:I(_,A,{[X]:u==="INPUT"})},u==="INPUT"&&V.current?.value||l))});y.displayName="EditableText";try{y.displayName="EditableText",y.__docgenInfo={description:"",displayName:"EditableText",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onModeChange:{defaultValue:null,description:"",name:"onModeChange",required:!1,type:{name:"((mode: InputMode) => void)"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"label"'},{value:'"span"'},{value:'"p"'}]}},color:{defaultValue:null,description:"Set the text colour",name:"color",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"soft"'},{value:'"success"'},{value:'"info"'},{value:'"danger"'},{value:'"warning"'},{value:'"inverse"'}]}},size:{defaultValue:null,description:"Font size of the text",name:"size",required:!1,type:{name:'ConditionalStyleWithResponsiveArray<Values<Record<"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9", `var(--${string})`>, { defaultClass: string; conditions: { mobile: string; tablet: string; desktop: string; largeDesktop: string; }; }>, ("mobile" | ... 2 more ... | "largeDesktop")[] & { ...; }>'}},colour:{defaultValue:{value:"muted"},description:"_in transistion_ Prefer `color`",name:"colour",required:!1,type:{name:"enum",value:[{value:'"muted"'},{value:'"unset"'},{value:'"white"'},{value:'"dark"'},{value:'"light"'},{value:'"link"'},{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"neutral"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"information"'}]}},noWrap:{defaultValue:null,description:"@deprecated prefer `wrap` prop as it supports all wrapping values",name:"noWrap",required:!1,type:{name:"boolean"}},display:{defaultValue:{value:"inline-block"},description:"",name:"display",required:!1,type:{name:`ConditionalStyleWithResponsiveArray<Values<{ none: "none"; block: "block"; contents: "contents"; flex: "flex"; grid: "grid"; inline: "inline"; inlineBlock: "inline-block"; 'inline-block': "inline-block"; inlineFlex: "inline-flex"; 'inline-flex': "inline-flex"; }, { ...; }>, ("mobile" | ... 2 more ... | "largeDesktop...`}}}}}catch{}const O={title:"Forms & Input Fields/Editable Text",component:y,argTypes:{colour:{options:["muted","primary","secondary"],defaultValue:"primary",control:{type:"select"}}}},Y=(t=new Date)=>{const n=t.getFullYear(),o=(t.getMonth()+1).toString().padStart(2,"0"),s=t.getDate().toString().padStart(2,"0");return`${n}-${o}-${s}`},G=Y(U()?new Date(2019,5,1):new Date),r={args:{colour:"muted",value:"Hello World",type:"text"},decorators:[(t,n)=>{const[o,s]=a.useState(n.args.value);return v.createElement(t,{args:{...n.args,value:o,onChange:x=>{s(x.currentTarget.value)}}})}]},p={...r,args:{colour:"muted",value:"20",type:"number"}},m={...r,args:{colour:"muted",value:G,type:"date"}},f={...r,args:{colour:"muted",value:"Price is $111.01",type:"text"}},g={...r,args:{colour:"warning",value:"$999.99",type:"text",size:"6"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  ...Text,
  args: {
    colour: 'warning',
    value: '$999.99',
    type: 'text',
    size: '6'
  }
}`,...g.parameters?.docs?.source}}};const ee=["Text","Number","DateWithPicker","NarrowCharacters","CustomSize"];export{g as CustomSize,m as DateWithPicker,f as NarrowCharacters,p as Number,r as Text,ee as __namedExportsOrder,O as default};
