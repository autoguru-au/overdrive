import { style } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../themes/theme.css';

export const scrollContainer = style({
	'::-webkit-scrollbar': {
		backgroundColor: 'transparent',
		height: 6,
	},
	'::-webkit-scrollbar-corner': {
		background: 'transparent',
	},
	'::-webkit-scrollbar-thumb': {
		backgroundColor: vars.colours.gamut.gray300,
		borderRadius: vars.border.radius['sm'],
		overflow: 'hidden',
	},
	'::-webkit-scrollbar-track': {
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
		['&:focus-visible']: {
			outline: `2px solid ${vars.colours.intent.primary.background.standard}`,
			outlineOffset: '-2px',
		},
	},
});
