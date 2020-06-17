import * as React from 'react';
import { forwardRef, ReactChild } from 'react';

import { Box } from '../Box';

interface Props {
	children: ReactChild | ReactChild[];
}

export const TableBody = forwardRef<HTMLTableSectionElement, Props>(
	({ children }, ref) => (
		<Box ref={ref} is="tbody">
			{children}
		</Box>
	),
);
