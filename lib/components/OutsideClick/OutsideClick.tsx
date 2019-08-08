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

export const useOutsideClick = (
	refs: Array<RefObject<HTMLElement>>,
	onClickAway: () => void,
) => {
	useEffect(() => {
		if (typeof window === 'undefined' || typeof onClickAway !== 'function')
			return void 0;

		const defaultEvents = ['mouseup', 'touchstart'];

		const handler = event => {
			if (
				refs
					.filter(item => Boolean(item.current))
					.every(item => !item.current.contains(event.target))
			) {
				onClickAway();
			}
		};

		defaultEvents.forEach(ev =>
			document.body.addEventListener(ev, handler, {
				passive: true,
			}),
		);

		return () => {
			defaultEvents.forEach(ev =>
				document.body.removeEventListener(ev, handler),
			);
		};
	}, [onClickAway, refs]);
};

interface Props {
	children: ReactElement;

	onOutsideClick?(): void;
}

export const OutsideClick: NamedExoticComponent<Props> = memo(
	({ children, onOutsideClick = () => void 0 }) => {
		warning(
			true,
			'This component overrides the child ref, use with caution.',
		);

		const rootClickRef = useRef<HTMLElement>();

		useOutsideClick([rootClickRef], onOutsideClick);

		return cloneElement(Children.only(children), {
			ref: rootClickRef,
		});
	},
);
