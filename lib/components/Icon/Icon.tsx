import { IconType } from '@autoguru/icons';
import clsx from 'clsx';
import React, { FunctionComponent, memo } from 'react';

import styles from './style.scss';

export interface Props {
	className?: string;
	size?: number;
	icon: IconType;
}

export const IconComponent: FunctionComponent<Props> = ({
	className = '',
	icon,
	size = 16,
}) => (
	<i
		style={{ width: size, height: size }}
		className={clsx([styles.root, className])}>
		{icon}
	</i>
);

export const Icon = memo(IconComponent);
