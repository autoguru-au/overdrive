import { styleVariants } from '@vanilla-extract/css';
import { vars } from '../../themes/base/vars.css';

export const circle = styleVariants({
	default: {
		transition: `border-color 0.2s ${vars.animation.easing.decelerate} 0s`,
	},
	outer: {
		top: vars.space['3'],
		left: vars.space['3'],
		width: vars.space['4'],
		height: vars.space['4'],
	},
	inner: {
		top: `calc(${vars.space['3']} + (${vars.space['4']} - ${vars.space['2']}) * 0.5)`,
		left: `calc(${vars.space['3']} + (${vars.space['4']} - ${vars.space['2']}) * 0.5)`,
		width: vars.space['2'],
		height: vars.space['2'],
	},
	selectedInner: {
		borderWidth: `calc(${vars.space['2']} / 2)`,
	},
	selected: {
		borderColor: vars.typography.colour.primary,
	},
});
