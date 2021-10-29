import type { FunctionComponent } from 'react';
import * as React from 'react';
import { Children, createContext } from 'react';
import flattenChildren from 'react-keyed-flatten-children';
import { useStyles } from 'react-treat';

import { Box } from '../Box';

import * as styleRefs from './TabPanes.treat';

interface TabPanesContextValue {
	paneIndex: number;
	renderInactive: boolean;
}

export const TabPanesContext = createContext<TabPanesContextValue | null>(null);

interface Props {
	/** Render tab panels even when visually hidden. */
	renderInactivePanes?: boolean;
}

export const TabPanes: FunctionComponent<Props> = ({
													   renderInactivePanes = false,
													   children,
												   }) => {
	const styles = useStyles(styleRefs);

	return (
		<Box paddingY='6' className={styles.root} width='full'>
			{Children.map(flattenChildren(children), (child, index) => (
				<TabPanesContext.Provider
					value={{
						paneIndex: index,
						renderInactive: renderInactivePanes,
					}}>
					{child}
				</TabPanesContext.Provider>
			))}
		</Box>
	);
};
