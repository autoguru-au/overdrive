import React from 'react';

import { sprinkles } from '../../styles';
import { Box } from '../Box/Box';
import { Icon } from '../Icon/Icon';

import * as styles from './Alert.css';
import {
	type AlertAppearance,
	type Intent,
	iconMapForIntent,
	textColorForIntent,
} from './intents';

interface AlertIconProps {
	/**
	 * Which DS-2026 layout the icon sits in. Only changes the slot height, so
	 * the glyph lines up with the first line of body copy.
	 */
	appearance: AlertAppearance;

	/**
	 * Selects both the glyph and its foreground colour token.
	 */
	intent: Intent;
}

export const AlertIcon = ({ appearance, intent }: AlertIconProps) => (
	<Box
		className={
			appearance === 'message' ? styles.messageIconSlot : styles.iconSlot
		}
		odComponent="alert-icon"
	>
		<Icon
			className={sprinkles({ color: textColorForIntent[intent] })}
			icon={iconMapForIntent[intent]}
			size="medium"
		/>
	</Box>
);

AlertIcon.displayName = 'AlertIcon';
