import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { focusOutlineStyle } from '../../styles/focusOutline.css';
import { sprinkles } from '../../styles/sprinkles.css';
import { overdriveTokens as tokens } from '../../themes/theme.css';
import { interactionStyle } from '../../utils/css';

// === Group styles
export const groupStyle = style({ marginTop: tokens.space['6'] });

export const groupLabelStyle = style({
	fontSize: tokens.typography.size['7'].fontSize,
	fontWeight: tokens.typography.fontWeight.bold,
	lineHeight: tokens.typography.size['7'].lineHeight,
	marginBottom: tokens.space['3'],
});

export const descriptionStyle = style({
	color: tokens.colours.gamut.gray400,
	fontSize: tokens.typography.size[4].fontSize,
	lineHeight: tokens.typography.size[4].lineHeight,
});

// === Option item styles
const buttonBorderRadius = tokens.border.radius['md'];
export const styledOptionItem = recipe({
	base: [
		{
			background: tokens.colours.background.body,
			borderColor: tokens.border.colours.gray,
			borderStyle: 'solid',
			borderWidth: tokens.border.width['1'],
			display: 'flex',
			gap: tokens.space['2'],
			padding: `${tokens.space['3']} ${tokens.space['4']}`,
			width: '100%',
			userSelect: 'none',
		},
		interactionStyle({
			disabled: {
				background: tokens.colours.background.body,
				cursor: 'default',
			},
			hover: {
				background: tokens.colours.gamut.gray200,
				cursor: 'pointer',
			},
			focusVisible: {
				background: tokens.colours.gamut.gray200,
			},
		}),
		{
			selectors: {
				['&+&']: {
					borderTopStyle: 'none',
				},
				['&:first-child']: {
					borderTopLeftRadius: buttonBorderRadius,
					borderTopRightRadius: buttonBorderRadius,
				},
				['&:last-child']: {
					borderBottomLeftRadius: buttonBorderRadius,
					borderBottomRightRadius: buttonBorderRadius,
				},
			},
		},
		focusOutlineStyle,
	],
});

export const itemLabelStyle = style({
	alignSelf: 'center',
	fontSize: tokens.typography.size['3'].fontSize,
	lineHeight: tokens.typography.size['3'].lineHeight,
	width: '100%',
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

export const checkbox = recipe({
	base: [
		{
			background: tokens.colours.background.body,
			borderColor: tokens.border.colours.gray,
			borderStyle: 'solid',
			borderRadius: tokens.border.radius['sm'],
			borderWidth: tokens.border.width['1'],
			color: 'transparent',
		},
		interactionStyle({
			selected: {
				background: tokens.colours.gamut.gray900,
				borderColor: tokens.border.colours.dark,
				color: tokens.colours.background.body,
			},
		}),
		sprinkles({
			alignItems: 'center',
			display: 'flex',
			flexShrink: '0',
			justifyContent: 'center',
			size: '6',
		}),
		checkboxHovered,
		checkboxTransition,
	],
});
