import {
	createVar,
	globalLayer,
	globalStyle,
	style,
	styleVariants,
} from '@vanilla-extract/css';

import { LAYER_ORDER, cssLayerComponent } from '../../styles/layers.css';
import { overdriveTokens as vars } from '../../themes/theme.css';
import {
	checkable,
	nativeInput,
} from '../private/CheckableBase/CheckableBase.css';

globalLayer(LAYER_ORDER);

/**
 * Figma — Selection controls / Radio button (node 438:15441).
 *
 * Every value below is the variable Figma binds, mapped to its Overdrive token:
 *
 * | State                | Fill                                 | Border                 | Dot                            |
 * | -------------------- | ------------------------------------ | ---------------------- | ------------------------------ |
 * | Default              | `color/background/default`           | `color/border/default` | —                              |
 * | Hover (unselected)   | `color/brand/subtle`                 | `color/brand/solid`    | —                              |
 * | Selected             | `color/brand/solid`                  | same                   | `color/foreground/reverse`     |
 * | Disabled unselected  | `color/background/emphasis/inactive` | `color/border/default` | —                              |
 * | Disabled selected    | `color/background/emphasis/inactive` | `color/border/default` | `color/foreground/placeholder` |
 */
const colorAccent = vars.color.brand.solid;
const colorAccentSubtle = vars.color.brand.subtle;
const colorContrast = vars.color.background.default;
const colorLight = vars.color.background.emphasisInactive;
const colorBorder = vars.color.border.default;
const colorDotDisabled = vars.color.foreground.placeholder;

/**
 * The dot colour reads `brand.onSolid`, not Figma's `color/foreground/reverse`
 * directly. Both resolve to white unbranded, but `onSolid` is the pair derived
 * against the fill — a tenant on a pale brand (amber) gets dark ink here, where
 * `foreground.reverse` would leave an invisible dot on its own accent.
 */
const colorDotOnAccent = vars.color.brand.onSolid;

const borderWidth = vars.border.width['1'];
const easing = vars.animation.easing.decelerate;
const ringTransition = `background-color 0.2s ${easing} 0s, border-color 0.2s ${easing} 0s`;
const dotTransition = `background-color 0.2s ${easing} 0s, transform 0.2s ${vars.animation.easing.standard}`;

/**
 * Figma draws the dot at exactly half the ring at both sizes — 10px inside 20,
 * 8px inside 16 — so one variable drives both and the dot is derived rather
 * than tabulated. There is no 10px step on the space ladder to name instead.
 */
const ringSize = createVar();
const dotSize = `calc(${ringSize} / 2)`;

export const size = styleVariants({
	medium: {
		'@layer': {
			[cssLayerComponent]: {
				vars: {
					[ringSize]: vars.space['5'], // 20px
				},
			},
		},
	},
	small: {
		'@layer': {
			[cssLayerComponent]: {
				vars: {
					[ringSize]: vars.space['4'], // 16px
				},
			},
		},
	},
});

/** The ring sizes the DS-2026 spec publishes. */
export type RadioSize = keyof typeof size;

const hoverRing = {
	backgroundColor: colorAccentSubtle,
	borderColor: colorAccent,
};

export const ring = style({
	'@layer': {
		[cssLayerComponent]: {
			alignItems: 'center',
			backgroundColor: colorContrast,
			borderColor: colorBorder,
			borderRadius: vars.border.radius.full,
			borderStyle: 'solid',
			borderWidth,
			boxSizing: 'border-box',
			display: 'flex',
			height: ringSize,
			justifyContent: 'center',
			transition: ringTransition,
			width: ringSize,
			zIndex: 0,
			selectors: {
				'&[data-active]': {
					backgroundColor: colorAccent,
					borderColor: colorAccent,
				},
				[`${nativeInput}:hover ~${checkable} &:not([data-active]):not([data-disabled])`]:
					hoverRing,
				'&[data-disabled]': {
					backgroundColor: colorLight,
					borderColor: colorBorder,
				},
			},
		},
	},
});

export const dot = style({
	'@layer': {
		[cssLayerComponent]: {
			// The dot is always in the DOM so it can transition; unselected it
			// is simply not painted.
			backgroundColor: 'transparent',
			borderRadius: vars.border.radius.full,
			height: dotSize,
			transition: dotTransition,
			width: dotSize,
			selectors: {
				[`${ring}[data-active] &`]: {
					backgroundColor: colorDotOnAccent,
				},
				[`${ring}[data-disabled][data-active] &`]: {
					backgroundColor: colorDotDisabled,
				},
				[`${nativeInput}:hover ~${checkable} ${ring}[data-active] &`]: {
					transform: 'scale(0.85)',
				},
			},
		},
	},
});

/** Story-only: hover cannot be snapshot, so the matrix forces its appearance. */
export const storyForceHover = style({});

globalStyle(
	`${storyForceHover} ${ring}:not([data-active]):not([data-disabled])`,
	hoverRing,
);
