import { invariant } from '@autoguru/utilities';
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

	/* istanbul ignore next: our testing context has a document */
	invariant(
		typeof document === void 0,
		'Modals only work on targets with a document',
	);

	useLayoutEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		}

		return () => {
			document.body.style.overflow = null;
		};
	}, [isOpen]);

	useEffect(() => {
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
				<div ref={contentRef} className={styles.modalContent}>
					{children}
				</div>
			</div>
		</div>,
		document.body,
	);
};
