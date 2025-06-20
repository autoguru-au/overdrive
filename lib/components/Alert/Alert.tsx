import {
	AlertCircleIcon,
	AlertIcon,
	CheckCircleIcon,
	IconType,
	InformationIcon,
	WindowCloseIcon,
} from '@autoguru/icons';
import clsx from 'clsx';
import React, { type ComponentProps, type ReactNode } from 'react';

import { sprinkles } from '../../styles';
import { sprinklesLegacyText } from '../../styles/typography.css';
import { Box } from '../Box/Box';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { IntentStripe } from '../IntentStripe/IntentStripe';
import { Text } from '../Text/Text';

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

export const Alert = ({
	children,
	className = '',
	intent = 'success',
	inline = false,
	onRequestClose,
	dismissible = typeof onRequestClose === 'function',
}: AlertProps) => {
	return (
		<Box
			className={clsx(className, sprinklesLegacyText({ color: intent }), {
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
			odComponent="alert"
		>
			<IntentStripe intent={intent} />
			<Box display="flex" gap="2">
				<Box alignSelf="start">
					<Icon
						icon={iconMapForIntent[intent]}
						size="medium"
						className={sprinkles({
							marginY: '2',
							marginLeft: '2',
						})}
					/>
				</Box>
				<Box
					alignSelf="center"
					width="auto"
					className={sprinkles({ colour: 'dark' })}
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
								className={sprinkles({ colour: 'muted' })}
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

export default Alert;
