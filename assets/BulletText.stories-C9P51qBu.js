import{r as e}from"./index-Cr_cdoBq.js";import{B as n,c as l}from"./Box-C20usNiV.js";import{I as _}from"./Inline-CN8KO1Yx.js";import{T as c}from"./Text-KpqaGcNC.js";import{I}from"./Icon-duyc9Jq5.js";import{I as T}from"./CheckIcon-qb3DRtZd.js";import"./_commonjsHelpers-C932wzq6.js";import"./index-DceDftY5.js";import"./useNegativeMarginTop-9Z6yl5Ag.js";import"./dataAttrs-BPvLuXwN.js";import"./useTextStyles-DCi5KGc3.js";var C="_1o8gcm90",k="_1o8gcm91",w="_1o8gcm92",S="_1o8gcm93",B="_1o8gcm94";const o=({variant:r="primary",children:h,as:b="div",is:E=b,bullet:i="•"})=>e.createElement(_,{noWrap:!0,space:"3",is:E,alignX:"flexStart",alignY:"center"},e.isValidElement(i)?e.createElement(n,{position:"relative",flexShrink:0},i):e.createElement(n,{position:"relative",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",className:l(C,{[k]:r==="primary",[w]:r!=="primary"}),borderRadius:"pill"},e.createElement(c,{className:l({[S]:r==="primary",[B]:r!=="primary"}),is:"span",size:"2"},i)),e.createElement(n,{flexGrow:1},e.createElement(c,{is:"span",size:"4",display:"block"},h)));try{o.displayName="BulletText",o.__docgenInfo={description:"",displayName:"BulletText",props:{bullet:{defaultValue:null,description:"",name:"bullet",required:!1,type:{name:"ReactNode"}},variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},as:{defaultValue:{value:"div"},description:"Pass the name of an html tag to change the rendered element. Typically defaults to `div`",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},is:{defaultValue:null,description:"Alias for `as` prop for backwards compatibility\n@deprecated Use `as` instead",name:"is",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}}}catch{}const H={title:"Components/Bullet Text",component:o,args:{as:"div",children:"Hello World",variant:"primary"},argTypes:{bullet:{table:{type:{summary:"Any custom react element"},defaultValue:void 0},description:"Any custom react element",control:{type:"select"}}}},a={},t={args:{is:"div",variant:"secondary"}},s={args:{is:"div",variant:"primary",bullet:e.createElement("span",{style:{width:"20px",height:"20px",backgroundColor:" #00dd95",color:"white",borderRadius:"50%",flexDirection:"row",display:"flex",alignContent:"center",justifyContent:"center",alignItems:"center"}},e.createElement(I,{size:"small",icon:T}))}};var m,p,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,y,f;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    is: 'div',
    variant: 'secondary'
  }
}`,...(f=(y=t.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var g,v,x;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    is: 'div',
    variant: 'primary',
    bullet: <span style={{
      width: '20px',
      height: '20px',
      backgroundColor: ' #00dd95',
      color: 'white',
      borderRadius: '50%',
      flexDirection: 'row',
      display: 'flex',
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
                <Icon size="small" icon={CheckIcon} />
            </span>
  }
}`,...(x=(v=s.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const O=["Primary","Secondary","WithCustomBullet"];export{a as Primary,t as Secondary,s as WithCustomBullet,O as __namedExportsOrder,H as default};
