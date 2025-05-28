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

import { useBoxStyles } from '../Box/useBoxStyles';
import { Inline } from '../Inline/Inline';
import { Text } from '../Text/Text';
import { useTextStyles } from '../Text/useTextStyles';

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

		const { appearance } = tabsContext;
		const isActive = tabsContext.activeIndex === tabListContext;

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
					backgroundColour: 'transparent',
				}),
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
			),
			role: 'tab',
			'aria-selected': isActive ? 'true' : 'false',
			'data-controls': controlsId,
			tabIndex: isActive ? undefined : -1,
			onClick: () => tabsContext.onChange?.(tabListContext),
			ref,
		};

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

		return isValidElement(Component)
			? cloneElement(Component, props, child)
			: createElement(Component, props, child);
	},
);

Tab.displayName = 'Tab';

export default Tab;
