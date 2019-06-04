import clsx from 'clsx';
import React, { FunctionComponent, memo, useCallback, useMemo } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, Icon } from '../Icon';
import styles from './style.scss';
import { Bubble } from './Bubble';
import { PaginationLoading } from './Loading';

interface IOnChangeObject {
	pageNumber: number;
}

export type TOnChangeEventHandler = (event: IOnChangeObject) => void;

export interface IProps {
	className?: string;
	numPagesDisplayed?: number;
	activePage?: number;
	total?: number;
	pageSize?: number;
	onChange?: TOnChangeEventHandler;
}

export const PaginationComponent: FunctionComponent<IProps> = ({
	className = '',
	total = void 0,
	pageSize = void 0,
	activePage = void 0,
	numPagesDisplayed = 5,
	onChange = () => void 0,
}) => {
	const numPages: number = useMemo(() => calcPagesNum(total, pageSize), [
		total,
		pageSize,
	]);

	const handleClick = useCallback(
		num => () => {
			onChange({ pageNumber: withinBoundaries(num, numPages) });
		},
		[numPages]
	);

	const allowedActive: number = useMemo(
		() => withinBoundaries(activePage, numPages),
		[activePage, numPages]
	);

	const cls = clsx([styles.pagination, className]);

	const chevronLeftCls = clsx([styles.chevron], {
		[styles.disabled]: activePage <= 1,
	});

	const chevronRightCls = clsx([styles.chevron], {
		[styles.disabled]: activePage >= numPages,
	});

	return total && pageSize && activePage && numPagesDisplayed ? (
		<nav className={cls} aria-label="pagination">
			<button
				aria-disabled={activePage <= 1}
				aria-label="navigate back"
				className={chevronLeftCls}
				onClick={handleClick(activePage - 1)}>
				<Icon size={24} icon={ChevronLeftIcon} />
			</button>
			{buildPagesList(
				numPages,
				allowedActive,
				numPagesDisplayed,
				numPages - numPagesDisplayed
			).map(num => (
				<Bubble
					gap={num < 0}
					key={num}
					onClick={handleClick(num)}
					selected={allowedActive === num}
					aria-current={allowedActive === num ? 'page' : 'false'}>
					{num}
				</Bubble>
			))}
			<button
				aria-disabled={activePage >= numPages}
				aria-label="navigate forward"
				className={chevronRightCls}
				onClick={handleClick(allowedActive + 1)}>
				<Icon size={24} icon={ChevronRightIcon} />
			</button>
		</nav>
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

function generateDefaultArray(numPages: number): Array<number> {
	return new Array<number>(numPages).fill(-1).map((_, index) => index + 1);
}

function generateJumpForwardArray(
	numPages: number,
	activePage: number,
	numPagesDisplayed: number
): Array<number> {
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
	rightBoundary: number
): Array<number> {
	return generateDefaultArray(numPagesDisplayed).map(
		(_, index) => rightBoundary + index + 1
	);
}

function generateJumpBackwardArray(
	numPages: number,
	numPagesDisplayed: number
): Array<number> {
	return generateDefaultArray(numPagesDisplayed).map((_, index) => {
		const num: number = index + 1;
		const gapIndex: number = 2;
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
	rightBoundary: number
): Array<number> {
	if (numPages <= numPagesDisplayed) {
		return generateDefaultArray(numPages);
	}
	if (activePage <= rightBoundary) {
		return generateJumpForwardArray(
			numPages,
			activePage,
			numPagesDisplayed
		);
	}
	if (activePage > rightBoundary && activePage <= rightBoundary + 2) {
		return generateNoJumpArray(numPagesDisplayed, rightBoundary);
	}

	return generateJumpBackwardArray(numPages, numPagesDisplayed);
}

export const Pagination = memo(PaginationComponent);
