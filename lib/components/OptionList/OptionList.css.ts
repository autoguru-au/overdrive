import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { focusOutline } from '../../styles/focusOutline.css';
import { odStyle } from '../../styles/sprinkles.css';
import { tokens } from '../../themes/base/tokens';

// === Group styles
export const styleGroup = odStyle({ marginTop: '6' });

export const styleGroupLabel = odStyle({
	font: 'xxl',
	fontWeight: 'bold',
	marginBottom: '3',
});

export const styleDescription = odStyle({
	color: 'gray400',
	font: 'md',
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
		},
		odStyle({
			background: {
				initial: 'white',
				hover: 'gray200',
				focusVisible: 'gray200',
				disabled: 'white',
			},
			borderColor: 'gray',
			borderStyle: 'solid',
			borderWidth: '1',
			cursor: { hover: 'pointer', disabled: 'default' },
			display: 'flex',
			gap: '2',
			outlineColor: 'link',
			outlineStyle: 'solid',
			outlineOffset: 'md',
			outlineWidth: { initial: 'none', focusVisible: 'default' },
			paddingX: '4',
			paddingY: '3',
			width: '100%',
		}),
		optionBorders,
	],
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
		odStyle({
			alignItems: 'center',
			background: { initial: 'white', checked: 'gray900' },
			borderColor: { initial: 'gray', checked: 'dark' },
			borderStyle: 'solid',
			borderRadius: '1',
			borderWidth: '1',
			color: { initial: 'transparent', checked: 'white' },
			display: 'flex',
			flexShrink: 0,
			justifyContent: 'center',
			...focusOutline,
			size: '6',
		}),
		checkboxTransition,
		checkboxHovered,
	],
});
