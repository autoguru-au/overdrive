import { clamp } from '@autoguru/utilities';
import clsx from 'clsx';
import React, {
	FunctionComponent,
	KeyboardEvent,
	memo,
	useCallback,
	useReducer,
	useRef,
} from 'react';
import { MinusIcon, PlusIcon } from '@autoguru/icons';
import { Icon } from '../Icon';
import { Text } from '../Typography';
import styles from './style.scss';

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

interface Action {
	type: EActionType;
	value?: number;
	min: number;
	max: number;
	step: number;
}

interface State {
	value: number;
}

const getValueOrSafeInteger = (value: number) =>
	value < 0 ? Number.MIN_SAFE_INTEGER : Number.MAX_SAFE_INTEGER;

const reducer = (state: State, action: Action) => {
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

const StepperComponent: FunctionComponent<Props> = ({
	className = '',
	disabled = false,
	step = 1,
	min = Number.NEGATIVE_INFINITY,
	max = Number.POSITIVE_INFINITY,
	value,
	format = value => value.toString(),
	onChange,
}) => {
	const isDisabled: boolean = disabled || value === void 0 || value === null;

	const [state, dispatch] = useReducer(reducer, { value });

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

	if (prevValue.current !== value) {
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
		<div
			className={clsx([styles.root, className])}
			aria-disabled={isDisabled}
			tabIndex={0}
			onKeyDown={keyDownHandler}>
			<button
				className={styles.handle}
				aria-label="step down"
				disabled={isDisabled}
				tabIndex={-1}
				onClick={onDecrement}>
				<Icon icon={MinusIcon} size={16} />
			</button>
			<Text is="span" className={styles.label} size={4}>
				{Number.isFinite(state.value) ? format(state.value) : ''}
			</Text>
			<button
				className={styles.handle}
				aria-label="step up"
				disabled={isDisabled}
				tabIndex={-1}
				onClick={onIncrement}>
				<Icon icon={PlusIcon} size={16} />
			</button>
		</div>
	);
};

export const Stepper = memo(StepperComponent);
