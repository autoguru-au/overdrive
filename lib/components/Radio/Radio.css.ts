import { style } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../themes/theme.css';
import {
	checkable,
	nativeInput,
} from '../private/CheckableBase/CheckableBase.css';

const colorAccent = vars.colours.foreground.body;
const colorContrast = vars.colours.background.body;
const colorMid = vars.colours.background.neutral;
const outerSize = vars.space['6'];
const innerSize = vars.space['3'];
const borderWidth = vars.border.width['1'];
const transition = `background-color 0.2s ${vars.animation.easing.decelerate} 0s, border-color 0.2s ${vars.animation.easing.decelerate} 0s`;

const circleBase = style({
	position: 'absolute',
	borderRadius: vars.border.radius.full,
});

export const radio = style([
	circleBase,
	{
		transition,
		borderWidth: borderWidth,
		borderStyle: 'solid',
		borderColor: colorMid,
		width: outerSize,
		selectors: {
			[`${nativeInput}:not(:checked,[checked]):hover ~${checkable} &`]: {
				backgroundColor: colorMid,
			},
		},
		height: outerSize,
	},
]);

export const radioSelected = style({
	borderColor: colorAccent,
	backgroundColor: colorAccent,
});

export const inner = style([
	circleBase,
	{
		transition: `${transition}, transform 0.2s ${vars.animation.easing.standard}`,
		width: innerSize,
		height: innerSize,
		selectors: {
			[`${nativeInput}:not(:checked):hover ~${checkable} &`]: {
				backgroundColor: colorContrast,
			},
		},
	},
]);

export const innerSelected = style({
	backgroundColor: colorContrast,
	selectors: {
		[`${nativeInput}:hover ~${checkable} &`]: {
			transform: 'scale(0.85)',
		},
	},
});
