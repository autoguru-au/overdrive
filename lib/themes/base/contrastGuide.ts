import { colourMap } from './colours';

/**
 * The AutoGuru Design System 2026 contrast guide.
 *
 * Encodes the Figma "Contrast guide" frame: the only foreground-on-background
 * colour combinations approved by design. Text combos meet WCAG AA (4.5:1);
 * `icon-only` and `inactive-only` combos are conditional exceptions and must
 * not be used for regular text.
 *
 * Do not use any colour combination that is not listed here.
 *
 * @see https://www.figma.com/design/ZkQlQcJkF7NTnZomVrPRN5/AutoGuru-Design-System-2026?node-id=360-12804
 */

export type ContrastUsage = 'text' | 'icon-only' | 'inactive-only';

type Hue = 'gray' | 'green' | 'blue' | 'yellow' | 'red';
type Step =
	| '100'
	| '200'
	| '300'
	| '400'
	| '500'
	| '600'
	| '700'
	| '800'
	| '900';

/** A palette reference in design notation, e.g. `green-900`. */
export type ContrastColourToken = `${Hue}-${Step}` | 'white';

export interface ContrastCombo {
	foreground: ContrastColourToken;
	background: ContrastColourToken;
	usage: ContrastUsage;
}

/** Resolves a contrast-guide token to its hex value in `colourMap`. */
export const contrastGuideColour = (token: ContrastColourToken): string => {
	if (token === 'white') return colourMap.white;
	const [hue, step] = token.split('-') as [Hue, Step];
	return colourMap[hue][step];
};

const combos = (
	foreground: ContrastColourToken,
	backgrounds: ContrastColourToken[],
	usage: ContrastUsage = 'text',
): ContrastCombo[] =>
	backgrounds.map((background) => ({ foreground, background, usage }));

const onWhite = (
	foregrounds: ContrastColourToken[],
	usage: ContrastUsage = 'text',
): ContrastCombo[] =>
	foregrounds.map((foreground) => ({
		foreground,
		background: 'white',
		usage,
	}));

/**
 * Every approved combination, grouped by the background's ramp. Order within
 * each group follows the Figma chart (darkest background first).
 */
export const contrastGuide: Record<Hue, ContrastCombo[]> = {
	green: [
		...combos('white', ['green-900', 'green-800']),
		...onWhite(['green-900', 'green-800']),
		...combos('gray-900', [
			'green-600',
			'green-500',
			'green-400',
			'green-300',
		]),
		...onWhite(['green-600'], 'icon-only'),
		...combos('green-900', ['green-200', 'green-100']),
	],
	yellow: [
		...combos('gray-900', [
			'yellow-900',
			'yellow-800',
			'yellow-700',
			'yellow-600',
			'yellow-500',
			'yellow-400',
			'yellow-300',
			'yellow-200',
			'yellow-100',
		]),
		...combos('red-900', [
			'yellow-500',
			'yellow-400',
			'yellow-300',
			'yellow-200',
			'yellow-100',
		]),
	],
	gray: [
		...combos('white', [
			'gray-900',
			'gray-800',
			'gray-700',
			'gray-600',
			'gray-500',
		]),
		...onWhite([
			'gray-900',
			'gray-800',
			'gray-700',
			'gray-600',
			'gray-500',
		]),
		...onWhite(['gray-400'], 'inactive-only'),
		...combos('gray-900', ['gray-300', 'gray-200', 'gray-100']),
	],
	blue: [
		...combos('white', [
			'blue-900',
			'blue-800',
			'blue-700',
			'blue-600',
			'blue-500',
		]),
		...onWhite(['blue-900', 'blue-800', 'blue-700', 'blue-600']),
		...combos('gray-900', ['blue-200', 'blue-100']),
		...combos('blue-900', ['blue-200', 'blue-100']),
	],
	red: [
		...combos('white', [
			'red-900',
			'red-800',
			'red-700',
			'red-600',
			'red-500',
		]),
		...onWhite(['red-900', 'red-800', 'red-700']),
		...onWhite(['red-600'], 'icon-only'),
		...combos('gray-900', ['red-200', 'red-100']),
		...combos('red-900', ['red-200', 'red-100']),
	],
};
