import * as React from 'react';
import { Children, FunctionComponent, useContext } from 'react';
import { useStyles } from 'react-treat';

import { Box } from '../Box';
import { IndexContext, TabsContext } from './context';
import * as styleRefs from './Tabs.treat';

export const TabPanes: FunctionComponent = ({ children }) => {
	const styles = useStyles(styleRefs);
	const { active } = useContext(TabsContext);
	return (
		<Box paddingY="6" className={styles.tabPanes}>
			{Children.map(children, (child, index) => (
				<IndexContext.Provider value={index}>
					{index === active ? child : null}
				</IndexContext.Provider>
			))}
		</Box>
	);
};
