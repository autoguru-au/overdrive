import type { ClassValue as ClassName } from 'clsx';
import type {
	ComponentPropsWithRef,
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
import { filterNonSprinklesProps } from '../../utils/sprinkles';

import { boxStyles } from './boxStyles';

/**
 * Adds: `as` | `children` | `className`. Use BoxBasedProps to help consistently define the base props for a component
 * directly implementing useBox as the type of UseBoxProps is complex to Pick from.
 */
export interface BoxBasedProps<E extends ElementType>
	extends PropsWithChildren {
	/**
	 * The HTML element
	 * @default 'div'
	 */
	as?: E;
	/**
	 * Accepts `string` and complex array or objects via `clsx`
	 */
	className?: ClassName;
}

/** All vanilla-extract sprinkles props */
export type StyleProps = Sprinkles &
	SprinklesResponsive &
	SprinklesLegacyColours;

export type PolymorphicBoxProps<
	E extends ElementType,
	Props = object,
> = BoxBasedProps<E> &
	Omit<ComponentPropsWithRef<E>, keyof Props | 'as' | 'className'> &
	Props;

/** Polymorphic box props that merge sprinkles style props and the HTML element props */
export type UseBoxProps<E extends ElementType = 'div'> = PolymorphicBoxProps<
	E,
	StyleProps
>;

const DEFAULT_TAG = 'div' as keyof JSX.IntrinsicElements;
const LIST_ITEM_TAG = 'li' as keyof JSX.IntrinsicElements;
const LIST_TAGS = ['ul', 'ol'] as ReadonlyArray<keyof JSX.IntrinsicElements>;

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
	...props
}: UseBoxProps<E>) => {
	const Component = as ?? DEFAULT_TAG;

	// logic to promote semantic HTML and ensure a child tag is correct for the `as` prop
	const isList = LIST_TAGS.includes(Component as keyof JSX.IntrinsicElements);
	const SemanticChild = isList ? LIST_ITEM_TAG : undefined;

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
		SemanticChild,
	};
};
