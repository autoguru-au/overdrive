import React, { createContext } from 'react';
import { useCheckboxGroup, type AriaCheckboxGroupProps } from 'react-aria';
import { type CheckboxGroupState, useCheckboxGroupState } from 'react-stately';

import { groupLabel } from './CheckboxButtons.css';
import { CheckboxItem, SplitLabel } from './CheckboxItem';

type ElementAttributes = Pick<
	React.ComponentPropsWithRef<'div'>,
	'className' | 'ref' | 'style'
>;

export interface CheckboxButtonsProps
	extends AriaCheckboxGroupProps,
		ElementAttributes {
	/**
	 * Label for the CheckboxButtons group needs to be provided at the component level for accessibility
	 */
	label: AriaCheckboxGroupProps['label'];
	description?: AriaCheckboxGroupProps['description'];
	/**
	 * Populate with one or more CheckboxItem components
	 */
	children?: React.ReactNode;
	name?: AriaCheckboxGroupProps['name'];
	defaultValue?: AriaCheckboxGroupProps['defaultValue'];
	/**
	 * Current selected value (controlled state)
	 */
	value?: AriaCheckboxGroupProps['value'];
	/**
	 * Event handler when any checkbox button changes. Returned string array is the values of the inputs that are currently
	 * checked.
	 */
	onChange?: AriaCheckboxGroupProps['onChange'];
}

export const CheckboxButtonsContext = createContext<CheckboxGroupState | null>(
	null,
);

/**
 * The CheckboxButtons group one or more checkboxes to apear as an outlined list of options.
 * Populate the CheckboxButtons group with the CheckboxItem, each item must have a `value` (unique) and be labelled.
 * The `value` of all checkboxes active is passed as a string array to set `defaultValue` (uncontrolled), `value`
 * (controlled) and is the format returned from the onChange handler as well.
 * Used in the booking flow on the payment step for addons.
 * Future enhancements might include: validation states/error handling
 */
export const CheckboxButtons = (props: CheckboxButtonsProps) => {
	const { children, className, description, label, ref, style } = props;
	const elementAttrs = { className, ref, style };
	const state = useCheckboxGroupState(props);
	const { groupProps, labelProps, descriptionProps } = useCheckboxGroup(
		props,
		state,
	);

	return (
		<div {...elementAttrs} {...groupProps}>
			<div {...labelProps} className={groupLabel()}>
				{label}
			</div>
			<CheckboxButtonsContext.Provider value={state}>
				<div>{children}</div>
			</CheckboxButtonsContext.Provider>
			{description && <div {...descriptionProps}>{description}</div>}
		</div>
	);
};

CheckboxButtons.Item = CheckboxItem;
CheckboxButtons.SplitLabel = SplitLabel;
