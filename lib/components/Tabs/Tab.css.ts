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
				color: vars.colours.foreground.body,
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
				color: vars.colours.foreground.body,
				fontWeight: vars.typography.fontWeight.normal,
				padding: `${vars.space['2']} ${vars.space['4']}`,
				selectors: {
					'&+&': {
						marginLeft: vars.space['3'],
					},
					'&:not([aria-selected=true]):hover': {
						backgroundColor: vars.colours.gamut.gray200,
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
				backgroundColor: vars.colours.foreground.body,
				color: vars.colours.background.body,
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
	width: 'max-content',
	verticalAlign: 'middle',
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
				color: vars.colours.foreground.body,
			},
		},
	],
	defaultVariants: {
		appearance: 'underlined',
	},
});

export type TabVariants = NonNullable<Parameters<typeof styledTab>[0]>;
export type TabAppearance = NonNullable<TabVariants['appearance']>;
