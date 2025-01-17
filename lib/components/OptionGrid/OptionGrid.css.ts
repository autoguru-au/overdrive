import { style } from '@vanilla-extract/css';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

import { focusOutline } from '../../styles/focusOutline.css';
import { odStyle } from '../../styles/sprinkles.css';
import { tokens } from '../../themes/base/tokens';

export const styledGridContainer = recipe({
	base: odStyle({
		display: { mobile: 'flex', tablet: 'grid' },
		flexDirection: { mobile: 'column' },
		gap: '3',
	}),
	variants: {
		columns: {
			double: { gridTemplateColumns: '1fr 1fr' },
		},
	},
});

export type StyledGridContainerProps = NonNullable<
	RecipeVariants<typeof styledGridContainer>
>;

const pseudoThickBorder = style({
	selectors: {
		'&:after': {
			outlineColor: tokens.colours.gamut.black900,
			outlineStyle: 'solid',
			outlineWidth: tokens.border.width[2],
			borderRadius: 'inherit',
			content: '',
			display: 'block',
			position: 'absolute',
			width: '100%',
			height: '100%',
			left: 0,
			top: 0,
		},
	},
});

export const styledGridItem = recipe({
	base: [
		{
			minHeight: '80px',
			userSelect: 'none',
		},
		odStyle({
			alignItems: 'center',
			background: {
				initial: 'white',
				focusVisible: 'gray200',
				hover: 'gray200',
				selected: 'white',
			},
			borderColor: {
				initial: 'gray',
				focusVisible: 'light',
				hover: 'light',
				selected: 'dark',
			},
			borderRadius: '2',
			borderStyle: 'solid',
			borderWidth: '1',
			cursor: { hover: 'pointer' },
			display: 'flex',
			...focusOutline,
			gap: '2',
			paddingX: '4',
			paddingY: '3',
			position: 'relative',
		}),
	],
	variants: {
		disabled: {
			true: {},
		},
		selected: {
			true: pseudoThickBorder,
		},
	},
});

export type StyledGridItemProps = NonNullable<
	RecipeVariants<typeof styledGridItem>
>;

export const styleIndicator = style({
	height: '26px',
	width: '26px',
});

const checkedBaseTransition = style({
	transitionProperty: 'background',
	transitionTimingFunction: 'ease-in',
	transitionDuration: '80ms',
});

const checkboxFocusHover = style({
	background: tokens.colours.gamut.gray300,
	color: tokens.colours.gamut.white,
});

const checkboxSelected = style({
	borderColor: tokens.border.colours.dark,
	background: tokens.colours.gamut.gray900,
	color: tokens.colours.gamut.white,
});

export const styledCheckbox = recipe({
	base: [
		odStyle({
			alignItems: 'center',
			background: 'white',
			borderColor: 'gray',
			borderRadius: '1',
			borderStyle: 'solid',
			borderWidth: '1',
			color: 'transparent',
			display: 'flex',
			flexShrink: 0,
			justifyContent: 'center',
			size: '6',
		}),
		checkedBaseTransition,
	],
	variants: {
		// recipes don't handle variants correctly using sprinkles (`odStyle`)
		// use of vanilla-extract styles directly instead in the variants
		focused: { true: checkboxFocusHover },
		checked: { true: checkboxSelected },
	},
});

export type StyledCheckboxProps = NonNullable<
	RecipeVariants<typeof styledCheckbox>
>;

const pseudoRadio = style({
	selectors: {
		'&:after': {
			borderRadius: 'inherit',
			content: '',
			display: 'block',
			position: 'absolute',
			transform: 'scale(0.475)',
			width: '100%',
			height: '100%',
			left: 0,
			top: 0,
		},
	},
});

const radioButtonFocusHover = style({
	background: tokens.colours.gamut.gray300,
	selectors: {
		'&:after': {
			background: tokens.colours.gamut.gray200,
		},
	},
});

const radioButtonSelected = style({
	borderColor: tokens.border.colours.dark,
	background: tokens.colours.gamut.gray900,
	selectors: {
		'&:after': {
			background: tokens.colours.gamut.white,
		},
	},
});

export const styledRadioButton = recipe({
	base: [
		odStyle({
			alignItems: 'center',
			background: 'white',
			borderColor: 'gray',
			borderRadius: 'full',
			borderStyle: 'solid',
			borderWidth: '1',
			position: 'relative',
			size: '6',
		}),
		pseudoRadio,
	],
	variants: {
		focused: { true: radioButtonFocusHover },
		checked: { true: radioButtonSelected },
	},
});

export type StyledRadioButtonProps = NonNullable<
	RecipeVariants<typeof styledRadioButton>
>;
