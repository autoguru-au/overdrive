import { invariant } from '@autoguru/utilities';
import clsx from 'clsx';
import {
	AllHTMLAttributes,
	createElement,
	forwardRef,
	isValidElement,
} from 'react';

import { BoxStyleProps, useBoxStyles } from './useBoxStyles';

interface Props<Element extends keyof JSX.IntrinsicElements>
	extends BoxStyleProps,
		Omit<AllHTMLAttributes<Element>, 'width' | 'height' | 'className'> {
	is?: Element;
}

// TODO: Solve this any
export const Box = forwardRef<HTMLElement, Props<any>>(
	(
		{
			is: Component,

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
			position,
			overflow,

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

			className = '',

			children,
			...allOtherProps
		},
		ref,
	) => {
		const cls = useBoxStyles({
			is: Component,
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
			margin,
			marginBottom,
			marginLeft,
			marginRight,
			marginTop,
			marginX,
			marginY,
			overflow,
			padding,
			paddingBottom,
			paddingLeft,
			paddingRight,
			paddingTop,
			paddingX,
			paddingY,
			position,
			width,
		});

		invariant(!isValidElement(Component), 'Box only supports intrinsics');

		return createElement(
			Component ?? 'div',
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
