import * as React from 'react';
import { forwardRef, ReactChild } from 'react';

import { Box } from '../Box';

interface Props {
	children: ReactChild | ReactChild[];
}

export const TableHead = forwardRef<HTMLTableHeaderCellElement, Props>(
	({ children }, ref) => (
		<Box ref={ref} is="thead">
			{children}
		</Box>
	),
);
