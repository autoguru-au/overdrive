import { invariant } from '@autoguru/utilities';
import React, {
	type FunctionComponent,
	type ReactNode,
	useContext,
} from 'react';

import type { TestIdProp } from '../../types';
import { Box } from '../Box/Box';

import * as styles from './TabPane.css';
import { TabPanesContext } from './TabPanes';
import { TabsContext } from './Tabs';

export interface TabPaneProps extends TestIdProp {
	/** Custom ID for the tab panel element. Auto-generated if not provided. */
	id?: string;
	/** The panel's content. */
	children?: ReactNode;
}

export const TabPane: FunctionComponent<TabPaneProps> = ({
	children,
	id: incomingId = null,
	testId,
}) => {
	const tabPanesContext = useContext(TabPanesContext);
	const tabsContext = useContext(TabsContext);

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
			odComponent="tab-pane"
			testId={testId}
			tabIndex={0}
			role="tabpanel"
			id={myId}
			width="full"
		>
			{isActive || renderInactive ? children : undefined}
		</Box>
	);
};

TabPane.displayName = 'TabPane';
