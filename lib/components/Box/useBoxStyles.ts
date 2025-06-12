import clsx from 'clsx';
import type { ElementType } from 'react';

import { element } from '../../styles/element.css';
import { sprinkles, Sprinkles } from '../../styles/sprinkles.css';

export interface BoxStyleProps extends Sprinkles {
	/**
	 * Pass the name of an html tag to change the rendered element. Typically defaults to `div`
	 */
	as?: ElementType;
	className?: Parameters<typeof clsx>[0];
}

/**
 * @deprecated in transition to vanilla-extract sprinkles, use `sprinkles` directly or new
 *  `componentStyles` that includes compatible `as` prop for applying tag reset styles.
 * Both functions are exported from the `/dist/styles' folder.
 * This hook is refactored to use the `sprinkles` utility.
 */
export const useBoxStyles = ({
	as,
	className,

	backgroundColour,
	boxShadow,
	colour,
	display,
	opacity,
	width,
	height,
	position,
	overflow,
	userSelect,
	textAlign,
	pointerEvents,

	alignItems,
	order,
	flexDirection,
	flexGrow,
	flexShrink,
	flexWrap,
	justifyContent,

	padding,
	paddingX,
	paddingY,
	paddingTop,
	paddingRight,
	paddingBottom,
	paddingLeft,

	margin,
	marginX,
	marginY,
	marginTop,
	marginRight,
	marginBottom,
	marginLeft,

	borderColour,
	borderColourX,
	borderColourY,
	borderBottomColour,
	borderLeftColour,
	borderRightColour,
	borderTopColour,
	borderRadius,
	borderWidth,
	borderWidthX,
	borderWidthY,
	borderWidthTop,
	borderWidthRight,
	borderWidthBottom,
	borderWidthLeft,
}: BoxStyleProps) => {
	const hasBorderProps = Boolean(
		borderWidth ||
			borderWidthX ||
			borderWidthY ||
			borderWidthTop ||
			borderWidthRight ||
			borderWidthBottom ||
			borderWidthLeft ||
			borderColour ||
			borderColourX ||
			borderColourY ||
			borderBottomColour ||
			borderLeftColour ||
			borderRightColour ||
			borderTopColour,
	);

	const resetClassName =
		typeof as === 'string' && as in element
			? element[as as keyof typeof element]
			: element.div;

	const style = sprinkles({
		backgroundColour,
		boxShadow,
		colour,
		display,
		opacity,
		width,
		height,
		position,
		overflow,
		userSelect,
		textAlign,
		pointerEvents,

		alignItems,
		order,
		flexDirection,
		flexGrow,
		flexShrink,
		flexWrap,
		justifyContent,

		padding,
		paddingX,
		paddingY,
		paddingTop,
		paddingRight,
		paddingBottom,
		paddingLeft,

		margin,
		marginX,
		marginY,
		marginTop,
		marginRight,
		marginBottom,
		marginLeft,

		borderColour,
		borderColourX,
		borderColourY,
		borderBottomColour,
		borderLeftColour,
		borderRightColour,
		borderTopColour,
		borderRadius,
		borderWidth,
		borderWidthX,
		borderWidthY,
		borderWidthTop,
		borderWidthRight,
		borderWidthBottom,
		borderWidthLeft,

		borderStyle: hasBorderProps ? 'solid' : undefined,
	});

	return clsx(resetClassName, style, className);
};

export default useBoxStyles;
