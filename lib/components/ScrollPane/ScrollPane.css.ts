import { style } from '@vanilla-extract/css';

import { themeContractVars as vars } from '../../themes/theme.css';

export const root = style({
	'::-webkit-scrollbar': {
		backgroundColor: 'transparent',
		width: 6,
	},
	'::-webkit-scrollbar-corner': {
		background: 'transparent',
	},
	'::-webkit-scrollbar-thumb': {
		overflow: 'hidden',
		backgroundColor: vars.colours.gamut.gray300,
	},
	'::-webkit-scrollbar-track': {
		position: 'absolute',
		backgroundColor: vars.colours.gamut.gray100,
		border: `1px solid ${vars.colours.gamut.gray200}`,
	},
	'::-webkit-scrollbar-button': {
		display: 'none',
	},
	selectors: {
		['&::-webkit-scrollbar-track:hover']: {
			backgroundColor: vars.colours.gamut.gray300,
		},
		['&::-webkit-scrollbar-thumb:hover']: {
			backgroundColor: vars.colours.gamut.gray400,
			border: `1px solid ${vars.colours.gamut.gray400}`,
		},
	},
});

export const rounded = style({
	'::-webkit-scrollbar-thumb': {
		borderRadius: vars.border.radius['1'],
	},
	'::-webkit-scrollbar-track': {
		borderRadius: `0 ${vars.border.radius['1']} ${vars.border.radius['1']} 0`,
	},
});
