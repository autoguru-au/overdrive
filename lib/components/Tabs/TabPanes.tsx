import React, {
	Children,
	type ComponentProps,
	createContext,
	type FunctionComponent,
	type ReactNode,
} from 'react';
import flattenChildren from 'react-keyed-flatten-children';

import type { TestIdProp } from '../../types';
import { Box } from '../Box/Box';

import * as styles from './TabPanes.css';

interface TabPanesContextValue {
	paneIndex: number;
	renderInactive: boolean;
}

export const TabPanesContext = createContext<TabPanesContextValue | null>(null);

export interface TabPanesProps
	extends Pick<ComponentProps<typeof Box>, 'paddingTop' | 'paddingBottom'>,
		TestIdProp {
	/** Render tab panels even when visually hidden. */
	renderInactivePanes?: boolean;
	/** The `TabPane` elements, one per tab. */
	children?: ReactNode;
}

export const TabPanes: FunctionComponent<TabPanesProps> = ({
	renderInactivePanes = false,
	children,
	paddingTop = '6',
	paddingBottom = '6',
	testId,
}) => (
	<Box
		paddingTop={paddingTop}
		paddingBottom={paddingBottom}
		className={styles.root}
		odComponent="tab-panes"
		testId={testId}
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

TabPanes.displayName = 'TabPanes';
