import React, {
	Children,
	FunctionComponent,
	ReactElement,
	ReactNode,
	useState,
} from 'react';

import styles from './style.scss';
import { IProps as ITabProps } from './Tab';
import { TabNavItem } from './TabNavItem';
import { TabPane } from './TabPane';

// TODO: Do we share this?
type ComponentWithChildren<P> = P & { children?: ReactNode };

export interface IProps {
	active?: number;
}

// TODO: Get this using React.memo too
export const Tabs: FunctionComponent<IProps> = ({
	active: incomingActive = 0,
	children,
}) => {
	const [active, setActive] = useState<number>(incomingActive);

	const tabsChildren = Children.toArray(children) as Array<
		ReactElement<ComponentWithChildren<ITabProps>>
	>;

	const setActiveCb = idx => () => setActive(idx);

	const tabs = tabsChildren.map((child, idx) => [
		<TabNavItem
			key={idx}
			onClick={setActiveCb(idx)}
			active={active === idx}>
			{child.props.title}
		</TabNavItem>,
		<TabPane key={idx} active={active === idx}>
			{child.props.children}
		</TabPane>,
	]);

	return (
		<div className={styles.tabs}>
			<div className={styles.tabsNav}>{tabs.map(([item]) => item)}</div>
			<div className={styles.tabsContent}>
				{tabs.map(([, item]) => item)}
			</div>
		</div>
	);
};
