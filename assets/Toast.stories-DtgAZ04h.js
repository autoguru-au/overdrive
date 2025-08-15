import{r as t,l as T,B as E,i as C}from"./iframe-BHL7crnr.js";import{A as x}from"./Actions-DEXfHCup.js";import{B as l}from"./Button-BFKwHbHf.js";import{S as v}from"./StandardModal-Bm5OTXZI.js";import{T as p}from"./Text-BFE4_rM2.js";import{A as S}from"./Alert-C-DcQpFx.js";import{a as _}from"./flex-CyrJktwy.js";import{_ as k}from"./Portal-Jy-jIkjg.js";import"./preload-helper-D9Z9MdNV.js";import"./Column-CQVbZpWe.js";import"./resolveResponsiveProps-ByAuT8KE.js";import"./Icon-CPU5MOey.js";import"./ProgressSpinner-LlGqZmVY.js";import"./Modal-TRKumjHO.js";import"./WindowCloseIcon-Cv8ZuNey.js";import"./IntentStripe-DJzQYkXV.js";import"./AlertIcon-BL2hA6_e.js";import"./InformationIcon-CYtF__qb.js";import"./AlertCircleIcon-B_haU5Dn.js";import"./index-DlOj6WPq.js";import"./index-BUmYWlcP.js";var y="vlw1ec0",B="vlw1ec1";const a=5e3;let w=-1;const I=()=>++w,b=(e,r)=>{switch(r.type){case 0:return{...e,toasts:[...e.toasts,r.config]};case 1:return{...e,toasts:e.toasts.filter(({id:s})=>s!==r.id)};default:return e}},d=t.createContext(null),h=({children:e})=>{const[{toasts:r},s]=t.useReducer(b,{toasts:[]}),o=t.useCallback(n=>{s({type:0,config:{...n,id:I()}})},[]),m=t.useCallback(n=>{s({type:1,id:n})},[]);return t.createElement(d.Provider,{value:o},e,t.createElement(k,null,t.createElement(E,{display:"flex",position:"fixed",alignItems:"center",justifyContent:"center",className:y},t.createElement("div",{className:_({gap:"2"})},r.map(n=>t.createElement(A,{key:n.id,...n,remove:m}))))))},u=({children:e})=>t.useContext(d)!==null?t.createElement(t.Fragment,null,e):t.createElement(h,null,e),f=()=>{const e=t.useContext(d);return T.invariant(e!==null,"No `ToastProvider` setup"),t.useMemo(()=>{const r=(s,o=a)=>e({message:s,duration:o,intent:"information"});return r.success=(s,o=a)=>e({message:s,duration:o,intent:"success"}),r.danger=(s,o=a)=>e({message:s,duration:o,intent:"danger"}),r.information=(s,o=a)=>e({message:s,duration:o,intent:"information"}),r.warning=(s,o=a)=>e({message:s,duration:o,intent:"warning"}),r},[e])},A=({remove:e,duration:r,message:s,id:o,intent:m})=>{const n=t.useCallback(()=>{e(o)},[o,e]);return C&&t.useLayoutEffect(()=>{const g=setTimeout(()=>{n()},r);return()=>{clearTimeout(g)}},[n]),t.createElement(S,{dismissible:!0,intent:m,className:B,onRequestClose:n},s)};try{u.displayName="ToastProvider",u.__docgenInfo={description:"",displayName:"ToastProvider",props:{}}}catch{}const Z={title:"Components/Toast (useToast)",decorators:[e=>t.createElement(u,null,t.createElement(e,null))]},c=()=>{const e=f();return t.createElement(x,null,t.createElement(l,{onClick:()=>e.success("Successful message!")},"Success"),t.createElement(l,{onClick:()=>e.danger("Danger  message!")},"Danger"),t.createElement(l,{onClick:()=>e.information(t.createElement(p,null,"Im some text, which is ",t.createElement(p,{strong:!0},"bolded!")))},"Custom"))},i={render:()=>{const e=f();return t.createElement(v,{isOpen:!0,title:"Test inside modal"},t.createElement("div",{style:{padding:20}},t.createElement(l,{onClick:()=>e.success("Successful message!")},"Success")))},parameters:{chromatic:{disable:!0}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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
}`,...i.parameters?.docs?.source}}};const $=["Standard","InsideModal"];export{i as InsideModal,c as Standard,$ as __namedExportsOrder,Z as default};
