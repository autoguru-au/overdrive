import { Ref, useEffect, useLayoutEffect, useState } from 'react';

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

export const isHtmlElement = (element: any): element is Element =>
	element instanceof Element || element instanceof HTMLDocument;

export const hex2rgba = (c, alpha = '1') =>
	`rgb(${c
		.slice(1)
		.match(/../g)
		.map((x) => Number(`0x${x}`))},${alpha})`;

export { mapTokenToProperty } from './mapTokenToProperty';
export * from './responsiveProps';
