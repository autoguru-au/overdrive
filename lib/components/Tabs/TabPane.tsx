import clsx from 'clsx';
import React, { FunctionComponent } from 'react';

import styles from './style.scss';

export interface Props {
	active: boolean;
}

export const TabPane: FunctionComponent<Props> = ({ children, active }) => (
	<div
		className={clsx(styles.tabPane, {
			[styles.tabPaneActive]: active,
		})}>
		{active && children}
	</div>
);
