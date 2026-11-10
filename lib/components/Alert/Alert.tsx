import {
	AlertCircleIcon,
	WarningIcon,
	CheckCircleIcon,
	IconType,
	InformationIcon,
	XIcon,
} from '@autoguru/icons';
import clsx from 'clsx';
import React, { type ComponentProps, type ReactNode } from 'react';

import { sprinkles } from '../../styles';
import type { TestIdProp } from '../../types';
import { Box } from '../Box/Box';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { IntentStripe } from '../IntentStripe/IntentStripe';
import { Text } from '../Text/Text';

import * as styles from './Alert.css';

type IntentStripeProps = ComponentProps<typeof IntentStripe>;
type Intent = IntentStripeProps['intent'];

/**
 * The two DS-2026 layouts. Omitting `appearance` keeps the established render.
 */
export type AlertAppearance = 'detail' | 'message';

export interface AlertProps extends IntentStripeProps, TestIdProp {
	children?: ReactNode;
	className?: string;
	inline?: boolean;
	dismissible?: boolean;

	onRequestClose?: ComponentProps<typeof Button>['onClick'];

	/**
	 * Opts into the DS-2026 design. `detail` is the bordered card with a tab,
	 * heading and action; `message` is the tinted single-line layout. Leave it
	 * unset to keep the established appearance.
	 */
	appearance?: AlertAppearance;

	/**
	 * Heading above the body copy. Only rendered under `appearance="detail"`.
	 */
	title?: ReactNode;

	/**
	 * Action slot below the body copy, intended for a `Button`. Only rendered
	 * under `appearance="detail"`.
	 */
	action?: ReactNode;
}

const iconMapForIntent: Record<Intent, IconType> = {
	danger: AlertCircleIcon,
	information: InformationIcon,
	success: CheckCircleIcon,
	warning: WarningIcon,
};

const textColorForIntent: Record<
	Intent,
	Parameters<typeof sprinkles>[0]['color']
> = {
	danger: 'alertForeground',
	information: 'infoForeground',
	success: 'successForeground',
	warning: 'warningForeground',
};

export const Alert = ({
	children,
	className = '',
	intent = 'success',
	inline = false,
	appearance,
	title,
	action,
	onRequestClose,
	dismissible = typeof onRequestClose === 'function',
	testId,
}: AlertProps) => {
	const body =
		typeof children === 'string' ? <Text>{children}</Text> : children;

	if (appearance) {
		const icon = (
			<Box
				className={
					appearance === 'message'
						? styles.messageIconSlot
						: styles.iconSlot
				}
			>
				<Icon
					className={sprinkles({
						color: textColorForIntent[intent],
					})}
					icon={iconMapForIntent[intent]}
					size="medium"
				/>
			</Box>
		);

		return (
			<Box
				className={clsx(
					className,
					styles.styledAlert({ appearance, intent }),
				)}
				role={appearance === 'message' ? 'status' : 'alert'}
				odComponent="alert"
				testId={testId}
			>
				{appearance === 'message' ? (
					<>
						{icon}
						<Box className={styles.messageText}>{body}</Box>
					</>
				) : (
					<>
						<Box
							className={styles.tab({ intent })}
							aria-hidden
							odComponent="alert-tab"
						/>
						<Box className={styles.detailBody}>
							{icon}
							<Box className={styles.content}>
								{title ? (
									<Box className={styles.heading}>
										{title}
									</Box>
								) : null}
								{body}
							</Box>
							{action ? (
								<Box className={styles.actionSlot}>
									{action}
								</Box>
							) : null}
							{dismissible && (
								<Box
									as="button"
									type="button"
									className={styles.closeButton}
									aria-label="close"
									onClick={onRequestClose}
									odComponent="alert-close"
								>
									<Icon icon={XIcon} size="small" />
								</Box>
							)}
						</Box>
					</>
				)}
			</Box>
		);
	}

	return (
		<Box
			className={clsx(
				className,
				sprinkles({ color: textColorForIntent[intent] }),
				{
					[styles.contained]: !inline,
				},
			)}
			role="alert"
			overflow="hidden"
			position="relative"
			backgroundColor="white"
			borderWidth="1"
			borderColor="default"
			borderRadius="xsmall"
			boxShadow={inline ? 'none' : 'z4'}
			padding="2"
			odComponent="alert"
			testId={testId}
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
					className={sprinkles({ color: 'primary' })}
				>
					{body}
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
								className={sprinkles({ color: 'tertiary' })}
								icon={XIcon}
								size="medium"
							/>
						</Button>
					)}
				</Box>
			</Box>
		</Box>
	);
};

Alert.displayName = 'Alert';

export default Alert;
