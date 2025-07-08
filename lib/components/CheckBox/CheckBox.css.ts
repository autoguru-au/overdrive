import { style, styleVariants } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../themes/theme.css';
import {
	nativeInput,
	checkable,
} from '../private/CheckableBase/CheckableBase.css';

const colorAccent = vars.colours.foreground.body;
const colorContrast = vars.colours.background.body;
const colorMid = vars.colours.background.neutral;
const size = vars.space['6'];
const borderRadius = vars.border.radius['sm'];
const borderWidth = vars.border.width['1'];
const transition = `border-color 0.2s ${vars.animation.easing.decelerate} 0s, background-color 0.2s ${vars.animation.easing.decelerate} 0s`;

export const checkbox = styleVariants({
	default: {
		boxSizing: 'border-box',
		zIndex: 0,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		transition,
		borderWidth: borderWidth,
		borderStyle: 'solid',
		borderRadius: borderRadius,
		borderColor: colorMid,
		width: size,
		height: size,
		selectors: {
			[`${nativeInput}:not(:checked):hover ~${checkable} &:not([data-indeterminate])`]:
				{
					backgroundColor: colorMid,
				},
		},
		color: colorContrast,
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
