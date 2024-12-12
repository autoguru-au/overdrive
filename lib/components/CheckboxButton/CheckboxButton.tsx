import React, { useRef } from 'react';
import {
	useCheckbox,
	useFocusRing,
	mergeProps,
	VisuallyHidden,
	type AriaCheckboxProps,
} from 'react-aria';
import { useToggleState } from 'react-stately';

import { odStyle } from '../../styles/sprinkles.css';

import { container, checkbox } from './CheckboxButton.css';

type FilteredCheckboxProps = Omit<AriaCheckboxProps, 'isIndeterminate'>;
export interface CheckboxButtonProps extends FilteredCheckboxProps {
	label: string;
	labelColInfo?: string;
}

const Tick = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="20"
		height="20"
		viewBox="0 0 20 20"
		fill="none"
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M15.2887 7.42963L8.48942 14.2289L4.71179 10.3673L6.08136 8.99777L8.48942 11.4801L13.9191 6.06006L15.2887 7.42963Z"
			fill="white"
		/>
	</svg>
);

/**
 * The checkbox button is a checkbox with a large outlined interactive area and multiple options for laying out
 * label content. Used in the booking flow on the payment step for addons. Often will be used in a CheckboxGroup.
 */
export const CheckboxButton = ({ children, ...props }: CheckboxButtonProps) => {
	const ref = useRef<HTMLInputElement>(null);
	const state = useToggleState(props);
	const { inputProps } = useCheckbox(props, state, ref);
	const { isFocusVisible, focusProps } = useFocusRing();
	const { isSelected } = state;

	return (
		<label className={container()}>
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
					{isSelected && <Tick />}
				</div>
				<div
					className={odStyle({
						width: '100%',
					})}
				>
					{children}
				</div>
			</div>
		</label>
	);
};

export interface SplitLabelProps {
	children?: React.ReactNode;
	/**
	 * convenience prop for passing through a string array instead of children
	 */
	items?: string[];
}

/**
 * Helper component part to display a checkbox button label with a second column justified to the end
 */
const SplitLabel = ({ children, items }: SplitLabelProps) => {
	if (!children && !items) return null;

	return (
		<div
			className={odStyle({
				display: 'flex',
				gap: '2',
				justifyContent: 'space-between',
			})}
		>
			{children ??
				items?.map((content, idx) => <span key={idx}>{content}</span>)}
		</div>
	);
};

SplitLabel.displayName = 'CheckboxButton.SplitLabel';
CheckboxButton.SplitLabel = SplitLabel;
