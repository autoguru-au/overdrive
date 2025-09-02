import { renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { useDeepCompareMemo } from './index';

describe('useDeepCompareMemo', () => {
	it('should return the factory result on first render', () => {
		const expectedResult = { data: 'initial' };
		const factory = vi.fn(() => expectedResult);
		
		const { result } = renderHook(() => 
			useDeepCompareMemo(factory, ['dep'])
		);
		
		expect(result.current).toBe(expectedResult);
		expect(factory).toHaveBeenCalledTimes(1);
	});

	it('should recalculate when dependencies change', () => {
		const factory = vi.fn(() => ({ value: Math.random() }));
		
		const { result, rerender } = renderHook(
			({ dependencies }) => useDeepCompareMemo(factory, dependencies),
			{ initialProps: { dependencies: [{ a: 1 }] } }
		);
		
		const firstResult = result.current;
		
		// Change dependencies
		rerender({ dependencies: [{ a: 2 }] });
		
		expect(result.current).not.toBe(firstResult);
		expect(factory.mock.calls.length).toBeGreaterThan(1);
	});

	it('should handle primitive dependencies', () => {
		const factory = vi.fn(() => 'result');
		
		const { rerender } = renderHook(
			({ dependencies }) => useDeepCompareMemo(factory, dependencies),
			{ initialProps: { dependencies: ['a', 'b'] } }
		);
		
		const initialCalls = factory.mock.calls.length;
		
		// Different primitive values
		rerender({ dependencies: ['a', 'c'] });
		expect(factory.mock.calls.length).toBeGreaterThan(initialCalls);
	});

	it('should work with complex nested objects', () => {
		const factory = vi.fn(() => ({ computed: true }));
		
		const { result } = renderHook(() => 
			useDeepCompareMemo(factory, [{ nested: { deep: { value: 1 } } }])
		);
		
		expect(result.current).toEqual({ computed: true });
		expect(factory).toHaveBeenCalledTimes(1);
	});

	it('should handle empty dependencies array', () => {
		const factory = vi.fn(() => 'constant');
		
		const { result } = renderHook(() => 
			useDeepCompareMemo(factory, [])
		);
		
		expect(result.current).toBe('constant');
		expect(factory).toHaveBeenCalledTimes(1);
	});
});