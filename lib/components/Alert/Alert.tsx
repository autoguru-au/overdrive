import clsx from 'clsx';
import React, { FunctionComponent, ReactChild } from 'react';
import { Button, EButtonSize, EButtonVariant } from '../Button';
import {
	AlertCircleIcon,
	AlertIcon,
	CheckCircleIcon,
	Icon,
	IconType,
	InformationIcon,
	WindowCloseIcon,
} from '../Icon';
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
	intent?: EAlertIntent;

	onRequestClose?(): void;
}

export const Alert: FunctionComponent<Props> = ({
	intent = EAlertIntent.info,
	onRequestClose = () => void 0,
	children,
}) => {
	return (
		<div
			className={clsx(styles.root, {
				[styles.success]: intent === EAlertIntent.success,
				[styles.danger]: intent === EAlertIntent.danger,
				[styles.warning]: intent === EAlertIntent.warning,
				[styles.info]: intent === EAlertIntent.info,
			})}
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
			<Button
				minimal
				variant={EButtonVariant.Secondary}
				size={EButtonSize.Small}
				className={styles.closeButton}
				aria-label="close"
				onClick={onRequestClose}>
				<Icon icon={WindowCloseIcon} size={20} />
			</Button>
		</div>
	);
};

const IconMapForIntent: Record<EAlertIntent, IconType> = {
	[EAlertIntent.danger]: AlertCircleIcon,
	[EAlertIntent.info]: InformationIcon,
	[EAlertIntent.success]: CheckCircleIcon,
	[EAlertIntent.warning]: AlertIcon,
};
