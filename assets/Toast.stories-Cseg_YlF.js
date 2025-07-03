import{r as t,j as T,B as v,S as E,i as C}from"./iframe-BwudkRGz.js";import{A as x}from"./Actions-DKpKzZ4o.js";import{B as l}from"./Button-xPv74Qvr.js";import{S}from"./StandardModal-C0twrn0c.js";import{T as p}from"./Text---c0u-Gd.js";import{A as y}from"./Alert-BaX9KMWX.js";import{_}from"./Portal-HVCf2WcM.js";import"./Column-R9qcw72s.js";import"./resolveResponsiveProps-qQKQOJ8H.js";import"./Icon-BbT75Ry2.js";import"./ProgressSpinner-DFDN9Lvf.js";import"./Modal-CcFgWk5W.js";import"./WindowCloseIcon-CX99jTV1.js";import"./IntentStripe-B98Nkv2i.js";import"./AlertIcon-DwLkdSUz.js";import"./InformationIcon-B41Hjk_Z.js";import"./AlertCircleIcon-Cc1VMY4f.js";import"./index-Wh4ZVz8O.js";import"./index-nKDRB5JV.js";var k="vlw1ec0",B="vlw1ec1";const a=5e3;let h=-1;const w=()=>++h,I=(e,r)=>{switch(r.type){case 0:return{...e,toasts:[...e.toasts,r.config]};case 1:return{...e,toasts:e.toasts.filter(({id:s})=>s!==r.id)};default:return e}},d=t.createContext(null),b=({children:e})=>{const[{toasts:r},s]=t.useReducer(I,{toasts:[]}),o=t.useCallback(n=>{s({type:0,config:{...n,id:w()}})},[]),m=t.useCallback(n=>{s({type:1,id:n})},[]);return t.createElement(d.Provider,{value:o},e,t.createElement(_,null,t.createElement(v,{display:"flex",position:"fixed",alignItems:"center",justifyContent:"center",className:k},t.createElement(E,{space:"2"},r.map(n=>t.createElement(A,{key:n.id,...n,remove:m}))))))},u=({children:e})=>t.useContext(d)!==null?t.createElement(t.Fragment,null,e):t.createElement(b,null,e),f=()=>{const e=t.useContext(d);return T.invariant(e!==null,"No `ToastProvider` setup"),t.useMemo(()=>{const r=(s,o=a)=>void e({message:s,duration:o,intent:"information"});return r.primary=(s,o=a)=>void e({message:s,duration:o,intent:"primary"}),r.secondary=(s,o=a)=>void e({message:s,duration:o,intent:"secondary"}),r.shine=(s,o=a)=>void e({message:s,duration:o,intent:"shine"}),r.success=(s,o=a)=>void e({message:s,duration:o,intent:"success"}),r.neutral=(s,o=a)=>void e({message:s,duration:o,intent:"neutral"}),r.danger=(s,o=a)=>void e({message:s,duration:o,intent:"danger"}),r.information=(s,o=a)=>void e({message:s,duration:o,intent:"information"}),r.warning=(s,o=a)=>void e({message:s,duration:o,intent:"warning"}),r},[e])},A=({remove:e,duration:r,message:s,id:o,intent:m})=>{const n=t.useCallback(()=>{e(o)},[o,e]);return C&&t.useLayoutEffect(()=>{const g=setTimeout(()=>{n()},r);return()=>{clearTimeout(g)}},[n]),t.createElement(y,{dismissible:!0,intent:m,className:B,onRequestClose:n},s)};try{u.displayName="ToastProvider",u.__docgenInfo={description:"",displayName:"ToastProvider",props:{}}}catch{}const X={title:"Components/Toast (useToast)",decorators:[e=>t.createElement(u,null,t.createElement(e,null))]},c=()=>{const e=f();return t.createElement(x,null,t.createElement(l,{onClick:()=>e.success("Successful message!")},"Success"),t.createElement(l,{onClick:()=>e.danger("Danger  message!")},"Danger"),t.createElement(l,{onClick:()=>e.information(t.createElement(p,null,"Im some text, which is ",t.createElement(p,{strong:!0},"bolded!")))},"Custom"))},i={render:()=>{const e=f();return t.createElement(S,{isOpen:!0,title:"Test inside modal"},t.createElement("div",{style:{padding:20}},t.createElement(l,{onClick:()=>e.success("Successful message!")},"Success")))},parameters:{chromatic:{disable:!0}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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
}`,...i.parameters?.docs?.source}}};const Y=["Standard","InsideModal"];export{i as InsideModal,c as Standard,Y as __namedExportsOrder,X as default};
