export interface TestId {
	/**
	 * The test ID will be rendered as a data attribute on the element for e2e testing purposes
	 */
	testId?: string;
}

/**
 * Adds a testId property to the given type
 */
export type WithTestId<T> = T & TestId;
