import{r,B as m,c as p,e}from"./iframe-COJ7wZQX.js";import{T as l}from"./Text-C4nXpCEU.js";var d={default:"_13ecipx0",circle:"_13ecipx1",disc:"_13ecipx2",square:"_13ecipx3"},h="_13ecipx4";const x=Object.freeze(Object.defineProperty({__proto__:null,noDot:h,root:d},Symbol.toStringTag,{value:"Module"}));var f="_4koeg0",B="_4koeg1";const g=["circle","square","disc"],u=r.createContext(-1),n=({children:t,className:o})=>{const c=r.useContext(u);return r.createElement(m,{as:"ul",className:p(o,f,{[B]:c===-1}),odComponent:"bullet-list"},r.createElement(u.Provider,{value:c+1>=g.length?0:c+1},t))};try{n.displayName="BulletList",n.__docgenInfo={description:"",displayName:"BulletList",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const b=(t,o)=>{switch(o){case"circle":return t.root.circle;case"square":return t.root.square;case"disc":return t.root.disc;default:return""}},a=({children:t,className:o})=>r.createElement(m,{as:"li",className:[d.default,b(x,g[r.useContext(u)])??"",{[h]:r.isValidElement(t)&&t.type===n},o]},t);try{a.displayName="Bullet",a.__docgenInfo={description:"",displayName:"Bullet",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const y={title:"Content/Bullet List",component:n,decorators:[t=>e.createElement("div",{style:{maxWidth:"500px",width:"100%"}},e.createElement(t,null))]},i={args:{},render:t=>e.createElement(n,{...t},e.createElement(a,null,e.createElement(l,null,"For some, it could be argued that air-conditioning is the most important feature of a car, excluding all the mechanical bits that make it go, stop and turn.")),e.createElement(a,null,e.createElement(l,null,"There are many components that have to work together to ensure the air-conditioning system is working correctly and, with so many contributing parts, it's clear the system should only be serviced or repaired by a qualified technician.")))},s={args:{},render:t=>e.createElement(n,{...t},e.createElement(a,null,e.createElement(l,null,"For some, it could be argued that air-conditioning is the most important feature of a car, excluding all the mechanical bits that make it go, stop and turn.")),e.createElement(a,null,e.createElement(n,{...t},e.createElement(a,null,e.createElement(l,null,"For some, it could be argued that air-conditioning is the most important feature of a car, excluding all the mechanical bits that make it go, stop and turn.")),e.createElement(a,null,e.createElement(n,{...t},e.createElement(a,null,e.createElement(l,null,"For some, it could be argued that air-conditioning is the most important feature of a car, excluding all the mechanical bits that make it go, stop and turn.")),e.createElement(a,null,e.createElement(n,null,e.createElement(a,null,e.createElement(l,null,"For some, it could be argued that air-conditioning is the most important feature of a car, excluding all the mechanical bits that make it go, stop and turn.")))))))),e.createElement(a,null,e.createElement(l,null,"For some, it could be argued that air-conditioning is the most important feature of a car, excluding all the mechanical bits that make it go, stop and turn.")))};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => <BulletList {...args}>
            <Bullet>
                <Text>
                    For some, it could be argued that air-conditioning is the
                    most important feature of a car, excluding all the
                    mechanical bits that make it go, stop and turn.
                </Text>
            </Bullet>
            <Bullet>
                <Text>
                    There are many components that have to work together to
                    ensure the air-conditioning system is working correctly and,
                    with so many contributing parts, it&apos;s clear the system
                    should only be serviced or repaired by a qualified
                    technician.
                </Text>
            </Bullet>
        </BulletList>
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => <BulletList {...args}>
            <Bullet>
                <Text>
                    For some, it could be argued that air-conditioning is the
                    most important feature of a car, excluding all the
                    mechanical bits that make it go, stop and turn.
                </Text>
            </Bullet>
            <Bullet>
                <BulletList {...args}>
                    <Bullet>
                        <Text>
                            For some, it could be argued that air-conditioning
                            is the most important feature of a car, excluding
                            all the mechanical bits that make it go, stop and
                            turn.
                        </Text>
                    </Bullet>
                    <Bullet>
                        <BulletList {...args}>
                            <Bullet>
                                <Text>
                                    For some, it could be argued that
                                    air-conditioning is the most important
                                    feature of a car, excluding all the
                                    mechanical bits that make it go, stop and
                                    turn.
                                </Text>
                            </Bullet>
                            <Bullet>
                                <BulletList>
                                    <Bullet>
                                        <Text>
                                            For some, it could be argued that
                                            air-conditioning is the most
                                            important feature of a car,
                                            excluding all the mechanical bits
                                            that make it go, stop and turn.
                                        </Text>
                                    </Bullet>
                                </BulletList>
                            </Bullet>
                        </BulletList>
                    </Bullet>
                </BulletList>
            </Bullet>
            <Bullet>
                <Text>
                    For some, it could be argued that air-conditioning is the
                    most important feature of a car, excluding all the
                    mechanical bits that make it go, stop and turn.
                </Text>
            </Bullet>
        </BulletList>
}`,...s.parameters?.docs?.source}}};const k=["Standard","Nested"];export{s as Nested,i as Standard,k as __namedExportsOrder,y as default};
