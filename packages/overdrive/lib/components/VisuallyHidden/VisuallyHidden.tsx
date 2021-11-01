import * as React from 'react';
import { ComponentPropsWithoutRef, FunctionComponent } from 'react';

import { Box } from '../Box';

import * as styles from './VisuallyHidden.css';

export interface Props {
	is?: ComponentPropsWithoutRef<typeof Box>['is'];
}

export const VisuallyHidden: FunctionComponent<Props> = ({ children, is }) => (
	<Box
		is={is}
		position="absolute"
		overflow="hidden"
		userSelect="none"
		className={styles.root}>
		{children}
	</Box>
);
