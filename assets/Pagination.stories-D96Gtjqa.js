import{a as Ee}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{r as s}from"./index-DhrokLn_.js";import{B as M,c as pe}from"./Box-BNrxSn68.js";import{n as me}from"./index-DuV4LTKI.js";import{u as ue}from"./useTextStyles-B_b2rbpS.js";import{I as ge}from"./Inline-DhEAVFTh.js";import{I as fe}from"./ChevronLeftIcon-Cbc3CAET.js";import{I as be}from"./ChevronRightIcon-RimmcZLk.js";import{I as je}from"./Icon-C5RKsWkK.js";import"./v4-CQkTLCs1.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-7-gbC2VC.js";import"./useNegativeMarginTop-CalKh-AO.js";import"./Text-BFT02PFo.js";var w="_9nf7kx0",xe="_9nf7kx1",Me="_9nf7kx2";const _=({className:e="",selected:a=!1,gap:r=!1,children:t,disabled:l,onClick:c})=>{let n="transparent";return a?n="green900":l&&(n="gray200"),s.createElement(M,{is:"button",backgroundColour:n,display:"flex",overflow:"hidden",alignItems:"center",flexDirection:"row",justifyContent:"center",textAlign:"center",borderRadius:"pill",pointerEvents:l?"none":void 0,className:pe(e,ue({fontWeight:"bold",colour:a?"white":"light",size:"3"}),{[xe]:a,[w]:r,[Me]:!r}),onClick:c},r?"...":t)};try{_.displayName="Bubble",_.__docgenInfo={description:"",displayName:"Bubble",props:{selected:{defaultValue:{value:"false"},description:"",name:"selected",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},gap:{defaultValue:{value:"false"},description:"",name:"gap",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const C=({icon:e,disabled:a,label:r="",onClick:t=me})=>s.createElement(M,{is:"button","aria-disabled":a,"aria-label":r,display:"flex",overflow:"hidden",alignItems:"center",flexDirection:"row",justifyContent:"center",textAlign:"center",borderRadius:"pill",padding:"2",userSelect:"none",pointerEvents:a?"none":void 0,className:pe(ue({colour:"light"}),{[w]:a}),onClick:t},s.createElement(je,{size:"medium",icon:e})),we=({placeholderBubblesNum:e=3})=>s.createElement(ge,{is:"span",space:"3"},s.createElement(C,{disabled:!0,icon:fe}),Array.from({length:e}).fill("").map((a,r)=>s.createElement(_,{key:r,children:"",disabled:!0,className:w})),s.createElement(C,{disabled:!0,icon:be})),E=({total:e,pageSize:a,activePage:r,numPagesDisplayed:t=5,loading:l=!1,onChange:c=me})=>{const n=s.useMemo(()=>Be(e,a),[e,a]),x=s.useCallback(d=>()=>{c({pageNumber:T(d,n)})},[n]),v=s.useMemo(()=>T(r,n),[r,n]);return!l&&e&&a&&r&&t?s.createElement(ge,{is:"nav",space:"3","aria-label":"pagination"},s.createElement(C,{disabled:r<=1,label:"navigate back",icon:fe,onClick:x(r-1)}),Fe(n,v,t,n-t).map(d=>s.createElement(_,{key:d,gap:d<0,selected:v===d,"aria-current":v===d?"page":"false",onClick:x(d)},d)),s.createElement(C,{disabled:r>=n,label:"navigate forward",icon:be,onClick:x(v+1)})):s.createElement(we,{placeholderBubblesNum:3})};function Be(e,a){return Math.ceil(e/a)}function T(e,a){return Math.min(Math.max(1,e),a)}function j(e){return Array.from({length:e}).fill(-1).map((a,r)=>r+1)}function Te(e,a,r){return j(r).map((t,l)=>{const c=l+1,n=r-1;return c<n?a+l:c===n?-1:e})}function Ie(e,a){return j(e).map((r,t)=>a+t+1)}function Ne(e,a){return j(a).map((r,t)=>{const l=t+1,c=2;return l===1?1:l===c?-1:e-4+t})}function Fe(e,a,r,t){return e<=r?j(e):a<=t?Te(e,a,r):a>t&&a<=t+2?Ie(r,t):Ne(e,r)}try{E.displayName="Pagination",E.__docgenInfo={description:"",displayName:"Pagination",props:{numPagesDisplayed:{defaultValue:{value:"5"},description:"",name:"numPagesDisplayed",required:!1,type:{name:"number"}},activePage:{defaultValue:null,description:"",name:"activePage",required:!0,type:{name:"number"}},total:{defaultValue:null,description:"",name:"total",required:!0,type:{name:"number"}},pageSize:{defaultValue:null,description:"",name:"pageSize",required:!0,type:{name:"number"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},onChange:{defaultValue:{value:"() => {}"},description:"",name:"onChange",required:!1,type:{name:"TOnChangeEventHandler"}}}}}catch{}const Xe={title:"Components/Pagination/Numbered",component:E},i=e=>s.createElement(M,{style:{height:"100vh",width:"100vw",maxHeight:"350px"},display:"flex",alignItems:"center",justifyContent:"center"},s.createElement(E,{...e})),o={activePage:5,total:100,pageSize:10,numPagesDisplayed:5,loading:!1,onChange:Ee("onChange")},p=i.bind(o);p.args=o;const Pe={...o,loading:!0},m=i.bind(Pe);m.args=Pe;const ye={...o,activePage:1,total:20,pageSize:10,numPagesDisplayed:5},u=i.bind(ye);u.args=ye;const he={...o,activePage:1,total:45,pageSize:10,numPagesDisplayed:5},g=i.bind(he);g.args=he;const ke={...o,activePage:1,total:638,pageSize:10,numPagesDisplayed:5},f=i.bind(ke);f.args=ke;const Se={...o,activePage:4,total:638,pageSize:10,numPagesDisplayed:5},b=i.bind(Se);b.args=Se;const ve={...o,activePage:60,total:638,pageSize:10,numPagesDisplayed:5},P=i.bind(ve);P.args=ve;const B={...o,activePage:61,total:638,pageSize:10,numPagesDisplayed:5},y=i.bind(B);y.args=B;const ze={...o,activePage:62,total:638,pageSize:10,numPagesDisplayed:5},h=i.bind(ze);h.args=B;const _e={...o,activePage:63,total:638,pageSize:10,numPagesDisplayed:5},k=i.bind(_e);k.args=_e;const Ce={...o,activePage:64,total:638,pageSize:10,numPagesDisplayed:5},S=i.bind(Ce);S.args=Ce;var I,N,F;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:"Template.bind(standardProps)",...(F=(N=p.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};var z,q,V;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:"Template.bind(loadingProps)",...(V=(q=m.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var A,D,H;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:"Template.bind(lessThanMaxPagesProps)",...(H=(D=u.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var J,L,O;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:"Template.bind(allPagesFitProps)",...(O=(L=g.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var R,W,G;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:"Template.bind(jumpForwardStartProps)",...(G=(W=f.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var K,Q,U;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:"Template.bind(jumpForwardMiddleProps)",...(U=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;P.parameters={...P.parameters,docs:{...(X=P.parameters)==null?void 0:X.docs,source:{originalSource:"Template.bind(lastChunkStartProps)",...(Z=(Y=P.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ae;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:"Template.bind(lastChunkMiddleProps)",...(ae=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var re,te,se;h.parameters={...h.parameters,docs:{...(re=h.parameters)==null?void 0:re.docs,source:{originalSource:"Template.bind(jumpBackStartProps)",...(se=(te=h.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var ne,oe,ie;k.parameters={...k.parameters,docs:{...(ne=k.parameters)==null?void 0:ne.docs,source:{originalSource:"Template.bind(jumpBackMiddleProps)",...(ie=(oe=k.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var le,ce,de;S.parameters={...S.parameters,docs:{...(le=S.parameters)==null?void 0:le.docs,source:{originalSource:"Template.bind(jumpBackEndProps)",...(de=(ce=S.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};const Ye=["standard","loading","lessThanMaxPages","allPagesFit","jumpForwardStart","jumpForwardMiddle","lastChunkStart","lastChunkMiddle","jumpBackStart","jumpBackMiddle","jumpBackEnd"];export{Ye as __namedExportsOrder,g as allPagesFit,Xe as default,S as jumpBackEnd,k as jumpBackMiddle,h as jumpBackStart,b as jumpForwardMiddle,f as jumpForwardStart,y as lastChunkMiddle,P as lastChunkStart,u as lessThanMaxPages,m as loading,p as standard};
