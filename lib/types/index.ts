import type { ClassValue } from 'clsx';
import type { ElementType, ReactElement } from 'react';

export interface SimpleAsProp {
	/** Name of HTML tag to render the component as */
	as?: ElementType;
}

export type AsProp = string | ElementType | ReactElement;
export interface ComponentAsProp {
	/** Name of HTML tag or a React/JSX component to render the component as */
	as?: AsProp;
}

export interface ComponentClassNameProp {
	/** Flexible className that accepts strings, arrays and objects */
	className?: ClassValue;
}

export type DataAttributes = {
	[key: `data-${string}`]: string | number | boolean | undefined;
};

export interface OdComponentProp {
	/**
	 * Output a data attribute with a component name in the markup, mainly used for the root element of a component
	 */
	odComponent?: string;
}

export interface TestIdProp {
	/**
	 * The test ID will be rendered as a data attribute `data-testid` on the element for use with test assertions
	 */
	testId?: string;
}

/**
 * Adds a testId property to the given type
 */
export type WithTestId<T = unknown> = T & TestIdProp;

/**
 * Use ConsistentComponentProps to define shared Overdrive props
 */
export interface ConsistentComponentProps
	extends ComponentClassNameProp,
		TestIdProp {}
