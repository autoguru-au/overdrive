import { XIcon } from '@autoguru/icons';
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
import { mergeRefs } from '../../utils';
import { dataAttrs } from '../../utils/dataAttrs';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';

import { fullScreenStyle, overlayStyle } from './Popover.css';

const defaultEnglish = {
	close: 'close',
} as const;

export type PopoverTextContent = Record<keyof typeof defaultEnglish, string>;

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
	lang?: Partial<PopoverTextContent>;
	/**
	 * Whether the popover is playing its exit animation, exposed to CSS as
	 * `data-exiting` on the popover root
	 */
	isExiting?: boolean;
	/**
	 * Receives the popover root element, the one carrying `data-exiting`
	 */
	rootRef?: React.RefObject<HTMLDivElement | null>;
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
		<div {...dialogProps} ref={ref}>
			{children}
		</div>
	);
};

export const Popover = ({
	children,
	offset = 4,
	state,
	triggerRef,
	lang,
	isExiting,
	rootRef,
	...props
}: PopoverProps) => {
	const popoverRef = useRef<HTMLDivElement>(null);
	const [isTablet] = useMedia(['tablet']);

	const isFullScreen = !isTablet;
	const textValues = { ...defaultEnglish, ...lang };

	const { close } = state;

	// Handle Esc manually since we have two different modes (popover vs fullscreen dialog)
	// and react-aria would need a slightly different ModalTrigger pattern
	useEffect(() => {
		if (!isFullScreen) return;

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				event.preventDefault();
				close();
			}
		};

		document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [isFullScreen, close]);

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
					<div
						className={fullScreenStyle}
						ref={rootRef}
						{...dataAttrs({ exiting: isExiting })}
					>
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
									onClick={close}
									aria-label={textValues.close}
								>
									<Icon icon={XIcon} />
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
			<div
				{...popoverProps}
				ref={mergeRefs([popoverRef, rootRef])}
				className={overlayStyle}
				{...dataAttrs({ exiting: isExiting })}
			>
				<Dialog>{children}</Dialog>
				<DismissButton onDismiss={close} />
			</div>
		</Overlay>
	);
};

Popover.displayName = 'Popover';
