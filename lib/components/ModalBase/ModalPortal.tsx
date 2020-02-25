import clsx from 'clsx';
import React, {
	FunctionComponent,
	useCallback,
	useEffect,
	useLayoutEffect,
	useRef,
} from 'react';

import { useOutsideClick } from '../OutsideClick';
import { Portal } from '../Portal';
import { usePortalContext } from '../Portal/Portal';
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
	const portalNode = usePortalContext();
	const portalNodeRef = useRef<HTMLElement>(portalNode);
	useEffect(() => {
		portalNodeRef.current = portalNode;
	}, [portalNode]);

	useLayoutEffect(() => {
		if (!isOpen || typeof window === 'undefined') return void 0;

		document.documentElement.style.overflow = 'hidden';

		return () => {
			document.documentElement.style.overflow = null;
		};
	}, [isOpen]);

	useOutsideClick(
		useCallback(() => {
			if (isOpen) {
				onRequestClose(ECloseCode.Overlay);
			}
		}, [onRequestClose, isOpen]),
		[portalNodeRef],
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
