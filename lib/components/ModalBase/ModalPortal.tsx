import clsx from 'clsx';
import React, {
	FunctionComponent,
	RefObject,
	useEffect,
	useLayoutEffect,
	useRef,
} from 'react';
import { createPortal } from 'react-dom';
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
	const contentRef: RefObject<HTMLDivElement> = useRef(null);

	useLayoutEffect(() => {
		if (!isOpen || typeof window === 'undefined') return void 0;

		document.documentElement.style.overflow = 'hidden';

		return () => {
			document.documentElement.style.overflow = null;
		};
	}, [isOpen]);

	useEffect(() => {
		if (typeof window === 'undefined') return void 0;

		function callback(e: any) {
			if (!contentRef.current.contains(e.target) && isOpen) {
				onRequestClose(ECloseCode.Overlay);
			}
		}

		document.body.addEventListener('mouseup', callback);

		return () => document.body.removeEventListener('mouseup', callback);
	}, [isOpen, onRequestClose]);

	return createPortal(
		<div
			className={clsx(styles.modalPortal, {
				[styles.modalPortalIsOpen]: isOpen,
			})}>
			<div className={styles.modalPanel}>
				<div
					ref={contentRef}
					className={styles.modalContent}
					role="dialog"
					aria-modal="true"
					aria-hidden={!isOpen}>
					{children}
				</div>
			</div>
		</div>,
		document.body,
	);
};
