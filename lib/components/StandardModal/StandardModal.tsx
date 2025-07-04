import { WindowCloseIcon } from '@autoguru/icons';
import clsx from 'clsx';
import type {
	ComponentProps,
	FunctionComponent,
	MouseEventHandler,
} from 'react';
import * as React from 'react';
import { useLayoutEffect, useRef } from 'react';

import { textStyles } from '../../styles/typography';
import { isBrowser, useEventCallback, useId } from '../../utils';
import { Box } from '../Box/Box';
import { Button } from '../Button/Button';
import { Heading } from '../Heading/Heading';
import { Icon } from '../Icon/Icon';
import { Modal } from '../Modal/Modal';

import * as styles from './StandardModal.css';

export enum ESize {
	Skinny = 'skinny', // 420px wide
	Narrow = 'narrow', // 600px wide
	Standard = 'standard', // 800px wide
}

type Size = 'skinny' | 'narrow' | 'standard';

export interface StandardModalProps extends ComponentProps<typeof Modal> {
	size?: ESize | Size;
	className?: string;
	title: string;
}

export const StandardModal: FunctionComponent<StandardModalProps> = ({
	isOpen,
	size = 'standard',
	className = '',
	title,
	container,
	noThemedWrapper,
	ref,
	onRequestClose,
	children,
}) => {
	const titleId = useId();
	const locked = useRef<boolean>(true);

	const closeButtonHandler = useEventCallback<
		MouseEventHandler<HTMLButtonElement>
	>(() => {
		if (typeof onRequestClose === 'function') onRequestClose('button');
	});

	const unlockModal = useEventCallback<MouseEventHandler<HTMLDivElement>>(
		(event) => {
			locked.current = event.target !== event.currentTarget;
		},
	);

	const backdropHandler = useEventCallback<MouseEventHandler<HTMLDivElement>>(
		(event) => {
			if (locked.current || event.target !== event.currentTarget) return;
			if (typeof onRequestClose === 'function')
				onRequestClose('backdrop');
		},
	);

	if (isBrowser) {
		useLayoutEffect(() => {
			document.body.style.overflow = isOpen ? 'hidden' : '';

			return () => {
				document.body.style.overflow = '';
			};
		}, [isOpen]);
	}

	return (
		<Modal
			isOpen={isOpen}
			ref={ref}
			noThemedWrapper={noThemedWrapper}
			container={container}
			onRequestClose={onRequestClose}
		>
			<Box
				className={styles.container}
				height="full"
				display="flex"
				alignItems="center"
				justifyContent="center"
				aria-hidden={isOpen ? 'false' : 'true'}
				role="none presentation"
				onMouseDown={unlockModal}
				onClick={backdropHandler}
			>
				<Box
					as="article"
					overflow="hidden"
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
						{ [styles.modalSizeNarrow]: size === 'narrow' },
						{ [styles.modalSizeSkinny]: size === 'skinny' },
						className,
					])}
				>
					<Box
						as="header"
						flexShrink="0"
						position="relative"
						display="flex"
						alignItems="center"
						justifyContent="space-between"
						width="full"
						paddingY="3"
						paddingLeft="5"
						paddingRight="2"
						borderWidthBottom="1"
						borderColour="light"
					>
						<Box flexGrow="0" id={titleId!}>
							<Heading as="h4">{title}</Heading>
						</Box>
						<Button
							minimal
							rounded
							variant="secondary"
							size="small"
							aria-label="close"
							onClick={closeButtonHandler}
						>
							<Icon
								className={textStyles({ colour: 'muted' })}
								icon={WindowCloseIcon}
								size="medium"
							/>
						</Button>
					</Box>
					<Box
						as="main"
						display="flex"
						flexDirection="column"
						flexGrow="1"
						height="full"
						className={styles.content}
					>
						{children}
					</Box>
				</Box>
			</Box>
		</Modal>
	);
};
