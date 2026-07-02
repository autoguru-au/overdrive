import type { ColourMap } from '../';

/**
 * Neutral / greyscale ramp. In AutoGuru Design System 2026 the darkest step
 * (`gray/900`) is the brand "Tarmac Black".
 */
const gray = {
	'900': '#212338',
	'800': '#34384c',
	'700': '#484c5f',
	'600': '#5c6172',
	'500': '#6c7283',
	'400': '#8f95a1',
	'300': '#d4d9dd',
	'200': '#eef0f2',
	'100': '#fafbfc',
};

export const colourMapWithoutWhite = {
	/**
	 * @deprecated The standalone `black` ramp is removed in AutoGuru Design
	 * System 2026 — "Tarmac Black" is now `gray/900`. `black` is aliased to
	 * `gray` for backwards compatibility and will be removed in a future major.
	 * Use `gray*` instead.
	 */
	black: gray,
	gray,
	green: {
		'900': '#00574c',
		'800': '#18856f',
		'700': '#03af83',
		'600': '#01c68c',
		'500': '#00dda5',
		'400': '#36e5aa',
		'300': '#71edc2',
		'200': '#e3f8f0',
		'100': '#f2fdf9',
	},
	blue: {
		'900': '#0d47a1',
		'800': '#0d4bb7',
		'700': '#0d50ce',
		'600': '#0d54e5',
		'500': '#0d59fc',
		'400': '#4a86ff',
		'300': '#81afff',
		'200': '#bad4ff',
		'100': '#f3f8ff',
	},
	yellow: {
		'900': '#f38e29',
		'800': '#f69a1f',
		'700': '#f9a715',
		'600': '#fcb30b',
		'500': '#ffc001',
		'400': '#ffcf3d',
		'300': '#ffde79',
		'200': '#ffedb5',
		'100': '#fffcf2',
	},
	red: {
		'900': '#780502',
		'800': '#96110e',
		'700': '#b51e1a',
		'600': '#d42b26',
		'500': '#e12e28',
		'400': '#e85f5b',
		'300': '#ef918e',
		'200': '#ffd4d4',
		'100': '#fdf4f4',
	},
} satisfies ColourMap;

export const colourMap = {
	...colourMapWithoutWhite,
	white: '#ffffff',
} satisfies ColourMap;
export const secondaryForeground = colourMap.gray['900'];
