import { style, styleVariants } from '@vanilla-extract/css';

import { themeContractVars as vars } from '../../themes/theme.css';

const size = '20px';

export const root = {
	default: style({
		padding: `${vars.space['1']} ${vars.space['5']}`,
		':last-of-type': {
			marginRight: 0,
		},

		':hover': {
            padding: `${vars.space['1']} ${vars.space['5']}`,
            borderRadius: '46px',
            transition: `background-color 0.5s ${vars.animation.easing.decelerate}`,
            color: vars.colours.intent.primary.background.strong,
			backgroundColor: vars.colours.intent.primary.background.mild,
		},

		':focus': {
			color: vars.colours.intent.primary.background.strong,
		},
	}),
	active: style({
		padding: `${vars.space['1']} ${vars.space['5']}`,
        borderRadius: '46px',
        color: 'white',
        transition: `background-color 0.2s ${vars.animation.easing.decelerate } 0.2s`,
        backgroundColor: `${vars.colours.intent.primary.background.strong}`,

        ':hover': {
            color: 'white',
			backgroundColor: vars.colours.intent.primary.background.strong,
            cursor: 'default',
		},
	}),
};

export const item = style({
	display: 'inline-flex',
	width: 'max-content',
	verticalAlign: 'middle',
});

export const bubble = styleVariants({
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
