import { createVar, style } from '@vanilla-extract/css';

import { themeContractVars as vars } from '../../themes/theme.css';
import {
	checkable,
	nativeInput,
} from '../private/CheckableBase/CheckableBase.css';

const colorAccent = createVar();
const colorContrast = createVar();
const colorMid = createVar();
const outerSize = createVar();
const innerSize = createVar();
const borderWidth = createVar();

const transition = `background-color 0.2s ${vars.animation.easing.decelerate} 0s, border-color 0.2s ${vars.animation.easing.decelerate} 0s`;

const circleBase = style({
	position: 'absolute',
	borderRadius: vars.border.radius.full,
});

export const base = style({
	vars: {
		[colorAccent]: vars.colours.gamut.gray900,
		[colorContrast]: vars.colours.gamut.white,
		[colorMid]: vars.colours.gamut.gray300,
		[outerSize]: vars.space['6'],
		[innerSize]: vars.space['3'],
		[borderWidth]: vars.border.width['1'],
	},
});

export const radio = style([
	circleBase,
	{
		borderColor: colorMid,
		borderStyle: 'solid',
		borderWidth: borderWidth,
		height: outerSize,
		width: outerSize,
		selectors: {
			[`${nativeInput}:not(:checked,[checked]):hover ~${checkable} &`]: {
				backgroundColor: colorMid,
			},
		},
		transition,
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
		width: innerSize,
		transition: `${transition}, transform 0.2s ${vars.animation.easing.standard}`,
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
