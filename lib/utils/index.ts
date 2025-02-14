import type { Ref, RefCallback, RefObject } from 'react';
import {
	useCallback,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
} from 'react';

export const isBrowser = typeof window !== 'undefined';

export const isomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect;

export const useUncontrolledState = <T extends unknown>(
	value: T,
	onChange?: (value: T) => void,
): [T, (value: T) => void] => {
	if (typeof onChange === 'function') {
		return [value, onChange];
	}

	// eslint-disable-next-line react-hooks/rules-of-hooks
	return useState<T>(value);
};

const handlers = new WeakMap();
export const useInputControlledState = <T, H>(
	incomingValue: T,
	incomingOnChange?: H,
): [T, H] => {
	if (typeof incomingOnChange === 'function')
		return [incomingValue, incomingOnChange];

	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [value, setValue] = useState<T>(incomingValue);

	if (!handlers.has(setValue)) {
		handlers.set(setValue, (e) => setValue(e.target.value));
	}

	return [value, handlers.get(setValue)];
};

let id = 0;
const genId = () => ++id;

let serverHandoffComplete = false;

/*
For rationale around this file, please see @reach-ui/auto-id's comments. We have opted to not use the npm package as they
	import a series of utils that arent tree-shakable. And something that is too big to include for now.

@see https://github.com/reach/reach-ui/blob/983acb60ee9ac64b1b708523b44f660c65af6726/packages/auto-id/src/index.ts#L1-L55
 */
export const useId = (idFromProps?: string): string | null => {
	const initialId = idFromProps ?? (serverHandoffComplete ? genId() : null);

	const [id, setId] = useState(initialId);

	isomorphicLayoutEffect(() => {
		if (id === null) {
			setId(genId());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (!serverHandoffComplete) {
			serverHandoffComplete = true;
		}
	}, []);

	return id === null ? null : `od-${String(id)}`;
};

export const setRef = <T>(ref: Ref<T>, value: T) => {
	if (typeof ref === 'function') {
		ref(value);
	} else if (ref) {
		(ref as any).current = value;
	}
};

/**
 * Used to merge multiple refs into a single ref callback
 * @param refs an array of refs
 */
// using an arrow function here causes a typescript error with the `RefCallback` type
export function mergeRefs<T>(
	refs: Array<Ref<T> | undefined | null>,
): RefCallback<T> {
	return (value) => {
		refs.forEach((ref) => {
			if (ref instanceof Function) {
				ref(value);
			} else if (ref != null && typeof ref === 'object') {
				(ref as RefObject<T | null>).current = value;
			}
		});
	};
}

export const isHtmlElement = (element: unknown): element is Element =>
	element instanceof Element || element instanceof Document;

export const hex2rgba = (c, alpha = '1') =>
	`rgb(${c
		.slice(1)
		.match(/../g)
		// eslint-disable-next-line sonarjs/no-nested-template-literals
		.map((x) => Number(`0x${x}`))},${alpha})`;

export const ownerDocument = (node?: Node): Document =>
	node?.ownerDocument || document;

export const ownerWindow = (node?: Node): Window =>
	ownerDocument(node)?.defaultView || window;

/**
 * A method to be used when dealing with callbacks that depend on data, but you don't want to trigger re-renders.
 *
 * @see {@link https://github.com/facebook/react/issues/14099#issuecomment-440013892|facebook/react#14099}
 *
 * @param fn
 */
export const useEventCallback = <T extends Function>(fn: T) => {
	const ref = useRef(fn);
	isomorphicLayoutEffect(() => {
		ref.current = fn;
	});

	return useCallback((...args) => void ref.current(...args), []);
};

// Taken from https://gist.github.com/gre/1650294
const easeInOutCubic = (t: number): number =>
	t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

export const animate = <T extends HTMLElement>(
	element: T,
	property: keyof T,
	to: number,
	duration = 600,
): (() => void) | void => {
	let start: number | null = null;
	// @ts-ignore
	const from: number = element[property];
	if (start === from) return;

	let cancelled = false;

	const cancel = () => {
		cancelled = true;
	};

	const step = (timestamp: number) => {
		if (cancelled) return;

		if (start === null) {
			start = timestamp;
		}

		const time = Math.min(1, (timestamp - start) / duration);
		// @ts-ignore
		element[property] = easeInOutCubic(time) * (to - from) + from;

		if (time >= 1) return;
		requestAnimationFrame(step);
	};

	requestAnimationFrame(step);

	return cancel;
};

export type Alignment = 'left' | 'right' | 'center';
export const alignmentToFlexAlignment = (align: Alignment) =>
	({
		center: 'center',
		left: 'flexStart',
		right: 'flexEnd',
	})[align] as 'center' | 'flexStart' | 'flexEnd';

/**
 * A function that returns the first item in the array, if the index exceeds its maximum length
 *
 * @example
 * ```js
 *  const sortFlowRingLookup = arrayRingLookup(['asc', 'desc', 'none']);
 *
 *  expect(sortFlowRingLookup(4)).toBe('desc');
 * ```
 */
export const arrayRingLookup = <T extends ArrayLike<unknown>>(
	collection: T,
) => {
	const len = collection.length;
	return (index) => collection[((index % len) + len) % len];
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const noop = () => {};
