import{r as a,t as U,e as g,B as w,c as I,p as M}from"./iframe-BwudkRGz.js";import{T as H}from"./Text---c0u-Gd.js";import{i as j}from"./withEnhancedInput.css-CNCtQTPn.js";var B="_1iskjcs0",X="_1iskjcs1",A="_1iskjcs2";const L=/^\d*\.?\d*$/,y=a.forwardRef(({as:t,color:n,colour:o="muted",size:l,display:x="inline-block",value:u,onFocus:h,onBlur:S,onKeyDown:k,onModeChange:E,tabIndex:P=0,onChange:T,type:i="text",...W},q)=>{const c=a.useRef(null),N=a.useRef(null),[s,$]=a.useState("TEXT"),[V,C]=a.useState(u),d=e=>{$(e),typeof E=="function"&&E(e)},D=a.useCallback(e=>{const b=e.currentTarget.value,F=b.charAt(b.length-1);i==="number"&&!L.test(F)||(s==="INPUT"&&C(b),typeof T=="function"&&T(e))},[T,i,s]),_=U({as:t,colour:o,size:l}),[R,z]=a.useState();return a.useEffect(()=>{c.current&&z(c.current.clientWidth)},[c.current,V]),g.createElement(w,{ref:q,display:x,tabIndex:P,position:"relative",className:B,odComponent:"editable-text",onClick:()=>d("INPUT"),onFocus:e=>{typeof h=="function"&&h(e),C(u),d("INPUT")},onBlur:e=>{typeof S=="function"&&S(e),d("TEXT")},onKeyDown:e=>{typeof k=="function"&&k(e),(e.key==="Enter"||e.key==="Escape")&&d("TEXT")}},s==="INPUT"&&g.createElement(w,{as:"input",...W,autoFocus:!0,ref:N,type:i==="number"?"text":i,value:V,className:I(_,j.itself.root),onChange:D,style:{width:R}}),g.createElement(H,{noWrap:!0,ref:c,as:t,color:n,colour:o,size:l,className:I(_,X,{[A]:s==="INPUT"})},s==="INPUT"&&N.current?.value||u))});y.displayName="EditableText";try{y.displayName="EditableText",y.__docgenInfo={description:"",displayName:"EditableText",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onModeChange:{defaultValue:null,description:"",name:"onModeChange",required:!1,type:{name:"((mode: InputMode) => void)"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"label"'},{value:'"p"'},{value:'"span"'}]}},size:{defaultValue:null,description:"Font size of the text",name:"size",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'},{value:'"4"'},{value:'"5"'},{value:'"6"'},{value:'"7"'},{value:'"8"'},{value:'"9"'}]}},color:{defaultValue:null,description:"Set the text colour",name:"color",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"soft"'},{value:'"success"'},{value:'"info"'},{value:'"danger"'},{value:'"warning"'},{value:'"inverse"'}]}},colour:{defaultValue:{value:"muted"},description:"_in transistion_ Prefer `color`",name:"colour",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"unset"'},{value:'"white"'},{value:'"dark"'},{value:'"light"'},{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"neutral"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"information"'},{value:'"muted"'}]}},noWrap:{defaultValue:null,description:"@deprecated prefer `wrap` prop as it supports all wrapping values",name:"noWrap",required:!1,type:{name:"boolean"}},display:{defaultValue:{value:"inline-block"},description:"",name:"display",required:!1,type:{name:`ConditionalStyleWithResponsiveArray<Values<{ none: "none"; block: "block"; contents: "contents"; flex: "flex"; grid: "grid"; inline: "inline"; inlineBlock: "inline-block"; 'inline-block': "inline-block"; inlineFlex: "inline-flex"; 'inline-flex': "inline-flex"; }, { ...; }>, ("mobile" | ... 2 more ... | "largeDesktop...`}}}}}catch{}const Z={title:"Forms & Input Fields/Editable Text",component:y,argTypes:{colour:{options:["muted","primary","secondary"],defaultValue:"primary",control:{type:"select"}}}},Y=(t=new Date)=>{const n=t.getFullYear(),o=(t.getMonth()+1).toString().padStart(2,"0"),l=t.getDate().toString().padStart(2,"0");return`${n}-${o}-${l}`},G=Y(M()?new Date(2019,5,1):new Date),r={args:{colour:"muted",value:"Hello World",type:"text"},decorators:[(t,n)=>{const[o,l]=a.useState(n.args.value);return g.createElement(t,{args:{...n.args,value:o,onChange:x=>{l(x.currentTarget.value)}}})}]},p={...r,args:{colour:"muted",value:"20",type:"number"}},m={...r,args:{colour:"muted",value:G,type:"date"}},v={...r,args:{colour:"muted",value:"Price is $111.01",type:"text"}},f={...r,args:{colour:"warning",value:"$999.99",type:"text",size:"6"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  ...Text,
  args: {
    colour: 'muted',
    value: 'Price is $111.01',
    type: 'text'
  }
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  ...Text,
  args: {
    colour: 'warning',
    value: '$999.99',
    type: 'text',
    size: '6'
  }
}`,...f.parameters?.docs?.source}}};const O=["Text","Number","DateWithPicker","NarrowCharacters","CustomSize"];export{f as CustomSize,m as DateWithPicker,v as NarrowCharacters,p as Number,r as Text,O as __namedExportsOrder,Z as default};
