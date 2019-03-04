import cx from 'clsx';
import React, { FunctionComponent } from 'react';

import styles from './style.scss';

export interface IProps {
	isActive: boolean;
}

export const HintText: FunctionComponent<IProps> = ({ isActive, children }) => (
	<p
		className={cx(styles.hintText, {
			[styles.hintTextActive]: isActive,
		})}>
		{children}
	</p>
);
