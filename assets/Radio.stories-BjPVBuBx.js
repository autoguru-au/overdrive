import{r as o,e as t,B as p,c as h}from"./iframe-B8iXgyt9.js";import{C as E,c as S}from"./CheckableBase-Cn6W0PB6.js";import"./Text-BLEkj1El.js";var N="_1eqx41h1 _1eqx41h0",w="_1eqx41h2",V="_1eqx41h3 _1eqx41h0",k="_1eqx41h4";const x=o.createContext(null),q=()=>o.useContext(x),u=o.forwardRef(({name:e,value:r,className:i="",onChange:n,children:a},l)=>{const d=o.useMemo(()=>({value:r,inputName:e,radioSelected:n}),[r,e,n]);return t.createElement(x.Provider,{value:d},t.createElement(p,{ref:l,position:"relative",display:"flex",flexDirection:"column",width:"full",padding:"none",className:i},a))});u.displayName="RadioGroup";try{u.displayName="RadioGroup",u.__docgenInfo={description:"",displayName:"RadioGroup",props:{}}}catch{}const s=o.forwardRef(({value:e,className:r="",children:i,disabled:n=!1},a)=>{const l=q(),d=e===l.value,C=()=>{var v;return(v=l.radioSelected)==null?void 0:v.call(l,e)};return o.createElement(E,{ref:a,inputType:"radio",className:r,inputName:l.inputName,value:e,label:i,disabled:n,checked:d,handleClick:C},o.createElement(p,{className:h(S,N,{[w]:d})}),o.createElement(p,{className:h(V,{[k]:d})}))});s.displayName="Radio";try{s.displayName="Radio",s.__docgenInfo={description:"",displayName:"Radio",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const{fn:G}=__STORYBOOK_MODULE_TEST__,T=[{label:"Avocado",value:"avocado"},{label:"Blueberries",value:"blueberries"},{label:"Cherries",value:"cherries"},{label:"Coconut",value:"coconut"},{label:"Disabled option",value:"disabled"},{label:"Strawberries",value:"strawberries"}],I={title:"Forms & Input Fields/Radio",component:u,tags:["updated"],decorators:[e=>t.createElement("div",{style:{maxWidth:"500px",width:"100%"}},t.createElement(e,null))],args:{name:void 0,value:void 0,onChange:G()}},c={render:({...e})=>{const[r,i]=t.useState(e.value),n=a=>{i(a),e.onChange(a)};return t.createElement(u,{...e,value:r,onChange:n},T.map(a=>t.createElement(s,{key:a.value,value:a.value,disabled:e.disabled||a.value==="disabled"},a.label)))},args:{name:"radio-group-favourite-fruit",value:"avocado"}},m={args:{name:"radio-group-multi-line",value:"multi1",children:t.createElement(t.Fragment,null,t.createElement(s,{value:"multi1"},"There is a very good reason why this thing is a multi-line, sometimes we need to show people a lot of things. And thus this exists."),t.createElement(s,{value:"single",disabled:!0},"Some options are just a single line, like this one."))}};var g,_,b;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(b=(_=c.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};var f,R,y;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(y=(R=m.parameters)==null?void 0:R.docs)==null?void 0:y.source}}};const M=["RadioGroup","MultipleLines"];export{m as MultipleLines,c as RadioGroup,M as __namedExportsOrder,I as default};
