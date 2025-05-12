import React, {
	cloneElement,
	createContext,
	forwardRef,
	useMemo,
	type ComponentRef,
	type ElementType,
	type ForwardedRef,
	type ReactElement,
} from 'react';

import {
	useNegativeMarginLeft,
	useNegativeMarginTop,
} from '../../hooks/useNegativeMargin/useNegativeMargin';
import {
	SprinklesResponsive,
	sprinklesResponsive,
} from '../../styles/sprinkles.css';
import { type BoxLikeProps, useBox, type UseBoxProps } from '../Box';

import * as styles from './Columns.css';

type ResponsiveSpace = SprinklesResponsive['padding'];

export interface ColumnsProps {
	/**
	 * Sets the vertical aligment of the columns
	 */
	align?: styles.ColumnsStyle['align'];
	/**
	 * Controls the ability for columns to overflow (wrap) on to additional rows.
	 */
	noWrap?: styles.ColumnsStyle['noWrap'];
	/**
	 * Shorthand for applying the X & Y spacing. Can be a responsive array.
	 */
	space?: ResponsiveSpace;
	/**
	 * Horizontal spacing between columns. Can be a responsive array.
	 */
	spaceX?: ResponsiveSpace;
	/**
	 * Vertical spacing between rows when wrapping occurs. Can be a responsive array.
	 */
	spaceY?: ResponsiveSpace;
	/**
	 * Can reverse the order of the columns.
	 */
	wrappingDirection?: styles.ColumnsStyle['wrappingDirection'];
}

/** Combined Columns props with style props and common box props */
export type ColumnsPolyProps<E extends React.ElementType> = BoxLikeProps<
	E,
	ColumnsProps
>;

/** Custom type casting necessary for final result of Columns using forwardedRef */
export type ColumnsForwardRefReturn = (<E extends ElementType = 'div'>(
	props: ColumnsPolyProps<E> & { ref?: ForwardedRef<ComponentRef<E>> },
) => ReactElement | null) & { displayName?: string };

interface ColumnContextValue {
	spaceXCls: string;
	spaceYCls: string;
	isList: boolean;
}

export const ColumnContext = createContext<ColumnContextValue | null>(null);

/**
 * `Columns` is a layout component used to arrange child elements horizontally in columns. The `Columns` component must
 * be populated with `Column` components.
 *
 * `Columns` provides responsive control over spacing between columns (and rows when wrapping), alignment, and wrapping
 * behavior. And it exposes the ColumnContext which is used by each child Column.
 *
 * @example
 * // Basic usage with uniform spacing
 * <Columns space="4">
 *   <Column width="1/3"><Card>Column 1</Card></Column>
 *   <Column width="1/3"><Card>Column 2</Card></Column>
 *   <Column width="1/3"><Card>Column 3</Card></Column>
 * </Columns>
 *
 * @example
 * // Responsive spacing and alignment
 * <Columns spaceX={['2', '4']} spaceY="3" align="center">
 *   <Column width={['full', '1/2']}><Button>Button 1</Button></Column>
 *   <Column width={['full', '1/2']}><Button>Button 2</Button></Column>
 * </Columns>
 *
 * @example
 * // Preventing wrapping
 * <Columns noWrap space="5">
 *   <Item>Item A</Item>
 *   <Item>Item B</Item>
 *   <Item>Item C</Item>
 * </Columns>
 */
export const Columns = forwardRef<ComponentRef<'div'>, ColumnsPolyProps<'div'>>(
	(
		{
			as = 'div',
			className,
			children,
			space,
			spaceX,
			spaceY,
			noWrap,
			wrappingDirection = 'default',
			align = 'stretch',
			...boxProps
		},
		ref,
	) => {
		const resolvedSpaceX = useMemo(
			() => spaceX || space || 'none',
			[space, spaceX],
		);
		const resolvedSpaceY = useMemo(
			() => spaceY || space || 'none',
			[space, spaceY],
		);

		//@ts-expect-error function doesn't expect an array not sure how it ever worked
		const marginLeftFix = useNegativeMarginLeft(resolvedSpaceX);
		// @ts-expect-error function doesn't expect an array not sure how it ever worked
		const marginTopFix = useNegativeMarginTop(resolvedSpaceY);

		const { Component, componentProps, reactElement } = useBox({
			...(boxProps as UseBoxProps),
			as,
			className: [
				styles.columnsStyle({
					align,
					noWrap,
					wrappingDirection,
				}),
				marginLeftFix,
				marginTopFix,
				className,
			],
			odComponent: 'columns',
			ref,
		});

		const contextValue = useMemo(
			() => ({
				spaceXCls: sprinklesResponsive({
					paddingLeft: resolvedSpaceX,
				}),
				spaceYCls: sprinklesResponsive({
					paddingTop: resolvedSpaceY,
				}),
				isList: typeof as === 'string' && ['ul', 'ol'].includes(as),
			}),
			[as, resolvedSpaceX, resolvedSpaceY],
		);

		if (reactElement) {
			return cloneElement(
				reactElement,
				componentProps,
				<ColumnContext.Provider value={contextValue}>
					{children}
				</ColumnContext.Provider>,
			);
		}

		return (
			<Component {...componentProps} ref={ref}>
				<ColumnContext.Provider value={contextValue}>
					{children}
				</ColumnContext.Provider>
			</Component>
		);
	},
) as ColumnsForwardRefReturn;

Columns.displayName = 'Columns';

export default Columns;
