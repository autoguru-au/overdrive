import cx from 'clsx';
import React, { Children, FunctionComponent, useState } from 'react';
import styles from './style.scss';
import { ExpandableContext } from './context';

export interface Props {
	className?: string;
	multi?: boolean;
	children: any;

	onChange?(): void;
}

export interface ListItemMap {
	[index: string]: {
		open: boolean;
		topGap?: boolean;
		bottomGap?: boolean;
	};
}

const cloneChildren = (children: any): any[] =>
	children
		? Children.map(children, (expandable, index) => {
				const id = expandable.props.id || expandable.key || index;

				return {
					...React.cloneElement(expandable, {
						...expandable.props,
						id,
						key: id,
					}),
					key: id,
				};
		  })
		: null;

const buildChildrenOpenMap = (
	expandables: any[],
	multi: boolean,
): ListItemMap =>
	expandables
		? expandables.reduce((map, child) => {
				if (
					child.props.id &&
					(multi ||
						!Object.keys(map).reduce(
							(hasOpen, currentKey) =>
								hasOpen ? true : map[currentKey].open,
							false,
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
	ids: string[],
	openedItemsMap: ListItemMap,
): ListItemMap =>
	ids.reduce((map: ListItemMap, currentId, index) => {
		map[currentId] = map[currentId] || { open: false };
		map[currentId].topGap = false;
		map[currentId].bottomGap = false;

		if (index === 0 && openedItemsMap[currentId].open) {
			map[currentId].topGap = false;
			map[currentId].bottomGap = true;
		} else if (openedItemsMap[currentId].open) {
			map[currentId].topGap = !openedItemsMap[ids[index - 1]].open;
			map[currentId].bottomGap = true;
		}

		if (index === ids.length - 1) {
			map[currentId].bottomGap = false;
		}

		return map;
	}, openedItemsMap);

const generateOpenedMapWithGaps = (
	id: string,
	expandables: any[],
	openedItemsMap: ListItemMap,
	multi: boolean,
): ListItemMap => {
	const ids = expandables.map(expandable => expandable.props.id);

	const newOpenMap: ListItemMap = {
		...(multi ? openedItemsMap : {}),
		[id]: {
			open: !(openedItemsMap[id] && openedItemsMap[id].open),
		},
	};

	return updateMapGas(ids, newOpenMap);
};

export const Expandable: FunctionComponent<Props> = ({
	className = '',
	multi = false,
	children,
	onChange = () => void 0,
}) => {
	const expandables: any[] = cloneChildren(children);

	const [openedItemsMap, setOpenedItemsMap] = useState<ListItemMap>(
		// Honor explicitly set to expanded list items considering the multi option
		buildChildrenOpenMap(expandables, multi),
	);

	const expandableClicked = (id: string) => {
		setOpenedItemsMap(
			generateOpenedMapWithGaps(id, expandables, openedItemsMap, multi),
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
