import { renderHook } from '@testing-library/react';
import { useRef } from 'react';
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
});
