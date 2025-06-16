import type {
	ComponentProps,
	FunctionComponent,
	MouseEventHandler,
} from 'react';
import * as React from 'react';
import { ReactNode, useLayoutEffect, useRef } from 'react';

import { isBrowser, useEventCallback, useId } from '../../utils';
import { Box } from '../Box/Box';
import { Modal } from '../Modal/Modal';

import * as styles from './MinimalModal.css';

export interface MinimalModalProps
	extends ComponentProps<typeof Modal>,
		Pick<ComponentProps<typeof Box>, 'alignItems'> {
	className?: string;
	children?: ReactNode;
}

export const MinimalModal: FunctionComponent<MinimalModalProps> = ({
	isOpen,
	alignItems = 'center',
	className = '',
	children,
	onRequestClose,
	...modalProps
}) => {
	const titleId = useId();
	const locked = useRef<boolean>(true);

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
		<Modal isOpen={isOpen} onRequestClose={onRequestClose} {...modalProps}>
			<Box
				className={[styles.container, className]}
				height="full"
				display="flex"
				alignItems={alignItems}
				justifyContent="center"
				aria-hidden={isOpen ? 'false' : 'true'}
				role="none presentation"
				onMouseDown={unlockModal}
				onClick={backdropHandler}
			>
				<Box
					as="article"
					role="dialog"
					aria-modal="true"
					aria-labelledby={titleId!}
					display="flex"
					flexDirection="column"
				>
					<Box
						as="main"
						display="flex"
						flexDirection="column"
						flexGrow={0}
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
