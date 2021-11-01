import * as React from 'react';
import { FunctionComponent } from 'react';

import { Box } from '../Box';

import * as styles from './Divider.css';

export const Divider: FunctionComponent = () => (
	<Box position="relative">
		<Box position="absolute" className={styles.line} width="full" />
	</Box>
);
