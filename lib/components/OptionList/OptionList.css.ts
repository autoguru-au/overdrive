import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { focusOutlineStyle } from '../../styles/focusOutline.css';
import { sprinkles } from '../../styles/sprinkles.css';
import { overdriveTokens as tokens } from '../../themes/theme.css';
import { interactionStyle } from '../../utils/css';

// === Group styles
export const groupStyle = style({ marginTop: tokens.space['6'] });

export const groupLabelStyle = style({
	marginBottom: tokens.space['3'],
	lineHeight: tokens.typography.size['7'].lineHeight,
	fontSize: tokens.typography.size['7'].fontSize,
	fontWeight: tokens.typography.fontWeight.bold,
});

export const descriptionStyle = style({
	lineHeight: tokens.typography.size[4].lineHeight,
	color: tokens.colours.gamut.gray400,
	fontSize: tokens.typography.size[4].fontSize,
});

// === Option item styles
const buttonBorderRadius = tokens.border.radius['md'];

export const itemLabelStyle = style({
	alignSelf: 'center',
	width: '100%',
	lineHeight: tokens.typography.size['3'].lineHeight,
	fontSize: tokens.typography.size['3'].fontSize,
});

// === Checkbox styles
const checkboxTransition = style({
	transitionDuration: '100ms',
	transitionProperty: 'background',
	transitionTimingFunction: 'ease-in',
});

const checkboxHovered = style({
	selectors: {
		[`${styledOptionItem.classNames.base}:hover &:not([data-checked],[data-disabled])`]:
			{
				background: tokens.colours.gamut.gray300,
				color: tokens.colours.background.body,
			},
	},
});

