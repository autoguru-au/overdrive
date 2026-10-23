import { invariant } from '@autoguru/utilities';
import type { FunctionComponent } from 'react';
import * as React from 'react';
import { createContext, PropsWithChildren, useContext, useMemo } from 'react';

import type { ThemeTokens as Tokens } from '../../themes';

export interface TableContext {
	/**
	 * Padding applied to every cell in the table, as a space token.
	 * Individual `TableCell` and `TableHeadCell` elements can override it
	 * with their own `padding`. Defaults to `'4'`.
	 */
	padding?: keyof Tokens['space'];

	/**
	 * Pins the header row to the top of the nearest scroll container while
	 * the body scrolls beneath it. Defaults to `false`.
	 */
	stickyHead?: boolean;
}

export interface TableRowContext {
	/**
	 * Whether hovering a cell in this row paints the hover background across
	 * the whole row. Individual cells can override it with their own `hover`.
	 * Defaults to `true`.
	 */
	hover?: boolean;
}

const tableContext = createContext<TableContext | null>(null);
const tableRowContext = createContext<TableRowContext | null>(null);

export const TableContextProvider: FunctionComponent<
	PropsWithChildren<TableContext>
> = ({ padding, stickyHead, children }) => {
	const value = useMemo(
		() => ({
			padding,
			stickyHead,
		}),
		[padding, stickyHead],
	);
	return (
		<tableContext.Provider value={value}>{children}</tableContext.Provider>
	);
};

export const TableRowContextProvider: FunctionComponent<
	PropsWithChildren<TableRowContext>
> = ({ hover = true, children }) => {
	const value = useMemo(
		() => ({
			hover,
		}),
		[hover],
	);
	return (
		<tableRowContext.Provider value={value}>
			{children}
		</tableRowContext.Provider>
	);
};

export const useTableRowContext = () => useContext(tableRowContext);

export const useTableContext = () => {
	const ctx = useContext(tableContext);

	invariant(
		ctx !== null,
		"Make sure you've got a <Table /> component in your tree",
	);

	return ctx;
};
