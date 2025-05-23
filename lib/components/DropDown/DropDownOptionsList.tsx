import * as React from 'react';
import { forwardRef, ReactNode } from 'react';

import { Box } from '../Box';
import { Stack } from '../Stack';

import * as styles from './DropDownOptionsList.css';

interface DropDownOptionsListProps {
	children: ReactNode;
}

export const DropDownOptionsList = forwardRef<
	HTMLDivElement,
	DropDownOptionsListProps
>(({ children }, ref) => (
	<Box ref={ref} className={styles.root}>
		<Box className={styles.list} overflow="auto">
			<Stack dividers width="full" space="none">
				{children}
			</Stack>
		</Box>
	</Box>
));

DropDownOptionsList.displayName = 'DropDownOptionsList';
