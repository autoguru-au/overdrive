import { invariant } from '@autoguru/utilities';
import type { FunctionComponent } from 'react';
import * as React from 'react';
import { useContext } from 'react';
import { useStyles } from 'react-treat';

import { Box } from '../Box';
import * as styleRefs from './TabPane.treat';
import { TabPanesContext } from './TabPanes';
import { TabsContext } from './Tabs';

export const TabPane: FunctionComponent<{ id?: string }> = ({
	children,
	id: incomingId = null,
}) => {
	const tabPanesContext = useContext(TabPanesContext);
	const tabsContext = useContext(TabsContext);

	const styles = useStyles(styleRefs);

	invariant(
		tabPanesContext !== null && tabsContext !== null,
		'TabPane rendered outside Tabs or TabPanes',
	);

	const { paneIndex, renderInactive } = tabPanesContext;

	const myId =
		typeof incomingId === 'string'
			? incomingId
			: `${tabsContext!.id}-${paneIndex}-tab`;

	const isActive = tabsContext!.activeIndex === paneIndex;

	return (
		<Box
			display={isActive ? undefined : 'none'}
			aria-hidden={isActive ? undefined : true}
			className={styles.root}
			tabIndex={0}
			role="tabpanel"
			id={myId}
			width="full">
			{isActive || renderInactive ? children : undefined}
		</Box>
	);
};
