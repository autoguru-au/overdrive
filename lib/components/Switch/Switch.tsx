import cx from 'clsx';
import React, { FunctionComponent, memo, useCallback, useState } from 'react';
import styles from './style.scss';

export interface IProps {
	className?: string;
	disabled?: boolean;
	toggled?: boolean;

	onChange?(value: boolean): void;
}

const SwitchComponent: FunctionComponent<IProps> = ({
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
		<div
			className={cx(
				styles.root,
				{
					[styles.toggled]: toggled,
				},
				className
			)}
			aria-disabled={disabled}
			aria-label="toggle value"
			onClick={onToggle}>
			<span className={styles.handle} />
		</div>
	);
};

export const Switch = memo(SwitchComponent);
