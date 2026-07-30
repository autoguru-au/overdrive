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
		// the tick colour belongs here, not on `default`: the Icon is rendered
		// unconditionally and is merely invisible while unchecked (page
		// background on page background). An on-brand colour on `default` would
		// make the tick visible on unchecked boxes for any tenant whose brand
		// is not the page background.
		color: vars.color.brand.onSolid,
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
