import React, { useRef } from 'react';
import {
	useOverlayTrigger,
	useButton,
	type AriaPopoverProps,
} from 'react-aria';
import {
	useOverlayTriggerState,
	// type OverlayTriggerState,
} from 'react-stately';

import type { TestIdProp } from '../../types';
import { dataAttrs } from '../../utils/dataAttrs';

import { Popover } from './Popover';
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
	/** The content to display in the popover */
	content: React.ReactNode;
	children: React.ReactNode;
	// /** Array containing the trigger element and popover content: [trigger, content] */
	// children: [React.ReactElement, React.ReactElement];
	/** Whether the trigger is disabled and non-interactive. */
	isDisabled?: boolean;
}

/**
 * A popover component that displays content in an overlay positioned relative to a trigger element.
 * The popover automatically handles positioning, accessibility, and focus management.
 *
 * @example
 * ```tsx
 * import { PopoverTrigger } from '@autoguru/overdrive';
 *
 * <PopoverTrigger placement="bottom" offset={12}>
 *   <Button>Open Menu</Button>
 *   <div>
 *     <h3>Menu Options</h3>
 *     <ul>
 *       <li><Button variant="secondary">Edit</Button></li>
 *       <li><Button variant="danger">Delete</Button></li>
 *     </ul>
 *   </div>
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
}: PopoverTriggerProps) => {
	const state = useOverlayTriggerState({});
	const triggerRef = useRef<HTMLButtonElement>(null);

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

	return (
		<>
			<button
				{...buttonProps}
				ref={triggerRef}
				className={triggerStyle}
				// style={{ position: 'relative' }}
				{...dataAttrs({ testid: testId })}
			>
				{children}
			</button>
			{/* {React.cloneElement(trigger as React.ReactElement<any>, {
				...buttonProps,
				ref: triggerRef,
				className: triggerStyle,
			})} */}
			{state.isOpen && (
				<Popover
					{...overlayProps}
					state={state}
					triggerRef={triggerRef}
					placement={placement}
					offset={offset}
					shouldCloseOnInteractOutside={shouldCloseOnInteractOutside}
					shouldFlip={shouldFlip}
				>
					{content}
				</Popover>
			)}
		</>
	);
};

PopoverTrigger.displayName = 'PopoverTrigger';
