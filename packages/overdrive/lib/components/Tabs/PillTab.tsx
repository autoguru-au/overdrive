import { invariant } from '@autoguru/utilities';
import { useTabListState } from '@react-stately/tabs';
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
import { useTab, useTabList } from 'react-aria';


import { useBoxStyles } from '../Box';
import { Inline } from '../Inline';
import { Text, useTextStyles } from '../Text';

import * as styles from './PillTab.css';
import { TabListContext } from './PillTabList';
import { TabsContext } from './Tabs';

type AriaTabProps = Parameters<typeof useTab>[0];
export type TabProps = AriaTabProps
// {
// 	children?: ReactNode;
// 	id?: string;
// 	is?: ElementType | ReactElement;
// 	bubble?: number;
// }

export const PillTab = forwardRef<HTMLDivElement, any>(
	({ item, state }
		// {
		// 	children,
		// 	id: incomingId = null,
		// 	bubble = null,
		// 	is: Component = 'button',
		// },
		// ref,
		// ...incomingProps
	) => {
		// const props = {
		//  ...incomingProps
		// }
		const { key, rendered } = item;
		const ref = React.useRef(null);
		const { tabProps } = useTab({ key }, state, ref);
		// const props = {
		// 	className: clsx(
		// 		useBoxStyles({
		// 			is: typeof Component === 'string' ? Component : 'button',
		// 			display: 'inlineFlex',
		// 			justifyContent: 'center',
		// 			backgroundColour: 'transparent',
		// 			marginRight: '6',
		// 		}),
		// 		useTextStyles({
		// 			noWrap: true,
		// 			size: '3',
		// 			colour: 'light',
		// 		}),
		// 		styles.root.default,
		// 		{
		// 			[styles.root.active]: isActive,
		// 		},
		// 	),
		// 	role: 'tab',
		// 	'aria-selected': state.selectedItem .isAc ? 'true' : 'false',
		// 	'aria-controls': controlsId,
		// 	tabIndex: isActive ? undefined : -1,
		// 	onClick: () => tabsContext.onChange?.(tabListContext),
		// 	ref,
		// };
		console.log('=> state: ', state)

		return (<Inline noWrap space="2" alignY="center" alignX="center">
			<span {...tabProps} className={styles.item}>{rendered}</span>
		</Inline>)
		return (
			<div {...tabProps} ref={ref}>
				{rendered}
			</div>
		);

		const tabsContext = useContext(TabsContext);
		const tabListContext = useContext(TabListContext);

		invariant(
			tabsContext !== null && tabListContext !== null,
			'This tab pane isnt nested beneath <Tabs /> or <TabPanes />>',
		);

		const isActive = tabsContext.activeIndex === tabListContext;

		const bubbleStyles = useBoxStyles({
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
					backgroundColour: 'transparent',
					marginRight: '6',
				}),
				useTextStyles({
					noWrap: true,
					size: '3',
					colour: 'light',
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
				{typeof bubble === 'number' && (
					<Text
						strong
						is="span"
						size="2"
						align="center"
						display="block"
						colour={isActive ? 'white' : 'dark'}
						className={clsx(
							styles.bubble.default,
							bubbleStyles,
							{ [styles.bubble.active]: isActive },
						)}
					>
						{bubble}
					</Text>
				)}
			</Inline>
		);

		return isValidElement(Component)
			? cloneElement(Component, props, child)
			: createElement(Component, props, child);
	},
);

export default PillTab;
