import cx from 'clsx';
import React, { Children, FunctionComponent, useState } from 'react';
import styles from './style.scss';

export interface IProps {
	className?: string;
	multi?: boolean;
	children: any;

	onChange?(): void;
}

export interface IExpandableContext {
	openedItemsMap: { [key: string]: boolean };
	multi: boolean;

	expandableClicked(id: string): void;
}

export const ExpandableContext = React.createContext<IExpandableContext>(null);

export const Expandable: FunctionComponent<IProps> = ({
	className = '',
	multi = true,
	children,
	onChange = () => void 0,
}) => {
	const expandables = children
		? Children.map(children, expandable => ({
				...(expandable.props
					? React.cloneElement(expandable, {
							...expandable.props,
							id:
								expandable.key ||
								Math.round(Math.random() * 1e9).toString(),
					  })
					: expandable),
		  }))
		: null;

	const [openedItemsMap, setOpenedItemsMap] = useState<{
		[key: string]: boolean;
	}>( // Honor explicitly set to expanded list items considering the multi option
		expandables
			? expandables.reduce((map, child) => {
					if (
						child.props.id &&
						(multi ||
							!Object.keys(map).reduce(
								(hasOpen, currentKey) =>
									hasOpen ? true : map[currentKey],
								false
							))
					) {
						map[child.props.id] = child.props.open;
					}

					return map;
			  }, {})
			: {}
	);

	const expandableClicked = (id: string) => {
		setOpenedItemsMap({
			...(multi ? openedItemsMap : {}),
			[id]: !openedItemsMap[id],
		});

		onChange();
	};

	return (
		<ExpandableContext.Provider
			value={{ openedItemsMap, expandableClicked, multi }}>
			<div
				className={cx(styles.expandable, className)}
				aria-label="expandable list">
				{expandables}
			</div>
		</ExpandableContext.Provider>
	);
};
