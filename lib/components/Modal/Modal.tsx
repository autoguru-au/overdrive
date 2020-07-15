import { warning } from '@autoguru/utilities';
import clsx from 'clsx';
import * as React from 'react';
import {
	ComponentProps,
	ComponentType,
	FunctionComponent,
	MouseEventHandler,
	useEffect,
	useState,
} from 'react';
import { useStyles } from 'react-treat';

import { Box } from '../Box/Box';
import { Portal } from '../Portal/Portal';
import * as styleRefs from './Modal.treat';

export interface Props {
	isOpen: boolean;
	transition?: boolean;
	hideBackdrop?: boolean;

	onRequestClose?(e: 'backdrop' | 'escapeKeyDown' | string): void;
}

export const Modal: FunctionComponent<Props> = ({
	isOpen,
	hideBackdrop = false,
	transition = true,
	onRequestClose,
	children,
}) => {
	const styles = useStyles(styleRefs);

	const [shouldRender, setRender] = useState(isOpen);

	useEffect(() => {
		if (isOpen) {
			setRender(true);
		} else if (!transition) {
			setRender(false);
		}
	}, [isOpen, transition]);

	const handleBackdropClick: ComponentProps<typeof Backdrop>['onClick'] = (
		event,
	) => {
		if (event.target !== event.currentTarget) return;
		if (typeof onRequestClose === 'function') onRequestClose('backdrop');
	};

	const onAnimationEnd = () => {
		if (!isOpen) setRender(false);
	};

	return (
		<Portal>
			{shouldRender ? (
				<Box
					role="presentation"
					className={clsx(styles.root.default, [
						transition && [
							isOpen ? styles.root.fadeIn : styles.root.fadeOut,
						],
					])}
					onAnimationEnd={onAnimationEnd}>
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
			aria-hidden="true"
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
