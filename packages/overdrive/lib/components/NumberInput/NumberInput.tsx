import * as React from 'react';
import { useCallback, useEffect, useRef } from 'react';

import { Box } from '../Box';
import { withEnhancedInput } from '../private/InputBase';

const isEdge: boolean =
	typeof navigator !== 'undefined' && /edge/i.test(navigator.userAgent);

const type = isEdge ? 'text' : 'number';

interface Props
	extends Partial<Pick<HTMLInputElement, 'min' | 'max' | 'step'>> {
	preventMouseWheel?: boolean;
}

export const NumberInput = withEnhancedInput<Props>(
	({
		field: { ref, ...incomingFieldProps },
		eventHandlers,
		validation,
		isLoading,
		suffixed,
		prefixed,
		preventMouseWheel = false,
		size,
		...rest
	}) => {
		const inputRef = useRef<HTMLInputElement>(ref?.current);

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
				if (mouseWheelListener)
					// Standard
					inputRef.current.removeEventListener(
						'mousewheel',
						mouseWheelListener,
					);
				if (onWheelListener)
					// Chrome
					inputRef.current.removeEventListener(
						'onwheel',
						onWheelListener,
					);
				if (wheelListener)
					// Safari
					inputRef.current.removeEventListener(
						'wheel',
						wheelListener,
					);
			};
		}, [preventMouseWheel, inputRef.current]);

		return (
			<Box
				is="input"
				ref={inputRef}
				{...eventHandlers}
				{...incomingFieldProps}
				{...rest}
				autoComplete="off"
				type={type}
			/>
		);
	},
	{
		primitiveType: type,
	},
);

export default NumberInput;
