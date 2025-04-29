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

import { Box, boxStyles } from '../Box';
import { Button } from '../Button';
import { Column, Columns } from '../Columns';
import { Icon } from '../Icon';
import { IntentStripe } from '../IntentStripe';
import { Text, useTextStyles } from '../Text';

import * as styles from './Alert.css';

type IntentStripeProps = ComponentProps<typeof IntentStripe>;
type Intent = IntentStripeProps['intent'];

export interface Props extends IntentStripeProps {
	children?: ReactNode;
	className?: string;
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
	const intentColourStyles = useTextStyles({ colour: intent });

	return (
		<Box
			className={clsx(className, intentColourStyles, {
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
			padding="2"
		>
			<IntentStripe intent={intent} />
			<Columns noWrap spaceX="2">
				<Column noShrink alignSelf="flex-start">
					<Icon
						icon={iconMapForIntent[intent]}
						size="medium"
						className={boxStyles({
							marginY: '2',
							marginLeft: '2',
						})}
					/>
				</Column>

				<Column
					grow
					width="auto"
					alignSelf="center"
					className={useTextStyles({ colour: 'dark' })}
				>
					{typeof children === 'string' ? (
						<Text>{children}</Text>
					) : (
						children
					)}
				</Column>
				<Column noShrink alignSelf="flex-start">
					{dismissible && (
						<Button
							minimal
							rounded
							variant="secondary"
							size="small"
							aria-label="close"
							onClick={onRequestClose}
						>
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

export default Alert;
