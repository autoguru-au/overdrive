import clsx from 'clsx';
import React, { FunctionComponent, MouseEvent } from 'react';

import styles from './style.scss';

export interface Props {
	active: boolean;
	indication?: number;

	onClick(e: MouseEvent<HTMLButtonElement>): void;
}

export const TabNavItem: FunctionComponent<Props> = ({
	children,
	indication,
	onClick,
	active,
}) => (
	<button
		className={clsx(styles.navItem, {
			[styles.navItemActive]: active,
		})}
		onClick={onClick}>
		<span className={styles.navItemTitle}>{children}</span>
		{Boolean(indication) && (
			<span className={styles.navItemIndication}>{indication}</span>
		)}
	</button>
);
