import { WindowCloseIcon } from '@autoguru/icons';
import clsx from 'clsx';
import * as React from 'react';
import { ComponentProps, FunctionComponent, useLayoutEffect } from 'react';
import { useStyles } from 'react-treat';

import { useId } from '../../utils';
import { Box } from '../Box';
import { Icon } from '../Icon';
import { Modal } from '../Modal';
import { Heading } from '../Typography';
import * as styleRefs from './StandardModal.treat';

export enum ESize {
	Standard = 'standard', // 800px wide
}

export interface Props extends ComponentProps<typeof Modal> {
	size?: ESize;
	className?: string;
	title: string;
}

export const StandardModal: FunctionComponent<Props> = ({
	isOpen,
	size = ESize.Standard,
	className = '',
	title,
	onRequestClose,
	children,
}) => {
	const styles = useStyles(styleRefs);

	const titleId = useId();

	const closeButtonHandler = () => {
		if (typeof onRequestClose === 'function') onRequestClose('button');
	};

	const backdropHandler = (event) => {
		if (event.target !== event.currentTarget) return;
		if (typeof onRequestClose === 'function') onRequestClose('backdrop');
	};

	useLayoutEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}

		return () => {
			document.body.style.overflow = '';
		};
	}, [isOpen]);

	return (
		<Modal isOpen={isOpen} onRequestClose={onRequestClose}>
			<Box
				className={styles.container}
				aria-hidden={isOpen ? 'false' : 'true'}
				role="none presentation"
				onClick={backdropHandler}>
				<Box
					is="article"
					role="dialog"
					aria-modal="true"
					aria-labelledby={titleId ? `od-${titleId}` : undefined}
					className={clsx([
						styles.modal,
						{ [styles.modalSizeStandard]: size === ESize.Standard },
						className,
					])}>
					<header
						className={clsx(
							styles.header,
							styles.headerWithBorder,
						)}>
						<button
							className={styles.headerCloseButton}
							aria-label="close"
							onClick={closeButtonHandler}>
							<Icon size="medium" icon={WindowCloseIcon} />
						</button>
						<div
							className={styles.headerTitle}
							id={titleId ? `od-${titleId}` : undefined}>
							<Heading is="h4">{title}</Heading>
						</div>
					</header>
					<main className={styles.content}>{children}</main>
				</Box>
			</Box>
		</Modal>
	);
};
