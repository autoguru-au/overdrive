import cx from 'clsx';
import React, { Children, FunctionComponent, useState } from 'react';
import styles from './style.scss';

export interface IProps {
	className?: string;
	multi?: boolean;
	children: any;

	onChange?(): void;
}

export interface IListItemMap {
	[index: string]: {
		open: boolean;
		topGap?: boolean;
		bottomGap?: boolean;
	};
}

export interface IExpandableContext {
	openedItemsMap: IListItemMap;
	multi: boolean;

	expandableClicked(id: string): void;
}

export const ExpandableContext = React.createContext<IExpandableContext>(null);

const cloneChildren = (children: any): Array<any> =>
	children
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

const buildChildrenOpenMap = (
	expandables: Array<any>,
	multi: boolean
): IListItemMap =>
	expandables
		? expandables.reduce((map, child) => {
				if (
					child.props.id &&
					(multi ||
						!Object.keys(map).reduce(
							(hasOpen, currentKey) =>
								hasOpen ? true : map[currentKey].open,
							false
						))
				) {
					map[child.props.id] = {
						open: child.props.open,
					};
				}

				return map;
		  }, {})
		: {};

const updateMapGas = (
	ids: Array<string>,
	openedItemsMap: IListItemMap
): IListItemMap =>
	ids.reduce((map: IListItemMap, currentId, index) => {
		map[currentId] = map[currentId] || { open: false };
		map[currentId].topGap = false;
		map[currentId].bottomGap = false;

		if (index === 0 && openedItemsMap[currentId].open) {
			map[currentId].topGap = false;
			map[currentId].bottomGap = true;
		} else if (openedItemsMap[currentId].open) {
			map[currentId].topGap = openedItemsMap[ids[index - 1]].open
				? false
				: true;
			map[currentId].bottomGap = true;
		}

		if (index === ids.length - 1) {
			map[currentId].bottomGap = false;
		}

		return map;
	}, openedItemsMap);

const generateOpenedMapWithGaps = (
	id: string,
	expandables: Array<any>,
	openedItemsMap: IListItemMap,
	multi: boolean
): IListItemMap => {
	const ids = expandables.map(expandable => expandable.props.id);

	const newOpenMap: IListItemMap = {
		...(multi ? openedItemsMap : {}),
		[id]: {
			open: !(openedItemsMap[id] && openedItemsMap[id].open),
		},
	};

	const openedMapWithGaps = updateMapGas(ids, newOpenMap);

	console.log({ ids });
	console.log({ newOpenMap });
	console.log({ openedMapWithGaps });

	return openedMapWithGaps;
};

export const Expandable: FunctionComponent<IProps> = ({
	className = '',
	multi = false,
	children,
	onChange = () => void 0,
}) => {
	const expandables: Array<any> = cloneChildren(children);

	const [openedItemsMap, setOpenedItemsMap] = useState<IListItemMap>(
		// Honor explicitly set to expanded list items considering the multi option
		buildChildrenOpenMap(expandables, multi)
	);

	const expandableClicked = (id: string) => {
		setOpenedItemsMap(
			generateOpenedMapWithGaps(id, expandables, openedItemsMap, multi)
		);
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
