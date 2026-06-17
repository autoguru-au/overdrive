import{r as t,n as T,B as E,h as C}from"./iframe-BTBLa9qD.js";import{A as x}from"./Actions-DRtR8Wjv.js";import{B as l}from"./Button-DMSOS-W_.js";import{S as v}from"./StandardModal-Cm1hbAX5.js";import{T as p}from"./Text-C8RNI5di.js";import{A as S}from"./Alert-_jIYrWGk.js";import{s as _}from"./flex-D3fnygj0.js";import{_ as k}from"./Portal-CchjelE5.js";import"./preload-helper-PPVm8Dsz.js";import"./Column-4YRoecDb.js";import"./resolveResponsiveProps-CM5NKSWG.js";/* empty css                                            */import"./Icon-C6DP2-K2.js";import"./ProgressSpinner-DC49HFAj.js";import"./Modal-ChMRKZt5.js";import"./XIcon-Rm5UrLak.js";import"./IntentStripe-smQpJEHF.js";import"./WarningIcon-CHW1FzL9.js";import"./InformationIcon-JlkLAI-n.js";import"./AlertCircleIcon-gNveRYlC.js";import"./index-UCn0aYfZ.js";import"./index-DyPtkNDB.js";var y="vlw1ec0",B="vlw1ec1";const a=5e3;let h=-1;const w=()=>++h,I=(e,r)=>{switch(r.type){case 0:return{...e,toasts:[...e.toasts,r.config]};case 1:return{...e,toasts:e.toasts.filter(({id:s})=>s!==r.id)};default:return e}},d=t.createContext(null),b=({children:e})=>{const[{toasts:r},s]=t.useReducer(I,{toasts:[]}),o=t.useCallback(n=>{s({type:0,config:{...n,id:w()}})},[]),m=t.useCallback(n=>{s({type:1,id:n})},[]);return t.createElement(d.Provider,{value:o},e,t.createElement(k,null,t.createElement(E,{display:"flex",position:"fixed",alignItems:"center",justifyContent:"center",className:y},t.createElement("div",{className:_({gap:"2"})},r.map(n=>t.createElement(A,{key:n.id,...n,remove:m}))))))},u=({children:e})=>t.useContext(d)!==null?t.createElement(t.Fragment,null,e):t.createElement(b,null,e),f=()=>{const e=t.useContext(d);return T.invariant(e!==null,"No `ToastProvider` setup"),t.useMemo(()=>{const r=(s,o=a)=>e({message:s,duration:o,intent:"information"});return r.success=(s,o=a)=>e({message:s,duration:o,intent:"success"}),r.danger=(s,o=a)=>e({message:s,duration:o,intent:"danger"}),r.information=(s,o=a)=>e({message:s,duration:o,intent:"information"}),r.warning=(s,o=a)=>e({message:s,duration:o,intent:"warning"}),r},[e])},A=({remove:e,duration:r,message:s,id:o,intent:m})=>{const n=t.useCallback(()=>{e(o)},[o,e]);return C&&t.useLayoutEffect(()=>{const g=setTimeout(()=>{n()},r);return()=>{clearTimeout(g)}},[n]),t.createElement(S,{dismissible:!0,intent:m,className:B,onRequestClose:n},s)};try{u.displayName="ToastProvider",u.__docgenInfo={description:"",displayName:"ToastProvider",props:{}}}catch{}const $={title:"Components/Toast (useToast)",decorators:[e=>t.createElement(u,null,t.createElement(e,null))]},c=()=>{const e=f();return t.createElement(x,null,t.createElement(l,{onClick:()=>e.success("Successful message!")},"Success"),t.createElement(l,{onClick:()=>e.danger("Danger  message!")},"Danger"),t.createElement(l,{onClick:()=>e.information(t.createElement(p,null,"Im some text, which is ",t.createElement(p,{strong:!0},"bolded!")))},"Custom"))},i={render:()=>{const e=f();return t.createElement(v,{isOpen:!0,title:"Test inside modal"},t.createElement("div",{style:{padding:20}},t.createElement(l,{onClick:()=>e.success("Successful message!")},"Success")))},parameters:{chromatic:{disable:!0}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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
