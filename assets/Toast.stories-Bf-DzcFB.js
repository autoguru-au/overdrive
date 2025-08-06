import{r as t,j as T,B as v,S as E,i as C}from"./iframe-CB5JKjWu.js";import{A as x}from"./Actions-YKgaGXEA.js";import{B as l}from"./Button-C277qLUm.js";import{S}from"./StandardModal-Cu_Kn7la.js";import{T as p}from"./Text-Cf0Mhz-X.js";import{A as y}from"./Alert-CBEHy3AB.js";import{_}from"./Portal-zlC5vn2m.js";import"./preload-helper-D9Z9MdNV.js";import"./Column-BlI9VWdT.js";import"./resolveResponsiveProps-CWYDc9O1.js";import"./Icon-CuUuZ0wo.js";import"./ProgressSpinner-o5UgHvhj.js";import"./Modal-88SIbOnI.js";import"./WindowCloseIcon-M5r0O3Zw.js";import"./IntentStripe-CYV1Jewd.js";import"./AlertIcon-wjGGZz39.js";import"./InformationIcon-Bxz1gH5X.js";import"./AlertCircleIcon-BVEG890H.js";import"./index-BHNpTPOS.js";import"./index-KRHroF7l.js";var k="vlw1ec0",B="vlw1ec1";const a=5e3;let h=-1;const w=()=>++h,I=(e,r)=>{switch(r.type){case 0:return{...e,toasts:[...e.toasts,r.config]};case 1:return{...e,toasts:e.toasts.filter(({id:s})=>s!==r.id)};default:return e}},d=t.createContext(null),b=({children:e})=>{const[{toasts:r},s]=t.useReducer(I,{toasts:[]}),o=t.useCallback(n=>{s({type:0,config:{...n,id:w()}})},[]),m=t.useCallback(n=>{s({type:1,id:n})},[]);return t.createElement(d.Provider,{value:o},e,t.createElement(_,null,t.createElement(v,{display:"flex",position:"fixed",alignItems:"center",justifyContent:"center",className:k},t.createElement(E,{space:"2"},r.map(n=>t.createElement(A,{key:n.id,...n,remove:m}))))))},u=({children:e})=>t.useContext(d)!==null?t.createElement(t.Fragment,null,e):t.createElement(b,null,e),f=()=>{const e=t.useContext(d);return T.invariant(e!==null,"No `ToastProvider` setup"),t.useMemo(()=>{const r=(s,o=a)=>void e({message:s,duration:o,intent:"information"});return r.primary=(s,o=a)=>void e({message:s,duration:o,intent:"primary"}),r.secondary=(s,o=a)=>void e({message:s,duration:o,intent:"secondary"}),r.shine=(s,o=a)=>void e({message:s,duration:o,intent:"shine"}),r.success=(s,o=a)=>void e({message:s,duration:o,intent:"success"}),r.neutral=(s,o=a)=>void e({message:s,duration:o,intent:"neutral"}),r.danger=(s,o=a)=>void e({message:s,duration:o,intent:"danger"}),r.information=(s,o=a)=>void e({message:s,duration:o,intent:"information"}),r.warning=(s,o=a)=>void e({message:s,duration:o,intent:"warning"}),r},[e])},A=({remove:e,duration:r,message:s,id:o,intent:m})=>{const n=t.useCallback(()=>{e(o)},[o,e]);return C&&t.useLayoutEffect(()=>{const g=setTimeout(()=>{n()},r);return()=>{clearTimeout(g)}},[n]),t.createElement(y,{dismissible:!0,intent:m,className:B,onRequestClose:n},s)};try{u.displayName="ToastProvider",u.__docgenInfo={description:"",displayName:"ToastProvider",props:{}}}catch{}const Y={title:"Components/Toast (useToast)",decorators:[e=>t.createElement(u,null,t.createElement(e,null))]},c=()=>{const e=f();return t.createElement(x,null,t.createElement(l,{onClick:()=>e.success("Successful message!")},"Success"),t.createElement(l,{onClick:()=>e.danger("Danger  message!")},"Danger"),t.createElement(l,{onClick:()=>e.information(t.createElement(p,null,"Im some text, which is ",t.createElement(p,{strong:!0},"bolded!")))},"Custom"))},i={render:()=>{const e=f();return t.createElement(S,{isOpen:!0,title:"Test inside modal"},t.createElement("div",{style:{padding:20}},t.createElement(l,{onClick:()=>e.success("Successful message!")},"Success")))},parameters:{chromatic:{disable:!0}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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
}`,...i.parameters?.docs?.source}}};const Z=["Standard","InsideModal"];export{i as InsideModal,c as Standard,Z as __namedExportsOrder,Y as default};
