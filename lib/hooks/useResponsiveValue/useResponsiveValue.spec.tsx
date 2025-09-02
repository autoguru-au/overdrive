import { renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { useResponsiveValue } from './useResponsiveValue';

// Mock useMedia hook
vi.mock('../useMedia/useMedia', () => ({
	useMedia: vi.fn(() => [false, false, true, false]), // desktop active
}));

describe('useResponsiveValue', () => {
	it('should return the value directly when not an array', () => {
		const { result } = renderHook(() => 
			useResponsiveValue('simple-value')
		);
		
		expect(result.current).toBe('simple-value');
	});

	it('should return the correct responsive value based on breakpoint', () => {
		const responsiveArray = ['mobile', 'tablet', 'desktop', 'large'];
		const { result } = renderHook(() => 
			useResponsiveValue(responsiveArray)
		);
		
		// Should return 'desktop' since that's the active breakpoint
		expect(result.current).toBe('desktop');
	});

	it('should handle numeric responsive values', () => {
		const responsiveNumbers = [16, 24, 32, 40];
		const { result } = renderHook(() => 
			useResponsiveValue(responsiveNumbers)
		);
		
		expect(result.current).toBe(32);
	});

	it('should handle boolean responsive values', () => {
		const responsiveBooleans = [false, true, false, true];
		const { result } = renderHook(() => 
			useResponsiveValue(responsiveBooleans)
		);
		
		expect(result.current).toBe(false);
	});

	it('should work with mixed type responsive values', () => {
		const mixedValues = ['small', 'medium', 'large', 'extra-large'];
		const { result } = renderHook(() => 
			useResponsiveValue(mixedValues)
		);
		
		expect(result.current).toBe('large');
	});
});