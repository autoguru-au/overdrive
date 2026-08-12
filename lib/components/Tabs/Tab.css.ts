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
			segmented: {
				borderColor: vars.color.border.default,
				borderStyle: 'solid',
				borderWidth: vars.border.width['1'],
				color: vars.color.foreground.secondary,
				flex: '1 0 0',
				fontSize: vars.typography.size.p2.fontSize,
				fontWeight: vars.typography.fontWeight.semiBold,
				lineHeight: vars.typography.size.p2.lineHeight,
				minHeight: vars.space['8'],
				minWidth: 0,
				overflow: 'hidden',
				padding: `${vars.space['2']} ${vars.space['4']}`,
				':focus-visible': {
					outlineOffset: '-1px',
				},
				selectors: {
					'&:first-child': {
						borderBottomLeftRadius: vars.border.radius.small,
						borderTopLeftRadius: vars.border.radius.small,
					},
					'&:last-child': {
						borderBottomRightRadius: vars.border.radius.small,
						borderTopRightRadius: vars.border.radius.small,
					},
					'&+&': {
						marginLeft: `calc(-1 * ${vars.border.width['1']})`,
					},
					'&:not([aria-selected=true]):hover': {
						backgroundColor: vars.color.background.emphasisInactive,
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
				color: vars.color.foreground.primary,
				borderBottomColor: vars.color.border.strong,
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
		{
			variants: {
				appearance: 'segmented',
				active: true,
			},
			style: {
				backgroundColor: vars.color.background.reverse,
				borderColor: vars.color.background.reverse,
				color: vars.color.foreground.reverse,
				position: 'relative',
				zIndex: 1,
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
			backgroundColor: vars.color.background.emphasisInactive,
			borderRadius: vars.border.radius.pill,
			display: 'inline-block',
			minWidth: size,
			height: size,
			padding: `0 ${vars.space['1']}`,
			lineHeight: size,
			transition: `color 0.2s ${vars.animation.easing.decelerate} 0s, background-color 0.2s ${vars.animation.easing.decelerate} 0s`,
		},
	],
	variants: {
		appearance: {
			underlined: {},
			pill: {
				selectors: {
					[`${styledTab.classNames.base}:not([aria-selected=true]):hover &`]:
						{
							backgroundColor: vars.color.background.inactive,
						},
				},
			},
			minimal: {},
			segmented: {
				selectors: {
					[`${styledTab.classNames.base}:not([aria-selected=true]):hover &`]:
						{
							backgroundColor: vars.color.background.inactive,
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
				backgroundColor: vars.color.foreground.primary,
			},
		},
		{
			variants: {
				appearance: 'pill',
				active: true,
			},
			style: {
				backgroundColor: vars.color.background.emphasisInactive,
				color: vars.color.foreground.primary,
			},
		},
		{
			variants: {
				appearance: 'segmented',
				active: true,
			},
			style: {
				backgroundColor: vars.color.background.emphasisInactive,
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
