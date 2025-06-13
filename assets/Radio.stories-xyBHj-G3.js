import{r as l,e as t,B as v,c as g}from"./iframe-Dl5X8CFQ.js";import{C as N,c as E}from"./CheckableBase-CUXvzANy.js";import"./Text-CZG_rW-B.js";import"./useTextStyles-BJe2PR_c.js";import"./resolveResponsiveProps-Cley6Wsn.js";var S="_1eqx41h1 _1eqx41h0",V="_1eqx41h2",q="_1eqx41h3 _1eqx41h0",w="_1eqx41h4";const m=l.createContext(null),k=()=>l.useContext(m),u=l.forwardRef(({name:e,value:r,className:s="",onChange:n,children:a},o)=>{const d=l.useMemo(()=>({value:r,inputName:e,radioSelected:n}),[r,e,n]);return t.createElement(m.Provider,{value:d},t.createElement(v,{ref:o,position:"relative",display:"flex",flexDirection:"column",width:"full",padding:"none",className:s},a))});u.displayName="RadioGroup";try{m.displayName="RadioContext",m.__docgenInfo={description:"",displayName:"RadioContext",props:{}}}catch{}try{u.displayName="RadioGroup",u.__docgenInfo={description:"",displayName:"RadioGroup",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}}}}}catch{}const i=l.forwardRef(({value:e,className:r="",children:s,disabled:n=!1},a)=>{const o=k(),d=e===o.value,x=()=>{var h;return(h=o.radioSelected)==null?void 0:h.call(o,e)};return l.createElement(N,{ref:a,inputType:"radio",className:r,inputName:o.inputName,value:e,label:s,disabled:n,checked:d,handleClick:x},l.createElement(v,{className:g(E,S,{[V]:d})}),l.createElement(v,{className:g(q,{[w]:d})}))});i.displayName="Radio";try{i.displayName="Radio",i.__docgenInfo={description:"",displayName:"Radio",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const{fn:G}=__STORYBOOK_MODULE_TEST__,T=[{label:"Avocado",value:"avocado"},{label:"Blueberries",value:"blueberries"},{label:"Cherries",value:"cherries"},{label:"Coconut",value:"coconut"},{label:"Disabled option",value:"disabled"},{label:"Strawberries",value:"strawberries"}],A={title:"Forms & Input Fields/Radio",component:u,tags:["updated"],decorators:[e=>t.createElement("div",{style:{maxWidth:"500px",width:"100%"}},t.createElement(e,null))],args:{name:void 0,value:void 0,onChange:G()}},c={render:({...e})=>{const[r,s]=t.useState(e.value),n=a=>{s(a),e.onChange(a)};return t.createElement(u,{...e,value:r,onChange:n},T.map(a=>t.createElement(i,{key:a.value,value:a.value,disabled:e.disabled||a.value==="disabled"},a.label)))},args:{name:"radio-group-favourite-fruit",value:"avocado"}},p={args:{name:"radio-group-multi-line",value:"multi1",children:t.createElement(t.Fragment,null,t.createElement(i,{value:"multi1"},"There is a very good reason why this thing is a multi-line, sometimes we need to show people a lot of things. And thus this exists."),t.createElement(i,{value:"single",disabled:!0},"Some options are just a single line, like this one."))}};var _,f,y;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(y=(f=c.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var b,R,C;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(C=(R=p.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};const F=["RadioGroup","MultipleLines"];export{p as MultipleLines,c as RadioGroup,F as __namedExportsOrder,A as default};
