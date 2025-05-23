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

import { Box } from '../Box/Box';
import { boxStyles } from '../Box/boxStyles';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { IntentStripe } from '../IntentStripe/IntentStripe';
import { Text } from '../Text/Text';
import { textStyles } from '../Text/textStyles';

import * as styles from './Alert.css';

type IntentStripeProps = ComponentProps<typeof IntentStripe>;
type Intent = IntentStripeProps['intent'];

export interface AlertProps extends IntentStripeProps {
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

export const Alert: FunctionComponent<AlertProps> = ({
	children,
	className = '',
	intent = 'success',
	inline = false,
	onRequestClose,
	dismissible = typeof onRequestClose === 'function',
}) => {
	const dismissBtnStyles = textStyles({ colour: 'muted' });
	const intentColourStyles = textStyles({ colour: intent });

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
			data-od-component="alert"
		>
			<IntentStripe intent={intent} />
			<Box display="flex" gap="2">
				<Box alignSelf="flex-start">
					<Icon
						icon={iconMapForIntent[intent]}
						size="medium"
						className={boxStyles({
							marginY: '2',
							marginLeft: '2',
						})}
					/>
				</Box>
				<Box
					alignSelf="center"
					width="auto"
					className={textStyles({ colour: 'dark' })}
				>
					{typeof children === 'string' ? (
						<Text>{children}</Text>
					) : (
						children
					)}
				</Box>
				<Box ml="auto">
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
				</Box>
			</Box>
		</Box>
	);
};
