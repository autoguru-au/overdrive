import React, { createContext } from 'react';
import { useCheckboxGroup, type AriaCheckboxGroupProps } from 'react-aria';
import { type CheckboxGroupState, useCheckboxGroupState } from 'react-stately';

import { CheckboxItem, SplitLabel } from './CheckboxItem';

export interface CheckboxButtonsProps extends AriaCheckboxGroupProps {
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
	onChange?: AriaCheckboxGroupProps['onChange'];
}

export const CheckboxButtonsContext = createContext<CheckboxGroupState | null>(
	null,
);

/**
 * The CheckboxButtons group one or more checkboxes to apear as an outlined list of options.
 * Populate the CheckboxButtons group with the CheckboxItem, each item must have a `value` (unique) and be labelled.
 * Used in the booking flow on the payment step for addons.
 * Future enhancements might include: validation states/error handling
 */
export const CheckboxButtons = (props: CheckboxButtonsProps) => {
	const { children, label, description } = props;
	const state = useCheckboxGroupState(props);
	const { groupProps, labelProps, descriptionProps } = useCheckboxGroup(
		props,
		state,
	);

	return (
		<div {...groupProps}>
			<span {...labelProps}>{label}</span>
			<CheckboxButtonsContext.Provider value={state}>
				{children}
			</CheckboxButtonsContext.Provider>
			{description && <div {...descriptionProps}>{description}</div>}
		</div>
	);
};

CheckboxButtons.Item = CheckboxItem;
CheckboxButtons.SplitLabel = SplitLabel;
