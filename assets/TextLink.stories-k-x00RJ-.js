import{r as a,R as t}from"./index-UyvCXs0Z.js";import{I as N}from"./ChevronRightIcon-DAtmVByr.js";import{I as S}from"./ArrowRightIcon-BImX12fV.js";import{d as A}from"./index-D_iG_Vvt.js";import{c as p,u as f,B as T}from"./Box-BZBbKvYV.js";import{T as B}from"./Text-BLBByk4R.js";import{I as O}from"./Icon-DcPNnT7l.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./dataAttrs-C4KudU4k.js";import"./useTextStyles-ptSZJ0kX.js";var H="_5ax1bk0",C="_5ax1bk1",D="_5ax1bk2";const s=a.forwardRef(({is:e,children:_,className:R,strong:z,fontWeight:w="semiBold",muted:m=!1,size:L,icon:o,...u},P)=>{A.invariant(!(e!==void 0&&u.href!==void 0),"You cannot have both href and as defined.");const d=a.createElement(B,{is:"span",colour:m?"muted":"link",size:L,fontWeight:w,strong:z,className:p(f({is:"span",pointerEvents:"none",position:"relative",paddingRight:o?"5":void 0}),{[D]:m})},_,o?a.createElement(O,{icon:o,size:"small",display:"inlineBlock",className:p(C,f({position:"absolute"}))}):null),c={rel:u.rel??"noopener noreferrer",...u,ref:P};return e===void 0?a.createElement(T,{is:"a",className:[R,H],...c},d):a.isValidElement(e)?a.cloneElement(e,c,d):a.createElement(e,c,d)});try{s.displayName="TextLink",s.__docgenInfo={description:"",displayName:"TextLink",props:{testId:{defaultValue:null,description:"The test ID will be rendered as a data attribute on the element for e2e testing purposes",name:"testId",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},is:{defaultValue:null,description:"",name:"is",required:!1,type:{name:"ElementType | ReactElement<unknown, string | JSXElementConstructor<any>>"}},muted:{defaultValue:{value:"false"},description:"",name:"muted",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'},{value:'"4"'},{value:'"5"'},{value:'"6"'},{value:'"7"'},{value:'"8"'},{value:'"9"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:"enum",value:[{value:'"block"'},{value:'"inline"'},{value:'"inlineBlock"'}]}},strong:{defaultValue:null,description:"",name:"strong",required:!1,type:{name:"boolean"}},fontWeight:{defaultValue:{value:"semiBold"},description:"",name:"fontWeight",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"bold"'},{value:'"semiBold"'}]}},transform:{defaultValue:null,description:"",name:"transform",required:!1,type:{name:"enum",value:[{value:'"capitalize"'},{value:'"uppercase"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"IconType"}},noWrap:{defaultValue:null,description:"",name:"noWrap",required:!1,type:{name:"boolean"}},align:{defaultValue:null,description:"@deprecated Because when you go `useTextStyles` for alignment, you should be using `useBoxStyles`",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},breakWord:{defaultValue:null,description:"",name:"breakWord",required:!1,type:{name:"boolean"}}}}}catch{}const J=["1","2","3","4","5","6","7","8","9"],X=["left","center","right"],Y=["normal","semiBold","bold"],j=[!1,!0],F=["uppercase","capitalize",void 0],te={title:"Primatives/Text Link",component:s,decorators:[e=>t.createElement("div",{style:{width:"100%",maxWidth:300,display:"grid",gridTemplateColumns:"1fr"}},t.createElement(e,null))],argTypes:{icon:{defaultValue:null,description:"Input field Icon",options:["Arrow Right","Chevron Right"],mapping:{"Arrow Right":S,"Chevron Right":N}},noWrap:{options:j,defaultValue:!1,control:{type:"boolean"}},transform:{options:F,defaultValue:null,control:{type:"select"}},fontWeight:{options:Y,defaultValue:null,control:{type:"select"}},size:{options:J,defaultValue:void 0,control:{type:"select"}},align:{options:X,defaultValue:"left",control:{type:"select"}},is:{control:{disable:!0}}}},r={args:{children:"Hello",muted:!1,size:"4",align:"left",fontWeight:"semiBold"},render:e=>t.createElement(T,null,t.createElement(s,{...e}))},n={args:{...r.args},render:e=>t.createElement(B,{is:"p"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad,"," ",t.createElement(s,{...e})," autem consectetur consequuntur eius fugiat illo ipsum nobis numquam, officiis placeat quia, quidem reprehenderit rerum temporibus veniam vero.")},l={args:{...r.args,icon:S},render:r.render},i={args:{...l.args},render:n.render};var g,v,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: 'Hello',
    muted: false,
    size: '4',
    align: 'left',
    fontWeight: 'semiBold'
  },
  render: args => <Box>
            <TextLink {...args} />
        </Box>
}`,...(h=(v=r.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var y,b,x;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Standard.args
  },
  render: args => <Text is="p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad,{' '}
            <TextLink {...args} /> autem consectetur consequuntur eius fugiat
            illo ipsum nobis numquam, officiis placeat quia, quidem
            reprehenderit rerum temporibus veniam vero.
        </Text>
}`,...(x=(b=n.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var I,q,V;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    icon: ArrowRightIcon
  },
  render: Standard.render
}`,...(V=(q=l.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var E,W,k;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...WithIcon.args
  },
  render: InsideParagraph.render
}`,...(k=(W=i.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};const ne=["Standard","InsideParagraph","WithIcon","WithIconInsideParagraph"];export{n as InsideParagraph,r as Standard,l as WithIcon,i as WithIconInsideParagraph,ne as __namedExportsOrder,te as default};
