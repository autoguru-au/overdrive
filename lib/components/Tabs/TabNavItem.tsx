import clsx from 'clsx';
import React, { FunctionComponent, MouseEvent } from 'react';

import styles from './style.scss';

export interface Props {
	active: boolean;
	id: string;
	indication?: number;

	onClick(e: MouseEvent<HTMLButtonElement>): void;
}

export const TabNavItem: FunctionComponent<Props> = ({
	active,
	children,
	id,
	indication,
	onClick,
}) => (
	<button
		className={clsx(styles.navItem, {
			[styles.navItemActive]: active,
		})}
		role="tab"
		aria-selected={active}
		id={id}
		onClick={onClick}>
		<span className={styles.navItemTitle}>{children}</span>
		{Boolean(indication) && (
			<span className={styles.navItemIndication}>{indication}</span>
		)}
	</button>
);
