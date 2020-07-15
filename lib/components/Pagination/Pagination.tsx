import { ChevronLeftIcon, ChevronRightIcon } from '@autoguru/icons';
import clsx from 'clsx';
import * as React from 'react';
import { FunctionComponent, memo, useCallback, useMemo } from 'react';
import { useStyles } from 'react-treat';

import { Box } from '../Box/Box';
import { Icon } from '../Icon/Icon';
import { Bubble } from './Bubble';
import { PaginationLoading } from './Loading';
import * as styleRefs from './Pagination.treat';

interface OnChangeObject {
	pageNumber: number;
}

export type TOnChangeEventHandler = (event: OnChangeObject) => void;

export interface Props {
	className?: string;
	numPagesDisplayed?: number;
	activePage: number;
	total: number;
	pageSize: number;
	loading?: boolean;
	onChange?: TOnChangeEventHandler;
}

const PaginationComponent: FunctionComponent<Props> = ({
	className = '',
	total,
	pageSize,
	activePage,
	numPagesDisplayed = 5,
	loading = false,
	onChange = () => undefined,
}) => {
	const numPages: number = useMemo(() => calcPagesNum(total, pageSize), [
		total,
		pageSize,
	]);

	const handleClick = useCallback(
		(num) => () => {
			onChange({ pageNumber: withinBoundaries(num, numPages) });
		},
		[numPages],
	);

	const allowedActive: number = useMemo(
		() => withinBoundaries(activePage, numPages),
		[activePage, numPages],
	);

	const styles = useStyles(styleRefs);

	const cls = clsx([styles.root, className]);

	const chevronLeftCls = clsx(
		styles.chevron.default,
		styles.activeItem.default,
		{
			[styles.chevron.disabled]: activePage <= 1,
		},
	);

	const chevronRightCls = clsx(
		styles.chevron.default,
		styles.activeItem.default,
		{
			[styles.chevron.disabled]: activePage >= numPages,
		},
	);

	return !loading && total && pageSize && activePage && numPagesDisplayed ? (
		<Box is="nav" className={cls} aria-label="pagination">
			<Box
				is="button"
				aria-disabled={activePage <= 1}
				aria-label="navigate back"
				className={chevronLeftCls}
				userSelect="none"
				onClick={handleClick(activePage - 1)}>
				<Icon
					size="medium"
					className={styles.chevron.icon}
					icon={ChevronLeftIcon}
				/>
			</Box>
			{buildPagesList(
				numPages,
				allowedActive,
				numPagesDisplayed,
				numPages - numPagesDisplayed,
			).map((num) => (
				<Bubble
					key={num}
					gap={num < 0}
					selected={allowedActive === num}
					aria-current={allowedActive === num ? 'page' : 'false'}
					onClick={handleClick(num)}>
					{num}
				</Bubble>
			))}
			<Box
				is="button"
				aria-disabled={activePage >= numPages}
				aria-label="navigate forward"
				className={chevronRightCls}
				userSelect="none"
				onClick={handleClick(allowedActive + 1)}>
				<Icon
					size="medium"
					className={styles.chevron.icon}
					icon={ChevronRightIcon}
				/>
			</Box>
		</Box>
	) : (
		<PaginationLoading className={cls} placeholderBubblesNum={3} />
	);
};

function calcPagesNum(total: number, pageSize: number): number {
	return Math.ceil(total / pageSize);
}

function withinBoundaries(activePage: number, numPages: number): number {
	return Math.min(Math.max(1, activePage), numPages);
}

function generateDefaultArray(numPages: number): number[] {
	return new Array<number>(numPages).fill(-1).map((_, index) => index + 1);
}

function generateJumpForwardArray(
	numPages: number,
	activePage: number,
	numPagesDisplayed: number,
): number[] {
	return generateDefaultArray(numPagesDisplayed).map((_, index) => {
		const num: number = index + 1;
		const gapIndex: number = numPagesDisplayed - 1;
		if (num < gapIndex) {
			return activePage + index;
		}

		if (num === gapIndex) {
			return -1;
		}

		return numPages;
	});
}

function generateNoJumpArray(
	numPagesDisplayed: number,
	rightBoundary: number,
): number[] {
	return generateDefaultArray(numPagesDisplayed).map(
		(_, index) => rightBoundary + index + 1,
	);
}

function generateJumpBackwardArray(
	numPages: number,
	numPagesDisplayed: number,
): number[] {
	return generateDefaultArray(numPagesDisplayed).map((_, index) => {
		const num: number = index + 1;
		const gapIndex = 2;
		if (num === 1) {
			return 1;
		}

		if (num === gapIndex) {
			return -1;
		}

		return numPages - 4 + index;
	});
}

function buildPagesList(
	numPages: number,
	activePage: number,
	numPagesDisplayed: number,
	rightBoundary: number,
): number[] {
	if (numPages <= numPagesDisplayed) {
		return generateDefaultArray(numPages);
	}

	if (activePage <= rightBoundary) {
		return generateJumpForwardArray(
			numPages,
			activePage,
			numPagesDisplayed,
		);
	}

	if (activePage > rightBoundary && activePage <= rightBoundary + 2) {
		return generateNoJumpArray(numPagesDisplayed, rightBoundary);
	}

	return generateJumpBackwardArray(numPages, numPagesDisplayed);
}

export const Pagination = memo(PaginationComponent);
