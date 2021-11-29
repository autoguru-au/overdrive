import { style, styleVariants } from '@vanilla-extract/css';

import { vars } from '../../../themes/base/vars.css';

export const root = style({
	cursor: 'pointer',
	transition: `background-color 0.2s ${vars.animation.easing.decelerate} 0s`,
	':hover': {
		backgroundColor: vars.colours.background.body,
	},
});

export const label = styleVariants({
	disabled: {
		color: vars.typography.colour.dark,
	},
});

export const nativeInput = styleVariants({
	default: {
		zIndex: 2,
		top: 0,
		left: 0,
		cursor: 'inherit',
		opacity: 0,
	},
	checked: {
		outline: 'none',
	},
});

export const checkable = style({
	width: `calc(${vars.space['4']} + (${vars.space[3]} * 2))`,
	height: `calc(${vars.space['4']} + (${vars.space[3]} * 2))`,

	marginTop: `calc(-1*${vars.space['3']})`,
	marginBottom: `calc(-1*${vars.space['3']})`,
});

export const checkableItem = style({
	selectors: {
		[`${nativeInput.default}:focus:checked ~${checkable} &`]: {
			boxShadow: `0 0 0 2px ${vars.colours.intent.primary.background.strong}`,
		},
		[`${nativeInput.default}:focus:not(:checked) ~${checkable} >&`]: {
			borderColor: vars.colours.intent.primary.background.strong,
		},
	},
});

export const disabled = style({
	opacity: 0.6,
	pointerEvents: 'none',
});
