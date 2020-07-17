import { invariant } from '@autoguru/utilities';
import * as React from 'react';
import { FunctionComponent } from 'react';
import { useStyles } from 'react-treat';

import { Box } from '../Box';
import { useTabIndex, useTabsContext } from './context';
import * as styleRefs from './TabPane.treat';

export const TabPane: FunctionComponent<{ id?: string }> = ({
	children,
	id: incomingId = null,
}) => {
	const myIndex = useTabIndex();
	const tabsContext = useTabsContext();

	const styles = useStyles(styleRefs);

	invariant(
		myIndex !== null && tabsContext !== null,
		'This tab pane isnt nested beneath <Tabs /> or <TabPanes />',
	);

	const myId =
		typeof incomingId === 'string'
			? incomingId
			: `${tabsContext!.id}-${myIndex}-tab`;

	return (
		<Box
			className={styles.root}
			tabIndex={0}
			role="tabpanel"
			id={myId}
			width="full"
		>
			{children}
		</Box>
	);
};
