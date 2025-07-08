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




export const fieldWrapper = style({
	display: 'flex',
	flexGrow: 1,
	alignItems: 'center',
});
