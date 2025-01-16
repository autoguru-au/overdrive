import clsx from 'clsx';
import React from 'react';
import {
	ListBox,
	ListBoxItem,
	Text,
	type ListBoxProps,
} from 'react-aria-components';
import { type SelectionMode } from 'react-stately';

import { odStyle } from '../../styles/sprinkles.css';
import { Icon, type IconEl } from '../Icon';
import { IconTick } from '../OptionList/IconTick';

import {
	iconContainer,
	styledCheckbox,
	styledGridContainer,
	styledGridItem,
	type StyledGridContainerProps,
} from './OptionGrid.css';

export interface OptionItem {
	name: string;
	label: string;
	value?: string;
	/**
	 * Optional custom icon from `@autoguru/icons` to display in unselected state
	 */
	icon?: IconEl;
	description?: string;
}
export interface OptionGridProps<T> extends Omit<ListBoxProps<T>, 'items'> {
	/**
	 * Mandatory descriptive label that indicates the purpose of the group of options, used for assistive technologies
	 */
	label: string;
	/**
	 * Pass in the content for the OptionGrid using the items array
	 */
	items: OptionItem[];
	/**
	 * Toggle the indicator appearance between checkbox and radio button, visual effect only
	 */
	indicator?: 'checkbox' | 'radio';
	/**
	 * Toggle between single and multi selection mode
	 */
	selectionMode?: SelectionMode;
	/**
	 * Number of columns to display the options in
	 */
	columns?: StyledGridContainerProps['columns'];
}

/**
 * The OptionGrid is primarily used in the booking flow to provide multi-select options for the user. It is not a form
 * control. It supports controlled and uncontrolled usage.
 */
export const OptionGrid = ({
	className,
	columns = 'double',
	indicator = 'checkbox',
	label,
	selectionMode = 'multiple',
	...props
}: OptionGridProps<OptionItem>) => {
	return (
		<ListBox
			aria-label={label}
			selectionMode={selectionMode}
			className={clsx([styledGridContainer({ columns }), className])}
			{...props}
		>
			{({ description, icon, label, name }) => (
				<ListBoxItem
					className={({ isSelected }) =>
						styledGridItem({ selected: isSelected })
					}
					id={name}
					textValue={label}
				>
					{({ isFocusVisible, isHovered, isSelected }) => {
						const hasNoInteraction =
							!isFocusVisible && !isHovered && !isSelected;
						const IndicatorIcon = () => {
							if (icon && hasNoInteraction)
								return <Icon icon={icon} size="100%" />;

							// TODO
							if (indicator === 'radio') return null;

							return (
								<div
									className={styledCheckbox({
										checked: isSelected,
										focused: isFocusVisible || isHovered,
									})}
								>
									<IconTick />
								</div>
							);
						};

						return (
							<>
								<div className={iconContainer}>
									<IndicatorIcon />
								</div>
								<Text
									className={odStyle({ fontSize: 'md' })}
									slot="label"
								>
									{label}
								</Text>
								{description && (
									<Text
										className={odStyle({ fontSize: 'xs' })}
										slot="description"
									>
										{description}
									</Text>
								)}
							</>
						);
					}}
				</ListBoxItem>
			)}
		</ListBox>
	);
};
