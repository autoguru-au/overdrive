import { assignInlineVars } from '@vanilla-extract/dynamic';
import clsx from 'clsx';
import * as React from 'react';
import { forwardRef, MouseEventHandler, ReactNode } from 'react';

import { Box } from '../Box/Box';

import {
	rowEntering,
	staggerIndex as staggerIndexVar,
} from './TableRow.css';

export interface TableRowProps {
	/** Click handler fired when any part of the row is clicked. */
	onClick?: MouseEventHandler<HTMLTableRowElement>;

	/**
	 * Opt-in entrance animation. When set to a number, the row's cells
	 * animate in with a staggered slide-up-and-fade (translateY 12px → 0,
	 * opacity 0 → 1, 300 ms with the decelerate easing token).
	 *
	 * Pass the row's index within the list (0, 1, 2, …) so each row waits
	 * `staggerIndex * 50 ms` before animating — producing a cascade.
	 * Omit the prop to disable the animation entirely.
	 *
	 * @example
	 * {rows.map((row, i) => (
	 *   <TableRow key={row.id} staggerIndex={i}>…</TableRow>
	 * ))}
	 */
	staggerIndex?: number;

	/** Custom className applied to the underlying `<tr>` element. */
	className?: string;

	/** Inline style applied to the underlying `<tr>` element. */
	style?: React.CSSProperties;

	children: ReactNode | ReactNode[];
}

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
	({ children, onClick, className, style, staggerIndex }, ref) => {
		const shouldAnimate = typeof staggerIndex === 'number';
		const mergedStyle = shouldAnimate
			? {
					...style,
					...assignInlineVars({
						[staggerIndexVar]: String(staggerIndex),
					}),
				}
			: style;

		return (
			<Box
				as="tr"
				ref={ref}
				display="contents"
				role="row"
				onClick={onClick}
				className={clsx(className, {
					[rowEntering]: shouldAnimate,
				})}
				style={mergedStyle}
			>
				{children}
			</Box>
		);
	},
);

TableRow.displayName = 'TableRow';
