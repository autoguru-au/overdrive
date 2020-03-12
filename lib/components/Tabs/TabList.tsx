import * as React from 'react';
import { Children, FunctionComponent } from 'react';
import { useStyles } from 'react-treat';

import { Box } from '../Box';
import { IndexContext } from './context';
import * as styleRefs from './Tabs.treat';

export const TabList: FunctionComponent = ({ children }) => {
	const styles = useStyles(styleRefs);

	return (
		<Box
			borderWidth="none"
			borderWidthBottom="1"
			borderColour="gray"
			role="tablist"
			className={styles.tabsList}>
			{Children.map(children, (child, index) => (
				<IndexContext.Provider value={index}>
					{child}
				</IndexContext.Provider>
			))}
		</Box>
	);
};
