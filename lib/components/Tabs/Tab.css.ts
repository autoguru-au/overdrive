import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { focusOutline } from '../../styles/focusOutline.css';
import { overdriveTokens as vars } from '../../themes/theme.css';

const lineBottomHeight = '1px';
const size = '20px';

export const styledTab = recipe({
	base: {
		flex: 'auto',
		transition: `color 0.2s ${vars.animation.easing.decelerate} 0s, background-color 0.2s ${vars.animation.easing.decelerate} 0s`,
		':focus-visible': {
			...focusOutline,
		},
		selectors: {
			'&:not([aria-selected=true]):hover': {
				color: vars.color.foreground.primary,
			},
		},
	},
	variants: {
		appearance: {
			underlined: {
				borderBottom: `calc(${lineBottomHeight} + ${lineBottomHeight}) solid transparent`,
				padding: `calc(${vars.space['3']} + ${lineBottomHeight}) ${vars.space['4']}`,
				':focus-visible': {
					outlineOffset: '-1px',
				},
			},
			pill: {
				borderRadius: vars.border.radius.pill,
				color: vars.color.foreground.primary,
				fontWeight: vars.typography.fontWeight.normal,
				padding: `${vars.space['2']} ${vars.space['4']}`,
				selectors: {
					'&+&': {
						marginLeft: vars.space['3'],
					},
					'&:not([aria-selected=true]):hover': {
						backgroundColor: vars.color.gamut.gray['200'],
					},
				},
			},
			minimal: {
				borderBottom: `2px solid transparent`,
				padding: '6px 0',
				selectors: {
					'&+&': {
						marginLeft: vars.space['6'],
					},
				},
			},
		},
		active: {
			true: {},
		},
	},
	compoundVariants: [
		{
			variants: {
				appearance: 'underlined',
				active: true,
			},
			style: {
				color: vars.colours.intent.neutral.background.strong,
				borderBottomColor:
					vars.colours.intent.neutral.background.strong,
			},
		},
		{
			variants: {
				appearance: 'pill',
				active: true,
			},
			style: {
				backgroundColor: vars.color.foreground.primary,
				color: vars.color.background.default,
			},
		},
		{
			variants: {
				appearance: 'minimal',
				active: true,
			},
			style: {
				color: vars.color.content.normal,
				borderBottomColor: vars.color.content.normal,
			},
		},
	],
	defaultVariants: {
		appearance: 'underlined',
	},
});

export const item = style({
	display: 'inline-flex',
	verticalAlign: 'middle',
	width: 'max-content',
});

export const indication = recipe({
	base: [
		{
			backgroundColor: vars.colours.background.light,
			borderRadius: vars.border.radius.pill,
			display: 'inline-block',
			minWidth: size,
			height: size,
			padding: `0 ${vars.space['1']}`,
			lineHeight: size,
			transition: `color 0.2s ${vars.animation.easing.decelerate} 0s, backgroundColor 0.2s ${vars.animation.easing.decelerate} 0s`,
		},
	],
	variants: {
		appearance: {
			underlined: {},
			pill: {
				selectors: {
					[`${styledTab.classNames.base}:not([aria-selected=true]):hover &`]:
						{
							backgroundColor: vars.colours.background.neutral,
						},
				},
			},
			minimal: {},
		},
		active: {
			true: {},
		},
	},
	compoundVariants: [
		{
			variants: {
				appearance: 'underlined',
				active: true,
			},
			style: {
				backgroundColor: vars.colours.intent.neutral.background.strong,
			},
		},
		{
			variants: {
				appearance: 'pill',
				active: true,
			},
			style: {
				backgroundColor: vars.colours.background.light,
				color: vars.color.foreground.primary,
			},
		},
	],
	defaultVariants: {
		appearance: 'underlined',
	},
});

export type TabVariants = NonNullable<Parameters<typeof styledTab>[0]>;
export type TabAppearance = NonNullable<TabVariants['appearance']>;
