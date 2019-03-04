import cx from 'clsx';
import React, { FunctionComponent } from 'react';

import styles from './style.scss';

export interface IProps {
	active: boolean;
}

export const TabPane: FunctionComponent<IProps> = ({ children, active }) => (
	<div
		className={cx(styles.tabPane, {
			[styles.tabPaneActive]: active,
		})}>
		{children}
	</div>
);
