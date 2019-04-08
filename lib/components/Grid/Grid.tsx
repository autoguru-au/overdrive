import cx from 'clsx';
import React, { FunctionComponent } from 'react';
import { GridDefaults } from './defaults';
import { EDirection, EGridSpace, EWrap } from './enums';
import styles from './style.scss';

export interface IProps {
	className?: string;
	direction?: EDirection;
	wrap?: EWrap;
	padding?: EGridSpace;
	gutter?: EGridSpace;
}

export interface IGridContext {
	direction: EDirection;
	wrap: EWrap;
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

export const Grid: FunctionComponent<IProps> = ({
	className = '',
	children,
	direction,
	wrap,
	gutter,
	padding,
}) => {
	const contextValue = {
		...GridDefaults,
		direction,
		wrap,
		padding,
		gutter,
	};

	const gridClass = cx([styles.grid, className], {
		[styles.directionColumn]: contextValue.direction === EDirection.Column,
		[styles.directionRow]: contextValue.direction !== EDirection.Column,
		[styles.wrap]: contextValue.wrap === EWrap.Wrap,
		[styles.noWrap]: contextValue.wrap !== EWrap.Wrap,
	});

	const gutterSpace = spaceSizeMap.get(contextValue.gutter);

	return (
		<GridContext.Provider
			value={{
				...contextValue,
				gutterSpace,
			}}>
			<div className={styles.outerGrid}>
				<div
					className={gridClass}
					style={{
						padding: `var(${spaceSizeMap.get(
							contextValue.padding
						)})`,
						margin: `calc(var(${gutterSpace}) * 0.5)`,
						width: `calc(100% + 2 * (var(${gutterSpace}))`,
					}}
					children={children}
				/>
			</div>
		</GridContext.Provider>
	);
};
