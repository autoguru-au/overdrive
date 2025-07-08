import { style } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../themes/theme.css';

export const root = style({
	'::-webkit-scrollbar': {
		backgroundColor: 'transparent',
		width: 6,
	},
	'::-webkit-scrollbar-corner': {
		background: 'transparent',
	},
	'::-webkit-scrollbar-thumb': {
		backgroundColor: vars.colours.gamut.gray300,
		overflow: 'hidden',
	},
	'::-webkit-scrollbar-track': {
		position: 'absolute',
		border: `1px solid ${vars.colours.gamut.gray200}`,
		backgroundColor: vars.colours.gamut.gray100,
	},
	'::-webkit-scrollbar-button': {
		display: 'none',
	},
	selectors: {
		['&::-webkit-scrollbar-track:hover']: {
			backgroundColor: vars.colours.gamut.gray300,
		},
		['&::-webkit-scrollbar-thumb:hover']: {
			border: `1px solid ${vars.colours.gamut.gray400}`,
			backgroundColor: vars.colours.gamut.gray400,
		},
	},
});

export const rounded = style({
	'::-webkit-scrollbar-thumb': {
		borderRadius: vars.border.radius['sm'],
	},
	'::-webkit-scrollbar-track': {
		borderRadius: `0 ${vars.border.radius['sm']} ${vars.border.radius['sm']} 0`,
	},
});
