import { warning } from '@autoguru/utilities';
import type {
	ComponentProps,
	ComponentType,
	FunctionComponent,
	Reducer,
} from 'react';
import * as React from 'react';
import { ReactNode, useEffect, useReducer } from 'react';
import FocusLock from 'react-focus-lock';

import { useEventCallback } from '../../utils';
import { Box } from '../Box/Box';
import { Portal } from '../Portal/Portal';

import * as styles from './Modal.css';

export interface ModalProps extends ComponentProps<typeof Portal> {
	isOpen: boolean;
	hideBackdrop?: boolean;
	disableBackdropClick?: boolean;
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
