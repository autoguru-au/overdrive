import React, {
	createContext,
	forwardRef,
	useContext,
	useMemo,
	type ReactNode,
} from 'react';

import type { ControlSize } from '../../types';
import { Box } from '../Box';

export interface RadioGroupProps {
	name: string;
	className?: string;
	value: string;
	/**
	 * Ring size for every radio in the group — 24px, 20px or 16px. Set it here
	 * rather than per radio; DS-2026 publishes no mixed-size group.
	 * @default 'large'
	 */
	size?: ControlSize;
	children?: ReactNode;

	onChange?(value: string): void;
}

interface RadioGroupContext {
	inputName: string;
	value: string;
	size: ControlSize;

	radioSelected?(value: string): void;
}

export const RadioContext = createContext<RadioGroupContext | null>(null);

export const useRadioContext = (): RadioGroupContext =>
	useContext(RadioContext)!;

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
	(
		{ name, value, className = '', size = 'large', onChange, children },
		ref,
	) => {
		const contextValue = useMemo(
			() => ({ value, inputName: name, size, radioSelected: onChange }),
			[value, name, size, onChange],
		);

		return (
			<RadioContext.Provider value={contextValue}>
				<Box
					ref={ref}
					position="relative"
					display="flex"
					flexDirection="column"
					width="full"
					padding="none"
					className={className}
				>
					{children}
				</Box>
			</RadioContext.Provider>
		);
	},
);

RadioGroup.displayName = 'RadioGroup';
