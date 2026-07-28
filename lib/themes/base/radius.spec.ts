import { describe, expect, it } from 'vitest';

import { tokens as flatRedTokens } from '../flat_red/tokens';
import { tokens as neutralTokens } from '../neutral/tokens';

import { tokens as baseTokens } from './tokens';

/**
 * Pins the surviving `border.radius` ladder to exact values. Snapshots only
 * record the atomic-class KEY (e.g. `borderRadius_md`), not the rendered
 * value, so they pass whether `md` is 8px or 80px — this spec is the only
 * guard that the key→value contract can't silently drift.
 *
 * It also pins the AG-20568 removal of the redundant `sm` and `'1'` aliases.
 * Both theme overrides are deepmerged ONTO base, so a key that comes back in
 * base silently reappears in every theme — hence the cross-theme parity check.
 */
const EXPECTED_RADIUS = {
	none: 'none',
	min: '2px',
	md: '8px',
	lg: '12px',
	xl: '16px',
	'2xl': '24px',
	pill: '1000000000px',
	full: '50%',
	xsmall: '4px',
	small: '8px',
	medium: '12px',
	large: '16px',
	xlarge: '20px',
} as const;

const REMOVED_KEYS = ['sm', '1'] as const;

const themes = [
	['base', baseTokens],
	['neutral', neutralTokens],
	['flat_red', flatRedTokens],
] as const;

describe('border.radius token ladder', () => {
	it('base theme maps every key to its exact value', () => {
		expect(baseTokens.border.radius).toStrictEqual(EXPECTED_RADIUS);
	});

	describe.each(themes)('%s theme', (_name, tokens) => {
		it.each(REMOVED_KEYS)(
			'no longer exposes the removed `%s` alias (AG-20568)',
			(key) => {
				expect(tokens.border.radius).not.toHaveProperty(key);
			},
		);

		it('exposes exactly the base key set (deepmerge parity)', () => {
			expect(Object.keys(tokens.border.radius).sort()).toStrictEqual(
				Object.keys(EXPECTED_RADIUS).sort(),
			);
		});
	});

	it('neutral theme inherits the base ladder unchanged via deepmerge', () => {
		expect(neutralTokens.border.radius).toStrictEqual(EXPECTED_RADIUS);
	});

	it('flat_red squares off only the small end of the ladder', () => {
		expect(flatRedTokens.border.radius).toStrictEqual({
			...EXPECTED_RADIUS,
			min: 'none',
			md: 'none',
			xsmall: 'none',
			small: 'none',
		});
	});
});
