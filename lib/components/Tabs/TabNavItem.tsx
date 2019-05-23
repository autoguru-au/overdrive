import cx from 'clsx';
import React, { FunctionComponent, MouseEvent } from 'react';

import styles from './style.scss';

export interface IProps {
	active: boolean;
	indication?: number;

	onClick(e: MouseEvent<HTMLButtonElement>): void;
}

export const TabNavItem: FunctionComponent<IProps> = ({
	children,
	indication,
	onClick,
	active,
}) => (
	<button
		className={cx(styles.navItem, {
			[styles.navItemActive]: active,
		})}
		onClick={onClick}>
		<span className={styles.navItemTitle}>{children}</span>
		{!!indication && (
			<span className={styles.navItemIndication}>{indication}</span>
		)}
	</button>
);
