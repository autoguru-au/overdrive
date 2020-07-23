import { WindowCloseIcon } from '@autoguru/icons';
import clsx from 'clsx';
import * as React from 'react';
import { ComponentProps, FunctionComponent, useLayoutEffect } from 'react';
import { useStyles } from 'react-treat';

import { useId } from '../../utils';
import { Box } from '../Box';
import { Heading } from '../Heading';
import { Icon } from '../Icon';
import { Modal } from '../Modal';
import * as styleRefs from './StandardModal.treat';

export enum ESize {
	Standard = 'standard', // 800px wide
}

type Size = 'standard';

export interface Props extends ComponentProps<typeof Modal> {
	size?: ESize | Size;
	className?: string;
	title: string;
}

export const StandardModal: FunctionComponent<Props> = ({
	isOpen,
	size = 'standard',
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
				height="full"
				display="flex"
				alignItems="center"
				justifyContent="center"
				aria-hidden={isOpen ? 'false' : 'true'}
				role="none presentation"
				onClick={backdropHandler}>
				<Box
					is="article"
					role="dialog"
					aria-modal="true"
					aria-labelledby={titleId!}
					display="flex"
					flexDirection="column"
					backgroundColour="white"
					marginTop="8"
					className={clsx([
						styles.modal,
						{ [styles.modalSizeStandard]: size === 'standard' },
						className,
					])}>
					<Box
						is="header"
						flexShrink={0}
						position="relative"
						display="flex"
						alignItems="center"
						width="full"
						paddingY="6"
						paddingX="5"
						borderWidthBottom="1"
						borderColour="light"
						className={styles.header}>
						<Box
							is="button"
							position="absolute"
							padding="5"
							className={styles.headerCloseButton}
							aria-label="close"
							onClick={closeButtonHandler}>
							<Icon size="medium" icon={WindowCloseIcon} />
						</Box>
						<div id={titleId!}>
							<Heading is="h4">{title}</Heading>
						</div>
					</Box>
					<Box
						is="main"
						flexGrow={1}
						height="full"
						className={styles.content}>
						{children}
					</Box>
				</Box>
			</Box>
		</Modal>
	);
};
