import { style, styleVariants } from '@vanilla-extract/css';

import { focusOutline } from '../../../styles/focusOutline.css';
import { overdriveTokens as vars } from '../../../themes/theme.css';

export const root = style({
	cursor: 'pointer',
	':hover': {
		backgroundColor: vars.color.background.default,
	},
});

export const label = styleVariants({
	/**
	 * The fade lives on the label, not the row. It used to sit on the root, so
	 * the box or ring composited its own disabled fill against the page and
	 * came out ~60% paler than the spec (`#eef0f2` reading as `#f5f6f7`). The
	 * label looks exactly as it did; the control now paints its tokens neat.
	 */
	disabled: {
		color: vars.color.foreground.primary,
		opacity: 0.6,
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
