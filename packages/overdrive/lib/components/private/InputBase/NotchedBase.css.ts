import { style, styleVariants } from '@vanilla-extract/css';

import { vars } from '../../../themes/base/vars.css';

export const root = style({
	transition: `fill 0.2s ${vars.animation.easing.decelerate} 0s`,
});

const borderRegionDefaults = style({
	borderWidth: '1px',
	borderStyle: 'solid',
	display: 'inline-flex',
	transition: `border-color 0.2s ${vars.animation.easing.decelerate} 0s`,
});

const borderVisualDefaults = style({
	borderRadius: vars.border.radius['1'],
	boxShadow: vars.elevation['2'],
});

export const borders = {
	root: {
		default: [
			borderVisualDefaults,
			style({
				zIndex: 2,
				top: 0,
				right: 0,
				left: 0,
			}),
		],
		disabled: style({ boxShadow: 'none' }),
	},
	complete: [
		borderVisualDefaults,
		borderRegionDefaults,
		style({
			borderRadius: `${vars.border.radius['1']}`,
		}),
	],
	leading: [
		borderRegionDefaults,
		style({
			width: vars.space['2'],
			borderRight: 'none',
			borderRadius: `${vars.border.radius['1']} 0 0 ${vars.border.radius['1']}`,
		}),
	],
	middle: [
		borderRegionDefaults,
		style({
			transition: `width 0.15s ${vars.animation.easing.decelerate}, border-color 0.2s ${vars.animation.easing.decelerate} 0s`,
			borderTopWidth: 0,
			borderRightWidth: 0,
			borderLeftWidth: 0,
		}),
	],
	trailing: [
		borderRegionDefaults,
		style({
			flexGrow: 1,
			borderLeft: 'none',
			borderRadius: `0 ${vars.border.radius['1']} ${vars.border.radius['1']} 0`,
		}),
	],
};

export const placeholder = styleVariants({
	default: {
		lineHeight: 1,
		top: 0,
		left: 0,
		transition: `color 0.2s ${vars.animation.easing.decelerate} 0s, transform 0.2s ${vars.animation.easing.decelerate} 0s`,
		transformOrigin: 'top left',
	},
	mutedLabelStyles: {
		color: vars.typography.colour.muted,
	},
});

const active_scaling_factor = 0.7777;
const calcPlaceholderTranslate = (
	notched: Boolean,
	prefixed: Boolean,
): string => {
	if (notched) {
		return `calc(${vars.space['2']} + ${vars.space['2']}), calc(-0.5 * ${active_scaling_factor} * ${vars.typography.size['4'].fontSize})`;
	}

	return `${
		prefixed
			? `calc(${vars.space['7']} + ${vars.space['3']})`
			: vars.typography.size['4'].fontSize
	}, calc((${vars.space['8']} - ${vars.typography.size['4'].fontSize}) / 2)`;
};

export const placeholderPlacement = styleVariants({
	default: {
		transform: `translate(${calcPlaceholderTranslate(
			false,
			false,
		)}) scale(1)`,
	},
	defaultPrefixed: {
		transform: `translate(${calcPlaceholderTranslate(
			false,
			true,
		)}) scale(1)`,
	},
	shifted: {
		zIndex: 2,
		transform: `translate(${calcPlaceholderTranslate(
			true,
			false,
		)}) scale(${active_scaling_factor})`,
	},
});
