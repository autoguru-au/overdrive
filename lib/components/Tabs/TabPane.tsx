import clsx from 'clsx';
import React, { FunctionComponent } from 'react';

import styles from './style.scss';

export interface Props {
	active: boolean;
	controlledBy: string;
	id: string;
}

export const TabPane: FunctionComponent<Props> = ({
	active,
	children,
	controlledBy,
	id,
}) =>
	active ? (
		<div
			role="tabpanel"
			id={id}
			aria-labelledby={controlledBy}
			className={clsx(styles.tabPane, {
				[styles.tabPaneActive]: active,
			})}
			hidden={!active}>
			{children}
		</div>
	) : null;
