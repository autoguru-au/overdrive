import * as React from 'react';
import { forwardRef, MouseEventHandler, ReactNode } from 'react';

import { Box } from '../Box/Box';

export interface TableRowProps {
	onClick?: MouseEventHandler<HTMLTableRowElement>;

	className?: string;
	style?: React.CSSProperties;

	children: ReactNode | ReactNode[];
}

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
	({ children, onClick, className, style }, ref) => (
		<Box
			as="tr"
			ref={ref}
			display="contents"
			role="row"
			onClick={onClick}
			className={className}
			style={style}
		>
			{children}
		</Box>
	),
);

TableRow.displayName = 'TableRow';
