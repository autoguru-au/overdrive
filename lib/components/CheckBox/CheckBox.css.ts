import { style, styleVariants } from '@vanilla-extract/css';

import { themeContractVars as vars } from '../../themes/theme.css';
import {
	nativeInput,
	checkable,
} from '../private/CheckableBase/CheckableBase.css';

const colorAccent = vars.colours.foreground.body;
const colorContrast = vars.colours.background.body;
const colorMid = vars.colours.background.neutral;
const size = vars.space['6'];
const borderRadius = vars.border.radius['1'];
const borderWidth = vars.border.width['1'];
const transition = `border-color 0.2s ${vars.animation.easing.decelerate} 0s, background-color 0.2s ${vars.animation.easing.decelerate} 0s`;

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
