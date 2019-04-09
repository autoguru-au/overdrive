import cx from 'clsx';
import { FlexBasisProperty, FlexProperty } from 'csstype';
import React, { FunctionComponent, useContext } from 'react';
import styles from './style.scss';
import { GridContext } from './Grid';

export interface IProps {
	className?: string;
	flex?: FlexProperty<string>;
	grow?: 0 | 1;
	shrink?: 0 | 1;
	basis?: FlexBasisProperty<string>;
}

export const GridItem: FunctionComponent<IProps> = ({
	className = '',
	grow,
	shrink,
	basis,
	flex,
	children,
}) => {
	const gridContext = useContext(GridContext);

	const gridItemClass = cx([styles.gridItem, className], {});

	return (
		<div
			className={gridItemClass}
			style={{
				flex,
				flexGrow: grow,
				flexShrink: shrink,
				flexBasis: basis,
				minWidth: basis,
				margin: `calc(0.5 * var(${gridContext.gutterSpace}))`,
			}}
			children={children}
		/>
	);
};
