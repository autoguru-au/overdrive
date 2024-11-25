import * as React from 'react';
import { ComponentPropsWithoutRef, FunctionComponent, ReactNode } from 'react';

import { Box } from '../Box';

import * as styles from './VisuallyHidden.css';

export interface Props {
	is?: ComponentPropsWithoutRef<typeof Box>['is'];
	children?: ReactNode;
}

export const VisuallyHidden: FunctionComponent<Props> = ({ children, is }) => (
	<Box
		is={is}
		position="absolute"
		overflow="hidden"
		userSelect="none"
		className={styles.root}
	>
		{children}
	</Box>
);

export default VisuallyHidden;
