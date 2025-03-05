import { style, styleVariants } from '@vanilla-extract/css';

import { themeContractVars as vars } from '../../themes/theme.css';
import {
	nativeInput,
	checkable,
} from '../private/CheckableBase/CheckableBase.css';

export const checkbox = styleVariants({
	default: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: vars.space['6'],
		height: vars.space['6'],
		boxSizing: 'border-box',
		borderRadius: vars.border.radius['1'],
		color: vars.colours.gamut.white,
		borderColor: vars.colours.gamut.gray300,
		borderStyle: 'solid',
		borderWidth: vars.border.width['1'],
		transition: `border-color 0.2s ${vars.animation.easing.decelerate} 0s, background-color 0.2s ${vars.animation.easing.decelerate} 0s`,
		zIndex: 0,
		selectors: {
			[`${nativeInput}:not(:checked):hover ~${checkable} &`]: {
				backgroundColor: vars.colours.gamut.gray300,
			},
			[`${nativeInput}:focus-visible ~${checkable} &`]: {
				outline: 'solid 2px',
				outlineOffset: '2px',
				outlineColor: vars.colours.foreground.link,
			},
		},
	},
	selected: {
		borderColor: vars.colours.gamut.gray900,
		backgroundColor: vars.colours.gamut.gray900,
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
