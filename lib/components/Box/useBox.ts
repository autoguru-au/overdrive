import type { ClassValue } from 'clsx';
import type { ComponentPropsWithRef, ElementType, JSX } from 'react';

import { useDeepCompareMemo } from '../../hooks';
import type {
	Sprinkles,
	SprinklesResponsive,
	SprinklesLegacyColours,
} from '../../styles/sprinkles.css';
import { filterNonSprinklesProps } from '../../utils/sprinkles';

import { boxStyles } from './boxStyles';

/** All vanilla-extract sprinkles props */
export type StyleProps = Sprinkles &
	SprinklesResponsive &
	SprinklesLegacyColours;

export type PolymorphicBoxProps<E extends ElementType, Props = object> = {
	as?: E;
	className?: ClassValue;
} & Omit<ComponentPropsWithRef<E>, keyof Props | 'as' | 'className'> &
	Props;

/** Polymorphic box props that merge sprinkles style props and the HTML element props */
export type UseBoxProps<E extends ElementType = 'div'> = PolymorphicBoxProps<
	E,
	StyleProps
>;

/** Well commented return type for the polymorphic useBox primitive */
export interface UseBoxReturnValue<E extends ElementType = 'div'> {
	/** The HTML element to use in the JSX template */
	Component: E | JSX.IntrinsicElements;
	/** The props to be spread on the HTML element */
	componentProps: UseBoxProps<E>;
	/** A semantic child HTML element to use within the `Component` (only if applicable) */
	ChildComponent?: ElementType;
}

const DEFAULT_TAG = 'div' as keyof JSX.IntrinsicElements;
const LIST_ITEM_TAG = 'li' as keyof JSX.IntrinsicElements;
const LIST_TAGS = ['ul', 'ol'] as ReadonlyArray<keyof JSX.IntrinsicElements>;

/**
 * The Overdrive component primitive to expose a flexible HTML element as a fully typesafe React component
 * that provides intrinsic props as well as style props from vanilla-extract sprinkles
 *
 * @returns `{ Component, componentProps, ChildComponent }` where ChildComponent is optional based on the `as` prop
 */
export const useBox = <E extends ElementType = 'div'>({
	as,
	className,
	...props
}: UseBoxProps<E>) => {
	const Component = as ?? DEFAULT_TAG;

	// logic to promote semantic HTML and ensure a child tag is correct for the `as` prop
	const isList = LIST_TAGS.includes(Component as keyof JSX.IntrinsicElements);
	const ChildComponent = isList ? LIST_ITEM_TAG : undefined;

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
		() => filterNonSprinklesProps(props),
		[props],
	);

	return {
		Component,
		componentProps: {
			className: style,
			...remainingProps,
		},
		ChildComponent,
	};
};
