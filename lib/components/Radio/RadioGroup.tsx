import React, {
	createContext,
	forwardRef,
	useContext,
	useMemo,
	type ReactNode,
} from 'react';

import { Box } from '../Box/Box';

export interface RadioGroupProps {
	name: string;
	className?: string;
	value: string;
	children?: ReactNode;

	onChange?(value: string): void;
}

interface RadioGroupContext {
	inputName: string;
	value: string;

	radioSelected?(value: string): void;
}

export const RadioContext = createContext<RadioGroupContext | null>(null);

export const useRadioContext = (): RadioGroupContext =>
	useContext(RadioContext)!;

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
	({ name, value, className = '', onChange, children }, ref) => {
		const contextValue = useMemo(
			() => ({ value, inputName: name, radioSelected: onChange }),
			[value, name, onChange],
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

export default RadioGroup;
