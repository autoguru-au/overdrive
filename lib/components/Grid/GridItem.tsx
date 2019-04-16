import { invariant } from '@autoguru/utilities';
import cx from 'clsx';
import {
	FlexBasisProperty,
	FlexProperty,
	HeightProperty,
	WidthProperty,
} from 'csstype';
import React, { FunctionComponent, useContext } from 'react';
import { EItemAlignSelf } from './enums';
import { GridContext } from './grid-utils';
import styles from './style.scss';

export interface IProps {
	className?: string;
	flex?: FlexProperty<string>;
	grow?: 0 | 1;
	shrink?: 0 | 1;
	basis?: FlexBasisProperty<string>;
	align?: EItemAlignSelf;
	width?: WidthProperty<string>;
	height?: HeightProperty<string>;
	tagName?: string;
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
	tagName = 'div',
	children,
}) => {
	const gridContext = useContext(GridContext);
	invariant(
		!gridContext || !Object.keys(gridContext).length,
		'<GridItem> must be wrapped inside a <Grid> element'
	);

	const gridItemClass = cx([styles.gridItem, className], {});

	const TagName = tagName as any;

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
		<TagName
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
				margin: getMarginValue(gridContext),
			}}
			children={children}
		/>
	);
};
