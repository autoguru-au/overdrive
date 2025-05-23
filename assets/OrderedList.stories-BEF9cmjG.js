import{r as l,B as x,c as E,t as T,S as y,e}from"./iframe-B8iXgyt9.js";import{T as r}from"./Text-BLEkj1El.js";var o={default:"slup3y0",firstOccurrence:"slup3y1"};const s=["decimal","lower-roman","lower-alpha","upper-alpha","lower-roman"],u=l.createContext(-1),t=({children:n,className:c="",type:d=null,start:I})=>{const i=l.useContext(u);let a;return i+1>s.length?a=d===null?0:s.indexOf(d):a=d===null?i+1:s.indexOf(d),l.createElement(x,{as:"ol",paddingLeft:"6",marginTop:a>0?"2":"none",className:E(o.default,T({colour:"dark"}),{[o.firstOccurrence]:i===-1},c),style:{listStyleType:s[a]},start:I},l.createElement(u.Provider,{value:a},l.createElement(y,{space:"2"},n)))},f=({className:n="",children:c})=>l.createElement(x,{as:"li",className:n},c);t.Item=f;try{t.displayName="OrderedList",t.__docgenInfo={description:"",displayName:"OrderedList",props:{type:{defaultValue:{value:"null"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"decimal"'},{value:'"lower-roman"'},{value:'"lower-alpha"'},{value:'"upper-alpha"'}]}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const _={title:"Primatives/Ordered List",component:t},m={render:n=>e.createElement(t,{...n},e.createElement(t.Item,null,e.createElement(r,null,"Strawberry")),e.createElement(t.Item,null,e.createElement(r,null,"Watermelon"),e.createElement(t,null,e.createElement(t.Item,null,e.createElement(r,null,"Mango")),e.createElement(t.Item,null,e.createElement(r,null,"Banana")),e.createElement(t.Item,null,e.createElement(r,null,"Apple"),e.createElement(t,null,e.createElement(t.Item,null,e.createElement(r,null,"Grape")),e.createElement(t.Item,null,e.createElement(r,null,"Orange")))),e.createElement(t.Item,null,e.createElement(r,null,"Pineapple")))),e.createElement(t.Item,null,e.createElement(r,null,"Pear")))};var p,O,L;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(L=(O=m.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};const S=["Standard"];export{m as Standard,S as __namedExportsOrder,_ as default};
