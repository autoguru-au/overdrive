import React, {
	ComponentProps,
	createContext,
	forwardRef,
	ReactNode,
	useMemo,
} from 'react';

import {
	useNegativeMarginLeft,
	useNegativeMarginTop,
} from '../../hooks/useNegativeMargin/useNegativeMargin';
import type { ThemeTokens as Tokens } from '../../themes';
import { resolveResponsiveStyle } from '../../utils/resolveResponsiveProps';
import { ResponsiveProp } from '../../utils/responsiveProps.css';
import { Box } from '../Box/Box';
import { useBox } from '../Box/useBox/useBox';

import * as styles from './Columns.css';

export interface ColumnsProps
	extends Omit<ComponentProps<typeof Box>, 'css'>,
		styles.ColumnsStyle {
	children?: ReactNode;
	className?: string;
	columns?: number;
	/**
	 * Shorthand for applying the X & Y spacing. Can be a responsive array.
	 */
	space?: ResponsiveProp<keyof Tokens['space']>;
	/**
	 * Horizontal spacing between columns. Can be a responsive array.
	 */
	spaceX?: ResponsiveProp<keyof typeof styles.space.spaceX>;
	/**
	 * Vertical spacing between rows when wrapping occurs. Can be a responsive array.
	 */
	spaceY?: ResponsiveProp<keyof typeof styles.space.spaceY>;
}

interface ColumnContextValue {
	spaceXCls;
	spaceYCls;
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
export const Columns = forwardRef<HTMLElement, ColumnsProps>(
	(
		{
			as,
			children,
			className,

			align = 'stretch',
			noWrap,
			space,
			spaceX,
			spaceY,
			wrappingDirection = 'default',

			...boxProps
		},
		ref,
	) => {
		const resolvedSpaceX = useMemo(
			() => spaceX || space || ['none'],
			[space, spaceX],
		);
		const resolvedSpaceY = useMemo(
			() => spaceY || space || ['none'],
			[space, spaceY],
		);

		const marginLeftFix = useNegativeMarginLeft(resolvedSpaceX);
		const marginTopFix = useNegativeMarginTop(resolvedSpaceY);

		const { Component, componentProps } = useBox({
			...boxProps,
			as,
			className: [
				marginLeftFix,
				marginTopFix,
				styles.columnsStyle({ align, noWrap, wrappingDirection }),
				className,
			],
			odComponent: 'columns',
		});

		return (
			<Component {...componentProps} ref={ref}>
				<ColumnContext.Provider
					value={useMemo(
						() => ({
							spaceXCls: resolveResponsiveStyle(
								resolvedSpaceX,
								styles.space.spaceX,
							),
							spaceYCls: resolveResponsiveStyle(
								resolvedSpaceY,
								styles.space.spaceY,
							),
							isList:
								typeof as === 'string' &&
								['ul', 'ol'].includes(as),
						}),
						[as, resolvedSpaceX, resolvedSpaceY],
					)}
				>
					{children}
				</ColumnContext.Provider>
			</Component>
		);
	},
);

Columns.displayName = 'Columns';
