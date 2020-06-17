import * as React from 'react';
import { forwardRef, MouseEventHandler, ReactChild } from 'react';
import { useStyles } from 'react-treat';

import { Box } from '../Box';
import * as styleRefs from './TableRow.treat';

interface Props {
	onClick?: MouseEventHandler<HTMLTableRowElement>;
	children: ReactChild | ReactChild[];
}

export const TableRow = forwardRef<HTMLTableRowElement, Props>(
	({ children, onClick }, ref) => {
		const styles = useStyles(styleRefs);

		return (
			<Box
				ref={ref}
				is="tr"
				className={[styles.root, onClick && styles.hover]}
				onClick={onClick}>
				{children}
			</Box>
		);
	},
);
