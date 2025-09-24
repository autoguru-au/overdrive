import { styleVariants } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { cssLayerComponent } from '../../styles/layers.css';
import { sprinkles } from '../../styles/sprinkles.css';
import { overdriveTokens as vars } from '../../themes/theme.css';

export const toggleButtonGroup = recipe({
	base: [
		cssLayerComponent,
		{
			border: `1px solid ${vars.colours.intent.base.background}`,
			borderRadius: vars.borderRadius.pill,
			overflow: 'hidden',
			backgroundColor: vars.colours.intent.base.background,
		},
	],
	variants: {
		size: {
			small: {
				gap: 0,
			},
			medium: {
				gap: 0,
			},
			large: {
				gap: 0,
			},
		},
		stretch: {
			true: {
				flex: 1,
				width: '100%',
			},
			false: {},
		},
	},
	defaultVariants: {
		size: 'medium',
		stretch: false,
	},
});

export const toggleButton = recipe({
	base: [
		cssLayerComponent,
		sprinkles({
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			gap: '2',
			transition: 'fast',
			cursor: 'pointer',
		}),
		{
			border: 'none',
			backgroundColor: 'transparent',
			color: vars.colours.intent.base.foreground,
			fontFamily: vars.typography.fonts.body,
			fontWeight: vars.typography.weights.semibold,
			position: 'relative',
			outline: 'none',
			whiteSpace: 'nowrap',
			userSelect: 'none',

			// Remove default browser button styling
			appearance: 'none',
			'-webkit-appearance': 'none',
			'-moz-appearance': 'none',

			// Size variants - padding and font size
			padding: `${vars.space['3']} ${vars.space['4']}`,
			fontSize: vars.typography.sizes['3'].fontSize,
			lineHeight: vars.typography.sizes['3'].lineHeight,
			minHeight: vars.space['11'],

			// Focus styles
			':focus-visible': {
				outline: `2px solid ${vars.colours.intent.primary.background}`,
				outlineOffset: 1,
				zIndex: 1,
			},

			// Hover styles for unselected state
			':hover:not([data-selected="true"]):not(:disabled)': {
				backgroundColor: vars.colours.intent.neutral.mild,
			},

			// Adjacent button borders - hide inner borders
			':not(:first-child)': {
				borderLeft: `1px solid ${vars.colours.intent.base.background}`,
			},

			// Stretch to fill parent if in stretch mode
			':only-child': {
				borderRadius: vars.borderRadius.pill,
			},
			':first-child:not(:only-child)': {
				borderTopLeftRadius: vars.borderRadius.pill,
				borderBottomLeftRadius: vars.borderRadius.pill,
			},
			':last-child:not(:only-child)': {
				borderTopRightRadius: vars.borderRadius.pill,
				borderBottomRightRadius: vars.borderRadius.pill,
			},
		},
	],
	variants: {
		selected: {
			true: {
				backgroundColor: vars.colours.intent.dark.background,
				color: vars.colours.intent.dark.foreground,

				':hover': {
					backgroundColor: vars.colours.intent.dark.mild,
				},
			},
			false: {},
		},
		pressed: {
			true: {
				transform: 'translateY(1px)',
			},
			false: {},
		},
		disabled: {
			true: {
				cursor: 'not-allowed',
				opacity: 0.5,

				':hover': {
					backgroundColor: 'transparent',
				},
			},
			false: {},
		},
	},
	compoundVariants: [
		{
			variants: { selected: true, disabled: true },
			style: {
				backgroundColor: vars.colours.intent.dark.background,
				color: vars.colours.intent.dark.foreground,
				opacity: 0.5,
			},
		},
	],
	defaultVariants: {
		selected: false,
		pressed: false,
		disabled: false,
	},
});

// Size variants for different button sizes
export const sizeVariants = styleVariants({
	large: [
		sprinkles({
			padding: '4',
			gap: '2',
		}),
		{
			fontSize: vars.typography.sizes['4'].fontSize,
			lineHeight: vars.typography.sizes['4'].lineHeight,
			minHeight: vars.space['12'],
		},
	],
	medium: [
		sprinkles({
			padding: '3',
			gap: '2',
		}),
		{
			fontSize: vars.typography.sizes['3'].fontSize,
			lineHeight: vars.typography.sizes['3'].lineHeight,
			minHeight: vars.space['11'],
		},
	],
	small: [
		sprinkles({
			padding: '2',
			gap: '1',
		}),
		{
			fontSize: vars.typography.sizes['2'].fontSize,
			lineHeight: vars.typography.sizes['2'].lineHeight,
			minHeight: vars.space['9'],
		},
	],
});
