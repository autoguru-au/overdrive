import{r as p,e,H as x}from"./iframe-zIO8-QHw.js";import{B as f}from"./Badge-b_KO3CVw.js";import{S as E}from"./StarRating-CCGIEPKN.js";import{T as b}from"./Text-kEIcHbNZ.js";import{C as v}from"./CheckBox-CmNDL6AQ.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-DjR4ejWK.js";import"./Icon-BF7ocTT2.js";import"./resolveResponsiveProps-CneTyc4t.js";import"./StarIcon-DsvD5faD.js";import"./StarHalfIcon-C6W0OaPH.js";import"./CheckableBase-3qRYKgdi.js";import"./MinusIcon-DoxN2XA1.js";import"./CheckIcon-ULStC8Te.js";const{fn:C}=__STORYBOOK_MODULE_TEST__,y=[{label:"Avocado",value:"avocado"},{label:"Blueberries",value:"blueberries"},{label:"Cherries",value:"cherries"},{label:"Coconut",value:"coconut"},{label:"Strawberries",value:"strawberries"}],z={title:"Forms & Input Fields/CheckBox",component:v,tags:[],decorators:[t=>e.createElement("div",{style:{maxWidth:"500px",width:"100%"}},e.createElement(t,null))],args:{name:"demo-checkbox",children:"Check me!",value:"1",isIndeterminate:!1,disabled:void 0,onChange:C(),onClick:C()},render:({isIndeterminate:t,...r})=>{const[l,g]=p.useState(!1),[o,a]=p.useState(t);return p.useEffect(()=>{t!==o&&a(t)},[t]),e.createElement(v,{...r,isIndeterminate:o,checked:l,onClick:()=>{t&&a(!1),r.onClick?.(l)},onChange:s=>{g(s),r.onChange?.(s)}})}},i={},c={args:{disabled:!0,children:"Can't check me"}},n={args:{isIndeterminate:!0,children:"Not sure"}},d={render:({disabled:t,onChange:r})=>{const[l,g]=p.useState(()=>({avocado:!0,blueberries:!0,cherries:!1,coconut:!0,strawberries:!1})),o=(a,s)=>{g(k=>({...k,[s]:a})),r(s,a)};return e.createElement(e.Fragment,null,y.map(a=>e.createElement(v,{key:a.value,disabled:t,value:a.value,name:`checkbox-${a.value}`,checked:l[a.value],onChange:s=>o(s,a.value)},a.label)))},args:{disabled:!1}},m={args:{checked:!1,disabled:!1,children:"There is a very good reason why this thing is a multi-line, sometimes we need to show people a lot of things. And thus this exists.",value:"1"}},S=({label:t,rating:r})=>e.createElement("div",{style:{display:"grid",gridGap:"8px",gridTemplateColumns:"1fr auto"}},e.createElement(b,null,t),e.createElement(E,{rating:r})),u={args:{checked:!1,disabled:!1,children:e.createElement(S,{label:"Avocados",rating:"4.3"}),value:"1"}},h={args:{checked:!1,disabled:!1,children:e.createElement("div",{style:{display:"grid",gridGap:"8px",gridTemplateColumns:"1fr auto auto"}},e.createElement(x,{as:"h5"},"Your last order"),e.createElement(f,{colour:"neutral",label:"SUBSCRIBE"}),e.createElement(f,{colour:"neutral",label:"AUTO TOP-UP"}),e.createElement("div",{style:{gridColumn:"1/4",display:"grid",gridGap:"8px",gridTemplateColumns:"1fr auto"}},e.createElement(b,{size:"2"},"Ending in 5678"),e.createElement(b,{size:"2"},"Updated 12 Dec 2018"))),value:"1"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: "Can't check me"
  }
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isIndeterminate: true,
    children: 'Not sure'
  }
}`,...n.parameters?.docs?.source},description:{story:"The indeterminate checkbox will typically be set by the parent component in a form with nested checkboxes.\nThe indeterminate prop cannot be set by the component itself. This example uses an `onClick` handler to toggle\nthe checked state when the indeterminate checkbox is clicked, the checkbox does not natively have this behaviour.",...n.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    children: 'There is a very good reason why this thing is a multi-line, sometimes we need to show people a lot of things. And thus this exists.',
    value: '1'
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    children: <Item label="Avocados" rating="4.3" />,
    value: '1'
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const P=["Default","Disabled","Indeterminate","List","MultipleLines","WithComponent","WithMultiLineComponent"];export{i as Default,c as Disabled,n as Indeterminate,d as List,m as MultipleLines,u as WithComponent,h as WithMultiLineComponent,P as __namedExportsOrder,z as default};
