import { renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { useAttachedBoxes } from './useAttachedBoxes';

// Mock useMedia hook
vi.mock('../useMedia/useMedia', () => ({
	useMedia: vi.fn(() => 0), // Return mobile breakpoint by default
}));

describe('useAttachedBoxes', () => {
	it('should return array of box components with correct length', () => {
		const { result } = renderHook(() =>
			useAttachedBoxes({
				count: 4,
				columnCount: 2,
			})
		);

		const [boxes, className, style] = result.current;
		expect(boxes).toHaveLength(4);
		expect(typeof className).toBe('string');
		expect(typeof style).toBe('object');
	});

	it('should return grid template columns in style object', () => {
		const { result } = renderHook(() =>
			useAttachedBoxes({
				count: 2,
				columnCount: 3,
			})
		);

		const style = result.current[2];
		expect(style).toHaveProperty('gridTemplateColumns', 'repeat(3, 1fr)');
	});
});