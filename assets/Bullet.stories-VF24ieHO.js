import{r as l,R as e}from"./index-DVCUSwsV.js";import{B as f,c as _}from"./Box-Daq3CeQj.js";import{T as r}from"./Text--khTZFS_.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./useTextStyles-DdOkPJce.js";var y="_4koeg0",k="_4koeg1";const B=["circle","square","disc"],u=l.createContext(-1),n=({children:t,className:i})=>{const c=l.useContext(u);return l.createElement(f,{is:"ul",className:_(i,y,{[k]:c===-1})},l.createElement(u.Provider,{value:c+1>=B.length?0:c+1},t))};try{n.displayName="BulletList",n.__docgenInfo={description:"",displayName:"BulletList",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}var b={default:"_13ecipx0",circle:"_13ecipx1",disc:"_13ecipx2",square:"_13ecipx3"},E="_13ecipx4";const T=Object.freeze(Object.defineProperty({__proto__:null,noDot:E,root:b},Symbol.toStringTag,{value:"Module"})),L=(t,i)=>{switch(i){case"circle":return t.root.circle;case"square":return t.root.square;case"disc":return t.root.disc;default:return""}},a=({children:t,className:i})=>l.createElement(f,{is:"li",className:[b.default,L(T,B[l.useContext(u)])??"",{[E]:l.isValidElement(t)&&t.type===n},i]},t);try{a.displayName="Bullet",a.__docgenInfo={description:"",displayName:"Bullet",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const S={title:"Primatives/Bullet List",component:n,decorators:[t=>e.createElement("div",{style:{maxWidth:"500px",width:"100%"}},e.createElement(t,null))]},o={args:{},render:t=>e.createElement(n,{...t},e.createElement(a,null,e.createElement(r,null,"For some, it could be argued that air-conditioning is the most important feature of a car, excluding all the mechanical bits that make it go, stop and turn.")),e.createElement(a,null,e.createElement(r,null,"There are many components that have to work together to ensure the air-conditioning system is working correctly and, with so many contributing parts, it's clear the system should only be serviced or repaired by a qualified technician.")))},s={args:{},render:t=>e.createElement(n,{...t},e.createElement(a,null,e.createElement(r,null,"For some, it could be argued that air-conditioning is the most important feature of a car, excluding all the mechanical bits that make it go, stop and turn.")),e.createElement(a,null,e.createElement(n,{...t},e.createElement(a,null,e.createElement(r,null,"For some, it could be argued that air-conditioning is the most important feature of a car, excluding all the mechanical bits that make it go, stop and turn.")),e.createElement(a,null,e.createElement(n,{...t},e.createElement(a,null,e.createElement(r,null,"For some, it could be argued that air-conditioning is the most important feature of a car, excluding all the mechanical bits that make it go, stop and turn.")),e.createElement(a,null,e.createElement(n,null,e.createElement(a,null,e.createElement(r,null,"For some, it could be argued that air-conditioning is the most important feature of a car, excluding all the mechanical bits that make it go, stop and turn.")))))))),e.createElement(a,null,e.createElement(r,null,"For some, it could be argued that air-conditioning is the most important feature of a car, excluding all the mechanical bits that make it go, stop and turn.")))};var m,d,h;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(h=(d=o.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var g,p,x;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(x=(p=s.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};const C=["Standard","Nested"];export{s as Nested,o as Standard,C as __namedExportsOrder,S as default};
