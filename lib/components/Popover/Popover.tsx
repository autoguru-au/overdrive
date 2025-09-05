import React, { useRef } from 'react';
import {
	useOverlay,
	useOverlayTrigger,
	useButton,
	DismissButton,
	FocusScope,
	type AriaOverlayProps,
} from 'react-aria';
import {
	useOverlayTriggerState,
	type OverlayTriggerState,
} from 'react-stately';

import type { TestIdProp } from '../../types';
import { dataAttrs } from '../../utils/dataAttrs';

import { overlayStyle, triggerStyle } from './Popover.css';

export interface PopoverTriggerProps extends TestIdProp {
	children: [React.ReactElement, React.ReactElement];
	placement?: 'top' | 'bottom' | 'left' | 'right';
	offset?: number;
	shouldCloseOnBlur?: boolean;
	isDisabled?: boolean;
}

interface PopoverProps extends AriaOverlayProps {
	children: React.ReactNode;
	state: OverlayTriggerState;
	triggerRef: React.RefObject<HTMLElement | null>;
	placement?: 'top' | 'bottom' | 'left' | 'right';
	offset?: number;
}

const Popover = ({
	children,
	state,
	triggerRef,
	placement = 'bottom',
	offset = 8,
	...ariaOverlayProps
}: PopoverProps) => {
	const overlayRef = useRef<HTMLDivElement>(null);

	const { overlayProps } = useOverlay(
		{
			onClose: state.close,
			shouldCloseOnBlur: true,
			isOpen: state.isOpen,
			isDismissable: true,
			...ariaOverlayProps,
		},
		overlayRef,
	);

	return (
		<div
			{...overlayProps}
			ref={overlayRef}
			className={overlayStyle}
			style={{
				position: 'absolute',
				zIndex: 100,
				...(placement === 'bottom' && {
					top: '100%',
					marginTop: offset,
				}),
				...(placement === 'top' && {
					bottom: '100%',
					marginBottom: offset,
				}),
				...(placement === 'left' && {
					right: '100%',
					marginRight: offset,
				}),
				...(placement === 'right' && {
					left: '100%',
					marginLeft: offset,
				}),
			}}
		>
			<DismissButton onDismiss={state.close} />
			<FocusScope restoreFocus>{children}</FocusScope>
			<DismissButton onDismiss={state.close} />
		</div>
	);
};

export const PopoverTrigger = ({
	children,
	placement = 'bottom',
	offset = 8,
	shouldCloseOnBlur = true,
	isDisabled = false,
	testId,
}: PopoverTriggerProps) => {
	const [trigger, content] = children;
	const state = useOverlayTriggerState({});
	const triggerRef = useRef<HTMLElement>(null);

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
		<div
			style={{ position: 'relative' }}
			{...dataAttrs({ testid: testId })}
		>
			{React.cloneElement(trigger as React.ReactElement<any>, {
				...buttonProps,
				ref: triggerRef,
				className: triggerStyle,
			})}
			{state.isOpen && (
				<Popover
					{...overlayProps}
					state={state}
					triggerRef={triggerRef}
					placement={placement}
					offset={offset}
					shouldCloseOnBlur={shouldCloseOnBlur}
				>
					{content}
				</Popover>
			)}
		</div>
	);
};

PopoverTrigger.displayName = 'PopoverTrigger';
