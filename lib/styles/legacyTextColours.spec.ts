import { describe, expect, it } from 'vitest';

import { tokens as baseTokens } from '../themes/base/tokens';
import { tokens as flatRedTokens } from '../themes/flat_red/tokens';
import { tokens as neutralTokens } from '../themes/neutral/tokens';

import { LEGACY_TEXT_COLOURS } from './legacyTextColours';

/**
 * Guards the AG-20568 removal of `typography.colour.*`.
 *
 * The deprecated public `colour` prop surface (Text/Heading + the `colour` /
 * `backgroundColour` sprinkles props) survives the token removal only because
 * `LEGACY_TEXT_COLOURS` re-points all 14 legacy values at non-deprecated
 * `color.*` tokens. Snapshots record only the atomic-class KEY (e.g.
 * `color_muted`), never the resolved CSS var, so they'd stay green even if a
 * value silently became `undefined` — this spec is the only guard.
 *
 * Key ORDER is asserted too: it drives vanilla-extract's atomic-class
 * generation order for `sprinklesLegacyText`, so reordering churns every
 * generated class name.
 */
const EXPECTED_KEYS = [
	'primary',
	'brand',
	'secondary',
	'shine',
	'link',
	'dark',
	'white',
	'muted',
	'neutral',
	'light',
	'danger',
	'warning',
	'success',
	'information',
] as const;

const themes = [
	['base', baseTokens],
	['neutral', neutralTokens],
	['flat_red', flatRedTokens],
] as const;

describe('LEGACY_TEXT_COLOURS', () => {
	it('exposes the 14 legacy keys in the pre-removal contract order', () => {
		expect(Object.keys(LEGACY_TEXT_COLOURS)).toStrictEqual([
			...EXPECTED_KEYS,
		]);
	});

	it.each(EXPECTED_KEYS)(
		'`%s` resolves to a themeable CSS var reference (never undefined)',
		(key) => {
			const value = LEGACY_TEXT_COLOURS[key];

			expect(typeof value).toBe('string');
			expect(value).toMatch(/^var\(--.+\)$/);
		},
	);
});

describe('typography.colour removal (AG-20568)', () => {
	it.each(themes)('%s theme no longer defines typography.colour', (_, t) => {
		// `typography` itself may be absent once a theme's only override was
		// the removed `colour` block.
		expect(t.typography ?? {}).not.toHaveProperty('colour');
	});
});
