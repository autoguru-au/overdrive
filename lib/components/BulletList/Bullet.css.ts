import { style, styleVariants } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../themes/theme.css';

export const root = styleVariants({
	default: {
		display: 'grid',
		gridTemplateColumns: 'min-content 1fr',
		gridGap: vars.space['4'],
		marginBottom: vars.space['2'],

		':last-of-type': {
			marginBottom: 0,
		},

		'::before': {
			boxSizing: 'content-box',
			display: 'block',
			alignSelf: 'flex-start',
			width: vars.space['2'],
			height: vars.space['2'],
			marginTop: `calc((1.6em - ${vars.space['2']}) / 2)`,
			content: "' '",
			backgroundColor: vars.typography.colour.dark,
		},
	},
	circle: {
		'::before': {
			borderRadius: '50%',
		},
	},
	disc: {
		'::before': {
			border: `2px solid ${vars.typography.colour.dark}`,
			borderRadius: '50%',
			backgroundColor: 'transparent',
		},
	},
	square: {
		'::before': {
			border: `2px solid ${vars.typography.colour.dark}`,
			backgroundColor: 'transparent',
		},
	},
});

export const noDot = style({
	'::before': {
		visibility: 'hidden',
	},
});
