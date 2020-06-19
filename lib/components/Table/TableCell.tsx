import type { ReactChild } from 'react';
import * as React from 'react';
import { forwardRef } from 'react';
import { useStyles } from 'react-treat';
import type { Theme } from 'treat/theme';

import type { Alignment } from '../../utils';
import { alignmentToFlexAlignment } from '../../utils';
import { Box } from '../Box';
import { Text } from '../Typography/Text';
import { useTableContext } from './context';
import * as styleRefs from './TableCell.treat';

interface Props {
	align?: Alignment;
	padding?: keyof Theme['space'];

	children?: ReactChild | null;
}

export const TableCell = forwardRef<HTMLTableCellElement, Props>(
	({ children, padding: incomingPadding, align = 'left' }, ref) => {
		const styles = useStyles(styleRefs);
		const tableContext = useTableContext();

		const padding = incomingPadding ?? tableContext?.padding ?? 'none';

		return (
			<Box
				ref={ref}
				role="gridcell"
				scope="row"
				display="flex"
				alignItems="center"
				justifyContent={alignmentToFlexAlignment(align)}
				padding={padding}
				borderColourBottom="light"
				borderWidthBottom="1"
				className={styles.root}>
				{typeof children === 'string' ||
				typeof children === 'number' ? (
					<Text
						is="span"
						align={align}
						colour="dark"
						display="block"
						size="3">
						{children}
					</Text>
				) : (
					children
				)}
			</Box>
		);
	},
);
