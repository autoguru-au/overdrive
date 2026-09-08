import { style, styleVariants } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../themes/theme.css';
import {
	nativeInput,
	checkable,
} from '../private/CheckableBase/CheckableBase.css';

/**
 * Figma — Selection controls / Check box (node 438:15383).
 *
 * Every value below is the variable Figma binds, mapped to its Overdrive token:
 *
 * | State                | Fill                             | Border                    | Tick                          |
 * | -------------------- | -------------------------------- | ------------------------- | ----------------------------- |
 * | Default              | `color/background/default`       | `color/border/default`    | —                             |
 * | Hover (unselected)   | `color/selection/hover-bg`       | `color/selection/active`  | —                             |
 * | Selected             | `color/selection/active`         | same                      | `color/foreground/reverse`    |
 * | Disabled unselected  | `color/background/emphasis/inactive` | `color/border/default` | —                             |
 * | Disabled selected    | `color/background/emphasis/inactive` | `color/border/default` | `color/foreground/placeholder` |
 *
 * `radius` is `border/radius/xsmall` at BOTH sizes — the small box does not
 * step its corner down.
 */
const radius = vars.border.radius.xsmall;
const borderWidth = vars.border.width['1'];

/**
 * Figma draws the box at 20/16 with the tick inset 2px on every side, so the
 * glyph is always its box less one step of the space ladder.
 */
const box = {
	medium: vars.space['5'], // 20px
	small: vars.space['4'], // 16px
} as const;
const glyph = {
	medium: vars.space['4'], // 16px
	small: vars.space['3'], // 12px
} as const;

const transition = `border-color 0.2s ${vars.animation.easing.decelerate} 0s, background-color 0.2s ${vars.animation.easing.decelerate} 0s`;

/**
 * The tick colour reads `brand.onSolid`, not Figma's `color/foreground/reverse`
 * directly. Both resolve to white unbranded, but `onSolid` is the pair derived
 * against the fill — a tenant on a pale brand (amber) gets dark ink here, where
 * `foreground.reverse` would leave an invisible tick on its own accent.
 */
const tickOnActive = vars.color.brand.onSolid;

export const size = styleVariants({
	medium: { height: box.medium, width: box.medium },
	small: { height: box.small, width: box.small },
});

export const checkbox = styleVariants({
	default: {
		alignItems: 'center',
		backgroundColor: vars.color.background.default,
		borderColor: vars.color.border.default,
		borderRadius: radius,
		borderStyle: 'solid',
		borderWidth,
		boxSizing: 'border-box',
		// The tick is always in the DOM so it can transition; unchecked it is
		// simply not painted. Previously it was hidden by matching the page
		// background, which showed as a white tick once hover gained a fill.
		color: 'transparent',
		display: 'flex',
		justifyContent: 'center',
		transition,
		zIndex: 0,
		selectors: {
			// Hover, unselected. An indeterminate box is not `:checked`, so
			// without the guard the wash would strip its accent fill.
			[`${nativeInput}:not(:checked):not(:disabled):hover ~${checkable} &:not([data-indeterminate])`]:
				{
					backgroundColor: vars.color.selection.hoverBg,
					borderColor: vars.color.selection.active,
				},
			// Disabled outranks selected on specificity (three classes to one),
			// so both disabled rows land whichever order the classes compose in.
			[`${nativeInput}:disabled ~${checkable} &`]: {
				backgroundColor: vars.color.background.emphasisInactive,
				borderColor: vars.color.border.default,
			},
			[`${nativeInput}:disabled:checked ~${checkable} &`]: {
				color: vars.color.foreground.placeholder,
			},
		},
	},
	selected: {
		backgroundColor: vars.color.selection.active,
		borderColor: vars.color.selection.active,
		color: tickOnActive,
	},
});

export const icon = style({
	transition: `transform 0.2s ${vars.animation.easing.standard}`,
	selectors: {
		// Two classes, so this outranks the single-class width/height Icon sets
		// from its own `size` prop regardless of stylesheet order.
		[`${size.medium} &`]: { height: glyph.medium, width: glyph.medium },
		[`${size.small} &`]: { height: glyph.small, width: glyph.small },
		[`${nativeInput}:checked:hover ~${checkable} ${checkbox.selected} &`]: {
			transform: 'scale(0.85)',
		},
	},
});
