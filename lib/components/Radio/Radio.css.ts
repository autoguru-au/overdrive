import { style, styleVariants } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../themes/theme.css';
import {
	checkable,
	nativeInput,
} from '../private/CheckableBase/CheckableBase.css';

const colorAccent = vars.color.brand.solid;
const colorContrast = vars.color.background.default;
const colorMid = vars.colours.background.neutral;
const outerSize = vars.space['6'];
const innerSize = vars.space['3'];
const borderWidth = vars.border.width['1'];
const transition = `background-color 0.2s ${vars.animation.easing.decelerate} 0s, border-color 0.2s ${vars.animation.easing.decelerate} 0s`;

const circleBase = style({
	borderRadius: vars.border.radius.full,
	position: 'absolute',
});

export const radio = style([
	circleBase,
	{
		borderColor: colorMid,
		borderStyle: 'solid',
		borderWidth: borderWidth,
		height: outerSize,
		transition,
		selectors: {
			[`${nativeInput}:not(:checked,[checked]):hover ~${checkable} &`]: {
				backgroundColor: colorMid,
			},
		},
		width: outerSize,
	},
]);

export const radioSelected = style({
	backgroundColor: colorAccent,
	borderColor: colorAccent,
});

export const inner = style([
	circleBase,
	{
		height: innerSize,
		transition: `${transition}, transform 0.2s ${vars.animation.easing.standard}`,
		width: innerSize,
		selectors: {
			[`${nativeInput}:not(:checked):hover ~${checkable} &`]: {
				backgroundColor: colorContrast,
			},
		},
	},
]);

/**
 * Figma `438:15441` — Medium 20px, Small 16px. See `ControlSize`.
 *
 * The dot stays at half the ring, the ratio the pre-2026 control already
 * renders (12px in 24px). A calc rather than a token because the ladder has no
 * 10px step.
 */
const ringSizes = { medium: vars.space['5'], small: vars.space['4'] } as const;

export const ring = styleVariants(ringSizes, (size) => ({
	height: size,
	width: size,
}));

export const dot = styleVariants(ringSizes, (size) => ({
	height: `calc(${size} / 2)`,
	width: `calc(${size} / 2)`,
}));

export const innerSelected = style({
	// on the brand fill, unlike the unselected hover dot above
	backgroundColor: vars.color.brand.onSolid,
	selectors: {
		[`${nativeInput}:hover ~${checkable} &`]: {
			transform: 'scale(0.85)',
		},
	},
});
