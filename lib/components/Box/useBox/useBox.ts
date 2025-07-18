import type { AllHTMLAttributes, ElementType } from 'react';

import {
	elementStyles,
	type ElementStylesProps,
} from '../../../styles/elementStyles';
import type {
	ConsistentComponentProps,
	DataAttributes,
	OdComponent,
} from '../../../types';
import { dataAttrs } from '../../../utils/dataAttrs';

type FilteredAttributes = Omit<
	AllHTMLAttributes<HTMLElement>,
	'as' | 'className' | 'color' | 'height' | 'is' | 'size' | 'width'
>;

export interface UseBoxProps
	extends FilteredAttributes,
		ConsistentComponentProps,
		OdComponent,
		ElementStylesProps,
		DataAttributes {}

export const useBox = ({
	as = 'div',
	className: incomingClassName,
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
	textTransform,
	textWrap,
	wordBreak,

	borderRadius,
	borderColor,
	borderColorX,
	borderColorY,
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
	borderStyleBottom,
	borderStyleLeft,
	borderStyleRight,
	borderStyleTop,
	borderTopColor,
	borderTopStyle,
	borderTopWidth,
	borderWidthTop,
	borderWidthRight,
	borderWidthBottom,
	borderWidthLeft,

	// legacy border colours
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

	...elementProps
}: UseBoxProps) => {
	const className = elementStyles({
		as,
		className: incomingClassName,

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
		textTransform,
		textWrap,
		wordBreak,

		borderRadius,
		borderColor,
		borderColorX,
		borderColorY,
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
		borderStyleBottom,
		borderStyleLeft,
		borderStyleRight,
		borderStyleTop,
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

	const componentProps = {
		...dataAttrs({
			'od-component': odComponent?.toLocaleLowerCase(),
			testid: testId,
		}),
		...elementProps,
		className,
	};

	return {
		Component: as as ElementType,
		componentProps,
		// In future we may want to calc a child tag for semantic nested children
	};
};
