import type { ReactChild } from 'react';
import * as React from 'react';
import { forwardRef } from 'react';
import type { Theme } from 'treat/theme';

import { Box } from '../Box';
import type { BoxStyleProps } from '../Box/useBoxStyles';
import { Text } from '../Typography/Text';
import { useTableContext } from './TableContext';

interface Props {
	padding?: keyof Theme['space'];
	align?: BoxStyleProps['textAlign'];
	children?: ReactChild | null;
}

export const TableCell = forwardRef<HTMLTableCellElement, Props>(
	({ children, padding: incomingPadding, align = 'left' }, ref) => {
		const tableContext = useTableContext();

		const padding = incomingPadding ?? tableContext?.padding ?? 'none';

		return (
			<Box
				ref={ref}
				is="td"
				scope="row"
				padding={padding}
				borderColourBottom="light"
				borderWidthBottom="1"
				style={{ minWidth: 'min-content' }}>
				{typeof children === 'string' ||
				typeof children === 'number' ? (
					<Text
						size="3"
						align={align}
						is="span"
						colour="dark"
						display="block">
						{children}
					</Text>
				) : (
					children
				)}
			</Box>
		);
	},
);
