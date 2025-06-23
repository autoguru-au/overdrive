import clsx from 'clsx';
import React, { type PropsWithChildren } from 'react';

import { sprinkles, type Sprinkles } from '../../styles/sprinkles.css';

import * as styles from './Flex.css';

export interface FlexProps extends PropsWithChildren {
	/**
	 * Defines the alignment of items on the cross-axis.
	 * @property alignItems
	 */
	alignItems?: Sprinkles['alignItems'];
	/**
	 * Defines the alignment of items on the main-axis.
	 * @property justifyContent
	 */
	justifyContent?: Sprinkles['justifyContent'];
	/**
	 * The space between children.
	 * Maps to the `gap` CSS property.
	 * @property gap
	 */
	gap?: Sprinkles['gap'];
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
 */
export const Flex = React.forwardRef<HTMLElement, FlexProps>(
	(
		{
			as: Component = 'div',
			alignItems,
			children,
			className,
			gap,
			horz = true,
			justifyContent,
			vert,
			...props
		},
		ref,
	) => {
		return (
			<Component
				{...props}
				className={clsx(
					styles.component,
					styles.layout({
						horizontal: horz && !vert,
						vertical: vert,
					}),
					sprinkles({
						alignItems,
						gap,
						justifyContent,
					}),
					className,
				)}
				// data-expand=""
				ref={ref}
			>
				{children}
			</Component>
		);
	},
);

Flex.displayName = 'Flex';
