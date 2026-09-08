import { useToggleState } from '@react-stately/toggle';
import React, { useRef } from 'react';
import {
	useSwitch,
	useFocusRing,
	useHover,
	type AriaSwitchProps,
} from 'react-aria';

import type { OdComponentProp, TestIdProp } from '../../types';
import { dataAttrs } from '../../utils/dataAttrs';
import { Box } from '../Box';
import { VisuallyHidden } from '../VisuallyHidden';

import * as styles from './Switch.css';

export interface SwitchProps
	extends AriaSwitchProps,
		OdComponentProp,
		TestIdProp {
	'aria-labelledby'?: AriaSwitchProps['aria-labelledby'];
	name?: AriaSwitchProps['name'];
	value?: AriaSwitchProps['value'];
	isDisabled?: AriaSwitchProps['isDisabled'];
	isSelected?: AriaSwitchProps['isSelected'];
	onChange?: AriaSwitchProps['onChange'];
	className?: string;
	/** `medium` is 38×20, `small` is 30×16 */
	size?: keyof typeof styles.size;
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
	size = 'medium',
	odComponent = 'switch',
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
	const { isHovered, hoverProps } = useHover({
		isDisabled: inputProps.disabled,
	});

	return (
		<Box
			as="label"
			className={[styles.base, className]}
			odComponent={odComponent}
			testId={testId}
		>
			<VisuallyHidden>
				<input {...inputProps} {...focusProps} ref={ref} />
			</VisuallyHidden>
			<Box
				className={[styles.toggle, styles.size[size]]}
				{...hoverProps}
				{...dataAttrs({
					disabled: inputProps.disabled,
					active: state.isSelected,
					hovered: isHovered,
					'focus-visible': isFocusVisible,
				})}
			>
				<Box className={styles.handle} />
			</Box>
			{props.children}
		</Box>
	);
};

Switch.displayName = 'Switch';
