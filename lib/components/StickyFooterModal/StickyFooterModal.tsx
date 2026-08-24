import { XIcon } from '@autoguru/icons';
import clsx from 'clsx';
import type {
	ComponentProps,
	FunctionComponent,
	MouseEventHandler,
} from 'react';
import * as React from 'react';
import { useLayoutEffect, useRef, useState } from 'react';

import { textStyles } from '../../styles/typography';
import { isBrowser, useEventCallback, useId } from '../../utils';
import { Box } from '../Box/Box';
import { Button } from '../Button/Button';
import { Heading } from '../Heading/Heading';
import { Icon } from '../Icon/Icon';
import { Modal } from '../Modal/Modal';

import * as styles from './StickyFooterModal.css';

export enum ESize {
	Skinny = 'skinny', // 420px wide
	Narrow = 'narrow', // 600px wide
	Standard = 'standard', // 800px wide
}

type Size = 'skinny' | 'narrow' | 'standard';

export type StickyFooterModalVariant = 'single-cta' | 'dual-cta';

export interface StickyFooterModalProps extends ComponentProps<typeof Modal> {
	size?: ESize | Size;
	className?: string;
	title: string;
	/**
	 * Footer button layout.
	 *
	 * - `'single-cta'` — one primary action, right-aligned.
	 * - `'dual-cta'` — secondary + primary actions, right-aligned.
	 */
	footer?: StickyFooterModalVariant;
	/** Primary CTA label. Defaults to `'Confirm'`. */
	primaryLabel?: string;
	/** Secondary CTA label (dual-cta only). Defaults to `'Cancel'`. */
	secondaryLabel?: string;
	/** Primary CTA click handler. Modal auto-closes after invocation unless `closeOnPrimary` is `false`. */
	onPrimaryClick?: () => void;
	/** Secondary CTA click handler (dual-cta only). Modal auto-closes after invocation unless `closeOnSecondary` is `false`. */
	onSecondaryClick?: () => void;
	/** Disables the primary CTA. */
	primaryDisabled?: boolean;
	/** Auto-close after the primary CTA fires. Defaults to `true`. */
	closeOnPrimary?: boolean;
	/** Auto-close after the secondary CTA fires. Defaults to `true`. */
	closeOnSecondary?: boolean;
	/** ID of an element that describes the modal for assistive tech. */
	'aria-describedby'?: string;
}

export const StickyFooterModal: FunctionComponent<StickyFooterModalProps> = ({
	isOpen,
	size = 'standard',
	className = '',
	title,
	container,
	noThemedWrapper,
	ref,
	onRequestClose,
	footer = 'dual-cta',
	primaryLabel = 'Confirm',
	secondaryLabel = 'Cancel',
	onPrimaryClick,
	onSecondaryClick,
	primaryDisabled = false,
	closeOnPrimary = true,
	closeOnSecondary = true,
	'aria-describedby': ariaDescribedBy,
	children,
}) => {
	const titleId = useId();
	const locked = useRef<boolean>(true);
	const bodyRef = useRef<HTMLElement>(null);
	const [isScrolled, setIsScrolled] = useState(false);

	const closeButtonHandler = useEventCallback<
		MouseEventHandler<HTMLButtonElement>
	>(() => {
		if (typeof onRequestClose === 'function') onRequestClose('button');
	});

	const primaryClickHandler = useEventCallback(() => {
		if (typeof onPrimaryClick === 'function') onPrimaryClick();
		if (closeOnPrimary && typeof onRequestClose === 'function')
			onRequestClose('primary');
	});

	const secondaryClickHandler = useEventCallback(() => {
		if (typeof onSecondaryClick === 'function') onSecondaryClick();
		if (closeOnSecondary && typeof onRequestClose === 'function')
			onRequestClose('secondary');
	});

	const handleBodyScroll = useEventCallback(() => {
		const node = bodyRef.current;
		if (!node) return;
		const scrolled = node.scrollTop > 0;
		setIsScrolled((prev) => (prev === scrolled ? prev : scrolled));
	});

	const unlockModal = useEventCallback<MouseEventHandler<HTMLDivElement>>(
		(event) => {
			locked.current = event.target !== event.currentTarget;
		},
	);

	const backdropHandler = useEventCallback<MouseEventHandler<HTMLDivElement>>(
		(event) => {
			if (locked.current || event.target !== event.currentTarget) return;
			if (typeof onRequestClose === 'function')
				onRequestClose('backdrop');
		},
	);

	if (isBrowser) {
		useLayoutEffect(() => {
			document.body.style.overflow = isOpen ? 'hidden' : '';

			return () => {
				document.body.style.overflow = '';
			};
		}, [isOpen]);
	}

	return (
		<Modal
			isOpen={isOpen}
			ref={ref}
			noThemedWrapper={noThemedWrapper}
			container={container}
			onRequestClose={onRequestClose}
		>
			<Box
				className={styles.container}
				height="full"
				display="flex"
				alignItems="center"
				justifyContent="center"
				aria-hidden={isOpen ? 'false' : 'true'}
				role="none presentation"
				onMouseDown={unlockModal}
				onClick={backdropHandler}
			>
				<Box
					as="article"
					overflow="hidden"
					role="dialog"
					aria-modal="true"
					aria-labelledby={titleId!}
					aria-describedby={ariaDescribedBy}
					display="flex"
					flexDirection="column"
					backgroundColor="default"
					marginTop="9"
					className={clsx([
						styles.modal,
						{ [styles.modalSizeStandard]: size === 'standard' },
						{ [styles.modalSizeNarrow]: size === 'narrow' },
						{ [styles.modalSizeSkinny]: size === 'skinny' },
						className,
					])}
				>
					<Box
						as="header"
						flexShrink="0"
						position="relative"
						display="flex"
						alignItems="center"
						justifyContent="space-between"
						width="full"
						paddingY="3"
						paddingLeft="5"
						paddingRight="2"
						borderWidthBottom="1"
						borderColor="muted"
						className={clsx(isScrolled && styles.headerScrolled)}
					>
						<Box flexGrow="0" id={titleId!}>
							<Heading as="h2" color="primary">{title}</Heading>
						</Box>
						<Button
							minimal
							rounded
							variant="secondary"
							size="medium"
							aria-label="Close dialog"
							onClick={closeButtonHandler}
						>
							<Icon
								className={textStyles({ color: 'tertiary' })}
								icon={XIcon}
								size="medium"
							/>
						</Button>
					</Box>
					<Box
						as="main"
						ref={bodyRef}
						display="flex"
						flexDirection="column"
						flexGrow="1"
						height="full"
						className={styles.content}
						onScroll={handleBodyScroll}
					>
						{children}
					</Box>
					<Box
						as="footer"
						flexShrink="0"
						display="flex"
						alignItems="center"
						justifyContent="flexEnd"
						gap="3"
						width="full"
						paddingY="5"
						paddingX="5"
						borderWidthTop="1"
						borderColor="muted"
					>
						{footer === 'dual-cta' ? (
							<Button
								variant="secondary"
								size="medium"
								onClick={secondaryClickHandler}
							>
								{secondaryLabel}
							</Button>
						) : null}
						<Button
							variant="primary"
							size="medium"
							disabled={primaryDisabled}
							onClick={primaryClickHandler}
						>
							{primaryLabel}
						</Button>
					</Box>
				</Box>
			</Box>
		</Modal>
	);
};
