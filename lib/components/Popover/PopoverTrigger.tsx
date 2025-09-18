import { invariant } from '@autoguru/utilities';
import React, { useRef } from 'react';
import {
	useOverlayTrigger,
	useButton,
	type AriaPopoverProps,
} from 'react-aria';
import { useOverlayTriggerState } from 'react-stately';

import type { TestIdProp } from '../../types';
import { dataAttrs } from '../../utils/dataAttrs';
import { Button } from '../Button/Button';

import { Popover, type PopoverTextContent } from './Popover';
import { triggerStyle } from './Popover.css';

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
	onStateReady?: (state: { close: () => void }) => void;
}

/**
 * A popover component that displays content in an overlay positioned relative to a trigger element.
 * The popover automatically handles positioning, accessibility, and focus management.
 *
 * Note: Button components are not supported as children due to React Aria compatibility issues,
 * use button tag, plain text, or other elements instead.
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
	onStateReady,
}: PopoverTriggerProps) => {
	const state = useOverlayTriggerState({});
	const triggerRef = useRef<HTMLButtonElement>(null);

	// Provide state access to parent component
	React.useEffect(() => {
		if (onStateReady) {
			onStateReady({ close: state.close });
		}
	}, [onStateReady, state.close]);

	const { triggerProps, overlayProps } = useOverlayTrigger(
		{ type: 'dialog' },
		state,
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
					state={state}
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
