import { describe, expect, it } from 'vitest';

import { tokens as flatRedTokens } from '../flat_red/tokens';
import { tokens as neutralTokens } from '../neutral/tokens';

import { tokens as baseTokens } from './tokens';

/**
 * Pins the DS-2026 `space` ladder to exact pixel values. Snapshots only record
 * the atomic-class KEY (e.g. `marginTop_9`), not the rendered px, so they pass
 * whether `9` is 48px or 480px — this spec is the only guard that the key→px
 * contract can't silently drift. Update it deliberately when the scale changes.
 */
const EXPECTED_SPACE = {
	none: '0px',
	'0': '0px',
	'1': '4px',
	'2': '8px',
	'3': '12px',
	'4': '16px',
	'5': '20px',
	'6': '24px',
	'7': '32px',
	'8': '40px',
	'9': '48px',
	'10': '64px',
	'11': '80px',
	'12': '96px',
} as const;

describe('space token ladder', () => {
	it('base theme maps every key to its exact DS-2026 pixel value', () => {
		expect(baseTokens.space).toStrictEqual(EXPECTED_SPACE);
	});

	it('`0` and `none` both resolve to 0px (no 2px footgun)', () => {
		expect(baseTokens.space['0']).toBe('0px');
		expect(baseTokens.space.none).toBe('0px');
	});

	it('neutral theme inherits the base ladder unchanged via deepmerge', () => {
		expect(neutralTokens.space).toStrictEqual(EXPECTED_SPACE);
	});

	it('flat_red theme inherits the base ladder unchanged via deepmerge', () => {
		expect(flatRedTokens.space).toStrictEqual(EXPECTED_SPACE);
	});
});
