// === Common selector patterns for consistent interactive states
// These patterns provide a standardized way to target element states across components and
// include support for both pseudo-classes and data attributes used by libraries like React Aria

export const checked = '&:checked, &[data-checked], &[data-selected]';
export const disabled = '&:disabled, &[data-disabled]';
export const focusVisible = '&:focus-visible, &[data-focus-visible]';
export const selected = '&[data-selected], &[aria-selected="true"]';

export const hoverNotDisabled = `&:hover:not(${disabled}), &[data-hover]:not(${disabled})`;
export const hoverNotSelected = `&:hover:not(${disabled}, ${selected}), &[data-hover]:not(${disabled}, ${selected})`;
