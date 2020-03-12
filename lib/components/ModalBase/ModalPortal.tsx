import clsx from 'clsx';
import * as React from 'react';
import {
	FunctionComponent,
	RefObject,
	useCallback,
	useLayoutEffect,
	useRef,
} from 'react';
import { createPortal } from 'react-dom';
import { useStyles } from 'react-treat';

import { isBrowser } from '../../utils';
import { Box } from '../Box';
import { useOutsideClick } from '../OutsideClick';
import * as styleRefs from './ModalBase.treat';

interface Props {
	isOpen: boolean;

	onRequestClose?(e: string): void;
}

export const ModalPortal: FunctionComponent<Props> = ({
	isOpen,
	onRequestClose,
	children,
}) => {
	const contentRef: RefObject<HTMLDivElement> = useRef(null);
	const styles = useStyles(styleRefs);

	useLayoutEffect(() => {
		if (!isOpen || !isBrowser) return void 0;

		document.documentElement.style.overflow = 'hidden';

		return () => {
			document.documentElement.style.overflow = '';
		};
	}, [isOpen]);

	useOutsideClick(
		[contentRef],
		useCallback(() => {
			if (isOpen) {
				onRequestClose?.('overlay');
			}
		}, [onRequestClose, isOpen]),
	);

	return createPortal(
		<Box
			className={clsx(styles.portal.default, {
				[styles.portal.open]: isOpen,
			})}>
			<div className={clsx(styles.panel, styles.alignment)}>
				<div
					ref={contentRef}
					className={clsx(styles.content, styles.alignment)}
					role="dialog"
					aria-modal="true"
					aria-hidden={!isOpen}>
					{children}
				</div>
			</div>
		</Box>,
		document.body,
	);
};
