import { useToggleState } from '@react-stately/toggle';
import clsx from 'clsx';
import * as React from 'react';
import { AnchorHTMLAttributes, FunctionComponent, useCallback, useRef } from 'react';
import { useSwitch, useFocusRing, VisuallyHidden } from 'react-aria';
import { AriaSwitchProps } from 'react-types';

import { Box, useBoxStyles } from '../Box';
import { useTextStyles } from '../Text';

import * as styles from './Switch.css';

export type SwitchProps = AriaSwitchProps & Omit<
	AnchorHTMLAttributes<HTMLButtonElement>,
	'children' | 'style' | 'is' | 'onChange'
> & {
	className?: string;
};

export const Switch: FunctionComponent = (props: SwitchProps) => {
	const state = useToggleState(props);
	const ref = useRef(null);
	const { inputProps } = useSwitch(props, state, ref);
	const { isFocusVisible, focusProps } = useFocusRing();
	console.log(isFocusVisible);
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
						[styles.focus]: isFocusVisible,
						[styles.untoggled]: !state.isSelected,
						[styles.toggled]: state.isSelected,
						[styles.disabled.default]: inputProps.disabled,
						[styles.disabled.toggled]: state.isSelected && inputProps.disabled,
					},
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
						},
					)}
				/>
			</Box>
			{props.children}
		</label>
	);
}

export default Switch;