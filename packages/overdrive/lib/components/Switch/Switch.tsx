import clsx from 'clsx';
import * as React from 'react';
import { FunctionComponent, useCallback, useState } from 'react';

import { Box, useBoxStyles } from '../Box';
import { useTextStyles } from '../Text';

import * as styles from './Switch.css';

export interface Props {
	className?: string;
	disabled?: boolean;
	toggled?: boolean;

	onChange?(value: boolean): void;
}

export const Switch: FunctionComponent<Props> = ({
	className = '',
	disabled = false,
	toggled: incomingToggled = false,
	onChange,
}) => {
	const [toggled, setToggled] = useState<boolean>(incomingToggled);

	const [prevValue, setPrevValue] = useState<boolean>(incomingToggled);

	const onToggle = useCallback(() => {
		if (disabled) {
			return;
		}

		if (typeof onChange === 'function') {
			onChange(!toggled);
		}

		setToggled(!toggled);
	}, [incomingToggled, disabled, toggled]);

	if (prevValue !== incomingToggled) {
		setToggled(incomingToggled);
		setPrevValue(incomingToggled);
	}

	return (
		<Box
			is="button"
			className={clsx(
				styles.root,
				useTextStyles({ size: '5' }),
				{
					[styles.toggled]: toggled,
					[styles.disabled.default]: disabled,
					[styles.disabled.toggled]: toggled && disabled,
				},
				className,
			)}
			borderRadius="pill"
			position="relative"
			aria-disabled={disabled}
			aria-label={`toggle ${toggled ? 'on' : 'off'}`}
			onClick={onToggle}>
			<Box
				borderWidth="1"
				position="absolute"
				borderRadius="pill"
				backgroundColour="white"
				padding="none"
				boxShadow="2"
				className={clsx(
					styles.handle.default,
					useBoxStyles({ is: 'button' }),
					useTextStyles({ colour: 'white' }),
					{
						[styles.handle.transition]: toggled,
					},
				)}
			/>
		</Box>
	);
};

export default Switch;
