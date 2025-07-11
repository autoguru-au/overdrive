import { style, styleVariants } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../themes/theme.css';

export const root = styleVariants({
	circle: {
		'::before': {
			borderRadius: '50%',
		},
	},
	default: {
		display: 'grid',
		gridGap: vars.space['4'],
		gridTemplateColumns: 'min-content 1fr',
		marginBottom: vars.space['2'],

		':last-of-type': {
			marginBottom: 0,
		},

		'::before': {
			alignSelf: 'flex-start',
			backgroundColor: vars.typography.colour.dark,
			boxSizing: 'content-box',
			content: "' '",
			display: 'block',
			height: vars.space['2'],
			marginTop: `calc((1.6em - ${vars.space['2']}) / 2)`,
			width: vars.space['2'],
		},
	},
	disc: {
		'::before': {
			backgroundColor: 'transparent',
			border: `2px solid ${vars.typography.colour.dark}`,
			borderRadius: '50%',
		},
	},
	square: {
		'::before': {
			backgroundColor: 'transparent',
			border: `2px solid ${vars.typography.colour.dark}`,
		},
	},
});

export const noDot = style({
	'::before': {
		visibility: 'hidden',
	},
});
