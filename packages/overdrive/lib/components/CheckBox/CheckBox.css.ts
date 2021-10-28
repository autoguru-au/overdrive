import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../../themes/base/vars.css';

export const icon = style({
	zIndex: 1,
	top: `calc(50% - 0.5*(${vars.space['4']}))`,
	left: `calc(50% - 0.5*(${vars.space['4']}))`,
	width: vars.space['4'],
	height: vars.space['4'],
});

export const base = styleVariants({
	default: {
		zIndex: 0,
		borderRadius: vars.border.radius['min'],
		top: vars.space['3'],
		left: vars.space['3'],
		width: vars.space['4'],
		height: vars.space['4'],
		transition: `border-color 0.2s ${vars.animation.easing.decelerate} 0s, background-color 0.2s ${vars.animation.easing.decelerate} 0s`,
	},

	selected: {
		borderColor: vars.colours.intent.primary.background.standard,
		backgroundColor: vars.colours.intent.primary.background.standard,
	},
});
