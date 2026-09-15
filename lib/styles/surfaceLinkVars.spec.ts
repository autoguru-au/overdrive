import { describe, expect, it } from 'vitest';

import { themes } from '../themes';
import { colourMap } from '../themes/base/colours';
import { tokens as baseTokens } from '../themes/base/tokens';
import { tokens as flatRedTokens } from '../themes/flat_red/tokens';
import {
	getContrastRatio,
	passesAccessibilityContrast,
} from '../themes/helpers';
import { tokens as neutralTokens } from '../themes/neutral/tokens';
import { overdriveTokens } from '../themes/theme.css';

import {
	darkSurfaceLinkVars,
	darkSurfaceValues,
	lightSurfaceLinkVars,
	lightSurfaceValues,
	withSurfaceLinkVars,
} from './surfaceLinkVars';

/** Mirrors `isDarkSurface` in useColorOverrides — `getContrastRatio` is min/max. */
const isDark = (colour: string) =>
	getContrastRatio(colour, '#ffffff') < getContrastRatio(colour, '#000000');

/**
 * The base theme's real hex for a `backgroundColor` value name. `color.gamut`
 * holds var() references, so the ramp comes from the colour map itself; the
 * semantic surfaces already carry literals.
 */
const resolve = (name: string): string => {
	const gray = Object.fromEntries(
		Object.entries(colourMap.gray).map(([step, hex]) => [
			`gray${step}`,
			hex,
		]),
	);
	const byName: Record<string, string> = {
		...baseTokens.color.surface,
		...baseTokens.color.background,
		...gray,
		white: colourMap.white,
		black900: colourMap.gray['900'],
	};
	const hex = byName[name];
	if (!/^#[0-9a-f]{6}$/i.test(hex ?? ''))
		throw new Error(`${name} did not resolve to a plain hex: ${hex}`);
	return hex;
};

/**
 * The legacy link vars a surface repoints, in declaration order. `onLink` is
 * excluded because it holds the colour drawn *on* a link rather than the link
 * itself, and `color.link.primary` because it follows its own
 * `primaryOnLight`/`primaryOnDark` pair rather than `interactive.link*`.
 */
const linkVarsOf = (map: Record<string, string>) =>
	Object.entries(map)
		.filter(
			([name]) =>
				name !== overdriveTokens.color.interactive.onLink &&
				name !== overdriveTokens.color.link.primary &&
				name !== overdriveTokens.color.link.hover &&
				name !== overdriveTokens.color.link.pressed,
		)
		.map(([, value]) => value);

describe('surface-aware link vars', () => {
	it('points every link var a dark surface owns at linkOnDark', () => {
		const { interactive } = overdriveTokens.color;
		expect(linkVarsOf(darkSurfaceLinkVars)).toEqual([
			interactive.linkOnDark,
			interactive.linkOnDark,
			interactive.linkOnDark,
		]);
	});

	it('points every link var a light surface owns at linkOnLight', () => {
		const { interactive } = overdriveTokens.color;
		expect(linkVarsOf(lightSurfaceLinkVars)).toEqual([
			interactive.linkOnLight,
			interactive.linkOnLight,
			interactive.linkOnLight,
		]);
	});

	it('covers every var links and focus rings actually read', () => {
		expect(Object.keys(darkSurfaceLinkVars)).toEqual([
			overdriveTokens.colours.foreground.link,
			overdriveTokens.typography.colour.link,
			overdriveTokens.color.interactive.link,
			overdriveTokens.color.interactive.onLink,
			overdriveTokens.color.link.primary,
			overdriveTokens.color.link.hover,
			overdriveTokens.color.link.pressed,
		]);
	});

	// DS-2026 linked text reads `color.link.*`, which the legacy pair does not
	// cover. Without a surface repointing it, `TextLink` renders the light
	// green on a gray900 fill — 3.39:1, where the legacy token it replaced was
	// surface-corrected and cleared AA.
	it('points linked text at the surface-appropriate value', () => {
		const { link } = overdriveTokens.color;

		expect(darkSurfaceLinkVars[link.primary]).toBe(link.primaryOnDark);
		expect(lightSurfaceLinkVars[link.primary]).toBe(link.primaryOnLight);
	});

	// A state earns its contrast by moving away from the fill it sits on, which
	// points opposite ways on the two surfaces. Repointing only the resting
	// colour left the dark-surface ramp running on white, where hover and
	// pressed measured as low as 1.62:1.
	it('points the hovered and pressed states at the surface too', () => {
		const { link } = overdriveTokens.color;

		expect(darkSurfaceLinkVars[link.hover]).toBe(link.hoverOnDark);
		expect(darkSurfaceLinkVars[link.pressed]).toBe(link.pressedOnDark);
		expect(lightSurfaceLinkVars[link.hover]).toBe(link.hoverOnLight);
		expect(lightSurfaceLinkVars[link.pressed]).toBe(link.pressedOnLight);
	});

	// The whole ramp has to clear AA, not just where it rests. Hover and
	// pressed are states a reader actually triggers, and WCAG 1.4.3 does not
	// exempt them.
	it.each([
		['base', baseTokens],
		['neutral', neutralTokens],
		['flat_red', flatRedTokens],
	])(
		'keeps every %s linked-text state above AA on both surfaces',
		(_name, tokens) => {
			const { link, surface } = tokens.color;

			const onLight = [
				link.primaryOnLight,
				link.hoverOnLight,
				link.pressedOnLight,
			];
			const onDark = [
				link.primaryOnDark,
				link.hoverOnDark,
				link.pressedOnDark,
			];

			for (const colour1 of onLight)
				expect({
					colour1,
					passes: passesAccessibilityContrast({
						colour1,
						colour2: surface.page,
						level: 'AA',
						textSize: 'SMALL',
					}),
				}).toEqual({ colour1, passes: true });

			for (const colour1 of onDark)
				expect({
					colour1,
					passes: passesAccessibilityContrast({
						colour1,
						colour2: surface.hard,
						level: 'AA',
						textSize: 'SMALL',
					}),
				}).toEqual({ colour1, passes: true });
		},
	);

	// gray900 is the darkest surface in `darkSurfaceValues` and `surface.hard`
	// resolves to it, so it is the value `primaryOnDark` has to clear.
	it.each([
		['base', baseTokens],
		['neutral', neutralTokens],
		['flat_red', flatRedTokens],
	])(
		'gives %s a linked-text primary that clears AA on a dark fill',
		(_name, tokens) => {
			expect(
				passesAccessibilityContrast({
					colour1: tokens.color.link.primaryOnDark,
					colour2: tokens.color.surface.hard,
					level: 'AA',
					textSize: 'SMALL',
				}),
			).toBe(true);
		},
	);

	// TextLink `muted` floods its line with the link colour and draws the label
	// on top. The link is shaded away from its surface, so the label has to be
	// drawn back towards it — the opposite pole, not always white.
	it('draws on-link content towards the surface it sits on', () => {
		const { onLink } = overdriveTokens.color.interactive;
		expect(lightSurfaceLinkVars[onLink]).toBe(
			overdriveTokens.color.foreground.reverse,
		);
		expect(darkSurfaceLinkVars[onLink]).toBe(
			overdriveTokens.color.foreground.primary,
		);
	});

	// The mid greys are why each list is bounded. A link tuned to clear AA on
	// gray400 goes almost black; one tuned for gray500 goes almost white.
	it.each(['gray400', 'gray500', 'gray600'])(
		'leaves %s unclaimed rather than serving a value tuned elsewhere',
		(name) => {
			expect(darkSurfaceValues).not.toContain(name);
			expect(lightSurfaceValues).not.toContain(name);
		},
	);

	// The lists are hand-written because a sprinkle value name is static while
	// its colour is not. These pin them to the values the base theme ships, so
	// repointing `soft` to a pale grey fails here rather than in production.
	it.each(darkSurfaceValues)('classifies %s as a dark surface', (name) => {
		expect(isDark(resolve(name))).toBe(true);
	});

	it.each(lightSurfaceValues)('classifies %s as a light surface', (name) => {
		expect(isDark(resolve(name))).toBe(false);
	});

	it('never puts a value in both lists', () => {
		const overlap = darkSurfaceValues.filter((name) =>
			(lightSurfaceValues as readonly string[]).includes(name),
		);
		expect(overlap).toEqual([]);
	});

	describe('what a Box actually gets', () => {
		const applied = withSurfaceLinkVars({
			gray900: '#212338',
			reverse: '#212338',
			white: '#ffffff',
			emphasisInactive: '#eef0f2',
			danger: '#d42b26',
			transparent: 'transparent',
		});

		// This is the regression guard: before it existed, the dark-surface
		// colour was computed correctly and then reachable only through a class
		// no consumer had applied. `backgroundColor="gray900"` is what all eight
		// MFE headers already render.
		it('gives a dark-filled Box the dark-surface link colour, unprompted', () => {
			expect(applied.gray900.vars).toBe(darkSurfaceLinkVars);
			expect(applied.reverse.vars).toBe(darkSurfaceLinkVars);
		});

		it('resets on a pale Box, so nesting inside a dark one recovers', () => {
			expect(applied.white.vars).toBe(lightSurfaceLinkVars);
			expect(applied.emphasisInactive.vars).toBe(lightSurfaceLinkVars);
		});

		it('stays out of the way on a fill it cannot judge', () => {
			expect(applied.danger).not.toHaveProperty('vars');
			expect(applied.transparent).not.toHaveProperty('vars');
		});

		it('leaves the background itself untouched', () => {
			expect(applied.gray900.backgroundColor).toBe('#212338');
			expect(applied.danger.backgroundColor).toBe('#d42b26');
		});
	});

	// A surface repoints links at `linkOnLight`/`linkOnDark` in EVERY theme,
	// branded or not. A theme that moves its link colour but leaves the pair
	// inherited from base would paint base green links inside a dark Box next
	// to its own colour everywhere else — flat_red and neutral both move it.
	describe.each(themes)(
		'$name keeps its own link colour on every surface',
		({ tokens }) => {
			it('matches linkOnLight to the theme link colour', () => {
				expect(tokens.color.interactive.linkOnLight).toBe(
					tokens.colours.foreground.link,
				);
			});

			it('matches linkOnDark to the theme link colour', () => {
				expect(tokens.color.interactive.linkOnDark).toBe(
					tokens.colours.foreground.link,
				);
			});
		},
	);
});
