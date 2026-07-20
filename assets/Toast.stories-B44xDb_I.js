import{r as t,m as T,B as E,g as C}from"./iframe-BIDnS-AI.js";import{A as x}from"./Actions-D5CegBk3.js";import{B as l}from"./Button-CjHgngEJ.js";import{S as v}from"./StandardModal-DpsAVOhI.js";import{T as p}from"./Text-DKPjkgnB.js";import{A as S}from"./Alert-qIifHClC.js";import{s as _}from"./flex-DYNdooo0.js";import{_ as k}from"./Portal-DfVj43Un.js";import"./preload-helper-PPVm8Dsz.js";import"./Column-D4VznkIf.js";import"./resolveResponsiveProps-CwZrgFwa.js";/* empty css                                            */import"./Icon-DbrnBHWs.js";import"./ProgressSpinner-C_aM8xWn.js";import"./Modal-kn2e5OqL.js";import"./XIcon-C8oddtDD.js";import"./IntentStripe-D2Ml7Few.js";import"./WarningIcon-b0NcXpNU.js";import"./InformationIcon-Cg_a_44Q.js";import"./AlertCircleIcon-eBDlbhBF.js";import"./index-BQ5WBYG-.js";import"./index-DDBOqD65.js";var y="vlw1ec0",B="vlw1ec1";const a=5e3;let w=-1;const I=()=>++w,b=(e,r)=>{switch(r.type){case 0:return{...e,toasts:[...e.toasts,r.config]};case 1:return{...e,toasts:e.toasts.filter(({id:s})=>s!==r.id)};default:return e}},d=t.createContext(null),h=({children:e})=>{const[{toasts:r},s]=t.useReducer(b,{toasts:[]}),o=t.useCallback(n=>{s({type:0,config:{...n,id:I()}})},[]),m=t.useCallback(n=>{s({type:1,id:n})},[]);return t.createElement(d.Provider,{value:o},e,t.createElement(k,null,t.createElement(E,{display:"flex",position:"fixed",alignItems:"center",justifyContent:"center",className:y},t.createElement("div",{className:_({gap:"2"})},r.map(n=>t.createElement(A,{key:n.id,...n,remove:m}))))))},u=({children:e})=>t.useContext(d)!==null?t.createElement(t.Fragment,null,e):t.createElement(h,null,e),f=()=>{const e=t.useContext(d);return T.invariant(e!==null,"No `ToastProvider` setup"),t.useMemo(()=>{const r=(s,o=a)=>e({message:s,duration:o,intent:"information"});return r.success=(s,o=a)=>e({message:s,duration:o,intent:"success"}),r.danger=(s,o=a)=>e({message:s,duration:o,intent:"danger"}),r.information=(s,o=a)=>e({message:s,duration:o,intent:"information"}),r.warning=(s,o=a)=>e({message:s,duration:o,intent:"warning"}),r},[e])},A=({remove:e,duration:r,message:s,id:o,intent:m})=>{const n=t.useCallback(()=>{e(o)},[o,e]);return C&&t.useLayoutEffect(()=>{const g=setTimeout(()=>{n()},r);return()=>{clearTimeout(g)}},[n]),t.createElement(S,{dismissible:!0,intent:m,className:B,onRequestClose:n},s)};try{u.displayName="ToastProvider",u.__docgenInfo={description:"",displayName:"ToastProvider",props:{}}}catch{}const $={title:"Components/Toast (useToast)",decorators:[e=>t.createElement(u,null,t.createElement(e,null))]},c=()=>{const e=f();return t.createElement(x,null,t.createElement(l,{onClick:()=>e.success("Successful message!")},"Success"),t.createElement(l,{onClick:()=>e.danger("Danger  message!")},"Danger"),t.createElement(l,{onClick:()=>e.information(t.createElement(p,null,"Im some text, which is ",t.createElement(p,{strong:!0},"bolded!")))},"Custom"))},i={render:()=>{const e=f();return t.createElement(v,{isOpen:!0,title:"Test inside modal"},t.createElement("div",{style:{padding:20}},t.createElement(l,{onClick:()=>e.success("Successful message!")},"Success")))},parameters:{chromatic:{disable:!0}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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
