import clsx from 'clsx';
import type { AllHTMLAttributes, ElementType, ReactNode } from 'react';
import React, { forwardRef } from 'react';

import { boxStyles, type BoxStylesProps } from './newBox/boxStyles';

export interface BoxProps
	extends Omit<BoxStylesProps, 'as'>,
		Omit<
			AllHTMLAttributes<HTMLElement>,
			'as' | 'width' | 'height' | 'className' | 'color' | 'is' | 'size'
		> {
	as?: ElementType;
	is?: ElementType;

	children?: ReactNode;
}

/**
 * Box is a general purpose container with no specific semantics.
 */
export const Box = forwardRef<HTMLElement, BoxProps>(
	(
		{
			is = 'div',
			as = is,

			padding,
			paddingX,
			paddingY,
			paddingTop,
			paddingBottom,
			paddingLeft,
			paddingRight,

			margin,
			marginX,
			marginY,
			marginTop,
			marginBottom,
			marginLeft,
			marginRight,

			display,
			width,
			height,
			position,
			overflow,
			userSelect,
			textAlign,
			pointerEvents,

			borderColour,
			borderColourX,
			borderColourY,
			borderColourTop,
			borderColourRight,
			borderColourBottom,
			borderColourLeft,
			borderWidth,
			borderWidthX,
			borderWidthY,
			borderWidthTop,
			borderWidthRight,
			borderWidthBottom,
			borderWidthLeft,

			boxShadow,
			borderRadius,

			backgroundColour,
			colour,
			opacity,

			className = '',

			alignItems,
			order,
			flexDirection,
			flexGrow,
			flexShrink,
			flexWrap,
			justifyContent,

			children,
			...allOtherProps
		},
		ref,
	) => {
		const cls = boxStyles({
			as,
			alignItems,
			order,
			backgroundColour,
			colour,
			borderColour,
			borderColourBottom,
			borderColourLeft,
			borderColourRight,
			borderColourTop,
			borderColourX,
			borderColourY,
			borderRadius,
			borderWidth,
			borderWidthBottom,
			borderWidthLeft,
			borderWidthRight,
			borderWidthTop,
			borderWidthX,
			borderWidthY,
			boxShadow,
			display,
			flexDirection,
			flexGrow,
			flexShrink,
			flexWrap,
			height,
			justifyContent,
			margin,
			marginBottom,
			marginLeft,
			marginRight,
			marginTop,
			marginX,
			marginY,
			opacity,
			overflow,
			padding,
			paddingBottom,
			paddingLeft,
			paddingRight,
			paddingTop,
			paddingX,
			paddingY,
			pointerEvents,
			position,
			textAlign,
			userSelect,
			width,
		});

		const Component = as;

		return (
			<Component
				ref={ref}
				className={clsx(cls, className)}
				{...allOtherProps}
			>
				{children}
			</Component>
		);
	},
);

Box.displayName = 'Box';
