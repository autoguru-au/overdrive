import { renderHook, act } from '@testing-library/react';
import React from 'react';

import { OverdriveProvider } from '../../components/OverdriveProvider';
import type { BreakPoints } from '../../themes';
import baseTheme from '../../themes/base';

import { useMedia } from './useMedia';

// Mock the utils module to control isBrowser
vi.mock('../../utils', () => ({
	isBrowser: true,
}));

// Mock window.matchMedia since it's not available in test environment
const mockMatchMedia = vi.fn();
Object.defineProperty(window, 'matchMedia', {
	writable: true,
	value: mockMatchMedia,
});

// Helper to create a mock MediaQueryList
const createMockMediaQueryList = (matches: boolean = false) => ({
	matches,
	media: '',
	onchange: null,
	addListener: vi.fn(), // deprecated but still used by some
	removeListener: vi.fn(), // deprecated but still used by some
	addEventListener: vi.fn(),
	removeEventListener: vi.fn(),
	dispatchEvent: vi.fn(),
});

// Wrapper component with OverdriveProvider
const createWrapper = () => {
	// eslint-disable-next-line react/display-name
	return ({ children }: { children: React.ReactNode }) =>
		React.createElement(OverdriveProvider, { theme: baseTheme }, children);
};

describe('useMedia hook', () => {
	beforeEach(() => {
		vi.clearAllMocks();

		// Default mock implementation
		mockMatchMedia.mockImplementation(() =>
			createMockMediaQueryList(false),
		);
	});

	afterEach(() => {
		vi.restoreAllMocks();
	});

	// Note: SSR testing is complex due to static imports, focusing on browser behavior

	describe('Browser environment', () => {
		it('creates media queries with correct breakpoint values', () => {
			const mockMQL = createMockMediaQueryList(false);
			mockMatchMedia.mockReturnValue(mockMQL);

			renderHook(() => useMedia(['mobile', 'tablet']), {
				wrapper: createWrapper(),
			});

			// Should be called twice for each query, once for initial and once for effect
			expect(mockMatchMedia).toHaveBeenCalledWith('(min-width: 0px)'); // mobile
			expect(mockMatchMedia).toHaveBeenCalledWith('(min-width: 768px)'); // tablet
		});

		it('returns initial matches state', () => {
			const mockMobileMatch = createMockMediaQueryList(true);
			const mockTabletMatch = createMockMediaQueryList(false);

			mockMatchMedia
				.mockReturnValueOnce(mockMobileMatch) // initial mobile
				.mockReturnValueOnce(mockTabletMatch) // initial tablet
				.mockReturnValueOnce(mockMobileMatch) // effect mobile
				.mockReturnValueOnce(mockTabletMatch); // effect tablet

			const { result } = renderHook(
				() => useMedia(['mobile', 'tablet']),
				{ wrapper: createWrapper() },
			);

			expect(result.current).toEqual([true, false]);
		});

		it('sets up event listeners for media query changes', () => {
			const mockMQL1 = createMockMediaQueryList(false);
			const mockMQL2 = createMockMediaQueryList(false);

			mockMatchMedia
				.mockReturnValueOnce(mockMQL1)
				.mockReturnValueOnce(mockMQL2)
				.mockReturnValueOnce(mockMQL1)
				.mockReturnValueOnce(mockMQL2);

			renderHook(() => useMedia(['mobile', 'tablet']), {
				wrapper: createWrapper(),
			});

			expect(mockMQL1.addEventListener).toHaveBeenCalledWith(
				'change',
				expect.any(Function),
				{ passive: true },
			);
			expect(mockMQL2.addEventListener).toHaveBeenCalledWith(
				'change',
				expect.any(Function),
				{ passive: true },
			);
		});

		it('updates state when media query changes', () => {
			const mockMQL = createMockMediaQueryList(false);
			let changeHandler: (e: MediaQueryListEvent) => void;

			mockMQL.addEventListener.mockImplementation((event, handler) => {
				if (event === 'change') {
					changeHandler = handler;
				}
			});

			mockMatchMedia.mockReturnValue(mockMQL);

			const { result } = renderHook(() => useMedia(['mobile']), {
				wrapper: createWrapper(),
			});

			expect(result.current).toEqual([false]);

			// Simulate media query change
			act(() => {
				changeHandler!({ matches: true } as MediaQueryListEvent);
			});

			expect(result.current).toEqual([true]);
		});

		it('handles multiple media query changes independently', () => {
			const mockMQL1 = createMockMediaQueryList(false);
			const mockMQL2 = createMockMediaQueryList(false);
			let changeHandler1: (e: MediaQueryListEvent) => void;
			let changeHandler2: (e: MediaQueryListEvent) => void;

			mockMQL1.addEventListener.mockImplementation((event, handler) => {
				if (event === 'change') changeHandler1 = handler;
			});
			mockMQL2.addEventListener.mockImplementation((event, handler) => {
				if (event === 'change') changeHandler2 = handler;
			});

			mockMatchMedia
				.mockReturnValueOnce(mockMQL1)
				.mockReturnValueOnce(mockMQL2)
				.mockReturnValueOnce(mockMQL1)
				.mockReturnValueOnce(mockMQL2);

			const { result } = renderHook(
				() => useMedia(['mobile', 'tablet']),
				{ wrapper: createWrapper() },
			);

			expect(result.current).toEqual([false, false]);

			// Change first media query
			act(() => {
				changeHandler1!({ matches: true } as MediaQueryListEvent);
			});

			expect(result.current).toEqual([true, false]);

			// Change second media query
			act(() => {
				changeHandler2!({ matches: true } as MediaQueryListEvent);
			});

			expect(result.current).toEqual([true, true]);
		});

		it('removes event listeners on unmount', () => {
			const mockMQL = createMockMediaQueryList(false);
			mockMatchMedia.mockReturnValue(mockMQL);

			const { unmount } = renderHook(() => useMedia(['mobile']), {
				wrapper: createWrapper(),
			});

			expect(mockMQL.removeEventListener).not.toHaveBeenCalled();

			unmount();

			expect(mockMQL.removeEventListener).toHaveBeenCalledWith(
				'change',
				expect.any(Function),
			);
		});

		it('prevents state updates after unmount', () => {
			const mockMQL = createMockMediaQueryList(false);
			let changeHandler: (e: MediaQueryListEvent) => void;

			mockMQL.addEventListener.mockImplementation((event, handler) => {
				if (event === 'change') changeHandler = handler;
			});
			mockMatchMedia.mockReturnValue(mockMQL);

			const { result, unmount } = renderHook(() => useMedia(['mobile']), {
				wrapper: createWrapper(),
			});

			const initialResult = result.current;

			unmount();

			// Simulate change after unmount - should not update state
			act(() => {
				changeHandler!({ matches: true } as MediaQueryListEvent);
			});

			// State should remain unchanged after unmount
			expect(result.current).toBe(initialResult);
		});

		it('updates listeners when queries change', () => {
			const mockMQL = createMockMediaQueryList(false);
			mockMatchMedia.mockReturnValue(mockMQL);

			const { rerender } = renderHook(
				({ queries }: { queries: ReadonlyArray<keyof BreakPoints> }) =>
					useMedia(queries),
				{
					wrapper: createWrapper(),
					initialProps: {
						queries: ['mobile'] as ReadonlyArray<keyof BreakPoints>,
					},
				},
			);

			// Change queries
			rerender({
				queries: ['tablet', 'desktop'] as ReadonlyArray<
					keyof BreakPoints
				>,
			});

			// Should have been called more times now with the new queries
			expect(mockMatchMedia.mock.calls.length).toBeGreaterThan(2);
		});

		it('handles all standard breakpoint keys', () => {
			const allBreakpoints: ReadonlyArray<keyof BreakPoints> = [
				'mobile',
				'tablet',
				'desktop',
				'largeDesktop',
			];

			mockMatchMedia.mockReturnValue(createMockMediaQueryList(false));

			const { result } = renderHook(() => useMedia(allBreakpoints), {
				wrapper: createWrapper(),
			});

			expect(result.current).toHaveLength(4);
			expect(result.current).toEqual([false, false, false, false]);

			// Verify correct media queries were created
			expect(mockMatchMedia).toHaveBeenCalledWith('(min-width: 0px)'); // mobile
			expect(mockMatchMedia).toHaveBeenCalledWith('(min-width: 768px)'); // tablet
			expect(mockMatchMedia).toHaveBeenCalledWith('(min-width: 1024px)'); // desktop
			expect(mockMatchMedia).toHaveBeenCalledWith('(min-width: 1920px)'); // largeDesktop
		});

		it('handles empty queries array in browser', () => {
			mockMatchMedia.mockReturnValue(createMockMediaQueryList(false));

			const { result } = renderHook(() => useMedia([]), {
				wrapper: createWrapper(),
			});

			expect(result.current).toEqual([]);
			expect(mockMatchMedia).not.toHaveBeenCalled();
		});

		it('maintains referential stability when values do not change', () => {
			const mockMQL = createMockMediaQueryList(false);
			mockMatchMedia.mockReturnValue(mockMQL);

			const { result, rerender } = renderHook(
				() => useMedia(['mobile']),
				{ wrapper: createWrapper() },
			);

			const firstResult = result.current;

			rerender();

			// Should maintain the same reference when values haven't changed
			expect(result.current).toBe(firstResult);
		});
	});

	describe('Edge cases', () => {
		it('handles rapid successive changes', () => {
			const mockMQL = createMockMediaQueryList(false);
			let changeHandler: (e: MediaQueryListEvent) => void;

			mockMQL.addEventListener.mockImplementation((event, handler) => {
				if (event === 'change') changeHandler = handler;
			});
			mockMatchMedia.mockReturnValue(mockMQL);

			const { result } = renderHook(() => useMedia(['mobile']), {
				wrapper: createWrapper(),
			});

			expect(result.current).toEqual([false]);

			// Rapid changes
			act(() => {
				changeHandler!({ matches: true } as MediaQueryListEvent);
				changeHandler!({ matches: false } as MediaQueryListEvent);
				changeHandler!({ matches: true } as MediaQueryListEvent);
			});

			expect(result.current).toEqual([true]);
		});
	});
});
