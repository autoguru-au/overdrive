import clsx from 'clsx';
import * as React from 'react';
import { FunctionComponent, memo, useCallback, useState } from 'react';
import { useStyles } from 'react-treat';

import { Box, useBoxStyles } from '../Box';
import { useTextStyles } from '../Text';

import * as styleRefs from './Switch.treat';

export interface Props {
	className?: string;
	disabled?: boolean;
	toggled?: boolean;

	onChange?(value: boolean): void;
}

const SwitchComponent: FunctionComponent<Props> = ({
	className = '',
	disabled = false,
	toggled: incomingToggled = false,
	onChange,
}) => {
	const styles = useStyles(styleRefs);
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
			backgroundColour={toggled ? 'green600' : 'gray100'}
			aria-disabled={disabled}
			aria-label={`toggle ${toggled ? 'on' : 'off'}`}
			onClick={onToggle}>
			<Box
				borderWidth="1"
				borderColour="gray"
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

export const Switch = memo(SwitchComponent);
