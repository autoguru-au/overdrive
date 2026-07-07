import { createContainer, globalLayer, style } from '@vanilla-extract/css';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

import { focusOutlineStyle } from '../../styles/focusOutline.css';
import { LAYER_ORDER, cssLayerComponent } from '../../styles/layers.css';
import { selectors } from '../../styles/selectors';
import { sprinkles } from '../../styles/sprinkles.css';
import { breakpoints } from '../../themes/makeTheme';
import { overdriveTokens as tokens } from '../../themes/theme.css';

globalLayer(LAYER_ORDER);

// === Container styles

export const gridContainer = createContainer();
export const gridContainerStyle = style({
	'@layer': {
		[cssLayerComponent]: {
			containerName: gridContainer,
			containerType: 'inline-size',
		},
	},
});

// === Grid styles

const minWidth1200 = '(min-width: 1200px)';
const repeat2Col = 'repeat(2, 1fr)';
const repeat3Col = 'repeat(3, 1fr)';
const repeat4Col = 'repeat(4, 1fr)';
const repeat5Col = 'repeat(5, 1fr)';

const grid4ColStyle = style({
	'@layer': {
		[cssLayerComponent]: {
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
		},
	},
});

export const gridVariants = recipe({
	base: sprinkles({
		display: 'grid',
		gridColumns: { mobile: '1' },
		gap: '3',
	}),
	variants: {
		columns: {
			'1': {},
			'2': {
				'@layer': {
					[cssLayerComponent]: {
						'@container': {
							[`${gridContainer} (min-width: 640px)`]: {
								gridTemplateColumns: repeat2Col,
							},
							[`${gridContainer} ${minWidth1200}`]: {
								gridTemplateColumns: repeat3Col,
							},
						},
					},
				},
			},
			'3': {
				'@layer': {
					[cssLayerComponent]: {
						'@container': {
							[`${gridContainer} (min-width: 550px)`]: {
								gridTemplateColumns: repeat2Col,
							},
							[`${gridContainer} (min-width: ${breakpoints.desktop})`]:
								{
									gridTemplateColumns: repeat3Col,
								},
						},
					},
				},
			},
			'4': grid4ColStyle,
			'5': [
				grid4ColStyle,
				{
					'@layer': {
						[cssLayerComponent]: {
							'@container': {
								[`${gridContainer} ${minWidth1200}`]: {
									gridTemplateColumns: repeat5Col,
								},
							},
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

export type GridVariants = NonNullable<RecipeVariants<typeof gridVariants>>;

// === Option item styles

const optionTransition = style({
	'@layer': {
		[cssLayerComponent]: {
			transition: 'background 100ms ease-in, border-color 100ms ease-in',
		},
	},
});

export const gridItemContainerStyle = style([
	sprinkles({
		alignItems: 'center',
		borderRadius: 'md',
		borderStyle: 'solid',
		borderWidth: '1',
		display: 'flex',
		gap: '2',
		px: '4',
		py: '3',
		position: 'relative',
		userSelect: 'none',
	}),
	{
		'@layer': {
			[cssLayerComponent]: {
				backgroundColor: tokens.color.background.default,
				borderColor: tokens.border.colours.gray,
				minHeight: '80px',
			},
		},
	},
]);

export const gridItemStyle = style([
	gridItemContainerStyle,
	{
		'@layer': {
			[cssLayerComponent]: {
				backgroundColor: tokens.color.background.default,
				borderColor: tokens.border.colours.gray,
				minHeight: '80px',
				selectors: {
					[selectors.hover]: {
						cursor: 'pointer',
					},
					[selectors.selected]: {
						backgroundColor: tokens.color.background.default,
						borderColor: tokens.border.colours.dark,
					},
					[`${selectors.hoverNotSelected}, ${selectors.focusVisibleNotSelected}`]:
						{
							backgroundColor: tokens.border.colours.light,
							borderColor: tokens.border.colours.light,
						},
					[`&[data-selected]:after`]: {
						borderRadius: 'inherit',
						content: '',
						display: 'block',
						height: '100%',
						left: 0,
						outlineColor: tokens.color.gamut.gray['900'],
						outlineStyle: 'solid',
						outlineWidth: tokens.border.width[2],
						position: 'absolute',
						top: 0,
						width: '100%',
					},
					[selectors.disabled]: {
						backgroundColor: tokens.color.gamut.gray['100'],
						borderColor: 'transparent',
						color: tokens.color.gamut.gray['500'],
						cursor: 'not-allowed',
					},
				},
			},
		},
	},
	optionTransition,
	focusOutlineStyle,
]);

// === Indicator styles

export const indicatorStyle = style({
	'@layer': {
		[cssLayerComponent]: {
			height: '26px',
			width: '26px',
		},
	},
});

export const checkboxStyle = style([
	sprinkles({
		alignItems: 'center',
		borderColor: 'default',
		borderRadius: 'sm',
		borderStyle: 'solid',
		borderWidth: '1',
		display: 'flex',
		flexShrink: '0',
		justifyContent: 'center',
		size: '6',
	}),
	{
		'@layer': {
			[cssLayerComponent]: {
				color: 'transparent',
				selectors: {
					[selectors.selected]: {
						backgroundColor: tokens.color.foreground.primary,
						color: tokens.color.background.default,
					},
					[`${selectors.hoverNotSelected}, ${selectors.focusVisibleNotSelected}`]:
						{
							backgroundColor: tokens.color.gamut.gray['300'],
							color: tokens.color.background.default,
						},
					[selectors.disabled]: {
						borderColor: tokens.color.gamut.gray['200'],
					},
				},
			},
		},
	},
	optionTransition,
]);

const pseudoRadio = style({
	'@layer': {
		[cssLayerComponent]: {
			selectors: {
				'&:after': {
					borderRadius: 'inherit',
					content: '',
					display: 'block',
					height: '100%',
					left: 0,
					position: 'absolute',
					top: 0,
					transform: 'scale(0.475)',
					width: '100%',
				},
				[`${selectors.hover}:after, ${selectors.focusVisible}:after`]: {
					background: tokens.color.gamut.gray['200'],
				},
				[`&[data-selected]:after`]: {
					background: tokens.color.gamut.white,
				},
			},
		},
	},
});

export const radioButtonStyle = style([
	sprinkles({
		alignItems: 'center',
		borderRadius: 'full',
		borderStyle: 'solid',
		borderWidth: '1',
		position: 'relative',
		size: '6',
	}),
	{
		'@layer': {
			[cssLayerComponent]: {
				backgroundColor: tokens.color.background.default,
				borderColor: tokens.border.colours.gray,
				selectors: {
					[selectors.selected]: {
						backgroundColor: tokens.color.foreground.primary,
						borderColor: tokens.border.colours.dark,
					},
					[`${selectors.hoverNotSelected}, ${selectors.focusVisibleNotSelected}`]:
						{
							backgroundColor: tokens.color.gamut.gray['300'],
							borderColor: tokens.color.gamut.gray['300'],
						},
					[selectors.disabled]: {
						backgroundColor: tokens.color.gamut.gray['100'],
						borderColor: tokens.color.gamut.gray['200'],
					},
				},
			},
		},
	},
	pseudoRadio,
	optionTransition,
]);

// === Label styles

export const labelStyle = sprinkles({ fontSize: '4' });
export const descriptionStyle = sprinkles({ fontSize: '2' });
