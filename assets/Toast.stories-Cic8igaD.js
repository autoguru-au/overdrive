import{r as t}from"./index-sWIihdb-.js";import{d as S}from"./index-CYx1ALmS.js";import{i as k}from"./index-BTJTCqq2.js";import{B}from"./Box-00gOjviF.js";import{_ as b}from"./Portal-DXpC600w.js";import{S as h}from"./Stack-UUMbxGIQ.js";import{A as w}from"./Alert-ntFIcDUC.js";import{A as I}from"./Actions-DUHtZOHH.js";import{B as l}from"./Button-C1hH6ysn.js";import{T as f}from"./Text-QMymQfrH.js";import{S as N}from"./StandardModal-DXVYVtwr.js";import"./_commonjsHelpers-C932wzq6.js";import"./index-tsdsQ47m.js";import"./index-D1VIE06o.js";import"./ThemeProvider-Dunuu5Ct.js";import"./makeTheme-BvwTE3C0.js";import"./index-DVF0g4jg.js";import"./useTextStyles-DdPcDMrx.js";import"./IntentStripe-DzK1kPUQ.js";import"./Column-tqql_C7g.js";import"./useNegativeMarginTop-L6ZRpL0Z.js";import"./Icon-Dr6sRo3a.js";import"./WindowCloseIcon-Bt9tSe3T.js";import"./AlertCircleIcon-CYkXDQkC.js";import"./AlertIcon-DI3Zw_Tp.js";import"./ProgressSpinner-DwGQqjqg.js";import"./Modal-BYhQ6VkF.js";import"./Heading-Cp_z8dAf.js";var A="vlw1ec0",P="vlw1ec1";const a=5e3;let q=-1;const D=()=>++q,M=(e,o)=>{switch(o.type){case 0:return{...e,toasts:[...e.toasts,o.config]};case 1:return{...e,toasts:e.toasts.filter(({id:r})=>r!==o.id)};default:return e}},p=t.createContext(null),V=({children:e})=>{const[{toasts:o},r]=t.useReducer(M,{toasts:[]}),n=t.useCallback(s=>{r({type:0,config:{...s,id:D()}})},[]),u=t.useCallback(s=>{r({type:1,id:s})},[]);return t.createElement(p.Provider,{value:n},e,t.createElement(b,null,t.createElement(B,{display:"flex",position:"fixed",alignItems:"center",justifyContent:"center",className:A},t.createElement(h,{space:"2"},o.map(s=>t.createElement(d,{key:s.id,...s,remove:u}))))))},m=({children:e})=>t.useContext(p)!==null?t.createElement(t.Fragment,null,e):t.createElement(V,null,e),_=()=>{const e=t.useContext(p);return S.invariant(e!==null,"No `ToastProvider` setup"),t.useMemo(()=>{const o=(r,n=a)=>void e({message:r,duration:n,intent:"information"});return o.primary=(r,n=a)=>void e({message:r,duration:n,intent:"primary"}),o.secondary=(r,n=a)=>void e({message:r,duration:n,intent:"secondary"}),o.shine=(r,n=a)=>void e({message:r,duration:n,intent:"shine"}),o.success=(r,n=a)=>void e({message:r,duration:n,intent:"success"}),o.neutral=(r,n=a)=>void e({message:r,duration:n,intent:"neutral"}),o.danger=(r,n=a)=>void e({message:r,duration:n,intent:"danger"}),o.information=(r,n=a)=>void e({message:r,duration:n,intent:"information"}),o.warning=(r,n=a)=>void e({message:r,duration:n,intent:"warning"}),o},[e])},d=({remove:e,duration:o,message:r,id:n,intent:u})=>{const s=t.useCallback(()=>{e(n)},[n,e]);return k&&t.useLayoutEffect(()=>{const x=setTimeout(()=>{s()},o);return()=>{clearTimeout(x)}},[s]),t.createElement(w,{dismissible:!0,intent:u,className:P,onRequestClose:s},r)};try{m.displayName="ToastProvider",m.__docgenInfo={description:"",displayName:"ToastProvider",props:{}}}catch{}try{d.displayName="Toast",d.__docgenInfo={description:"",displayName:"Toast",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"number"}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"ReactNode"}},intent:{defaultValue:null,description:"",name:"intent",required:!0,type:{name:"enum",value:[{value:'"danger"'},{value:'"warning"'},{value:'"success"'},{value:'"information"'}]}},duration:{defaultValue:null,description:"",name:"duration",required:!0,type:{name:"number"}},remove:{defaultValue:null,description:"",name:"remove",required:!0,type:{name:"(id: number) => void"}}}}}catch{}const me={title:"Utility/Toaster",decorators:[e=>t.createElement(m,null,t.createElement(e,null))]},i=()=>{const e=_();return t.createElement(I,null,t.createElement(l,{onClick:()=>e.success("Successful message!")},"Success"),t.createElement(l,{onClick:()=>e.danger("Danger  message!")},"Danger"),t.createElement(l,{onClick:()=>e.information(t.createElement(f,null,"Im some text, which is ",t.createElement(f,{strong:!0},"bolded!")))},"Custom"))},c={render:()=>{const e=_();return t.createElement(N,{isOpen:!0,title:"Test inside modal"},t.createElement("div",{style:{padding:20}},t.createElement(l,{onClick:()=>e.success("Successful message!")},"Success")))},parameters:{chromatic:{disable:!0}}};var g,v,T;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
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
}`,...(C=(E=c.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};const de=["Standard","InsideModal"];export{c as InsideModal,i as Standard,de as __namedExportsOrder,me as default};
