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
						[styles.handle.disabled]: inputProps.disabled,
					})}
				/>
			</Box>
			{props.children}
		</label>
	);
};

export default Switch;
