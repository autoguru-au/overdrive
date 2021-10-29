import { invariant } from '@autoguru/utilities';
import type { FunctionComponent } from 'react';
import * as React from 'react';
import { createContext, useContext, useMemo } from 'react';
import type { Theme } from 'treat/theme';

export interface TableContext {
	padding?: keyof Theme['space'];
	stickyHead?: boolean;
}

const tableContext = createContext<TableContext | null>(null);

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

export const useTableContext = () => {
	const ctx = useContext(tableContext);

	invariant(
		ctx !== null,
		'Make sure you\'ve got a <Table /> component in your tree',
	);

	return ctx;
};
