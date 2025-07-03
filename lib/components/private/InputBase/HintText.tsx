import clsx from 'clsx';
import React, { type FunctionComponent, type ReactNode } from 'react';

import { elementStyles } from '../../../styles';
import { Text } from '../../Text/Text';

import * as styles from './HintText.css';
import type { InputSize } from './withEnhancedInput.css';

export interface HintTextProps {
	hintText: ReactNode;
	reserveHintSpace?: boolean;
	disabled?: boolean;
	size?: InputSize;
	className?: string;
}

export const HintText: FunctionComponent<HintTextProps> = ({
	reserveHintSpace,
	disabled,
	hintText,
	size = 'medium',
	className = '',
}) => {
	if (!hintText && !reserveHintSpace) return null;

	const showHintText = !disabled && hintText;

	return (
		<Text
			as="p"
			size={size === 'large' ? '4' : '2'}
			colour="unset"
			className={clsx(
				elementStyles({ as: 'p', mt: '1' }),
				styles.hintText,
				className,
			)}
		>
			{showHintText ? hintText : '\u00A0'}
		</Text>
	);
};
