import cx from 'clsx';
import React, { FunctionComponent, useContext } from 'react';
import styles from './style.scss';
import { GridContext } from './Grid';

export interface IProps {
	className?: string;
}

export const GridItem: FunctionComponent<IProps> = ({
	className = '',
	children,
}) => {
	const gridContext = useContext(GridContext);

	const gridItemClass = cx([styles.gridItem, className], {});

	return (
		<div
			className={gridItemClass}
			style={{
				margin: `calc(0.5 * var(${gridContext.gutterSpace}))`,
			}}
			children={children}
		/>
	);
};
