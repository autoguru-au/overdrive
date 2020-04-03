import clsx from 'clsx';
import * as React from 'react';
import {
	ComponentProps,
	ComponentType,
	FunctionComponent,
	MouseEventHandler,
} from 'react';
import { useStyles } from 'react-treat';
import { Box } from '../Box';
import * as styleRefs from './Modal.treat';
import { Portal } from '../Portal';
import { warning } from '@autoguru/utilities';

export interface Props {
	hideBackdrop?: boolean;
	isOpen: boolean;

	onRequestClose?(e: 'backdrop' | 'escapeKeyDown' | string): void;
}

export const Modal: FunctionComponent<Props> = ({
	isOpen,
	hideBackdrop = false,
	onRequestClose,
	children,
}) => {
	const styles = useStyles(styleRefs);

	const handleBackdropClick: ComponentProps<typeof Backdrop>['onClick'] = (
		event,
	) => {
		if (event.target !== event.currentTarget) return;
		if (typeof onRequestClose === 'function') onRequestClose('backdrop');
	};

	return (
		<Portal>
			{isOpen ? (
				<Box
					role={'presentation'}
					className={clsx(styles.root.default, {
						[styles.root.open]: isOpen,
						[styles.root.hidden]: !isOpen,
					})}>
					<Backdrop
						invisible={hideBackdrop}
						onClick={handleBackdropClick}
					/>
					{children}
				</Box>
			) : null}
		</Portal>
	);
};

const Backdrop: FunctionComponent<{
	invisible: boolean;
	onClick: MouseEventHandler<HTMLDivElement>;
}> = ({ onClick, invisible }) => {
	const styles = useStyles(styleRefs);

	return (
		<div
			aria-hidden={'true'}
			className={clsx(styles.backdrop.root, {
				[styles.backdrop.invisible]: invisible,
			})}
			onClick={onClick}
		/>
	);
};

export const withModal = <TIncomingProps extends {} = {}>(
	WrappedComponent: ComponentType<Props & TIncomingProps>,
): FunctionComponent<Props & TIncomingProps> => ({
	onRequestClose,
	isOpen,
	...rest
}) => {
	// TODO: Deprecate me
	warning(
		false,
		'Using withModal is now an anti-pattern. Use <Modal /> instead',
	);
	return (
		<Modal isOpen={isOpen} onRequestClose={onRequestClose}>
			<WrappedComponent
				isOpen={isOpen}
				onRequestClose={onRequestClose}
				{...(rest as TIncomingProps)}
			/>
		</Modal>
	);
};
