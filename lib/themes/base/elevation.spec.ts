import { describe, expect, it } from 'vitest';

import { tokens as flatRedTokens } from '../flat_red/tokens';
import { tokens as neutralTokens } from '../neutral/tokens';

import { tokens as baseTokens } from './tokens';

/**
 * Pins the DS-2026 `elevation` ladder to its exact shadow strings. Snapshots
 * only record the atomic-class KEY (e.g. `boxShadow_z2`), never the resolved
 * shadow, so they pass whether `z2` is a 10px blur or nothing at all — this
 * spec is the only guard that the key→shadow contract can't silently drift.
 *
 * It also pins the AG-20568 removal of the numeric `'1'`–`'5'` aliases, and
 * guards the deepmerge trap: themes `deepmerge(baseTokens, …)`, so a key that
 * comes back in base silently reappears in every theme.
 */
const EXPECTED_ELEVATION = {
	none: 'none',
	z1: '0px 1px 5px 0px rgba(0,0,0,0.03), 0px 2px 2px 0px rgba(0,0,0,0.03), 0px 3px 1px -2px rgba(0,0,0,0.05)',
	z2: '0px 1px 10px 0px rgba(0,0,0,0.03), 0px 4px 5px 0px rgba(0,0,0,0.03), 0px 2px 4px -1px rgba(0,0,0,0.05)',
	z3: '0px 3px 14px 2px rgba(0,0,0,0.03), 0px 8px 10px 1px rgba(0,0,0,0.03), 0px 5px 5px -3px rgba(0,0,0,0.05)',
	z4: '0px 6px 30px 5px rgba(0,0,0,0.03), 0px 16px 24px 2px rgba(0,0,0,0.03), 0px 8px 10px -5px rgba(0,0,0,0.05)',
} as const;

/** flat_red flattens every non-`none` step to a fully transparent shadow. */
const FLAT_ELEVATION = '0 0 0 0 rgba(0, 0, 0, 0.0)';

const REMOVED_KEYS = ['1', '2', '3', '4', '5'] as const;

describe('elevation token ladder', () => {
	it('base theme maps every key to its exact shadow value', () => {
		expect(baseTokens.elevation).toStrictEqual(EXPECTED_ELEVATION);
	});

	it.each(REMOVED_KEYS)(
		'base theme no longer exposes the removed `%s` alias (AG-20568)',
		(key) => {
			expect(baseTokens.elevation).not.toHaveProperty(key);
		},
	);

	it('every theme exposes the same elevation keys (deepmerge parity)', () => {
		const expectedKeys = Object.keys(EXPECTED_ELEVATION).sort();

		expect(Object.keys(baseTokens.elevation).sort()).toStrictEqual(
			expectedKeys,
		);
		expect(Object.keys(neutralTokens.elevation).sort()).toStrictEqual(
			expectedKeys,
		);
		expect(Object.keys(flatRedTokens.elevation).sort()).toStrictEqual(
			expectedKeys,
		);
	});

	it('neutral theme inherits the base ladder unchanged via deepmerge', () => {
		expect(neutralTokens.elevation).toStrictEqual(EXPECTED_ELEVATION);
	});

	it('flat_red theme flattens z1–z4 and keeps `none` as true none', () => {
		expect(flatRedTokens.elevation.none).toBe('none');
		expect(flatRedTokens.elevation.z1).toBe(FLAT_ELEVATION);
		expect(flatRedTokens.elevation.z2).toBe(FLAT_ELEVATION);
		expect(flatRedTokens.elevation.z3).toBe(FLAT_ELEVATION);
		expect(flatRedTokens.elevation.z4).toBe(FLAT_ELEVATION);
	});
});
