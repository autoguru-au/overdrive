import { style, styleVariants } from '@vanilla-extract/css';

import { focusOutline } from '../../../styles/focusOutline.css';
import { overdriveTokens as vars } from '../../../themes/theme.css';

export const root = style({
	cursor: 'pointer',
	':hover': {
		backgroundColor: vars.colours.background.body,
	},
});

export const label = styleVariants({
	disabled: {
		color: vars.typography.colour.dark,
	},
});

export const nativeInput = style({
	cursor: 'inherit',
	left: 0,
	opacity: 0,
	outline: 'none',
	top: 0,
	zIndex: 2,
});

export const checkable = style({
	height: `calc(${vars.space['6']} + (${vars.space[3]} * 2))`,
	marginBottom: `calc(-1*${vars.space['3']})`,
	marginTop: `calc(-1*${vars.space['3']})`,
	width: `calc(${vars.space['6']} + (${vars.space[3]} * 2))`,
});

export const checkableIndicator = style({
	selectors: {
		[`${nativeInput}:focus-visible ~${checkable} &`]: focusOutline,
	},
});

export const disabled = style({
	opacity: 0.6,
	pointerEvents: 'none',
});

// no longer is in use in Overdrive
export const checkableItem = style({
	selectors: {
		[`${nativeInput}:focus:checked ~${checkable} &`]: {
			boxShadow: `0 0 0 2px ${vars.colours.intent.primary.background.strong}`,
		},
		[`${nativeInput}:focus:not(:checked) ~${checkable} >&`]: {
			borderColor: vars.colours.intent.primary.background.strong,
		},
	},
});
