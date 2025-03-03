import { style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

import { themeContractVars as vars } from '../../themes/theme.css';

const smallHeight = '36px';

// Body styles for button content layout
export const body = style({
	display: 'grid',
	gridAutoFlow: 'column dense',
	gridGap: vars.space['1'],
});

export const hiddenContent = style({
	visibility: 'hidden',
});

export const spinner = style({
	margin: '0 auto',
});

// Button recipe with all variants
export const styledButton = recipe({
	base: style({
		transitionDelay: '0s',
		transitionTimingFunction: vars.animation.easing.standard,
		transitionDuration: '0.1s',
		transitionProperty:
			'color, background-color, border-color, box-shadow, transform',
		transform: 'translate(0, 0) scale(1)',
		willChange: 'transform',
		cursor: 'pointer',
		selectors: {
			'[disabled]': {
				cursor: 'not-allowed',
				opacity: '0.3',
			},
		},
	}),

	variants: {
		// Size variants
		size: {
			small: {
				minWidth: vars.space['8'],
				height: smallHeight,
				gridGap: vars.space['1'],
			},
			medium: {
				minWidth: vars.space['9'],
				height: vars.space['8'],
				gridGap: vars.space['2'],
			},
		},
		// Shape variants
		shape: {
			default: {},
			rounded: {
				selectors: {
					'&[data-size="small"]': {
						minWidth: smallHeight,
					},
					'&[data-size="medium"]': {
						minWidth: vars.space['8'],
					},
				},
			},
			iconOnly: {
				selectors: {
					'&[data-size="small"]': {
						width: smallHeight,
					},
					'&[data-size="medium"]': {
						width: vars.space['8'],
					},
				},
			},
		},
		// Intent (color scheme) variants
		intent: {
			primary: {
				color: vars.colours.intent.primary.foreground,
				backgroundColor:
					vars.colours.intent.primary.background.standard,
				':hover': {
					color: vars.colours.intent.primary.foreground,
					backgroundColor: vars.colours.gamut.green700,
				},
			},
			brand: {
				color: vars.colours.intent.brand.foreground,
				backgroundColor: vars.colours.intent.brand.background.standard,
				':hover': {
					backgroundColor:
						vars.colours.intent.brand.background.strong,
				},
				':active': {
					backgroundColor:
						vars.colours.intent.brand.background.strong,
				},
			},
			secondary: {
				color: vars.colours.intent.secondary.foreground,
				backgroundColor:
					vars.colours.intent.secondary.background.standard,
				border: `1px solid ${vars.colours.intent.secondary.border}`,
				selectors: {
					'&:hover, &:focus, &:active': {
						backgroundColor:
							vars.colours.intent.secondary.background.strong,
						borderColor:
							vars.colours.intent.secondary.background.strong,
					},
				},
			},
			danger: {
				backgroundColor: vars.colours.intent.danger.background.standard,
				color: vars.colours.intent.danger.foreground,
				':hover': {
					backgroundColor:
						vars.colours.intent.danger.background.strong,
				},
				':active': {
					backgroundColor:
						vars.colours.intent.danger.background.strong,
				},
			},
			information: {
				backgroundColor:
					vars.colours.intent.information.background.standard,
				color: vars.colours.intent.information.foreground,
				':hover': {
					backgroundColor:
						vars.colours.intent.information.background.strong,
				},
				':active': {
					backgroundColor:
						vars.colours.intent.information.background.strong,
				},
			},
			warning: {
				backgroundColor:
					vars.colours.intent.warning.background.standard,
				color: vars.colours.intent.warning.foreground,
				':hover': {
					backgroundColor:
						vars.colours.intent.warning.background.strong,
				},
				':active': {
					backgroundColor:
						vars.colours.intent.warning.background.strong,
				},
			},
			success: {
				backgroundColor:
					vars.colours.intent.success.background.standard,
				color: vars.colours.intent.success.foreground,
				':hover': {
					backgroundColor:
						vars.colours.intent.success.background.strong,
				},
				':active': {
					backgroundColor:
						vars.colours.intent.success.background.strong,
				},
			},
		},
		// Miminal appearance variant
		minimal: {
			true: {
				color: vars.typography.colour.neutral,
				backgroundColor: 'transparent',
				selectors: {
					'&[data-variant="primary"]:hover, &[data-variant="primary"]:active':
						{
							color: vars.colours.intent.primary.background
								.strong,
							backgroundColor:
								vars.colours.intent.primary.background.mild,
							boxShadow: 'none',
						},
					'&[data-variant="brand"]:hover, &[data-variant="brand"]:active':
						{
							color: vars.colours.intent.brand.background.strong,
							backgroundColor:
								vars.colours.intent.brand.background.mild,
							boxShadow: 'none',
						},
					'&[data-variant="secondary"]:hover, &[data-variant="secondary"]:active':
						{
							color: vars.typography.colour.secondary,
							backgroundColor:
								vars.colours.intent.secondary.background.strong,
							boxShadow: 'none',
						},
					'&[data-variant="danger"]:hover, &[data-variant="danger"]:active':
						{
							color: vars.colours.intent.danger.background.strong,
							backgroundColor:
								vars.colours.intent.danger.background.mild,
							boxShadow: 'none',
						},
					'&[data-variant="information"]:hover, &[data-variant="information"]:active':
						{
							color: vars.colours.intent.information.background
								.strong,
							backgroundColor:
								vars.colours.intent.information.background.mild,
							boxShadow: 'none',
						},
					'&[data-variant="warning"]:hover, &[data-variant="warning"]:active':
						{
							color: vars.colours.intent.warning.background
								.strong,
							backgroundColor:
								vars.colours.intent.warning.background.mild,
							boxShadow: 'none',
						},
					'&[data-variant="success"]:hover, &[data-variant="success"]:active':
						{
							color: vars.colours.intent.success.background
								.strong,
							backgroundColor:
								vars.colours.intent.success.background.mild,
							boxShadow: 'none',
						},
					'&[data-shape="default"]': {
						minWidth: '50px',
					},
				},
			},
		},
		// Loading variant
		loading: {
			true: {
				cursor: 'not-allowed',
			},
		},
	},

	// Default variants
	defaultVariants: {
		size: 'medium',
		shape: 'default',
		intent: 'primary',
		minimal: false,
		loading: false,
	},
});

export type StyledButtonProps = RecipeVariants<typeof styledButton>;
