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

import { Box, useBoxStyles } from '../Box';
import { Column, Columns } from '../Columns';
import { Icon } from '../Icon';
import { Text, useTextStyles } from '../Text';

import * as styles from './Stepper.css';

export interface Props {
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
	return clamp(value + directionChange, min, max);
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
		is="button"
		className={[
			styles.handle.default,
			disabled && styles.handle.disabled,
			useTextStyles({ colour: 'white' }),
		]}
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

export const Stepper: FunctionComponent<Props> = ({
	className = '',
	disabled: incomingDisabled = false,
	isFullWidth = false,
	step = 1,
	min = Number.MIN_SAFE_INTEGER,
	max = Number.MAX_SAFE_INTEGER,
	value: incomingValue,
	format = (value) => value.toString(),
	onChange = ()=> void 0,
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
			// eslint-disable-next-line default-case
			switch (event.key) {
				case 'ArrowLeft':
					return onDecrement();
				case 'ArrowRight':
					return onIncrement();
				case 'Home':
					event.preventDefault();
					return onChange(min);
				case 'End':
					event.preventDefault();
					return onChange(max);
				case 'Escape':
					event.currentTarget.blur();
					break;
			}
		},
		[min, max, onDecrement, onIncrement, onChange],
	);

	return (
		<Box
			className={clsx(
				className,
				styles.root,
				useBoxStyles({ is: 'button' }),
				disabled && styles.disabled,
				{
					[styles.width.default]: !isFullWidth,
					[styles.width.full]: isFullWidth,
				},
			)}
			userSelect="none"
			aria-disabled={disabled}
			tabIndex={0}
			borderWidth="1"
			borderColour="gray"
			padding="3"
			borderRadius="1"
			boxShadow="2"
			onKeyDown={keyDownHandler}
		>
			<Columns noWrap width="full">
				<Column noShrink alignSelf="centre">
					<Handle
						icon={MinusIcon}
						label="step down"
						disabled={disabled}
						onClick={onDecrement}
					/>
				</Column>
				<Column noShrink grow width="auto" alignSelf="centre">
					<Text
						is="span"
						align="center"
						colour="dark"
						display="block"
						className={clsx(
							useBoxStyles({
								paddingX: '2',
								width: 'full',
								is: 'span',
							}),
							styles.label,
						)}
						size="4"
					>
						{Number.isFinite(value) ? format(value) : ''}
					</Text>
				</Column>
				<Column noShrink alignSelf="centre">
					<Handle
						icon={PlusIcon}
						label="step up"
						disabled={disabled}
						onClick={onIncrement}
					/>
				</Column>
			</Columns>
		</Box>
	);
};

export default Stepper;
