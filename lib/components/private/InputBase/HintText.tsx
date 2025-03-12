import clsx from 'clsx';
import * as React from 'react';
import { FunctionComponent, ReactNode } from 'react';

import { useBoxStyles } from '../../Box';
import { Text } from '../../Text';

import * as styles from './HintText.css';

export interface Props {
	hintText: ReactNode;
	reserveHintSpace?: boolean;
	disabled?: boolean;
	className?: string;
}

export const HintText: FunctionComponent<Props> = ({
	reserveHintSpace,
	disabled,
	hintText,
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
			size="2"
			colour="unset"
			className={clsx(boxStyles, styles.hintText, className)}
		>
			{showHintText ? hintText : '\u00A0'}
		</Text>
	);
};
