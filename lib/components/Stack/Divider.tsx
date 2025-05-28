import * as React from 'react';
import { FunctionComponent } from 'react';

import { Box } from '../Box/Box';

import * as styles from './Divider.css';

export const Divider: FunctionComponent = () => (
	<Box position="relative">
		<Box position="absolute" className={styles.hr} />
	</Box>
);
