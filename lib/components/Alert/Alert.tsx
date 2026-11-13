import {
	AlertCircleIcon,
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
import { CheckCircleFilledIcon, WarningFilledIcon } from './intentIcons';

type IntentStripeProps = ComponentProps<typeof IntentStripe>;
type Intent = IntentStripeProps['intent'];

/**
 * The two DS-2026 layouts. Omitting `appearance` keeps the established render.
 */
export type AlertAppearance = 'detail' | 'message';

export interface AlertBaseProps extends IntentStripeProps, TestIdProp {
	/**
	 * Body copy. A plain string is wrapped in `Text`; anything else renders
	 * as given.
	 */
	children?: ReactNode;

	/**
	 * Appended to the root element's class list.
	 */
	className?: string;

	/**
	 * Drops the shadow and the contained max-width, for an alert that sits
	 * inside existing page furniture. Ignored under either `appearance`.
	 */
	inline?: boolean;

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
}

export interface AlertActionProps {
	/**
	 * Action slot beside the body copy, intended for a `Button`. Only rendered
	 * under `appearance="detail"`. An alert carries either an action or a
	 * dismiss control, never both, so this cannot be combined with
	 * `dismissible` or `onRequestClose`.
	 */
	action?: ReactNode;
	dismissible?: false;
	onRequestClose?: never;
}

export interface AlertDismissProps {
	action?: never;

	/**
	 * Renders the close control. Defaults to `true` when `onRequestClose` is
	 * given. Cannot be combined with `action`, and never rendered under
	 * `appearance="message"`.
	 */
	dismissible?: boolean;

	/**
	 * Called when the close control is activated. Cannot be combined with
	 * `action`, and never called under `appearance="message"`, which renders
	 * no close control.
	 */
	onRequestClose?: ComponentProps<typeof Button>['onClick'];
}

export type AlertProps = AlertBaseProps &
	(AlertActionProps | AlertDismissProps);

const iconMapForIntent: Record<Intent, IconType> = {
	danger: AlertCircleIcon,
	information: InformationIcon,
	success: CheckCircleFilledIcon,
	warning: WarningFilledIcon,
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
			padding="4"
			odComponent="alert"
			testId={testId}
		>
			<IntentStripe intent={intent} />
			<Box display="flex" gap="2">
				<Box className={styles.iconSlot}>
					<Icon icon={iconMapForIntent[intent]} size="medium" />
				</Box>
				<Box
					alignSelf="start"
					width="auto"
					className={sprinkles({ color: 'primary' })}
				>
					{body}
				</Box>
				{dismissible && (
					<Box
						as="button"
						type="button"
						ml="auto"
						className={styles.closeButton}
						aria-label="close"
						onClick={onRequestClose}
						odComponent="alert-close"
					>
						<Icon icon={XIcon} size="medium" />
					</Box>
				)}
			</Box>
		</Box>
	);
};

Alert.displayName = 'Alert';

export default Alert;
