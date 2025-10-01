import type {
	ComponentPropsWithoutRef,
	ComponentPropsWithRef,
	ElementType,
	PropsWithChildren,
	ReactElement,
} from 'react';

import {
	elementStyles,
	type ElementStylesProps,
} from '../../../styles/elementStyles';
import type {
	ConsistentComponentProps,
	DataAttributes,
	OdComponentProp,
} from '../../../types';
import { dataAttrs } from '../../../utils/dataAttrs';

/** Extract the ref type for a polymorphic component based on the provided element type */
export type PolymorphicRef<C extends ElementType> =
	ComponentPropsWithRef<C>['ref'];

/**
 * Constructs the props type for a polymorphic component.
 * It combines base props (`Props`), the `as` prop, and the `ref` prop,
 * while omitting conflicting keys from the base element's intrinsic props.
 */
export type PolymorphicComponentProps<
	C extends ElementType,
	Props = object,
> = PropsWithChildren<Props> & {
	as?: C | ReactElement;
	ref?: ComponentPropsWithRef<C>['ref'];
} & Omit<ComponentPropsWithoutRef<C>, keyof Props | 'as' | 'ref' | 'children'>;

/** Polymorphic box props that merge sprinkles style props and the HTML element props */
export type UseBoxProps<E extends ElementType = 'div'> =
	PolymorphicComponentProps<
		E,
		ConsistentComponentProps &
			OdComponentProp &
			ElementStylesProps &
			DataAttributes
	>;

/** Default box props when E is not specified - maintains backward compatibility */
export type UseBoxPropsDefault = UseBoxProps<'div'>;

/**
 * Define custom props similar to Box with polymorphic, common and style props.
 * Component props will take precedent over style props and can overwrite them
 */
export type BoxLikeProps<
	E extends ElementType,
	P = object,
> = PolymorphicComponentProps<
	E,
	Omit<ElementStylesProps, keyof P> &
		ConsistentComponentProps &
		OdComponentProp &
		P
>;

export const useBox = <E extends ElementType = 'div'>({
	as: _as,
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
}: UseBoxProps<E>) => {
	const isReactElement =
		typeof _as !== 'string' &&
		_as !== undefined &&
		typeof _as === 'object' &&
		'type' in _as;
	const as = isReactElement ? undefined : ((_as ?? 'div') as E);
	const Component: ElementType = as ?? 'div';

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
	} as ComponentPropsWithRef<E>;

	return {
		Component,
		componentProps,
		reactElement: isReactElement ? _as : undefined,
		// In future we may want to calc a child tag for semantic nested children
	};
};
