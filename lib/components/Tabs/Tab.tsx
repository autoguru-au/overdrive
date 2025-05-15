import { invariant } from '@autoguru/utilities';
import React, { cloneElement, type ElementType, useContext } from 'react';

import { useBox, type UseBoxProps } from '../Box/useBox';
import { Inline } from '../Inline/Inline';
import { Text } from '../Text/Text';
import { useTextStyles } from '../Text/useTextStyles';

import * as styles from './Tab.css';
import { TabListContext } from './TabList';
import { TabsContext } from './Tabs';

export interface TabProps {
	indication?: number;
}

export const Tab = <E extends ElementType>({
	as = 'button' as E,
	children,
	id: incomingId,
	indication,
	...tabProps
}: UseBoxProps<E> & TabProps) => {
	const tabsContext = useContext(TabsContext);
	const tabListContext = useContext(TabListContext);

	invariant(
		tabsContext !== null && tabListContext !== null,
		'This tab pane isnt nested beneath <Tabs /> or <TabPanes />>',
	);

	const { appearance } = tabsContext;
	const isActive = tabsContext.activeIndex === tabListContext;

	const controlsId =
		typeof incomingId === 'string'
			? incomingId
			: `${tabsContext!.id}-${tabListContext}-tab`;

	const { Component, componentProps, reactElement } = useBox<E>({
		...(tabProps as UseBoxProps<E>),
		as: typeof as === 'string' ? as : 'button',
		backgroundColour: 'transparent',
		className: [
			useTextStyles({
				noWrap: true,
				size: '3',
				fontWeight: 'bold',
				colour: 'light',
			}),
			styles.styledTab({
				appearance,
				active: isActive,
			}),
		],
		display: 'inline-flex',
		justifyContent: 'center',
		onClick: () => tabsContext.onChange?.(tabListContext),
		role: 'tab',
		tabIndex: isActive ? undefined : -1,
		'aria-selected': isActive ? 'true' : 'false',
		'data-controls': controlsId,
	});

	const child = (
		<Inline noWrap space="2" alignY="center" alignX="center">
			<span className={styles.item}>{children}</span>
			{typeof indication === 'number' && (
				<Text
					strong
					is="span"
					size="2"
					align="center"
					display="block"
					colour={isActive ? 'white' : 'dark'}
					className={styles.indication({
						appearance,
						active: isActive,
					})}
				>
					{indication}
				</Text>
			)}
		</Inline>
	);

	if (reactElement) {
		return cloneElement(reactElement, componentProps, child);
	}

	return <Component {...componentProps}>{child}</Component>;
};

Tab.displayName = 'Tab';
