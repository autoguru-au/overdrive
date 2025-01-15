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

import { iconContainer, styledCheckbox, styledItem } from './OptionGrid.css';

export interface OptionGridProps<T> extends ListBoxProps<T> {
	/**
	 * Mandatory descriptive label that indicates the purpose of the group of options, used for assistive technologies
	 */
	label: string;
	/**
	 * Toggle the indicator appearance between checkbox and radio button, visual effect only
	 */
	indicator?: 'checkbox' | 'radio';
	/**
	 * Toggle between single and multi selection mode
	 */
	selectionMode?: SelectionMode;
	className?: string;
}

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

/**
 * The OptionGrid is primarily used in the booking flow to provide multi-select options for the user. It is not a form
 * control. It supports controlled and uncontrolled usage.
 */
export const OptionGrid = ({
	indicator = 'checkbox',
	label,
	selectionMode = 'multiple',
	...props
}: OptionGridProps<OptionItem>) => {
	const IndicatorIcon = () => {
		if (indicator === 'radio') return null;

		return (
			<div className={styledCheckbox()}>
				<IconTick />
			</div>
		);
	};

	return (
		<ListBox aria-label={label} selectionMode={selectionMode} {...props}>
			{({ description, icon, label, name }) => (
				<ListBoxItem className={styledItem()} id={name}>
					<div className={iconContainer}>
						{icon ? (
							<Icon icon={icon} size="100%" />
						) : (
							<IndicatorIcon />
						)}
					</div>
					<Text className={odStyle({ fontSize: 'md' })} slot="label">
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
				</ListBoxItem>
			)}
		</ListBox>
	);
};
