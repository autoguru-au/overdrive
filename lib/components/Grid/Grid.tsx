import cx from 'clsx';
import {
	FlexDirectionProperty,
	FlexWrapProperty,
	HeightProperty,
	WidthProperty,
} from 'csstype';
import React, { FunctionComponent } from 'react';
import { GridDefaults } from './defaults';
import { EGridSpace, ELayoutAlign, ELayoutPerpendicularAlign } from './enums';
import styles from './style.scss';

export interface IProps {
	className?: string;
	direction?: FlexDirectionProperty;
	wrap?: FlexWrapProperty;
	padding?: EGridSpace;
	gutter?: EGridSpace;
	layoutAlign?: ELayoutAlign;
	width?: WidthProperty<string>;
	height?: HeightProperty<string>;
	tagName?: string;
	layoutPerpendicularAlign?: ELayoutPerpendicularAlign;
}

export interface IGridContext {
	direction: FlexDirectionProperty;
	padding: EGridSpace;
	gutter: EGridSpace;
	gutterSpace?: string;
}

export const GridContext = React.createContext<Partial<IGridContext>>({});

const spaceVarPrefix = '--global--space--';
const spaceSizeMap: Map<EGridSpace, string> = new Map([
	[EGridSpace.Space0, `${spaceVarPrefix}0`],
	[EGridSpace.Space1, `${spaceVarPrefix}1`],
	[EGridSpace.Space2, `${spaceVarPrefix}2`],
	[EGridSpace.Space3, `${spaceVarPrefix}3`],
	[EGridSpace.Space4, `${spaceVarPrefix}4`],
	[EGridSpace.Space5, `${spaceVarPrefix}5`],
	[EGridSpace.Space6, `${spaceVarPrefix}6`],
	[EGridSpace.Space7, `${spaceVarPrefix}7`],
	[EGridSpace.Space8, `${spaceVarPrefix}8`],
	[EGridSpace.Space9, `${spaceVarPrefix}9`],
]);

const layoutAlignCssMap: Map<ELayoutAlign, { [key: string]: string }> = new Map(
	[
		[ELayoutAlign.Start, { justifyContent: 'flex-start' }],
		[ELayoutAlign.Center, { justifyContent: 'center' }],
		[ELayoutAlign.End, { justifyContent: 'flex-end' }],
		[ELayoutAlign.SpaceAround, { justifyContent: 'space-around' }],
		[ELayoutAlign.SpaceBetween, { justifyContent: 'space-between' }],
		[ELayoutAlign.SpaceEvenly, { justifyContent: 'space-evenly' }],
	]
);

const layoutPerpendicularAlignCssMap: Map<
	ELayoutPerpendicularAlign,
	{ [key: string]: string }
> = new Map([
	[
		ELayoutPerpendicularAlign.Start,
		{ alignContent: 'flex-start', alignItems: 'flex-start' },
	],
	[
		ELayoutPerpendicularAlign.Center,
		{ alignContent: 'center', alignItems: 'center' },
	],
	[
		ELayoutPerpendicularAlign.End,
		{ alignContent: 'flex-end', alignItems: 'flex-end' },
	],
	[
		ELayoutPerpendicularAlign.Stretch,
		{ alignContent: 'stretch', alignItems: 'stretch' },
	],
]);

export const Grid: FunctionComponent<IProps> = ({
	className = '',
	direction = 'row',
	wrap = 'wrap',
	width = '100%',
	height = '100%',
	layoutAlign = ELayoutAlign.Start,
	layoutPerpendicularAlign = ELayoutPerpendicularAlign.Start,
	tagName = 'div',
	children,
	gutter,
	padding,
}) => {
	const contextValue = {
		...GridDefaults,
		direction,
		padding,
		gutter,
	};

	const gridClass = cx([styles.grid, className], {});

	const gutterSpace = spaceSizeMap.get(contextValue.gutter);

	const TagName = tagName as any;

	return (
		<GridContext.Provider
			value={{
				...contextValue,
				gutterSpace,
			}}>
			<TagName
				className={gridClass}
				style={{
					width,
					height,
				}}>
				<div
					className={styles.innerGrid}
					style={{
						flexWrap: wrap,
						flexDirection: direction,
						...layoutAlignCssMap.get(layoutAlign),
						...layoutPerpendicularAlignCssMap.get(
							layoutPerpendicularAlign
						),
						padding: `var(${spaceSizeMap.get(
							contextValue.padding
						)})`,
						margin: `calc(var(${gutterSpace}) * -0.5)`,
						width: `calc(${width} + (var(${gutterSpace}))`,
						height: `calc(${height} + (var(${gutterSpace}))`,
					}}
					children={children}
				/>
			</TagName>
		</GridContext.Provider>
	);
};
