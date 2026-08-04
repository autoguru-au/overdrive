import { globalLayer, style } from '@vanilla-extract/css';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

import { LAYER_ORDER, cssLayerComponent } from '../../styles/layers.css';
import { selectors } from '../../styles/selectors';
import { overdriveTokens as vars } from '../../themes/theme.css';

globalLayer(LAYER_ORDER);

const TRANSITION_DURATION = '150ms';

const FOCUS_RING_WIDTH = vars.border.width['2'];

const FOCUS_COLOUR = vars.color.info.foreground;

const chipHover = '&:is(button):hover, &:has(button:hover)';

export const chip = recipe({
	base: {
		'@layer': {
			[cssLayerComponent]: {
				alignItems: 'center',
				borderRadius: vars.border.radius.pill,
				borderStyle: 'solid',
				borderWidth: vars.border.width['1'],
				display: 'inline-flex',
				fontSize: vars.typography.size['4'].fontSize,
				lineHeight: vars.typography.size['4'].lineHeight,
				maxWidth: '100%',
				minWidth: 0,
				position: 'relative',
				transitionDuration: TRANSITION_DURATION,
				transitionProperty: 'background-color, border-color, color',
				transitionTimingFunction: vars.animation.easing.standard,
				selectors: {
					[`&:focus-visible, &[data-focus-visible], &:has(:focus-visible), &:has([data-focus-visible])`]:
						{
							borderColor: FOCUS_COLOUR,
							outline: `solid ${FOCUS_RING_WIDTH} ${FOCUS_COLOUR}`,
							outlineOffset: FOCUS_RING_WIDTH,
						},
				},
				'@media': {
					'(prefers-reduced-motion: reduce)': {
						transitionDuration: '0s',
					},
				},
			},
		},
	},

	variants: {
		variant: {
			filter: {
				'@layer': {
					[cssLayerComponent]: {
						backgroundColor: vars.color.background.emphasisInactive,
						borderColor: vars.color.border.default,
						color: vars.color.foreground.primary,
					},
				},
			},
			add: {
				'@layer': {
					[cssLayerComponent]: {
						backgroundColor: 'transparent',
						borderColor: vars.color.border.default,
						borderStyle: 'dashed',
						color: vars.color.foreground.secondary,
					},
				},
			},
		},

		selected: {
			true: {},
			false: {},
		},

		interactive: {
			true: {},
			false: {},
		},
	},

	compoundVariants: [
		{
			variants: { variant: 'filter', interactive: true },
			style: {
				'@layer': {
					[cssLayerComponent]: {
						selectors: {
							[chipHover]: {
								backgroundColor:
									vars.color.background.emphasisLight,
								borderColor: vars.color.border.emphasis,
							},
						},
					},
				},
			},
		},
		{
			variants: { variant: 'add', interactive: true },
			style: {
				'@layer': {
					[cssLayerComponent]: {
						selectors: {
							[chipHover]: {
								borderColor: vars.color.border.selected,
								color: vars.color.foreground.primary,
							},
							[selectors.focusVisible]: {
								borderColor: FOCUS_COLOUR,
								color: vars.color.foreground.primary,
							},
						},
					},
				},
			},
		},
		{
			variants: { variant: 'filter', selected: true },
			style: {
				'@layer': {
					[cssLayerComponent]: {
						backgroundColor: vars.color.brand.solid,
						borderColor: vars.color.brand.solid,
						color: vars.color.brand.onSolid,
						selectors: {
							[chipHover]: {
								backgroundColor: vars.color.brand.solid,
								borderColor: vars.color.brand.solid,
							},
						},
					},
				},
			},
		},
	],

	defaultVariants: {
		variant: 'filter',
		selected: false,
		interactive: false,
	},
});

export type StyledFilterChipProps = NonNullable<RecipeVariants<typeof chip>>;

export const chipBody = recipe({
	base: {
		'@layer': {
			[cssLayerComponent]: {
				alignItems: 'center',
				display: 'inline-flex',
				gap: vars.space['1'],
				minWidth: 0,
				paddingBlock: vars.space['2'],
				paddingInlineEnd: vars.space['3'],
				paddingInlineStart: vars.space['3'],
			},
		},
	},

	variants: {
		withRemove: {
			true: {
				'@layer': {
					[cssLayerComponent]: {
						paddingInlineEnd: vars.space['1'],
					},
				},
			},
			false: {},
		},
	},

	defaultVariants: {
		withRemove: false,
	},
});

export const buttonFont = style({
	'@layer': {
		[cssLayerComponent]: {
			fontFamily: 'inherit',
			fontWeight: 'inherit',
		},
	},
});

export const innerButtonText = style({
	'@layer': {
		[cssLayerComponent]: {
			color: 'inherit',
			fontSize: 'inherit',
			lineHeight: 'inherit',
		},
	},
});

export const removeButton = style({
	'@layer': {
		[cssLayerComponent]: {
			alignItems: 'center',
			alignSelf: 'stretch',
			display: 'inline-flex',
			flexShrink: 0,
			justifyContent: 'center',
			paddingBlock: vars.space['2'],
			paddingInlineEnd: vars.space['3'],
			paddingInlineStart: 0,
		},
	},
});

export const labelText = style({
	'@layer': {
		[cssLayerComponent]: {
			flexShrink: 0,
			whiteSpace: 'nowrap',
		},
	},
});

export const valueText = style({
	'@layer': {
		[cssLayerComponent]: {
			overflow: 'hidden',
			textOverflow: 'ellipsis',
			whiteSpace: 'nowrap',
		},
	},
});

export const categoryLabel = recipe({
	base: {
		'@layer': {
			[cssLayerComponent]: {
				color: vars.color.foreground.secondary,
			},
		},
	},
	variants: {
		selected: {
			true: {
				'@layer': {
					[cssLayerComponent]: {
						color: vars.color.brand.onSolid,
					},
				},
			},
			false: {},
		},
	},
	defaultVariants: {
		selected: false,
	},
});
