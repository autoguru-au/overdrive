import{r as t,d as y,B as _,S as k,i as B}from"./iframe-CapgcpQw.js";import{A as h}from"./Actions-DY_w_d5U.js";import{B as l}from"./Button-BS_8E5Lc.js";import{S as w}from"./StandardModal-DUks8VIF.js";import{T as p}from"./Text-BGIV1zEQ.js";import{A as I}from"./Alert-11XEay3f.js";import{_ as b}from"./Portal-lvmx1bLZ.js";import"./Column-CPNvqgGJ.js";import"./resolveResponsiveProps-D2UjvlFZ.js";import"./useNegativeMarginTop-BHu7NNnC.js";import"./Icon-BSSebld5.js";import"./ProgressSpinner-DL1aUcKI.js";import"./Modal-54ioSZ5s.js";import"./WindowCloseIcon-N5Qj01Gt.js";import"./IntentStripe-CgSFk2zJ.js";import"./AlertIcon-BHXE7wEX.js";import"./InformationIcon-CzT9QWkZ.js";import"./AlertCircleIcon-CU0btHbc.js";import"./index-US934iSr.js";import"./index-BjkrVkV4.js";var A="vlw1ec0",N="vlw1ec1";const a=5e3;let P=-1;const D=()=>++P,M=(e,r)=>{switch(r.type){case 0:return{...e,toasts:[...e.toasts,r.config]};case 1:return{...e,toasts:e.toasts.filter(({id:s})=>s!==r.id)};default:return e}},d=t.createContext(null),O=({children:e})=>{const[{toasts:r},s]=t.useReducer(M,{toasts:[]}),o=t.useCallback(n=>{s({type:0,config:{...n,id:D()}})},[]),m=t.useCallback(n=>{s({type:1,id:n})},[]);return t.createElement(d.Provider,{value:o},e,t.createElement(b,null,t.createElement(_,{display:"flex",position:"fixed",alignItems:"center",justifyContent:"center",className:A},t.createElement(k,{space:"2"},r.map(n=>t.createElement(R,{key:n.id,...n,remove:m}))))))},u=({children:e})=>t.useContext(d)!==null?t.createElement(t.Fragment,null,e):t.createElement(O,null,e),x=()=>{const e=t.useContext(d);return y.invariant(e!==null,"No `ToastProvider` setup"),t.useMemo(()=>{const r=(s,o=a)=>void e({message:s,duration:o,intent:"information"});return r.primary=(s,o=a)=>void e({message:s,duration:o,intent:"primary"}),r.secondary=(s,o=a)=>void e({message:s,duration:o,intent:"secondary"}),r.shine=(s,o=a)=>void e({message:s,duration:o,intent:"shine"}),r.success=(s,o=a)=>void e({message:s,duration:o,intent:"success"}),r.neutral=(s,o=a)=>void e({message:s,duration:o,intent:"neutral"}),r.danger=(s,o=a)=>void e({message:s,duration:o,intent:"danger"}),r.information=(s,o=a)=>void e({message:s,duration:o,intent:"information"}),r.warning=(s,o=a)=>void e({message:s,duration:o,intent:"warning"}),r},[e])},R=({remove:e,duration:r,message:s,id:o,intent:m})=>{const n=t.useCallback(()=>{e(o)},[o,e]);return B&&t.useLayoutEffect(()=>{const S=setTimeout(()=>{n()},r);return()=>{clearTimeout(S)}},[n]),t.createElement(I,{dismissible:!0,intent:m,className:N,onRequestClose:n},s)};try{u.displayName="ToastProvider",u.__docgenInfo={description:"",displayName:"ToastProvider",props:{}}}catch{}const oe={title:"Components/Toast (useToast)",decorators:[e=>t.createElement(u,null,t.createElement(e,null))]},c=()=>{const e=x();return t.createElement(h,null,t.createElement(l,{onClick:()=>e.success("Successful message!")},"Success"),t.createElement(l,{onClick:()=>e.danger("Danger  message!")},"Danger"),t.createElement(l,{onClick:()=>e.information(t.createElement(p,null,"Im some text, which is ",t.createElement(p,{strong:!0},"bolded!")))},"Custom"))},i={render:()=>{const e=x();return t.createElement(w,{isOpen:!0,title:"Test inside modal"},t.createElement("div",{style:{padding:20}},t.createElement(l,{onClick:()=>e.success("Successful message!")},"Success")))},parameters:{chromatic:{disable:!0}}};var f,g,T;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
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
}`,...(T=(g=c.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var v,E,C;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(C=(E=i.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};const re=["Standard","InsideModal"];export{i as InsideModal,c as Standard,re as __namedExportsOrder,oe as default};
