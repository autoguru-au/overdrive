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

export interface IProps {
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

interface IAction {
	type: EActionType;
	value?: number;
	min: number;
	max: number;
	step: number;
}

interface IState {
	value: number;
}

const reducer = (state: IState, action: IAction) => {
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
			throw new Error();
	}
};

const StepperComponent: FunctionComponent<IProps> = ({
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
		[step, min, max]
	);
	const onIncrement = useCallback(
		() =>
			dispatch({
				type: EActionType.INCREMENT,
				step,
				min,
				max,
			}),
		[step, min, max]
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
				onClick={onDecrement}
				aria-label="step down"
				aria-disabled={isDisabled}
				disabled={isDisabled}>
				<Icon icon={MinusIcon} size={16} />
			</button>
			<span className={styles.label}>
				{Number.isFinite(state.value) ? format(state.value) : ''}
			</span>
			<button
				className={styles.handle}
				onClick={onIncrement}
				aria-label="step up"
				aria-disabled={isDisabled}
				disabled={isDisabled}>
				<Icon icon={PlusIcon} size={16} />
			</button>
		</div>
	);
};

export const Stepper = memo(StepperComponent);
