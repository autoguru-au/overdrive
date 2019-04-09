import cx from 'clsx';
import {
	FlexBasisProperty,
	FlexProperty,
	HeightProperty,
	WidthProperty,
} from 'csstype';
import React, { FunctionComponent, useContext } from 'react';
import { EItemAlignSelf } from './enums';
import styles from './style.scss';
import { GridContext } from './Grid';

export interface IProps {
	className?: string;
	flex?: FlexProperty<string>;
	grow?: 0 | 1;
	shrink?: 0 | 1;
	basis?: FlexBasisProperty<string>;
	align?: EItemAlignSelf;
	width?: WidthProperty<string>;
	height?: HeightProperty<string>;
}

const alignSelfCssMap: Map<EItemAlignSelf, { [key: string]: string }> = new Map(
	[
		[EItemAlignSelf.Start, { alignSelf: 'flex-start' }],
		[EItemAlignSelf.Baseline, { alignSelf: 'baseline' }],
		[EItemAlignSelf.Center, { alignSelf: 'center' }],
		[EItemAlignSelf.End, { alignSelf: 'flex-end' }],
		[EItemAlignSelf.Stretch, { alignSelf: 'stretch' }],
	]
);

export const GridItem: FunctionComponent<IProps> = ({
	className = '',
	align = EItemAlignSelf.Auto,
	grow = 1,
	shrink = 1,
	width,
	height,
	basis = 'auto',
	children,
}) => {
	const gridContext = useContext(GridContext);

	const gridItemClass = cx([styles.gridItem, className], {});

	return (
		<div
			className={gridItemClass}
			style={{
				width,
				height,
				flexGrow: grow,
				flexShrink: shrink,
				flexBasis: basis,
				...alignSelfCssMap.get(align),
				[gridContext.direction === 'row'
					? 'minWidth'
					: 'minHeight']: basis,
				margin: `calc(0.5 * var(${gridContext.gutterSpace}))`,
			}}
			children={children}
		/>
	);
};
