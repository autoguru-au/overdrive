import{r as t,t as z,e as y,B as _,i as M}from"./iframe-BHjXsG_y.js";import{T as U}from"./Text-1lD5z1cA.js";import{i as j}from"./withEnhancedInput.css-C1fzOoqG.js";import"./preload-helper-PPVm8Dsz.js";var B="_1iskjcs0",H="_1iskjcs1",A="_1iskjcs2",X="_1iskjcs3";const L=/^\d*\.?\d*$/,f=t.forwardRef(({as:a,color:l,colour:n="muted",size:u,display:x="inline-block",value:o,onFocus:S,onBlur:k,onKeyDown:E,onModeChange:C,tabIndex:I=0,onChange:b,type:i="text",...$},P)=>{const h=t.useRef(null),N=t.useRef(null),[s,F]=t.useState("TEXT"),[T,w]=t.useState(o),c=e=>{`${T}`.length===0&&w(o),F(e),typeof C=="function"&&C(e)},R=t.useCallback(e=>{const d=e.currentTarget.value,D=d.charAt(d.length-1);i==="number"&&!L.test(D)||(s==="INPUT"&&w(d),`${d}`.length>0&&typeof b=="function"&&b(e))},[b,i,s]),[W,q]=t.useState(8),V=z({as:a,colour:n,size:u});return t.useEffect(()=>{h.current&&q(Math.ceil(h.current.getBoundingClientRect().width))},[T]),y.createElement(_,{ref:P,display:x,tabIndex:I,position:"relative",className:B,odComponent:"editable-text",onClick:()=>c("INPUT"),onFocus:e=>{typeof S=="function"&&S(e),w(o),c("INPUT")},onBlur:e=>{typeof k=="function"&&k(e),c("TEXT")},onKeyDown:e=>{typeof E=="function"&&E(e),(e.key==="Enter"||e.key==="Escape")&&c("TEXT")}},s==="INPUT"&&y.createElement(_,{as:"input",...$,autoFocus:!0,ref:N,type:i==="number"?"text":i,name:"editable-text",value:T,className:[V,H,j.itself.root],onChange:R,style:{"--width":`${W}px`}}),y.createElement(U,{noWrap:!0,ref:h,as:a,color:l,colour:n,size:u,className:[V,A,{[X]:s==="INPUT"}]},s==="INPUT"&&N.current?.value||o))});f.displayName="EditableText";try{f.displayName="EditableText",f.__docgenInfo={description:"",displayName:"EditableText",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onModeChange:{defaultValue:null,description:"",name:"onModeChange",required:!1,type:{name:"((mode: InputMode) => void)"}},color:{defaultValue:null,description:"Set the text colour",name:"color",required:!1,type:{name:"enum",value:[{value:'"unset"'},{value:'"normal"'},{value:'"white"'},{value:'"reverse"'},{value:'"blue900"'},{value:'"blue800"'},{value:'"blue700"'},{value:'"blue600"'},{value:'"blue500"'},{value:'"blue400"'},{value:'"blue300"'},{value:'"blue200"'},{value:'"blue100"'},{value:'"gray900"'},{value:'"gray800"'},{value:'"gray700"'},{value:'"gray600"'},{value:'"gray500"'},{value:'"gray400"'},{value:'"gray300"'},{value:'"gray200"'},{value:'"gray100"'},{value:'"green900"'},{value:'"green800"'},{value:'"green700"'},{value:'"green600"'},{value:'"green500"'},{value:'"green400"'},{value:'"green300"'},{value:'"green200"'},{value:'"green100"'},{value:'"red900"'},{value:'"red800"'},{value:'"red700"'},{value:'"red600"'},{value:'"red500"'},{value:'"red400"'},{value:'"red300"'},{value:'"red200"'},{value:'"red100"'},{value:'"yellow900"'},{value:'"yellow800"'},{value:'"yellow700"'},{value:'"yellow600"'},{value:'"yellow500"'},{value:'"yellow400"'},{value:'"yellow300"'},{value:'"yellow200"'},{value:'"yellow100"'},{value:'"soft"'},{value:'"success"'},{value:'"info"'},{value:'"danger"'},{value:'"warning"'},{value:'"inverse"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiaryInactive"'},{value:'"tertiaryInactiveLight"'},{value:'"infoText"'},{value:'"infoForeground"'},{value:'"successText"'},{value:'"successForeground"'},{value:'"warningText"'},{value:'"warningForeground"'},{value:'"alertText"'},{value:'"alertForeground"'}]}},size:{defaultValue:null,description:"Font size of the text, a size scale value or a named text style (`h1`-`h4`, `p1`-`p4`)",name:"size",required:!1,type:{name:'ConditionalStyleWithResponsiveArray<Values<Record<"h1" | "h2" | "h3" | "h4" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "p1" | "p2" | "p3" | "p4", `var(--${string})`>, { defaultClass: string; conditions: { mobile: string; tablet: string; desktop: string; largeDesktop: string; }; }>, ("mobile" | ... 2 mor...'}},colour:{defaultValue:{value:"muted"},description:"_in transistion_ Prefer `color`",name:"colour",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"unset"'},{value:'"white"'},{value:'"dark"'},{value:'"light"'},{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"primary"'},{value:'"secondary"'},{value:'"neutral"'},{value:'"brand"'},{value:'"shine"'},{value:'"information"'},{value:'"muted"'}]}},noWrap:{defaultValue:null,description:"@deprecated prefer `wrap` prop as it supports all wrapping values",name:"noWrap",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"label"'},{value:'"p"'},{value:'"span"'}]}},display:{defaultValue:{value:"inline-block"},description:"",name:"display",required:!1,type:{name:`ConditionalStyleWithResponsiveArray<Values<{ none: "none"; block: "block"; contents: "contents"; flex: "flex"; grid: "grid"; inline: "inline"; inlineBlock: "inline-block"; 'inline-block': "inline-block"; inlineFlex: "inline-flex"; 'inline-flex': "inline-flex"; }, { ...; }>, ("mobile" | ... 2 more ... | "largeDesktop...`}}}}}catch{}const O={title:"Forms & Input Fields/Editable Text",component:f,argTypes:{colour:{options:["muted","primary","secondary"],defaultValue:"primary",control:{type:"select"}}}},Y=(a=new Date)=>{const l=a.getFullYear(),n=(a.getMonth()+1).toString().padStart(2,"0"),u=a.getDate().toString().padStart(2,"0");return`${l}-${n}-${u}`},G=Y(M()?new Date(2019,5,1):new Date),r={args:{colour:"muted",value:"Hello World",type:"text"},decorators:[(a,l)=>{const[n,u]=t.useState(l.args.value);return y.createElement(a,{args:{...l.args,value:n,onChange:x=>{u(x.currentTarget.value)}}})}]},v={...r,args:{colour:"muted",value:"20",type:"number"}},p={...r,args:{colour:"muted",value:G,type:"date"}},m={...r,args:{colour:"muted",value:"Price is $111.01",type:"text"}},g={...r,args:{colour:"warning",value:"$999.99",type:"text",size:"6"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  ...Text,
  args: {
    colour: 'muted',
    value: '20',
    type: 'number'
  }
}`,...v.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  ...Text,
  args: {
    colour: 'muted',
    value: todayStr,
    type: 'date'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  ...Text,
  args: {
    colour: 'muted',
    value: 'Price is $111.01',
    type: 'text'
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  ...Text,
  args: {
    colour: 'warning',
    value: '$999.99',
    type: 'text',
    size: '6'
  }
}`,...g.parameters?.docs?.source}}};const ee=["Text","Number","DateWithPicker","NarrowCharacters","CustomSize"];export{g as CustomSize,p as DateWithPicker,m as NarrowCharacters,v as Number,r as Text,ee as __namedExportsOrder,O as default};
