import { invariant } from '@autoguru/utilities';
import React, { useRef } from 'react';
import {
	useOverlayTrigger,
	useButton,
	type AriaPopoverProps,
} from 'react-aria';
import {
	useOverlayTriggerState,
	type OverlayTriggerState,
} from 'react-stately';

import type { TestIdProp } from '../../types';
import { dataAttrs } from '../../utils/dataAttrs';
import { Button } from '../Button/Button';

import { Popover, type PopoverTextContent } from './Popover';
import { triggerStyle } from './Popover.css';
import { useExitAnimation } from './useExitAnimation';

export type OnStateReadyValue = { close: () => void; isOpen: boolean };

/**
 * Props for the PopoverTrigger component.
 */
export interface PopoverTriggerProps
	extends Pick<
			AriaPopoverProps,
			| 'offset'
			| 'placement'
			| 'shouldCloseOnInteractOutside'
			| 'shouldFlip'
		>,
		TestIdProp {
	/**
	 * The content to display in the popover
	 */
	content: React.ReactNode;
	/**
	 * The element that triggers the popover when interacted with. For accessibility,
	 * this must contain the aria visible content (e.g. "open calender")
	 */
	children: React.ReactNode;
	/**
	 * Whether the trigger is disabled and non-interactive
	 */
	isDisabled?: boolean;
	/**
	 * Language content override
	 */
	lang?: Partial<PopoverTextContent>;
	/**
	 * Callback that receives the overlay trigger state for external control
	 */
	onStateReady?: (state: OnStateReadyValue) => void;
	ref?: React.RefObject<HTMLButtonElement | null>;
}

/**
 * A popover component that displays content in an overlay positioned relative to a trigger element.
 * The popover automatically handles positioning, accessibility, and focus management.
 *
 * Note: Button components are not supported as children due to React Aria compatibility issues,
 * use button tag, plain text, or other elements instead.
 *
 * Closing is held open for as long as the popover root has animations running,
 * and `data-exiting` is set on that root while they play, so consumers can
 * animate the exit with CSS. A popover with no exit animation unmounts in the
 * same commit it always has.
 *
 * @example
 * ```tsx
 * <PopoverTrigger content={<Calendar />}>
 *   Choose Date
 * </PopoverTrigger>
 * ```
 */
export const PopoverTrigger = ({
	content,
	children,
	isDisabled,
	offset,
	placement,
	shouldCloseOnInteractOutside,
	shouldFlip,
	testId,
	lang,
	ref,
	onStateReady,
}: PopoverTriggerProps) => {
	const state = useOverlayTriggerState({});
	const internalRef = useRef<HTMLButtonElement>(null);
	const triggerRef = ref ?? internalRef;
	const { isExiting, rootRef, requestExit } = useExitAnimation(state.close);

	const exitAwareState: OverlayTriggerState = {
		...state,
		setOpen: (isOpen) => (isOpen ? state.open() : requestExit()),
		close: requestExit,
		toggle: () => (state.isOpen ? requestExit() : state.open()),
	};

	// Provide state access to parent component
	React.useEffect(() => {
		if (onStateReady) {
			onStateReady({ close: requestExit, isOpen: state.isOpen });
		}
	}, [onStateReady, requestExit, state.isOpen]);

	const { triggerProps, overlayProps } = useOverlayTrigger(
		{ type: 'dialog' },
		exitAwareState,
		triggerRef,
	);

	const { buttonProps } = useButton(
		{
			...triggerProps,
			isDisabled,
		},
		triggerRef,
	);

	// Validate that Button components are not used as children
	if (React.isValidElement(children) && children.type === Button) {
		invariant(
			false,
			'PopoverTrigger: The Button component is presently incompatible with ReactAria. Please use a native button or other element for the trigger.',
		);
	}

	const isNativeButton =
		React.isValidElement(children) && children.type === 'button';

	const combinedProps = {
		...buttonProps,
		...dataAttrs({ testid: testId }),
		ref: triggerRef,
	};

	const triggerElement = isNativeButton ? (
		React.cloneElement(
			children as React.ReactElement<React.ComponentProps<'button'>>,
			combinedProps,
		)
	) : (
		<button {...combinedProps} className={triggerStyle}>
			{children}
		</button>
	);

	return (
		<>
			{triggerElement}
			{state.isOpen && (
				<Popover
					{...overlayProps}
					state={exitAwareState}
					isExiting={isExiting}
					rootRef={rootRef}
					triggerRef={triggerRef}
					placement={placement}
					offset={offset}
					shouldCloseOnInteractOutside={shouldCloseOnInteractOutside}
					shouldFlip={shouldFlip}
					lang={lang}
				>
					{content}
				</Popover>
			)}
		</>
	);
};

PopoverTrigger.displayName = 'PopoverTrigger';
