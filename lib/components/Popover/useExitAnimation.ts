import { type RefObject, useEffect, useRef, useState } from 'react';

import { useEventCallback } from '../../utils';

const EXITING_ATTRIBUTE = 'data-exiting';

/**
 * Upper bound on how long an element may be held mounted while its exit
 * animation plays. An animation that never settles cannot strand the element.
 */
export const EXIT_TIMEOUT_MS = 1000;

const willSettle = ({ effect }: Animation) => {
	const endTime = effect?.getComputedTiming().endTime;
	return typeof endTime !== 'number' || Number.isFinite(endTime);
};

export interface ExitAnimation {
	/**
	 * Whether the element is currently playing its exit animation
	 */
	isExiting: boolean;
	/**
	 * Attach to the element whose animations gate the exit
	 */
	rootRef: RefObject<HTMLDivElement | null>;
	/**
	 * Marks the element as exiting and calls `onExited` once its animations
	 * settle. Calls `onExited` straight away when nothing is animating.
	 */
	requestExit: () => void;
}

/**
 * Defers `onExited` until the exit animations on `rootRef` have finished.
 *
 * The element is marked with `data-exiting` before its animations are read, so
 * CSS keyed off that attribute is running by the time it is measured. Endless
 * animations such as a loading spinner are ignored, since they never settle. An
 * element with nothing to play settles synchronously, leaving the caller's
 * state change in the same commit it would have been in without this hook.
 */
export const useExitAnimation = (onExited: () => void): ExitAnimation => {
	const rootRef = useRef<HTMLDivElement>(null);
	const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
	const isSettlingRef = useRef(false);
	const [isExiting, setIsExiting] = useState(false);

	const clearTimer = () => {
		if (timerRef.current === null) return;
		clearTimeout(timerRef.current);
		timerRef.current = null;
	};

	const settle = useEventCallback(() => {
		if (!isSettlingRef.current) return;
		isSettlingRef.current = false;
		clearTimer();
		setIsExiting(false);
		onExited();
	});

	const requestExit = useEventCallback(() => {
		if (isSettlingRef.current) return;

		const element = rootRef.current;
		if (!element || typeof element.getAnimations !== 'function') {
			onExited();
			return;
		}

		element.setAttribute(EXITING_ATTRIBUTE, '');
		const animations = element
			.getAnimations({ subtree: true })
			.filter((animation) => willSettle(animation));

		if (animations.length === 0) {
			element.removeAttribute(EXITING_ATTRIBUTE);
			onExited();
			return;
		}

		isSettlingRef.current = true;
		timerRef.current = setTimeout(settle, EXIT_TIMEOUT_MS);
		setIsExiting(true);

		Promise.all(animations.map(({ finished }) => finished))
			.then(settle)
			.catch(settle);
	});

	useEffect(
		() => () => {
			isSettlingRef.current = false;
			clearTimer();
		},
		[],
	);

	return { isExiting, rootRef, requestExit };
};
