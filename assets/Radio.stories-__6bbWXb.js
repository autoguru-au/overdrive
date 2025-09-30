import{r as o,e as t,B as v,c as h}from"./iframe-C9jllvPJ.js";import{C as _,c as f}from"./CheckableBase-BoMqcXZ8.js";import"./preload-helper-PPVm8Dsz.js";import"./Text-DggnGx7l.js";var y="_1eqx41h1 _1eqx41h0",b="_1eqx41h2",R="_1eqx41h3 _1eqx41h0",C="_1eqx41h4";const p=o.createContext(null),x=()=>o.useContext(p),u=o.forwardRef(({name:e,value:l,className:i="",onChange:r,children:a},s)=>{const d=o.useMemo(()=>({value:l,inputName:e,radioSelected:r}),[l,e,r]);return t.createElement(p.Provider,{value:d},t.createElement(v,{ref:s,position:"relative",display:"flex",flexDirection:"column",width:"full",padding:"none",className:i},a))});u.displayName="RadioGroup";try{p.displayName="RadioContext",p.__docgenInfo={description:"",displayName:"RadioContext",props:{}}}catch{}try{u.displayName="RadioGroup",u.__docgenInfo={description:"",displayName:"RadioGroup",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}}}}}catch{}const n=o.forwardRef(({value:e,className:l="",children:i,disabled:r=!1},a)=>{const s=x(),d=e===s.value,g=()=>s.radioSelected?.(e);return o.createElement(_,{ref:a,inputType:"radio",className:l,inputName:s.inputName,value:e,label:i,disabled:r,checked:d,handleClick:g},o.createElement(v,{className:h(f,y,{[b]:d})}),o.createElement(v,{className:h(R,{[C]:d})}))});n.displayName="Radio";try{n.displayName="Radio",n.__docgenInfo={description:"",displayName:"Radio",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const{fn:N}=__STORYBOOK_MODULE_TEST__,E=[{label:"Avocado",value:"avocado"},{label:"Blueberries",value:"blueberries"},{label:"Cherries",value:"cherries"},{label:"Coconut",value:"coconut"},{label:"Disabled option",value:"disabled"},{label:"Strawberries",value:"strawberries"}],k={title:"Forms & Input Fields/Radio",component:u,tags:[],decorators:[e=>t.createElement("div",{style:{maxWidth:"500px",width:"100%"}},t.createElement(e,null))],args:{name:void 0,value:void 0,onChange:N()}},c={render:({...e})=>{const[l,i]=t.useState(e.value),r=a=>{i(a),e.onChange(a)};return t.createElement(u,{...e,value:l,onChange:r},E.map(a=>t.createElement(n,{key:a.value,value:a.value,disabled:e.disabled||a.value==="disabled"},a.label)))},args:{name:"radio-group-favourite-fruit",value:"avocado"}},m={args:{name:"radio-group-multi-line",value:"multi1",children:t.createElement(t.Fragment,null,t.createElement(n,{value:"multi1"},"There is a very good reason why this thing is a multi-line, sometimes we need to show people a lot of things. And thus this exists."),t.createElement(n,{value:"single",disabled:!0},"Some options are just a single line, like this one."))}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const G=["RadioGroup","MultipleLines"];export{m as MultipleLines,c as RadioGroup,G as __namedExportsOrder,k as default};
