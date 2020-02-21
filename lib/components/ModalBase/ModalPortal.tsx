import clsx from 'clsx';
import React, { FunctionComponent, useCallback, useLayoutEffect } from 'react';

import { useOutsideClick } from '../OutsideClick';
import { Portal } from '../Portal';
import { usePortalContext } from '../Portal/PortalProvider';
import { ECloseCode } from './enums';
import styles from './style.scss';

interface Props {
	isOpen: boolean;

	onRequestClose?(e: ECloseCode): void;
}

export const ModalPortal: FunctionComponent<Props> = ({
	isOpen,
	onRequestClose,
	children,
}) => {
	const { portalInstanceRef } = usePortalContext();

	useLayoutEffect(() => {
		if (!isOpen || typeof window === 'undefined') return void 0;

		document.documentElement.style.overflow = 'hidden';

		return () => {
			document.documentElement.style.overflow = null;
		};
	}, [isOpen]);

	useOutsideClick(
		[portalInstanceRef],
		useCallback(() => {
			if (isOpen) {
				onRequestClose(ECloseCode.Overlay);
			}
		}, [onRequestClose, isOpen]),
	);

	return (
		<Portal>
			<div
				className={clsx(styles.modalPortal, {
					[styles.modalPortalIsOpen]: isOpen,
				})}>
				<div className={styles.modalPanel}>
					<div
						className={styles.modalContent}
						role="dialog"
						aria-modal="true"
						aria-hidden={!isOpen}>
						{children}
					</div>
				</div>
			</div>
		</Portal>
	);
};
