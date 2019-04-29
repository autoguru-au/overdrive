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

type ComponentWithChildren<P> = P & { children?: ReactNode };

export interface IProps {
	active?: number;

	onChange?(value: string): void;
}

export const Tabs: FunctionComponent<IProps> = ({
	active: incomingActive = 0,
	onChange = () => void 0,
	children,
}) => {
	const [active, setActive] = useState(incomingActive);
	const [prevActive, setPrevActive] = useState(null);

	if (incomingActive !== prevActive) {
		setActive(incomingActive);
		setPrevActive(incomingActive);
	}

	const setActiveCb = idx => () => {
		onChange(idx);
		setActive(idx);
	};

	const tabsChildren = Children.toArray(children) as Array<
		ReactElement<ComponentWithChildren<ITabProps>>
	>;

	const tabs = tabsChildren.map((child, idx) => [
		<TabNavItem
			key={idx}
			onClick={setActiveCb(idx)}
			active={active === idx}
			indication={child.props.indication}>
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
