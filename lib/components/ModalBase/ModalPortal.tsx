import clsx from 'clsx';
import * as React from 'react';
import { FunctionComponent, useLayoutEffect, useRef } from 'react';
import { useStyles } from 'react-treat';
import { Box } from '../Box';
import * as styleRefs from './ModalBase.treat';
import { Portal } from '../Portal';

interface Props {
	isOpen: boolean;

	onRequestClose?(e: string): void;
}

export const ModalPortal: FunctionComponent<Props> = ({
	isOpen,
	onRequestClose,
	children,
}) => {
	const styles = useStyles(styleRefs);

	const contentRef = useRef<HTMLDivElement | null>(null);

	useLayoutEffect(() => {
		if (isOpen) document.documentElement.style.overflow = 'hidden';

		return () => {
			document.documentElement.style.overflow = '';
		};
	}, [isOpen]);

	return (
		<Portal>
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
			</Box>
		</Portal>
	);
};
