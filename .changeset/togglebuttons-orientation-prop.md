---
'@autoguru/overdrive': minor
---

feat(ToggleButtons): honour the `orientation` prop

`orientation` was declared, typed and forwarded to react-aria, but it was
documented `(_Not in use_)` and never reached the CSS. Layout was decided
entirely by a container query hardcoded to 640px, whose base was a stacked
single column. Setting `orientation="horizontal"` therefore did nothing, and a
group narrower than 640px always stacked.

`orientation` is now `'auto' | 'horizontal' | 'vertical'`, defaulting to
`'auto'`:

- `auto` is exactly the previous behaviour - a group that is not `iconOnly`
  stacks once its own container is narrower than 640px.
- `horizontal` and `vertical` are honoured at every container width, in the
  rendered layout as well as in `aria-orientation` and the arrow-key axis.

It is now a recipe variant plus a `data-orientation` attribute on the group, so
CSS decides the layout and JavaScript only resolves the accessibility axis. Two
adjacent defects are fixed with it: the compact bound was `max-width: 640px`
against a `min-width: 640px` row rule, so both matched at exactly 640px while
the JS used a strict `< 640`; and the component JSDoc described the breakpoint
as a tablet viewport width, when it is neither tablet (768px) nor a viewport
query.

`ToggleButton` also picks up the standard component attributes it was missing:
`data-od-component="toggle-button"`, a `testId` prop emitted as `data-testid`,
and an exported `ToggleButtonProps` type alongside `ToggleButtonsProps` in the
barrels. Its inherited react-aria props are unchanged - nothing was redeclared
or narrowed.

Internally, react-aria's group ref now points at the element that actually
carries `groupProps` rather than the outer container. The container element is
still what `useContainerWidth` measures and still what a forwarded ref resolves
to, so `data-od-component` and ref forwarding are unaffected.

Additive and opt-in - the `auto` default reproduces current rendering, so no
consumer changes. Downstream, `fleet-booking-tickets-edit` can drop the
`globalStyle` rules in `onChargeLineControl.css.ts` that reach into this
component's internal grid to force a horizontal layout.
