import{i as O}from"./isChromatic-AKtkhq4f.js";import{r as t,R as ee}from"./index-DVCUSwsV.js";import{B as C,c as _}from"./Box-DSBumgu0.js";import{i as te}from"./withEnhancedInput.css-irFa_c3N.js";import{u as ae}from"./useTextStyles-mngTSpBp.js";import{T as re}from"./Text-Bc6GCfdc.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./dataAttrs-C4KudU4k.js";var ne="_1iskjcs0",oe="_1iskjcs1",se="_1iskjcs2";const ue=/^\d*\.?\d*$/,g=t.forwardRef(({is:a,colour:n="muted",size:o,display:u="inlineBlock",value:s,onFocus:T,onBlur:h,onKeyDown:S,onModeChange:E,tabIndex:A=0,onChange:y,type:c="text",...L},Y)=>{var P;const i=t.useRef(null),N=t.useRef(null),[l,G]=t.useState("TEXT"),[b,k]=t.useState(s),d=e=>{G(e),typeof E=="function"&&E(e)},J=t.useCallback(e=>{const x=e.currentTarget.value,Z=x.charAt(x.length-1);c==="number"&&!ue.test(Z)||(l==="INPUT"&&k(x),typeof y=="function"&&y(e))},[y,c,l]),V=ae({is:a,colour:n,size:o}),[K,Q]=t.useState();return t.useEffect(()=>{i.current&&Q(i.current.clientWidth)},[i.current,b]),t.createElement(C,{ref:Y,display:u,tabIndex:A,position:"relative",className:ne,onClick:()=>d("INPUT"),onFocus:e=>{typeof T=="function"&&T(e),k(s),d("INPUT")},onBlur:e=>{typeof h=="function"&&h(e),d("TEXT")},onKeyDown:e=>{typeof S=="function"&&S(e),(e.key==="Enter"||e.key==="Escape")&&d("TEXT")}},l==="INPUT"&&t.createElement(C,{as:"input",...L,autoFocus:!0,ref:N,type:c==="number"?"text":c,value:b,className:_(V,te.itself.root),onChange:J,style:{width:K}}),t.createElement(re,{noWrap:!0,ref:i,is:a,colour:n,size:o,className:_(V,oe,{[se]:l==="INPUT"})},l==="INPUT"&&((P=N.current)==null?void 0:P.value)||s))});g.displayName="EditableText";try{g.displayName="EditableText",g.__docgenInfo={description:"",displayName:"EditableText",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onModeChange:{defaultValue:null,description:"",name:"onModeChange",required:!1,type:{name:"((mode: InputMode) => void)"}},is:{defaultValue:null,description:"@deprecated Prefer `as`",name:"is",required:!1,type:{name:"enum",value:[{value:'"label"'},{value:'"span"'},{value:'"p"'}]}},size:{defaultValue:null,description:"Font size of the text",name:"size",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'},{value:'"4"'},{value:'"5"'},{value:'"6"'},{value:'"7"'},{value:'"8"'},{value:'"9"'}]}},colour:{defaultValue:{value:"muted"},description:"@deprecated Prefer `color`",name:"colour",required:!1,type:{name:"enum",value:[{value:'"muted"'},{value:'"link"'},{value:'"unset"'},{value:'"white"'},{value:'"dark"'},{value:'"light"'},{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"shine"'},{value:'"neutral"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'}]}},noWrap:{defaultValue:null,description:"Prevents text from wrapping",name:"noWrap",required:!1,type:{name:"boolean"}},display:{defaultValue:{value:"inlineBlock"},description:"",name:"display",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"flex"'},{value:'"grid"'},{value:'"contents"'},{value:'"block"'},{value:'"inlineFlex"'},{value:'"inline"'},{value:'"inlineBlock"'}]}}}}}catch{}const xe={title:"Forms & Input Fields/Editable Text",component:g,argTypes:{colour:{options:["muted","primary","secondary"],defaultValue:"primary",control:{type:"select"}}}},le=(a=new Date)=>{const n=a.getFullYear(),o=(a.getMonth()+1).toString().padStart(2,"0"),u=a.getDate().toString().padStart(2,"0");return`${n}-${o}-${u}`},ce=le(O()?new Date(2019,5,1):new Date),r={args:{colour:"muted",value:"Hello World",type:"text"},decorators:[(a,n)=>{const[o,u]=t.useState(n.args.value);return ee.createElement(a,{args:{...n.args,value:o,onChange:s=>{u(s.currentTarget.value)}}})}]},m={...r,args:{colour:"muted",value:"20",type:"number"}},p={...r,args:{colour:"muted",value:ce,type:"date"}},v={...r,args:{colour:"muted",value:"Price is $111.01",type:"text"}},f={...r,args:{colour:"warning",value:"$999.99",type:"text",size:"6"}};var I,w,W;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(W=(w=r.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};var $,q,R;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  ...Text,
  args: {
    colour: 'muted',
    value: '20',
    type: 'number'
  }
}`,...(R=(q=m.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};var D,z,F;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...Text,
  args: {
    colour: 'muted',
    value: todayStr,
    type: 'date'
  }
}`,...(F=(z=p.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var U,B,M;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
  ...Text,
  args: {
    colour: 'muted',
    value: 'Price is $111.01',
    type: 'text'
  }
}`,...(M=(B=v.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var H,j,X;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  ...Text,
  args: {
    colour: 'warning',
    value: '$999.99',
    type: 'text',
    size: '6'
  }
}`,...(X=(j=f.parameters)==null?void 0:j.docs)==null?void 0:X.source}}};const Te=["Text","Number","DateWithPicker","NarrowCharacters","CustomSize"];export{f as CustomSize,p as DateWithPicker,v as NarrowCharacters,m as Number,r as Text,Te as __namedExportsOrder,xe as default};
