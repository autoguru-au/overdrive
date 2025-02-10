import{i as Y}from"./isChromatic-AKtkhq4f.js";import{r as i,R as t}from"./index-Cr_cdoBq.js";import{d as re}from"./index-CYx1ALmS.js";import{u as P}from"./useResponsiveValue-BQiGf7eq.js";import{S as W}from"./Stack-BUFBT331.js";import{T as g}from"./Text-B-fLVrc5.js";import"./_commonjsHelpers-C932wzq6.js";import"./index-R9txMNUR.js";import"./Box-riOnoi3Y.js";import"./useMedia-DmskxAoM.js";import"./ThemeProvider-DaUrEAYU.js";import"./makeTheme-BvwTE3C0.js";import"./index-DD0GW_rr.js";import"./dataAttrs-BPvLuXwN.js";import"./useTextStyles-DNm53NZA.js";const V={1:16,2:32,3:48,4:64,5:96,6:128,7:256,8:384,9:640,10:750,11:828,12:1080,13:1200,14:1920,15:2048,16:3840},E={widthMap:V,getWidthValue:e=>V[e],srcUrlMapper:null,generateSrcSet:null},Z=i.createContext(null),ee=()=>i.useContext(Z),d=({children:e,srcUrlMapper:a=E.srcUrlMapper,getWidthValue:r=E.getWidthValue,widthMap:s=E.widthMap})=>{const m=i.useCallback(({quality:o,src:p})=>Object.keys(s).map(c=>{const u=r(c);return`${a({quality:o,src:p,width:u})} ${u}w`}).join(", "),[s,a,r]);return i.createElement(Z.Provider,{value:i.useMemo(()=>({widthMap:s,srcUrlMapper:a,getWidthValue:r,generateSrcSet:m}),[a,s,r,m])},e)};try{d.displayName="ImageServerProvider",d.__docgenInfo={description:"",displayName:"ImageServerProvider",props:{widthMap:{defaultValue:{value:"defaultValue.widthMap"},description:"",name:"widthMap",required:!1,type:{name:"Record<WidthScale, number>"}},srcUrlMapper:{defaultValue:{value:"defaultValue.srcUrlMapper"},description:"",name:"srcUrlMapper",required:!1,type:{name:"(params: UrlParams) => string"}},getWidthValue:{defaultValue:{value:"defaultValue.getWidthValue"},description:"",name:"getWidthValue",required:!1,type:{name:"((width: WidthScale) => number)"}}}}}catch{}const q=({eager:e="false",syncDecoding:a="false",className:r="",src:s,srcSet:m,fallbackComponent:o,...p})=>{const[c,u]=i.useState(!1),z=()=>{u(!0)};return c&&o?o:i.createElement("img",{loading:e?"eager":"lazy",decoding:a?"sync":"async",className:r,srcSet:m,src:s,onError:z,...p})};try{q.displayName="SimpleImage",q.__docgenInfo={description:"",displayName:"SimpleImage",props:{src:{defaultValue:null,description:"The address or URL of the a media resource that is to be considered.",name:"src",required:!0,type:{name:"string"}},eager:{defaultValue:{value:"false"},description:"If set to true, image lazy loading is disabled.",name:"eager",required:!1,type:{name:"boolean"}},srcSet:{defaultValue:null,description:"Can be manually defined as a normal `srcset` img tag attribute but will be automatically set for\nall available sizes when an `ImageServerProvider` is defined upstream.",name:"srcSet",required:!1,type:{name:"string"}},syncDecoding:{defaultValue:{value:"false"},description:`When set to true image async decoding by the browser is disabled.
Async decoding of the image reduces delay in presenting other content.`,name:"syncDecoding",required:!1,type:{name:"boolean"}},width:{defaultValue:null,description:"Only effective if `ImageServerProvider` is defined upstream.\nWill be set as `width` attribute on the `img` tag",name:"width",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"Will be set as `height` attribute on the `img` tag",name:"height",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},fallbackComponent:{defaultValue:null,description:"",name:"fallbackComponent",required:!1,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>>"}}}}}catch{}const k=({imageWidth:e,sizes:a="100vw",quality:r=70,src:s,...m})=>{re.invariant(r>0&&r<=100,"Image must be a number between 1 and 100.");const o=P(e),p=P(a),{srcUrlMapper:c,getWidthValue:u,generateSrcSet:z}=ee(),te=i.useMemo(()=>c({src:s,width:u(o),quality:r}),[s,o,r,c,u]),ae=i.useMemo(()=>o?void 0:z({src:s,quality:r}),[s,r]);return i.createElement(q,{sizes:p||void 0,srcSet:ae,src:te,...m})};try{k.displayName="ResponsiveImage",k.__docgenInfo={description:"",displayName:"ResponsiveImage",props:{imageWidth:{defaultValue:null,description:"Only effective if `ImageServerProvider` is defined upstream.\nNot to be confused with the `width` of the image tag. `imageWidth` is purely to do with the\nintrinsic size of the image asset coming back from the Image Server and does not change the layout size of the `img` tag\nIf `imageWidth` is provided, it will be exactly used and no automatic `srcSet` will be defined and `sizes` will have no effect.\n`imageWidth` can be a single value e.g. `4` to be used for all screen sizes or an array to be used for responsive values e.g. `[4, ,6, 8]`",name:"imageWidth",required:!0,type:{name:"never[]"}},sizes:{defaultValue:null,description:"Only effective if `ImageServerProvider` is defined upstream.\nA vw value e.g. `80vw` or an array of vw values `['100vw', ,'50vw', '30vw']` to be used as responsive.\nWhen defined, browser will pick the closest match from srcSet based on viewport width size.\nJust like `imageWidth` sizes has no effect on the `img` tag layout size and is purely to do with the\nintrinsic size of the image asset coming back from the Image Server.\nin `['100vw', ,'50vw', '30vw']` browser will fetch the best image asset to cover\nthe whole width of mobile and tablet devices, 50% of desktop screen width 30% of a large desktop screen width irrespective\nof the size of img tag on the page. So a `100vh` set for a large desktop might fetch a `3840px` wide\nasset even if the image only occupies 10px of the page width.",name:"sizes",required:!0,type:{name:"ResponsiveProp<string>"}},quality:{defaultValue:{value:"70"},description:"Only effective if `ImageServerProvider` is defined upstream.\nA number between 1 and 100 to be used by the image server for the quality of image returned.",name:"quality",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Only effective if `ImageServerProvider` is defined upstream.\nWill be set as `width` attribute on the `img` tag",name:"width",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"Will be set as `height` attribute on the `img` tag",name:"height",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},src:{defaultValue:null,description:"The address or URL of the a media resource that is to be considered.",name:"src",required:!0,type:{name:"string"}},srcSet:{defaultValue:null,description:"Can be manually defined as a normal `srcset` img tag attribute but will be automatically set for\nall available sizes when an `ImageServerProvider` is defined upstream.",name:"srcSet",required:!1,type:{name:"string"}},eager:{defaultValue:null,description:"If set to true, image lazy loading is disabled.",name:"eager",required:!1,type:{name:"boolean"}},syncDecoding:{defaultValue:null,description:`When set to true image async decoding by the browser is disabled.
Async decoding of the image reduces delay in presenting other content.`,name:"syncDecoding",required:!1,type:{name:"boolean"}},fallbackComponent:{defaultValue:null,description:"",name:"fallbackComponent",required:!1,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>>"}}}}}catch{}const n=({unoptimised:e=!1,imageWidth:a,...r})=>ee()&&!e?i.createElement(k,{imageWidth:a,...r}):i.createElement(q,{...r});try{n.displayName="Image",n.__docgenInfo={description:"",displayName:"Image",props:{unoptimised:{defaultValue:{value:"false"},description:"If set to true, no size/quality optimisation will be done even when `ImageServerProvider` has been defined upstream.",name:"unoptimised",required:!1,type:{name:"boolean"}},imageWidth:{defaultValue:null,description:"Only effective if `ImageServerProvider` is defined upstream.\nNot to be confused with the `width` of the image tag. `imageWidth` is purely to do with the\nintrinsic size of the image asset coming back from the Image Server and does not change the layout size of the `img` tag\nIf `imageWidth` is provided, it will be exactly used and no automatic `srcSet` will be defined and `sizes` will have no effect.\n`imageWidth` can be a single value e.g. `4` to be used for all screen sizes or an array to be used for responsive values e.g. `[4, ,6, 8]`",name:"imageWidth",required:!0,type:{name:"never[]"}},sizes:{defaultValue:null,description:"Only effective if `ImageServerProvider` is defined upstream.\nA vw value e.g. `80vw` or an array of vw values `['100vw', ,'50vw', '30vw']` to be used as responsive.\nWhen defined, browser will pick the closest match from srcSet based on viewport width size.\nJust like `imageWidth` sizes has no effect on the `img` tag layout size and is purely to do with the\nintrinsic size of the image asset coming back from the Image Server.\nin `['100vw', ,'50vw', '30vw']` browser will fetch the best image asset to cover\nthe whole width of mobile and tablet devices, 50% of desktop screen width 30% of a large desktop screen width irrespective\nof the size of img tag on the page. So a `100vh` set for a large desktop might fetch a `3840px` wide\nasset even if the image only occupies 10px of the page width.",name:"sizes",required:!0,type:{name:"ResponsiveProp<string>"}},quality:{defaultValue:null,description:"Only effective if `ImageServerProvider` is defined upstream.\nA number between 1 and 100 to be used by the image server for the quality of image returned.",name:"quality",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Only effective if `ImageServerProvider` is defined upstream.\nWill be set as `width` attribute on the `img` tag",name:"width",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"Will be set as `height` attribute on the `img` tag",name:"height",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},src:{defaultValue:null,description:"The address or URL of the a media resource that is to be considered.",name:"src",required:!0,type:{name:"string"}},srcSet:{defaultValue:null,description:"Can be manually defined as a normal `srcset` img tag attribute but will be automatically set for\nall available sizes when an `ImageServerProvider` is defined upstream.",name:"srcSet",required:!1,type:{name:"string"}},eager:{defaultValue:null,description:"If set to true, image lazy loading is disabled.",name:"eager",required:!1,type:{name:"boolean"}},syncDecoding:{defaultValue:null,description:`When set to true image async decoding by the browser is disabled.
Async decoding of the image reduces delay in presenting other content.`,name:"syncDecoding",required:!1,type:{name:"boolean"}},fallbackComponent:{defaultValue:null,description:"",name:"fallbackComponent",required:!1,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>>"}}}}}catch{}const _=Y()?["8"]:["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16"],ie=Y()?["70"]:[1,20,40,60,80,100],l=e=>e==="full"?"100%":V[e],be={title:"Primatives/Image",component:n,args:{imageWidth:8,width:8,quality:void 0,eager:!1,unoptimised:!1},argTypes:{imageWidth:{options:[..._,"full"],control:{type:"select"}},width:{options:[..._,"full"],control:{type:"select"}},quality:{control:{type:"number",min:1,max:100}},eager:{control:{type:"boolean"}},unoptimised:{control:{type:"boolean"}}}},f={args:{src:"https://cdn.autoguru.com.au/images/autoguru-og.jpg"},render:e=>t.createElement("div",{style:{width:"100%",overflow:"auto"}},t.createElement(n,{...e,width:l(e.width)}))},h=({src:e,width:a,quality:r})=>`https://images.autoguru.com.au/?url=${e}&w=${a}&q=${r}`,v={args:{src:"https://cdn.autoguru.com.au/images/autoguru-test-highres-image.jpg",unoptimised:!0},render:e=>t.createElement(d,{srcUrlMapper:h},t.createElement("div",{style:{width:"100%",overflow:"auto"}},t.createElement(n,{...e,width:l(e.width)})))},w={args:{src:"https://cdn.autoguru.com.au/images/autoguru-test-highres-image.jpg",quality:60,imageWidth:8,sizes:["100vh",,"60vh","40vh"]},render:e=>t.createElement(d,{srcUrlMapper:h},t.createElement("div",{style:{width:"100%",overflow:"auto"}},t.createElement(n,{...e,width:l(e.width)})))},y={args:{src:"https://cdn.autoguru.com.au/images/autoguru-test-highres-image.jpg",width:"full",sizes:["100vw","70vw","50vw","40vw"],imageWidth:[5,8,,12]},render:e=>t.createElement(d,{srcUrlMapper:h},t.createElement("div",{style:{width:"100%",overflow:"auto"}},t.createElement(n,{...e,width:l(e.width)})))},b={args:{src:"https://cdn.autoguru.com.au/images/autoguru-test-highres-image.jpg",width:"full",sizes:["100vw","70vw","50vw","40vw"]},render:e=>t.createElement(d,{srcUrlMapper:h},t.createElement("div",{style:{width:"100%",overflow:"auto"}},t.createElement(n,{...e,width:l(e.width)})))},S={args:{src:"https://cdn.autoguru.com.au/images/autoguru-test-highres-image.jpg",quality:60,imageWidth:8,sizes:["100vh",,"60vh","40vh"]},render:e=>t.createElement(d,{srcUrlMapper:h},t.createElement("div",{style:{width:"100%",overflow:"auto"}},t.createElement(W,{space:"5"},ie.map(a=>t.createElement(W,{key:a,space:"1"},t.createElement(g,null,"Quality: ",t.createElement(g,{strong:!0},a)),t.createElement(n,{key:a,...e,width:l(e.width),imageWidth:e.width,quality:a}))))))},I={args:{src:"https://cdn.autoguru.com.au/images/autoguru-test-highres-image.jpg",quality:20,sizes:["100vh",,"60vh","40vh"]},render:e=>t.createElement(d,{srcUrlMapper:h},t.createElement("div",{style:{width:"100%",overflow:"auto"}},t.createElement(W,{width:"full",space:"5"},_.map(a=>t.createElement(W,{key:a,space:"1"},t.createElement(g,null,"Quality: ",t.createElement(g,{strong:!0},e.quality)),t.createElement(g,null,"Width:"," ",t.createElement(g,{strong:!0},a,": ",l(a),"px")),t.createElement(n,{...e,width:l(a),imageWidth:a}))))))};var x,M,U;f.parameters={...f.parameters,docs:{...(x=f.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    src: 'https://cdn.autoguru.com.au/images/autoguru-og.jpg'
  },
  render: args => <div style={{
    width: '100%',
    overflow: 'auto'
  }}>
            <Image {...args} width={calcWidth(args.width)} />
        </div>
}`,...(U=(M=f.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var R,T,j;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    src: 'https://cdn.autoguru.com.au/images/autoguru-test-highres-image.jpg',
    unoptimised: true
  },
  render: args => <ImageServerProvider srcUrlMapper={srcUrlMapper}>
            <div style={{
      width: '100%',
      overflow: 'auto'
    }}>
                <Image {...args} width={calcWidth(args.width)} />
            </div>
        </ImageServerProvider>
}`,...(j=(T=v.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var C,N,O;w.parameters={...w.parameters,docs:{...(C=w.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    src: 'https://cdn.autoguru.com.au/images/autoguru-test-highres-image.jpg',
    quality: 60,
    imageWidth: 8,
    sizes: ['100vh',, '60vh', '40vh']
  },
  render: args => <ImageServerProvider srcUrlMapper={srcUrlMapper}>
            <div style={{
      width: '100%',
      overflow: 'auto'
    }}>
                <Image {...args} width={calcWidth(args.width)} />
            </div>
        </ImageServerProvider>
}`,...(O=(N=w.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var A,D,Q;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    src: 'https://cdn.autoguru.com.au/images/autoguru-test-highres-image.jpg',
    width: 'full',
    sizes: ['100vw', '70vw', '50vw', '40vw'],
    imageWidth: [5, 8,, 12]
  },
  render: args => <ImageServerProvider srcUrlMapper={srcUrlMapper}>
            <div style={{
      width: '100%',
      overflow: 'auto'
    }}>
                <Image {...args} width={calcWidth(args.width)} />
            </div>
        </ImageServerProvider>
}`,...(Q=(D=y.parameters)==null?void 0:D.docs)==null?void 0:Q.source}}};var J,$,L;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    src: 'https://cdn.autoguru.com.au/images/autoguru-test-highres-image.jpg',
    width: 'full',
    sizes: ['100vw', '70vw', '50vw', '40vw']
  },
  render: args => <ImageServerProvider srcUrlMapper={srcUrlMapper}>
            <div style={{
      width: '100%',
      overflow: 'auto'
    }}>
                <Image {...args} width={calcWidth(args.width)} />
            </div>
        </ImageServerProvider>
}`,...(L=($=b.parameters)==null?void 0:$.docs)==null?void 0:L.source}}};var X,H,B;S.parameters={...S.parameters,docs:{...(X=S.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    src: 'https://cdn.autoguru.com.au/images/autoguru-test-highres-image.jpg',
    quality: 60,
    imageWidth: 8,
    sizes: ['100vh',, '60vh', '40vh']
  },
  render: args => <ImageServerProvider srcUrlMapper={srcUrlMapper}>
            <div style={{
      width: '100%',
      overflow: 'auto'
    }}>
                <Stack space="5">
                    {qualityOptions.map(quality => <Stack key={quality} space="1">
                            <Text>
                                Quality: <Text strong>{quality}</Text>
                            </Text>
                            <Image key={quality} {...args} width={calcWidth(args.width)} imageWidth={args.width} quality={quality} />
                        </Stack>)}
                </Stack>
            </div>
        </ImageServerProvider>
}`,...(B=(H=S.parameters)==null?void 0:H.docs)==null?void 0:B.source}}};var F,G,K;I.parameters={...I.parameters,docs:{...(F=I.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    src: 'https://cdn.autoguru.com.au/images/autoguru-test-highres-image.jpg',
    quality: 20,
    sizes: ['100vh',, '60vh', '40vh']
  },
  render: args => <ImageServerProvider srcUrlMapper={srcUrlMapper}>
            <div style={{
      width: '100%',
      overflow: 'auto'
    }}>
                <Stack width="full" space="5">
                    {sizeOptions.map(width => <Stack key={width} space="1">
                            <Text>
                                Quality: <Text strong>{args.quality}</Text>
                            </Text>
                            <Text>
                                Width:{' '}
                                <Text strong>
                                    {width}: {calcWidth(width)}px
                                </Text>
                            </Text>
                            <Image {...args} width={calcWidth(width)} imageWidth={width} />
                        </Stack>)}
                </Stack>
            </div>
        </ImageServerProvider>
}`,...(K=(G=I.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};const Se=["Standard","WithImageServerUnoptimised","WithImageServer","WithResponsiveImageWidth","WithResponsiveSizes","WithImageServerQualities","WithImageServerResizing"];export{f as Standard,w as WithImageServer,S as WithImageServerQualities,I as WithImageServerResizing,v as WithImageServerUnoptimised,y as WithResponsiveImageWidth,b as WithResponsiveSizes,Se as __namedExportsOrder,be as default};
