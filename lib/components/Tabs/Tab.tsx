import { invariant } from '@autoguru/utilities';
import clsx from 'clsx';
import React, {
	cloneElement,
	createElement,
	type ElementType,
	forwardRef,
	isValidElement,
	type ReactElement,
	type ReactNode,
	useContext,
	useCallback,
} from 'react';

import { elementStyles } from '../../styles';
import { textStyles } from '../../styles/typography';
import type { TestIdProp } from '../../types';
import { inline } from '../Flex/flex';
import { Text } from '../Text/Text';

import * as styles from './Tab.css';
import { TabListContext } from './TabList';
import { TabsContext } from './Tabs';

export interface TabProps extends TestIdProp {
	/** The tab's label, and any decoration rendered alongside it. */
	children?: ReactNode;
	/** Custom ID for the tab element. Auto-generated if not provided. */
	id?: string;
	/** Custom component or element to render the tab as. Defaults to a `button`. */
	as?: ElementType | ReactElement;
	/** Optional numeric badge displayed after the label. */
	indication?: number;
}

export const Tab = forwardRef<HTMLDivElement, TabProps>(
	(
		{
			children,
			id: incomingId = null,
			indication = null,
			as: Component = 'button',
			testId,
		},
		ref,
	) => {
		const tabsContext = useContext(TabsContext);
		const tabListContext = useContext(TabListContext);

		invariant(
			tabsContext !== null && tabListContext !== null,
			'This tab pane isnt nested beneath <Tabs /> or <TabPanes />>',
		);

		const { appearance } = tabsContext;
		const index = tabListContext;
		const isActive = tabsContext.activeIndex === index;

		const controlsId =
			typeof incomingId === 'string'
				? incomingId
				: `${tabsContext!.id}-${index}-tab`;

		const setRef = useCallback(
			(el: HTMLDivElement | null) => {
				// Register or unregister this tab element in the TabsContext registry
				tabsContext.registerTab(index, (el as HTMLElement) ?? null);
				// Forward the ref to consumers
				if (typeof ref === 'function') {
					ref(el);
				} else if (ref && 'current' in ref) {
					ref.current = el;
				}
			},
			[tabsContext, index, ref],
		);

		const props = {
			className: clsx(
				elementStyles({
					as: typeof Component === 'string' ? Component : 'button',
					display: 'inline-flex',
					justifyContent: 'center',
					backgroundColor: 'transparent',
				}),
				textStyles({
					color: 'secondary',
					noWrap: true,
					size: '3',
					weight: 'bold',
				}),
				styles.styledTab({
					appearance,
					active: isActive,
				}),
			),
			role: 'tab',
			'aria-selected': isActive ? 'true' : 'false',
			'data-controls': controlsId,
			'data-od-component': 'tab',
			'data-testid': testId,
			tabIndex: isActive ? undefined : -1,
			onClick: () => tabsContext.onChange?.(index),
			ref: setRef,
		};

		const child = (
			<div
				className={inline({
					gap: '2',
					align: 'center',
					justify: 'center',
					noWrap: true,
				})}
			>
				<span className={styles.item}>{children}</span>
				{typeof indication === 'number' && (
					<Text
						strong
						as="span"
						size="2"
						align="center"
						display="block"
						color={isActive ? 'reverse' : 'primary'}
						className={styles.indication({
							appearance,
							active: isActive,
						})}
					>
						{indication}
					</Text>
				)}
			</div>
		);

		return isValidElement(Component)
			? cloneElement(Component, props, child)
			: createElement(Component, props, child);
	},
);

Tab.displayName = 'Tab';

export default Tab;
