import{r as i,j as N,e as t,p as M,S as z}from"./iframe-COJ7wZQX.js";import{T as g}from"./Text-C4nXpCEU.js";import{u as x}from"./useResponsiveValue-Dkoq6zBs.js";import"./useMedia-CEOf-__T.js";import"./resolveResponsiveProps-Dp0dH8aX.js";const k={1:16,2:32,3:48,4:64,5:96,6:128,7:256,8:384,9:640,10:750,11:828,12:1080,13:1200,14:1920,15:2048,16:3840},V={widthMap:k,getWidthValue:e=>k[e],srcUrlMapper:null},R=i.createContext(null),O=()=>i.useContext(R),d=({children:e,srcUrlMapper:a=V.srcUrlMapper,getWidthValue:r=V.getWidthValue,widthMap:s=V.widthMap})=>{const m=i.useCallback(({quality:o,src:f})=>Object.keys(s).map(u=>{const c=r?.(u);return`${a({quality:o,src:f,width:c})} ${c}w`}).join(", "),[s,a,r]);return i.createElement(R.Provider,{value:i.useMemo(()=>({widthMap:s,srcUrlMapper:a,getWidthValue:r,generateSrcSet:m}),[a,s,r,m])},e)};try{d.displayName="ImageServerProvider",d.__docgenInfo={description:"",displayName:"ImageServerProvider",props:{widthMap:{defaultValue:{value:"defaultValue.widthMap"},description:"",name:"widthMap",required:!1,type:{name:"Record<WidthScale, number>"}},srcUrlMapper:{defaultValue:{value:"defaultValue.srcUrlMapper"},description:"",name:"srcUrlMapper",required:!1,type:{name:"(params: UrlParams) => string"}},getWidthValue:{defaultValue:{value:"defaultValue.getWidthValue"},description:"",name:"getWidthValue",required:!1,type:{name:"((width: WidthScale) => number)"}}}}}catch{}const q=({eager:e="false",syncDecoding:a="false",className:r="",src:s,srcSet:m,fallbackComponent:o,...f})=>{const[u,c]=i.useState(!1),E=()=>{c(!0)};return u&&o?o:i.createElement("img",{loading:e?"eager":"lazy",decoding:a?"sync":"async",className:r,srcSet:m,src:s,onError:E,...f})};try{q.displayName="SimpleImage",q.__docgenInfo={description:"",displayName:"SimpleImage",props:{src:{defaultValue:null,description:`The address or URL of the a media resource that is to be considered.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLImageElement/src)`,name:"src",required:!0,type:{name:"string"}},eager:{defaultValue:{value:"false"},description:"If set to true, image lazy loading is disabled.",name:"eager",required:!1,type:{name:"boolean"}},srcSet:{defaultValue:null,description:"Can be manually defined as a normal `srcset` img tag attribute but will be automatically set for\nall available sizes when an `ImageServerProvider` is defined upstream.",name:"srcSet",required:!1,type:{name:"string"}},syncDecoding:{defaultValue:{value:"false"},description:`When set to true image async decoding by the browser is disabled.
Async decoding of the image reduces delay in presenting other content.`,name:"syncDecoding",required:!1,type:{name:"boolean"}},width:{defaultValue:null,description:"Only effective if `ImageServerProvider` is defined upstream.\nWill be set as `width` attribute on the `img` tag",name:"width",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"Will be set as `height` attribute on the `img` tag",name:"height",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},fallbackComponent:{defaultValue:null,description:"",name:"fallbackComponent",required:!1,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>>"}}}}}catch{}const P=({imageWidth:e,sizes:a="100vw",quality:r=70,src:s,...m})=>{N.invariant(r>0&&r<=100,"Image must be a number between 1 and 100.");const o=x(e),f=x(a),{srcUrlMapper:u,getWidthValue:c,generateSrcSet:E}=O(),U=i.useMemo(()=>u({src:s,width:c(o),quality:r}),[s,o,r,u,c]),T=i.useMemo(()=>o?void 0:E({src:s,quality:r}),[s,r]);return i.createElement(q,{sizes:f||void 0,srcSet:T,src:U,...m})};try{P.displayName="ResponsiveImage",P.__docgenInfo={description:"",displayName:"ResponsiveImage",props:{imageWidth:{defaultValue:null,description:"Only effective if `ImageServerProvider` is defined upstream.\nNot to be confused with the `width` of the image tag. `imageWidth` is purely to do with the\nintrinsic size of the image asset coming back from the Image Server and does not change the layout size of the `img` tag\nIf `imageWidth` is provided, it will be exactly used and no automatic `srcSet` will be defined and `sizes` will have no effect.\n`imageWidth` can be a single value e.g. `4` to be used for all screen sizes or an array to be used for responsive values e.g. `[4, ,6, 8]`",name:"imageWidth",required:!0,type:{name:"ResponsiveProp<WidthScale>"}},sizes:{defaultValue:{value:"100vw"},description:"Only effective if `ImageServerProvider` is defined upstream.\nA vw value e.g. `80vw` or an array of vw values `['100vw', ,'50vw', '30vw']` to be used as responsive.\nWhen defined, browser will pick the closest match from srcSet based on viewport width size.\nJust like `imageWidth` sizes has no effect on the `img` tag layout size and is purely to do with the\nintrinsic size of the image asset coming back from the Image Server.\nin `['100vw', ,'50vw', '30vw']` browser will fetch the best image asset to cover\nthe whole width of mobile and tablet devices, 50% of desktop screen width 30% of a large desktop screen width irrespective\nof the size of img tag on the page. So a `100vh` set for a large desktop might fetch a `3840px` wide\nasset even if the image only occupies 10px of the page width.",name:"sizes",required:!1,type:{name:"ResponsiveProp<string>"}},quality:{defaultValue:{value:"70"},description:"Only effective if `ImageServerProvider` is defined upstream.\nA number between 1 and 100 to be used by the image server for the quality of image returned.",name:"quality",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"Will be set as `height` attribute on the `img` tag",name:"height",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"Only effective if `ImageServerProvider` is defined upstream.\nWill be set as `width` attribute on the `img` tag",name:"width",required:!1,type:{name:"string"}},src:{defaultValue:null,description:`The address or URL of the a media resource that is to be considered.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLImageElement/src)`,name:"src",required:!0,type:{name:"string"}},srcSet:{defaultValue:null,description:"Can be manually defined as a normal `srcset` img tag attribute but will be automatically set for\nall available sizes when an `ImageServerProvider` is defined upstream.",name:"srcSet",required:!1,type:{name:"string"}},eager:{defaultValue:null,description:"If set to true, image lazy loading is disabled.",name:"eager",required:!1,type:{name:"boolean"}},syncDecoding:{defaultValue:null,description:`When set to true image async decoding by the browser is disabled.
Async decoding of the image reduces delay in presenting other content.`,name:"syncDecoding",required:!1,type:{name:"boolean"}},fallbackComponent:{defaultValue:null,description:"",name:"fallbackComponent",required:!1,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>>"}}}}}catch{}const n=({unoptimised:e=!1,imageWidth:a,...r})=>O()&&!e?i.createElement(P,{imageWidth:a,...r}):i.createElement(q,{...r});try{n.displayName="Image",n.__docgenInfo={description:"",displayName:"Image",props:{unoptimised:{defaultValue:{value:"false"},description:"If set to true, no size/quality optimisation will be done even when `ImageServerProvider` has been defined upstream.",name:"unoptimised",required:!1,type:{name:"boolean"}},imageWidth:{defaultValue:null,description:"Only effective if `ImageServerProvider` is defined upstream.\nNot to be confused with the `width` of the image tag. `imageWidth` is purely to do with the\nintrinsic size of the image asset coming back from the Image Server and does not change the layout size of the `img` tag\nIf `imageWidth` is provided, it will be exactly used and no automatic `srcSet` will be defined and `sizes` will have no effect.\n`imageWidth` can be a single value e.g. `4` to be used for all screen sizes or an array to be used for responsive values e.g. `[4, ,6, 8]`",name:"imageWidth",required:!0,type:{name:"ResponsiveProp<WidthScale>"}},sizes:{defaultValue:null,description:"Only effective if `ImageServerProvider` is defined upstream.\nA vw value e.g. `80vw` or an array of vw values `['100vw', ,'50vw', '30vw']` to be used as responsive.\nWhen defined, browser will pick the closest match from srcSet based on viewport width size.\nJust like `imageWidth` sizes has no effect on the `img` tag layout size and is purely to do with the\nintrinsic size of the image asset coming back from the Image Server.\nin `['100vw', ,'50vw', '30vw']` browser will fetch the best image asset to cover\nthe whole width of mobile and tablet devices, 50% of desktop screen width 30% of a large desktop screen width irrespective\nof the size of img tag on the page. So a `100vh` set for a large desktop might fetch a `3840px` wide\nasset even if the image only occupies 10px of the page width.",name:"sizes",required:!0,type:{name:"ResponsiveProp<string>"}},quality:{defaultValue:null,description:"Only effective if `ImageServerProvider` is defined upstream.\nA number between 1 and 100 to be used by the image server for the quality of image returned.",name:"quality",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"Will be set as `height` attribute on the `img` tag",name:"height",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"Only effective if `ImageServerProvider` is defined upstream.\nWill be set as `width` attribute on the `img` tag",name:"width",required:!1,type:{name:"string"}},src:{defaultValue:null,description:`The address or URL of the a media resource that is to be considered.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLImageElement/src)`,name:"src",required:!0,type:{name:"string"}},srcSet:{defaultValue:null,description:"Can be manually defined as a normal `srcset` img tag attribute but will be automatically set for\nall available sizes when an `ImageServerProvider` is defined upstream.",name:"srcSet",required:!1,type:{name:"string"}},eager:{defaultValue:null,description:"If set to true, image lazy loading is disabled.",name:"eager",required:!1,type:{name:"boolean"}},syncDecoding:{defaultValue:null,description:`When set to true image async decoding by the browser is disabled.
Async decoding of the image reduces delay in presenting other content.`,name:"syncDecoding",required:!1,type:{name:"boolean"}},fallbackComponent:{defaultValue:null,description:"",name:"fallbackComponent",required:!1,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>>"}}}}}catch{}const _=M()?["8"]:["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16"],$=M()?[70]:[1,20,40,60,80,100],l=e=>e==="full"?"100%":k[e],Q={title:"Primitives/Image",component:n,args:{imageWidth:"8",width:"8",quality:void 0,eager:!1,unoptimised:!1},argTypes:{imageWidth:{options:[..._,"full"],control:{type:"select"}},width:{options:[..._,"full"],control:{type:"select"}},quality:{control:{type:"number",min:1,max:100}},eager:{control:{type:"boolean"}},unoptimised:{control:{type:"boolean"}}}},p="https://cdn.autoguru.com.au/images/autoguru-test-highres-image.jpg",v={args:{src:"https://cdn.autoguru.com.au/images/autoguru-og.jpg"},render:e=>t.createElement("div",{style:{width:"100%",overflow:"auto"}},t.createElement(n,{...e,width:`${l(e.width)}`}))},h=({src:e,width:a,quality:r})=>`https://images.autoguru.com.au/?url=${e}&w=${a}&q=${r}`,w={args:{src:p,unoptimised:!0},render:e=>t.createElement(d,{srcUrlMapper:h},t.createElement("div",{style:{width:"100%",overflow:"auto"}},t.createElement(n,{...e,width:`${l(e.width)}`})))},y={args:{src:p,quality:60,imageWidth:"8",sizes:["100vh",void 0,"60vh","40vh"]},render:e=>t.createElement(d,{srcUrlMapper:h},t.createElement("div",{style:{width:"100%",overflow:"auto"}},t.createElement(n,{...e,width:`${l(e.width)}`})))},b={args:{src:p,width:"full",sizes:["100vw","70vw","50vw","40vw"],imageWidth:["5","8",void 0,"12"]},render:e=>t.createElement(d,{srcUrlMapper:h},t.createElement("div",{style:{width:"100%",overflow:"auto"}},t.createElement(n,{...e,width:`${l(e.width)}`})))},S={args:{src:p,width:"full",sizes:["100vw","70vw","50vw","40vw"]},render:e=>t.createElement(d,{srcUrlMapper:h},t.createElement("div",{style:{width:"100%",overflow:"auto"}},t.createElement(n,{...e,width:`${l(e.width)}`})))},I={args:{src:p,quality:60,imageWidth:"8",sizes:["100vh",void 0,"60vh","40vh"]},render:e=>t.createElement(d,{srcUrlMapper:h},t.createElement("div",{style:{width:"100%",overflow:"auto"}},t.createElement(z,{space:"5"},$.map(a=>t.createElement(z,{key:a,space:"1"},t.createElement(g,null,"Quality: ",t.createElement(g,{strong:!0},a)),t.createElement(n,{key:a,...e,width:`${l(e.width)}`,imageWidth:e.width,quality:a}))))))},W={args:{src:p,quality:20,sizes:["100vh",void 0,"60vh","40vh"]},render:e=>t.createElement(d,{srcUrlMapper:h},t.createElement("div",{style:{width:"100%",overflow:"auto"}},t.createElement(z,{width:"full",space:"5"},_.map(a=>t.createElement(z,{key:a,space:"1"},t.createElement(g,null,"Quality: ",t.createElement(g,{strong:!0},e.quality)),t.createElement(g,null,"Width:"," ",t.createElement(g,{strong:!0},a,": ",l(a),"px")),t.createElement(n,{...e,width:`${l(a)}`,imageWidth:a}))))))};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://cdn.autoguru.com.au/images/autoguru-og.jpg'
  },
  render: args => <div style={{
    width: '100%',
    overflow: 'auto'
  }}>
            <Image {...args} width={\`\${calcWidth(args.width as SizeOption)}\`} />
        </div>
}`,...v.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
                <Stack space="5">
                    {qualityOptions.map(quality => <Stack key={quality} space="1">
                            <Text>
                                Quality: <Text strong>{quality}</Text>
                            </Text>
                            <Image key={quality} {...args} width={\`\${calcWidth(args.width as SizeOption)}\`} imageWidth={args.width as SizeOption} quality={quality} />
                        </Stack>)}
                </Stack>
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
                <Stack width="full" space="5">
                    {sizeOptions.map(width => <Stack key={width as string} space="1">
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
                        </Stack>)}
                </Stack>
            </div>
        </ImageServerProvider>
}`,...W.parameters?.docs?.source}}};const J=["Standard","WithImageServerUnoptimised","WithImageServer","WithResponsiveImageWidth","WithResponsiveSizes","WithImageServerQualities","WithImageServerResizing"];export{v as Standard,y as WithImageServer,I as WithImageServerQualities,W as WithImageServerResizing,w as WithImageServerUnoptimised,b as WithResponsiveImageWidth,S as WithResponsiveSizes,J as __namedExportsOrder,Q as default};
