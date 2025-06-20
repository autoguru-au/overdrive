export interface OdComponent {
	/**
	 * Output a data attribute with a component name in the markup, mainly used for the root element of a component
	 */
	odComponent?: string;
}

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
