import { useToggleState } from '@react-stately/toggle';
import clsx from 'clsx';
import * as React from 'react';
import { AnchorHTMLAttributes, FunctionComponent, useRef } from 'react';
import { useSwitch, useFocusRing, VisuallyHidden } from 'react-aria';

import { Box, useBoxStyles } from '../Box';
import { useTextStyles } from '../Text';

import * as styles from './Switch.css';
type AriaSwitchProps = Parameters<typeof useSwitch>[0];
export type SwitchProps = AriaSwitchProps &
	Omit<
		AnchorHTMLAttributes<HTMLButtonElement>,
		'children' | 'style' | 'is' | 'onChange'
	> & {
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

export const Switch: FunctionComponent = ({
	className,
	disabled,
	toggled,
	isSelected,
	isDisabled,
	...incomingProps
}: SwitchProps) => {
	const props = {
		...incomingProps,
		isDisabled: isDisabled || disabled,
		isSelected: isSelected || toggled,
	};
	const state = useToggleState(props);
	const ref = useRef(null);
	const { inputProps } = useSwitch(props, state, ref);
	const { isFocusVisible, focusProps } = useFocusRing();
	return (
		<label>
			<VisuallyHidden>
				<input {...inputProps} {...focusProps} ref={ref} />
			</VisuallyHidden>
			<Box
				className={clsx(
					styles.root,
					useTextStyles({ size: '5' }),
					{
						[styles.disabled.default]: inputProps.disabled,
						[styles.disabled.toggled]:
							state.isSelected && inputProps.disabled,
						[styles.toggled]: state.isSelected,
						[styles.untoggled]: !state.isSelected,
						[styles.focus]: isFocusVisible,
					},
					className,
				)}
				tabIndex={inputProps.disabled ? -1 : void 0}
				borderRadius="pill"
				position="relative"
				aria-disabled={inputProps.disabled}
				aria-label={`toggle ${state.isSelected ? 'on' : 'off'}`}
			>
				<Box
					borderWidth="1"
					position="absolute"
					borderRadius="pill"
					backgroundColour="white"
					padding="none"
					pointerEvents={inputProps.disabled ? 'none' : void 0}
					boxShadow="2"
					className={clsx(
						styles.handle.default,
						useBoxStyles({ is: 'button' }),
						useTextStyles({ colour: 'white' }),
						{
							[styles.handle.transition]: state.isSelected,
							[styles.handle.default]: inputProps.disabled,
							[styles.handle.disabled]: inputProps.disabled,
						},
					)}
				/>
			</Box>
			{props.children}
		</label>
	);
};

export default Switch;
