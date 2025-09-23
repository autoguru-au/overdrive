/**
 * Common props shared between DateField and TimeField components
 */
export interface CommonSelectorProps<T> {
	/**
	 * Input name attribute for forms
	 */
	name?: string;
	/**
	 * Disabled the input
	 */
	disabled?: boolean;
	/**
	 * Invalid field state
	 */
	invalid?: boolean;
	/**
	 * Loading state - shows spinner and disables interaction
	 */
	loading?: boolean;
	/**
	 * Uncontrolled default value
	 */
	defaultValue?: T;
	/**
	 * Controlled value
	 */
	value?: T;
	/**
	 * Custom event handler when value is selected
	 */
	onChange?: (value: T) => void;
}
