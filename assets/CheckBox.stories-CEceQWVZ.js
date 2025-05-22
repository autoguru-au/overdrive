import{r as l,e,n as C,C as j,B as J,x as Q,c as X,H as Z}from"./iframe-C_bA5shj.js";import{B as x}from"./Badge-Bx8WOREP.js";import{S as ee}from"./StarRating-sTkoA2Jt.js";import{T as k}from"./Text-Bu_KMAJq.js";import{I as ae}from"./Icon-BzD9lmaF.js";import{C as te,c as re}from"./CheckableBase-DzoZXDeg.js";import{I as ne}from"./MinusIcon-BQrrzg-Z.js";import{I as se}from"./CheckIcon-DG8KXA_G.js";import"./Inline-r3ivNJ6m.js";import"./StarHalfIcon-BPaOM6AA.js";import"./StarIcon-BZvV_97V.js";import"./resolveResponsiveProps-CWlS2Mbp.js";var y={default:"_1ifzuoz0",selected:"_1ifzuoz1"},le="_1ifzuoz2";const b=l.forwardRef(({value:t,className:r="",name:o="",disabled:i=!1,checked:s=!1,isIndeterminate:a=!1,onClick:n=C,onChange:c=C,children:Y},K)=>{const v=l.useRef(null);return l.useEffect(()=>{v.current&&(v.current.indeterminate=a)},[a]),e.createElement(te,{ref:j([K,v]),inputType:"checkbox",className:r,inputName:o,value:t,label:Y,disabled:i,checked:s,handleClick:n,handleChange:c},e.createElement(J,{className:X(y.default,re,{[y.selected]:s||a}),...Q({indeterminate:a})},e.createElement(ae,{icon:a?ne:se,size:"medium",className:le})))});b.displayName="Checkbox";try{Checkbox.displayName="Checkbox",Checkbox.__docgenInfo={description:"",displayName:"Checkbox",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},checked:{defaultValue:{value:"false"},description:"",name:"checked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},isIndeterminate:{defaultValue:{value:"false"},description:"Used to set an individual checkbox to an inbetween state and sets `indeterminate` accordingly on the native\ninput control. Toggling logic is left up to the parent component",name:"isIndeterminate",required:!1,type:{name:"boolean"}},name:{defaultValue:{value:""},description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},onClick:{defaultValue:{value:"() => {}"},description:"",name:"onClick",required:!1,type:{name:"((checked: boolean) => void)"}},onChange:{defaultValue:{value:"() => {}"},description:"",name:"onChange",required:!1,type:{name:"((checked: boolean) => void)"}}}}}catch{}const{fn:E}=__STORYBOOK_MODULE_TEST__,oe=[{label:"Avocado",value:"avocado"},{label:"Blueberries",value:"blueberries"},{label:"Cherries",value:"cherries"},{label:"Coconut",value:"coconut"},{label:"Strawberries",value:"strawberries"}],xe={title:"Forms & Input Fields/CheckBox",component:b,tags:["updated"],decorators:[t=>e.createElement("div",{style:{maxWidth:"500px",width:"100%"}},e.createElement(t,null))],args:{name:"demo-checkbox",children:"Check me!",value:"1",isIndeterminate:!1,disabled:void 0,onChange:E(),onClick:E()},render:({isIndeterminate:t,...r})=>{const[o,i]=l.useState(!1),[s,a]=l.useState(t);return l.useEffect(()=>{t!==s&&a(t)},[t]),e.createElement(b,{...r,isIndeterminate:s,checked:o,onClick:()=>{var n;t&&a(!1),(n=r.onClick)==null||n.call(r,o)},onChange:n=>{var c;i(n),(c=r.onChange)==null||c.call(r,n)}})}},u={},m={args:{disabled:!0,children:"Can't check me"}},d={args:{isIndeterminate:!0,children:"Not sure"}},p={render:({disabled:t,onChange:r})=>{const[o,i]=l.useState(()=>({avocado:!0,blueberries:!0,cherries:!1,coconut:!0,strawberries:!1})),s=(a,n)=>{i(c=>({...c,[n]:a})),r(n,a)};return e.createElement(e.Fragment,null,oe.map(a=>e.createElement(b,{key:a.value,disabled:t,value:a.value,name:`checkbox-${a.value}`,checked:o[a.value],onChange:n=>s(n,a.value)},a.label)))},args:{disabled:!1}},h={args:{checked:!1,disabled:!1,children:"There is a very good reason why this thing is a multi-line, sometimes we need to show people a lot of things. And thus this exists.",value:"1"}},ce=({label:t,rating:r})=>e.createElement("div",{style:{display:"grid",gridGap:"8px",gridTemplateColumns:"1fr auto"}},e.createElement(k,null,t),e.createElement(ee,{rating:r})),f={args:{checked:!1,disabled:!1,children:e.createElement(ce,{label:"Avocados",rating:"4.3"}),value:"1"}},g={args:{checked:!1,disabled:!1,children:e.createElement("div",{style:{display:"grid",gridGap:"8px",gridTemplateColumns:"1fr auto auto"}},e.createElement(Z,{as:"h5"},"Your last order"),e.createElement(x,{colour:"neutral",label:"SUBSCRIBE"}),e.createElement(x,{colour:"neutral",label:"AUTO TOP-UP"}),e.createElement("div",{style:{gridColumn:"1/4",display:"grid",gridGap:"8px",gridTemplateColumns:"1fr auto"}},e.createElement(k,{size:"2"},"Ending in 5678"),e.createElement(k,{size:"2"},"Updated 12 Dec 2018"))),value:"1"}};var T,S,_;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:"{}",...(_=(S=u.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var B,w,I;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: "Can't check me"
  }
}`,...(I=(w=m.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var z,N,U,D,O;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    isIndeterminate: true,
    children: 'Not sure'
  }
}`,...(U=(N=d.parameters)==null?void 0:N.docs)==null?void 0:U.source},description:{story:"The indeterminate checkbox will typically be set by the parent component in a form with nested checkboxes.\nThe indeterminate prop cannot be set by the component itself. This example uses an `onClick` handler to toggle\nthe checked state when the indeterminate checkbox is clicked, the checkbox does not natively have this behaviour.",...(O=(D=d.parameters)==null?void 0:D.docs)==null?void 0:O.description}}};var q,A,R;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(R=(A=p.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var V,L,G;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    children: 'There is a very good reason why this thing is a multi-line, sometimes we need to show people a lot of things. And thus this exists.',
    value: '1'
  }
}`,...(G=(L=h.parameters)==null?void 0:L.docs)==null?void 0:G.source}}};var H,M,W;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    children: <Item label="Avocados" rating="4.3" />,
    value: '1'
  }
}`,...(W=(M=f.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var P,$,F;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(F=($=g.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};const ye=["Default","Disabled","Indeterminate","List","MultipleLines","WithComponent","WithMultiLineComponent"];export{u as Default,m as Disabled,d as Indeterminate,p as List,h as MultipleLines,f as WithComponent,g as WithMultiLineComponent,ye as __namedExportsOrder,xe as default};
