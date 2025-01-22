import React, { createContext } from 'react';
import { useCheckboxGroup, type AriaCheckboxGroupProps } from 'react-aria';
import { type CheckboxGroupState, useCheckboxGroupState } from 'react-stately';

import type { WithTestId } from '../../types';
import { dataAttrs } from '../../utils/dataAttrs';

import {
	styleDescription,
	styleGroup,
	styleGroupLabel,
} from './OptionList.css';
import { OptionListItem, ItemSplitLabel } from './OptionListItem';

type ElementAttributes = Pick<
	React.ComponentPropsWithRef<'div'>,
	'className' | 'ref' | 'style'
>;

export interface OptionListProps
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

export const OptionListContext = createContext<CheckboxGroupState | null>(null);

/**
 * The OptionList is a form control that groups selectable items that apear as an outlined list of options and
 * implements React Aria `useCheckboxGroup`
 * ([docs](https://react-spectrum.adobe.com/react-aria/useCheckboxGroup.html))
 *
 * Populate the OptionList group with the OptionListList, each item must have a `value` (unique) and be labelled.
 * The `value` of all active items are passed as a string array to set `defaultValue` (uncontrolled), `value`
 * (controlled) and is the format returned from the onChange handler as well.
 *
 * Used in the booking flow on the payment step for addons.
 * Future enhancements might include: validation states/error handling
 */
export const OptionList = (props: WithTestId<OptionListProps>) => {
	const { children, className, description, label, ref, style } = props;
	const elementAttrs = { ref, className, style };
	const state = useCheckboxGroupState(props);
	const { groupProps, labelProps, descriptionProps } = useCheckboxGroup(
		props,
		state,
	);

	return (
		<div
			{...groupProps}
			{...elementAttrs}
			{...dataAttrs({ 'test-id': props.testId })}
		>
			<div {...labelProps} className={styleGroupLabel}>
				{label}
			</div>
			{description && (
				<div {...descriptionProps} className={styleDescription}>
					{description}
				</div>
			)}
			<OptionListContext.Provider value={state}>
				<div className={styleGroup}>{children}</div>
			</OptionListContext.Provider>
		</div>
	);
};

OptionList.Item = OptionListItem;
OptionList.ItemSplitLabel = ItemSplitLabel;
