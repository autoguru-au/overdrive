import { clamp } from '@autoguru/utilities';
import clsx from 'clsx';
import React, {
	FunctionComponent,
	memo,
	useCallback,
	useReducer,
	useRef,
} from 'react';
import { Icon, MinusIcon, PlusIcon } from '../Icon';
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

const reducer = (state: State, action: Action) => {
	switch (action.type) {
		case EActionType.INCREMENT:
			return {
				value: clamp(state.value + action.step, action.min, action.max),
			};
		case EActionType.DECREMENT:
			return {
				value: clamp(state.value - action.step, action.min, action.max),
			};
		case EActionType.VALUE:
			return { value: action.value };

		/* istanbul ignore next */
		default:
			// eslint-disable-next-line unicorn/error-message
			throw new Error();
	}
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
			aria-disabled={isDisabled}>
			<button
				className={styles.handle}
				aria-label="step down"
				disabled={isDisabled}
				onClick={onDecrement}>
				<Icon icon={MinusIcon} size={16} />
			</button>
			<span className={styles.label}>
				{Number.isFinite(state.value) ? format(state.value) : ''}
			</span>
			<button
				className={styles.handle}
				aria-label="step up"
				disabled={isDisabled}
				onClick={onIncrement}>
				<Icon icon={PlusIcon} size={16} />
			</button>
		</div>
	);
};

export const Stepper = memo(StepperComponent);
