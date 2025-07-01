import type { AllHTMLAttributes, ElementType, PropsWithChildren } from 'react';
import React, { forwardRef } from 'react';

import {
	elementStyles,
	type ElementStylesProps,
} from '../../styles/elementStyles';
import { OdComponent, TestId } from '../../types';
import { dataAttrs } from '../../utils/dataAttrs';

/**
 * Use CommonBoxProps to help consistently define additional utility props of a component
 */
export interface CommonBoxProps
	extends OdComponent,
		PropsWithChildren,
		TestId {}

export interface BoxProps
	extends Omit<
			AllHTMLAttributes<HTMLElement>,
			'as' | 'className' | 'color' | 'height' | 'is' | 'size' | 'width'
		>,
		CommonBoxProps,
		ElementStylesProps {
	/** Pass in the HTML element or JSX component that should be rendered for the box */
	as?: ElementType;
}

/**
 * The Box component provides powerful responsive style props to a given tag, defaulting to a `<div>` element.
 * Style props are generated from the design tokens, are fully type-safe, and reuse utility classes.
 *
 * Use the `as` prop to control the rendered HTML tag. The box component exposes design system tokens relative to each style
 * prop.
 *
 * @example
 * <Box as="section" mx="5" py="5" backgroundColor="accent">
 *   Section content
 * </Box>
 *
 * @example
 * <Box display={['block', 'flex']} p={['3', '6', '8']}>Responsive padding</Box>
 *
 * @example
 * <Box as={<MyCustomThing />} borderColor="info" borderWidth="1" />
 */
export const Box = forwardRef<HTMLElement, BoxProps>(
	(
		{
			as = 'div',
			children,
			className,
			odComponent,
			testId,

			// style props
			display,
			height,
			maxWidth,
			minWidth,
			overflow,
			overflowX,
			overflowY,
			pointerEvents,
			position,
			size,
			userSelect,
			useVar,
			width,

			bg,
			backgroundColor,
			backgroundColour,
			boxShadow,
			color, // modern semantic colour tokens
			colour, // legacy colours
			fg,
			opacity,

			fontSize,
			fontWeight,
			lineHeight,
			text,
			textAlign,
			textWrap,

			borderRadius,
			borderColor,
			borderStyle,
			borderWidth,
			borderWidthX,
			borderWidthY,
			borderBottomColor,
			borderBottomStyle,
			borderBottomWidth,
			borderLeftColor,
			borderLeftStyle,
			borderLeftWidth,
			borderRightColor,
			borderRightStyle,
			borderRightWidth,
			borderTopColor,
			borderTopStyle,
			borderTopWidth,
			borderWidthTop,
			borderWidthRight,
			borderWidthBottom,
			borderWidthLeft,

			borderColour,
			borderColourX,
			borderColourY,
			borderBottomColour,
			borderLeftColour,
			borderRightColour,
			borderTopColour,

			alignContent,
			alignItems,
			alignSelf,
			columnGap,
			flexDirection,
			flexGrow,
			flexShrink,
			flexWrap,
			gap,
			gridAutoColumns,
			gridAutoFlow,
			gridAutoRows,
			gridColumns,
			justifyContent,
			placeItems,
			rowGap,
			order,

			m,
			mb,
			ml,
			mr,
			mt,
			mx,
			my,
			margin,
			marginX,
			marginY,
			marginBottom,
			marginLeft,
			marginRight,
			marginTop,

			p,
			pb,
			pl,
			pr,
			pt,
			px,
			py,
			padding,
			paddingX,
			paddingY,
			paddingBottom,
			paddingLeft,
			paddingRight,
			paddingTop,

			...allOtherProps
		},
		ref,
	) => {
		const Component = as;

		const allClasses = elementStyles({
			as,
			className,

			display,
			height,
			maxWidth,
			minWidth,
			overflow,
			overflowX,
			overflowY,
			pointerEvents,
			position,
			size,
			userSelect,
			useVar,
			width,

			bg,
			backgroundColor,
			backgroundColour,
			boxShadow,
			color,
			colour,
			fg,
			opacity,

			fontSize,
			fontWeight,
			lineHeight,
			text,
			textAlign,
			textWrap,

			borderRadius,
			borderColor,
			borderStyle,
			borderWidth,
			borderWidthX,
			borderWidthY,
			borderBottomColor,
			borderBottomStyle,
			borderBottomWidth,
			borderLeftColor,
			borderLeftStyle,
			borderLeftWidth,
			borderRightColor,
			borderRightStyle,
			borderRightWidth,
			borderTopColor,
			borderTopStyle,
			borderTopWidth,
			borderWidthTop,
			borderWidthRight,
			borderWidthBottom,
			borderWidthLeft,

			borderColour,
			borderColourX,
			borderColourY,
			borderBottomColour,
			borderLeftColour,
			borderRightColour,
			borderTopColour,

			alignContent,
			alignItems,
			alignSelf,
			columnGap,
			flexDirection,
			flexGrow,
			flexShrink,
			flexWrap,
			gap,
			gridAutoColumns,
			gridAutoFlow,
			gridAutoRows,
			gridColumns,
			justifyContent,
			placeItems,
			rowGap,
			order,

			m,
			mb,
			ml,
			mr,
			mt,
			mx,
			my,
			margin,
			marginX,
			marginY,
			marginBottom,
			marginLeft,
			marginRight,
			marginTop,

			p,
			pb,
			pl,
			pr,
			pt,
			px,
			py,
			padding,
			paddingX,
			paddingY,
			paddingBottom,
			paddingLeft,
			paddingRight,
			paddingTop,
		});

		return (
			<Component
				{...allOtherProps}
				{...dataAttrs({
					'od-component': odComponent?.toLocaleLowerCase(),
					testid: testId,
				})}
				className={allClasses}
				ref={ref}
			>
				{children}
			</Component>
		);
	},
);

Box.displayName = 'Box';
