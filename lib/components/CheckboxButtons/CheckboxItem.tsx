import React, { useContext, useRef } from 'react';
import {
	useCheckboxGroupItem,
	useFocusRing,
	mergeProps,
	type AriaCheckboxGroupItemProps,
} from 'react-aria';

import { odStyle } from '../../styles/sprinkles.css';
import { VisuallyHidden } from '../VisuallyHidden';

import { CheckboxButtonsContext } from './CheckboxButtons';
import { checkbox, checkboxButton } from './CheckboxButtons.css';

type FilteredCheckboxProps = Omit<
	AriaCheckboxGroupItemProps,
	'isIndeterminate'
>;

const Tick = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="20"
		height="20"
		viewBox="0 0 20 20"
		fill="none"
		aria-hidden
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M15.2887 7.42963L8.48942 14.2289L4.71179 10.3673L6.08136 8.99777L8.48942 11.4801L13.9191 6.06006L15.2887 7.42963Z"
			fill="currentColor"
		/>
	</svg>
);

/**
 * The CheckboxItem is used to populate CheckboxButtons. They are outlined with a large interactive area and multiple
 * options for laying out label content.
 */
export const CheckboxItem = (props: FilteredCheckboxProps) => {
	const ref = useRef<HTMLInputElement>(null);
	const state = useContext(CheckboxButtonsContext)!;
	const { inputProps } = useCheckboxGroupItem(props, state, ref);
	const { isFocusVisible, focusProps } = useFocusRing();
	const isDisabled = state.isDisabled;
	const isSelected = state.isSelected(props.value);

	return (
		<label className={checkboxButton({ disabled: isDisabled })}>
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
					className={checkbox({
						checked: isSelected,
						focused: isFocusVisible,
					})}
				>
					<Tick />
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

CheckboxItem.displayName = 'CheckboxButtons.Item';

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
export const SplitLabel = ({ children, content }: SplitLabelProps) => {
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

SplitLabel.displayName = 'CheckboxButtons.SplitLabel';
