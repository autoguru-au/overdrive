import { createContainer, style } from '@vanilla-extract/css';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

import { focusOutlineStyle } from '../../styles/focusOutline.css';
import { sprinkles } from '../../styles/sprinkles.css';
import { breakpoints } from '../../themes/makeTheme';
import { overdriveTokens as tokens } from '../../themes/theme.css';
import { interactionStyle, notDisabled, notSelected } from '../../utils/css';

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
	base: sprinkles({
		display: 'grid',
		gridColumns: { mobile: '1' },
		gap: '3',
	}),
	variants: {
		columns: {
			
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
	transition: 'background 100ms ease-in, border-color 100ms ease-in',
});


export type StyledGridItemProps = NonNullable<
	RecipeVariants<typeof styledGridItem>
>;

// === Indicator styles
export const styleIndicator = style({
	width: '26px',
	height: '26px',
});


export type StyledCheckboxProps = NonNullable<
	RecipeVariants<typeof styledCheckbox>
>;

const pseudoRadio = style({
	selectors: {
		'&:after': {
			position: 'absolute',
			top: 0,
			left: 0,
			display: 'block',
			transform: 'scale(0.475)',
			borderRadius: 'inherit',
			width: '100%',
			height: '100%',
			content: '',
		},
		'&[data-hover]:after, &[data-focus-visible]:after': {
			background: tokens.colours.gamut.gray200,
		},
		'&[data-selected]:after': {
			background: tokens.colours.gamut.white,
		},
	},
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
