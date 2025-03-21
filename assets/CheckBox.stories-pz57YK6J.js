import{r as s,R as e}from"./index-UyvCXs0Z.js";import{c as u,u as W,B as G}from"./Box-BZBbKvYV.js";import{n as h}from"./index-BJSya_LC.js";import{C as O,u as H}from"./useCheckableStyles-CVGo1CTJ.js";import{u as M}from"./useTextStyles-ptSZJ0kX.js";import{I as P}from"./Icon-DcPNnT7l.js";import{I as F}from"./CheckIcon-CoTLElTW.js";import{H as $}from"./Heading-ZuMq-oxF.js";import{B as g}from"./Badge-DhlSdTdp.js";import{T as p}from"./Text-BLBByk4R.js";import{S as Y}from"./StarRating-BXOCyEqT.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./dataAttrs-C4KudU4k.js";import"./index-D_iG_Vvt.js";/* empty css                                  */import"./createRuntimeFn-62c9670f.esm-BkdTE7RR.js";import"./Inline-Tz3l7KBY.js";import"./index-ByY9IofJ.js";import"./useNegativeMarginTop-DNM2Rbyz.js";import"./StarHalfIcon-7uPKFcXN.js";import"./StarIcon-CPn0OLOx.js";var j="_1ifzuoz0",f={default:"_1ifzuoz1",selected:"_1ifzuoz2"};const d=s.forwardRef(({value:a,className:l="",name:r="",disabled:q=!1,checked:m=!1,onClick:A=h,onChange:N=h,children:V},D)=>{const L=u(M({colour:"white"}),W({position:"absolute"})),{checkableItem:R}=H();return s.createElement(O,{ref:D,inputType:"checkbox",className:l,inputName:r,value:a,label:V,disabled:q,checked:m,handleClick:A,handleChange:N},m?s.createElement(P,{className:u(j,L),icon:F,size:"small"}):null,s.createElement(G,{borderWidth:"2",borderColour:"gray",className:u(R,f.default,{[f.selected]:m})}))});try{d.displayName="CheckBox",d.__docgenInfo={description:"",displayName:"CheckBox",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},checked:{defaultValue:{value:"false"},description:"",name:"checked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},name:{defaultValue:{value:""},description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},onClick:{defaultValue:{value:"() => {}"},description:"",name:"onClick",required:!1,type:{name:"((checked: boolean) => void)"}},onChange:{defaultValue:{value:"() => {}"},description:"",name:"onChange",required:!1,type:{name:"((checked: boolean) => void)"}}}}}catch{}const ve={title:"Forms & Input Fields/CheckBox",component:d,decorators:[a=>e.createElement("div",{style:{maxWidth:"500px",width:"100%"}},a())]},J=[{label:"Avocado",value:"avocado"},{label:"Blueberries",value:"blueberries"},{label:"Cherries",value:"cherries"},{label:"Coconut",value:"coconut"},{label:"Strawberries",value:"strawberries"}],t={render:({disabled:a,...l})=>e.createElement(e.Fragment,null,J.map(r=>e.createElement(d,{key:r.value,disabled:a,value:r.value,name:`want-${r.value}`,checked:l[r.value]},r.label))),args:{disabled:!1,avocado:!0,blueberries:!0,cherries:!1,coconut:!0,strawberries:!1}},o={args:{checked:!1,disabled:!0,name:"check-name",children:"check me!",value:"1"}},n={args:{checked:!1,disabled:!1,name:"check-name",children:"There is a very good reason why this thing is a multi-line, sometimes we need to show people a lot of things. And thus this exists.",value:"1"}},K=({label:a,rating:l})=>e.createElement("div",{style:{display:"grid",gridGap:"8px",gridTemplateColumns:"1fr auto"}},e.createElement(p,null,a),e.createElement(Y,{rating:l})),i={args:{checked:!1,disabled:!1,name:"check-name",children:e.createElement(K,{label:"Avocados",rating:"4.3"}),value:"1"},argTypes:{children:{control:{disable:!0}}}},c={args:{checked:!1,disabled:!1,name:"check-name",children:e.createElement("div",{style:{display:"grid",gridGap:"8px",gridTemplateColumns:"1fr auto auto"}},e.createElement($,{is:"h5"},"Your last order"),e.createElement(g,{colour:"neutral",label:"SUBSCRIBE"}),e.createElement(g,{colour:"neutral",label:"AUTO TOP-UP"}),e.createElement("div",{style:{gridColumn:"1/4",display:"grid",gridGap:"8px",gridTemplateColumns:"1fr auto"}},e.createElement(p,{size:"2"},"Ending in 5678"),e.createElement(p,{size:"2"},"Updated 12 Dec 2018"))),value:"1"},argTypes:{children:{control:{disable:!0}}}};var b,v,y;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: ({
    disabled,
    ...args
  }) => <>
            {listData.map(item => <CheckBox key={item.value} disabled={disabled} value={item.value} name={\`want-\${item.value}\`} checked={args[item.value]}>
                    {item.label}
                </CheckBox>)}
        </>,
  args: {
    disabled: false,
    // @ts-expect-error example values
    avocado: true,
    blueberries: true,
    cherries: false,
    coconut: true,
    strawberries: false
  }
}`,...(y=(v=t.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var k,C,x;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: true,
    name: 'check-name',
    children: 'check me!',
    value: '1'
  }
}`,...(x=(C=o.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var E,T,B;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    name: 'check-name',
    children: 'There is a very good reason why this thing is a multi-line, sometimes we need to show people a lot of things. And thus this exists.',
    value: '1'
  }
}`,...(B=(T=n.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var S,w,_;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    name: 'check-name',
    children: <Item label="Avocados" rating="4.3" />,
    value: '1'
  },
  argTypes: {
    children: {
      control: {
        disable: true
      }
    }
  }
}`,...(_=(w=i.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};var z,I,U;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    name: 'check-name',
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
  },
  argTypes: {
    children: {
      control: {
        disable: true
      }
    }
  }
}`,...(U=(I=c.parameters)==null?void 0:I.docs)==null?void 0:U.source}}};const ye=["List","Disabled","MultipleLines","WithComponent","WithMultiLineComponent"];export{o as Disabled,t as List,n as MultipleLines,i as WithComponent,c as WithMultiLineComponent,ye as __namedExportsOrder,ve as default};
