import { ChevronLeftIcon, ChevronRightIcon, IconType } from '@autoguru/icons';
import clsx from 'clsx';
import * as React from 'react';
import {
	FunctionComponent,
	MouseEventHandler,
	useCallback,
	useMemo,
} from 'react';

import { noop } from '../../utils';
import { Box } from '../Box';
import { Icon } from '../Icon';
import { Inline } from '../Inline';
import { useTextStyles } from '../Text';

import { Bubble } from './Bubble';

import * as styles from './Pagination.css';

interface OnChangeObject {
	pageNumber: number;
}

export type TOnChangeEventHandler = (event: OnChangeObject) => void;

export interface Props {
	numPagesDisplayed?: number;
	activePage: number;
	total: number;
	pageSize: number;
	loading?: boolean;
	onChange?: TOnChangeEventHandler;
}

interface NavButtonProps {
	icon: IconType;
	disabled: boolean;
	label?: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}

const NavButton: FunctionComponent<NavButtonProps> = ({
	icon,
	disabled,
	label = '',
	onClick = noop,
}) => (
	<Box
		is="button"
		aria-disabled={disabled}
		aria-label={label}
		display="flex"
		overflow="hidden"
		alignItems="center"
		flexDirection="row"
		justifyContent="center"
		textAlign="center"
		borderRadius="pill"
		padding="2"
		userSelect="none"
		pointerEvents={disabled ? 'none' : void 0}
		className={clsx(useTextStyles({ colour: 'light' }), {
			[styles.disabled]: disabled,
		})}
		onClick={onClick}>
		<Icon size="medium" icon={icon} />
	</Box>
);

interface LoadingComponentProps {
	className?: string;
	placeholderBubblesNum?: number;
}

const Loading: FunctionComponent<LoadingComponentProps> = ({
	placeholderBubblesNum = 3,
}) => (
	<Inline is="span" space="3">
		<NavButton disabled icon={ChevronLeftIcon} />
		{Array.from({ length: placeholderBubblesNum })
			.fill('')
			.map((_, index) => (
				<Bubble
					key={index}
					children=""
					disabled
					className={styles.disabled}
				/>
			))}

		<NavButton disabled icon={ChevronRightIcon} />
	</Inline>
)

export const Pagination: FunctionComponent<Props> = ({
	total,
	pageSize,
	activePage,
	numPagesDisplayed = 5,
	loading = false,
	onChange = noop,
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

	return !loading && total && pageSize && activePage && numPagesDisplayed ? (
		<Inline is="nav" space="3" aria-label="pagination">
			<NavButton
				disabled={activePage <= 1}
				label="navigate back"
				icon={ChevronLeftIcon}
				onClick={handleClick(activePage - 1)}
			/>
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

			<NavButton
				disabled={activePage >= numPages}
				label="navigate forward"
				icon={ChevronRightIcon}
				onClick={handleClick(allowedActive + 1)}
			/>
		</Inline>
	) : (
		<Loading placeholderBubblesNum={3} />
	);
};

function calcPagesNum(total: number, pageSize: number): number {
	return Math.ceil(total / pageSize);
}

function withinBoundaries(activePage: number, numPages: number): number {
	return Math.min(Math.max(1, activePage), numPages);
}

function generateDefaultArray(numPages: number): number[] {
	return Array.from({ length: numPages })
		.fill(-1)
		.map((_, index) => index + 1);
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
