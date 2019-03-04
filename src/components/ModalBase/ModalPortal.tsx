import { invariant } from '@autoguru/utilities';
import cx from 'clsx';
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

interface IProps {
	isOpen: boolean;

	onRequestClose?(e: ECloseCode): void;
}

export const ModalPortal: FunctionComponent<IProps> = ({
	isOpen,
	onRequestClose,
	children,
}) => {
	const contentRef: RefObject<HTMLDivElement> = useRef(null);

	/* istanbul ignore next: our testing context has a document */
	invariant(
		typeof document === void 0,
		'Modals only work on targets with a document'
	);

	useLayoutEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		}

		return () => (document.body.style.overflow = null);
	}, [isOpen]);

	useEffect(() => {
		function callback(e: any) {
			if (!contentRef.current.contains(e.target) && isOpen) {
				onRequestClose(ECloseCode.Overlay);
			}
		}

		document.body.addEventListener('mouseup', callback);

		return () => document.body.removeEventListener('mouseup', callback);
	}, [contentRef.current, isOpen, onRequestClose]);

	return createPortal(
		<div
			className={cx(styles.modalPortal, {
				[styles.modalPortalIsOpen]: isOpen,
			})}>
			<div className={styles.modalPanel}>
				<div className={styles.modalContent} ref={contentRef}>
					{children}
				</div>
			</div>
		</div>,
		document.body
	);
};
