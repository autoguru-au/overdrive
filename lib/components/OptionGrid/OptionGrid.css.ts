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
		'&[data-selected]:after': {
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
		pseudoThickBorder,
	],
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

export const styledCheckbox = recipe({
	base: [
		odStyle({
			alignItems: 'center',
			background: {
				initial: 'white',
				focusVisible: 'gray300',
				hover: 'gray300',
				selected: 'gray900',
			},
			borderColor: { initial: 'gray', selected: 'dark' },
			borderRadius: '1',
			borderStyle: 'solid',
			borderWidth: '1',
			color: {
				initial: 'transparent',
				focusVisible: 'white',
				hover: 'white',
				selected: 'white',
			},
			display: 'flex',
			flexShrink: 0,
			justifyContent: 'center',
			size: '6',
		}),
		checkedBaseTransition,
	],
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
		'&[data-hover]:after, &[data-focus-visible]:after': {
			background: tokens.colours.gamut.gray200,
		},
		'&[data-selected]:after': {
			background: tokens.colours.gamut.white,
		},
	},
});

export const styledRadioButton = recipe({
	base: [
		odStyle({
			alignItems: 'center',
			background: {
				initial: 'white',
				hover: 'gray300',
				focusVisible: 'gray300',
				selected: 'gray900',
			},
			borderColor: { initial: 'gray', selected: 'dark' },
			borderRadius: 'full',
			borderStyle: 'solid',
			borderWidth: '1',
			position: 'relative',
			size: '6',
		}),
		pseudoRadio,
	],
});

export type StyledRadioButtonProps = NonNullable<
	RecipeVariants<typeof styledRadioButton>
>;
