import React, { Children, PureComponent, ReactElement, ReactNode } from 'react';

import styles from './style.scss';
import { IProps as ITabProps } from './Tab';
import { TabNavItem } from './TabNavItem';
import { TabPane } from './TabPane';

type ComponentWithChildren<P> = P & { children?: ReactNode };

export interface IProps {
	active?: number;
}

interface IState {
	active: number;
}

export class Tabs extends PureComponent<IProps, IState> {
	public static getDerivedStateFromProps(
		nextProps: IProps
	): Partial<IState> | null {
		if ('active' in nextProps) {
			return { active: nextProps.active || 0 };
		}

		return null;
	}
	public state = {
		active: 0,
	};

	public setActive = idx => () =>
		this.setState({
			active: idx,
		});

	public render() {
		const tabsChildren = Children.toArray(this.props.children) as Array<
			ReactElement<ComponentWithChildren<ITabProps>>
		>;

		const tabs = tabsChildren.map((child, idx) => [
			<TabNavItem
				key={idx}
				onClick={this.setActive(idx)}
				active={this.state.active === idx}>
				{child.props.title}
			</TabNavItem>,
			<TabPane key={idx} active={this.state.active === idx}>
				{child.props.children}
			</TabPane>,
		]);

		return (
			<div className={styles.tabs}>
				<div className={styles.tabsNav}>
					{tabs.map(([item]) => item)}
				</div>
				<div className={styles.tabsContent}>
					{tabs.map(([, item]) => item)}
				</div>
			</div>
		);
	}
}
