import { invariant } from '@autoguru/utilities';
import * as React from 'react';
import { FunctionComponent, useContext } from 'react';
import { useStyles } from 'react-treat';

import { Box } from '../Box';
import { IndexContext, TabsContext } from './context';
import * as styleRefs from './Tabs.treat';

export const TabPane: FunctionComponent<{ id?: string }> = ({
	children,
	id: incomingId = null,
}) => {
	const myIndex = useContext(IndexContext);
	const tabsContext = useContext(TabsContext)!;

	const styles = useStyles(styleRefs);

	invariant(
		myIndex !== null && tabsContext !== null,
		'This tab pane isnt nested beneath <Tabs /> or <TabPanes />',
	);

	const myId =
		typeof incomingId === 'string'
			? incomingId
			: `${tabsContext.id}-${myIndex}-tab`;

	return (
		<Box className={styles.tabPane} tabIndex={0} role="tabpanel" id={myId}>
			{children}
		</Box>
	);
};
