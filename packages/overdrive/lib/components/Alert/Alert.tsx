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
import { ComponentProps, FunctionComponent, ReactNode } from 'react';

import { Box, useBoxStyles } from '../Box';
import { Button } from '../Button';
import { Column, Columns } from '../Columns';
import { Icon } from '../Icon';
import { Text, useTextStyles } from '../Text';

import * as styles from './Alert.css';

type Intent = keyof Omit<
	typeof styles.intent,
	'neutral' | 'shine' | 'primary' | 'secondary'
>;

export interface Props {
	children: ReactNode;
	className?: string;
	intent?: Intent;
	inline?: boolean;
	dismissible?: boolean;

	onRequestClose?: ComponentProps<typeof Button>['onClick'];
}

const iconMapForIntent: Record<Intent, IconType> = {
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
	const dismissBtnStyles = useTextStyles({ colour: 'muted' });

	return (
		<Box
			className={clsx(className, styles.root, styles.intent[intent], {
				[styles.contained]: !inline,
			})}
			role="alert"
			overflow="hidden"
			position="relative"
			backgroundColour="white"
			borderWidth="1"
			borderColour="gray"
			borderRadius="1"
			boxShadow={inline ? 'none' : '4'}
			padding="2">
			<Columns noWrap spaceX="2">
				<Column noShrink alignSelf="top">
					<Icon
						icon={iconMapForIntent[intent]}
						size="medium"
						className={useBoxStyles({
							marginY: '2',
							marginLeft: '2',
						})}
					/>
				</Column>

				<Column
					grow
					width="auto"
					alignSelf="centre"
					className={useTextStyles({ colour: 'dark' })}>
					{typeof children === 'string' ? (
						<Text>{children}</Text>
					) : (
						children
					)}
				</Column>
				<Column noShrink alignSelf="top">
					{dismissible && (
						<Button
							minimal
							rounded
							variant="secondary"
							size="small"
							aria-label="close"
							onClick={onRequestClose}>
							<Icon
								className={dismissBtnStyles}
								icon={WindowCloseIcon}
								size="medium"
							/>
						</Button>
					)}
				</Column>
			</Columns>
		</Box>
	);
};
