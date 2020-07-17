import {
	AlertCircleIcon,
	AlertIcon,
	CheckCircleIcon,
	IconType,
	InformationIcon,
	WindowCloseIcon,
} from '@autoguru/icons';
import clsx from 'clsx';
import * as React from 'react';
import { ComponentProps, FunctionComponent, ReactChild } from 'react';
import { useStyles } from 'react-treat';

import { Box } from '../Box';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Text } from '../Text';
import * as styleRefs from './Alert.treat';

export interface Props {
	children: ReactChild;
	className?: string;
	intent?: keyof typeof styleRefs.intent;
	inline?: boolean;
	dismissible?: boolean;

	onRequestClose?: ComponentProps<typeof Button>['onClick'];
}

const IconMapForIntent: Record<
	keyof Omit<typeof styleRefs.intent, 'neutral'>,
	IconType
> = {
	danger: AlertCircleIcon,
	information: InformationIcon,
	success: CheckCircleIcon,
	warning: AlertIcon,
};

export const Alert: FunctionComponent<Props> = ({
	children,
	className = '',
	intent = 'success',
	inline = false,
	onRequestClose,
	dismissible = typeof onRequestClose === 'function',
}) => {
	const styles = useStyles(styleRefs);

	return (
		<Box
			className={clsx(
				styles.root,
				styles.intent[intent],
				{
					[styles.contained]: !inline,
				},
				className,
			)}
			role="alert"
			backgroundColour="white"
			borderRadius="1"
			boxShadow={inline ? 'none' : '4'}
			padding="2"
		>
			<Icon
				icon={IconMapForIntent[intent]}
				size="medium"
				className={styles.icon}
			/>
			<Box className={styles.content}>
				{typeof children === 'string' ? (
					<Text>{children}</Text>
				) : (
					children
				)}
			</Box>
			{dismissible && (
				<Button
					minimal
					rounded
					variant="secondary"
					size="small"
					className={styles.closeButton}
					aria-label="close"
					onClick={onRequestClose}
				>
					<Icon
						className={styles.closeButtonIcon}
						icon={WindowCloseIcon}
						size="medium"
					/>
				</Button>
			)}
		</Box>
	);
};
