import{r as e}from"./index-Cr_cdoBq.js";import{c as u,u as O,B as R}from"./Box-B8HP0AOd.js";import{n as h}from"./index-liKTkxwF.js";import{C as $,u as H}from"./useCheckableStyles-QvK5xNjF.js";import{u as Y}from"./useTextStyles-Db9gttPw.js";import{I as j}from"./Icon-B6rvmQwO.js";import{I as J}from"./CheckIcon-qb3DRtZd.js";import{H as K}from"./Heading-DojwlpJi.js";import{B as b}from"./Badge-RvuLnz-b.js";import{T as p}from"./Text-XoxmVRhK.js";import{S as Q}from"./StarRating-CmU-Nt5Y.js";import"./_commonjsHelpers-C932wzq6.js";import"./dataAttrs-BPvLuXwN.js";import"./index-CYx1ALmS.js";import"./Inline-BKr5h5KK.js";import"./index-DD0GW_rr.js";import"./useNegativeMarginTop-CCu3uhyU.js";import"./StarHalfIcon-BFcO0sSZ.js";import"./StarIcon-DwMJajzk.js";var X="_1ifzuoz0",f={default:"_1ifzuoz1",selected:"_1ifzuoz2"};const i=e.forwardRef(({value:a,className:l="",name:r="",disabled:M=!1,checked:m=!1,onClick:W=h,onChange:D=h,children:A},U)=>{const F=u(Y({colour:"white"}),O({position:"absolute"})),{checkableItem:G}=H();return e.createElement($,{ref:U,inputType:"checkbox",className:l,inputName:r,value:a,label:A,disabled:M,checked:m,handleClick:W,handleChange:D},m?e.createElement(j,{className:u(X,F),icon:J,size:"small"}):null,e.createElement(R,{borderWidth:"2",borderColour:"gray",className:u(G,f.default,{[f.selected]:m})}))});try{i.displayName="CheckBox",i.__docgenInfo={description:"",displayName:"CheckBox",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},checked:{defaultValue:{value:"false"},description:"",name:"checked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},name:{defaultValue:{value:""},description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},onClick:{defaultValue:{value:"() => {}"},description:"",name:"onClick",required:!1,type:{name:"((checked: boolean) => void)"}},onChange:{defaultValue:{value:"() => {}"},description:"",name:"onChange",required:!1,type:{name:"((checked: boolean) => void)"}}}}}catch{}const ye={title:"Forms & Input Fields/CheckBox",component:i,decorators:[a=>e.createElement("div",{style:{maxWidth:"500px",width:"100%"}},a())]},Z=[{label:"Avocado",value:"avocado"},{label:"Blueberries",value:"blueberries"},{label:"Cherries",value:"cherries"},{label:"Coconut",value:"coconut"},{label:"Strawberries",value:"strawberries"}],c={render:({disabled:a,...l})=>e.createElement(e.Fragment,null,Z.map(r=>e.createElement(i,{key:r.value,disabled:a,children:r.label,value:r.value,name:`want-${r.value}`,checked:l[r.value]}))),args:{disabled:!1,avocado:!0,blueberries:!0,cherries:!1,coconut:!0,strawberries:!1}},d=a=>e.createElement(i,{...a}),L={checked:!1,disabled:!0,name:"check-name",children:"check me!",value:"1"},q={checked:!1,disabled:!1,name:"check-name",children:"There is a very good reason why this thing is a multi-line, sometimes we need to show people a lot of things. And thus this exists.",value:"1"},ee=({label:a,rating:l})=>e.createElement("div",{style:{display:"grid",gridGap:"8px",gridTemplateColumns:"1fr auto"}},e.createElement(p,null,a),e.createElement(Q,{rating:l})),N={checked:!1,disabled:!1,name:"check-name",children:e.createElement(ee,{label:"Avocados",rating:"4.3"}),value:"1"},V={checked:!1,disabled:!1,name:"check-name",children:e.createElement("div",{style:{display:"grid",gridGap:"8px",gridTemplateColumns:"1fr auto auto"}},e.createElement(K,{is:"h5"},"Your last order"),e.createElement(b,{colour:"neutral",label:"SUBSCRIBE"}),e.createElement(b,{colour:"neutral",label:"AUTO TOP-UP"}),e.createElement("div",{style:{gridColumn:"1/4",display:"grid",gridGap:"8px",gridTemplateColumns:"1fr auto"}},e.createElement(p,{size:"2"},"Ending in 5678"),e.createElement(p,{size:"2"},"Updated 12 Dec 2018"))),value:"1"},o=d.bind(L);o.args=L;const n=d.bind(q);n.args=q;const t=d.bind(N);t.args=N;t.argTypes={children:{control:{disable:!0}}};const s=d.bind(V);s.args=V;s.argTypes={children:{control:{disable:!0}}};var g,v,C;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: ({
    disabled,
    ...args
  }) => <>
            {listData.map((item: {
      label: string;
      value: string;
    }) => {
      return <CheckBox key={item.value} disabled={disabled} children={item.label} value={item.value} name={\`want-\${item.value}\`} checked={args[item.value]} />;
    })}
        </>,
  args: {
    disabled: false,
    avocado: true,
    blueberries: true,
    cherries: false,
    coconut: true,
    strawberries: false
  }
}`,...(C=(v=c.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var y,k,E;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:"Template.bind(disabledProps)",...(E=(k=o.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var x,T,w;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"Template.bind(multipleLinesProps)",...(w=(T=n.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var B,S,_;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:"Template.bind(withComponentProps)",...(_=(S=t.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var P,z,I;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:"Template.bind(withMultiLineComponentProps)",...(I=(z=s.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};const ke=["list","Disabled","MultipleLines","WithComponent","WithMultiLineComponent"];export{o as Disabled,n as MultipleLines,t as WithComponent,s as WithMultiLineComponent,ke as __namedExportsOrder,ye as default,c as list};
