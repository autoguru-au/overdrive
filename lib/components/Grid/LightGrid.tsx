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

export const LightGrid: FunctionComponent<IProps> = ({
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
}) => {
	const contextValue = {
		...GridDefaults,
		fullGrid: false,
		direction,
		padding,
		gutter,
	};

	const gridClass = cx([styles.lightGrid, className], {
		[styles.row]: direction === 'row',
		[styles.column]: direction !== 'row',
	});

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
					flexWrap: wrap,
					flexDirection: direction,
					...layoutAlignCssMap.get(layoutAlign),
					...layoutPerpendicularAlignCssMap.get(
						layoutPerpendicularAlign
					),
					padding: `var(${spaceSizeMap.get(contextValue.padding)})`,
					width,
					height,
				}}
				children={children}
			/>
		</GridContext.Provider>
	);
};
