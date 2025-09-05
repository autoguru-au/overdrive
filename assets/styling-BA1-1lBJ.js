import{j as e,M as i}from"./blocks-BuPPWlpa.js";import{useMDXComponents as d}from"./index-Cw9RxQpf.js";import"./preload-helper-D9Z9MdNV.js";import"./iframe-PgZJ2afo.js";import"./index-DI0fRIM3.js";import"./index-C7Mw8gWO.js";function r(s){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Styling",tags:["new"]}),`
`,e.jsx(n.h1,{id:"styling",children:"Styling"}),`
`,e.jsxs(n.p,{children:[`This document provides guidelines for using the custom styling functions
available in Overdrive. These functions are built on vanilla-extract `,e.jsx(n.code,{children:"sprinkles"}),`
and provide type-safe, efficient build-time styling.`]}),`
`,e.jsxs(n.p,{children:[`These utilities are intended for scenarios where HTML elements are being styled
directly in JSX, rather than using our `,e.jsx(n.code,{children:"<Box>"}),", ",e.jsx(n.code,{children:"<Text>"})," or other primitives."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#styling-functions",children:"Styling Functions"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#types",children:"Types"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#style-props",children:"Style Props"})}),`
`]}),`
`,e.jsx(n.h3,{id:"transition",children:"Transition"}),`
`,e.jsxs(n.p,{children:["The new styling functions replace the older ",e.jsx(n.code,{children:"useBoxStyles"})," and ",e.jsx(n.code,{children:"useTextStyles"}),`
hooks. For a smooth transition they remain aliased:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"useBoxStyles"})," = ",e.jsx(n.code,{children:"elementStyles"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"useTextStyles"})," = ",e.jsx(n.code,{children:"textStyles"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"styling-functions",children:"Styling Functions"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#css",children:"css"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#elementstyles",children:"elementStyles"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#typography",children:"typography"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#textstyles",children:"textStyles"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#resetstyles",children:"resetStyles"})}),`
`]}),`
`,e.jsx(n.h3,{id:"css",children:e.jsx(n.code,{children:"css"})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"css"}),` function is the most fundamental of the styling utilities, generated
by "sprinkles". It provides access to the full set of atomic and responsive
style props. Both responsive arrays and object notations are supported for most
style properties. Any properties which are not responsive can be reconfigured
almost instantly.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When to use it:"}),` Anywhere, any time, to apply sprinkles utility classes
directly to an element. It is lightweight and efficient.`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Example:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { css } from '@autoguru/overdrive';

const MyComponent = ({ children }) => (
  <LocalComponent>
    <div
      className={css({
        // responsive array notation (padding shorthand)
        p: ['2', '4', '6', '8'],
        // responsive object notation (marginX shorthand)
        mx: { mobile: '3', tablet: '5', desktop: '8' },
        bg: 'soft',
        fg: 'info',
        borderColor: 'neutral',
        borderRadius: 'sm',
      })}
    >
      {children}
    </div>
  </LocalComponent>
);
`})}),`
`,e.jsx(n.h3,{id:"elementstyles",children:e.jsx(n.code,{children:"elementStyles"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"elementStyles"}),` is a comprehensive styling function that combines baseline
element reset styles with all style props. This styling logic underpins the
`,e.jsx(n.code,{children:"<Box>"})," component."]}),`
`,e.jsxs(n.p,{children:["Replaces the ",e.jsx(n.code,{children:"useBoxStyles"})," hook."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When to use it:"}),` When you need to apply style props (sprinkles) as well as
element reset styles.`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Example:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { elementStyles } from '@autoguru/overdrive';

const MyCard = ({ children, className }) => {
  return (
    <div
      className={elementStyles({
        // \`as\` prop defaults to \`div\`
        // as: 'div',
        className,
        p: '4',
        borderRadius: '2',
        backgroundColor: 'white',
        borderWidth: '1',
        borderColor: 'neutral',
        boxShadow: '1',
      })}
    >
      {children}
    </div>
  );
};
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"typography",children:e.jsx(n.code,{children:"typography"})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"typography"})," function is a more granular version of ",e.jsx(n.code,{children:"textStyles"}),`. It
provides only the typography-specific style props from `,e.jsx(n.code,{children:"vanilla-extract"}),`
`,e.jsx(n.em,{children:"without"})," the element reset styles."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When to use it:"}),` When you need to apply only typographic styles and want to
manage element resets yourself, or when no reset is needed.`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Example:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { typography } from '@autoguru/overdrive';

const SimpleText = ({ children }) => {
  return (
    <span className={typography({ size: '4', weight: 'semibold' })}>
      {children}
    </span>
  );
};
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"textstyles",children:e.jsx(n.code,{children:"textStyles"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"textStyles"}),` is a specialized function for typography. It combines element reset
styles with a subset of style props suitable for text elements like labels,
paragraphs, and headings. It's the foundation for our `,e.jsx(n.code,{children:"<Text>"})," and ",e.jsx(n.code,{children:"<Heading>"}),`
components.`]}),`
`,e.jsxs(n.p,{children:["Replaces ",e.jsx(n.code,{children:"useTextStyles"})," hook."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When to use it:"})," When you need to style text-based HTML elements."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Example:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { textStyles } from '@autoguru/overdrive';

const MyLabel = ({ children, className }) => {
  return (
    <label
      className={textStyles({
        as: 'label',
        className,
        size: '5',
        weight: 'semibold',
        px: '2',
      })}
    >
      {children}
    </label>
  );
};
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"resetstyles",children:e.jsx(n.code,{children:"resetStyles"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"resetStyles"}),` provides baseline reset styles for a given HTML element (e.g.,
'div', 'button', 'a').`]}),`
`,e.jsx(n.h2,{id:"types",children:"Types"}),`
`,e.jsx(n.p,{children:"To ensure type safety, we provide several utility types for props."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"ElementStylesProps"})}),`: The complete set of props accepted by the
`,e.jsx(n.code,{children:"elementStyles"})," function. It extends ",e.jsx(n.code,{children:"StyleProps"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"TextStylesProps"})}),": The set of props accepted by the ",e.jsx(n.code,{children:"textStyles"})," function."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"StyleProps"})}),": Contains all possible style props available from sprinkles."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"LegacyStyleProps"})}),": For style props that use the ",e.jsx(n.code,{children:"colour"}),` spelling for
backward compatibility.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"LegacyTextColours"})}),": A type for legacy text colour names."]}),`
`]}),`
`,e.jsx(n.p,{children:`By using these types, you can ensure that you're only passing valid style
properties to the functions, leveraging TypeScript's static analysis to catch
errors early.`}),`
`,e.jsx(n.h2,{id:"style-props",children:"Style Props"}),`
`,e.jsxs(n.p,{children:[`The following style props are available through the "sprinkles" and can be used
with `,e.jsx(n.code,{children:"css"})," and ",e.jsx(n.code,{children:"elementStyles"}),`. A subset of props are available with
`,e.jsx(n.code,{children:"textStyles"})," and ",e.jsx(n.code,{children:"typography"})," functions."]}),`
`,e.jsxs(n.p,{children:[`Many props support responsive values using array notation
`,e.jsx(n.code,{children:"['mobile', 'tablet', 'desktop']"}),` or object notation
`,e.jsx(n.code,{children:"{ mobile: 'value', tablet: 'value', desktop: 'value' }"}),`. If a particular prop
needs to be converted to responsive, please raise a GitHub issue.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Note"}),`: for props that are numerical, it is advised to use a string value such
as `,e.jsx(n.code,{children:"'0'"})," so that it is typesafe."]}),`
`,e.jsx(n.h3,{id:"spacing",children:"Spacing"}),`
`,e.jsxs(n.p,{children:["Space tokens: (",e.jsx(n.code,{children:'"0"'}),", ",e.jsx(n.code,{children:'"1"'}),", ",e.jsx(n.code,{children:'"2"'}),", ",e.jsx(n.code,{children:'"3"'}),", ",e.jsx(n.code,{children:'"4"'}),", ",e.jsx(n.code,{children:'"5"'}),", ",e.jsx(n.code,{children:'"6"'}),",",e.jsx(n.code,{children:'"7"'}),", ",e.jsx(n.code,{children:'"8"'}),`,
`,e.jsx(n.code,{children:'"9"'}),")"]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Padding:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"padding"})})," / ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"p"})})," - Padding (all sides)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"paddingTop"})})," / ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"pt"})})," - Padding top"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"paddingRight"})})," / ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"pr"})})," - Padding right"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"paddingBottom"})})," / ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"pb"})})," - Padding bottom"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"paddingLeft"})})," / ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"pl"})})," - Padding left"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"paddingX"})})," / ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"px"})})," - Padding left + right"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"paddingY"})})," / ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"py"})})," - Padding top + bottom"]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Margin:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"margin"})})," / ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"m"})})," - Margin (all sides)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"marginTop"})})," / ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"mt"})})," - Margin top"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"marginRight"})})," / ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"mr"})})," - Margin right"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"marginBottom"})})," / ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"mb"})})," - Margin bottom"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"marginLeft"})})," / ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"ml"})})," - Margin left"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"marginX"})})," / ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"mx"})})," - Margin left + right"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"marginY"})})," / ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"my"})})," - Margin top + bottom"]}),`
`]}),`
`,e.jsx(n.h3,{id:"layoutpositioning",children:"Layout/Positioning"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"display"})})," - display property (",e.jsx(n.code,{children:"none"}),", ",e.jsx(n.code,{children:"block"}),", ",e.jsx(n.code,{children:"contents"}),", ",e.jsx(n.code,{children:"flex"}),", ",e.jsx(n.code,{children:"grid"}),`,
`,e.jsx(n.code,{children:"inline"}),", ",e.jsx(n.code,{children:"inlineBlock"}),", ",e.jsx(n.code,{children:"inlineFlex"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"position"})})," - position property (",e.jsx(n.code,{children:"static"}),", ",e.jsx(n.code,{children:"relative"}),", ",e.jsx(n.code,{children:"absolute"}),", ",e.jsx(n.code,{children:"fixed"}),`,
`,e.jsx(n.code,{children:"sticky"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"overflow"})})," - overflow property (",e.jsx(n.code,{children:"auto"}),", ",e.jsx(n.code,{children:"hidden"}),", ",e.jsx(n.code,{children:"visible"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"overflowX"})})," - Coverflow-x property (",e.jsx(n.code,{children:"auto"}),", ",e.jsx(n.code,{children:"scroll"}),", ",e.jsx(n.code,{children:"hidden"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"overflowY"})})," - overflow-y property (",e.jsx(n.code,{children:"auto"}),", ",e.jsx(n.code,{children:"scroll"}),", ",e.jsx(n.code,{children:"hidden"}),")"]}),`
`]}),`
`,e.jsx(n.h3,{id:"flexbox--grid",children:"Flexbox & Grid"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"flexDirection"})})," - flex-direction (",e.jsx(n.code,{children:"row"}),", ",e.jsx(n.code,{children:"column"}),", ",e.jsx(n.code,{children:"row-reverse"}),`,
`,e.jsx(n.code,{children:"column-reverse"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"flexWrap"})})," - flex-wrap (",e.jsx(n.code,{children:"nowrap"}),", ",e.jsx(n.code,{children:"wrap"}),", ",e.jsx(n.code,{children:"wrap-reverse"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"flexGrow"})})," - flex-grow (",e.jsx(n.code,{children:'"0"'}),", ",e.jsx(n.code,{children:'"1"'}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"flexShrink"})})," - flex-shrink (",e.jsx(n.code,{children:'"0"'}),", ",e.jsx(n.code,{children:'"1"'}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"placeItems"})})," - Shorthand for ",e.jsx(n.code,{children:"justifyContent"})," and ",e.jsx(n.code,{children:"alignItems"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"alignItems"})})," - align-items (",e.jsx(n.code,{children:"start"}),", ",e.jsx(n.code,{children:"center"}),", ",e.jsx(n.code,{children:"end"}),", ",e.jsx(n.code,{children:"stretch"}),`,
`,e.jsx(n.code,{children:"baseline"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"alignSelf"})})," - align-self (",e.jsx(n.code,{children:"start"}),", ",e.jsx(n.code,{children:"center"}),", ",e.jsx(n.code,{children:"end"}),", ",e.jsx(n.code,{children:"stretch"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"alignContent"})})," - align-content (includes ",e.jsx(n.code,{children:"space-between"}),", ",e.jsx(n.code,{children:"space-around"}),`,
`,e.jsx(n.code,{children:"space-evenly"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"justifyContent"})})," - justify-content (",e.jsx(n.code,{children:"start"}),", ",e.jsx(n.code,{children:"center"}),", ",e.jsx(n.code,{children:"end"}),`,
`,e.jsx(n.code,{children:"space-between"}),", ",e.jsx(n.code,{children:"space-around"}),", ",e.jsx(n.code,{children:"space-evenly"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"order"})})," - order (",e.jsx(n.code,{children:'"0"'}),", ",e.jsx(n.code,{children:'"1"'}),", ",e.jsx(n.code,{children:'"2"'}),", ",e.jsx(n.code,{children:'"3"'}),", ",e.jsx(n.code,{children:'"4"'}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"gap"})})," - gap property for flex/grid layouts (space tokens)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"columnGap"})})," - column-gap property"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"rowGap"})})," - row-gap property"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"gridAutoColumns"})})," - grid-auto-columns (",e.jsx(n.code,{children:"auto"}),", ",e.jsx(n.code,{children:"1fr"}),", ",e.jsx(n.code,{children:"min-content"}),`,
`,e.jsx(n.code,{children:"max-content"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"gridAutoRows"})})," - grid-auto-rows (",e.jsx(n.code,{children:"auto"}),", ",e.jsx(n.code,{children:"1fr"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"gridAutoFlow"})})," - grid-auto-flow (",e.jsx(n.code,{children:"row"}),", ",e.jsx(n.code,{children:"column"}),", ",e.jsx(n.code,{children:"row dense"}),`,
`,e.jsx(n.code,{children:"column dense"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"gridColumns"})})," - grid-template-columns (",e.jsx(n.code,{children:'"1"'}),", ",e.jsx(n.code,{children:"auto"}),")"]}),`
`]}),`
`,e.jsx(n.h3,{id:"sizing",children:"Sizing"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"size"})})," - Shorthand for ",e.jsx(n.code,{children:"width"})," and ",e.jsx(n.code,{children:"height"})," (space tokens)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"width"})})," - (space tokens, ",e.jsx(n.code,{children:"fit-content"}),", ",e.jsx(n.code,{children:"max-content"}),", ",e.jsx(n.code,{children:"min-content"}),`,
`,e.jsx(n.code,{children:"full"}),", ",e.jsx(n.code,{children:"auto"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"height"})})," - (space tokens, ",e.jsx(n.code,{children:"fit-content"}),", ",e.jsx(n.code,{children:"max-content"}),", ",e.jsx(n.code,{children:"min-content"}),`,
`,e.jsx(n.code,{children:"full"}),", ",e.jsx(n.code,{children:"auto"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"minWidth"})})," - min-width property (",e.jsx(n.code,{children:"auto"}),", ",e.jsx(n.code,{children:"fit-content"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"maxWidth"})})," - max-width property (",e.jsx(n.code,{children:"small"}),", ",e.jsx(n.code,{children:"medium"}),", ",e.jsx(n.code,{children:"large"}),`,
`,e.jsx(n.code,{children:"fit-content"}),", ",e.jsx(n.code,{children:"max-content"}),")"]}),`
`]}),`
`,e.jsx(n.h3,{id:"typography-1",children:"Typography"}),`
`,e.jsxs(n.p,{children:["Size tokens: (",e.jsx(n.code,{children:'"0"'}),", ",e.jsx(n.code,{children:'"1"'}),", ",e.jsx(n.code,{children:'"2"'}),", ",e.jsx(n.code,{children:'"3"'}),", ",e.jsx(n.code,{children:'"4"'}),", ",e.jsx(n.code,{children:'"5"'}),", ",e.jsx(n.code,{children:'"6"'}),",",e.jsx(n.code,{children:'"7"'}),", ",e.jsx(n.code,{children:'"8"'}),`,
`,e.jsx(n.code,{children:'"9"'}),")"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"text"})})," - Shorthand for ",e.jsx(n.code,{children:"fontSize"})," and ",e.jsx(n.code,{children:"lineHeight"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"fontSize"})})," - Font size using design tokens"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"fontWeight"})})," - Font weight using design tokens (",e.jsx(n.code,{children:"normal"}),", ",e.jsx(n.code,{children:"semibold"}),`,
`,e.jsx(n.code,{children:"bold"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"lineHeight"})})," - Line height using design tokens"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"textAlign"})})," - Text alignment (",e.jsx(n.code,{children:"left"}),", ",e.jsx(n.code,{children:"center"}),", ",e.jsx(n.code,{children:"right"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"textTransform"})})," - Text transform (",e.jsx(n.code,{children:"capitalize"}),", ",e.jsx(n.code,{children:"lowercase"}),", ",e.jsx(n.code,{children:"uppercase"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"textWrap"})})," - Text wrapping (",e.jsx(n.code,{children:"balance"}),", ",e.jsx(n.code,{children:"pretty"}),", ",e.jsx(n.code,{children:"stable"}),", ",e.jsx(n.code,{children:"nowrap"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"wordBreak"})})," - Word breaking (",e.jsx(n.code,{children:"break-all"}),", ",e.jsx(n.code,{children:"break-word"}),", ",e.jsx(n.code,{children:"keep-all"}),")"]}),`
`]}),`
`,e.jsx(n.h3,{id:"colors",children:"Colors"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"color"})})," / ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"fg"})})," - Text colour using semantic tokens"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"backgroundColor"})})," / ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"bg"})})," - Background colour using semantic tokens"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"colour"})})," - Text color using legacy intentional colorset"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"backgroundColour"})})," - Background colour using legacy intentional colorset"]}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"borders",children:"Borders"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Border Width:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"borderWidth"})})," - Border width (",e.jsx(n.code,{children:"none"}),", ",e.jsx(n.code,{children:'"1"'}),", ",e.jsx(n.code,{children:'"2"'}),", ",e.jsx(n.code,{children:'"3"'}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"borderWidthX"})})," - Border width left + right"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"borderWidthY"})})," - Border width top + bottom"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"borderTopWidth"})})," / ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"borderRightWidtht"})})," / ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"borderBottomWidth"})}),` /
`,e.jsx(n.strong,{children:e.jsx(n.code,{children:"borderLeftWidth"})})]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Border Color:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"borderColor"})})," - Border colour (all sides)"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"borderColorX"})})," - Border colour left + right"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"borderColorY"})})," - Border colour top + bottom"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"borderTopColor"})})," / ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"borderRightColor"})})," / ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"borderBottomColor"})}),` /
`,e.jsx(n.strong,{children:e.jsx(n.code,{children:"borderLeftColor"})})]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"borderColour"})})," - Border colour using legacy colour mapping (all sides)"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"borderColourX"})})," - Border colour left + right using legacy mapping"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"borderColourY"})})," - Border colour top + bottom using legacy mapping"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"borderTopColour"})})," / ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"borderRightColour"})})," / ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"borderBottomColour"})}),` /
`,e.jsx(n.strong,{children:e.jsx(n.code,{children:"borderLeftColour"})})]}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Border Style:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"borderStyle"})})," - Border style (",e.jsx(n.code,{children:"none"}),", ",e.jsx(n.code,{children:"solid"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"borderTopStyle"})})," / ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"borderRightStyle"})})," / ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"borderBottomStyle"})}),` /
`,e.jsx(n.strong,{children:e.jsx(n.code,{children:"borderLeftStyle"})})]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Border Radius:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"borderRadius"})})," - Border radius using design tokens (",e.jsx(n.code,{children:"none"}),", ",e.jsx(n.code,{children:"min"}),", ",e.jsx(n.code,{children:"sm"}),`,
`,e.jsx(n.code,{children:"md"}),", ",e.jsx(n.code,{children:"lg"}),", ",e.jsx(n.code,{children:"xl"}),", ",e.jsx(n.code,{children:"2xl"}),", ",e.jsx(n.code,{children:'"1"'}),", ",e.jsx(n.code,{children:"pill"}),", ",e.jsx(n.code,{children:"full"}),")"]}),`
`]}),`
`,e.jsx(n.h3,{id:"visual-effects",children:"Visual Effects"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"boxShadow"})})," - Box shadow from elevation tokens (",e.jsx(n.code,{children:"none"}),", ",e.jsx(n.code,{children:'"1"'}),", ",e.jsx(n.code,{children:'"2"'}),`,
`,e.jsx(n.code,{children:'"3"'}),", ",e.jsx(n.code,{children:'"4"'}),", ",e.jsx(n.code,{children:'"5"'}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"opacity"})})," - CSS opacity property (",e.jsx(n.code,{children:'"0"'}),", ",e.jsx(n.code,{children:'"1"'}),")"]}),`
`]}),`
`,e.jsx(n.h3,{id:"interaction",children:"Interaction"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"pointerEvents"})})," - CSS pointer-events property (",e.jsx(n.code,{children:"auto"}),", ",e.jsx(n.code,{children:"none"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"userSelect"})})," - CSS user-select property (",e.jsx(n.code,{children:"auto"}),", ",e.jsx(n.code,{children:"text"}),", ",e.jsx(n.code,{children:"none"}),")"]}),`
`]}),`
`,e.jsx(n.h3,{id:"special",children:"Special"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"useVar"})})," - Custom property to apply the gap css var"]}),`
`]})]})}function j(s={}){const{wrapper:n}={...d(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{j as default};
