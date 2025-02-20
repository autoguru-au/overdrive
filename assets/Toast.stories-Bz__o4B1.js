import{r as t}from"./index-Cr_cdoBq.js";import{d as S}from"./index-CYx1ALmS.js";import{i as k}from"./index-IxcCI6ud.js";import{B}from"./Box-BkSqgUie.js";import{_ as b}from"./Portal-MUFOK9x_.js";import{S as h}from"./Stack-BSPODIID.js";import{A as w}from"./Alert-DgJBvzFF.js";import{A as I}from"./Actions-CUJsJvbC.js";import{B as m}from"./Button-Ekj-FIEz.js";import{T as f}from"./Text-DDDUddLi.js";import{S as N}from"./StandardModal-CPYgt-e8.js";import"./_commonjsHelpers-C932wzq6.js";import"./index-WuY8yyQe.js";import"./index-CAtvbLPT.js";import"./ThemeProvider-DaUrEAYU.js";import"./makeTheme-BvwTE3C0.js";import"./index-DceDftY5.js";import"./useTextStyles-Dl44JEM-.js";import"./IntentStripe-CLoIWKll.js";import"./Column-BYG7WMAe.js";import"./useNegativeMarginTop-CfUdZVnZ.js";import"./Icon-CYrUijB5.js";import"./AlertIcon-FgS-VANv.js";import"./InformationIcon-BEIsz5hV.js";import"./AlertCircleIcon-BOrB_4ur.js";import"./WindowCloseIcon-CMg9j8eX.js";import"./dataAttrs-BPvLuXwN.js";import"./ProgressSpinner-DmPANcWr.js";import"./Modal-B4alLZXg.js";import"./Heading-DzJKxWXi.js";var A="vlw1ec0",P="vlw1ec1";const a=5e3;let q=-1;const D=()=>++q,M=(e,n)=>{switch(n.type){case 0:return{...e,toasts:[...e.toasts,n.config]};case 1:return{...e,toasts:e.toasts.filter(({id:r})=>r!==n.id)};default:return e}},p=t.createContext(null),V=({children:e})=>{const[{toasts:n},r]=t.useReducer(M,{toasts:[]}),o=t.useCallback(s=>{r({type:0,config:{...s,id:D()}})},[]),u=t.useCallback(s=>{r({type:1,id:s})},[]);return t.createElement(p.Provider,{value:o},e,t.createElement(b,null,t.createElement(B,{display:"flex",position:"fixed",alignItems:"center",justifyContent:"center",className:A},t.createElement(h,{space:"2"},n.map(s=>t.createElement(d,{key:s.id,...s,remove:u}))))))},l=({children:e})=>t.useContext(p)!==null?t.createElement(t.Fragment,null,e):t.createElement(V,null,e),_=()=>{const e=t.useContext(p);return S.invariant(e!==null,"No `ToastProvider` setup"),t.useMemo(()=>{const n=(r,o=a)=>void e({message:r,duration:o,intent:"information"});return n.primary=(r,o=a)=>void e({message:r,duration:o,intent:"primary"}),n.secondary=(r,o=a)=>void e({message:r,duration:o,intent:"secondary"}),n.shine=(r,o=a)=>void e({message:r,duration:o,intent:"shine"}),n.success=(r,o=a)=>void e({message:r,duration:o,intent:"success"}),n.neutral=(r,o=a)=>void e({message:r,duration:o,intent:"neutral"}),n.danger=(r,o=a)=>void e({message:r,duration:o,intent:"danger"}),n.information=(r,o=a)=>void e({message:r,duration:o,intent:"information"}),n.warning=(r,o=a)=>void e({message:r,duration:o,intent:"warning"}),n},[e])},d=({remove:e,duration:n,message:r,id:o,intent:u})=>{const s=t.useCallback(()=>{e(o)},[o,e]);return k&&t.useLayoutEffect(()=>{const x=setTimeout(()=>{s()},n);return()=>{clearTimeout(x)}},[s]),t.createElement(w,{dismissible:!0,intent:u,className:P,onRequestClose:s},r)};try{l.displayName="ToastProvider",l.__docgenInfo={description:"",displayName:"ToastProvider",props:{}}}catch{}try{d.displayName="Toast",d.__docgenInfo={description:"",displayName:"Toast",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"number"}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"ReactNode"}},intent:{defaultValue:null,description:"",name:"intent",required:!0,type:{name:"enum",value:[{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'}]}},duration:{defaultValue:null,description:"",name:"duration",required:!0,type:{name:"number"}},remove:{defaultValue:null,description:"",name:"remove",required:!0,type:{name:"(id: number) => void"}}}}}catch{}const pe={title:"Components/Toast (useToast)",decorators:[e=>t.createElement(l,null,t.createElement(e,null))]},i=()=>{const e=_();return t.createElement(I,null,t.createElement(m,{onClick:()=>e.success("Successful message!")},"Success"),t.createElement(m,{onClick:()=>e.danger("Danger  message!")},"Danger"),t.createElement(m,{onClick:()=>e.information(t.createElement(f,null,"Im some text, which is ",t.createElement(f,{strong:!0},"bolded!")))},"Custom"))},c={render:()=>{const e=_();return t.createElement(N,{isOpen:!0,title:"Test inside modal"},t.createElement("div",{style:{padding:20}},t.createElement(m,{onClick:()=>e.success("Successful message!")},"Success")))},parameters:{chromatic:{disable:!0}}};var g,v,T;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const toast = useToast();
  return <Actions>
            <Button onClick={() => toast.success('Successful message!')}>
                Success
            </Button>
            <Button onClick={() => toast.danger('Danger  message!')}>
                Danger
            </Button>
            <Button onClick={() => toast.information(<Text>
                            Im some text, which is <Text strong>bolded!</Text>
                        </Text>)}>
                Custom
            </Button>
        </Actions>;
}`,...(T=(v=i.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var y,E,C;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const toast = useToast();
    return <StandardModal isOpen title="Test inside modal">
                <div style={{
        padding: 20
      }}>
                    <Button onClick={() => toast.success('Successful message!')}>
                        Success
                    </Button>
                </div>
            </StandardModal>;
  },
  parameters: {
    chromatic: {
      disable: true
    }
  }
}`,...(C=(E=c.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};const fe=["Standard","InsideModal"];export{c as InsideModal,i as Standard,fe as __namedExportsOrder,pe as default};
