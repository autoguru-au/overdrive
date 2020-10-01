import clsx from 'clsx';
import {
	AllHTMLAttributes,
	createElement,
	ElementType,
	forwardRef,
} from 'react';

import { BoxStyleProps, useBoxStyles } from './useBoxStyles';

export interface Props
	extends Omit<BoxStyleProps, 'is'>,
		Omit<
			AllHTMLAttributes<HTMLElement>,
			'width' | 'height' | 'className' | 'is'
		> {
	is?: ElementType;
}

export const Box = forwardRef<HTMLElement, Props>(
	(
		{
			is: Component = 'div',

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
			opacity,

			className = '',

			alignItems,
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
		const cls = useBoxStyles({
			is: Component,
			alignItems,
			backgroundColour,
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

		return createElement(
			Component,
			{
				className: clsx([cls, className]),
				...allOtherProps,
				ref,
			},
			children,
		);
	},
);

Box.displayName = 'Box';
