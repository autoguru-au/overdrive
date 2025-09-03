// === Common selector patterns for consistent interactive states
// These patterns provide a standardized way to target element states across components and
// include support for both pseudo-classes and data attributes used by libraries like React Aria

export const selectors = {
	active: '&:active',
	checked: '&:checked, &[data-checked], &[data-selected]',
	disabled: '&:disabled, &[data-disabled]',
	focus: '&:focus, &[data-focus], &[data-focused]',
	focusVisible: '&:focus-visible, &[data-focus-visible]',
	selected: '&[data-selected], &[aria-selected="true"]',
	get hover() {
		return `&:hover:not(${this.disabled}), &[data-hover]:not(${this.disabled})`;
	},
	get hoverNotDisabled() {
		return `&:hover:not(${this.disabled}), &[data-hover]:not(${this.disabled})`;
	},
	get hoverNotSelected() {
		return `&:hover:not(${this.disabled}, ${this.selected}), &[data-hover]:not(${this.disabled}, ${this.selected})`;
	},
	get focusVisibleNotSelected() {
		return `&:focus-visible:not(${this.disabled}, ${this.selected}), &[data-focus-visible]:not(${this.disabled}, ${this.selected})`;
	},
} as const;

// 		hoverNotFocus: `&:hover${notFocused}${notDisabled}, &[data-hover]${notFocused}${notDisabled}`,
