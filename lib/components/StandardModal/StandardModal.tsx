import cx from 'clsx';
import React from 'react';
import { Icon, WindowCloseIcon } from '../Icon';
import { EModalCloseCode, withModal } from '../ModalBase';
import { Heading } from '../Typography';
import styles from './style.scss';

export enum ESize {
	Standard = 'standard', // 800px wide
}

export interface IProps {
	size?: ESize;
	className?: string;
	title: string;
}

export const StandardModal = withModal<IProps>(
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
				className={cx([
					styles.modal,
					{ [styles.modalSizeStandard]: size === ESize.Standard },
					className,
				])}>
				<header className={cx(styles.header, styles.headerWithBorder)}>
					<button
						className={styles.headerCloseButton}
						onClick={closeButtonHandler}>
						<Icon size={20} icon={WindowCloseIcon} />
					</button>
					<div className={styles.headerTitle}>
						<Heading is={'h4'} children={title} />
					</div>
				</header>
				<main className={styles.content}>{children}</main>
			</article>
		);
	}
);
