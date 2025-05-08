import type { ClassValue as ClassName } from 'clsx';
import type {
	ComponentPropsWithRef,
	ComponentPropsWithoutRef,
	ElementType,
	JSX,
	PropsWithChildren,
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
export interface BoxBasedProps extends PropsWithChildren {
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

export type PolymorphicRef<C extends ElementType> =
	React.ComponentPropsWithRef<C>['ref'];

export type AsPolyProp<C extends ElementType> = {
	as?: C;
};

export type RefPolyProp<C extends ElementType> = {
	ref?: PolymorphicRef<C>;
};

export type PropsToOmit<C extends ElementType, P> = keyof (AsPolyProp<C> & P);

export type PolymorphicComponentProps<
	C extends ElementType,
	Props = object,
> = PropsWithChildren<Props & AsPolyProp<C> & RefPolyProp<C>> &
	Omit<ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

/** Polymorphic box props that merge sprinkles style props and the HTML element props */
export type UseBoxProps<E extends ElementType = 'div'> =
	PolymorphicComponentProps<E, BoxBasedProps & StyleProps>;

/** Helps to satisfy the linter with the complex returned `returnedComponent` */
export type ComponentProps<E extends ElementType> = Omit<
	ComponentPropsWithRef<E>,
	'as'
>;

// defaults
const DEFAULT_TAG = 'div' as keyof JSX.IntrinsicElements;
const LIST_ITEM_TAG = 'li' as keyof JSX.IntrinsicElements;
const LIST_TAGS = ['ul', 'ol'] as ReadonlyArray<keyof JSX.IntrinsicElements>;
const OD_COMPONENT_ATTR = 'od-component';

/**
 * The Overdrive component primitive to expose a flexible HTML element as a fully typesafe React component
 * that provides intrinsic props as well as style props from vanilla-extract sprinkles
 *
 * @returns `{ Component, componentProps, SemanticChild }` where SemanticChild is optionally passed back based on the
 * `as` prop
 */
export const useBox = <E extends ElementType = 'div'>({
	as,
	className,
	odComponent,
	testId,
	...props
}: UseBoxProps<E>) => {
	const Component: ElementType = as ?? DEFAULT_TAG;

	// logic to promote semantic HTML and ensure a child tag is correct for the `as` prop
	const isList = LIST_TAGS.includes(Component as keyof JSX.IntrinsicElements);
	const SemanticChild = isList ? (LIST_ITEM_TAG as ElementType) : undefined;

	const style = useDeepCompareMemo(
		() =>
			boxStyles({
				as, // boxStyles uses the 'as' prop to determine css resets based on tag name
				className,
				...props,
			}),
		[className, props],
	);

	const remainingProps = useDeepCompareMemo(
		() => ({
			...filterNonSprinklesProps(props),
			...dataAttrs({
				[OD_COMPONENT_ATTR]: odComponent?.toLocaleLowerCase(),
				testId,
			}),
		}),
		[props],
	);

	return {
		Component,
		componentProps: {
			className: style,
			...remainingProps,
		},
		SemanticChild,
	};
};
