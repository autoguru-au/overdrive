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

/**
 * Whether `colour` clears 4.5:1 on `surface`, carrying the colour alongside the
 * verdict so a failure names the hex rather than reporting `false !== true`.
 */
const passesAA = (colour: string, surface: string) => ({
	colour,
	passes: passesAccessibilityContrast({
		colour1: colour,
		colour2: surface,
		level: 'AA' as const,
		textSize: 'SMALL' as const,
	}),
});

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
 * itself, and the `color.link.*` family because each of those follows its own
 * `*OnLight`/`*OnDark` pair rather than `interactive.link*`.
 */
const linkVarsOf = (map: Record<string, string>) =>
	Object.entries(map)
		.filter(
			([name]) =>
				name !== overdriveTokens.color.interactive.onLink &&
				name !== overdriveTokens.color.link.primary &&
				name !== overdriveTokens.color.link.secondary &&
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
			overdriveTokens.color.link.secondary,
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

	// `secondary` is body ink, and body ink is gray900 on a pale page and the
	// fill itself on a dark one — unrepointed it measured 1:1 on gray900.
	it('points secondary linked text at the surface too', () => {
		const { link } = overdriveTokens.color;

		expect(darkSurfaceLinkVars[link.secondary]).toBe(link.secondaryOnDark);
		expect(lightSurfaceLinkVars[link.secondary]).toBe(
			link.secondaryOnLight,
		);
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

	// The resting colour is where a link spends its life, and it clears AA on
	// whatever it sits on in every theme. Where it rests is the rung the whole
	// ramp is anchored to, so it is asserted on its own and without exception.
	it.each([
		['base', baseTokens],
		['neutral', neutralTokens],
		['flat_red', flatRedTokens],
	])(
		'keeps the %s resting link above AA on both surfaces',
		(_name, tokens) => {
			const { link, surface } = tokens.color;

			expect(passesAA(link.primaryOnLight, surface.page)).toEqual({
				colour: link.primaryOnLight,
				passes: true,
			});
			expect(passesAA(link.primaryOnDark, surface.hard)).toEqual({
				colour: link.primaryOnDark,
				passes: true,
			});

			expect(passesAA(link.secondaryOnLight, surface.page)).toEqual({
				colour: link.secondaryOnLight,
				passes: true,
			});
			expect(passesAA(link.secondaryOnDark, surface.hard)).toEqual({
				colour: link.secondaryOnDark,
				passes: true,
			});
		},
	);

	/**
	 * The hovered and pressed rungs, and whether each clears 4.5:1 on the
	 * surface it is pointed at.
	 *
	 * Two of these are `false` on purpose, and both are design decisions taken
	 * on AG-20713 rather than oversights — which is why they are written down
	 * as expected values instead of dropped from the suite. A state that drifts
	 * off the recorded answer still fails, in either direction: an unnoticed
	 * regression and a quiet fix both show up here.
	 *
	 * `base` hover is Figma's green700, 2.81:1 on white. The AA-safe
	 * alternative was green900 — already taken by pressed, which left hover and
	 * pressed identical on a pale page. Design chose the visible ramp over the
	 * measured one; separating them properly needs a new rung between green800
	 * and green900.
	 *
	 * `flat_red` is under the line on both light-surface states for a different
	 * reason: its brand green is vivid enough that green900 is the only rung
	 * above 4.5:1 on white, and the resting colour holds it. Nothing in that
	 * ramp can carry a legible light-surface state.
	 */
	it.each([
		['base', baseTokens, { hover: false, pressed: true }],
		['neutral', neutralTokens, { hover: true, pressed: true }],
		['flat_red', flatRedTokens, { hover: false, pressed: false }],
	])(
		'holds the recorded AA result for every %s link state',
		(_name, tokens, expectedOnLight) => {
			const { link, surface } = tokens.color;

			expect({
				hover: passesAA(link.hoverOnLight, surface.page).passes,
				pressed: passesAA(link.pressedOnLight, surface.page).passes,
			}).toEqual(expectedOnLight);

			// The dark surface carries no exception in any theme. It has the
			// room the light one does not — a state gains contrast there by
			// moving towards the light end of the ramp, where the rungs are.
			expect(passesAA(link.hoverOnDark, surface.hard)).toEqual({
				colour: link.hoverOnDark,
				passes: true,
			});
			expect(passesAA(link.pressedOnDark, surface.hard)).toEqual({
				colour: link.pressedOnDark,
				passes: true,
			});
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
