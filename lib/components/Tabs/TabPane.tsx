import { invariant } from '@autoguru/utilities';
import React, { FunctionComponent, useContext } from 'react';

import { IndexContext, TabsContext } from './context';
import styles from './style.scss';

export const TabPane: FunctionComponent<{ id?: string }> = ({
	children,
	id: incomingId = null,
}) => {
	const myIndex = useContext(IndexContext);
	const tabsContext = useContext(TabsContext);

	invariant(
		myIndex !== null && tabsContext.id !== null,
		'This tab pane isnt nested beneath <Tabs /> or <TabPanes />>',
	);

	const myId =
		typeof incomingId === 'string'
			? incomingId
			: `${tabsContext.id}-${myIndex}-tab`;

	return (
		<div className={styles.tabPane} tabIndex={0} role="tabpanel" id={myId}>
			{children}
		</div>
	);
};
