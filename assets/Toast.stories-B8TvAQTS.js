import{r as e}from"./index-DVCUSwsV.js";import{A as y}from"./Actions-BDOvEs_h.js";import{B as m}from"./Button-BzfBSmfJ.js";import{S as _}from"./StandardModal-B-gQ3W9N.js";import{T as p}from"./Text-CZSIapSJ.js";import{d as k}from"./index-D_iG_Vvt.js";import{i as B}from"./index-qJC9azT-.js";import{A as h}from"./Alert-DGWa5Fo2.js";import{B as w}from"./Box-DIPDnkNs.js";import{_ as I}from"./Portal-DbwEt6qn.js";import{S as b}from"./Stack-CAaUx8qN.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./Inline-B2m9Rf9M.js";import"./index-4KvmGZzY.js";import"./Icon-C_SEX2PX.js";import"./resolveResponsiveProps-CZKwGxeg.js";import"./ProgressSpinner-Cou6gzq4.js";import"./useTextStyles-CPzSss8t.js";/* empty css                                    */import"./createRuntimeFn-62c9670f.esm-BkdTE7RR.js";import"./Heading-sl8mRLG7.js";import"./Modal-CnrqESvt.js";import"./WindowCloseIcon-BXmvFaYS.js";import"./IntentStripe-BJW4Mrb6.js";import"./AlertIcon-C0SMUlkH.js";import"./InformationIcon-BRwrVntT.js";import"./AlertCircleIcon-C8mCjnKY.js";import"./index-DvpLutvZ.js";import"./index-DCvUOfvz.js";import"./OverdriveProvider-0GejZ--N.js";import"./theme.css-CgnscP65.js";/* empty css                             */import"./tokens-C73FyKBq.js";var A="vlw1ec0",N="vlw1ec1";const a=5e3;let P=-1;const D=()=>++P,M=(t,s)=>{switch(s.type){case 0:return{...t,toasts:[...t.toasts,s.config]};case 1:return{...t,toasts:t.toasts.filter(({id:o})=>o!==s.id)};default:return t}},d=e.createContext(null),O=({children:t})=>{const[{toasts:s},o]=e.useReducer(M,{toasts:[]}),r=e.useCallback(n=>{o({type:0,config:{...n,id:D()}})},[]),l=e.useCallback(n=>{o({type:1,id:n})},[]);return e.createElement(d.Provider,{value:r},t,e.createElement(I,null,e.createElement(w,{display:"flex",position:"fixed",alignItems:"center",justifyContent:"center",className:A},e.createElement(b,{space:"2"},s.map(n=>e.createElement(R,{key:n.id,...n,remove:l}))))))},u=({children:t})=>e.useContext(d)!==null?e.createElement(e.Fragment,null,t):e.createElement(O,null,t),x=()=>{const t=e.useContext(d);return k.invariant(t!==null,"No `ToastProvider` setup"),e.useMemo(()=>{const s=(o,r=a)=>void t({message:o,duration:r,intent:"information"});return s.primary=(o,r=a)=>void t({message:o,duration:r,intent:"primary"}),s.secondary=(o,r=a)=>void t({message:o,duration:r,intent:"secondary"}),s.shine=(o,r=a)=>void t({message:o,duration:r,intent:"shine"}),s.success=(o,r=a)=>void t({message:o,duration:r,intent:"success"}),s.neutral=(o,r=a)=>void t({message:o,duration:r,intent:"neutral"}),s.danger=(o,r=a)=>void t({message:o,duration:r,intent:"danger"}),s.information=(o,r=a)=>void t({message:o,duration:r,intent:"information"}),s.warning=(o,r=a)=>void t({message:o,duration:r,intent:"warning"}),s},[t])},R=({remove:t,duration:s,message:o,id:r,intent:l})=>{const n=e.useCallback(()=>{t(r)},[r,t]);return B&&e.useLayoutEffect(()=>{const S=setTimeout(()=>{n()},s);return()=>{clearTimeout(S)}},[n]),e.createElement(h,{dismissible:!0,intent:l,className:N,onRequestClose:n},o)};try{u.displayName="ToastProvider",u.__docgenInfo={description:"",displayName:"ToastProvider",props:{}}}catch{}const Tt={title:"Components/Toast (useToast)",decorators:[t=>e.createElement(u,null,e.createElement(t,null))]},i=()=>{const t=x();return e.createElement(y,null,e.createElement(m,{onClick:()=>t.success("Successful message!")},"Success"),e.createElement(m,{onClick:()=>t.danger("Danger  message!")},"Danger"),e.createElement(m,{onClick:()=>t.information(e.createElement(p,null,"Im some text, which is ",e.createElement(p,{strong:!0},"bolded!")))},"Custom"))},c={render:()=>{const t=x();return e.createElement(_,{isOpen:!0,title:"Test inside modal"},e.createElement("div",{style:{padding:20}},e.createElement(m,{onClick:()=>t.success("Successful message!")},"Success")))},parameters:{chromatic:{disable:!0}}};var f,g,T;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
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
}`,...(T=(g=i.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var v,E,C;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(C=(E=c.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};const vt=["Standard","InsideModal"];export{c as InsideModal,i as Standard,vt as __namedExportsOrder,Tt as default};
