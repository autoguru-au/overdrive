import { IconType, MinusIcon, PlusIcon } from '@autoguru/icons';
import { clamp } from '@autoguru/utilities';
import clsx from 'clsx';
import * as React from 'react';
import {
	FunctionComponent,
	KeyboardEvent,
	MouseEventHandler,
	useCallback,
} from 'react';

import { addWithSafeDecimal } from '../../utils/number';
import { Box } from '../Box/Box';
import { boxStyles } from '../Box/boxStyles';
import { Icon } from '../Icon/Icon';
import { Inline } from '../Inline/Inline';
import { Text } from '../Text/Text';
import { useTextStyles } from '../Text/useTextStyles';

import * as styles from './Stepper.css';

export interface StepperProps {
	className?: string;
	disabled?: boolean;
	value?: number;
	min?: number;
	max?: number;
	step?: number;
	isFullWidth?: boolean;

	format?(value: number): string;

	onChange?(value: number): void;
}

interface StepProps {
	min: number;
	max: number;
	step: number;
	value: number;
	direction: 'UP' | 'DOWN';
}

const takeStep = ({ min, max, value, step, direction }: StepProps): number => {
	const directionChange = (direction === 'DOWN' ? -1 : 1) * step;
	return clamp(addWithSafeDecimal(value, directionChange), min, max);
};

interface HandleProps {
	disabled: boolean;
	icon: IconType;
	label: string;
	onClick: MouseEventHandler<HTMLButtonElement>;
}

const Handle: FunctionComponent<HandleProps> = ({
	disabled,
	icon,
	label,
	onClick,
}) => (
	<Box
		as="button"
		className={[
			styles.handle.default,
			{ [styles.handle.disabled]: disabled },
			useTextStyles({ colour: 'white' }),
		]}
		backgroundColour={disabled ? 'neutral' : 'primary'}
		aria-label={label}
		padding="none"
		borderRadius="full"
		display="flex"
		alignItems="center"
		justifyContent="center"
		disabled={disabled}
		tabIndex={-1}
		onClick={onClick}
	>
		<Icon icon={icon} size="small" />
	</Box>
);

export const Stepper: FunctionComponent<StepperProps> = ({
	className = '',
	disabled: incomingDisabled = false,
	isFullWidth = false,
	step = 1,
	min = Number.MIN_SAFE_INTEGER,
	max = Number.MAX_SAFE_INTEGER,
	value: incomingValue = 0,
	format = (value) => value.toString(),
	onChange = () => void 0,
}) => {
	const value = clamp(incomingValue, min, max);
	const disabled: boolean =
		incomingDisabled || value === undefined || value === null;

	const onDecrement = useCallback(
		() =>
			onChange(
				takeStep({
					direction: 'DOWN',
					step,
					min,
					max,
					value,
				}),
			),
		[step, min, max, value, onChange],
	);
	const onIncrement = useCallback(
		() =>
			onChange(
				takeStep({
					direction: 'UP',
					step,
					min,
					max,
					value,
				}),
			),
		[step, min, max, value, onChange],
	);

	const keyDownHandler = useCallback(
		(event: KeyboardEvent<HTMLDivElement>) => {
			switch (event.key) {
				case 'ArrowLeft': {
					return onDecrement();
				}
				case 'ArrowRight': {
					return onIncrement();
				}
				case 'Home': {
					event.preventDefault();
					return onChange(min);
				}
				case 'End': {
					event.preventDefault();
					return onChange(max);
				}
				case 'Escape': {
					event.currentTarget.blur();
					break;
				}
			}
		},
		[min, max, onDecrement, onIncrement, onChange],
	);

	return (
		<Box
			className={clsx(
				className,
				styles.root,
				boxStyles({ as: 'button' }),
				disabled && styles.disabled,
			)}
			userSelect="none"
			aria-disabled={disabled}
			tabIndex={0}
			borderWidth="1"
			borderColour="gray"
			padding="3"
			borderRadius="1"
			width={isFullWidth ? 'full' : 'fit-content'}
			minWidth="fit-content"
			onKeyDown={keyDownHandler}
		>
			<Inline alignX="space-between" noWrap>
				<Box>
					<Handle
						icon={MinusIcon}
						label="step down"
						disabled={disabled}
						onClick={onDecrement}
					/>
				</Box>
				<Box>
					<Text
						as="span"
						colour="dark"
						display="block"
						className={clsx(styles.label)}
						size="4"
					>
						{Number.isFinite(value) ? format(value) : ''}
					</Text>
				</Box>
				<Box>
					<Handle
						icon={PlusIcon}
						label="step up"
						disabled={disabled}
						onClick={onIncrement}
					/>
				</Box>
			</Inline>
		</Box>
	);
};
