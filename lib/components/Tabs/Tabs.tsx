import React, {
	Children,
	ComponentPropsWithoutRef,
	FunctionComponent,
	ReactElement,
	useEffect,
	useState,
} from 'react';

import styles from './style.scss';
import { Tab } from './Tab';
import { TabNavItem } from './TabNavItem';
import { TabPane } from './TabPane';

export interface Props {
	active?: number;

	onChange?(value: number): void;
}

export const Tabs: FunctionComponent<Props> = ({
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
		ReactElement<ComponentPropsWithoutRef<typeof Tab>>
	>;

	const tabId = useId();

	const tabs = tabsChildren.map((child, idx) => {
		const tabItemId = `tabItem:${tabId}:${idx}`;
		const tabPanelId = `tabPanel:${tabId}:${idx}`;

		return [
			<TabNavItem
				key={idx}
				id={tabItemId}
				active={active === idx}
				indication={child.props.indication}
				onClick={setActiveCb(idx)}>
				{child.props.title}
			</TabNavItem>,
			<TabPane
				key={idx}
				id={tabPanelId}
				controlledBy={tabItemId}
				active={active === idx}>
				{child.props.children}
			</TabPane>,
		];
	});

	return (
		<div className={styles.tabs} role="tablist">
			<div className={styles.tabsNav}>{tabs.map(([item]) => item)}</div>
			<div className={styles.tabsContent}>
				{tabs.map(([, item]) => item)}
			</div>
		</div>
	);
};

let id = 0;
const genId = () => ++id;

const useId = () => {
	const [id, setId] = useState(null);
	useEffect(() => setId(genId()), []);
	return `od-${id}`;
};
