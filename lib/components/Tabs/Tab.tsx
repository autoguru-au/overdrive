import { invariant } from '@autoguru/utilities';
import clsx from 'clsx';
import React, {
	cloneElement,
	createElement,
	FunctionComponent,
	isValidElement,
	ReactElement,
	ReactText,
	useContext,
} from 'react';

import { IndexContext, TabsContext } from './context';
import styles from './style.scss';

interface Props {
	children: ReactText;
	id?: string;
	is?: ReactElement | 'button';
	indication?: number;
}

export const Tab: FunctionComponent<Props> = ({
	children,
	id: incomingId = null,
	indication = null,
	is: Component = 'button',
}) => {
	const myIndex = useContext(IndexContext);
	const tabsContext = useContext(TabsContext);

	invariant(
		myIndex !== null && tabsContext.id !== null,
		'This tab pane isnt nested beneath <Tabs /> or <TabPanes />>',
	);

	const isActive = myIndex === tabsContext.active;

	const controlsId =
		typeof incomingId === 'string'
			? incomingId
			: `${tabsContext.id}-${myIndex}-tab`;

	invariant(
		typeof children === 'string' || typeof children === 'number',
		'Tab children have to be text.',
	);

	const props = {
		className: clsx(styles.navItem, {
			[styles.navItemActive]: isActive,
		}),
		role: 'tab',
		'aria-selected': isActive ? 'true' : 'false',
		'aria-controls': controlsId,
		tabIndex: isActive ? undefined : -1,
		onClick: () => tabsContext.onChange(myIndex),
	};

	const child = (
		<>
			<span className={styles.navItemTitle}>{children}</span>
			{typeof indication === 'number' && (
				<span className={styles.navItemIndication}>{indication}</span>
			)}
		</>
	);

	return isValidElement(Component)
		? cloneElement(Component, props, child)
		: createElement(Component, props, child);
};
