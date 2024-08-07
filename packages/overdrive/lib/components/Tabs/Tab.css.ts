import { style, styleVariants } from '@vanilla-extract/css';

import { themeContractVars as vars } from '../../themes/theme.css';

const lineBottomHeight = '1px';
const size = '20px';

export const root = {
	default: style({
		borderRadius: '16px',
		// padding: `calc(${vars.space['3']} + ${lineBottomHeight}) 0`,
		padding: `0 ${vars.space['4']}`,
		transition: `color 0.2s ${vars.animation.easing.decelerate} 0s, background-color 0.2s ${vars.animation.easing.decelerate} 0s`,
		flex: 'auto',
		':last-of-type': {
			marginRight: 0,
		},
		color: 'black',

		':hover': {
			backgroundColor: 'gray',

			// color: vars.colours.intent.primary.background.strong,
			color: 'black'
		},

		':focus': {
			// color: vars.colours.intent.primary.background.strong,
			// color: 'red'

		},
	}),
	active: style({
		backgroundColor: 'black',
		color: 'white',
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
