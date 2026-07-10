import { describe, expect, it } from 'vitest';

import { overdriveTokens } from '../themes/theme.css';

import { __deprecatedBackgroundColourAliases } from './sprinkles.css';

describe('deprecated backgroundColour aliases (R12 guard)', () => {
	it('black900 resolves to the gray900 token value', () => {
		expect(__deprecatedBackgroundColourAliases.black900).toBe(
			overdriveTokens.colours.gamut.gray900,
		);
	});
});
