import { style } from '@vanilla-extract/css';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

import { tokens } from 'lib/themes/base/tokens';

import { focusOutline } from '../../styles/focusOutline.css';
import { odStyle, type ODStyle } from '../../styles/sprinkles.css';

export const styledOptionTile = recipe({
	base: [
		{
			minHeight: '80px',
			userSelect: 'none',
		},
		odStyle({
			alignItems: 'center',
			borderColor: 'gray',
			borderRadius: '2',
			borderStyle: 'solid',
			borderWidth: '1',
			cursor: { hover: 'pointer' },
			display: 'flex',
			...focusOutline,
			gap: '2',
			padding: '3',
		}),
	],
	variants: {
		disabled: {
			true: {},
		},
		selected: {
			false: odStyle({
				background: { hover: 'gray200' },
				borderColor: { initial: 'gray', hover: 'light' },
			}),
			true: odStyle({
				borderColor: 'dark',
			}),
		},
		size: {},
	},
});

export type StyledOptionTileProps = NonNullable<
	RecipeVariants<typeof styledOptionTile>
>;

export const iconContainer = style({
	height: '26px',
	width: '26px',
});

const checkedBaseTransition = style({
	transitionProperty: 'background',
	transitionTimingFunction: 'ease-in',
	transitionDuration: '80ms',
});

export const styledCheckbox = recipe({
	base: [
		odStyle({
			alignItems: 'center',
			background: {
				initial: 'white',
				hover: 'gray300',
				checked: 'gray900',
			},
			borderColor: { initial: 'gray', checked: 'dark' },
			borderRadius: '1',
			borderStyle: 'solid',
			borderWidth: '1',
			color: { initial: 'transparent', checked: 'white', hover: 'white' },
			display: 'flex',
			flexShrink: 0,
			justifyContent: 'center',
			size: '6',
		}),
		checkedBaseTransition,
	],
	variants: {
		checked: {
			false: { transitionDuration: '15ms' },
		},
		focused: {
			true: odStyle({ ...focusOutline, outlineWidth: 'default' }),
		},
	},
});

export type StyledCheckboxProps = NonNullable<
	RecipeVariants<typeof styledCheckbox>
>;

//--- merge in

const border: ODStyle = {
	borderColor: 'gray',
	borderStyle: 'solid',
	borderWidth: '1',
};

// const focusOutline: ODStyle = {
// 	outlineColor: 'link',
// 	outlineStyle: 'solid',
// 	outlineOffset: 'md',
// 	outlineWidth: { initial: 'none', focusVisible: 'default' },
// };

const buttonBorderRadius = tokens.border.radius['2'];

export const checkboxButton = recipe({
	base: [
		odStyle({
			background: {
				initial: 'white',
				hover: 'gray200',
			},
			...border,
			cursor: { hover: 'pointer' },
			display: 'flex',
			gap: '2',
			paddingX: '4',
			paddingY: '3',
			width: '100%',
		}),
		style({
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
		}),
	],
	variants: {
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

export const checkbox = recipe({
	base: [
		odStyle({
			alignItems: 'center',
			...border,
			borderRadius: '1',
			display: 'flex',
			flexShrink: 0,
			justifyContent: 'center',
			...focusOutline,
			size: '6',
		}),
		style({
			transitionProperty: 'background',
			transitionTimingFunction: 'ease-in',
			transitionDuration: '80ms',
		}),
	],
	variants: {
		checked: {
			true: odStyle({
				background: 'gray900',
				borderColor: 'dark',
				color: 'white',
			}),
			false: [
				style({
					selectors: {
						'&': {
							background: bgColor,
							color: 'transparent',
						},
						[`${checkboxButton.classNames.base}:hover &`]: {
							color: bgColor,
							background: bgColorHover,
							transitionDuration: '15ms',
						},
					},
				}),
			],
		},
		focused: {
			true: odStyle({ ...focusOutline, outlineWidth: 'default' }),
		},
	},
});

export const groupLabel = recipe({
	base: odStyle({
		font: 'xxl',
		fontWeight: 'bold',
		marginBottom: '6',
	}),
});
