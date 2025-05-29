import { style, styleVariants } from '@vanilla-extract/css';

import { sprinkles } from '../../styles/sprinkles.css';
import { overdriveTokens as vars } from '../../themes/theme.css';

export const disabled = style({ cursor: 'not-allowed' });

export const root = style({
	selectors: {
		[`&:not(${disabled}):focus`]: {
			borderColor: vars.colours.intent.information.background.standard,
		},
	},
});

export const handle = styleVariants({
	default: {
		width: vars.space[6],
		height: vars.space[6],
		transition: `background-color 0.1s ${vars.animation.easing.standard}`,
		selectors: {
			[`${root}:not(${disabled}) &:hover`]: {
				backgroundColor: vars.colours.intent.primary.background.strong,
			},
			[`${root}:not(${disabled}) &:active`]: {
				backgroundColor: vars.colours.intent.primary.background.strong,
			},
		},
	},
	disabled: {
		cursor: 'not-allowed',
	},
});

export const label = [
	sprinkles({
		textAlign: 'center',
		width: 'full',
	}),
	style({
		minWidth: vars.space['6'],
	}),
];
