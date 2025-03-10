import { useToggleState } from '@react-stately/toggle';
import clsx from 'clsx';
import React, { useRef } from 'react';
import { useSwitch, useFocusRing, type AriaSwitchProps } from 'react-aria';

import { dataAttrs } from '../../utils/dataAttrs';
import { Box } from '../Box';
import { useTextStyles } from '../Text';
import { VisuallyHidden } from '../VisuallyHidden';

import * as styles from './Switch.css';

export interface SwitchProps extends AriaSwitchProps {
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
 * The Switch component does not include a label by default for legacy compatibility. The text that describes the
 * switch should be given an `id` and then provided to the `aria-labelledby` attribute. This will allow the
 * component to be accessible.
 */
export const Switch = ({
	className,
	disabled,
	toggled,
	isSelected = toggled,
	isDisabled = disabled,
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
		<label className={styles.base}>
			<VisuallyHidden>
				<input {...inputProps} {...focusProps} ref={ref} />
			</VisuallyHidden>
			<Box
				className={clsx(
					styles.toggle,
					useTextStyles({ size: '5' }),
					{
						[styles.disabled]: inputProps.disabled,
						[styles.toggleOn]: state.isSelected,
						[styles.focus]: isFocusVisible,
					},
					className,
				)}
				{...dataAttrs({
					disabled: inputProps.disabled,
					active: state.isSelected,
				})}
			>
				<Box
					className={clsx(styles.handle.default, {
						[styles.handle.active]: state.isSelected,
					})}
				/>
			</Box>
			{props.children}
		</label>
	);
};

export default Switch;
