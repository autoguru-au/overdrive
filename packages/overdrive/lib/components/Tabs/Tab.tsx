import { invariant } from '@autoguru/utilities';
import clsx from 'clsx';
import * as React from 'react';
import {
	cloneElement,
	createElement,
	ElementType,
	forwardRef,
	isValidElement,
	ReactElement,
	ReactNode,
	useContext,
} from 'react';

import { useBoxStyles } from '../Box';
import { Inline } from '../Inline';
import { Text, useTextStyles } from '../Text';

import * as styles from './Tab.css';
import { TabListContext } from './TabList';
import { TabsContext } from './Tabs';

export interface Props {
	children?: ReactNode;
	id?: string;
	is?: ElementType | ReactElement;
	indication?: number;
}

export const Tab = forwardRef<HTMLDivElement, Props>(
	(
		{
			children,
			id: incomingId = null,
			indication = null,
			is: Component = 'button',
		},
		ref,
	) => {
		const tabsContext = useContext(TabsContext);
		const tabListContext = useContext(TabListContext);

		invariant(
			tabsContext !== null && tabListContext !== null,
			'This tab pane isnt nested beneath <Tabs /> or <TabPanes />>',
		);

		const isActive = tabsContext.activeIndex === tabListContext;

		console.log("=>(Tab.tsx:49) tabsContext.activeIndex:", tabsContext.activeIndex);
		console.log("=>(Tab.tsx:49) isActive:", isActive);

		const indicationStyles = useBoxStyles({
			display: 'inlineBlock',
			paddingX: '1',
			borderRadius: 'pill',
		});

		const controlsId =
			typeof incomingId === 'string'
				? incomingId
				: `${tabsContext!.id}-${tabListContext}-tab`;

		const props = {
			className: clsx(
				useBoxStyles({
					is: typeof Component === 'string' ? Component : 'button',
					display: 'inlineFlex',
					justifyContent: 'center',
					// backgroundColour: 'gray900',
					marginRight: '6',
					colour: 'dark',
				}),
				useTextStyles({
					noWrap: true,
					size: '3',
					colour: 'dark',
				}),
				styles.root.default,
				{
					[styles.root.active]: isActive,
				},
			),
			role: 'tab',
			'aria-selected': isActive ? 'true' : 'false',
			'aria-controls': controlsId,
			tabIndex: isActive ? undefined : -1,
			onClick: () => tabsContext.onChange?.(tabListContext),
			ref,
		};

		const child = (
			<Inline noWrap space="2" alignY="center" alignX="center">
				<span className={styles.item}>{children}</span>
			</Inline>
		);

		return isValidElement(Component)
			? cloneElement(Component, props, child)
			: createElement(Component, props, child);
	},
);

export default Tab;
