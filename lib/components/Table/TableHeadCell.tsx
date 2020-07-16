import { ArrowUpIcon } from '@autoguru/icons';
import clsx from 'clsx';
import type { AriaAttributes } from 'react';
import * as React from 'react';
import { forwardRef, useCallback } from 'react';
import { useStyles } from 'react-treat';
import type { Theme } from 'treat/theme';

import { Alignment, alignmentToFlexAlignment } from '../../utils';
import { Box } from '../Box';
import { Icon } from '../Icon';
import { Inline } from '../Inline';
import { Text } from '../Text';
import { VisuallyHidden } from '../VisuallyHidden';
import { useTableContext } from './context';
import * as styleRefs from './TableHeadCell.treat';

type Sort = 'asc' | 'desc' | 'none';

export interface Props extends Partial<Pick<AriaAttributes, 'aria-label'>> {
	align?: Alignment;
	padding?: keyof Theme['space'];

	sort?: Sort;
	onSort?: (event: MouseEvent) => void;

	children?: string | null;
}

const sortToAria = (sort: Sort): AriaAttributes['aria-sort'] => {
	if (sort === 'asc') return 'ascending';

	if (sort === 'desc') return 'descending';

	return 'none';
};

export const TableHeadCell = forwardRef<HTMLDivElement, Props>(
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
		const styles = useStyles(styleRefs);

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
				space="1">
				{align === 'right' && shouldSort ? sorter : null}
				<Text strong size="2" is="span" className={styles.text}>
					{children}
					{shouldSort ? (
						<VisuallyHidden is="span">
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
				ref={ref}
				role="columnheader"
				scope="col"
				display="flex"
				alignItems="center"
				justifyContent={alignmentToFlexAlignment(align)}
				padding={sort ? undefined : padding}
				backgroundColour="gray100"
				borderColourBottom="light"
				borderWidthBottom="1"
				aria-sort={shouldSort ? sortToAria(sort!) : undefined}
				aria-label={ariaLabel}
				className={tableContext.stickyHead && styles.sticky}
				onClick={sort ? sortClickHandler : undefined}>
				{sort ? (
					<Box
						is="button"
						display="block"
						width="full"
						padding={padding}
						tabIndex={-1}
						className={styles.sorterButton}>
						{child}
					</Box>
				) : (
					child
				)}
			</Box>
		);
	},
);
