import{r as l,e,n as C,K as _,B,C as w,c as I,H as z}from"./iframe-BXi-qtkr.js";import{B as x}from"./Badge-BlSS0Vsm.js";import{S as N}from"./StarRating-tjjtjBWx.js";import{T as k}from"./Text-CDMGdL1J.js";import{I as U}from"./Icon-DuJ4PGyM.js";import{C as D,c as O}from"./CheckableBase-JjN1VNO6.js";import{I as q}from"./MinusIcon-DngMsCsX.js";import{I as A}from"./CheckIcon-2zx-ABEB.js";import"./preload-helper-D9Z9MdNV.js";import"./flex-DdEC88PH.js";import"./StarHalfIcon-B9JjTdh1.js";import"./StarIcon-uMQipXft.js";import"./resolveResponsiveProps-C-kRlk7H.js";var y={default:"_1ifzuoz0",selected:"_1ifzuoz1"},R="_1ifzuoz2";const g=l.forwardRef(({value:t,className:r="",name:o="",disabled:i=!1,checked:n=!1,isIndeterminate:a=!1,onClick:s=C,onChange:b=C,children:T},S)=>{const v=l.useRef(null);return l.useEffect(()=>{v.current&&(v.current.indeterminate=a)},[a]),e.createElement(D,{ref:_([S,v]),inputType:"checkbox",className:r,inputName:o,value:t,label:T,disabled:i,checked:n,handleClick:s,handleChange:b},e.createElement(B,{className:I(y.default,O,{[y.selected]:n||a}),...w({indeterminate:a})},e.createElement(U,{icon:a?q:A,size:"medium",className:R})))});g.displayName="Checkbox";try{Checkbox.displayName="Checkbox",Checkbox.__docgenInfo={description:"",displayName:"Checkbox",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},checked:{defaultValue:{value:"false"},description:"",name:"checked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},isIndeterminate:{defaultValue:{value:"false"},description:"Used to set an individual checkbox to an inbetween state and sets `indeterminate` accordingly on the native\ninput control. Toggling logic is left up to the parent component",name:"isIndeterminate",required:!1,type:{name:"boolean"}},name:{defaultValue:{value:""},description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},onClick:{defaultValue:{value:"() => {}"},description:"",name:"onClick",required:!1,type:{name:"((checked: boolean) => void)"}},onChange:{defaultValue:{value:"() => {}"},description:"",name:"onChange",required:!1,type:{name:"((checked: boolean) => void)"}}}}}catch{}const{fn:E}=__STORYBOOK_MODULE_TEST__,V=[{label:"Avocado",value:"avocado"},{label:"Blueberries",value:"blueberries"},{label:"Cherries",value:"cherries"},{label:"Coconut",value:"coconut"},{label:"Strawberries",value:"strawberries"}],Z={title:"Forms & Input Fields/CheckBox",component:g,tags:[],decorators:[t=>e.createElement("div",{style:{maxWidth:"500px",width:"100%"}},e.createElement(t,null))],args:{name:"demo-checkbox",children:"Check me!",value:"1",isIndeterminate:!1,disabled:void 0,onChange:E(),onClick:E()},render:({isIndeterminate:t,...r})=>{const[o,i]=l.useState(!1),[n,a]=l.useState(t);return l.useEffect(()=>{t!==n&&a(t)},[t]),e.createElement(g,{...r,isIndeterminate:n,checked:o,onClick:()=>{t&&a(!1),r.onClick?.(o)},onChange:s=>{i(s),r.onChange?.(s)}})}},d={},u={args:{disabled:!0,children:"Can't check me"}},c={args:{isIndeterminate:!0,children:"Not sure"}},m={render:({disabled:t,onChange:r})=>{const[o,i]=l.useState(()=>({avocado:!0,blueberries:!0,cherries:!1,coconut:!0,strawberries:!1})),n=(a,s)=>{i(b=>({...b,[s]:a})),r(s,a)};return e.createElement(e.Fragment,null,V.map(a=>e.createElement(g,{key:a.value,disabled:t,value:a.value,name:`checkbox-${a.value}`,checked:o[a.value],onChange:s=>n(s,a.value)},a.label)))},args:{disabled:!1}},p={args:{checked:!1,disabled:!1,children:"There is a very good reason why this thing is a multi-line, sometimes we need to show people a lot of things. And thus this exists.",value:"1"}},L=({label:t,rating:r})=>e.createElement("div",{style:{display:"grid",gridGap:"8px",gridTemplateColumns:"1fr auto"}},e.createElement(k,null,t),e.createElement(N,{rating:r})),h={args:{checked:!1,disabled:!1,children:e.createElement(L,{label:"Avocados",rating:"4.3"}),value:"1"}},f={args:{checked:!1,disabled:!1,children:e.createElement("div",{style:{display:"grid",gridGap:"8px",gridTemplateColumns:"1fr auto auto"}},e.createElement(z,{as:"h5"},"Your last order"),e.createElement(x,{colour:"neutral",label:"SUBSCRIBE"}),e.createElement(x,{colour:"neutral",label:"AUTO TOP-UP"}),e.createElement("div",{style:{gridColumn:"1/4",display:"grid",gridGap:"8px",gridTemplateColumns:"1fr auto"}},e.createElement(k,{size:"2"},"Ending in 5678"),e.createElement(k,{size:"2"},"Updated 12 Dec 2018"))),value:"1"}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: "Can't check me"
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    isIndeterminate: true,
    children: 'Not sure'
  }
}`,...c.parameters?.docs?.source},description:{story:"The indeterminate checkbox will typically be set by the parent component in a form with nested checkboxes.\nThe indeterminate prop cannot be set by the component itself. This example uses an `onClick` handler to toggle\nthe checked state when the indeterminate checkbox is clicked, the checkbox does not natively have this behaviour.",...c.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: ({
    disabled,
    onChange
  }) => {
    const [selected, setSelected] = useState(() => ({
      avocado: true,
      blueberries: true,
      cherries: false,
      coconut: true,
      strawberries: false
    }));
    const handleChange = (checked: boolean, value: string) => {
      setSelected(prev => ({
        ...prev,
        [value]: checked
      }));
      onChange(value, checked);
    };
    return <>
                {listData.map(item => <CheckBox key={item.value} disabled={disabled} value={item.value} name={\`checkbox-\${item.value}\`} checked={selected[item.value]} onChange={checked => handleChange(checked, item.value)}>
                        {item.label}
                    </CheckBox>)}
            </>;
  },
  args: {
    disabled: false
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    children: 'There is a very good reason why this thing is a multi-line, sometimes we need to show people a lot of things. And thus this exists.',
    value: '1'
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    children: <Item label="Avocados" rating="4.3" />,
    value: '1'
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    children: <div style={{
      display: 'grid',
      gridGap: '8px',
      gridTemplateColumns: '1fr auto auto'
    }}>
                <Heading as="h5">Your last order</Heading>
                <Badge colour="neutral" label="SUBSCRIBE" />
                <Badge colour="neutral" label="AUTO TOP-UP" />
                <div style={{
        gridColumn: '1/4',
        display: 'grid',
        gridGap: '8px',
        gridTemplateColumns: '1fr auto'
      }}>
                    <Text size="2">Ending in 5678</Text>
                    <Text size="2">Updated 12 Dec 2018</Text>
                </div>
            </div>,
    value: '1'
  }
}`,...f.parameters?.docs?.source}}};const ee=["Default","Disabled","Indeterminate","List","MultipleLines","WithComponent","WithMultiLineComponent"];export{d as Default,u as Disabled,c as Indeterminate,m as List,p as MultipleLines,h as WithComponent,f as WithMultiLineComponent,ee as __namedExportsOrder,Z as default};
