import { XIcon } from '@autoguru/icons';
import React, { type ComponentProps } from 'react';

import { Box } from '../Box/Box';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';

import * as styles from './Alert.css';

interface AlertCloseButtonProps {
	/**
	 * Accessible name for the control. Defaults to `close`.
	 */
	label?: string;

	/**
	 * Left margin on the button itself, used by the established layout to push
	 * the control to the end of the row.
	 */
	ml?: ComponentProps<typeof Box>['ml'];

	/**
	 * Called when the control is activated.
	 */
	onClick?: ComponentProps<typeof Button>['onClick'];

	/**
	 * Size of the cross glyph. Defaults to `small`, which the DS-2026 layouts
	 * use; the established layout passes `medium`.
	 */
	size?: ComponentProps<typeof Icon>['size'];
}

export const AlertCloseButton = ({
	label = 'close',
	ml,
	onClick,
	size = 'small',
}: AlertCloseButtonProps) => (
	<Box
		as="button"
		type="button"
		ml={ml}
		className={styles.closeButton}
		aria-label={label}
		onClick={onClick}
		odComponent="alert-close"
	>
		<Icon icon={XIcon} size={size} />
	</Box>
);

AlertCloseButton.displayName = 'AlertCloseButton';
