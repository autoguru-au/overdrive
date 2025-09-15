import{r as i,l as U,e as t,w as x}from"./iframe-B6_QgceS.js";import{a as z}from"./flex-CU5_bmZj.js";import{T as g}from"./Text-Bm62SiFA.js";import{u as _}from"./useResponsiveValue-BM5swn67.js";import"./preload-helper-D9Z9MdNV.js";import"./useMedia-RjPqp7fE.js";import"./resolveResponsiveProps-CzS1S_1C.js";const P={1:16,2:32,3:48,4:64,5:96,6:128,7:256,8:384,9:640,10:750,11:828,12:1080,13:1200,14:1920,15:2048,16:3840},V={widthMap:P,getWidthValue:e=>P[e],srcUrlMapper:null},N=i.createContext(null),T=()=>i.useContext(N),l=({children:e,srcUrlMapper:a=V.srcUrlMapper,getWidthValue:r=V.getWidthValue,widthMap:n=V.widthMap})=>{const m=i.useCallback(({quality:o,src:v})=>Object.keys(n).map(u=>{const c=r?.(u);return`${a({quality:o,src:v,width:c})} ${c}w`}).join(", "),[n,a,r]);return i.createElement(N.Provider,{value:i.useMemo(()=>({widthMap:n,srcUrlMapper:a,getWidthValue:r,generateSrcSet:m}),[a,n,r,m])},e)};try{l.displayName="ImageServerProvider",l.__docgenInfo={description:"",displayName:"ImageServerProvider",props:{widthMap:{defaultValue:{value:"defaultValue.widthMap"},description:"",name:"widthMap",required:!1,type:{name:"Record<WidthScale, number>"}},srcUrlMapper:{defaultValue:{value:"defaultValue.srcUrlMapper"},description:"",name:"srcUrlMapper",required:!1,type:{name:"(params: UrlParams) => string"}},getWidthValue:{defaultValue:{value:"defaultValue.getWidthValue"},description:"",name:"getWidthValue",required:!1,type:{name:"((width: WidthScale) => number)"}}}}}catch{}const E=({eager:e="false",syncDecoding:a="false",className:r="",src:n,srcSet:m,fallbackComponent:o,...v})=>{const[u,c]=i.useState(!1),q=()=>{c(!0)};return u&&o?o:i.createElement("img",{loading:e?"eager":"lazy",decoding:a?"sync":"async",className:r,srcSet:m,src:n,onError:q,...v})};try{E.displayName="SimpleImage",E.__docgenInfo={description:"",displayName:"SimpleImage",props:{src:{defaultValue:null,description:"The HTMLImageElement property **`src`**, which reflects the HTML `src` attribute, specifies the image to display in the img element.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLImageElement/src)",name:"src",required:!0,type:{name:"string"}},eager:{defaultValue:{value:"false"},description:"If set to true, image lazy loading is disabled.",name:"eager",required:!1,type:{name:"boolean"}},srcSet:{defaultValue:null,description:"Can be manually defined as a normal `srcset` img tag attribute but will be automatically set for\nall available sizes when an `ImageServerProvider` is defined upstream.",name:"srcSet",required:!1,type:{name:"string"}},syncDecoding:{defaultValue:{value:"false"},description:`When set to true image async decoding by the browser is disabled.
Async decoding of the image reduces delay in presenting other content.`,name:"syncDecoding",required:!1,type:{name:"boolean"}},width:{defaultValue:null,description:"Only effective if `ImageServerProvider` is defined upstream.\nWill be set as `width` attribute on the `img` tag",name:"width",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"Will be set as `height` attribute on the `img` tag",name:"height",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},fallbackComponent:{defaultValue:null,description:"",name:"fallbackComponent",required:!1,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>>"}}}}}catch{}const k=({imageWidth:e,sizes:a="100vw",quality:r=70,src:n,...m})=>{U.invariant(r>0&&r<=100,"Image must be a number between 1 and 100.");const o=_(e),v=_(a),{srcUrlMapper:u,getWidthValue:c,generateSrcSet:q}=T(),O=i.useMemo(()=>u({src:n,width:c(o),quality:r}),[n,o,r,u,c]),R=i.useMemo(()=>o?void 0:q({src:n,quality:r}),[n,r]);return i.createElement(E,{sizes:v||void 0,srcSet:R,src:O,...m})};try{k.displayName="ResponsiveImage",k.__docgenInfo={description:"",displayName:"ResponsiveImage",props:{imageWidth:{defaultValue:null,description:"Only effective if `ImageServerProvider` is defined upstream.\nNot to be confused with the `width` of the image tag. `imageWidth` is purely to do with the\nintrinsic size of the image asset coming back from the Image Server and does not change the layout size of the `img` tag\nIf `imageWidth` is provided, it will be exactly used and no automatic `srcSet` will be defined and `sizes` will have no effect.\n`imageWidth` can be a single value e.g. `4` to be used for all screen sizes or an array to be used for responsive values e.g. `[4, ,6, 8]`",name:"imageWidth",required:!0,type:{name:"ResponsiveProp<WidthScale>"}},sizes:{defaultValue:{value:"100vw"},description:"Only effective if `ImageServerProvider` is defined upstream.\nA vw value e.g. `80vw` or an array of vw values `['100vw', ,'50vw', '30vw']` to be used as responsive.\nWhen defined, browser will pick the closest match from srcSet based on viewport width size.\nJust like `imageWidth` sizes has no effect on the `img` tag layout size and is purely to do with the\nintrinsic size of the image asset coming back from the Image Server.\nin `['100vw', ,'50vw', '30vw']` browser will fetch the best image asset to cover\nthe whole width of mobile and tablet devices, 50% of desktop screen width 30% of a large desktop screen width irrespective\nof the size of img tag on the page. So a `100vh` set for a large desktop might fetch a `3840px` wide\nasset even if the image only occupies 10px of the page width.",name:"sizes",required:!1,type:{name:"ResponsiveProp<string>"}},quality:{defaultValue:{value:"70"},description:"Only effective if `ImageServerProvider` is defined upstream.\nA number between 1 and 100 to be used by the image server for the quality of image returned.",name:"quality",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"Will be set as `height` attribute on the `img` tag",name:"height",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"Only effective if `ImageServerProvider` is defined upstream.\nWill be set as `width` attribute on the `img` tag",name:"width",required:!1,type:{name:"string"}},src:{defaultValue:null,description:"The HTMLImageElement property **`src`**, which reflects the HTML `src` attribute, specifies the image to display in the img element.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLImageElement/src)",name:"src",required:!0,type:{name:"string"}},srcSet:{defaultValue:null,description:"Can be manually defined as a normal `srcset` img tag attribute but will be automatically set for\nall available sizes when an `ImageServerProvider` is defined upstream.",name:"srcSet",required:!1,type:{name:"string"}},eager:{defaultValue:null,description:"If set to true, image lazy loading is disabled.",name:"eager",required:!1,type:{name:"boolean"}},syncDecoding:{defaultValue:null,description:`When set to true image async decoding by the browser is disabled.
Async decoding of the image reduces delay in presenting other content.`,name:"syncDecoding",required:!1,type:{name:"boolean"}},fallbackComponent:{defaultValue:null,description:"",name:"fallbackComponent",required:!1,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>>"}}}}}catch{}const s=({unoptimised:e=!1,imageWidth:a,...r})=>T()&&!e?i.createElement(k,{imageWidth:a,...r}):i.createElement(E,{...r});try{s.displayName="Image",s.__docgenInfo={description:"",displayName:"Image",props:{unoptimised:{defaultValue:{value:"false"},description:"If set to true, no size/quality optimisation will be done even when `ImageServerProvider` has been defined upstream.",name:"unoptimised",required:!1,type:{name:"boolean"}},imageWidth:{defaultValue:null,description:"Only effective if `ImageServerProvider` is defined upstream.\nNot to be confused with the `width` of the image tag. `imageWidth` is purely to do with the\nintrinsic size of the image asset coming back from the Image Server and does not change the layout size of the `img` tag\nIf `imageWidth` is provided, it will be exactly used and no automatic `srcSet` will be defined and `sizes` will have no effect.\n`imageWidth` can be a single value e.g. `4` to be used for all screen sizes or an array to be used for responsive values e.g. `[4, ,6, 8]`",name:"imageWidth",required:!0,type:{name:"ResponsiveProp<WidthScale>"}},sizes:{defaultValue:null,description:"Only effective if `ImageServerProvider` is defined upstream.\nA vw value e.g. `80vw` or an array of vw values `['100vw', ,'50vw', '30vw']` to be used as responsive.\nWhen defined, browser will pick the closest match from srcSet based on viewport width size.\nJust like `imageWidth` sizes has no effect on the `img` tag layout size and is purely to do with the\nintrinsic size of the image asset coming back from the Image Server.\nin `['100vw', ,'50vw', '30vw']` browser will fetch the best image asset to cover\nthe whole width of mobile and tablet devices, 50% of desktop screen width 30% of a large desktop screen width irrespective\nof the size of img tag on the page. So a `100vh` set for a large desktop might fetch a `3840px` wide\nasset even if the image only occupies 10px of the page width.",name:"sizes",required:!0,type:{name:"ResponsiveProp<string>"}},quality:{defaultValue:null,description:"Only effective if `ImageServerProvider` is defined upstream.\nA number between 1 and 100 to be used by the image server for the quality of image returned.",name:"quality",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"Will be set as `height` attribute on the `img` tag",name:"height",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"Only effective if `ImageServerProvider` is defined upstream.\nWill be set as `width` attribute on the `img` tag",name:"width",required:!1,type:{name:"string"}},src:{defaultValue:null,description:"The HTMLImageElement property **`src`**, which reflects the HTML `src` attribute, specifies the image to display in the img element.\n\n[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLImageElement/src)",name:"src",required:!0,type:{name:"string"}},srcSet:{defaultValue:null,description:"Can be manually defined as a normal `srcset` img tag attribute but will be automatically set for\nall available sizes when an `ImageServerProvider` is defined upstream.",name:"srcSet",required:!1,type:{name:"string"}},eager:{defaultValue:null,description:"If set to true, image lazy loading is disabled.",name:"eager",required:!1,type:{name:"boolean"}},syncDecoding:{defaultValue:null,description:`When set to true image async decoding by the browser is disabled.
Async decoding of the image reduces delay in presenting other content.`,name:"syncDecoding",required:!1,type:{name:"boolean"}},fallbackComponent:{defaultValue:null,description:"",name:"fallbackComponent",required:!1,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>>"}}}}}catch{}const M=x()?["8"]:["2","3","4","5","6","7","8","9","10","11","12","13","14","15","16"],$=x()?[70]:[20,40,60,80,100],d=e=>e==="full"?"100%":P[e],J={title:"Primitives/Image",component:s,args:{imageWidth:"8",width:"8",quality:void 0,eager:!1,unoptimised:!1},argTypes:{imageWidth:{options:[...M,"full"],control:{type:"select"}},width:{options:[...M,"full"],control:{type:"select"}},quality:{control:{type:"number",min:1,max:100}},eager:{control:{type:"boolean"}},unoptimised:{control:{type:"boolean"}}}},p="https://cdn.autoguru.com.au/images/autoguru-test-highres-image.jpg",f={args:{src:"https://cdn.autoguru.com.au/images/autoguru-og.jpg"},render:e=>t.createElement("div",{style:{width:"100%",overflow:"auto"}},t.createElement(s,{...e,width:`${d(e.width)}`}))},h=({src:e,width:a,quality:r})=>`https://images.autoguru.com.au/?url=${e}&w=${a}&q=${r}`,w={args:{src:p,unoptimised:!0},render:e=>t.createElement(l,{srcUrlMapper:h},t.createElement("div",{style:{width:"100%",overflow:"auto"}},t.createElement(s,{...e,width:`${d(e.width)}`})))},y={args:{src:p,quality:60,imageWidth:"8",sizes:["100vh",void 0,"60vh","40vh"]},render:e=>t.createElement(l,{srcUrlMapper:h},t.createElement("div",{style:{width:"100%",overflow:"auto"}},t.createElement(s,{...e,width:`${d(e.width)}`})))},b={args:{src:p,width:"full",sizes:["100vw","70vw","50vw","40vw"],imageWidth:["5","8",void 0,"12"]},render:e=>t.createElement(l,{srcUrlMapper:h},t.createElement("div",{style:{width:"100%",overflow:"auto"}},t.createElement(s,{...e,width:`${d(e.width)}`})))},S={args:{src:p,width:"full",sizes:["100vw","70vw","50vw","40vw"]},render:e=>t.createElement(l,{srcUrlMapper:h},t.createElement("div",{style:{width:"100%",overflow:"auto"}},t.createElement(s,{...e,width:`${d(e.width)}`})))},I={args:{src:p,quality:60,imageWidth:"8",sizes:["100vh",void 0,"60vh","40vh"]},render:e=>t.createElement(l,{srcUrlMapper:h},t.createElement("div",{style:{width:"100%",overflow:"auto"}},t.createElement("div",{className:z({gap:"5"})},$.map(a=>t.createElement("div",{className:z({gap:"1"}),key:a},t.createElement(g,null,"Quality: ",t.createElement(g,{strong:!0},a)),t.createElement(s,{key:a,...e,width:`${d(e.width)}`,imageWidth:e.width,quality:a}))))))},W={args:{src:p,quality:20,sizes:["100vh",void 0,"60vh","40vh"]},render:e=>t.createElement(l,{srcUrlMapper:h},t.createElement("div",{style:{width:"100%",overflow:"auto"}},t.createElement("div",{className:z({gap:"5"})},M.map(a=>t.createElement("div",{className:z({gap:"1"}),key:a},t.createElement(g,null,"Quality: ",t.createElement(g,{strong:!0},e.quality)),t.createElement(g,null,"Width:"," ",t.createElement(g,{strong:!0},a,": ",d(a),"px")),t.createElement(s,{...e,width:`${d(a)}`,imageWidth:a}))))))};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://cdn.autoguru.com.au/images/autoguru-og.jpg'
  },
  render: args => <div style={{
    width: '100%',
    overflow: 'auto'
  }}>
            <Image {...args} width={\`\${calcWidth(args.width as SizeOption)}\`} />
        </div>
}`,...f.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    src: highresImgSrc,
    unoptimised: true
  },
  render: args => <ImageServerProvider srcUrlMapper={srcUrlMapper}>
            <div style={{
      width: '100%',
      overflow: 'auto'
    }}>
                <Image {...args} width={\`\${calcWidth(args.width as SizeOption)}\`} />
            </div>
        </ImageServerProvider>
}`,...w.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    src: highresImgSrc,
    quality: 60,
    imageWidth: '8',
    // @ts-expect-error no undefined in array
    sizes: ['100vh', undefined, '60vh', '40vh']
  },
  render: args => <ImageServerProvider srcUrlMapper={srcUrlMapper}>
            <div style={{
      width: '100%',
      overflow: 'auto'
    }}>
                <Image {...args} width={\`\${calcWidth(args.width as SizeOption)}\`} />
            </div>
        </ImageServerProvider>
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    src: highresImgSrc,
    width: 'full',
    sizes: ['100vw', '70vw', '50vw', '40vw'],
    // @ts-expect-error no undefined in array
    imageWidth: ['5', '8', undefined, '12']
  },
  render: args => <ImageServerProvider srcUrlMapper={srcUrlMapper}>
            <div style={{
      width: '100%',
      overflow: 'auto'
    }}>
                <Image {...args} width={\`\${calcWidth(args.width as SizeOption)}\`} />
            </div>
        </ImageServerProvider>
}`,...b.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    src: highresImgSrc,
    width: 'full',
    sizes: ['100vw', '70vw', '50vw', '40vw']
  },
  render: args => <ImageServerProvider srcUrlMapper={srcUrlMapper}>
            <div style={{
      width: '100%',
      overflow: 'auto'
    }}>
                <Image {...args} width={\`\${calcWidth(args.width as SizeOption)}\`} />
            </div>
        </ImageServerProvider>
}`,...S.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    src: highresImgSrc,
    quality: 60,
    imageWidth: '8',
    // @ts-expect-error no undefined in array
    sizes: ['100vh', undefined, '60vh', '40vh']
  },
  render: args => <ImageServerProvider srcUrlMapper={srcUrlMapper}>
            <div style={{
      width: '100%',
      overflow: 'auto'
    }}>
                <div className={stack({
        gap: '5'
      })}>
                    {qualityOptions.map(quality => <div className={stack({
          gap: '1'
        })} key={quality}>
                            <Text>
                                Quality: <Text strong>{quality}</Text>
                            </Text>
                            <Image key={quality} {...args} width={\`\${calcWidth(args.width as SizeOption)}\`} imageWidth={args.width as SizeOption} quality={quality} />
                        </div>)}
                </div>
            </div>
        </ImageServerProvider>
}`,...I.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    src: highresImgSrc,
    quality: 20,
    // @ts-expect-error no undefined in array
    sizes: ['100vh', undefined, '60vh', '40vh']
  },
  render: args => <ImageServerProvider srcUrlMapper={srcUrlMapper}>
            <div style={{
      width: '100%',
      overflow: 'auto'
    }}>
                <div className={stack({
        gap: '5'
      })}>
                    {sizeOptions.map(width => <div className={stack({
          gap: '1'
        })} key={width as string}>
                            <Text>
                                Quality: <Text strong>{args.quality}</Text>
                            </Text>
                            <Text>
                                Width:{' '}
                                <Text strong>
                                    {width}: {calcWidth(width)}px
                                </Text>
                            </Text>
                            <Image {...args} width={\`\${calcWidth(width)}\`} imageWidth={width} />
                        </div>)}
                </div>
            </div>
        </ImageServerProvider>
}`,...W.parameters?.docs?.source}}};const X=["Standard","WithImageServerUnoptimised","WithImageServer","WithResponsiveImageWidth","WithResponsiveSizes","WithImageServerQualities","WithImageServerResizing"];export{f as Standard,y as WithImageServer,I as WithImageServerQualities,W as WithImageServerResizing,w as WithImageServerUnoptimised,b as WithResponsiveImageWidth,S as WithResponsiveSizes,X as __namedExportsOrder,J as default};
