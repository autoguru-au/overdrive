import { ArrowUpIcon } from '@autoguru/icons';
import clsx from 'clsx';
import type { AriaAttributes, ComponentProps } from 'react';
import * as React from 'react';
import { forwardRef, useCallback } from 'react';

import { Alignment, alignmentToFlexAlignment } from '../../utils';
import { Box } from '../Box/Box';
import { Icon } from '../Icon/Icon';
import { Inline } from '../Inline/Inline';
import { Text } from '../Text/Text';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';

import * as styles from './TableHeadCell.css';
import { useTableContext } from './context';

type Sort = 'asc' | 'desc' | 'none';

export interface TableHeadCellProps
	extends Partial<Pick<AriaAttributes, 'aria-label'>>,
		Pick<ComponentProps<typeof Box>, 'padding'> {
	align?: Alignment;

	sort?: Sort;
	onSort?: (event: MouseEvent) => void;

	children?: string | null;
}

const sortToAria = (sort: Sort): AriaAttributes['aria-sort'] => {
	if (sort === 'asc') return 'ascending';

	if (sort === 'desc') return 'descending';

	return 'none';
};

export const TableHeadCell = forwardRef<
	HTMLTableCellElement,
	TableHeadCellProps
>(
	(
		{
			align = 'left',
			onSort,
			sort,
			padding: incomingPadding,
			'aria-label': ariaLabel,
			children,
		},
		ref,
	) => {
		const tableContext = useTableContext();

		const padding = incomingPadding ?? tableContext?.padding ?? 'none';

		const sortClickHandler = useCallback(
			(event) => {
				if (typeof onSort === 'function') {
					onSort(event);
				}
			},
			[onSort],
		);

		const shouldSort = typeof sort === 'string'!;

		const sorter = (
			<Icon
				icon={ArrowUpIcon}
				size="small"
				className={clsx([
					styles.sorter.root,
					styles.sorter[sort ?? 'none'],
				])}
			/>
		);

		const child = (
			<Inline
				alignY="center"
				alignX={alignmentToFlexAlignment(align)}
				space="1"
			>
				{align === 'right' && shouldSort ? sorter : null}
				<Text strong size="3" as="span" className={styles.text}>
					{children}
					{shouldSort ? (
						<VisuallyHidden as="span">
							{' '}
							sorted {sortToAria(sort!)}
						</VisuallyHidden>
					) : null}
				</Text>
				{(align === 'left' || align === 'center') && shouldSort
					? sorter
					: null}
			</Inline>
		);

		return (
			<Box
				as="th"
				ref={ref}
				role="columnheader"
				scope="col"
				display="flex"
				alignItems="center"
				justifyContent={alignmentToFlexAlignment(align)}
				padding={sort ? undefined : padding}
				borderBottomColour="dark"
				borderBottomWidth="1"
				aria-sort={shouldSort ? sortToAria(sort!) : undefined}
				aria-label={ariaLabel}
				className={tableContext.stickyHead && styles.sticky}
				onClick={sort ? sortClickHandler : undefined}
			>
				{sort ? (
					<Box
						as="button"
						display="block"
						width="full"
						padding={padding}
						tabIndex={-1}
						className={styles.sorterButton}
					>
						{child}
					</Box>
				) : (
					child
				)}
			</Box>
		);
	},
);

TableHeadCell.displayName = 'TableHeadCell';
