import { invariant } from '@autoguru/utilities';
import cx from 'clsx';
import {
	DisplayProperty,
	FlexBasisProperty,
	FlexProperty,
	HeightProperty,
	WidthProperty,
} from 'csstype';
import React, { ComponentType, FunctionComponent, useContext } from 'react';
import { GridContext } from './context';
import { EItemAlignSelf } from './enums';
import styles from './style.scss';

export interface IProps {
	className?: string;
	Component?: ComponentType<any> | string;
	flex?: FlexProperty<string>;
	grow?: 0 | 1;
	shrink?: 0 | 1;
	basis?: FlexBasisProperty<string>;
	display?: DisplayProperty;
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

export const GridItem: FunctionComponent<IProps & any> = ({
	className = '',
	align = EItemAlignSelf.Auto,
	grow = 1,
	shrink = 1,
	width,
	height,
	display = 'flex',
	basis = 'auto',
	Component = 'div',
	children,
	...rest
}) => {
	const gridContext = useContext(GridContext);
	invariant(
		!gridContext || !Object.keys(gridContext).length,
		'<GridItem> must be wrapped inside a <Grid> element'
	);

	const gridItemClass = cx([styles.gridItem, className], {});

	const getMarginValue = context => {
		if (!context.fullGrid) {
			return gridContext.direction === 'row'
				? `0 calc(0.5 * var(${context.gutterSpace}))`
				: `calc(0.5 * var(${context.gutterSpace})) 0`;
		}

		return context.fullGrid
			? `calc(0.5 * var(${context.gutterSpace}))`
			: undefined;
	};

	return (
		<Component
			className={gridItemClass}
			style={{
				width,
				height,
				flexGrow: grow,
				flexShrink: shrink,
				flexBasis: basis,
				display,
				...alignSelfCssMap.get(align),
				[gridContext.direction === 'row'
					? 'minWidth'
					: 'minHeight']: basis,
				margin: getMarginValue(gridContext),
			}}
			children={children}
			{...rest}
		/>
	);
};
