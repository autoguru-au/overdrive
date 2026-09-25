import{D as p,u as C,e,B as A,S as T}from"./iframe-DUkgvalV.js";import{T as M}from"./Text-DzL8dYyv.js";import{u as j,I as D}from"./Icon-CZlUp0F_.js";import{V as H}from"./VisuallyHidden-BmGo-33P.js";import{I as _}from"./CaretRightIcon-D5IVn3tv.js";import"./preload-helper-PPVm8Dsz.js";import"./resolveResponsiveProps-B8iv0r4y.js";var O=p({defaultClassName:"x41sgn0",variantClassNames:{arrangement:{vertical:"x41sgn1",horizontal:"x41sgn2"}},defaultVariants:{arrangement:"vertical"},compoundVariants:[]}),U=p({defaultClassName:"x41sgn3",variantClassNames:{size:{large:"x41sgn4",small:"x41sgn5"},selected:{true:"x41sgn6",false:"x41sgn7"},onDark:{true:"x41sgn8",false:"x41sgn9"}},defaultVariants:{size:"large",selected:!1,onDark:!1},compoundVariants:[[{selected:!0,onDark:!1},"x41sgna"],[{selected:!0,onDark:!0},"x41sgnb"]]}),F=p({defaultClassName:"x41sgnc",variantClassNames:{size:{large:"x41sgnd",small:"x41sgne"},selected:{true:"x41sgnf",false:"x41sgng"},onDark:{true:"x41sgnh",false:"x41sgni"}},defaultVariants:{size:"large",selected:!1,onDark:!1},compoundVariants:[[{selected:!1,onDark:!0},"x41sgnj"],[{selected:!0,onDark:!0},"x41sgnk"]]}),Y=p({defaultClassName:"x41sgnl",variantClassNames:{layout:{horizontal:"x41sgnm",vertical:"x41sgnn"}},defaultVariants:{layout:"horizontal"},compoundVariants:[]}),K=p({defaultClassName:"x41sgno",variantClassNames:{layout:{horizontal:"x41sgnp",vertical:"x41sgnq"}},defaultVariants:{layout:"horizontal"},compoundVariants:[]}),$="x41sgnr",G=p({defaultClassName:"x41sgns",variantClassNames:{layout:{horizontal:"x41sgnt",vertical:"x41sgnu"},size:{large:"x41sgnv",small:"x41sgnw"}},defaultVariants:{layout:"horizontal",size:"large"},compoundVariants:[[{layout:"horizontal",size:"large"},"x41sgnx"],[{layout:"horizontal",size:"small"},"x41sgny"],[{layout:"vertical",size:"large"},"x41sgnz"],[{layout:"vertical",size:"small"},"x41sgn10"]]}),J="x41sgn11",Q="x41sgn12",W="x41sgn13",X=p({defaultClassName:"x41sgn14",variantClassNames:{selected:{true:"x41sgn15",false:"x41sgn16"},upcoming:{true:"x41sgn17",false:"x41sgn18"},onDark:{true:"x41sgn19",false:"x41sgn1a"}},defaultVariants:{selected:!1,upcoming:!1,onDark:!1},compoundVariants:[[{selected:!1,onDark:!0},"x41sgn1b"],[{selected:!0,onDark:!0},"x41sgn1c"]]}),Z=p({defaultClassName:"x41sgn1d",variantClassNames:{upcoming:{true:"x41sgn1e",false:"x41sgn1f"}},defaultVariants:{upcoming:!1},compoundVariants:[]});const k=({number:a,label:t,hideLabel:r=!1,arrangement:n="vertical",size:l="large",selected:o=!1,onDark:c=!1,className:s,testId:d})=>{const{Component:m,componentProps:z}=C({as:"span",className:[O({arrangement:n}),s],odComponent:"step-progress-item",testId:d}),{Component:N,componentProps:E}=C({as:"span",className:U({size:l,selected:o,onDark:c})});return e.createElement(m,{...z},e.createElement(N,{...E},a),t&&r?e.createElement(H,{as:"span"},t):null,t&&!r?e.createElement("span",{className:F({size:l,selected:o,onDark:c})},t):null)};k.displayName="StepProgressItem";try{k.displayName="StepProgressItem",k.__docgenInfo={description:"A single numbered step: a circle carrying the step's position, with an\noptional label beside or beneath it.\n\n`StepProgressItem` is presentational — it carries no list or current-position\nsemantics of its own. Use `StepProgress` to render a sequence, which supplies\nthe surrounding `nav`/`ol` and marks the current step for assistive\ntechnology. Reach for `StepProgressItem` directly only when you are building a\nlayout `StepProgress` does not cover, and supply those semantics yourself.",displayName:"StepProgressItem",props:{number:{defaultValue:null,description:"The position shown inside the circle, 1-based.",name:"number",required:!0,type:{name:"number"}},label:{defaultValue:null,description:`The step's name. Keep it to one to three words — a long label wraps and
pushes the circles in a sequence out of alignment.`,name:"label",required:!1,type:{name:"ReactNode"}},hideLabel:{defaultValue:{value:"false"},description:`Renders the label to assistive technology only, leaving a bare numbered
circle on screen. The number alone does not say what the step is, so the
label is still required.`,name:"hideLabel",required:!1,type:{name:"boolean"}},arrangement:{defaultValue:{value:"vertical"},description:"`vertical` puts the label under the circle, `horizontal` beside it.",name:"arrangement",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},size:{defaultValue:{value:"large"},description:"Circle diameter and the type scale that follows it — `large` is a 32px\ncircle, `small` a 24px one.",name:"size",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"small"'}]}},selected:{defaultValue:{value:"false"},description:"Marks this step as the user's current position, filling the circle.",name:"selected",required:!1,type:{name:"boolean"}},onDark:{defaultValue:{value:"false"},description:`Restyles the step for a dark panel or hero — labels go white and the
selected circle takes the brand accent.`,name:"onDark",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional class names merged after the component's own styles.",name:"className",required:!1,type:{name:"ClassValue"}},testId:{defaultValue:null,description:"The test ID will be rendered as a data attribute `data-testid` on the element for use with test assertions",name:"testId",required:!1,type:{name:"string"}}}}}catch{}const B=({layout:a,size:t})=>{const{Component:r,componentProps:n}=C({as:"span",className:G({layout:a,size:t}),odComponent:"step-progress-connector","aria-hidden":!0});return e.createElement(r,{...n},a==="horizontal"?e.createElement(D,{icon:_,size:"medium"}):e.createElement("span",{className:J}))};B.displayName="StepProgressConnector";const h=({variant:a="steps",steps:t,activeStep:r,layout:n="horizontal",size:l="large",onDark:o=!1,hideLabels:c=!1,className:s,testId:d,"aria-label":m="Progress"})=>{j(t.length>=2,"StepProgress: a sequence needs at least two steps — use a progress bar for anything shorter.");const{Component:z,componentProps:N}=C({as:"nav",className:s,odComponent:"step-progress",testId:d,"aria-label":m}),{Component:E,componentProps:I}=C({as:"ol",className:a==="stages"?Q:Y({layout:n})});if(a==="stages")return e.createElement(z,{...N},e.createElement(E,{...I},t.map((P,i)=>{const g=i+1===r,q=i+1>r;return e.createElement("li",{className:W,key:i,...g?{"aria-current":"step"}:{}},i>0?e.createElement("span",{"aria-hidden":!0,className:Z({upcoming:q}),"data-od-component":"step-progress-connector"},e.createElement(D,{icon:_,size:"small"})):null,e.createElement("span",{className:X({selected:g,upcoming:q,onDark:o})},P))})));const R=n==="horizontal"?"vertical":"horizontal";return e.createElement(z,{...N},e.createElement(E,{...I},t.map((P,i)=>{const g=i+1===r;return e.createElement("li",{className:K({layout:n}),key:i,...g?{"aria-current":"step"}:{}},e.createElement(k,{arrangement:R,className:n==="horizontal"?$:void 0,hideLabel:c,label:P,number:i+1,onDark:o,selected:g,size:l}),i<t.length-1?e.createElement(B,{layout:n,size:l}):null)})))};h.displayName="StepProgress";try{h.displayName="StepProgress",h.__docgenInfo={description:`Shows the user where they are in a multi-step flow — a checkout, a wizard, a
long form — as a sequence of numbered steps joined by connectors.

Progress is linear and driven entirely by \`activeStep\`; the component holds no
state of its own. In the default \`steps\` variant there is no "completed"
appearance, so steps the user has already been through look the same as the
ones ahead. The \`stages\` variant is a flat text-only row instead, where the
stages ahead of the current one fade.

It renders a \`nav\` landmark around an ordered list, with the current step
marked \`aria-current="step"\`. The steps are not interactive — this reports
position, it does not navigate.`,displayName:"StepProgress",props:{variant:{defaultValue:{value:"steps"},description:"`steps` draws each step as a numbered circle with its label; `stages`\ndraws a flat text-only row — the current stage goes semibold and the\nstages ahead of it fade until the user reaches them. `stages` is always\nhorizontal at one size, so `layout`, `size` and `hideLabels` have no\neffect on it.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"steps"'},{value:'"stages"'}]}},steps:{defaultValue:null,description:`The step names, in order. The array's length is the number of steps —
the design covers three to five.`,name:"steps",required:!0,type:{name:"ReactNode[]"}},activeStep:{defaultValue:null,description:'The user\'s current position in the flow, 1-based. In the `steps` variant,\nsteps behind it are drawn the same as steps ahead of it: the design has\nno "completed" state. In the `stages` variant, stages ahead of it fade.',name:"activeStep",required:!0,type:{name:"number"}},layout:{defaultValue:{value:"horizontal"},description:`\`horizontal\` runs the steps across with their labels beneath — for wide
containers and three to five short steps. Every step takes the same
width, set by the longest label in the sequence, so the circles keep an
even pitch whatever the copy says; the row is still only as wide as it
needs to be. \`vertical\` runs them down with their labels beside — for
narrow columns and longer labels.`,name:"layout",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},size:{defaultValue:{value:"large"},description:"Circle diameter — 32px at `large`, 24px at `small` — and the type scale\nthat follows it, applied to every step. Do not mix sizes within one\nsequence.",name:"size",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"small"'}]}},onDark:{defaultValue:{value:"false"},description:"Restyles the sequence for a dark panel or hero.",name:"onDark",required:!1,type:{name:"boolean"}},hideLabels:{defaultValue:{value:"false"},description:"Drops the labels to assistive technology only, leaving a row of numbered\ncircles — a fallback for widths that cannot fit the labels. Prefer the\n`vertical` layout where there is room for it.",name:"hideLabels",required:!1,type:{name:"boolean"}},"aria-label":{defaultValue:{value:"Progress"},description:`Names the navigation landmark, distinguishing it from any other on the
page.`,name:"aria-label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Additional class names merged after the component's own styles.",name:"className",required:!1,type:{name:"ClassValue"}},testId:{defaultValue:null,description:"The test ID will be rendered as a data attribute `data-testid` on the element for use with test assertions",name:"testId",required:!1,type:{name:"string"}}}}}catch{}const{expect:u}=__STORYBOOK_MODULE_TEST__,ee=`
\`StepProgress\` tells the user where they are in a multi-step flow — a
checkout, a wizard, a long form — as a numbered sequence joined by connectors.

> ⚠️ **It reports position, it does not navigate.** Nothing in it is clickable.

\`activeStep\` is the whole model. The component holds no state: move the user
forward or back by changing that number. In the default \`steps\` variant there
is deliberately **no completed state** — a step the user has already been
through looks exactly like one they have not reached yet. The \`stages\`
variant does show where the user has been: the stages ahead of the current one
fade.

Layout and sizing options are covered in the props table below. Each variant
is documented next to its example. The single circle-and-label primitive,
\`StepProgressItem\`, is exported for layouts this component does not cover —
its props are on the **StepProgressItem** tab of the props table. It is purely
presentational: it carries no list or current-position semantics, so you have
to supply those yourself.
`,te=["Your details","Vehicle","Booking","Payment"],V="inline-radio",ce={title:"Primitives/Indicators/Step Progress",component:h,subcomponents:{StepProgressItem:k},tags:["new"],parameters:{docs:{description:{component:ee}}},args:{steps:te,activeStep:2},argTypes:{variant:{control:V,options:["steps","stages"]},activeStep:{control:{type:"number",min:1,max:5,step:1}},layout:{control:V,options:["horizontal","vertical"]},size:{control:V,options:["large","small"]},className:{table:{disable:!0}},testId:{table:{disable:!0}}}},f={},y={args:{layout:"vertical"}},b={args:{variant:"stages"}},v={render:a=>e.createElement(T,{space:"7"},[3,4,5].map(t=>e.createElement(T,{key:t,space:"3"},e.createElement(M,{size:"3",color:"soft"},`${t} steps`),e.createElement(h,{...a,activeStep:2,"aria-label":`Progress with ${t} steps`,steps:["Your details","Vehicle","Booking","Payment","Confirm"].slice(0,t)}))))},w={args:{hideLabels:!0}},x={args:{onDark:!0},render:a=>e.createElement(A,{backgroundColor:"hard",borderRadius:"md",padding:"6"},e.createElement(h,{...a}))},L=a=>{const{left:t,width:r}=a.getBoundingClientRect();return t+r/2},S={tags:["test","!autodocs"],args:{steps:["Fleet","Account","Payment authorisation","MIC Setup"],activeStep:3},play:async({canvasElement:a,step:t})=>{await document.fonts.ready;const r=a.querySelector("ol"),n=Array.from(a.querySelectorAll('[data-od-component="step-progress-item"]'),s=>s.firstElementChild),l=Array.from(a.querySelectorAll('[data-od-component="step-progress-connector"]')),o=n.map(s=>L(s)),c=o.slice(1).map((s,d)=>s-o[d]);await t("every step sits at the same pitch",async()=>{await u(c).toHaveLength(3);const s=Math.max(...c)-Math.min(...c);await u(s).toBeLessThan(1)}),await t("each caret sits between the pair it joins",async()=>{await u(l).toHaveLength(3),l.forEach((s,d)=>{const m=(o[d]+o[d+1])/2;u(Math.abs(L(s)-m)).toBeLessThan(1)})}),await t("the row is sized by its labels, not its container",async()=>{const s=r?.parentElement;await u(r).not.toBeNull(),await u(s).not.toBeNull(),await u(r.getBoundingClientRect().width).toBeLessThan(s.getBoundingClientRect().width)})}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"{}",...f.parameters?.docs?.source},description:{story:`Each step is a circle carrying its 1-based position, with an optional label.
The current step's circle fills, its number goes bold and its label goes
semibold. Connectors — a caret in horizontal layout, a short rule in
vertical — are drawn between steps, never before the first or after the
last, and are hidden from assistive technology.`,...f.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'vertical'
  }
}`,...y.parameters?.docs?.source},description:{story:`Steps run down with their labels beside the circles. Horizontal is the
tighter layout, but it needs labels of one to three words — when they no
longer fit, switch to \`vertical\` rather than letting them wrap, which
pushes the circles out of alignment.`,...y.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'stages'
  }
}`,...b.parameters?.docs?.source},description:{story:"The flat, text-only row from the design's `Stages` set — no circles, carets\nbetween the names. Unlike the default variant, it does show where the user\nhas been: past stages sit at full strength, the current one goes semibold,\nand upcoming stages fade along with the caret leading into each. Always\nhorizontal at one size — `layout`, `size` and `hideLabels` have no effect.",...b.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <Stack space="7">
            {[3, 4, 5].map(count => <Stack key={count} space="3">
                    <Text size="3" color="soft">
                        {\`\${count} steps\`}
                    </Text>
                    <StepProgress {...args} activeStep={2} aria-label={\`Progress with \${count} steps\`} steps={['Your details', 'Vehicle', 'Booking', 'Payment', 'Confirm'].slice(0, count)} />
                </Stack>)}
        </Stack>
}`,...v.parameters?.docs?.source},description:{story:"The design covers three to five steps.",...v.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    hideLabels: true
  }
}`,...w.parameters?.docs?.source},description:{story:"`hideLabels` is the last resort for a width neither layout survives. The\nlabels stay in the accessibility tree, so a screen reader still hears them —\nbut bare numbers say nothing about the flow, so reach for `vertical` first.",...w.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    onDark: true
  },
  render: args => <Box backgroundColor="hard" borderRadius="md" padding="6">
            <StepProgress {...args} />
        </Box>
}`,...x.parameters?.docs?.source},description:{story:`\`onDark\` restyles the sequence for a dark panel or hero: unselected labels
turn white, the circles keep their white fill but take a white ring, and the
current step's circle and label take the brand accent. It does not paint a
background — the surface is the consumer's job.`,...x.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['test', '!autodocs'],
  args: {
    steps: ['Fleet', 'Account', 'Payment authorisation', 'MIC Setup'],
    activeStep: 3
  },
  play: async ({
    canvasElement,
    step
  }) => {
    await document.fonts.ready;
    const list = canvasElement.querySelector('ol');
    /* eslint-disable unicorn/prefer-spread -- the build target does not
       down-level NodeList iteration, so spreading one fails typecheck. */
    const circles = Array.from(canvasElement.querySelectorAll('[data-od-component="step-progress-item"]'), item => item.firstElementChild as HTMLElement);
    const carets = Array.from(canvasElement.querySelectorAll('[data-od-component="step-progress-connector"]'));
    /* eslint-enable unicorn/prefer-spread */

    const circleCentres = circles.map(circle => horizontalCentre(circle));
    const gaps = circleCentres.slice(1).map((position, index) => position - circleCentres[index]);
    await step('every step sits at the same pitch', async () => {
      await expect(gaps).toHaveLength(3);
      // Sub-pixel layout means these land a fraction apart rather than
      // exactly equal, so compare the spread against a 1px tolerance.
      const spread = Math.max(...gaps) - Math.min(...gaps);
      await expect(spread).toBeLessThan(1);
    });
    await step('each caret sits between the pair it joins', async () => {
      await expect(carets).toHaveLength(3);
      carets.forEach((caret, index) => {
        const midpoint = (circleCentres[index] + circleCentres[index + 1]) / 2;
        expect(Math.abs(horizontalCentre(caret) - midpoint)).toBeLessThan(1);
      });
    });
    await step('the row is sized by its labels, not its container', async () => {
      const parent = list?.parentElement;
      await expect(list).not.toBeNull();
      await expect(parent).not.toBeNull();
      await expect(list!.getBoundingClientRect().width).toBeLessThan(parent!.getBoundingClientRect().width);
    });
  }
}`,...S.parameters?.docs?.source},description:{story:`A regression guard, not a usage example. The labels are deliberately
mismatched — \`Fleet\` against \`Payment authorisation\` — because that is the
case the component used to get wrong: the caret sat in a fixed cell at the
end of each label, so the distance between two circles followed the copy
rather than the layout. Every other story here uses labels of a similar
length, which is why the defect survived review.

It is covered twice over, because neither mechanism alone is enough. The
\`play\` function measures the geometry, which no unit test can reach — jsdom
has neither layout nor stylesheets — but it runs under \`yarn test:a11y\`
(\`--project=storybook\`, real Chromium) and CI runs only \`--project=
unit-tests\`, so it is a local and future check rather than a gate today. The
Chromatic snapshot is the half that does run on every review, and uneven
spacing is exactly the kind of regression a picture catches.`,...S.parameters?.docs?.description}}};const de=["Standard","Vertical","Stages","StepCounts","LabelsHidden","OnDark","EvenSpacing"];export{S as EvenSpacing,w as LabelsHidden,x as OnDark,b as Stages,f as Standard,v as StepCounts,y as Vertical,de as __namedExportsOrder,ce as default};
