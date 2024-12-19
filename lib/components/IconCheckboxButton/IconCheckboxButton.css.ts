import { style } from '@vanilla-extract/css';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

import { tokens } from 'lib/themes/base/tokens';

import { focusOutline } from '../../styles/focusOutline.css';
import { odStyle } from '../../styles/sprinkles.css';

export const styledButton = recipe({
	base: odStyle({
		borderColor: 'gray',
		borderRadius: '2',
		borderStyle: 'solid',
		borderWidth: '1',
		...focusOutline,
	}),
	variants: {
		disabled: {
			true: {},
		},
		hover: {
			true: odStyle({
				background: 'gray200',
				borderColor: 'light',
			}),
		},
		selected: {
			true: odStyle({
				borderColor: 'dark',
				borderWidth: '2',
			}),
		},
	},
});

export type StyledButtonProps = NonNullable<
	RecipeVariants<typeof styledButton>
>;

const checkboxBaseTransition = style({
	transitionProperty: 'background',
	transitionTimingFunction: 'ease-in',
	transitionDuration: '80ms',
});

const checkboxHover = style({
	selectors: {
		'&': {
			background: tokens.colours.gamut.gray200,
			color: 'transparent',
		},
		[`${styledButton.classNames.base}:hover &`]: {
			color: tokens.colours.background.body,
			background: tokens.colours.foreground.body,
			transitionDuration: '15ms',
		},
	},
});

export const styledCheckbox = recipe({
	base: [
		odStyle({
			alignItems: 'center',
			borderColor: 'gray',
			borderRadius: '1',
			borderStyle: 'solid',
			borderWidth: '1',
			display: 'flex',
			flexShrink: 0,
			justifyContent: 'center',
			size: '6',
		}),
		checkboxBaseTransition,
	],
	variants: {
		checked: {
			true: odStyle({
				background: 'gray900',
				borderColor: 'dark',
				color: 'white',
			}),
			false: checkboxHover,
		},
		focused: {
			true: odStyle({ ...focusOutline, outlineWidth: 'default' }),
		},
	},
});

export type StyledCheckboxProps = NonNullable<
	RecipeVariants<typeof styledCheckbox>
>;

export const styledIcon = recipe({
	base: {
		height: '26px',
		width: '26px',
	},
	variants: {
		hidden: {
			true: {
				display: 'none',
			},
		},
	},
});

export type StyledIconProps = NonNullable<RecipeVariants<typeof styledIcon>>;
