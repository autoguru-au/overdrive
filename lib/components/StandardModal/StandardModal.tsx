import { WindowCloseIcon } from '@autoguru/icons';
import clsx from 'clsx';
import * as React from 'react';
import { useStyles } from 'react-treat';

import { Box } from '../Box';
import { Icon } from '../Icon';
import { withModal } from '../ModalBase';
import { Heading } from '../Typography';
import * as styleRefs from './StandardModal.treat';

export enum ESize {
	Standard = 'standard', // 800px wide
}

interface Props {
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
			onRequestClose?.('button');
		};

		const styles = useStyles(styleRefs);

		return (
			<Box
				is="article"
				className={clsx([
					styles.modal,
					styles.modalDesktopView,
					{ [styles.modalSizeStandard]: size === ESize.Standard },
					className,
				])}>
				<header
					className={clsx(styles.header, styles.headerWithBorder)}>
					<button
						className={styles.headerCloseButton}
						aria-label="close"
						onClick={closeButtonHandler}>
						<Icon size="medium" icon={WindowCloseIcon} />
					</button>
					<div className={styles.headerTitle}>
						<Heading is="h4">{title}</Heading>
					</div>
				</header>
				<main className={styles.content}>{children}</main>
			</Box>
		);
	},
);
