import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { focusOutlineStyle } from '../../styles/focusOutline.css';
import {
	sprinklesInteraction,
	sprinklesResponsive,
} from '../../styles/sprinkles.css';
import { tokens } from '../../themes/base/tokens';

const hideWebkitAppearance = style({
	selectors: {
		'&::-webkit-search-cancel-button, &::-webkit-search-decoration': {
			appearance: 'none',
		},
	},
});

const placeholder = style({
	selectors: {
		'&::placeholder': {
			color: tokens.colours.gamut.gray400,
		},
	},
});

export const styledSearchBar = recipe({
	base: [
		{
			alignItems: 'center',
			borderRadius: tokens.border.radius[3],
			borderStyle: 'solid',
			borderWidth: tokens.border.width[2],
			color: tokens.colours.gamut.gray400,
			display: 'flex',
			gap: tokens.space[2],
			padding: `0 ${tokens.space[4]}`,
		},
		sprinklesInteraction({
			background: { initial: 'white', hover: 'gray200', focus: 'white' },
			borderColor: { initial: 'gray', hover: 'light', focus: 'dark' },
			color: { focus: 'gray900' },
			cursor: { hover: 'text' },
		}),
		focusOutlineStyle,
	],
	variants: {
		// disabled: {
		// 	true: odStyle({
		// 		color: 'gray500',
		// 		cursor: 'not-allowed',
		// 	}),
		// },
	},
});

export const styledInput = recipe({
	base: [
		{
			background: 'transparent',
			borderWidth: 0,
			fontSize: tokens.typography.size[8].fontSize,
			height: '72px',
			outlineStyle: 'none',
			textAlign: 'center',
			width: '100%',
		},
		hideWebkitAppearance,
		placeholder,
	],
});

export const styledClearButton = recipe({
	base: [
		{
			alignItems: 'center',
			background: 'transparent',
			borderStyle: 'none',
			cursor: 'pointer',
			display: 'flex',
			justifyContent: 'center',
			padding: 0,
			position: 'relative',
		},
		sprinklesResponsive({
			size: '6',
		}),
	],
});

export const fieldWrapper = style({
	display: 'flex',
	flexGrow: 1,
	alignItems: 'center',
});
