import clsx from 'clsx';
import React, { type ReactNode } from 'react';

import { Box } from '../Box/Box';

import * as styles from './Alert.css';
import { AlertIcon } from './AlertIcon';
import { type Intent } from './intents';

interface MessageAlertProps {
	/**
	 * Body copy, already wrapped in `Text` by `Alert` when it arrived as a
	 * plain string.
	 */
	body?: ReactNode;

	/**
	 * Appended to the root element's class list.
	 */
	className?: string;

	/**
	 * Selects the tint and the icon.
	 */
	intent: Intent;

	/**
	 * Value for the root element's `data-testid`.
	 */
	testId?: string;
}

export const MessageAlert = ({
	body,
	className,
	intent,
	testId,
}: MessageAlertProps) => (
	<Box
		className={clsx(
			className,
			styles.styledAlert({ appearance: 'message', intent }),
		)}
		role="status"
		odComponent="alert"
		testId={testId}
	>
		<AlertIcon appearance="message" intent={intent} />
		<Box className={styles.messageText}>{body}</Box>
	</Box>
);

MessageAlert.displayName = 'MessageAlert';
