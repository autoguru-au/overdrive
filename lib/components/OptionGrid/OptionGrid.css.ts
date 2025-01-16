import { style } from '@vanilla-extract/css';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

import { focusOutline } from '../../styles/focusOutline.css';
import { odStyle } from '../../styles/sprinkles.css';
import { tokens } from '../../themes/base/tokens';

export const styledGridContainer = recipe({
	base: odStyle({
		display: 'grid',
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
			padding: '3',
			position: 'relative',
		}),
	],
	variants: {
		disabled: {
			true: {},
		},
		selected: {
			true: style({
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
			}),
		},
	},
});

export type StyledGridItemProps = NonNullable<
	RecipeVariants<typeof styledGridItem>
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
		focused: { true: checkboxFocusHover },
		checked: { true: checkboxSelected },
	},
	// compoundVariants: [
	// 	{
	// 		variants: {
	// 			hovered: false,
	// 			checked: false,
	// 		},
	// 		style: odStyle({
	// 			background: 'white',
	// 			color: 'transparent',
	// 		}),
	// 	},
	// 	{
	// 		variants: {
	// 			hovered: true,
	// 			checked: false,
	// 		},
	// 		style: odStyle({
	// 			background: 'gray300',
	// 			color: 'white',
	// 		}),
	// 	},
	// 	{
	// 		variants: {
	// 			focused: true,
	// 			checked: false,
	// 		},
	// 		style: odStyle({
	// 			background: 'gray300',
	// 			color: 'white',
	// 		}),
	// 	},
	// 	{
	// 		variants: {
	// 			checked: true,
	// 		},
	// 		style: odStyle({
	// 			borderColor: 'dark',
	// 			background: 'gray900',
	// 			color: 'white',
	// 		}),
	// 	},
	// ],
});

export type StyledCheckboxProps = NonNullable<
	RecipeVariants<typeof styledCheckbox>
>;
