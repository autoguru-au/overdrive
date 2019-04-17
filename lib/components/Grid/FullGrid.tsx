import cx from 'clsx';
import React, { FunctionComponent } from 'react';
import { GridDefaults } from './defaults';
import { ELayoutAlign, ELayoutPerpendicularAlign } from './enums';
import {
	GridContext,
	IProps,
	layoutAlignCssMap,
	layoutPerpendicularAlignCssMap,
	spaceSizeMap,
} from './grid-utils';
import styles from './style.scss';

export const FullGrid: FunctionComponent<IProps & any> = ({
	className = '',
	direction = 'row',
	wrap = 'wrap',
	width = '100%',
	height = '100%',
	layoutAlign = ELayoutAlign.Start,
	layoutPerpendicularAlign = ELayoutPerpendicularAlign.Start,
	Component = 'div',
	children,
	gutter,
	padding,
	...rest
}) => {
	const contextValue = {
		...GridDefaults,
		fullGrid: true,
		direction,
		padding,
		gutter,
	};

	const gridClass = cx([styles.fullGrid, className], {});

	const gutterSpace = spaceSizeMap.get(contextValue.gutter);

	return (
		<GridContext.Provider
			value={{
				...contextValue,
				gutterSpace,
			}}>
			<Component
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
					{...rest}
				/>
			</Component>
		</GridContext.Provider>
	);
};
