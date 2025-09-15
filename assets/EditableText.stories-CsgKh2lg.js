import{r as a,t as F,e as v,B as _,w as M}from"./iframe-C5x-mm7q.js";import{T as U}from"./Text-B_TnC6LV.js";import{i as j}from"./withEnhancedInput.css-CiC-OnHs.js";import"./preload-helper-D9Z9MdNV.js";var B="_1iskjcs0",H="_1iskjcs1",A="_1iskjcs2",X="_1iskjcs3";const L=/^\d*\.?\d*$/,y=a.forwardRef(({as:t,color:n,colour:o="muted",size:s,display:x="inline-block",value:l,onFocus:k,onBlur:E,onKeyDown:C,onModeChange:N,tabIndex:$=0,onChange:h,type:i="text",...I},P)=>{const b=a.useRef(null),V=a.useRef(null),[u,D]=a.useState("TEXT"),[T,S]=a.useState(l),c=e=>{`${T}`.length===0&&S(l),D(e),typeof N=="function"&&N(e)},R=a.useCallback(e=>{const d=e.currentTarget.value,z=d.charAt(d.length-1);i==="number"&&!L.test(z)||(u==="INPUT"&&S(d),`${d}`.length>0&&typeof h=="function"&&h(e))},[h,i,u]),[W,q]=a.useState(8),w=F({as:t,colour:o,size:s});return a.useEffect(()=>{b.current&&q(Math.ceil(b.current.getBoundingClientRect().width))},[T]),v.createElement(_,{ref:P,display:x,tabIndex:$,position:"relative",className:B,odComponent:"editable-text",onClick:()=>c("INPUT"),onFocus:e=>{typeof k=="function"&&k(e),S(l),c("INPUT")},onBlur:e=>{typeof E=="function"&&E(e),c("TEXT")},onKeyDown:e=>{typeof C=="function"&&C(e),(e.key==="Enter"||e.key==="Escape")&&c("TEXT")}},u==="INPUT"&&v.createElement(_,{as:"input",...I,autoFocus:!0,ref:V,type:i==="number"?"text":i,name:"editable-text",value:T,className:[w,H,j.itself.root],onChange:R,style:{"--width":`${W}px`}}),v.createElement(U,{noWrap:!0,ref:b,as:t,color:n,colour:o,size:s,className:[w,A,{[X]:u==="INPUT"}]},u==="INPUT"&&V.current?.value||l))});y.displayName="EditableText";try{y.displayName="EditableText",y.__docgenInfo={description:"",displayName:"EditableText",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onModeChange:{defaultValue:null,description:"",name:"onModeChange",required:!1,type:{name:"((mode: InputMode) => void)"}},color:{defaultValue:null,description:"Set the text colour",name:"color",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"soft"'},{value:'"success"'},{value:'"info"'},{value:'"danger"'},{value:'"warning"'},{value:'"inverse"'}]}},size:{defaultValue:null,description:"Font size of the text",name:"size",required:!1,type:{name:'ConditionalStyleWithResponsiveArray<Values<Record<"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9", `var(--${string})`>, { defaultClass: string; conditions: { mobile: string; tablet: string; desktop: string; largeDesktop: string; }; }>, ("mobile" | ... 2 more ... | "largeDesktop")[] & { ...; }>'}},colour:{defaultValue:{value:"muted"},description:"_in transistion_ Prefer `color`",name:"colour",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"unset"'},{value:'"white"'},{value:'"dark"'},{value:'"light"'},{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"neutral"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"information"'},{value:'"muted"'}]}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"label"'},{value:'"p"'},{value:'"span"'}]}},noWrap:{defaultValue:null,description:"@deprecated prefer `wrap` prop as it supports all wrapping values",name:"noWrap",required:!1,type:{name:"boolean"}},display:{defaultValue:{value:"inline-block"},description:"",name:"display",required:!1,type:{name:`ConditionalStyleWithResponsiveArray<Values<{ none: "none"; block: "block"; contents: "contents"; flex: "flex"; grid: "grid"; inline: "inline"; inlineBlock: "inline-block"; 'inline-block': "inline-block"; inlineFlex: "inline-flex"; 'inline-flex': "inline-flex"; }, { ...; }>, ("mobile" | ... 2 more ... | "largeDesktop...`}}}}}catch{}const O={title:"Forms & Input Fields/Editable Text",component:y,argTypes:{colour:{options:["muted","primary","secondary"],defaultValue:"primary",control:{type:"select"}}}},Y=(t=new Date)=>{const n=t.getFullYear(),o=(t.getMonth()+1).toString().padStart(2,"0"),s=t.getDate().toString().padStart(2,"0");return`${n}-${o}-${s}`},G=Y(M()?new Date(2019,5,1):new Date),r={args:{colour:"muted",value:"Hello World",type:"text"},decorators:[(t,n)=>{const[o,s]=a.useState(n.args.value);return v.createElement(t,{args:{...n.args,value:o,onChange:x=>{s(x.currentTarget.value)}}})}]},p={...r,args:{colour:"muted",value:"20",type:"number"}},m={...r,args:{colour:"muted",value:G,type:"date"}},f={...r,args:{colour:"muted",value:"Price is $111.01",type:"text"}},g={...r,args:{colour:"warning",value:"$999.99",type:"text",size:"6"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
