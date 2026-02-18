import{r as t,m as T,B as E,g as C}from"./iframe-D3DMP0e-.js";import{A as x}from"./Actions-BvafGLll.js";import{B as l}from"./Button-BlzjVAoa.js";import{S as v}from"./StandardModal-Dmq08RCW.js";import{T as p}from"./Text-CopIcfcL.js";import{A as S}from"./Alert-DSUqZ2f0.js";import{a as _}from"./flex-hoz9lKln.js";import{_ as k}from"./Portal-jpsl_JNL.js";import"./preload-helper-PPVm8Dsz.js";import"./Column-BKfsg7Tr.js";/* empty css                              */import"./resolveResponsiveProps-Dsh1waHK.js";import"./Icon-CiSRuH0F.js";import"./ProgressSpinner-veDtEptL.js";import"./Modal-DTDBdW2A.js";import"./WindowCloseIcon-DtV_K_ag.js";import"./IntentStripe-CVEV-cvt.js";import"./AlertIcon-BTIR36wN.js";import"./InformationIcon-BkRWFwSV.js";import"./AlertCircleIcon-DEVtChyQ.js";import"./index-SNNNgtCQ.js";import"./index-BAlklDXV.js";var y="vlw1ec0",B="vlw1ec1";const a=5e3;let w=-1;const I=()=>++w,b=(e,r)=>{switch(r.type){case 0:return{...e,toasts:[...e.toasts,r.config]};case 1:return{...e,toasts:e.toasts.filter(({id:s})=>s!==r.id)};default:return e}},d=t.createContext(null),h=({children:e})=>{const[{toasts:r},s]=t.useReducer(b,{toasts:[]}),o=t.useCallback(n=>{s({type:0,config:{...n,id:I()}})},[]),m=t.useCallback(n=>{s({type:1,id:n})},[]);return t.createElement(d.Provider,{value:o},e,t.createElement(k,null,t.createElement(E,{display:"flex",position:"fixed",alignItems:"center",justifyContent:"center",className:y},t.createElement("div",{className:_({gap:"2"})},r.map(n=>t.createElement(A,{key:n.id,...n,remove:m}))))))},u=({children:e})=>t.useContext(d)!==null?t.createElement(t.Fragment,null,e):t.createElement(h,null,e),f=()=>{const e=t.useContext(d);return T.invariant(e!==null,"No `ToastProvider` setup"),t.useMemo(()=>{const r=(s,o=a)=>e({message:s,duration:o,intent:"information"});return r.success=(s,o=a)=>e({message:s,duration:o,intent:"success"}),r.danger=(s,o=a)=>e({message:s,duration:o,intent:"danger"}),r.information=(s,o=a)=>e({message:s,duration:o,intent:"information"}),r.warning=(s,o=a)=>e({message:s,duration:o,intent:"warning"}),r},[e])},A=({remove:e,duration:r,message:s,id:o,intent:m})=>{const n=t.useCallback(()=>{e(o)},[o,e]);return C&&t.useLayoutEffect(()=>{const g=setTimeout(()=>{n()},r);return()=>{clearTimeout(g)}},[n]),t.createElement(S,{dismissible:!0,intent:m,className:B,onRequestClose:n},s)};try{u.displayName="ToastProvider",u.__docgenInfo={description:"",displayName:"ToastProvider",props:{}}}catch{}const $={title:"Components/Toast (useToast)",decorators:[e=>t.createElement(u,null,t.createElement(e,null))]},c=()=>{const e=f();return t.createElement(x,null,t.createElement(l,{onClick:()=>e.success("Successful message!")},"Success"),t.createElement(l,{onClick:()=>e.danger("Danger  message!")},"Danger"),t.createElement(l,{onClick:()=>e.information(t.createElement(p,null,"Im some text, which is ",t.createElement(p,{strong:!0},"bolded!")))},"Custom"))},i={render:()=>{const e=f();return t.createElement(v,{isOpen:!0,title:"Test inside modal"},t.createElement("div",{style:{padding:20}},t.createElement(l,{onClick:()=>e.success("Successful message!")},"Success")))},parameters:{chromatic:{disable:!0}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const ee=["Standard","InsideModal"];export{i as InsideModal,c as Standard,ee as __namedExportsOrder,$ as default};
