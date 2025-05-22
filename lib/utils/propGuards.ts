/**
 * Type guard that returns the value if it's a non-empty string, otherwise returns undefined.
 * This is useful for ensuring type safety when working with props that should be strings.
 *
 * @example
 * // Returns 'hello'
 * onlyString('hello');
 *
 * // Returns undefined
 * onlyString(42);
 * onlyString('');
 * onlyString(null);
 * onlyString(undefined);
 */
export function onlyString<P extends string | unknown>(prop: P) {
	return prop && typeof prop === 'string' && prop.length > 0
		? prop
		: undefined;
}
