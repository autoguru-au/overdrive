import{r as u,e,B as p,c as L,t as x,S as I}from"./iframe-D_ivnAPa.js";import{T as r}from"./Text-IE4mIZod.js";var i={default:"slup3y0",firstOccurrence:"slup3y1"};const d=["decimal","lower-roman","lower-alpha","upper-alpha","lower-roman"],o=u.createContext(-1),t=({children:n,className:m,type:a=null,start:O})=>{const c=u.useContext(o);let l;return c+1>d.length?l=a===null?0:d.indexOf(a):l=a===null?c+1:d.indexOf(a),e.createElement(p,{as:"ol",paddingLeft:"6",marginTop:l>0?"2":"none",className:L(i.default,x({colour:"dark"}),{[i.firstOccurrence]:c===-1},m),style:{listStyleType:d[l]},start:O,odComponent:"ordered-list"},e.createElement(o.Provider,{value:l},e.createElement(I,{space:"2"},n)))},E=({className:n,children:m})=>e.createElement(p,{as:"li",className:n},m);t.Item=E;try{t.displayName="OrderedList",t.__docgenInfo={description:"",displayName:"OrderedList",props:{type:{defaultValue:{value:"null"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"decimal"'},{value:'"lower-roman"'},{value:'"lower-alpha"'},{value:'"upper-alpha"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const f={title:"Content/Ordered List",component:t},s={render:n=>e.createElement(t,{...n},e.createElement(t.Item,null,e.createElement(r,null,"Strawberry")),e.createElement(t.Item,null,e.createElement(r,null,"Watermelon"),e.createElement(t,null,e.createElement(t.Item,null,e.createElement(r,null,"Mango")),e.createElement(t.Item,null,e.createElement(r,null,"Banana")),e.createElement(t.Item,null,e.createElement(r,null,"Apple"),e.createElement(t,null,e.createElement(t.Item,null,e.createElement(r,null,"Grape")),e.createElement(t.Item,null,e.createElement(r,null,"Orange")))),e.createElement(t.Item,null,e.createElement(r,null,"Pineapple")))),e.createElement(t.Item,null,e.createElement(r,null,"Pear")))};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const g=["Standard"];export{s as Standard,g as __namedExportsOrder,f as default};
