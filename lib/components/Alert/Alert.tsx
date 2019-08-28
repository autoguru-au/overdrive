import clsx from 'clsx';
import React, { FunctionComponent, ReactChild } from 'react';
import { Button, EButtonSize, EButtonVariant } from '../Button';
import {
	AlertCircleIcon,
	AlertIcon,
	CheckCircleIcon,
	IconType,
	InformationIcon,
	WindowCloseIcon,
} from '@autoguru/icons';
import { Icon } from '../Icon';
import { Text } from '../Typography/Text';

import styles from './Alert.scss';

export enum EAlertIntent {
	danger = 'danger',
	info = 'info',
	success = 'success',
	warning = 'warning',
}

interface Props {
	children: ReactChild;
	className?: string;
	intent?: EAlertIntent;
	inline?: boolean;
	dismissible?: boolean;

	onRequestClose?(): void;
}

export const Alert: FunctionComponent<Props> = ({
	children,
	className = '',
	intent = EAlertIntent.info,
	inline = false,
	onRequestClose = null,
	dismissible = typeof onRequestClose === 'function',
}) => {
	return (
		<div
			className={clsx(
				styles.root,
				{
					[styles.success]: intent === EAlertIntent.success,
					[styles.danger]: intent === EAlertIntent.danger,
					[styles.warning]: intent === EAlertIntent.warning,
					[styles.info]: intent === EAlertIntent.info,
					[styles.inline]: Boolean(inline),
					[styles.dismissible]: Boolean(dismissible),
				},
				className,
			)}
			role="alert">
			<Icon
				icon={IconMapForIntent[intent]}
				size={20}
				className={styles.icon}
			/>
			<div className={styles.content}>
				{typeof children === 'string' ? (
					<Text>{children}</Text>
				) : (
					children
				)}
			</div>
			{dismissible && (
				<Button
					minimal
					variant={EButtonVariant.Secondary}
					size={EButtonSize.Small}
					className={styles.closeButton}
					aria-label="close"
					onClick={onRequestClose}>
					<Icon
						className={styles.closeButtonIcon}
						icon={WindowCloseIcon}
						size={20}
					/>
				</Button>
			)}
		</div>
	);
};

const IconMapForIntent: Record<EAlertIntent, IconType> = {
	[EAlertIntent.danger]: AlertCircleIcon,
	[EAlertIntent.info]: InformationIcon,
	[EAlertIntent.success]: CheckCircleIcon,
	[EAlertIntent.warning]: AlertIcon,
};
