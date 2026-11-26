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
import { AlertCloseButton } from './AlertCloseButton';
import { DetailAlert } from './DetailAlert';
import { MessageAlert } from './MessageAlert';
import {
	type AlertAppearance,
	type IntentStripeProps,
	iconMapForIntent,
	textColorForIntent,
} from './intents';

export type { AlertAppearance } from './intents';

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
	 * Accessible name for the close control. Defaults to `close`; pass a
	 * translated string to localise it alongside `title` and the body copy.
	 */
	closeLabel?: string;

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

export const Alert = ({
	children,
	className = '',
	closeLabel = 'close',
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
		typeof children === 'string' ? (
			<Text
				color={appearance ? 'primary' : undefined}
				size={appearance === 'message' ? 'p2' : undefined}
			>
				{children}
			</Text>
		) : (
			children
		);

	if (appearance === 'message') {
		return (
			<MessageAlert
				body={body}
				className={className}
				intent={intent}
				testId={testId}
			/>
		);
	}

	if (appearance === 'detail') {
		return (
			<DetailAlert
				action={action}
				body={body}
				className={className}
				closeLabel={closeLabel}
				dismissible={dismissible}
				intent={intent}
				onRequestClose={onRequestClose}
				testId={testId}
				title={title}
			/>
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
					<AlertCloseButton
						label={closeLabel}
						ml="auto"
						onClick={onRequestClose}
						size="medium"
					/>
				)}
			</Box>
		</Box>
	);
};

Alert.displayName = 'Alert';

export default Alert;
