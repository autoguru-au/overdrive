import { style } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../themes/theme.css';

export const root = style({
	scrollbarColor: `${vars.color.gamut.gray['300']} transparent`,
	scrollbarWidth: 'thin',
	'::-webkit-scrollbar': {
		backgroundColor: 'transparent',
		height: 6,
		width: 6,
	},
	'::-webkit-scrollbar-corner': {
		background: 'transparent',
	},
	'::-webkit-scrollbar-track': {
		backgroundColor: 'transparent',
	},
	'::-webkit-scrollbar-thumb': {
		backgroundColor: vars.color.gamut.gray['300'],
		borderRadius: '999px',
	},
	'::-webkit-scrollbar-button': {
		display: 'none',
	},
	selectors: {
		['&::-webkit-scrollbar-thumb:hover']: {
			backgroundColor: vars.color.gamut.gray['400'],
		},
	},
});
