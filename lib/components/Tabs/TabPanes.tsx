import React, {
	Children,
	createContext,
	type FunctionComponent,
	type ReactNode,
} from 'react';
import flattenChildren from 'react-keyed-flatten-children';

import { Box, type BoxPropsDefault } from '../Box/Box';

import * as styles from './TabPanes.css';

interface TabPanesContextValue {
	paneIndex: number;
	renderInactive: boolean;
}

export const TabPanesContext = createContext<TabPanesContextValue | null>(null);

interface TabPanesProps
	extends Pick<BoxPropsDefault, 'paddingTop' | 'paddingBottom'> {
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
