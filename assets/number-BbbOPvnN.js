const a=e=>e<1e3?{value:e,descriptor:""}:e<1e6?{value:e/1e3,descriptor:"K"}:{value:e/1e6,descriptor:"M"},s=(e,t=1)=>{const r=a(e);return`${Number.isInteger(r.value)?r.value:r.value.toFixed(t)}${r.descriptor}`},i=(e,t)=>Number((e+t).toFixed(12));export{i as a,s as t};
