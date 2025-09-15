import{r as u,u as I,t as x,e}from"./iframe-C5x-mm7q.js";import{T as r}from"./Text-B_TnC6LV.js";import{a as E}from"./flex-BQ2abrn-.js";import"./preload-helper-D9Z9MdNV.js";var c={default:"slup3y0",firstOccurrence:"slup3y1"};const d=["decimal","lower-roman","lower-alpha","upper-alpha","lower-roman"],i=u.createContext(-1),t=({children:n,className:m,type:a=null,start:p})=>{const o=u.useContext(i);let l;o+1>d.length?l=a===null?0:d.indexOf(a):l=a===null?o+1:d.indexOf(a);const{Component:O,componentProps:L}=I({as:"ol",className:[c.default,E({gap:"2"}),x({colour:"dark"}),{[c.firstOccurrence]:o===-1},m],marginTop:l>0?"2":"none",paddingLeft:"6",odComponent:"ordered-list",start:p,style:{listStyleType:d[l]}});return e.createElement(O,{...L},e.createElement(i.Provider,{value:l},n))},T=({className:n,children:m})=>e.createElement("li",{className:n},m);t.Item=T;try{t.displayName="OrderedList",t.__docgenInfo={description:"",displayName:"OrderedList",props:{type:{defaultValue:{value:"null"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"decimal"'},{value:'"lower-roman"'},{value:'"lower-alpha"'},{value:'"upper-alpha"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const v={title:"Content/Ordered List",component:t},s={render:n=>e.createElement(t,{...n},e.createElement(t.Item,null,e.createElement(r,null,"Strawberry")),e.createElement(t.Item,null,e.createElement(r,null,"Watermelon"),e.createElement(t,null,e.createElement(t.Item,null,e.createElement(r,null,"Mango")),e.createElement(t.Item,null,e.createElement(r,null,"Banana")),e.createElement(t.Item,null,e.createElement(r,null,"Apple"),e.createElement(t,null,e.createElement(t.Item,null,e.createElement(r,null,"Grape")),e.createElement(t.Item,null,e.createElement(r,null,"Orange")))),e.createElement(t.Item,null,e.createElement(r,null,"Pineapple")))),e.createElement(t.Item,null,e.createElement(r,null,"Pear")))};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <OrderedList {...args}>
            <OrderedList.Item>
                <Text>Strawberry</Text>
            </OrderedList.Item>
            <OrderedList.Item>
                <Text>Watermelon</Text>
                <OrderedList>
                    <OrderedList.Item>
                        <Text>Mango</Text>
                    </OrderedList.Item>
                    <OrderedList.Item>
                        <Text>Banana</Text>
                    </OrderedList.Item>
                    <OrderedList.Item>
                        <Text>Apple</Text>
                        <OrderedList>
                            <OrderedList.Item>
                                <Text>Grape</Text>
                            </OrderedList.Item>
                            <OrderedList.Item>
                                <Text>Orange</Text>
                            </OrderedList.Item>
                        </OrderedList>
                    </OrderedList.Item>
                    <OrderedList.Item>
                        <Text>Pineapple</Text>
                    </OrderedList.Item>
                </OrderedList>
            </OrderedList.Item>
            <OrderedList.Item>
                <Text>Pear</Text>
            </OrderedList.Item>
        </OrderedList>
}`,...s.parameters?.docs?.source}}};const w=["Standard"];export{s as Standard,w as __namedExportsOrder,v as default};
