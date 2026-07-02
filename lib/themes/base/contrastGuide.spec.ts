import { describe, expect, it } from 'vitest';

import { tokens as flatRedTokens } from '../flat_red/tokens';
import { getContrastRatio } from '../helpers';
import { tokens as neutralTokens } from '../neutral/tokens';

import { contrastGuide, contrastGuideColour } from './contrastGuide';
import { tokens as baseTokens } from './tokens';

// getContrastRatio returns the inverted (min/max) ratio; convert to the
// conventional WCAG ">= 4.5" form
const ratio = (foreground: string, background: string) =>
	1 / getContrastRatio(foreground, background);

const allCombos = Object.values(contrastGuide).flat();
const label = ({ foreground, background }: (typeof allCombos)[number]) =>
	`${foreground} on ${background}`;

// Design-approved exceptions that sit below even the 3:1 non-text threshold.
// Flagged with the design team — remove entries here once the palette or the
// guide is adjusted.
const KNOWN_BELOW_ICON_THRESHOLD = new Set(['green-600 on white']);

describe('contrast guide', () => {
	describe.each(allCombos.filter((combo) => combo.usage === 'text'))(
		'text combo $foreground on $background',
		(combo) => {
			it('passes WCAG AA for normal text (4.5:1)', () => {
				expect(
					ratio(
						contrastGuideColour(combo.foreground),
						contrastGuideColour(combo.background),
					),
				).toBeGreaterThanOrEqual(4.5);
			});
		},
	);

	describe.each(allCombos.filter((combo) => combo.usage !== 'text'))(
		'conditional combo $foreground on $background ($usage)',
		(combo) => {
			it('meets the 3:1 non-text threshold (or is a documented exception)', () => {
				const value = ratio(
					contrastGuideColour(combo.foreground),
					contrastGuideColour(combo.background),
				);
				if (KNOWN_BELOW_ICON_THRESHOLD.has(label(combo))) {
					expect(value).toBeLessThan(3);
				} else {
					expect(value).toBeGreaterThanOrEqual(3);
				}
			});
		},
	);
});

type Tokens = typeof baseTokens;

// The foreground/background pairings each theme's tokens are intended to
// produce in components
const tokenPairs = (tokens: Tokens): Array<[string, string, string]> => {
	const { surface, content } = tokens.color;
	return [
		['content.normal on surface.page', content.normal, surface.page],
		['content.soft on surface.page', content.soft, surface.page],
		['content.inverse on surface.hard', content.inverse, surface.hard],
		['content.inverse on surface.soft', content.inverse, surface.soft],
		['content.info on surface.page', content.info, surface.page],
		['content.danger on surface.page', content.danger, surface.page],
		['content.success on surface.page', content.success, surface.page],
		['content.warning on surface.page', content.warning, surface.page],
		...Object.entries(tokens.colours.intent).flatMap(
			([name, intent]): Array<[string, string, string]> => [
				[
					`intent.${name} foreground on background.standard`,
					intent.foreground,
					intent.background.standard,
				],
				[
					`intent.${name} foreground on background.strong`,
					intent.foreground,
					intent.background.strong,
				],
			],
		),
	];
};

// Pairings that do not currently meet AA under the Design System 2026 ramps.
// Listed with the design team via AG-19959 — remove entries as token values
// are corrected. Any NEW failure (or unexpected pass) breaks this suite.
const KNOWN_AA_FAILURES: Record<string, string[]> = {
	base: [
		'content.success on surface.page',
		'content.warning on surface.page',
		'intent.brand foreground on background.standard',
		'intent.primary foreground on background.standard',
		'intent.primary foreground on background.strong',
		'intent.shine foreground on background.standard',
		'intent.shine foreground on background.strong',
		'intent.success foreground on background.standard',
		'intent.warning foreground on background.standard',
		'intent.warning foreground on background.strong',
	],
	flat_red: [
		'content.success on surface.page',
		'content.warning on surface.page',
		'intent.brand foreground on background.standard',
		'intent.primary foreground on background.standard',
		'intent.shine foreground on background.standard',
		'intent.shine foreground on background.strong',
		'intent.success foreground on background.standard',
		'intent.warning foreground on background.standard',
		'intent.warning foreground on background.strong',
	],
	neutral: [
		'content.success on surface.page',
		'content.warning on surface.page',
		'intent.brand foreground on background.standard',
		'intent.shine foreground on background.standard',
		'intent.shine foreground on background.strong',
		'intent.success foreground on background.standard',
		'intent.warning foreground on background.standard',
		'intent.warning foreground on background.strong',
	],
};

describe.each([
	['base', baseTokens],
	['flat_red', flatRedTokens as Tokens],
	['neutral', neutralTokens as Tokens],
])('theme token audit: %s', (themeName, tokens) => {
	it('has no undocumented AA failures in intended pairings', () => {
		const failures = tokenPairs(tokens)
			.filter(([, foreground, background]) => {
				return ratio(foreground, background) < 4.5;
			})
			.map(([name]) => name)
			.sort();
		expect(failures).toEqual([...KNOWN_AA_FAILURES[themeName]].sort());
	});
});
