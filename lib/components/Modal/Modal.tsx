import { warning } from '@autoguru/utilities';
import type {
	ComponentProps,
	ComponentType,
	FunctionComponent,
	Reducer,
} from 'react';
import * as React from 'react';
import { ReactNode, useEffect, useLayoutEffect, useReducer } from 'react';
import FocusLock from 'react-focus-lock';

import { isBrowser, useEventCallback } from '../../utils';
import { Box } from '../Box/Box';
import { Portal } from '../Portal/Portal';

import * as styles from './Modal.css';

export interface ModalProps extends ComponentProps<typeof Portal> {
	isOpen: boolean;
	hideBackdrop?: boolean;
	disableBackdropClick?: boolean;
	/**
	 * Lock page scroll while the modal is open. Compensates for the reserved
	 * scrollbar width so the page underneath doesn't shift. Defaults to `false`
	 * — the base `Modal` preserves prior behaviour unless the consumer opts in.
	 */
	lockScroll?: boolean;
	/**
	 * Close the modal when the user presses `Escape`. Fires
	 * `onRequestClose('escapeKeyDown')`. Defaults to `false` — opt in per WAI-ARIA
	 * dialog guidance.
	 */
	closeOnEscapeKeyDown?: boolean;
	children?: ReactNode;

	onRequestClose?(e: 'backdrop' | 'escapeKeyDown' | string): void;
}

type Action = 'OPEN_MODAL' | 'CLOSE_MODAL' | 'ANIMATION_COMPLETE';

type State = 'INITIAL' | 'OPEN' | 'OPENING' | 'CLOSED' | 'CLOSING';

const reducer: Reducer<State, Action> = (prevState, action) => {
	switch (action) {
		case 'OPEN_MODAL': {
			switch (prevState) {
				case 'INITIAL':
				case 'CLOSING':
				case 'CLOSED': {
					return 'OPENING';
				}

				default: {
					return prevState;
				}
			}
		}

		case 'CLOSE_MODAL': {
			switch (prevState) {
				case 'OPEN':
				case 'OPENING': {
					return 'CLOSING';
				}

				default: {
					return prevState;
				}
			}
		}

		case 'ANIMATION_COMPLETE': {
			switch (prevState) {
				case 'CLOSING': {
					return 'CLOSED';
				}

				case 'OPENING': {
					return 'OPEN';
				}

				default: {
					return prevState;
				}
			}
		}

		default: {
			return prevState;
		}
	}
};

export const Modal: FunctionComponent<ModalProps> = ({
	isOpen,
	hideBackdrop = false,
	disableBackdropClick = false,
	lockScroll = false,
	closeOnEscapeKeyDown = false,
	ref,
	noThemedWrapper,
	container,
	onRequestClose,
	children,
}) => {
	const [state, dispatch] = useReducer(reducer, 'INITIAL');

	const handleBackdropClick = useEventCallback((event) => {
		if (event.target !== event.currentTarget) return;
		if (typeof onRequestClose === 'function') onRequestClose('backdrop');
	});

	useEffect(() => {
		dispatch(isOpen ? 'OPEN_MODAL' : 'CLOSE_MODAL');
	}, [isOpen]);

	useEffect(() => {
		if (state === 'CLOSING') {
			const timer = setTimeout(() => {
				dispatch('ANIMATION_COMPLETE');
			}, 300);
			return () => clearTimeout(timer);
		}

		return () => {};
	}, [state]);

	if (isBrowser) {
		useLayoutEffect(() => {
			if (!isOpen || !lockScroll) return undefined;

			const { body, documentElement } = document;
			const prevOverflow = body.style.overflow;
			const prevPaddingRight = body.style.paddingRight;

			body.style.overflow = 'hidden';

			const clientWidth = documentElement.clientWidth;
			if (clientWidth > 0) {
				const scrollbarWidth = window.innerWidth - clientWidth;
				if (scrollbarWidth > 0 && scrollbarWidth <= 40) {
					body.style.paddingRight = `${scrollbarWidth}px`;
				}
			}

			return () => {
				body.style.overflow = prevOverflow;
				body.style.paddingRight = prevPaddingRight;
			};
		}, [isOpen, lockScroll]);
	}

	useEffect(() => {
		if (!isOpen || !closeOnEscapeKeyDown) return undefined;

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key !== 'Escape') return;
			if (typeof onRequestClose === 'function')
				onRequestClose('escapeKeyDown');
		};
		document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [isOpen, closeOnEscapeKeyDown, onRequestClose]);

	return (
		<Portal
			ref={ref}
			noThemedWrapper={noThemedWrapper}
			container={container}
		>
			{state === 'OPENING' || state === 'OPEN' || state === 'CLOSING' ? (
				<FocusLock
					returnFocus
					autoFocus={false}
					onActivation={() => {
						dispatch('ANIMATION_COMPLETE');
					}}
				>
					<Box
						aria-hidden="true"
						position="fixed"
						pointerEvents={
							disableBackdropClick || state === 'CLOSING'
								? 'none'
								: undefined
						}
						opacity={state === 'OPEN' ? undefined : 0}
						// eslint-disable-next-line no-restricted-syntax -- RETAINED: intent-derived ref ("neutral" resolves via colours.intent.neutral), reverted by the C-theme-bridge corrective package — never repointed pre-major (docs/ds2026-plan/track-c.md §1.5 + deviation 12).
						backgroundColour={
							hideBackdrop ? 'transparent' : 'neutral'
						}
						className={[
							styles.backdrop.root,
							styles.transition,
							hideBackdrop && styles.backdrop.invisible,
						]}
						onClick={handleBackdropClick}
					/>

					<Box
						role="presentation"
						position="fixed"
						overflow="hidden"
						opacity={state === 'OPEN' ? undefined : 0}
						className={[
							styles.root,
							styles.transition,
							state === 'OPENING' && styles.entry,
						]}
					>
						{children}
					</Box>
				</FocusLock>
			) : null}
		</Portal>
	);
};

export const withModal =
	<TIncomingProps extends {} = {}>(
		WrappedComponent: ComponentType<ModalProps & TIncomingProps>,
	): FunctionComponent<ModalProps & TIncomingProps> =>
	({ onRequestClose, isOpen, ...rest }) => {
		// TODO: Deprecate me
		warning(
			false,
			'Using withModal is now an anti-pattern. Use <Modal /> instead',
		);
		return (
			<Modal isOpen={isOpen} onRequestClose={onRequestClose}>
				<WrappedComponent
					isOpen={isOpen}
					onRequestClose={onRequestClose}
					{...(rest as TIncomingProps)}
				/>
			</Modal>
		);
	};
