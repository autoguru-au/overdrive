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

import type { TestIdProp } from '../../types';
import { dataAttrs } from '../../utils/dataAttrs';
import { Icon, type IconEl } from '../Icon';
import { LoadingBox } from '../LoadingBox/LoadingBox';

import {
	checkboxStyle,
	descriptionStyle,
	gridContainerStyle,
	gridItemContainerStyle,
	gridItemStyle,
	gridVariants,
	indicatorStyle,
	labelStyle,
	radioButtonStyle,
	type GridVariants,
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
	/**
	 * Whether this option should be disabled
	 */
	disabled?: boolean;
}
export interface OptionGridProps<T>
	extends Omit<ListBoxProps<T>, 'items'>,
		TestIdProp {
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
	columns?: GridVariants['columns'];
	/**
	 * Loading state
	 */
	isLoading?: boolean;
}

/**
 * The OptionGrid is primarily used in the booking flow to provide large selectable tiles to the user. It is not a form
 * control as it is built on the react-aria ListBox ([docs](https://react-spectrum.adobe.com/react-aria/ListBox.html)),
 * and implements a listbox behaviour without wrapping an input element. It supports controlled and uncontrolled usage.
 * Following ARIA guidelines, the arrow keys can be used to navigate withing the group of options.
 *
 * The ListBox implementation provides a Set of selected keys to the `onSelectionChange` handler. To preselect options
 * in uncontrolled usage, simply provide a default selection using the `defaultSelectedKeys` prop.
 * See more details on react-aria [ListBox props](https://react-spectrum.adobe.com/react-aria/ListBox.html#listbox-1).
 *
 * Accessibility note: The ARIA spec prohibits listbox items from including interactive content such as buttons,
 * tooltips, etc. For these cases a completely different implementation is required (e.g. react-aria [GridList](
 * https://react-spectrum.adobe.com/react-aria/GridList.html))
 */
export const OptionGrid = ({
	className,
	columns,
	indicator = 'checkbox',
	isLoading = false,
	label,
	layout = 'grid',
	selectionMode = 'multiple',
	testId,

	...props
}: OptionGridProps<OptionItem>) => {
	if (isLoading) {
		return (
			<div className={gridContainerStyle}>
				<div className={gridVariants({ columns })}>
					{Array.from({ length: Number(columns) || 1 }, (_, idx) => (
						<div key={idx} className={gridItemContainerStyle}>
							<LoadingBox />
						</div>
					))}
				</div>
			</div>
		);
	}

	return (
		<div className={gridContainerStyle}>
			<ListBox
				aria-label={label}
				layout={layout}
				selectionMode={selectionMode}
				className={clsx([gridVariants({ columns }), className])}
				{...dataAttrs({ testid: testId })}
				{...props}
			>
				{({ description, disabled, icon, label, name }) => (
					<ListBoxItem
						className={gridItemStyle}
						id={name}
						isDisabled={disabled}
						textValue={label}
						{...dataAttrs({ disabled })}
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
										? radioButtonStyle
										: checkboxStyle;

								return (
									<div
										className={styledIndicator}
										{...dataAttrs({
											disabled,
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
										<div className={indicatorStyle}>
											<IndicatorIcon />
										</div>
									)}
									<div>
										<Text
											slot="label"
											elementType="div"
											className={labelStyle}
										>
											{label}
										</Text>
										{description && (
											<Text
												slot="description"
												elementType="div"
												className={descriptionStyle}
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
		</div>
	);
};

OptionGrid.displayName = 'OptionGrid';
