import { invariant } from '@autoguru/utilities';
import type { FunctionComponent } from 'react';
import * as React from 'react';
import { createContext, ReactNode, useContext, useMemo } from 'react';

import type { ThemeTokens as Tokens } from '../../themes';

export interface TableContext {
	padding?: keyof Tokens['space'];
	stickyHead?: boolean;
	children?: ReactNode;
}

export interface TableRowContext {
	hover?: boolean;
	children?: ReactNode;
}

const tableContext = createContext<TableContext | null>(null);
const tableRowContext = createContext<TableRowContext | null>(null);

export const TableContextProvider: FunctionComponent<TableContext> = ({
	padding,
	stickyHead,
	children,
}) => {
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

export const TableRowContextProvider: FunctionComponent<TableRowContext> = ({
	hover = true,
	children,
}) => {
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
