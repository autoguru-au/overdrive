import * as React from 'react';
import { forwardRef, MouseEventHandler, ReactNode } from 'react';

import { Box } from '../Box/Box';

export interface TableRowProps {
	onClick?: MouseEventHandler<HTMLDivElement>;

	children: ReactNode | ReactNode[];
}

export const TableRow = forwardRef<HTMLDivElement, TableRowProps>(
	({ children, onClick }, ref) => (
		<Box ref={ref} display="contents" role="row" onClick={onClick}>
			{children}
		</Box>
	),
);

TableRow.displayName = 'TableRow';
