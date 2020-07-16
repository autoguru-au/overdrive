import { MinusIcon, PlusIcon } from '@autoguru/icons';
import { clamp } from '@autoguru/utilities';
import * as React from 'react';
import {
	KeyboardEvent,
	memo,
	NamedExoticComponent,
	Reducer,
	useCallback,
	useReducer,
	useRef,
} from 'react';
import { useStyles } from 'react-treat';

import { Box } from '../Box';
import { Icon } from '../Icon';
import { Text } from '../Text';
import * as styleRefs from './Stepper.treat';

export interface Props {
	className?: string;
	disabled?: boolean;
	value?: number;
	min?: number;
	max?: number;
	step?: number;

	format?(value: number): string;

	onChange?(value: number): void;
}

enum EActionType {
	INCREMENT,
	DECREMENT,
	VALUE,
}

type Actions =
	| { type: EActionType.INCREMENT; min: number; max: number; step: number }
	| { type: EActionType.DECREMENT; min: number; max: number; step: number }
	| {
			type: EActionType.VALUE;
			min: number;
			max: number;
			step: number;
			value: number;
	  };

interface State {
	value: number;
}

const getValueOrSafeInteger = (value: number) =>
	value < 0 ? Number.MIN_SAFE_INTEGER : Number.MAX_SAFE_INTEGER;

const reducer: Reducer<State, Actions> = (state, action) => {
	if (action.type === EActionType.VALUE) {
		return {
			value: Number.isFinite(action.value)
				? action.value
				: getValueOrSafeInteger(action.value),
		};
	}

	const direction = EActionType.DECREMENT === action.type ? -1 : 1;

	return {
		value: clamp(
			state.value + direction * action.step,
			action.min,
			action.max,
		),
	};
};

export const Stepper: NamedExoticComponent<Props> = memo(
	({
		className = '',
		disabled = false,
		step = 1,
		min = Number.NEGATIVE_INFINITY,
		max = Number.POSITIVE_INFINITY,
		value,
		format = (value) => value.toString(),
		onChange,
	}) => {
		const styles = useStyles(styleRefs);

		const isDisabled: boolean =
			disabled || value === undefined || value === null;

		const [state, dispatch] = useReducer(reducer, { value: value ?? 0 });

		const prevValue = useRef(value);

		if (state.value !== value && typeof onChange === 'function') {
			onChange(state.value);
		}

		const onDecrement = useCallback(
			() =>
				dispatch({
					type: EActionType.DECREMENT,
					step,
					min,
					max,
				}),
			[step, min, max],
		);

		const onIncrement = useCallback(
			() =>
				dispatch({
					type: EActionType.INCREMENT,
					step,
					min,
					max,
				}),
			[step, min, max],
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
					case 'End':
						event.preventDefault();
						return dispatch({
							type: EActionType.VALUE,
							max,
							min,
							step,
							value: event.key === 'Home' ? min : max,
						});
					case 'Escape':
						event.currentTarget.blur();
						break;
				}
			},
			[onDecrement, onIncrement],
		);

		if (prevValue.current !== value && value !== undefined) {
			dispatch({
				type: EActionType.VALUE,
				value,
				step,
				min,
				max,
			});
			prevValue.current = value;
		}

		return (
			<Box
				className={[
					styles.root,
					styles.flexCenter,
					disabled && styles.disabled,
					className,
				]}
				userSelect="none"
				aria-disabled={isDisabled}
				tabIndex={0}
				borderWidth="1"
				borderColour="gray"
				padding="3"
				borderRadius="1"
				boxShadow="2"
				onKeyDown={keyDownHandler}>
				<Box
					is="button"
					className={[
						styles.handle.default,
						styles.flexCenter,
						disabled && styles.handle.disabled,
					]}
					aria-label="step down"
					padding="none"
					borderRadius="full"
					disabled={isDisabled}
					tabIndex={-1}
					onClick={onDecrement}>
					<Icon icon={MinusIcon} size="small" />
				</Box>
				<Text is="span" className={styles.label} size="4">
					{Number.isFinite(state.value) ? format(state.value) : ''}
				</Text>
				<Box
					is="button"
					className={[
						styles.handle.default,
						styles.flexCenter,
						disabled && styles.handle.disabled,
					]}
					padding="none"
					borderRadius="full"
					aria-label="step up"
					disabled={isDisabled}
					tabIndex={-1}
					onClick={onIncrement}>
					<Icon icon={PlusIcon} size="small" />
				</Box>
			</Box>
		);
	},
);
