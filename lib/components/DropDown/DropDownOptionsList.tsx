import React, { forwardRef, ReactNode } from 'react';

import { Stack } from '../Stack';

import * as styles from './DropDownOptionsList.css';

interface DropDownOptionsListProps {
	children: ReactNode;
}

export const DropDownOptionsList = forwardRef<
	HTMLDivElement,
	DropDownOptionsListProps
>(({ children }, ref) => (
	<div ref={ref} className={styles.root}>
		<div className={styles.list}>
			<Stack dividers width="full" space="none">
				{children}
			</Stack>
		</div>
	</div>
));

DropDownOptionsList.displayName = 'DropDownOptionsList';
