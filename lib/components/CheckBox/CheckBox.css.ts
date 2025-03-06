import { createVar, style, styleVariants } from '@vanilla-extract/css';

import { themeContractVars as vars } from '../../themes/theme.css';
import {
	nativeInput,
	checkable,
} from '../private/CheckableBase/CheckableBase.css';

const colorAccent = createVar();
const colorContrast = createVar();
const colorMid = createVar();
const size = createVar();
const borderRadius = createVar();
const borderWidth = createVar();

const transition = `border-color 0.2s ${vars.animation.easing.decelerate} 0s, background-color 0.2s ${vars.animation.easing.decelerate} 0s`;

export const base = style({
	vars: {
		[colorAccent]: vars.colours.gamut.gray900,
		[colorContrast]: vars.colours.gamut.white,
		[colorMid]: vars.colours.gamut.gray300,
		[size]: vars.space['6'],
		[borderRadius]: vars.border.radius['1'],
		[borderWidth]: vars.border.width['1'],
	},
});

export const checkbox = styleVariants({
	default: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: size,
		height: size,
		boxSizing: 'border-box',
		borderRadius: borderRadius,
		color: colorContrast,
		borderColor: colorMid,
		borderStyle: 'solid',
		borderWidth: borderWidth,
		zIndex: 0,
		selectors: {
			[`${nativeInput}:not(:checked):hover ~${checkable} &`]: {
				backgroundColor: colorMid,
			},
		},
		transition,
	},
	selected: {
		borderColor: colorAccent,
		backgroundColor: colorAccent,
	},
});

export const icon = style({
	transition: `transform 0.2s ${vars.animation.easing.standard}`,
	selectors: {
		[`${nativeInput}:checked:hover ~${checkable} ${checkbox.selected} &`]: {
			transform: 'scale(0.85)',
		},
	},
});
