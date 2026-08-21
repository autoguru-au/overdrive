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

/**
 * The sizes a selection control (CheckBox, Radio, Switch) can render at.
 *
 * `standard` is the pre-DS-2026 control and stays the default; `large` and
 * `small` are the two sizes DS-2026 publishes, sized from the `5` (20px) and
 * `4` (16px) space tokens.
 *
 * `standard` carries no rules of its own in any of the three components, so
 * existing consumers render an unchanged class list. Each guards its size class
 * with `size !== 'standard'` rather than adding a `standard` variant — that
 * would emit an extra class on every existing usage.
 */
export type ControlSize = 'standard' | 'large' | 'small';

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
