import { style } from '@vanilla-extract/css';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

import { focusOutlineStyle } from '../../styles/focusOutline.css';
import { cssLayerComponent } from '../../styles/layers.css';
import { overdriveTokens as vars } from '../../themes/theme.css';

export const contained = style({
	maxWidth: '640px',
	minWidth: '280px',
});

const TAB_WIDTH = '6px';

const tinted = (backgroundColor: string) => ({
	'@layer': {
		[cssLayerComponent]: { backgroundColor },
	},
});

export const styledAlert = recipe({
	base: {
		'@layer': {
			[cssLayerComponent]: {
				borderRadius: vars.border.radius.xsmall,
				color: vars.color.foreground.primary,
				display: 'flex',
				overflow: 'hidden',
			},
		},
	},
	variants: {
		appearance: {
			detail: {
				'@layer': {
					[cssLayerComponent]: {
						backgroundColor: vars.color.background.default,
						border: `${vars.border.width['1']} solid ${vars.color.border.default}`,
						boxShadow: vars.elevation.z3,
					},
				},
			},
			message: {
				'@layer': {
					[cssLayerComponent]: {
						gap: vars.space['2'],
						padding: vars.space['3'],
					},
				},
			},
		},
		intent: {
			danger: {},
			information: {},
			success: {},
			warning: {},
		},
	},
	compoundVariants: [
		{
			variants: { appearance: 'message', intent: 'danger' },
			style: tinted(vars.color.alert.backgroundSubtle),
		},
		{
			variants: { appearance: 'message', intent: 'information' },
			style: tinted(vars.color.info.backgroundSubtle),
		},
		{
			variants: { appearance: 'message', intent: 'success' },
			style: tinted(vars.color.success.backgroundSubtle),
		},
		{
			variants: { appearance: 'message', intent: 'warning' },
			style: tinted(vars.color.warning.backgroundSubtle),
		},
	],
});

export const tab = recipe({
	base: {
		'@layer': {
			[cssLayerComponent]: {
				alignSelf: 'stretch',
				flex: `0 0 ${TAB_WIDTH}`,
			},
		},
	},
	variants: {
		intent: {
			danger: tinted(vars.color.alert.foreground),
			information: tinted(vars.color.info.foreground),
			success: tinted(vars.color.success.foreground),
			warning: tinted(vars.color.warning.foreground),
		},
	},
});

export const detailBody = style({
	'@layer': {
		[cssLayerComponent]: {
			display: 'flex',
			flex: '1',
			gap: vars.space['3'],
			minWidth: 0,
			padding: `${vars.space['4']} ${vars.space['5']}`,
		},
	},
});

export const content = style({
	'@layer': {
		[cssLayerComponent]: {
			display: 'flex',
			flex: '1',
			flexDirection: 'column',
			gap: vars.space['3'],
			minWidth: 0,
		},
	},
});

export const heading = style({
	'@layer': {
		[cssLayerComponent]: {
			fontSize: vars.typography.size.p1.fontSize,
			fontWeight: vars.typography.fontWeight.semiBold,
			lineHeight: vars.typography.size.p1.lineHeight,
			margin: 0,
		},
	},
});

export const messageText = style({
	'@layer': {
		[cssLayerComponent]: {
			flex: '1',
			fontSize: vars.typography.size.p2.fontSize,
			lineHeight: vars.typography.size.p2.lineHeight,
			minWidth: 0,
		},
	},
});

export const closeButton = style([
	focusOutlineStyle,
	{
		'@layer': {
			[cssLayerComponent]: {
				alignSelf: 'start',
				background: 'none',
				border: 'none',
				borderRadius: vars.border.radius.xsmall,
				color: vars.color.foreground.tertiary,
				cursor: 'pointer',
				display: 'flex',
				padding: 0,
			},
		},
	},
]);

export type StyledAlertProps = NonNullable<RecipeVariants<typeof styledAlert>>;
