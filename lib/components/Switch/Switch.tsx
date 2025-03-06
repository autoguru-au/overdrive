import { useToggleState } from '@react-stately/toggle';
import clsx from 'clsx';
import * as React from 'react';
import { AnchorHTMLAttributes, FunctionComponent, useRef } from 'react';
import { useSwitch, useFocusRing } from 'react-aria';

import { dataAttrs } from '../../utils/dataAttrs';
import { Box } from '../Box';
import { useTextStyles } from '../Text';
import { VisuallyHidden } from '../VisuallyHidden';

import * as styles from './Switch.css';

type AriaSwitchProps = Parameters<typeof useSwitch>[0];
export type SwitchProps = AriaSwitchProps &
	Omit<
		AnchorHTMLAttributes<HTMLButtonElement>,
		'children' | 'style' | 'is' | 'onChange'
	> & {
		/**
		 * Whether the switch is disabled
		 */
		isDisabled?: boolean;
		/**
		 * Whether the switch is selected
		 */
		isSelected?: boolean;
		className?: string;
		/**
		 * @deprecated use isDisabled instead
		 */
		disabled?: boolean;
		/**
		 * @deprecated use isSelected instead
		 */
		toggled?: boolean;
	};

const defaultEnglish = {};

export const Switch: FunctionComponent<SwitchProps> = ({
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
				{`toggle ${state.isSelected ? 'on' : 'off'}`}
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
