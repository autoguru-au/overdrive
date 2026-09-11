import { mapValues } from 'es-toolkit';

import { overdriveTokens as tokens } from '../themes/theme.css';

/**
 * A tenant brand reaches the app as one inline CSS var on the provider, so a
 * single link colour has to serve both a white page and a gray-900 header —
 * and no value clears 4.5:1 on both. `useColorOverrides` derives two from the
 * same hue and writes them to `linkOnLight` / `linkOnDark`; a painted surface
 * then points the vars links actually read at whichever of the two suits it.
 *
 * Both directions are declared, not just the dark one: a pale card nested
 * inside a dark header has to reset, or it inherits the header's link colour.
 */
const linkVarsPointingAt = (link: string, onLink: string) => ({
	// eslint-disable-next-line no-restricted-syntax -- RETAINED: these are the vars today's links and `focusOutline` actually read; a surface has to redeclare them until C-final deletes the legacy contract (docs/ds2026-plan/track-c.md §1.9).
	[tokens.colours.foreground.link]: link,
	// eslint-disable-next-line no-restricted-syntax -- RETAINED: same as above; read by TextLink and the `colour="link"` sprinkle.
	[tokens.typography.colour.link]: link,
	[tokens.color.interactive.link]: link,
	// Anything drawn ON a link-coloured fill — TextLink `muted`'s hover, which
	// floods the line with the link colour. The link is shaded away from its
	// surface, so on a pale surface it is dark and wants pale content, and on a
	// dark surface it is light and wants dark content.
	[tokens.color.interactive.onLink]: onLink,
});

export const darkSurfaceLinkVars = linkVarsPointingAt(
	tokens.color.interactive.linkOnDark,
	tokens.color.foreground.primary,
);

export const lightSurfaceLinkVars = linkVarsPointingAt(
	tokens.color.interactive.linkOnLight,
	tokens.color.foreground.reverse,
);

/**
 * The surfaces each derived link colour is guaranteed on.
 *
 * Membership is by luminance against the black/white poles — the same test
 * `deriveLinkForSurface` uses to choose a shading direction — and each list is
 * bounded by what one colour can actually serve. `useColorOverrides` tunes
 * `linkOnLight` against the *darkest* member of the light list and `linkOnDark`
 * against the *lightest* member of the dark list, so every surface named here
 * clears 4.5:1, not just the one the derivation happened to be pointed at.
 *
 * The mid greys (gray400–gray600) are in neither list on purpose. A link tuned
 * to clear AA on gray400 has to go almost black, and one tuned for gray500 has
 * to go almost white — either abandons the brand. They declare nothing and
 * inherit, as do tinted fills (danger, info, a tenant brand), where no derived
 * value is tuned for the hue and claiming one would be a guess.
 */
export const lightSurfaceValues = [
	'white',
	'gray100',
	'gray200',
	'gray300',
	'page', // color.surface.page — white
	'default', // color.background.default — white
	'inactive', // color.background.inactive — gray300
	'emphasisInactive', // color.background.emphasisInactive — gray200
	'emphasisLight', // color.background.emphasisLight — gray100
] as const;

export const darkSurfaceValues = [
	'gray700',
	'gray800',
	'gray900',
	'black900', // deprecated alias of gray900
	'hard', // color.surface.hard — gray900
	'soft', // color.surface.soft — gray700
	'reverse', // color.background.reverse — gray900
] as const;

const dark = new Set<string>(darkSurfaceValues);
const light = new Set<string>(lightSurfaceValues);

/**
 * A link's legibility is decided by the nearest painted ancestor, not by the
 * page. Every background value we can classify therefore carries the link vars
 * suited to its own fill, so `<Box backgroundColor="gray900">` gets the
 * dark-surface link colour with no opt-in and no class to remember.
 */
export const withSurfaceLinkVars = (values: Record<string, string>) =>
	mapValues(values, (backgroundColor, name) => {
		if (dark.has(name))
			return { backgroundColor, vars: darkSurfaceLinkVars };
		if (light.has(name))
			return { backgroundColor, vars: lightSurfaceLinkVars };
		return { backgroundColor };
	});
