import React from 'react';
import { usingPositioner } from '../Positioner';

import styles from './style.scss';

export const Flyout = usingPositioner(({ children }) => (
	<div className={styles.root}>{children}</div>
));
