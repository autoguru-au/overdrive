import { invariant } from '@autoguru/utilities';
import clsx from 'clsx';
import * as React from 'react';
import {
	cloneElement,
	createElement,
	ElementType,
	FunctionComponent,
	isValidElement,
	ReactElement,
	ReactText,
	useContext,
} from 'react';
import { useStyles } from 'react-treat';

import { useBoxStyles } from '../Box';
import { IndexContext, TabsContext } from './context';
import * as styleRefs from './Tabs.treat';

interface Props {
	children: ReactText;
	id?: string;
	is?: ElementType | ReactElement;
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

	const styles = useStyles(styleRefs);

	invariant(
		myIndex !== null && tabsContext !== null,
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
		className: clsx(
			useBoxStyles({
				is: typeof Component === 'string' ? Component : undefined,
				display: 'block',
			}),
			styles.navItem.default,
			{
				[styles.navItem.active]: isActive,
			},
		),
		role: 'tab',
		'aria-selected': isActive ? 'true' : 'false',
		'aria-controls': controlsId,
		tabIndex: isActive ? undefined : -1,
		onClick: () => tabsContext.onChange?.(myIndex),
	};

	const child = (
		<>
			<span className={styles.tabItem}>{children}</span>
			{typeof indication === 'number' && (
				<span
					className={clsx(styles.navItemIndication.default, {
						[styles.navItemIndication.active]: isActive,
					})}>
					{indication}
				</span>
			)}
		</>
	);

	return isValidElement(Component)
		? cloneElement(Component, props, child)
		: createElement(Component, props, child);
};
