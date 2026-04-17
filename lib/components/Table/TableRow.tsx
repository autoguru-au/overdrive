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
	onClick?: MouseEventHandler<HTMLTableRowElement>;

	/**
	 * When set, the row's cells animate in with a staggered slide-up.
	 * Pass the row's index (0, 1, 2, …) to cascade the animation across
	 * rows. Omit to disable the animation.
	 */
	staggerIndex?: number;

	className?: string;
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
