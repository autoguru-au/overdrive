import { warning } from '@autoguru/utilities';
import {
	Children,
	cloneElement,
	FunctionComponent,
	ReactElement,
	RefObject,
	useEffect,
	useRef,
} from 'react';

import { noop } from '../../utils';

export const useOutsideClick = (
	refs: Array<RefObject<HTMLElement | null>>,
	onClickAway: () => void,
) => {
	const callbackRef = useRef(onClickAway);

	// So we don't have to re-bind events when a callback gets updated, simply call the callback when the event fires.
	useEffect(() => {
		callbackRef.current = onClickAway;
	}, [onClickAway]);

	useEffect(() => {
		if (
			typeof document === 'undefined' ||
			typeof onClickAway !== 'function'
		)
			return;

		return bindEvent(document, 'mouseup', (event) => {
			const shouldClose = refs
				.map((item) => item.current)
				.every(
					(element) =>
						!element?.contains(event.target as HTMLElement),
				);

			if (shouldClose) {
				callbackRef.current();
			}
		});
	}, [refs]);
};

const bindEvent = <
	Node extends HTMLElement | Document,
	K extends keyof HTMLElementEventMap,
>(
	node: Node,
	event: K,
	callback: (event: HTMLElementEventMap[K]) => unknown,
) => {
	node.addEventListener(event, callback as EventListener, {
		passive: true,
	});

	return () => {
		node.removeEventListener(event, callback as EventListener);
	};
};

export interface OutsideClickProps {
	children: ReactElement;

	onOutsideClick?(): void;
}

export const OutsideClick: FunctionComponent<OutsideClickProps> = ({
	children,
	onOutsideClick = noop,
}) => {
	const child = Children.only(children);

	const rootClickRef = useRef<HTMLElement>(null);
	const hasRef = Object.prototype.hasOwnProperty.call(child.props, 'ref');

	warning(
		!hasRef,
		'This component overrides the child ref, use with caution.',
	);

	useOutsideClick([rootClickRef], onOutsideClick);

	return cloneElement(child, {
		// @ts-expect-error Object literal may only specify known properties, and 'ref' does not exist in type
		ref: rootClickRef,
	});
};

export default OutsideClick;
