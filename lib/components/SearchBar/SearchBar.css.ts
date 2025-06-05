import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { focusOutlineStyle } from '../../styles/focusOutline.css';
import { sprinkles } from '../../styles/sprinkles.css';
import { tokens } from '../../themes/base/tokens';
import { interactionStyle } from '../../utils/css';

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
		'&:disabled::placeholder': {
			color: tokens.colours.gamut.gray300,
		},
	},
});

export const styledSearchBar = recipe({
	base: [
		{
			alignItems: 'center',
			backgroundColor: tokens.colours.background.body,
			borderColor: tokens.border.colours.gray,
			borderRadius: tokens.border.radius['md'],
			borderStyle: 'solid',
			borderWidth: tokens.border.width[2],
			color: tokens.colours.gamut.gray400,
			display: 'flex',
			gap: tokens.space[2],
			padding: `0 ${tokens.space[4]}`,
		},
		interactionStyle({
			focus: {
				borderColor: tokens.border.colours.dark,
				color: tokens.colours.gamut.gray900,
			},
			disabled: {
				borderColor: tokens.border.colours.light,
				cursor: 'not-allowed',
				color: tokens.colours.gamut.gray300,
			},
			hover: {
				cursor: 'text',
			},
			hoverNotFocus: {
				backgroundColor: tokens.border.colours.light,
				borderColor: tokens.border.colours.light,
			},
		}),
		focusOutlineStyle,
	],
});

export const styledInput = recipe({
	base: [
		{
			background: 'transparent',
			borderWidth: 0,
			cursor: 'inherit',
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
		sprinkles({
			size: '6',
		}),
	],
});

export const fieldWrapper = style({
	display: 'flex',
	flexGrow: 1,
	alignItems: 'center',
});
