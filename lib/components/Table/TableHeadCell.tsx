import { ArrowUpIcon } from '@autoguru/icons';
import { invariant } from '@autoguru/utilities';
import clsx from 'clsx';
import type { AriaAttributes } from 'react';
import * as React from 'react';
import { forwardRef, useCallback } from 'react';
import { useStyles } from 'react-treat';
import type { Theme } from 'treat/theme';

import type { Alignment } from '../../utils';
import { alignmentToFlexAlignment } from '../../utils';
import { Box } from '../Box';
import { Icon } from '../Icon';
import { Inline } from '../Inline';
import { Text } from '../Typography/Text';
import { VisuallyHidden } from '../VisuallyHidden';
import { useTableContext } from './context';
import * as styleRefs from './TableHeadCell.treat';

type Sort = 'asc' | 'desc' | 'none';

type ChangeCallback = (sort: Sort) => void;

interface Props extends Partial<Pick<AriaAttributes, 'aria-label'>> {
	align?: Alignment;
	padding?: keyof Theme['space'];

	onChange?: ChangeCallback;
	sortDirection: Sort;
	sortModes?: number;

	children?: string | null;
}

export enum SORT_MODES {
	ASC = 1 << 1,
	DESC = 1 << 2,
	NONE = 1 << 3,
}

const sortToSortMode = (sort: Sort): SORT_MODES => {
	if (sort === 'asc') return SORT_MODES.ASC;
	if (sort === 'desc') return SORT_MODES.DESC;
	return SORT_MODES.NONE;
};

const sortModeToSort = (sortMode: SORT_MODES): Sort => {
	if (sortMode === SORT_MODES.ASC) return 'asc';
	if (sortMode === SORT_MODES.DESC) return 'desc';
	return 'none';
};

const sortFlow: SORT_MODES[] = [
	SORT_MODES.ASC,
	SORT_MODES.DESC,
	SORT_MODES.NONE,
];

const sortFlowLength = sortFlow.length;
const sortFlowRingLookup = (index) =>
	sortFlow[((index % sortFlowLength) + sortFlowLength) % sortFlowLength];

// Moves the sort forward, asc->desc->none->asc->...
const shiftSort = (sort: Sort, sortModes: number): Sort => {
	let foundSort;
	let trap = -1;
	let findingIndex = sortFlow.lastIndexOf(sortToSortMode(sort));

	do {
		++trap;
		++findingIndex;

		const maybeFoundSort = sortFlowRingLookup(findingIndex);

		if (maybeFoundSort & sortModes) {
			foundSort = maybeFoundSort;
		}
	} while (foundSort === undefined && trap <= sortFlow.length);

	return sortModeToSort(foundSort);
};

const sortToAria = (sort: Sort): AriaAttributes['aria-sort'] => {
	if (sort === 'asc') return 'ascending';

	if (sort === 'desc') return 'descending';

	return 'none';
};

export const TableHeadCell = forwardRef<HTMLDivElement, Props>(
	(
		{
			align = 'left',
			onChange,
			padding: incomingPadding,
			sortDirection,
			sortModes = SORT_MODES.ASC | SORT_MODES.DESC | SORT_MODES.NONE,
			'aria-label': ariaLabel,
			children,
		},
		ref,
	) => {
		const tableContext = useTableContext();
		const styles = useStyles(styleRefs);

		const padding = incomingPadding ?? tableContext?.padding ?? 'none';

		const sortClickHandler = useCallback(() => {
			if (typeof onChange === 'function') {
				onChange(shiftSort(sortDirection ?? 'none', sortModes));
			}
		}, [onChange, sortDirection]);

		const shouldSort = typeof sortDirection === 'string'!;

		if (shouldSort) {
			invariant(
				sortModes !== undefined,
				'sortModes are required to be given at least 1',
			);
		}

		const sorter = (
			<Icon
				icon={ArrowUpIcon}
				size="small"
				className={clsx([
					styles.sorter.root,
					styles.sorter[sortDirection ?? 'none'],
				])}
			/>
		);

		const child = (
			<Inline
				alignY="center"
				alignX={alignmentToFlexAlignment(align)}
				space="1">
				{align === 'right' && shouldSort ? sorter : null}
				<Text strong size="2" is="span" colour="muted">
					{children}
					{shouldSort ? (
						<VisuallyHidden is="span">
							{' '}
							sorted {sortToAria(sortDirection!)}
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
				padding={padding}
				backgroundColour="gray100"
				borderColourBottom="light"
				borderWidthBottom="1"
				aria-sort={shouldSort ? sortToAria(sortDirection!) : undefined}
				aria-label={ariaLabel}
				className={tableContext.stickyHead && styles.sticky}
				onClick={sortDirection ? sortClickHandler : undefined}>
				{sortDirection ? (
					<Box
						is="button"
						display="block"
						width="full"
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
