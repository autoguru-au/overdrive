import{r as a,R as t}from"./index-Cr_cdoBq.js";import{I as N}from"./ChevronRightIcon-nv1TUYIg.js";import{I as S}from"./ArrowRightIcon-B3tByGC3.js";import{d as O}from"./index-CYx1ALmS.js";import{c as p,u as f,B as T}from"./Box-DRzcxhmO.js";import{T as B}from"./Text-COkn8hme.js";import{I as A}from"./Icon-CskthCNI.js";import"./_commonjsHelpers-C932wzq6.js";import"./dataAttrs-BPvLuXwN.js";import"./useTextStyles-BQjBI_p_.js";var H="_5ax1bk0",D="_5ax1bk1",J="_5ax1bk2";const l=a.forwardRef(({is:e,children:_,className:z,strong:L,fontWeight:P="semiBold",muted:m=!1,size:R,icon:i,...u},w)=>{O.invariant(!(e!==void 0&&u.href!==void 0),"You cannot have both href and as defined.");const d=a.createElement(B,{is:"span",colour:m?"muted":"link",size:R,fontWeight:P,strong:L,className:p(f({is:"span",pointerEvents:"none",position:"relative",paddingRight:i?"5":void 0}),{[J]:m})},_,i?a.createElement(A,{icon:i,size:"small",display:"inlineBlock",className:p(D,f({position:"absolute"}))}):null),c={rel:u.rel??"noopener noreferrer",...u,ref:w};return e===void 0?a.createElement(T,{is:"a",className:[z,H],...c},d):a.isValidElement(e)?a.cloneElement(e,c,d):a.createElement(e,c,d)});try{l.displayName="TextLink",l.__docgenInfo={description:"",displayName:"TextLink",props:{testId:{defaultValue:null,description:"The test ID will be rendered as a data attribute on the element for e2e testing purposes",name:"testId",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},strong:{defaultValue:null,description:"",name:"strong",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'},{value:'"4"'},{value:'"5"'},{value:'"6"'},{value:'"7"'},{value:'"8"'},{value:'"9"'}]}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:"enum",value:[{value:'"inline"'},{value:'"block"'},{value:'"inlineBlock"'}]}},fontWeight:{defaultValue:{value:"semiBold"},description:"",name:"fontWeight",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"bold"'},{value:'"semiBold"'}]}},transform:{defaultValue:null,description:"",name:"transform",required:!1,type:{name:"enum",value:[{value:'"capitalize"'},{value:'"uppercase"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"IconType"}},is:{defaultValue:null,description:"",name:"is",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements> | ReactElement<unknown, string | JSXElementConstructor<any>>"}},muted:{defaultValue:{value:"false"},description:"",name:"muted",required:!1,type:{name:"boolean"}},align:{defaultValue:null,description:"@deprecated Because when you go `useTextStyles` for alignment, you should be using `useBoxStyles`",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},noWrap:{defaultValue:null,description:"",name:"noWrap",required:!1,type:{name:"boolean"}},breakWord:{defaultValue:null,description:"",name:"breakWord",required:!1,type:{name:"boolean"}}}}}catch{}const X=["1","2","3","4","5","6","7","8","9"],Y=["left","center","right"],j=["normal","semiBold","bold"],C={ArrowRightIcon:S,ChevronRightIcon:N},F=[!1,!0],G=["uppercase","capitalize",void 0],ne={title:"Primatives/Text Link",component:l,decorators:[e=>t.createElement("div",{style:{width:"100%",maxWidth:300,display:"grid",gridTemplateColumns:"1fr"}},t.createElement(e,null))],argTypes:{icon:{defaultValue:void 0,description:"Input field Icon",options:C,control:{type:"select"}},noWrap:{options:F,defaultValue:!1,control:{type:"boolean"}},transform:{options:G,defaultValue:null,control:{type:"select"}},fontWeight:{options:j,defaultValue:null,control:{type:"select"}},size:{options:X,defaultValue:void 0,control:{type:"select"}},align:{options:Y,defaultValue:"left",control:{type:"select"}},is:{control:{disable:!0}}}},r={args:{children:"Hello",muted:!1,size:"4",align:"left",fontWeight:"semiBold"},render:e=>t.createElement(T,null,t.createElement(l,{...e}))},n={args:{...r.args},render:e=>t.createElement(B,{is:"p"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad,"," ",t.createElement(l,{...e})," autem consectetur consequuntur eius fugiat illo ipsum nobis numquam, officiis placeat quia, quidem reprehenderit rerum temporibus veniam vero.")},s={args:{...r.args,icon:S},render:r.render},o={args:{...s.args},render:n.render};var g,v,y;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(v=r.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var h,I,b;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Standard.args
  },
  render: args => <Text is="p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad,{' '}
            <TextLink {...args} /> autem consectetur consequuntur eius fugiat
            illo ipsum nobis numquam, officiis placeat quia, quidem
            reprehenderit rerum temporibus veniam vero.
        </Text>
}`,...(b=(I=n.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};var x,q,V;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Standard.args,
    icon: ArrowRightIcon
  },
  render: Standard.render
}`,...(V=(q=s.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var E,W,k;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...WithIcon.args
  },
  render: InsideParagraph.render
}`,...(k=(W=o.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};const se=["Standard","InsideParagraph","WithIcon","WithIconInsideParagraph"];export{n as InsideParagraph,r as Standard,s as WithIcon,o as WithIconInsideParagraph,se as __namedExportsOrder,ne as default};
