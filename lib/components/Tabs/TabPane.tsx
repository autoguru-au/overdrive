import clsx from 'clsx';
import React, { FunctionComponent } from 'react';

import styles from './style.scss';

export interface IProps {
	active: boolean;
}

export const TabPane: FunctionComponent<IProps> = ({ children, active }) => (
	<div
		className={clsx(styles.tabPane, {
			[styles.tabPaneActive]: active,
		})}>
		{active && children}
	</div>
);
