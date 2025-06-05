import * as React from 'react';
import { forwardRef, ReactNode } from 'react';

import { Box } from '../Box/Box';
import { Stack } from '../Stack/Stack';

import * as styles from './DropDownOptionsList.css';

interface DropDownOptionListProps {
	children: ReactNode;
}

export const DropDownOptionsList = forwardRef<
	HTMLDivElement,
	DropDownOptionListProps
>(({ children }, ref) => (
	<Box ref={ref} className={styles.root}>
		<Box className={styles.list} overflow="auto">
			<Stack dividers width="full" space="none">
				{children}
			</Stack>
		</Box>
	</Box>
));

DropDownOptionsList.displayName = 'DropDownOptionList';
