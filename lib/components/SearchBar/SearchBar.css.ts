import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { focusOutline } from '../../styles/focusOutline.css';
import { odStyle } from '../../styles/sprinkles.css';
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
		odStyle({
			alignItems: 'center',
			background: { initial: 'white', hover: 'gray200', focus: 'white' },
			borderColor: { initial: 'gray', hover: 'light', focus: 'dark' },
			borderRadius: '3',
			borderStyle: 'solid',
			borderWidth: '2',
			color: { initial: 'gray400', focus: 'gray900' },
			cursor: { hover: 'text' },
			display: 'flex',
			...focusOutline,
			gap: '2',
			outlineStyle: 'none',
			paddingX: '4',
		}),
	],
	variants: {
		disabled: {
			true: odStyle({
				color: 'gray500',
				cursor: 'not-allowed',
			}),
		},
	},
});

export const styledInput = recipe({
	base: [
		odStyle({
			background: 'transparent',
			borderWidth: 'none',
			height: '7',
			fontSize: '2xl',
			outlineStyle: 'none',
			textAlign: 'center',
			width: '100%',
		}),
		{
			height: '72px',
		},
		hideWebkitAppearance,
		placeholder,
	],
});

export const styledClearButton = recipe({
	base: [
		odStyle({
			alignItems: 'center',
			background: 'transparent',
			borderStyle: 'none',
			cursor: 'pointer',
			display: 'flex',
			justifyContent: 'center',
			padding: 'none',
			position: 'relative',
			size: '6',
		}),
	],
});
