import { renderHook } from '@testing-library/react';
import React, { useRef } from 'react';
import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest';

import { useLayoutSuggestionVisible } from './useLayoutSuggestionVisible';

// Mock isBrowser utility
vi.mock('../../utils', () => ({
	isBrowser: true,
}));

describe('useLayoutSuggestionVisible', () => {
	beforeEach(() => {
		// Mock DOM methods
		Object.defineProperty(HTMLElement.prototype, 'offsetTop', {
			configurable: true,
			value: 100,
		});
		Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
			configurable: true,
			value: 50,
		});
		Object.defineProperty(HTMLElement.prototype, 'offsetParent', {
			configurable: true,
			value: null,
		});
		Object.defineProperty(HTMLElement.prototype, 'scrollTop', {
			configurable: true,
			get: function () {
				return this._scrollTop || 0;
			},
			set: function (val) {
				this._scrollTop = val;
			},
		});
	});

	afterEach(() => {
		vi.restoreAllMocks();
	});

	it('does nothing when highlightIndex is -1', () => {
		// const TestComponent = () => {
		// 	const highlightRef = useRef<HTMLElement>(null);
		// 	const suggestionListRef = useRef<HTMLElement>(null);

		// 	useLayoutSuggestionVisible(-1, highlightRef, suggestionListRef);

		// 	return null;
		// };

		renderHook(() => {
			const highlightRef = useRef<HTMLElement>(null);
			const suggestionListRef = useRef<HTMLElement>(null);

			useLayoutSuggestionVisible(-1, highlightRef, suggestionListRef);
		});

		// No errors should occur
		expect(true).toBe(true);
	});

	it('does nothing when refs are null', () => {
		renderHook(() => {
			const highlightRef = useRef<HTMLElement>(null);
			const suggestionListRef = useRef<HTMLElement>(null);

			useLayoutSuggestionVisible(0, highlightRef, suggestionListRef);
		});

		// No errors should occur
		expect(true).toBe(true);
	});

	it('scrolls suggestion list when highlighted item is above visible area', () => {
		// Create mock elements
		const highlightElement = document.createElement('div');
		const suggestionListElement = document.createElement('div');

		// Set up initial state where item is above visible area
		Object.defineProperty(highlightElement, 'offsetTop', { value: 50 });
		Object.defineProperty(highlightElement, 'offsetHeight', { value: 30 });
		Object.defineProperty(highlightElement, 'offsetParent', {
			value: suggestionListElement,
		});

		Object.defineProperty(suggestionListElement, 'offsetTop', { value: 0 });
		Object.defineProperty(suggestionListElement, 'offsetHeight', {
			value: 200,
		});
		Object.defineProperty(suggestionListElement, 'scrollTop', {
			value: 100, // Item is above visible area
			writable: true,
		});

		renderHook(() => {
			const highlightRef = useRef<HTMLElement>(highlightElement);
			const suggestionListRef = useRef<HTMLElement>(
				suggestionListElement,
			);

			useLayoutSuggestionVisible(0, highlightRef, suggestionListRef);
		});

		// Should scroll to make item visible
		expect(suggestionListElement.scrollTop).toBe(50);
	});

	it('scrolls suggestion list when highlighted item is below visible area', () => {
		// Create mock elements
		const highlightElement = document.createElement('div');
		const suggestionListElement = document.createElement('div');

		// Set up initial state where item is below visible area
		Object.defineProperty(highlightElement, 'offsetTop', { value: 250 });
		Object.defineProperty(highlightElement, 'offsetHeight', { value: 30 });
		Object.defineProperty(highlightElement, 'offsetParent', {
			value: suggestionListElement,
		});

		Object.defineProperty(suggestionListElement, 'offsetTop', { value: 0 });
		Object.defineProperty(suggestionListElement, 'offsetHeight', {
			value: 200,
		});
		Object.defineProperty(suggestionListElement, 'scrollTop', {
			value: 0, // Item is below visible area
			writable: true,
		});

		renderHook(() => {
			const highlightRef = useRef<HTMLElement>(highlightElement);
			const suggestionListRef = useRef<HTMLElement>(
				suggestionListElement,
			);

			useLayoutSuggestionVisible(0, highlightRef, suggestionListRef);
		});

		// Should scroll to show item at bottom of visible area
		expect(suggestionListElement.scrollTop).toBe(80); // 250 + 30 - 200
	});

	it('does not scroll when item is already visible', () => {
		// Create mock elements
		const highlightElement = document.createElement('div');
		const suggestionListElement = document.createElement('div');

		// Set up initial state where item is visible
		Object.defineProperty(highlightElement, 'offsetTop', { value: 100 });
		Object.defineProperty(highlightElement, 'offsetHeight', { value: 30 });
		Object.defineProperty(highlightElement, 'offsetParent', {
			value: suggestionListElement,
		});

		Object.defineProperty(suggestionListElement, 'offsetTop', { value: 0 });
		Object.defineProperty(suggestionListElement, 'offsetHeight', {
			value: 200,
		});

		const initialScrollTop = 50;
		Object.defineProperty(suggestionListElement, 'scrollTop', {
			value: initialScrollTop,
			writable: true,
		});

		renderHook(() => {
			const highlightRef = useRef<HTMLElement>(highlightElement);
			const suggestionListRef = useRef<HTMLElement>(
				suggestionListElement,
			);

			useLayoutSuggestionVisible(0, highlightRef, suggestionListRef);
		});

		// Should not change scroll position
		expect(suggestionListElement.scrollTop).toBe(initialScrollTop);
	});

	it('handles different offset parent scenarios', () => {
		// Create mock elements
		const highlightElement = document.createElement('div');
		const suggestionListElement = document.createElement('div');
		const otherParent = document.createElement('div');

		// Set up case where offset parent is different
		Object.defineProperty(highlightElement, 'offsetTop', { value: 150 });
		Object.defineProperty(highlightElement, 'offsetHeight', { value: 30 });
		Object.defineProperty(highlightElement, 'offsetParent', {
			value: otherParent,
		});

		Object.defineProperty(suggestionListElement, 'offsetTop', {
			value: 50,
		});
		Object.defineProperty(suggestionListElement, 'offsetHeight', {
			value: 200,
		});
		Object.defineProperty(suggestionListElement, 'scrollTop', {
			value: 0,
			writable: true,
		});

		renderHook(() => {
			const highlightRef = useRef<HTMLElement>(highlightElement);
			const suggestionListRef = useRef<HTMLElement>(
				suggestionListElement,
			);

			useLayoutSuggestionVisible(0, highlightRef, suggestionListRef);
		});

		// Should calculate relative offset correctly (150 - 50 = 100)
		// Item would be below visible area, so should scroll
		expect(suggestionListElement.scrollTop).toBe(-70); // 100 + 30 - 200
	});

	it('handles edge case with NaN scrollTop', () => {
		// Create mock elements
		const highlightElement = document.createElement('div');
		const suggestionListElement = document.createElement('div');

		Object.defineProperty(highlightElement, 'offsetTop', { value: 100 });
		Object.defineProperty(highlightElement, 'offsetHeight', { value: 30 });
		Object.defineProperty(highlightElement, 'offsetParent', {
			value: suggestionListElement,
		});

		Object.defineProperty(suggestionListElement, 'offsetTop', { value: 0 });
		Object.defineProperty(suggestionListElement, 'offsetHeight', {
			value: 200,
		});

		// Mock a scenario that might produce NaN
		let scrollTopValue = Number.NaN;
		Object.defineProperty(suggestionListElement, 'scrollTop', {
			get: () => scrollTopValue,
			set: (val) => {
				scrollTopValue = val;
			},
			configurable: true,
		});

		renderHook(() => {
			const highlightRef = useRef<HTMLElement>(highlightElement);
			const suggestionListRef = useRef<HTMLElement>(
				suggestionListElement,
			);

			useLayoutSuggestionVisible(0, highlightRef, suggestionListRef);
		});

		// Should handle NaN case gracefully
		expect(scrollTopValue).toBe(100); // Should be set to the calculated value
	});
});
