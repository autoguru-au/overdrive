import * as React from 'react';
import { forwardRef, MouseEventHandler, ReactNode } from 'react';

import { Box } from '../Box';

export interface Props {
	onClick?: MouseEventHandler<HTMLDivElement>;

	children: ReactNode | ReactNode[];
}

export const TableRow = forwardRef<HTMLDivElement, Props>(
	({ children, onClick }, ref) => (
		<Box ref={ref} display="contents" role="row" onClick={onClick}>
			{children}
		</Box>
	),
);

export default TableRow;
