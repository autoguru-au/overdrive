import { CloseIcon } from '@autoguru/icons';
import React, { useRef, useEffect } from 'react';
import {
	usePopover,
	useDialog,
	DismissButton,
	Overlay,
	type AriaPopoverProps,
	type AriaDialogProps,
} from 'react-aria';
import { type OverlayTriggerState } from 'react-stately';

import { useMedia } from '../../hooks/useMedia/useMedia';
import { sprinkles } from '../../styles/sprinkles.css';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';

import { fullScreenStyle, overlayStyle } from './Popover.css';

const defaultEnglish = {
	close: 'Close',
} as const;

export type Language = Partial<Record<keyof typeof defaultEnglish, string>>;

/**
 * Internal props for the Popover component.
 */
export interface PopoverProps extends Omit<AriaPopoverProps, 'popoverRef'> {
	/**
	 * Content to display inside the popover
	 */
	children: React.ReactNode;
	/**
	 * State object that controls the popover's open/close state
	 */
	state: OverlayTriggerState;
	/**
	 * Reference to the trigger element for positioning
	 */
	triggerRef: React.RefObject<HTMLElement | null>;
	/**
	 * Language content override
	 */
	lang?: Language;
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
	lang,
	...props
}: PopoverProps) => {
	const popoverRef = useRef<HTMLDivElement>(null);
	const [isTablet] = useMedia(['tablet']);

	const isFullScreen = !isTablet;

	// Handle Esc manually since we have two different modes (popover vs fullscreen dialog)
	// and react-aria would need a slightly different ModalTrigger pattern
	useEffect(() => {
		if (!isFullScreen) return;

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				event.preventDefault();
				state.close();
			}
		};

		document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [isFullScreen, state]);

	const { popoverProps, underlayProps } = usePopover(
		{
			...props,
			offset,
			triggerRef,
			popoverRef,
		},
		state,
	);

	// Fullscreen mode: render Dialog directly without popover positioning
	if (isFullScreen) {
		return (
			<Overlay>
				<Dialog>
					<div className={fullScreenStyle}>
						<div
							className={sprinkles({
								display: 'flex',
								flexDirection: 'column',
								gap: '5',
								p: '3',
							})}
						>
							<div className={sprinkles({ alignSelf: 'end' })}>
								<Button
									variant="secondary"
									minimal
									rounded
									onClick={state.close}
									aria-label={
										lang?.close ?? defaultEnglish.close
									}
								>
									<Icon icon={CloseIcon} />
								</Button>
							</div>
							{children}
						</div>
					</div>
				</Dialog>
			</Overlay>
		);
	}

	// Standard popover mode: use popover positioning
	return (
		<Overlay>
			<div {...underlayProps} />
			<div {...popoverProps} ref={popoverRef} className={overlayStyle}>
				<Dialog>{children}</Dialog>
				<DismissButton onDismiss={state.close} />
			</div>
		</Overlay>
	);
};

Popover.displayName = 'Popover';
