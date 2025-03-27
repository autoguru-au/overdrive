import{f as C}from"./index-mRD-OtaA.js";import{r as l,R as e}from"./index-CIentmI6.js";import{B as J,c as K}from"./Box-Bevh8JBX.js";import{n as x,m as Q}from"./index--QB1QYf1.js";import{d as X}from"./dataAttrs-C4KudU4k.js";import{C as Z,c as ee}from"./CheckableBase-DwYQRqyM.js";/* empty css                                    */import{I as ae}from"./Icon-CDjFf78x.js";import{I as te}from"./MinusIcon-FIUarqtE.js";import{I as re}from"./CheckIcon-Bn_JtJCx.js";import{H as ne}from"./Heading-DgO3C_Fp.js";import{B as y}from"./Badge-BsvnuJZO.js";import{T as k}from"./Text-BOKces_e.js";import{S as se}from"./StarRating-CY_DYONa.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./useTextStyles-BBYvKUtt.js";import"./index-D_iG_Vvt.js";/* empty css                                  */import"./createRuntimeFn-62c9670f.esm-BkdTE7RR.js";import"./Inline-CwPLTrv1.js";import"./index-DxjsDk-K.js";import"./useNegativeMarginTop-B_Mwje1-.js";import"./StarHalfIcon-CHppFXdW.js";import"./StarIcon-BW5zhlRG.js";var E={default:"_1ifzuoz0",selected:"_1ifzuoz1"},le="_1ifzuoz2";const b=l.forwardRef(({value:t,className:r="",name:o="",disabled:c=!1,checked:s=!1,isIndeterminate:a=!1,onClick:n=x,onChange:i=x,children:Y},j)=>{const v=l.useRef(null);return l.useEffect(()=>{v.current&&(v.current.indeterminate=a)},[a]),e.createElement(Z,{ref:Q([j,v]),inputType:"checkbox",className:r,inputName:o,value:t,label:Y,disabled:c,checked:s,handleClick:n,handleChange:i},e.createElement(J,{className:K(E.default,ee,{[E.selected]:s||a}),...X({indeterminate:a})},e.createElement(ae,{icon:a?te:re,size:"medium",className:le})))});b.displayName="Checkbox";try{Checkbox.displayName="Checkbox",Checkbox.__docgenInfo={description:"",displayName:"Checkbox",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},checked:{defaultValue:{value:"false"},description:"",name:"checked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},isIndeterminate:{defaultValue:{value:"false"},description:"Used to set an individual checkbox to an inbetween state and sets `indeterminate` accordingly on the native\ninput control. Toggling logic is left up to the parent component",name:"isIndeterminate",required:!1,type:{name:"boolean"}},name:{defaultValue:{value:""},description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},onClick:{defaultValue:{value:"() => {}"},description:"",name:"onClick",required:!1,type:{name:"((checked: boolean) => void)"}},onChange:{defaultValue:{value:"() => {}"},description:"",name:"onChange",required:!1,type:{name:"((checked: boolean) => void)"}}}}}catch{}const oe=[{label:"Avocado",value:"avocado"},{label:"Blueberries",value:"blueberries"},{label:"Cherries",value:"cherries"},{label:"Coconut",value:"coconut"},{label:"Strawberries",value:"strawberries"}],Ue={title:"Forms & Input Fields/CheckBox",component:b,tags:["updated"],decorators:[t=>e.createElement("div",{style:{maxWidth:"500px",width:"100%"}},e.createElement(t,null))],args:{name:"demo-checkbox",children:"Check me!",value:"1",isIndeterminate:!1,disabled:void 0,onChange:C(),onClick:C()},render:({isIndeterminate:t,...r})=>{const[o,c]=l.useState(!1),[s,a]=l.useState(t);return l.useEffect(()=>{t!==s&&a(t)},[t]),e.createElement(b,{...r,isIndeterminate:s,checked:o,onClick:()=>{var n;t&&a(!1),(n=r.onClick)==null||n.call(r,o)},onChange:n=>{var i;c(n),(i=r.onChange)==null||i.call(r,n)}})}},m={},u={args:{disabled:!0,children:"Can't check me"}},d={args:{isIndeterminate:!0,children:"Not sure"}},p={render:({disabled:t,onChange:r})=>{const[o,c]=l.useState(()=>({avocado:!0,blueberries:!0,cherries:!1,coconut:!0,strawberries:!1})),s=(a,n)=>{c(i=>({...i,[n]:a})),r(n,a)};return e.createElement(e.Fragment,null,oe.map(a=>e.createElement(b,{key:a.value,disabled:t,value:a.value,name:`checkbox-${a.value}`,checked:o[a.value],onChange:n=>s(n,a.value)},a.label)))},args:{disabled:!1}},h={args:{checked:!1,disabled:!1,children:"There is a very good reason why this thing is a multi-line, sometimes we need to show people a lot of things. And thus this exists.",value:"1"}},ie=({label:t,rating:r})=>e.createElement("div",{style:{display:"grid",gridGap:"8px",gridTemplateColumns:"1fr auto"}},e.createElement(k,null,t),e.createElement(se,{rating:r})),f={args:{checked:!1,disabled:!1,children:e.createElement(ie,{label:"Avocados",rating:"4.3"}),value:"1"}},g={args:{checked:!1,disabled:!1,children:e.createElement("div",{style:{display:"grid",gridGap:"8px",gridTemplateColumns:"1fr auto auto"}},e.createElement(ne,{is:"h5"},"Your last order"),e.createElement(y,{colour:"neutral",label:"SUBSCRIBE"}),e.createElement(y,{colour:"neutral",label:"AUTO TOP-UP"}),e.createElement("div",{style:{gridColumn:"1/4",display:"grid",gridGap:"8px",gridTemplateColumns:"1fr auto"}},e.createElement(k,{size:"2"},"Ending in 5678"),e.createElement(k,{size:"2"},"Updated 12 Dec 2018"))),value:"1"}};var T,S,w;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:"{}",...(w=(S=m.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var B,I,_;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: "Can't check me"
  }
}`,...(_=(I=u.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var z,N,R,U,q;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    isIndeterminate: true,
    children: 'Not sure'
  }
}`,...(R=(N=d.parameters)==null?void 0:N.docs)==null?void 0:R.source},description:{story:"The indeterminate checkbox will typically be set by the parent component in a form with nested checkboxes.\nThe indeterminate prop cannot be set by the component itself. This example uses an `onClick` handler to toggle\nthe checked state when the indeterminate checkbox is clicked, the checkbox does not natively have this behaviour.",...(q=(U=d.parameters)==null?void 0:U.docs)==null?void 0:q.description}}};var A,D,V;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(V=(D=p.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var L,G,H;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    children: 'There is a very good reason why this thing is a multi-line, sometimes we need to show people a lot of things. And thus this exists.',
    value: '1'
  }
}`,...(H=(G=h.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var O,W,M;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    children: <Item label="Avocados" rating="4.3" />,
    value: '1'
  }
}`,...(M=(W=f.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var P,$,F;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    children: <div style={{
      display: 'grid',
      gridGap: '8px',
      gridTemplateColumns: '1fr auto auto'
    }}>
                <Heading is="h5">Your last order</Heading>
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
}`,...(F=($=g.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};const qe=["Default","Disabled","Indeterminate","List","MultipleLines","WithComponent","WithMultiLineComponent"];export{m as Default,u as Disabled,d as Indeterminate,p as List,h as MultipleLines,f as WithComponent,g as WithMultiLineComponent,qe as __namedExportsOrder,Ue as default};
