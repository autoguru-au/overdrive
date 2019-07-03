import clsx from 'clsx';
import React from 'react';
import { Icon, WindowCloseIcon } from '../Icon';
import { EModalCloseCode, withModal } from '../ModalBase';
import { Heading } from '../Typography';
import styles from './style.scss';

export enum ESize {
	Standard = 'standard', // 800px wide
}

export interface Props {
	size?: ESize;
	className?: string;
	title: string;
}

export const StandardModal = withModal<Props>(
	({
		size = ESize.Standard,
		className = '',
		title,
		onRequestClose,
		children,
	}) => {
		const closeButtonHandler = () => {
			onRequestClose(EModalCloseCode.Button);
		};

		return (
			<article
				className={clsx([
					styles.modal,
					{ [styles.modalSizeStandard]: size === ESize.Standard },
					className,
				])}>
				<header
					className={clsx(styles.header, styles.headerWithBorder)}>
					<button
						className={styles.headerCloseButton}
						aria-label="close"
						onClick={closeButtonHandler}>
						<Icon size={20} icon={WindowCloseIcon} />
					</button>
					<div className={styles.headerTitle}>
						<Heading children={title} is="h4" />
					</div>
				</header>
				<main className={styles.content}>{children}</main>
			</article>
		);
	},
);
