import { createContainer, style } from '@vanilla-extract/css';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

import { focusOutlineStyle } from '../../styles/focusOutline.css';
import {
	sprinklesInteraction,
	sprinklesResponsive,
} from '../../styles/sprinkles.css';
import { breakpoints } from '../../themes/makeTheme';
import { themeContractVars as tokens } from '../../themes/theme.css';

// === Container styles
export const gridContainer = createContainer();
export const gridContainerStyle = style({
	containerName: gridContainer,
	containerType: 'inline-size',
});

// == Grid styles
const minWidth1200 = '(min-width: 1200px)';
const repeat2Col = 'repeat(2, 1fr)';
const repeat3Col = 'repeat(3, 1fr)';
const repeat4Col = 'repeat(4, 1fr)';
const repeat5Col = 'repeat(5, 1fr)';

const grid4ColStyle = style({
	'@container': {
		[`${gridContainer} (min-width: ${breakpoints.mobile})`]: {
			gridTemplateColumns: repeat2Col,
		},
		[`${gridContainer} (min-width: ${breakpoints.tablet})`]: {
			gridTemplateColumns: repeat3Col,
		},
		[`${gridContainer} (min-width: ${breakpoints.desktop})`]: {
			gridTemplateColumns: repeat4Col,
		},
	},
});

export const styledGrid = recipe({
	base: sprinklesResponsive({
		display: 'grid',
		gridColumns: { mobile: '1' },
		gap: '3',
	}),
	variants: {
		columns: {
			'1': {},
			'2': {
				'@container': {
					[`${gridContainer} (min-width: 640px)`]: {
						gridTemplateColumns: repeat2Col,
					},
					[`${gridContainer} ${minWidth1200}`]: {
						gridTemplateColumns: repeat3Col,
					},
				},
			},
			'3': {
				'@container': {
					[`${gridContainer} (min-width: 550px)`]: {
						gridTemplateColumns: repeat2Col,
					},
					[`${gridContainer} (min-width: ${breakpoints.desktop})`]: {
						gridTemplateColumns: repeat3Col,
					},
				},
			},
			'4': grid4ColStyle,
			'5': [
				grid4ColStyle,
				{
					'@container': {
						[`${gridContainer} ${minWidth1200}`]: {
							gridTemplateColumns: repeat5Col,
						},
					},
				},
			],
		},
	},
	defaultVariants: {
		columns: '2',
	},
});

export type StyledGridProps = NonNullable<RecipeVariants<typeof styledGrid>>;

// === Option item styles
const optionTransition = style({
	transition: 'background 80ms ease-in',
});

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
			alignItems: 'center',
			borderRadius: tokens.border.radius[2],
			borderStyle: 'solid',
			borderWidth: tokens.border.width[1],
			minHeight: '80px',
			userSelect: 'none',
			display: 'flex',
			gap: tokens.space[2],
			padding: `${tokens.space[3]} ${tokens.space[4]}`,
			position: 'relative',
		},
		sprinklesInteraction({
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
			cursor: { hover: 'pointer' },
		}),
		optionTransition,
		pseudoThickBorder,
		focusOutlineStyle,
	],
});

export type StyledGridItemProps = NonNullable<
	RecipeVariants<typeof styledGridItem>
>;

// === Indicator styles
export const styleIndicator = style({
	height: '26px',
	width: '26px',
});

export const styledCheckbox = recipe({
	base: [
		{
			borderRadius: tokens.border.radius[1],
			borderStyle: 'solid',
			borderWidth: tokens.border.width[1],
		},
		sprinklesInteraction({
			background: {
				initial: 'white',
				focusVisible: 'gray300',
				hover: 'gray300',
				selected: 'gray900',
			},
			borderColor: { initial: 'gray', selected: 'dark' },
			color: {
				initial: 'transparent',
				focusVisible: 'white',
				hover: 'white',
				selected: 'white',
			},
		}),
		sprinklesResponsive({
			alignItems: 'center',
			display: 'flex',
			flexShrink: 0,
			justifyContent: 'center',
			size: '6',
		}),
		optionTransition,
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
		{
			borderRadius: tokens.border.radius.full,
			borderStyle: 'solid',
			borderWidth: tokens.border.width[1],
			position: 'relative',
		},
		sprinklesInteraction({
			background: {
				initial: 'white',
				hover: 'gray300',
				focusVisible: 'gray300',
				selected: 'gray900',
			},
			borderColor: { initial: 'gray', selected: 'dark' },
		}),
		sprinklesResponsive({
			alignItems: 'center',
			size: '6',
		}),
		pseudoRadio,
		optionTransition,
	],
});

export type StyledRadioButtonProps = NonNullable<
	RecipeVariants<typeof styledRadioButton>
>;

// === Label styles

export const labelStyle = style({
	fontSize: tokens.typography.size[4].fontSize,
});

export const descriptionStyle = style({
	fontSize: tokens.typography.size[2].fontSize,
});
