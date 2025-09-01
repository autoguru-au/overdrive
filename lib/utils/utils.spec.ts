import { renderHook, act } from '@testing-library/react';
import React, { useRef } from 'react';
import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest';

import {
	useId,
	setRef,
	mergeRefs,
	isHtmlElement,
	hex2rgba,
	ownerDocument,
	ownerWindow,
	useEventCallback,
	useUncontrolledState,
	useInputControlledState,
	animate,
	arrayRingLookup,
} from './index';

// Mock requestAnimationFrame for animate tests
const mockRequestAnimationFrame = vi.fn();
const mockCancelAnimationFrame = vi.fn();

Object.defineProperty(window, 'requestAnimationFrame', {
	writable: true,
	value: mockRequestAnimationFrame,
});

Object.defineProperty(window, 'cancelAnimationFrame', {
	writable: true,
	value: mockCancelAnimationFrame,
});

describe('Utils', () => {
	beforeEach(() => {
		vi.clearAllMocks();
		mockRequestAnimationFrame.mockClear();
		mockCancelAnimationFrame.mockClear();
	});

	afterEach(() => {
		vi.restoreAllMocks();
	});

	describe('useId', () => {
		it('generates unique IDs', () => {
			const { result: result1 } = renderHook(() => useId());
			const { result: result2 } = renderHook(() => useId());

			expect(result1.current).toBeTruthy();
			expect(result2.current).toBeTruthy();
			expect(result1.current).not.toBe(result2.current);
		});

		it('generates consistent ID for same hook instance', () => {
			const { result, rerender } = renderHook(() => useId());
			
			const firstId = result.current;
			rerender();
			
			expect(result.current).toBe(firstId);
		});

		it('uses provided prefix', () => {
			const { result } = renderHook(() => useId('test-prefix'));
			
			expect(result.current).toContain('test-prefix');
		});
	});

	describe('setRef', () => {
		it('sets ref object current value', () => {
			const refObject = { current: null };
			const value = document.createElement('div');

			setRef(refObject, value);

			expect(refObject.current).toBe(value);
		});

		it('calls ref function', () => {
			const refFunction = vi.fn();
			const value = document.createElement('div');

			setRef(refFunction, value);

			expect(refFunction).toHaveBeenCalledWith(value);
		});

		it('handles null ref gracefully', () => {
			const value = document.createElement('div');

			expect(() => setRef(null, value)).not.toThrow();
		});

		it('handles undefined ref gracefully', () => {
			const value = document.createElement('div');

			expect(() => setRef(undefined, value)).not.toThrow();
		});
	});

	describe('mergeRefs', () => {
		it('merges ref objects', () => {
			const ref1 = { current: null };
			const ref2 = { current: null };
			const value = document.createElement('div');

			const mergedRef = mergeRefs([ref1, ref2]);
			mergedRef(value);

			expect(ref1.current).toBe(value);
			expect(ref2.current).toBe(value);
		});

		it('merges ref functions', () => {
			const ref1 = vi.fn();
			const ref2 = vi.fn();
			const value = document.createElement('div');

			const mergedRef = mergeRefs([ref1, ref2]);
			mergedRef(value);

			expect(ref1).toHaveBeenCalledWith(value);
			expect(ref2).toHaveBeenCalledWith(value);
		});

		it('handles mixed ref types', () => {
			const refObject = { current: null };
			const refFunction = vi.fn();
			const value = document.createElement('div');

			const mergedRef = mergeRefs([refObject, refFunction]);
			mergedRef(value);

			expect(refObject.current).toBe(value);
			expect(refFunction).toHaveBeenCalledWith(value);
		});

		it('handles null and undefined refs', () => {
			const ref = { current: null };
			const value = document.createElement('div');

			const mergedRef = mergeRefs([ref, null, undefined]);
			
			expect(() => mergedRef(value)).not.toThrow();
			expect(ref.current).toBe(value);
		});
	});

	describe('isHtmlElement', () => {
		it('returns true for Element instances', () => {
			const div = document.createElement('div');
			expect(isHtmlElement(div)).toBe(true);
		});

		it('returns true for Document instances', () => {
			expect(isHtmlElement(document)).toBe(true);
		});

		it('returns false for non-DOM objects', () => {
			expect(isHtmlElement({})).toBe(false);
			expect(isHtmlElement('string')).toBe(false);
			expect(isHtmlElement(123)).toBe(false);
			expect(isHtmlElement(null)).toBe(false);
			expect(isHtmlElement(undefined)).toBe(false);
		});
	});

	describe('hex2rgba', () => {
		it('converts hex color to rgba', () => {
			expect(hex2rgba('#ff0000')).toBe('rgb(255,0,0,1)');
			expect(hex2rgba('#00ff00')).toBe('rgb(0,255,0,1)');
			expect(hex2rgba('#0000ff')).toBe('rgb(0,0,255,1)');
		});

		it('handles custom alpha values', () => {
			expect(hex2rgba('#ff0000', '0.5')).toBe('rgb(255,0,0,0.5)');
			expect(hex2rgba('#000000', '0')).toBe('rgb(0,0,0,0)');
		});

		it('handles uppercase hex values', () => {
			expect(hex2rgba('#FF0000')).toBe('rgb(255,0,0,1)');
		});

		it('handles mixed case hex values', () => {
			expect(hex2rgba('#Ff00Aa')).toBe('rgb(255,0,170,1)');
		});
	});

	describe('ownerDocument', () => {
		it('returns node ownerDocument when available', () => {
			const div = document.createElement('div');
			expect(ownerDocument(div)).toBe(document);
		});

		it('returns global document when node is undefined', () => {
			expect(ownerDocument()).toBe(document);
		});

		it('returns global document when node has no ownerDocument', () => {
			const nodeWithoutOwner = { ownerDocument: null } as any;
			expect(ownerDocument(nodeWithoutOwner)).toBe(document);
		});
	});

	describe('ownerWindow', () => {
		it('returns window from node ownerDocument', () => {
			const div = document.createElement('div');
			expect(ownerWindow(div)).toBe(window);
		});

		it('returns global window when node is undefined', () => {
			expect(ownerWindow()).toBe(window);
		});
	});

	describe('useEventCallback', () => {
		it('returns a stable callback function', () => {
			const fn = vi.fn();
			const { result, rerender } = renderHook(() => useEventCallback(fn));

			const callback1 = result.current;
			rerender();
			const callback2 = result.current;

			expect(callback1).toBe(callback2);
		});

		it('calls the latest version of the function', () => {
			let fn = vi.fn();
			const { result, rerender } = renderHook(({ fn }) => useEventCallback(fn), {
				initialProps: { fn },
			});

			// Call initial version
			result.current('test1');
			expect(fn).toHaveBeenCalledWith('test1');

			// Update function and rerender
			fn = vi.fn();
			rerender({ fn });

			// Call updated version
			result.current('test2');
			expect(fn).toHaveBeenCalledWith('test2');
		});
	});

	describe('useUncontrolledState', () => {
		it('returns controlled state when onChange is provided', () => {
			const onChange = vi.fn();
			const { result } = renderHook(() => useUncontrolledState('test', onChange));

			const [value, setter] = result.current;

			expect(value).toBe('test');
			expect(setter).toBe(onChange);
		});

		it('returns uncontrolled state when onChange is not provided', () => {
			const { result } = renderHook(() => useUncontrolledState('test'));

			const [value, setter] = result.current;

			expect(value).toBe('test');
			expect(typeof setter).toBe('function');
			expect(setter).not.toBe(undefined);
		});

		it('updates uncontrolled state when setter is called', () => {
			const { result } = renderHook(() => useUncontrolledState('initial'));

			const [, setter] = result.current;

			act(() => {
				setter('updated');
			});

			const [newValue] = result.current;
			expect(newValue).toBe('updated');
		});
	});

	describe('useInputControlledState', () => {
		it('returns controlled state when onChange is provided', () => {
			const onChange = vi.fn();
			const { result } = renderHook(() => useInputControlledState('test', onChange));

			const [value, handler] = result.current;

			expect(value).toBe('test');
			expect(handler).toBe(onChange);
		});

		it('returns uncontrolled state when onChange is not provided', () => {
			const { result } = renderHook(() => useInputControlledState('test'));

			const [value, handler] = result.current;

			expect(value).toBe('test');
			expect(typeof handler).toBe('function');
		});

		it('handles input events in uncontrolled mode', () => {
			const { result } = renderHook(() => useInputControlledState('initial'));

			const [, handler] = result.current;

			// Simulate input event
			const event = { target: { value: 'new value' } };
			act(() => {
				handler(event);
			});

			const [newValue] = result.current;
			expect(newValue).toBe('new value');
		});
	});

	describe('animate', () => {
		beforeEach(() => {
			// Mock performance.now for consistent testing
			vi.spyOn(performance, 'now').mockReturnValue(0);
		});

		it('returns cancellation function', () => {
			const element = { scrollTop: 0 } as any;
			
			const cancel = animate(element, 'scrollTop', 100);
			
			expect(typeof cancel).toBe('function');
		});

		it('starts animation with requestAnimationFrame', () => {
			const element = { scrollTop: 0 } as any;
			
			animate(element, 'scrollTop', 100);
			
			expect(mockRequestAnimationFrame).toHaveBeenCalled();
		});

		it('returns early if target equals current value', () => {
			const element = { scrollTop: 100 } as any;
			
			const result = animate(element, 'scrollTop', 100);
			
			expect(result).toBeUndefined();
			expect(mockRequestAnimationFrame).not.toHaveBeenCalled();
		});

		it('calls cancelAnimationFrame when cancellation function is called', () => {
			const element = { scrollTop: 0 } as any;
			
			const cancel = animate(element, 'scrollTop', 100);
			cancel();
			
			expect(mockCancelAnimationFrame).toHaveBeenCalled();
		});
	});

	describe('arrayRingLookup', () => {
		const array = ['a', 'b', 'c'];

		it('returns function that looks up array values', () => {
			const lookup = arrayRingLookup(array);
			
			expect(typeof lookup).toBe('function');
		});

		it('handles positive indices', () => {
			const lookup = arrayRingLookup(array);
			
			expect(lookup(0)).toBe('a');
			expect(lookup(1)).toBe('b');
			expect(lookup(2)).toBe('c');
		});

		it('wraps around for indices beyond array length', () => {
			const lookup = arrayRingLookup(array);
			
			expect(lookup(3)).toBe('a');
			expect(lookup(4)).toBe('b');
			expect(lookup(5)).toBe('c');
		});

		it('handles negative indices', () => {
			const lookup = arrayRingLookup(array);
			
			expect(lookup(-1)).toBe('c');
			expect(lookup(-2)).toBe('b');
			expect(lookup(-3)).toBe('a');
		});

		it('handles large negative indices', () => {
			const lookup = arrayRingLookup(array);
			
			expect(lookup(-4)).toBe('c');
			expect(lookup(-5)).toBe('b');
		});

		it('handles empty arrays', () => {
			const lookup = arrayRingLookup([]);
			
			expect(lookup(0)).toBeUndefined();
			expect(lookup(1)).toBeUndefined();
			expect(lookup(-1)).toBeUndefined();
		});

		it('handles single element arrays', () => {
			const lookup = arrayRingLookup(['only']);
			
			expect(lookup(0)).toBe('only');
			expect(lookup(1)).toBe('only');
			expect(lookup(-1)).toBe('only');
		});
	});
});