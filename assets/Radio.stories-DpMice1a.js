import{f as E}from"./index-mRD-OtaA.js";import{r as o,R as t}from"./index-DVCUSwsV.js";import{B as p,c as h}from"./Box-DSBumgu0.js";import{C as S,c as N}from"./CheckableBase-Ia_4vX3i.js";/* empty css                                    */import"./_commonjsHelpers-gnU0ypJ3.js";import"./useTextStyles-mngTSpBp.js";import"./Text-Bc6GCfdc.js";import"./dataAttrs-C4KudU4k.js";var w="_1eqx41h1 _1eqx41h0",V="_1eqx41h2",k="_1eqx41h3 _1eqx41h0",q="_1eqx41h4";const x=o.createContext(null),G=()=>o.useContext(x),u=o.forwardRef(({name:e,value:r,className:s="",onChange:i,children:a},l)=>{const d=o.useMemo(()=>({value:r,inputName:e,radioSelected:i}),[r,e,i]);return t.createElement(x.Provider,{value:d},t.createElement(p,{ref:l,position:"relative",display:"flex",flexDirection:"column",width:"full",padding:"none",className:s},a))});u.displayName="RadioGroup";try{u.displayName="RadioGroup",u.__docgenInfo={description:"",displayName:"RadioGroup",props:{}}}catch{}const n=o.forwardRef(({value:e,className:r="",children:s,disabled:i=!1},a)=>{const l=G(),d=e===l.value,C=()=>{var v;return(v=l.radioSelected)==null?void 0:v.call(l,e)};return o.createElement(S,{ref:a,inputType:"radio",className:r,inputName:l.inputName,value:e,label:s,disabled:i,checked:d,handleClick:C},o.createElement(p,{className:h(N,w,{[V]:d})}),o.createElement(p,{className:h(k,{[q]:d})}))});n.displayName="Radio";try{n.displayName="Radio",n.__docgenInfo={description:"",displayName:"Radio",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const B=[{label:"Avocado",value:"avocado"},{label:"Blueberries",value:"blueberries"},{label:"Cherries",value:"cherries"},{label:"Coconut",value:"coconut"},{label:"Disabled option",value:"disabled"},{label:"Strawberries",value:"strawberries"}],O={title:"Forms & Input Fields/Radio",component:u,tags:["updated"],decorators:[e=>t.createElement("div",{style:{maxWidth:"500px",width:"100%"}},t.createElement(e,null))],args:{name:void 0,value:void 0,onChange:E()}},c={render:({...e})=>{const[r,s]=t.useState(e.value),i=a=>{s(a),e.onChange(a)};return t.createElement(u,{...e,value:r,onChange:i},B.map(a=>t.createElement(n,{key:a.value,value:a.value,disabled:e.disabled||a.value==="disabled"},a.label)))},args:{name:"radio-group-favourite-fruit",value:"avocado"}},m={args:{name:"radio-group-multi-line",value:"multi1",children:t.createElement(t.Fragment,null,t.createElement(n,{value:"multi1"},"There is a very good reason why this thing is a multi-line, sometimes we need to show people a lot of things. And thus this exists."),t.createElement(n,{value:"single",disabled:!0},"Some options are just a single line, like this one."))}};var g,f,b;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: ({
    ...args
  }) => {
    const [selectedValue, setSelectedValue] = React.useState(args.value);
    const handleChange = (value: string) => {
      setSelectedValue(value);
      args.onChange(value);
    };
    return <RadioGroupComponent {...args as ComponentProps<typeof RadioGroupComponent>} value={selectedValue} onChange={handleChange}>
                {listData.map(item => <Radio key={item.value} value={item.value} disabled={args.disabled || item.value === 'disabled'}>
                        {item.label}
                    </Radio>)}
            </RadioGroupComponent>;
  },
  args: {
    name: 'radio-group-favourite-fruit',
    value: 'avocado'
  }
}`,...(b=(f=c.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var R,_,y;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    name: 'radio-group-multi-line',
    value: 'multi1',
    children: <>
                <Radio value="multi1">
                    There is a very good reason why this thing is a multi-line,
                    sometimes we need to show people a lot of things. And thus
                    this exists.
                </Radio>
                <Radio value="single" disabled>
                    Some options are just a single line, like this one.
                </Radio>
            </>
  }
}`,...(y=(_=m.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};const W=["RadioGroup","MultipleLines"];export{m as MultipleLines,c as RadioGroup,W as __namedExportsOrder,O as default};
