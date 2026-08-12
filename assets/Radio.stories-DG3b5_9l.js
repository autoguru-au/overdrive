import{e}from"./iframe-zIO8-QHw.js";import{R as s,a as n}from"./Radio-DzIcPJrb.js";import"./preload-helper-PPVm8Dsz.js";import"./CheckableBase-3qRYKgdi.js";import"./Text-kEIcHbNZ.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,m=[{label:"Avocado",value:"avocado"},{label:"Blueberries",value:"blueberries"},{label:"Cherries",value:"cherries"},{label:"Coconut",value:"coconut"},{label:"Disabled option",value:"disabled"},{label:"Strawberries",value:"strawberries"}],b={title:"Forms & Input Fields/Radio",component:s,tags:[],decorators:[o=>e.createElement("div",{style:{maxWidth:"500px",width:"100%"}},e.createElement(o,null))],args:{name:void 0,value:void 0,onChange:d()}},t={render:({...o})=>{const[i,r]=e.useState(o.value),u=a=>{r(a),o.onChange(a)};return e.createElement(s,{...o,value:i,onChange:u},m.map(a=>e.createElement(n,{key:a.value,value:a.value,disabled:o.disabled||a.value==="disabled"},a.label)))},args:{name:"radio-group-favourite-fruit",value:"avocado"}},l={args:{name:"radio-group-multi-line",value:"multi1",children:e.createElement(e.Fragment,null,e.createElement(n,{value:"multi1"},"There is a very good reason why this thing is a multi-line, sometimes we need to show people a lot of things. And thus this exists."),e.createElement(n,{value:"single",disabled:!0},"Some options are just a single line, like this one."))}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const R=["RadioGroup","MultipleLines"];export{l as MultipleLines,t as RadioGroup,R as __namedExportsOrder,b as default};
