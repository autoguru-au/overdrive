import * as React from 'react';
import { forwardRef, Fragment, ReactNode } from 'react';

import { Box } from '../Box';
import { Stack } from '../Stack';

import * as styles from './DropDownOptionsList.css';

interface Props {
	options: ReactNode[];
}

export const DropDownOptionsList = forwardRef<HTMLDivElement, Props>(
	({ options }, ref) => (
		<Box ref={ref} className={styles.root}>
			<Box className={styles.list} overflow="auto">
				<Stack dividers width="full" space="none">
					{options.map((option, index) => (
						<Fragment key={index}>{option}</Fragment>
					))}
				</Stack>
			</Box>
		</Box>
	),
);
