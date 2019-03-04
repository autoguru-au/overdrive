import cx from 'clsx';
import React, { FunctionComponent } from 'react';

import styles from './style.scss';

export interface IProps {
	active: boolean;

	onClick(e: React.MouseEvent<HTMLButtonElement>): void;
}

export const TabNavItem: FunctionComponent<IProps> = ({
	children,
	onClick,
	active,
}) => (
	<button
		className={cx(styles.navItem, {
			[styles.navItemActive]: active,
		})}
		onClick={onClick}>
		{children}
	</button>
);
