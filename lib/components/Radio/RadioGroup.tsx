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
	 * Size for every radio in the group. `standard` is the pre-2026 24px ring
	 * and stays the default; `large` (20px) and `small` (16px) are the two sizes
	 * DS-2026 publishes. Set it here rather than per radio — a group of mixed
	 * sizes is not a design DS-2026 publishes — though an individual `Radio` can
	 * still override it.
	 * @default 'standard'
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
		{
			name,
			value,
			className = '',
			size = 'standard',
			onChange,
			children,
		},
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
