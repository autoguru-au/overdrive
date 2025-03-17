import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { themeContractVars as vars } from '../../themes/theme.css';

import { focusOutline } from './../../styles/focusOutline.css';

const lineBottomHeight = '1px';
const size = '20px';

export const styledTab = recipe({
	base: {
		flex: 'auto',
		padding: `calc(${vars.space['3']} + ${lineBottomHeight}) ${vars.space['4']}`,
		transition: `color 0.2s ${vars.animation.easing.decelerate} 0s, background-color 0.2s ${vars.animation.easing.decelerate} 0s`,
		':focus-visible': {
			...focusOutline,
		},
	},
	variants: {
		appearance: {
			underlined: {
				borderBottom: `calc(${lineBottomHeight} + ${lineBottomHeight}) solid transparent`,
				':hover': {
					color: vars.colours.intent.neutral.background.strong,
				},
				':focus-visible': {
					outlineOffset: '-2px',
				},
			},
			pill: {
				borderRadius: vars.border.radius.pill,
				':focus-visible': {
					// remove this override if Tabs are rebuilt and outside outline is not truncated
					outlineColor: vars.body.backgroundColour,
					outlineOffset: '-4px',
				},
				selectors: {
					'&+&': {
						marginLeft: vars.space['1'],
					},
					'&:not([aria-selected=true]):hover': {
						backgroundColor: vars.colours.background.neutral,
						color: vars.colours.background.body,
					},
				},
			},
		},
		active: {
			true: {
				color: vars.colours.intent.neutral.background.strong,
				borderBottomColor:
					vars.colours.intent.neutral.background.strong,
			},
		},
	},
	compoundVariants: [
		{
			variants: {
				appearance: 'pill',
				active: true,
			},
			style: {
				backgroundColor: vars.colours.background.neutralDark,
				color: vars.colours.background.body,
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
		active: {
			true: {
				backgroundColor: vars.colours.intent.neutral.background.strong,
			},
		},
	},
});
