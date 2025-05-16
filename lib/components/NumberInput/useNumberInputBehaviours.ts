import {
	type FocusEventHandler,
	type FormEventHandler,
	type RefObject,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react';

import { EnhanceInputPrimitiveProps } from '../private/InputBase/withEnhancedInput';

interface UseNumberInputBehaviourProps {
	value: EnhanceInputPrimitiveProps<HTMLInputElement>['value'];
	ref: RefObject<HTMLInputElement>;
	preventMouseWheel: boolean;
	onFocus?: FocusEventHandler<HTMLInputElement>;
	onBlur?: FocusEventHandler<HTMLInputElement>;
	onChange?: FormEventHandler<HTMLInputElement>;
}

interface Returns {
	value: EnhanceInputPrimitiveProps<HTMLInputElement>['value'];
	inputRef: RefObject<HTMLInputElement>;
	onFocus: FocusEventHandler<HTMLInputElement>;
	onBlur: FocusEventHandler<HTMLInputElement>;
	onChange: FormEventHandler<HTMLInputElement>;
}

export const useNumberInputBehaviours = ({
	ref,
	preventMouseWheel,
	onBlur: incomingOnBlur,
	onFocus: incomingOnFocus,
	onChange: incomingOnChange,
	value,
}: UseNumberInputBehaviourProps): Returns => {
	const inputRef = useRef<HTMLInputElement>(ref?.current);
	const [isFocused, setIsFocused] = useState(false);
	const [displayValue, setDisplayValue] = useState<string | undefined>(value);

	const onBlur = useCallback<FocusEventHandler<HTMLInputElement>>(
		(e) => {
			if (typeof incomingOnBlur === 'function') incomingOnBlur(e);
			setIsFocused(false);
			setDisplayValue(void 0);
		},
		[incomingOnBlur],
	);
	const onFocus = useCallback<FocusEventHandler<HTMLInputElement>>(
		(e) => {
			if (typeof incomingOnFocus === 'function') incomingOnFocus(e);
			if (typeof value === 'string' && displayValue !== value)
				setDisplayValue(value);
			setIsFocused(true);
		},
		[incomingOnFocus, value, displayValue],
	);
	const onChange = useCallback<FormEventHandler<HTMLInputElement>>(
		(e) => {
			if (isFocused) {
				setDisplayValue(e.currentTarget.value);
			}
			if (typeof incomingOnChange === 'function') incomingOnChange(e);
		},
		[incomingOnChange, isFocused, value, displayValue],
	);

	const preventWheel = useCallback<EventListener>((e) => {
		e.preventDefault();
		e.stopPropagation();
	}, []);

	useEffect(() => {
		let mouseWheelListener;
		let onWheelListener;
		let wheelListener;
		if (preventMouseWheel && inputRef?.current) {
			mouseWheelListener = inputRef.current.addEventListener(
				'mousewheel',
				preventWheel,
				{ passive: false },
			);
			onWheelListener = inputRef.current.addEventListener(
				'onwheel',
				preventWheel,
				{ passive: false },
			);
			wheelListener = inputRef.current.addEventListener(
				'wheel',
				preventWheel,
				{ passive: false },
			);
		}

		return () => {
			if (mouseWheelListener && inputRef.current)
				// Standard
				inputRef.current.removeEventListener(
					'mousewheel',
					mouseWheelListener,
				);
			if (onWheelListener && inputRef.current)
				// Chrome
				inputRef.current.removeEventListener(
					'onwheel',
					onWheelListener,
				);
			if (wheelListener && inputRef.current)
				// Safari
				inputRef.current.removeEventListener('wheel', wheelListener);
		};
	}, [preventMouseWheel, inputRef.current]);

	return {
		inputRef,
		onBlur,
		onFocus,
		onChange,
		value: typeof displayValue === 'string' ? displayValue : value,
	};
};
