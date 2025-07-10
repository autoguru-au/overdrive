import type { ClassValue } from 'clsx';
import type { ElementType } from 'react';

export interface SimpleAsProp {
	/** Name of HTML tag to render the component as */
	as?: ElementType;
}

export interface OdComponent {
	/**
	 * Output a data attribute with a component name in the markup, mainly used for the root element of a component
	 */
	odComponent?: string;
}

export type DataAttributes = {
	[key: `data-${string}`]: string | number | boolean | undefined;
};

export interface TestId {
	/**
	 * The test ID will be rendered as a data attribute `data-testid` on the element for use with test assertions
	 */
	testId?: string;
}

/**
 * Adds a testId property to the given type
 */
export type WithTestId<T = unknown> = T & TestId;

/**
 * Use ConsistentComponentProps to define shared Overdrive props
 */
export interface ConsistentComponentProps extends TestId {
	/** Flexible className that accepts strings, arrays and objects */
	className?: ClassValue;
}
