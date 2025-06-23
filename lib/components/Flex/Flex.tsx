import clsx from 'clsx';
import * as React from 'react';

import { Box, type BoxProps } from '../Box/Box';

import * as styles from './Flex.css';

export interface FlexProps extends Omit<BoxProps, 'display' | 'flexDirection'> {
	/**
	 * Defines the alignment of items on the cross-axis.
	 * @property alignItems
	 */
	alignItems?: BoxProps['alignItems'];
	/**
	 * Defines the alignment of items on the main-axis.
	 * @property justifyContent
	 */
	justifyContent?: BoxProps['justifyContent'];
	/**
	 * The space between children.
	 * Maps to the `gap` CSS property.
	 * @property gap
	 */
	gap?: BoxProps['gap'];
	/**
	 * Use CSS Flexbox for layout instead of Grid.
	 * @default false
	 */
	flex?: boolean;
	/**
	 * Layout children horizontally (row).
	 * If `vert` is also true, `vert` takes precedence.
	 * @default true (when `vert` is false or undefined)
	 */
	horz?: boolean;
	/**
	 * Layout children vertically (column).
	 * @default false
	 */
	vert?: boolean;
}

/**
 * A layout component for applying horizontal or vertical layouts to children items.
 * It prefers to use CSS grid for layout, or fallback to flex properties.
 */
export const Flex = React.forwardRef<HTMLElement, FlexProps>(
	({ flex, vert, className, ...restProps }, ref) => {
		const direction = vert ? 'column' : 'row';

		if (flex) {
			return (
				<Box
					ref={ref}
					display="flex"
					flexDirection={direction}
					className={className}
					{...restProps}
				/>
			);
		}

		const gridClassName = styles.root({ direction });

		return (
			<Box
				ref={ref}
				className={clsx(gridClassName, className)}
				{...restProps}
			/>
		);
	},
);

Flex.displayName = 'Flex';
