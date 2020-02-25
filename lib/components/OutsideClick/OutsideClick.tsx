import { warning } from '@autoguru/utilities';
import {
	Children,
	cloneElement,
	memo,
	NamedExoticComponent,
	ReactElement,
	RefObject,
	useEffect,
	useRef,
} from 'react';
import { findDOMNode } from 'react-dom';

export const useOutsideClick = (
	onClickAway: () => void,
	refs: Array<RefObject<HTMLElement>>,
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
			return void 0;

		return bindEvent(document, 'mousedown', event => {
			const shouldClose = refs
				.filter(item => Boolean(item.current))
				.map(item => findDOMNode(item.current))
				.every(
					element => !element.contains(event.target as HTMLElement),
				);

			if (shouldClose) {
				callbackRef.current();
			}
		});
	}, [refs]);
};

const bindEvent = <
	Node extends HTMLElement | HTMLDocument,
	K extends keyof HTMLElementEventMap
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

interface Props {
	children: ReactElement;

	onOutsideClick?(): void;
}

export const OutsideClick: NamedExoticComponent<Props> = memo(
	({ children, onOutsideClick = () => void 0 }) => {
		const child = Children.only(children);

		const rootClickRef = useRef<HTMLElement>();
		const hasRef = Object.prototype.hasOwnProperty.call(child.props, 'ref');

		warning(
			!hasRef,
			'This component overrides the child ref, use with caution.',
		);

		useOutsideClick(onOutsideClick, [rootClickRef]);

		return cloneElement(child, {
			ref: rootClickRef,
		});
	},
);
