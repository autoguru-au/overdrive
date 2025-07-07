import { useToggleState } from '@react-stately/toggle';
import React, { useRef } from 'react';
import { useSwitch, useFocusRing, type AriaSwitchProps } from 'react-aria';

import { textStyles } from '../../styles/typography';
import type { TestIdProp } from '../../types';
import { dataAttrs } from '../../utils/dataAttrs';
import { Box } from '../Box';
import { VisuallyHidden } from '../VisuallyHidden';

import * as styles from './Switch.css';

export interface SwitchProps extends AriaSwitchProps, TestIdProp {
	'aria-labelledby'?: AriaSwitchProps['aria-labelledby'];
	name?: AriaSwitchProps['name'];
	value?: AriaSwitchProps['value'];
	isDisabled?: AriaSwitchProps['isDisabled'];
	isSelected?: AriaSwitchProps['isSelected'];
	onChange?: AriaSwitchProps['onChange'];
	className?: string;
	/**
	 * @deprecated use isDisabled instead
	 */
	disabled?: boolean;
	/**
	 * @deprecated use isSelected instead
	 */
	toggled?: boolean;
}

/**
 * The Switch component should be used with a label. The text that describes the switch can be passed in as children
 * where it will be associated with the switch automatically. If it a more complex layout is and the text label is
 * located outside the component ensure that `<Switch>` has an `id` and the label element has an `htmlFor` with that id.
 */
export const Switch = ({
	className,
	disabled,
	toggled,
	isSelected = toggled,
	isDisabled = disabled,
	testId,
	...incomingProps
}: SwitchProps) => {
	const props = {
		...incomingProps,
		isDisabled,
		isSelected,
	};
	const state = useToggleState(props);
	const ref = useRef(null);
	const { inputProps } = useSwitch(props, state, ref);
	const { isFocusVisible, focusProps } = useFocusRing();

	return (
		<Box as="label" className={[styles.base, className]} testId={testId}>
			<VisuallyHidden>
				<input {...inputProps} {...focusProps} ref={ref} />
			</VisuallyHidden>
			<Box
				className={[
					styles.toggle,
					textStyles({ size: '5' }),
					{
						[styles.disabled]: inputProps.disabled,
						[styles.toggleOn]: state.isSelected,
					},
				]}
				{...dataAttrs({
					disabled: inputProps.disabled,
					active: state.isSelected,
					'focus-visible': isFocusVisible,
				})}
			>
				<Box
					className={[
						styles.handle.default,
						{
							[styles.handle.active]: state.isSelected,
						},
					]}
				/>
			</Box>
			{props.children}
		</Box>
	);
};
