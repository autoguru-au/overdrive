import { useToggleState } from '@react-stately/toggle';
import clsx from 'clsx';
import React, { useRef } from 'react';
import { useSwitch, useFocusRing, type AriaSwitchProps } from 'react-aria';

import type { WithTestId } from '../../types';
import { dataAttrs } from '../../utils/dataAttrs';
import { Box } from '../Box';
import { useTextStyles } from '../Text/useTextStyles';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';

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
}: WithTestId<SwitchProps>) => {
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
		<label
			className={clsx(styles.base, className)}
			{...dataAttrs({ 'test-id': testId })}
		>
			<VisuallyHidden>
				<input {...inputProps} {...focusProps} ref={ref} />
			</VisuallyHidden>
			<Box
				className={clsx(styles.toggle, useTextStyles({ size: '5' }), {
					[styles.disabled]: inputProps.disabled,
					[styles.toggleOn]: state.isSelected,
				})}
				{...dataAttrs({
					disabled: inputProps.disabled,
					active: state.isSelected,
					'focus-visible': isFocusVisible,
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
