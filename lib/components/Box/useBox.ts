import type { ClassValue as ClassName } from 'clsx';
import {
	isValidElement,
	type ComponentPropsWithRef,
	type ComponentPropsWithoutRef,
	type ElementType,
	type JSX,
	type PropsWithChildren,
	type ReactElement,
} from 'react';

import { useDeepCompareMemo } from '../../hooks';
import type {
	Sprinkles,
	SprinklesResponsive,
	SprinklesLegacyColours,
} from '../../styles/sprinkles.css';
import { dataAttrs } from '../../utils/dataAttrs';
import { filterNonSprinklesProps } from '../../utils/sprinkles';

import { boxStyles } from './boxStyles';

/** All vanilla-extract sprinkles props */
export type StyleProps = Sprinkles &
	SprinklesResponsive &
	SprinklesLegacyColours;

/**
 * Use BoxBasedProps to help consistently define the base props for a component
 * directly implementing useBox as the type of UseBoxProps is complex to Pick from.
 */
export interface CommonBoxProps extends PropsWithChildren {
	/**
	 * Accepts `string` and complex array or objects via `clsx`
	 */
	className?: ClassName;
	/**
	 * Output a data attribute with a component name in the markup, mainly used for the root element of a component
	 */
	odComponent?: string;
	/**
	 * Insert a `data-testid` attribute
	 */
	testId?: string;
}
/** Extract the ref type for a polymorphic component based on the provided element type */
export type PolymorphicRef<C extends ElementType> =
	ComponentPropsWithRef<C>['ref'];

/** `as` prop for polymorphic components, allowing specification of the rendered element type */
export type AsPolyProp<C extends ElementType> = {
	as?: C | ReactElement;
	/* ensure legacy `is` prop does not pass typechecking */
	is?: never;
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
	PolymorphicComponentProps<E, CommonBoxProps & StyleProps>;

/**
 * Define custom props similar to Box with polymorphic, common and style props.
 * Component props will take take precedent over style props and can overwrite them
 */
export type BoxLikeProps<
	E extends ElementType,
	P = object,
> = PolymorphicComponentProps<
	E,
	Omit<StyleProps, keyof P> & CommonBoxProps & P
>;

// defaults
const DEFAULT_TAG = 'div' as keyof JSX.IntrinsicElements;
const LIST_ITEM_TAG = 'li' as keyof JSX.IntrinsicElements;
const LIST_TAGS = ['ul', 'ol'] as ReadonlyArray<keyof JSX.IntrinsicElements>;
const OD_COMPONENT_ATTR = 'od-component';

/**
 * The Overdrive component primitive to expose a flexible HTML element as a fully typesafe React component
 * that provides intrinsic props as well as style props from vanilla-extract sprinkles.
 *
 * The return value must be checked for `reactElement` being defined.
 *
 * @returns `{ reactElement, Component, componentProps, SemanticChild }` where `reactElement` is only defined
 * if JSX was passed in and `cloneElement` will need to be used. `SemanticChild` is only defined depending on
 * a the HTML tag.
 */
export const useBox = <E extends ElementType = 'div'>({
	as: _as,
	className: _className,
	odComponent,
	testId,
	...props
}: UseBoxProps<E>) => {
	const isReactElement = typeof _as !== 'string' && isValidElement(_as);
	const as = isReactElement ? undefined : (_as ?? DEFAULT_TAG);
	const Component: ElementType = as ?? DEFAULT_TAG;

	// logic to promote semantic HTML and ensure a child tag is correct for the `as` prop
	const isList = LIST_TAGS.includes(Component as keyof JSX.IntrinsicElements);
	const SemanticChild = isList ? (LIST_ITEM_TAG as ElementType) : undefined;

	// deep compare is mainly to attempt to stop rerenders arrising from responsive style props
	const className = useDeepCompareMemo(
		() =>
			boxStyles({
				as, // boxStyles uses the 'as' prop to determine css resets based on tag name
				className: _className,
				...props,
			}),
		[as, _className, props],
	);

	// TODO: try to combine this into the first deep compare to simplify
	const remainingProps = useDeepCompareMemo(
		() => ({
			...filterNonSprinklesProps(props),
			...dataAttrs({
				[OD_COMPONENT_ATTR]: odComponent?.toLocaleLowerCase(),
				testId,
			}),
		}),
		[odComponent, props, testId],
	);

	const componentProps = {
		...remainingProps,
		className,
	} as ComponentPropsWithRef<E>;

	return {
		Component,
		componentProps,
		reactElement: isReactElement ? _as : undefined,
		SemanticChild,
	};
};
