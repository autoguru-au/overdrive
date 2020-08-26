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
	ReactText,
	useContext,
} from 'react';
import { useStyles } from 'react-treat';

import { useBoxStyles } from '../Box';
import { Inline } from '../Inline';
import { Text, useTextStyles } from '../Text';
import * as styleRefs from './Tab.treat';
import { TabListContext } from './TabList';
import { TabsContext } from './Tabs';

export interface Props {
	children: ReactText;
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

		const styles = useStyles(styleRefs);
		const indicationStyles = useBoxStyles({
			display: 'inlineBlock',
			paddingX: '1',
			backgroundColour: isActive ? 'green900' : 'gray300',
			borderRadius: 'pill',
		});

		const controlsId =
			typeof incomingId === 'string'
				? incomingId
				: `${tabsContext!.id}-${tabListContext}-tab`;

		invariant(
			typeof children === 'string' || typeof children === 'number',
			'Tab children have to be text.',
		);

		const props = {
			className: clsx(
				useBoxStyles({
					is: typeof Component === 'string' ? Component : 'button',
					display: 'inlineBlock',
					backgroundColour: 'transparent',
					marginRight: '6',
				}),
				useTextStyles({
					noWrap: true,
					size: '3',
					fontWeight: 'bold',
					colour: 'muted',
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
			<Inline space="2" alignY="center">
				<span className={styles.item}>{children}</span>
				{typeof indication === 'number' && (
					<Text
						strong
						is="span"
						size="2"
						align="center"
						display="block"
						colour={isActive ? 'white' : 'dark'}
						className={clsx(
							styles.indication.default,
							indicationStyles,
						)}>
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
