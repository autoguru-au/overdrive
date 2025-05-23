import type { ComponentProps, FunctionComponent } from 'react';
import * as React from 'react';
import { Children, createContext, ReactNode } from 'react';
import flattenChildren from 'react-keyed-flatten-children';

import { Box } from '../Box/Box';

import * as styles from './TabPanes.css';

interface TabPanesContextValue {
	paneIndex: number;
	renderInactive: boolean;
}

export const TabPanesContext = createContext<TabPanesContextValue | null>(null);

interface TabPanesProps
	extends Pick<ComponentProps<typeof Box>, 'paddingTop' | 'paddingBottom'> {
	/** Render tab panels even when visually hidden. */
	renderInactivePanes?: boolean;
	children?: ReactNode;
}

export const TabPanes: FunctionComponent<TabPanesProps> = ({
	renderInactivePanes = false,
	children,
	paddingTop = '6',
	paddingBottom = '6',
}) => (
	<Box
		paddingTop={paddingTop}
		paddingBottom={paddingBottom}
		className={styles.root}
		width="full"
	>
		{Children.map(flattenChildren(children), (child, index) => (
			<TabPanesContext.Provider
				value={{
					paneIndex: index,
					renderInactive: renderInactivePanes,
				}}
			>
				{child}
			</TabPanesContext.Provider>
		))}
	</Box>
);
