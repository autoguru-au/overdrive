import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { tokens } from 'lib/themes/base/tokens';

import { focusOutline } from '../../styles/focusOutline.css';
import { odStyle, type ODStyle } from '../../styles/sprinkles.css';

const border: ODStyle = {
	borderColor: 'gray',
	borderStyle: 'solid',
	borderWidth: '1',
};

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
		},
		odStyle({
			background: {
				initial: 'white',
				hover: 'gray200',
			},
			...border,
			cursor: { hover: 'pointer' },
			display: 'flex',
			gap: '2',
			outlineColor: 'link',
			outlineStyle: 'solid',
			outlineOffset: 'md',
			outlineWidth: 'none',
			paddingX: '4',
			paddingY: '3',
			width: '100%',
		}),
		optionBorders,
	],
	variants: {
		focused: {
			true: [
				odStyle({
					background: 'gray200',
					outlineWidth: 'default',
				}),
			],
		},
		disabled: {
			true: style({
				opacity: 0.6,
				selectors: {
					['&&']: {
						background: 'none',
						cursor: 'default',
					},
				},
			}),
		},
	},
});

const bgColor = tokens.colours.background.body;
const bgColorHover = tokens.colours.gamut.gray300;

const checkboxHovered = style({
	selectors: {
		[`${styledOptionItem.classNames.base}:hover &`]: {
			color: bgColor,
			background: bgColorHover,
			transitionDuration: '15ms',
		},
	},
});
const checkboxSelected = style({
	background: tokens.colours.gamut.gray900,
	borderColor: tokens.border.colours.dark,
	color: tokens.colours.gamut.white,
});
const checkboxTransition = style({
	transitionProperty: 'background',
	transitionTimingFunction: 'ease-in',
	transitionDuration: '80ms',
});

export const checkbox = recipe({
	base: [
		odStyle({
			alignItems: 'center',
			background: 'white',
			...border,
			borderRadius: '1',
			color: 'transparent',
			display: 'flex',
			flexShrink: 0,
			justifyContent: 'center',
			...focusOutline,
			size: '6',
		}),
		checkboxTransition,
	],
	variants: {
		checked: {
			true: checkboxSelected,
		},
		disabled: {
			true: [],
		},
	},
	compoundVariants: [
		{
			variants: { checked: false, disabled: false },
			style: checkboxHovered,
		},
	],
});

export const groupLabel = recipe({
	base: odStyle({
		font: 'xxl',
		fontWeight: 'bold',
		marginBottom: '6',
	}),
});
