import React, { useRef } from 'react';
import {
	usePopover,
	useDialog,
	DismissButton,
	Overlay,
	type AriaPopoverProps,
	type AriaDialogProps,
} from 'react-aria';
import { type OverlayTriggerState } from 'react-stately';

import { overlayStyle } from './Popover.css';

/**
 * Internal props for the Popover component.
 */
export interface PopoverProps extends Omit<AriaPopoverProps, 'popoverRef'> {
	/** Content to display inside the popover */
	children: React.ReactNode;
	/** State object that controls the popover's open/close state */
	state: OverlayTriggerState;
	/** Reference to the trigger element for positioning */
	triggerRef: React.RefObject<HTMLElement | null>;
}

/**
 * Internal props for the Dialog wrapper component.
 */
interface DialogProps extends AriaDialogProps {
	children: React.ReactNode;
}

const Dialog = ({ children, ...props }: DialogProps) => {
	const ref = useRef<HTMLDivElement>(null);
	const { dialogProps } = useDialog(props, ref);

	return (
		<div {...dialogProps} ref={ref} /* style={{ outline: 'none' }} */>
			{children}
		</div>
	);
};

export const Popover = ({
	children,
	offset = 8,
	state,
	triggerRef,
	...props
}: PopoverProps) => {
	const popoverRef = useRef<HTMLDivElement>(null);

	const { popoverProps, underlayProps } = usePopover(
		{
			...props,
			offset,
			triggerRef,
			popoverRef,
		},
		state,
	);

	return (
		<Overlay>
			<div {...underlayProps} style={{ position: 'fixed', inset: 0 }} />
			<div {...popoverProps} ref={popoverRef} className={overlayStyle}>
				<DismissButton onDismiss={state.close} />
				<Dialog>{children}</Dialog>
				<DismissButton onDismiss={state.close} />
			</div>
		</Overlay>
	);
};

Popover.displayName = 'Popover';
