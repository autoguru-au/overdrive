import {
	isValidElement,
	type ComponentPropsWithRef,
	type ComponentPropsWithoutRef,
	type ElementType,
	type JSX,
	type PropsWithChildren,
	type ReactElement,
} from 'react';

import { useDeepCompareMemo } from '../../../hooks';
import {
	elementStyles,
	type ElementStylesProps,
} from '../../../styles/elementStyles';
import type { Sprinkles } from '../../../styles/sprinkles.css';
import { dataAttrs } from '../../../utils/dataAttrs';
import { filterPropsWithStyles } from '../../../utils/sprinkles';
import type { CommonBoxProps } from '../Box';

// defaults
const DEFAULT_TAG = 'div' as keyof JSX.IntrinsicElements;
const LIST_ITEM_TAG = 'li' as keyof JSX.IntrinsicElements;
const LIST_TAGS = ['ul', 'ol'] as ReadonlyArray<keyof JSX.IntrinsicElements>;
const OD_COMPONENT_ATTR = 'od-component';

export type BoxStylesProps<E extends ElementType = 'div'> = AsPolyProp<E> &
	Pick<ElementStylesProps, 'className'> &
	Sprinkles;

export type BoxStylesReturn<P extends object> = [string, P];

/** Extract the ref type for a polymorphic component based on the provided element type */
export type PolymorphicRef<C extends ElementType> =
	ComponentPropsWithRef<C>['ref'];

/** `as` prop for polymorphic components, allowing specification of the rendered element type */
export type AsPolyProp<C extends ElementType> = {
	as?: C | ReactElement;
	/* in future we will ensure legacy `is` prop does not pass typechecking */
	// is?: never;
};

/** `ref` prop for polymorphic components, using the extracted `PolymorphicRef` type */
export type RefPolyProp<C extends ElementType> = {
	ref?: PolymorphicRef<C>;
};

/** Helps to omit base component's props when creating polymorphic props */
export type PropsToOmit<C extends ElementType, P> = keyof (AsPolyProp<C> & P);

/**
 * Constructs the props type for a polymorphic component.
 * It combines base props (`Props`), the `as` prop, and the `ref` prop,
 * while omitting conflicting keys from the base element's intrinsic props.
 */
export type PolymorphicComponentProps<
	C extends ElementType,
	Props = object,
> = PropsWithChildren<Props & AsPolyProp<C> & RefPolyProp<C>> &
	Omit<ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

/** Polymorphic box props that merge sprinkles style props and the HTML element props */
export type UseBoxProps<E extends ElementType = 'div'> =
	PolymorphicComponentProps<E, CommonBoxProps & Sprinkles>;

/**
 * Define custom props similar to Box with polymorphic, common and style props.
 * Component props will take take precedent over style props and can overwrite them
 */
export type BoxLikeProps<
	E extends ElementType,
	P = object,
> = PolymorphicComponentProps<E, Omit<Sprinkles, keyof P> & CommonBoxProps & P>;

/**
 * The Overdrive component primitive to expose a flexible HTML element as a fully typesafe React component
 * that provides intrinsic props as well as style props from vanilla-extract sprinkles.
 *
 * The return value must be checked for `reactElement` being defined.
 *
 * @returns `{ Component, reactElement, componentProps, SemanticChild }` where `reactElement` is only defined
 * if JSX was passed in the `as` prop and `cloneElement` will need to be used. `SemanticChild` is only defined
 * depending on the HTML tag.
 */
export const useBox = <E extends ElementType = 'div'>({
	as: _as,
	className: _className,
	odComponent,
	testId,
	...props
}: UseBoxProps<E>) => {
	const isReactElement = typeof _as !== 'string' && isValidElement(_as);
	const as = isReactElement ? undefined : ((_as ?? DEFAULT_TAG) as E);
	const Component: ElementType = as ?? DEFAULT_TAG;

	// logic to promote semantic HTML and ensure a child tag is correct for the `as` prop
	const isList = LIST_TAGS.includes(Component as keyof JSX.IntrinsicElements);
	const SemanticChild = isList ? (LIST_ITEM_TAG as ElementType) : undefined;

	// deep compare is mainly to attempt to stop rerenders arrising from responsive style props
	const { className, baseProps } = useDeepCompareMemo(() => {
		const { sprinklesProps, baseProps } = filterPropsWithStyles(props);
		const className = elementStyles({
			as,
			className: _className,
			...sprinklesProps,
		});
		return { className, baseProps };
	}, [as, _className, props]);

	const componentProps = {
		...baseProps,
		...dataAttrs({
			[OD_COMPONENT_ATTR]: odComponent?.toLocaleLowerCase(),
			testid: testId,
		}),
		className,
	} as ComponentPropsWithRef<E>;

	return {
		Component,
		componentProps,
		reactElement: isReactElement ? _as : undefined,
		SemanticChild,
	};
};
