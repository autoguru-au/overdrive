import * as React from 'react';
import { Children, FunctionComponent } from 'react';
import flattenChildren from 'react-keyed-flatten-children';
import { useStyles } from 'react-treat';

import { Box } from '../Box';
import { TabIndexProvider, useTabsContext } from './context';
import * as styleRefs from './TabPanes.treat';

export const TabPanes: FunctionComponent = ({ children }) => {
	const styles = useStyles(styleRefs);
	const { active } = useTabsContext()!;
	return (
		<Box paddingY="6" className={styles.root} width="full">
			{Children.map(flattenChildren(children), (child, index) => (
				<TabIndexProvider index={index}>
					{index === active ? child : null}
				</TabIndexProvider>
			))}
		</Box>
	);
};
