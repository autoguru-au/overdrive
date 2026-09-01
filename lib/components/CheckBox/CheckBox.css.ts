import { style, styleVariants } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../themes/theme.css';
import {
	nativeInput,
	checkable,
} from '../private/CheckableBase/CheckableBase.css';

const colorAccent = vars.color.brand.solid;
const colorContrast = vars.color.background.default;
const colorMid = vars.colours.background.neutral;
const size = vars.space['6'];
const borderRadius = vars.border.radius['sm'];
const borderWidth = vars.border.width['1'];
const transition = `border-color 0.2s ${vars.animation.easing.decelerate} 0s, background-color 0.2s ${vars.animation.easing.decelerate} 0s`;

export const checkbox = styleVariants({
	default: {
		alignItems: 'center',
		borderColor: colorMid,
		borderRadius: borderRadius,
		borderStyle: 'solid',
		borderWidth: borderWidth,
		boxSizing: 'border-box',
		color: colorContrast,
		display: 'flex',
		height: size,
		justifyContent: 'center',
		transition,
		width: size,
		selectors: {
			[`${nativeInput}:not(:checked):hover ~${checkable} &:not([data-indeterminate])`]:
				{
					backgroundColor: colorMid,
				},
		},
		zIndex: 0,
	},
	selected: {
		backgroundColor: colorAccent,
		borderColor: colorAccent,
		// On `selected` only — the Icon always renders, hidden by matching
		// the page background.
		color: vars.color.brand.onSolid,
	},
});

/**
 * Medium 20px, Small 16px, each insetting the tick 2px on every side. See
 * `ControlSize` for why `large` carries no rules.
 */
const boxSizes = { medium: vars.space['5'], small: vars.space['4'] } as const;

export const boxSize = styleVariants(boxSizes, (size) => ({
	height: size,
	width: size,
}));

export const icon = style({
	transition: `transform 0.2s ${vars.animation.easing.standard}`,
	selectors: {
		[`${nativeInput}:checked:hover ~${checkable} ${checkbox.selected} &`]: {
			transform: 'scale(0.85)',
		},
		// Keyed off the parent, not the icon alone: `Icon`'s size class is a
		// single class in an unlayered sheet, so a bare override here would be
		// decided by bundle order. Two classes win deterministically.
		[`${boxSize.medium} > &`]: {
			height: vars.space['4'],
			width: vars.space['4'],
		},
		[`${boxSize.small} > &`]: {
			height: vars.space['3'],
			width: vars.space['3'],
		},
	},
});
