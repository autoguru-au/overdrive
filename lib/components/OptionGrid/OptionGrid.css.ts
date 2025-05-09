import { createContainer, style } from '@vanilla-extract/css';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

import { focusOutlineStyle } from '../../styles/focusOutline.css';
import { sprinklesResponsive } from '../../styles/sprinkles.css';
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
	base: sprinklesResponsive({
		display: 'grid',
		gridColumns: { mobile: 'auto' },
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
	transition: 'background 100ms ease-in, border-color 100ms ease-in',
});

export const styledGridItem = recipe({
	base: [
		{
			alignItems: 'center',
			backgroundColor: tokens.colours.background.body,
			borderColor: tokens.border.colours.gray,
			borderRadius: tokens.border.radius['md'],
			borderStyle: 'solid',
			borderWidth: tokens.border.width[1],
			minHeight: '80px',
			userSelect: 'none',
			display: 'flex',
			gap: tokens.space[2],
			padding: `${tokens.space[3]} ${tokens.space[4]}`,
			position: 'relative',
		},
		interactionStyle({
			hover: {
				cursor: 'pointer',
			},
			selected: {
				backgroundColor: tokens.colours.background.body,
				borderColor: tokens.border.colours.dark,
			},
		}),
		{
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
				'&:hover:not([data-selected]), &[data-focus-visible]:not([data-selected])':
					{
						backgroundColor: tokens.border.colours.light,
						borderColor: tokens.border.colours.light,
					},
			},
		},
		optionTransition,
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
			backgroundColor: tokens.colours.background.body,
			borderRadius: tokens.border.radius['sm'],
			color: 'transparent',
		},
		interactionStyle({
			selected: {
				backgroundColor: tokens.colours.foreground.body,
				color: tokens.colours.background.body,
			},
		}),
		{
			selectors: {
				[`&[data-hover]${notSelected}${notDisabled}, &[data-focus-visible]${notSelected}${notDisabled}`]:
					{
						backgroundColor: tokens.colours.gamut.gray300,
						color: tokens.colours.background.body,
					},
			},
		},
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
			backgroundColor: tokens.colours.background.body,
			borderColor: tokens.border.colours.gray,
			borderRadius: tokens.border.radius.full,
			borderStyle: 'solid',
			borderWidth: tokens.border.width[1],
			position: 'relative',
		},
		interactionStyle({
			selected: {
				backgroundColor: tokens.colours.foreground.body,
				borderColor: tokens.border.colours.dark,
			},
		}),
		sprinklesResponsive({
			alignItems: 'center',
			size: '6',
		}),
		{
			selectors: {
				'&[data-hover]:not([data-selected]),&[focus-visible]:not([data-selected])':
					{
						backgroundColor: tokens.colours.gamut.gray300,
						borderColor: tokens.colours.gamut.gray300,
					},
			},
		},
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
