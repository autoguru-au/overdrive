import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { focusOutlineStyle } from '../../styles/focusOutline.css';
import {
	sprinklesInteraction,
	sprinklesResponsive,
} from '../../styles/sprinkles.css';
import { themeContractVars as tokens } from '../../themes/theme.css';

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
const buttonBorderRadius = tokens.border.radius['2'];
const optionBorders = style({
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
});

export const styledOptionItem = recipe({
	base: [
		{
			userSelect: 'none',
			borderColor: tokens.border.colours.gray,
			borderStyle: 'solid',
			borderWidth: tokens.border.width['1'],
			display: 'flex',
			gap: tokens.space['2'],
			padding: `${tokens.space['3']} ${tokens.space['4']}`,
			width: '100%',
		},
		sprinklesInteraction({
			background: {
				initial: 'white',
				hover: 'gray200',
				focusVisible: 'gray200',
				disabled: 'white',
			},
			cursor: { hover: 'pointer', disabled: 'default' },
		}),
		optionBorders,
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
const checkboxHovered = style({
	selectors: {
		[`${styledOptionItem.classNames.base}:hover &:not([data-checked]):not([data-disabled])`]:
			{
				color: tokens.colours.background.body,
				background: tokens.colours.gamut.gray300,
				transitionDuration: '15ms',
			},
	},
});

const checkboxTransition = style({
	transitionProperty: 'background',
	transitionTimingFunction: 'ease-in',
	transitionDuration: '80ms',
});

export const checkbox = recipe({
	base: [
		{
			borderStyle: 'solid',
			borderRadius: tokens.border.radius['1'],
			borderWidth: tokens.border.width['1'],
		},
		sprinklesInteraction({
			background: { initial: 'white', selected: 'gray900' },
			borderColor: { initial: 'gray', selected: 'dark' },
			color: { initial: 'transparent', selected: 'white' },
		}),
		sprinklesResponsive({
			alignItems: 'center',
			display: 'flex',
			flexShrink: 0,
			justifyContent: 'center',
			size: '6',
		}),
		checkboxTransition,
		checkboxHovered,
	],
});
