import clsx from 'clsx';
import React, { type FunctionComponent, type ReactNode } from 'react';

import { useBoxStyles } from '../../Box/useBoxStyles';
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
	const boxStyles = useBoxStyles({
		is: 'p',
		marginTop: '1',
	});

	if (!hintText && !reserveHintSpace) return null;

	const showHintText = !disabled && hintText;

	return (
		<Text
			is="p"
			size={size === 'large' ? '4' : '2'}
			colour="unset"
			className={clsx(boxStyles, styles.hintText, className)}
		>
			{showHintText ? hintText : '\u00A0'}
		</Text>
	);
};
