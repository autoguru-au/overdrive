import { describe, expect, it } from 'vitest';

import { darkSurface } from './darkSurface.css';

describe('darkSurface', () => {
	// The scope assigns to theme-contract vars rather than declaring its own.
	// Vanilla-extract rejects that at compile time if a key is not a real
	// contract var, and the failure would surface as a consumer build break
	// rather than a test failure — so importing it at all is the assertion.
	it('compiles to a class', () => {
		expect(typeof darkSurface).toBe('string');
		expect(darkSurface.length).toBeGreaterThan(0);
	});
});
