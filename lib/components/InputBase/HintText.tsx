import clsx from 'clsx';
import React, { FunctionComponent } from 'react';

import styles from './style.scss';

export interface Props {
	isActive: boolean;
}

export const HintText: FunctionComponent<Props> = ({ isActive, children }) => (
	<p
		className={clsx(styles.hintText, {
			[styles.hintTextActive]: isActive,
		})}>
		{children}
	</p>
);
