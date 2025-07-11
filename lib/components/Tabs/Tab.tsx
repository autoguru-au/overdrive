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

import { elementStyles } from '../../styles';
import { textStyles } from '../../styles/typography';
import { inline } from '../Flex/flex';
import { Text } from '../Text/Text';

import * as styles from './Tab.css';
import { TabListContext } from './TabList';
import { TabsContext } from './Tabs';

export interface TabProps {
	children?: ReactNode;
	id?: string;
	as?: ElementType | ReactElement;
	indication?: number;
}

export const Tab = forwardRef<HTMLDivElement, TabProps>(
	(
		{
			children,
			id: incomingId = null,
			indication = null,
			as: Component = 'button',
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
		const isActive = tabsContext.activeIndex === tabListContext;

		const controlsId =
			typeof incomingId === 'string'
				? incomingId
				: `${tabsContext!.id}-${tabListContext}-tab`;

		const props = {
			className: clsx(
				elementStyles({
					as: typeof Component === 'string' ? Component : 'button',
					display: 'inline-flex',
					justifyContent: 'center',
					backgroundColour: 'transparent',
				}),
				textStyles({
					colour: 'light',
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
			tabIndex: isActive ? undefined : -1,
			onClick: () => tabsContext.onChange?.(tabListContext),
			ref,
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
						colour={isActive ? 'white' : 'dark'}
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
