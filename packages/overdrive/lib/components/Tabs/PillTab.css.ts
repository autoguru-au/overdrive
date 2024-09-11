import { style, styleVariants } from '@vanilla-extract/css';

import { themeContractVars as vars } from '../../themes/theme.css';

const lineBottomHeight = '1px';
const size = '20px';

export const root = {
	default: style({
		padding: `calc(${vars.space['3']} + ${lineBottomHeight}) 0`,
		transition: `color 0.2s ${vars.animation.easing.decelerate} 0s, background-color 0.2s ${vars.animation.easing.decelerate} 0s`,
		borderBottom: `calc(${lineBottomHeight} + ${lineBottomHeight}) solid transparent`,
		flex: 'auto',
		':last-of-type': {
			marginRight: 0,
		},

		':hover': {
			color: vars.colours.intent.primary.background.strong,
		},

		':focus': {
			color: vars.colours.intent.primary.background.strong,
		},
	}),
	active: style({
		color: vars.colours.intent.primary.background.strong,
		borderBottomColor: vars.colours.intent.primary.background.strong,
	}),
};

export const item = style({
	display: 'inline-flex',
	width: 'max-content',
	verticalAlign: 'middle',
});

export const indication = styleVariants({
	default: {
		backgroundColor: vars.colours.background.light,
		minWidth: size,
		height: size,
		lineHeight: size,
		transition: `color 0.2s ${vars.animation.easing.decelerate} 0s, backgroundColor 0.2s ${vars.animation.easing.decelerate} 0s`,
	},
	active: {
		backgroundColor: vars.colours.intent.primary.background.strong,
	},
});
