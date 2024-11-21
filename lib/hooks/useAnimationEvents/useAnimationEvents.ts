import { MutableRefObject, useEffect, useRef } from 'react';

interface UseImageLoadingProps {
	elementRef?: MutableRefObject<any>;

	onAnimationStart?(e?: AnimationEvent): void;

	onAnimationEnd?(e?: AnimationEvent): void;
}

const finishEvents: string[] = [
	'animationend',
	'transitionend',
	'transitioncancel',
];

const startEvents: string[] = ['animationstart', 'transitionrun'];

export const useAnimationEvents = <T>({
	onAnimationStart: incomingOnAnimationStart = () => void 0,
	onAnimationEnd: incomingOnAnimationEnd = () => void 0,
	elementRef: incomingRef,
}: UseImageLoadingProps): {
	elementRef;
} => {
	const elementRef = incomingRef?.current ? incomingRef : useRef<T>();
	const onAnimationStart = useRef(incomingOnAnimationStart);
	const onAnimationEnd = useRef(incomingOnAnimationEnd);

	onAnimationEnd.current = incomingOnAnimationEnd;
	onAnimationStart.current = incomingOnAnimationStart;

	useEffect(() => {
		const startHandler = (e) => onAnimationStart.current(e);
		const endHandler = (e) => onAnimationEnd.current(e);

		if (elementRef.current) {
			startEvents.forEach((event) =>
				elementRef.current.addEventListener(event, startHandler),
			);
			finishEvents.forEach((event) =>
				elementRef.current.addEventListener(event, endHandler),
			);
		}

		return () => {
			if (elementRef.current) {
				startEvents.forEach((event) =>
					elementRef.current.removeEventListener(event, startHandler),
				);
				finishEvents.forEach((event) =>
					elementRef.current.removeEventListener(event, endHandler),
				);
			}
		};
	}, [elementRef.current]);

	return { elementRef };
};
