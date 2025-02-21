import { CheckIcon } from '@autoguru/icons';
import React, { useContext, useRef } from 'react';
import {
	useCheckboxGroupItem,
	useFocusRing,
	mergeProps,
	type AriaCheckboxGroupItemProps,
} from 'react-aria';

import { odStyle } from '../../styles/sprinkles.css';
import { dataAttrs } from '../../utils/dataAttrs';
import { Icon } from '../Icon';
import { VisuallyHidden } from '../VisuallyHidden';

import { OptionListContext } from './OptionList';
import { checkbox, styledOptionItem } from './OptionList.css';

type FilteredCheckboxProps = Omit<
	AriaCheckboxGroupItemProps,
	'isIndeterminate'
>;

/**
 * The OptionListItem is used to populate OptionList. They are outlined with a large interactive area and flexible
 * label content layout.
 */
export const OptionListItem = (props: FilteredCheckboxProps) => {
	const ref = useRef<HTMLInputElement>(null);
	const state = useContext(OptionListContext)!;
	const { inputProps, isSelected } = useCheckboxGroupItem(props, state, ref);
	const { isFocusVisible, focusProps } = useFocusRing();

	return (
		<label
			className={styledOptionItem()}
			{...dataAttrs({ 'focus-visible': isFocusVisible })}
		>
			<VisuallyHidden>
				<input {...mergeProps(inputProps, focusProps)} ref={ref} />
			</VisuallyHidden>
			<div
				className={odStyle({
					display: 'flex',
					gap: '2',
					width: '100%',
				})}
			>
				<div
					className={checkbox()}
					{...dataAttrs({ checked: isSelected })}
				>
					<Icon icon={CheckIcon} />
				</div>
				<div
					className={odStyle({
						alignSelf: 'center',
						font: 'sm',
						width: '100%',
					})}
				>
					{props.children}
				</div>
			</div>
		</label>
	);
};

OptionListItem.displayName = 'OptionList.Item';

export interface SplitLabelProps {
	children?: React.ReactNode;
	/**
	 * convenience prop for passing through a string array instead of children
	 */
	content?: string[];
}

/**
 * Helper component part to display a checkbox button label with a second column justified to the end
 */
export const ItemSplitLabel = ({ children, content }: SplitLabelProps) => {
	if (!children && !content) return null;

	return (
		<div
			className={odStyle({
				display: 'flex',
				gap: '2',
				justifyContent: 'space-between',
			})}
		>
			{children ??
				content?.map((item, idx) => <span key={idx}>{item}</span>)}
		</div>
	);
};

ItemSplitLabel.displayName = 'OptionList.ItemSplitLabel';
