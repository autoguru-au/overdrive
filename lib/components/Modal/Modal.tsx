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
import { CSSTransition } from 'react-transition-group';
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
			<CSSTransition
				timeout={200}
				in={isOpen}
				unmountOnExit
				classNames={{
					enter: styles.root.enter,
					enterActive: styles.root.active,
					exit: styles.root.exit,
					exitActive: styles.root.exitActive,
				}}>
				<Box role={'presentation'} className={styles.root.default}>
					<Backdrop
						invisible={hideBackdrop}
						open={isOpen}
						onClick={handleBackdropClick}
					/>
					{children}
				</Box>
			</CSSTransition>
		</Portal>
	);
};

const Backdrop: FunctionComponent<{
	invisible: boolean;
	open: boolean;
	onClick: MouseEventHandler<HTMLDivElement>;
}> = ({ onClick, invisible, open }) => {
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
