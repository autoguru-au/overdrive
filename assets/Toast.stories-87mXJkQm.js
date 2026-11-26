import{r as t,m as E,B as C,g as x}from"./iframe-CUwYMU5A.js";import{A as v}from"./Actions-Bwc75ke_.js";import{B as m}from"./Button-Deldytuy.js";import{S}from"./StandardModal-CGlY0Q7n.js";import{T as f}from"./Text-zRXXdl9d.js";import{A as _}from"./Alert-BGonb5VU.js";import{s as k}from"./flex-B8nqxN1m.js";import{_ as y}from"./Portal-CtGwizg-.js";import"./preload-helper-PPVm8Dsz.js";import"./Column-BwtSYupg.js";import"./resolveResponsiveProps-CL3Hzh_z.js";/* empty css                                            */import"./Icon-CckNuZ1m.js";import"./ProgressSpinner-D4sDpoRb.js";import"./Modal-oNbLP8fs.js";import"./XIcon-C_sV-okC.js";import"./IntentStripe-BI4DffSs.js";import"./InformationIcon-CiKHfnXu.js";import"./AlertCircleIcon-Cl2evSCq.js";import"./index-Be4SUj8-.js";import"./index-VWM6nKh0.js";var B="vlw1ec0",w="vlw1ec1";const c=5e3;let I=-1;const b=()=>++I,h=(e,r)=>{switch(r.type){case 0:return{...e,toasts:[...e.toasts,r.config]};case 1:return{...e,toasts:e.toasts.filter(({id:s})=>s!==r.id)};default:return e}},p=t.createContext(null),A=({children:e})=>{const[{toasts:r},s]=t.useReducer(h,{toasts:[]}),o=t.useCallback(a=>{s({type:0,config:{...a,id:b()}})},[]),n=t.useCallback(a=>{s({type:1,id:a})},[]);return t.createElement(p.Provider,{value:o},e,t.createElement(y,null,t.createElement(C,{display:"flex",position:"fixed",alignItems:"center",justifyContent:"center",className:B},t.createElement("div",{className:k({gap:"2"})},r.map(a=>t.createElement(N,{key:a.id,...a,remove:n}))))))},d=({children:e})=>t.useContext(p)!==null?t.createElement(t.Fragment,null,e):t.createElement(A,null,e),g=()=>{const e=t.useContext(p);return E.invariant(e!==null,"No `ToastProvider` setup"),t.useMemo(()=>{const r=(s,o=c,n)=>e({...n,message:s,duration:o,intent:"information"});return r.success=(s,o=c,n)=>e({...n,message:s,duration:o,intent:"success"}),r.danger=(s,o=c,n)=>e({...n,message:s,duration:o,intent:"danger"}),r.information=(s,o=c,n)=>e({...n,message:s,duration:o,intent:"information"}),r.warning=(s,o=c,n)=>e({...n,message:s,duration:o,intent:"warning"}),r},[e])},N=({remove:e,duration:r,message:s,id:o,intent:n,appearance:a})=>{const u=t.useCallback(()=>{e(o)},[o,e]);return x&&t.useLayoutEffect(()=>{const T=setTimeout(()=>{u()},r);return()=>{clearTimeout(T)}},[u]),t.createElement(_,{dismissible:!0,appearance:a,intent:n,className:w,onRequestClose:u},s)};try{d.displayName="ToastProvider",d.__docgenInfo={description:"",displayName:"ToastProvider",props:{}}}catch{}const $={title:"Components/Toast (useToast)",decorators:[e=>t.createElement(d,null,t.createElement(e,null))]},i=()=>{const e=g();return t.createElement(v,null,t.createElement(m,{onClick:()=>e.success("Successful message!")},"Success"),t.createElement(m,{onClick:()=>e.danger("Danger  message!")},"Danger"),t.createElement(m,{onClick:()=>e.information(t.createElement(f,null,"Im some text, which is ",t.createElement(f,{strong:!0},"bolded!")))},"Custom"))},l={render:()=>{const e=g();return t.createElement(S,{isOpen:!0,title:"Test inside modal"},t.createElement("div",{style:{padding:20}},t.createElement(m,{onClick:()=>e.success("Successful message!")},"Success")))},parameters:{chromatic:{disable:!0}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const ee=["Standard","InsideModal"];export{l as InsideModal,i as Standard,ee as __namedExportsOrder,$ as default};
