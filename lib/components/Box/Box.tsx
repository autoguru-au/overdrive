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
		Omit<AllHTMLAttributes<Element>, 'width' | 'height'> {
	is?: Element;
	className?: string;
}

// TODO: Solve this any
export const Box = forwardRef<HTMLElement, Props<any>>(
	(
		{
			is: Component,

			display,
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
			boxShadow,
			borderWidth,
			borderWidthX,
			borderWidthY,
			borderWidthTop,
			borderWidthRight,
			borderWidthBottom,
			borderWidthLeft,
			borderColour,
			borderColourX,
			borderColourY,
			borderColourTop,
			borderColourRight,
			borderColourBottom,
			borderColourLeft,
			borderRadius,
			backgroundColour,

			width,
			position,

			className = '',
			children,

			...allOtherProps
		},
		ref,
	) => {
		const cls = useBoxStyles({
			is: Component,
			display,
			borderColour,
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
			boxShadow,
			borderWidth,
			borderWidthX,
			borderWidthY,
			borderWidthTop,
			borderWidthRight,
			borderWidthBottom,
			borderWidthLeft,
			borderColourX,
			borderColourY,
			borderColourTop,
			borderColourRight,
			borderColourBottom,
			borderColourLeft,
			borderRadius,
			backgroundColour,
			width,
			position,
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
