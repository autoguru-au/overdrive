import clsx from 'clsx';
import React, { FunctionComponent, memo } from 'react';
import styles from './style.scss';
import { IconType } from '../../icons';

export interface Props {
	className?: string;
	size: number;
	icon: IconType;
}

export const IconComponent: FunctionComponent<Props> = ({
	className = '',
	icon,
	size,
}) => (
	<i
		style={{ width: size, height: size }}
		className={clsx([styles.root, className])}>
		{icon}
	</i>
);

export const Icon = memo(IconComponent);
