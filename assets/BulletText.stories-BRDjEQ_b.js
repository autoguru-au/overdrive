import{e,r as l,B as n}from"./iframe-BXi-qtkr.js";import{I as d}from"./Icon-DuJ4PGyM.js";import{i as u}from"./flex-DdEC88PH.js";import{T as m}from"./Text-CDMGdL1J.js";import{I as y}from"./CheckIcon-2zx-ABEB.js";import"./preload-helper-D9Z9MdNV.js";import"./resolveResponsiveProps-C-kRlk7H.js";var g="_1o8gcm90",f="_1o8gcm91",x="_1o8gcm92",v="_1o8gcm93",h="_1o8gcm94";const i=({as:c="div",variant:r="primary",children:p,bullet:s="•"})=>e.createElement(c,{className:u({align:"start",gap:"3",justify:"center",noWrap:!0})},l.isValidElement(s)?e.createElement(n,{position:"relative",flexShrink:0},s):e.createElement(n,{position:"relative",flexShrink:"0",display:"flex",alignItems:"center",justifyContent:"center",className:[g,{[f]:r==="primary",[x]:r!=="primary"}],borderRadius:"pill"},e.createElement(m,{className:{[v]:r==="primary",[h]:r!=="primary"},as:"span",size:"2"},s)),e.createElement(n,{flexGrow:"1"},e.createElement(m,{as:"span",size:"4",display:"block"},p)));try{i.displayName="BulletText",i.__docgenInfo={description:"",displayName:"BulletText",props:{bullet:{defaultValue:{value:"•"},description:"",name:"bullet",required:!1,type:{name:"ReactNode"}},variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},as:{defaultValue:{value:"div"},description:"Name of HTML tag to render the component as",name:"as",required:!1,type:{name:"ElementType"}}}}}catch{}const N={title:"Content/Bullet Text",component:i,args:{as:"div",children:"Hello World",variant:"primary"},argTypes:{bullet:{table:{type:{summary:"Any custom react element"},defaultValue:void 0},description:"Any custom react element",control:{type:"select"}}}},a={},t={args:{variant:"secondary"}},o={args:{variant:"primary",bullet:l.createElement("span",{style:{width:"20px",height:"20px",backgroundColor:" #00dd95",color:"white",borderRadius:"50%",flexDirection:"row",display:"flex",alignContent:"center",justifyContent:"center",alignItems:"center"}},l.createElement(d,{size:"small",icon:y}))}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
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
}`,...o.parameters?.docs?.source}}};const S=["Primary","Secondary","WithCustomBullet"];export{a as Primary,t as Secondary,o as WithCustomBullet,S as __namedExportsOrder,N as default};
