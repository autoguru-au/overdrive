import{d as e}from"./tokens-JYR_Lhlb.js";const n=["none","1","2","3","4","5","6","7","8","9"],s=["padding","paddingX","paddingY","paddingTop","paddingRight","paddingLeft","margin","marginX","marginY","marginTop","marginRight","marginLeft"],l=["none","1","2","3","4","5"],i=["none","1","min","full","pill"],r=["full","none"],p=[0,1,2],d={backgroundColour:{options:Object.keys(e),control:{type:"select"}},boxShadow:{options:l,control:{type:"select"}},borderRadius:{options:i,control:{type:"select"}},alignItems:{options:["flexStart","center","flexEnd","stretch"],control:{type:"select"}},justifyContent:{options:["flexStart","center","flexEnd","spaceBetween"],control:{type:"select"}},flexDirection:{options:["row","rowReverse","column","columnReverse"],control:{type:"select"}},flexShrink:{options:{default:void 0,1:"1"}},pointerEvents:{options:{default:void 0,none:"none"}},width:{options:r,defaultValue:null,control:{type:"select"}},order:{options:p,defaultValue:null,control:{type:"select"}},...s.reduce((o,t)=>(o[t]={options:n,control:{type:"select"}},o),{})};export{d as b,n as s};