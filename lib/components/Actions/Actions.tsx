import clsx from 'clsx';
import React, { memo, NamedExoticComponent, ReactChild } from 'react';

import styles from './Actions.scss';

interface Props {
	equalWidth?: boolean;
	className?: string;
	children: ReactChild | ReactChild[];
}

export const Actions: NamedExoticComponent<Props> = memo(
	({ className, children, equalWidth = true }) => (
		<div
			className={clsx(
				styles.root,
				{
					[styles.equalWidth]: equalWidth,
				},
				className,
			)}>
			{children}
		</div>
	),
);
