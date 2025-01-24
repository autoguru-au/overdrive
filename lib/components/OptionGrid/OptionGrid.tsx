/* eslint-disable unicorn/prefer-logical-operator-over-ternary */
import { CheckIcon } from '@autoguru/icons';
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
import type { WithTestId } from '../../types';
import { dataAttrs } from '../../utils/dataAttrs';
import { Icon, type IconEl } from '../Icon';

import {
	styledCheckbox,
	styledGridContainer,
	styledGridItem,
	styledRadioButton,
	styleIndicator,
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
	indicator?: 'none' | 'checkbox' | 'radio';
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
 * The OptionGrid is primarily used in the booking flow to provide large selectable tiles to the user. It is not a form
 * control as it is built on the react-aria ListBox ([docs](https://react-spectrum.adobe.com/react-aria/ListBox.html)),
 * and implements a listbox behaviour without wrapping an input element. It supports controlled and uncontrolled usage.
 * Following ARIA guidelines, the arrow keys can be used to navigate withing the group of options.
 *
 * See more details on react-aria [ListBox props](https://react-spectrum.adobe.com/react-aria/ListBox.html#listbox-1).
 *
 * Not yet implemented: disabled appearance, empty state, loading state, error state.
 *
 * Accessibility note: The ARIA spec prohibits listbox items from including interactive content such as buttons,
 * tooltips, etc. For these cases a completely different implementation is required (e.g. react-aria [GridList](
 * https://react-spectrum.adobe.com/react-aria/GridList.html))
 */
export const OptionGrid = ({
	className,
	columns,
	indicator = 'checkbox',
	label,
	layout = 'grid',
	selectionMode = 'multiple',
	testId,
	...props
}: WithTestId<OptionGridProps<OptionItem>>) => {
	return (
		<ListBox
			aria-label={label}
			layout={layout}
			selectionMode={selectionMode}
			className={clsx([styledGridContainer({ columns }), className])}
			{...dataAttrs({ 'test-id': testId })}
			{...props}
		>
			{({ description, icon, label, name }) => (
				<ListBoxItem
					className={styledGridItem()}
					id={name}
					textValue={label}
				>
					{({ isFocusVisible, isHovered, isSelected }) => {
						const hasIndicator = indicator !== 'none';
						const hasNoInteraction =
							!isFocusVisible && !isHovered && !isSelected;
						const IndicatorIcon = () => {
							if (icon && hasNoInteraction)
								return <Icon icon={icon} size="100%" />;

							const styledIndicator =
								indicator === 'radio'
									? styledRadioButton
									: styledCheckbox;

							return (
								<div
									className={styledIndicator()}
									{...dataAttrs({
										'focus-visible': isFocusVisible,
										hover: isHovered,
										selected: isSelected,
									})}
								>
									{indicator === 'checkbox' && (
										<Icon icon={CheckIcon} />
									)}
								</div>
							);
						};

						return (
							<>
								{hasIndicator && (
									<div className={styleIndicator}>
										<IndicatorIcon />
									</div>
								)}
								<div>
									<Text
										slot="label"
										elementType="div"
										className={odStyle({ fontSize: 'md' })}
									>
										{label}
									</Text>
									{description && (
										<Text
											slot="description"
											elementType="div"
											className={odStyle({
												fontSize: 'xs',
											})}
										>
											{description}
										</Text>
									)}
								</div>
							</>
						);
					}}
				</ListBoxItem>
			)}
		</ListBox>
	);
};
