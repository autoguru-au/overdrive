import{c as p,u as X,B as d}from"./Box-BNrxSn68.js";import{r as n}from"./index-DhrokLn_.js";import{I as x}from"./Icon-C5RKsWkK.js";import{u as A}from"./useTextStyles-B_b2rbpS.js";import{P as J}from"./ProgressSpinner-kyd4VHIW.js";var C="p2yon50",h="p2yon51",P="p2yon52",R="p2yon53",z="p2yon54",N="p2yon55",T="p2yon56",K={small:{default:"p2yon57",rounded:"p2yon58",iconOnly:"p2yon59"},medium:{default:"p2yon5a",rounded:"p2yon5b",iconOnly:"p2yon5c"}},j={primary:"p2yon5d",brand:"p2yon5e",secondary:"p2yon5f",danger:"p2yon5g",information:"p2yon5h",warning:"p2yon5i",success:"p2yon5j"},D={primary:"p2yon5k",brand:"p2yon5l",secondary:"p2yon5m",danger:"p2yon5n",information:"p2yon5o",warning:"p2yon5p",success:"p2yon5q"},E={defaults:"p2yon5r",noneRounded:"p2yon5s"},O={primary:"p2yon5t",brand:"p2yon5u",secondary:"p2yon5v",danger:"p2yon5w",information:"p2yon5x",warning:"p2yon5y",success:"p2yon5z"};const V=Object.freeze(Object.defineProperty({__proto__:null,body:h,defaultStates:D,disabled:N,enabled:z,hiddenContent:P,loading:R,minimal:E,minimalStates:O,root:C,size:K,spinner:T,variant:j},Symbol.toStringTag,{value:"Module"})),U=700,Y=(e,t)=>t||e==="secondary"?"secondary":"light",G=e=>e?"pill":"1",H=(e,t)=>t?"none":e==="small"?"3":"4",q=n.forwardRef(({children:e,className:t="",disabled:o=!1,id:r,is:a="button",withDoubleClicks:I=!1,isLoading:l=!1,isFullWidth:k=!1,minimal:c=!1,onClick:m,rounded:y=!1,size:i="medium",type:F="button",variant:f="secondary","aria-label":W},v)=>{const{isSingleIconChild:b,props:u}=n.useMemo(()=>n.isValidElement(e)&&e.type===x?{isSingleIconChild:!0,props:e.props}:{isSingleIconChild:!1},[e]),[g,S]=n.useState(!1),M=n.useCallback(s=>{I||S(!0),typeof m=="function"&&m(s)},[I,m]),_={type:a==="button"?F:void 0,id:r,onClick:M,disabled:o||l,tabIndex:o?-1:void 0,"aria-label":W,className:p(X({is:typeof a=="string"?a:void 0,display:"inlineBlock",overflow:"hidden",borderRadius:G(y),textAlign:"center",borderWidth:"none",paddingY:"none",paddingX:H(i,l),width:k?"full":void 0,pointerEvents:g?"none":void 0}),A({colour:"white",fontWeight:"semiBold",size:i==="medium"?"4":"3"}),C,Q(V,f,o||l,c,y),!c&&j[f],Z(V,i,y,b&&!l),{[N]:o,[z]:!o&&!l,[R]:l},t),ref:v},w=n.useMemo(()=>n.createElement(n.Fragment,null,b&&u?n.createElement(x,{size:u.size??i==="small"?"small":"medium",...u}):e),[u,b,e,i]);n.useEffect(()=>{let s;return g&&(s=setTimeout(()=>S(!1),U)),()=>s?clearTimeout(s):void 0},[g]);const B=l?n.createElement(d,{display:"flex",justifyContent:"center",position:"relative",alignItems:"center",width:"full",height:"full"},n.createElement(d,{position:"absolute",alignItems:"center",justifyContent:"center",display:"flex",width:"full",height:"full"},n.createElement(J,{className:T,colour:Y(f,c)})),n.createElement(d,{width:"full",height:"full",className:[h,P]},w)):n.createElement(d,{height:"full",alignItems:"center",justifyContent:"center",className:h},w);return n.isValidElement(a)?n.cloneElement(a,{ref:v,..._},B):n.createElement(a,{ref:v,..._},B)}),Q=(e,t,o,r,a)=>o?r?p(e.minimal.defaults,{[e.minimal.noneRounded]:!a}):"":r?p(E.defaults,O[t],{[E.noneRounded]:!a}):D[t],Z=(e,t,o,r)=>{const a=e.size[t];return p(a.default,{[a.rounded]:o,[a.iconOnly]:r})};try{q.displayName="Button",q.__docgenInfo={description:"",displayName:"Button",props:{disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},is:{defaultValue:null,description:"",name:"is",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>> | ElementType<any, keyof IntrinsicElements>"}},isLoading:{defaultValue:{value:"false"},description:"",name:"isLoading",required:!1,type:{name:"boolean"}},isFullWidth:{defaultValue:{value:"false"},description:"",name:"isFullWidth",required:!1,type:{name:"boolean"}},minimal:{defaultValue:{value:"false"},description:"",name:"minimal",required:!1,type:{name:"boolean"}},rounded:{defaultValue:{value:"false"},description:"",name:"rounded",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},variant:{defaultValue:{value:"secondary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"brand"'},{value:'"secondary"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'}]}},withDoubleClicks:{defaultValue:{value:"false"},description:"",name:"withDoubleClicks",required:!1,type:{name:"boolean"}}}}}catch{}export{q as B};
