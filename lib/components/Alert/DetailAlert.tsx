import clsx from 'clsx';
import React, { type ComponentProps, type ReactNode } from 'react';

import { Box } from '../Box/Box';
import { Button } from '../Button/Button';

import * as styles from './Alert.css';
import { AlertCloseButton } from './AlertCloseButton';
import { AlertIcon } from './AlertIcon';
import { type Intent } from './intents';

interface DetailAlertProps {
	/**
	 * Action slot beside the body copy, intended for a `Button`. Mutually
	 * exclusive with `dismissible` at the `Alert` boundary.
	 */
	action?: ReactNode;

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
	 * Accessible name for the close control.
	 */
	closeLabel?: string;

	/**
	 * Renders the close control.
	 */
	dismissible?: boolean;

	/**
	 * Selects the tab colour and the icon.
	 */
	intent: Intent;

	/**
	 * Called when the close control is activated.
	 */
	onRequestClose?: ComponentProps<typeof Button>['onClick'];

	/**
	 * Value for the root element's `data-testid`.
	 */
	testId?: string;

	/**
	 * Heading above the body copy.
	 */
	title?: ReactNode;
}

export const DetailAlert = ({
	action,
	body,
	className,
	closeLabel,
	dismissible,
	intent,
	onRequestClose,
	testId,
	title,
}: DetailAlertProps) => (
	<Box
		className={clsx(
			className,
			styles.styledAlert({ appearance: 'detail', intent }),
		)}
		role="alert"
		odComponent="alert"
		testId={testId}
	>
		<Box
			className={styles.tab({ intent })}
			aria-hidden
			odComponent="alert-tab"
		/>
		<Box className={styles.detailBody}>
			<AlertIcon appearance="detail" intent={intent} />
			<Box className={styles.content}>
				{title ? <Box className={styles.heading}>{title}</Box> : null}
				{body}
			</Box>
			{action ? <Box className={styles.actionSlot}>{action}</Box> : null}
			{dismissible && (
				<AlertCloseButton label={closeLabel} onClick={onRequestClose} />
			)}
		</Box>
	</Box>
);

DetailAlert.displayName = 'DetailAlert';
