import clsx from 'clsx';
import React, { FunctionComponent } from 'react';

import styles from './style.scss';
import { Text } from '../Typography';

export interface Props {
	isActive: boolean;
	className?: string;
}

export const HintText: FunctionComponent<Props> = ({
	isActive,
	children,
	className = '',
}) => (
	<Text
		is="p"
		size={2}
		className={clsx(
			styles.hintText,
			{
				[styles.hintTextActive]: isActive,
			},
			className,
		)}>
		{children}
	</Text>
);
