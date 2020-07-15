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
} from 'react';
import { useStyles } from 'react-treat';

import { useBoxStyles } from '../Box/useBoxStyles';
import { useTabIndex, useTabsContext } from './context';
import * as styleRefs from './Tab.treat';

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
		const myIndex = useTabIndex();
		const tabsContext = useTabsContext();

		const styles = useStyles(styleRefs);

		invariant(
			myIndex !== null && tabsContext !== null,
			'This tab pane isnt nested beneath <Tabs /> or <TabPanes />>',
		);

		const isActive = myIndex === tabsContext!.active;

		const controlsId =
			typeof incomingId === 'string'
				? incomingId
				: `${tabsContext!.id}-${myIndex}-tab`;

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
				styles.root.default,
				{
					[styles.root.active]: isActive,
				},
			),
			role: 'tab',
			'aria-selected': isActive ? 'true' : 'false',
			'aria-controls': controlsId,
			tabIndex: isActive ? undefined : -1,
			onClick: () => tabsContext.onChange?.(myIndex),
			ref,
		};

		const child = (
			<>
				<span className={styles.item}>{children}</span>
				{typeof indication === 'number' && (
					<span
						className={clsx(styles.indication.default, {
							[styles.indication.active]: isActive,
						})}>
						{indication}
					</span>
				)}
			</>
		);

		return isValidElement(Component)
			? cloneElement(Component, props, child)
			: createElement(Component, props, child);
	},
);
