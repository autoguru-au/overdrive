import * as React from 'react';
import { forwardRef, MouseEventHandler, ReactChild } from 'react';

import { Box } from '../Box';

interface Props {
	onClick?: MouseEventHandler<HTMLTableRowElement>;

	children: ReactChild | ReactChild[];
}

export const TableRow = forwardRef<HTMLDivElement, Props>(
	({ children, onClick }, ref) => (
		<Box ref={ref} display="contents" role="row" onClick={onClick}>
			{children}
		</Box>
	),
);
