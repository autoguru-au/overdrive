import React, {
	createContext,
	forwardRef,
	useContext,
	useMemo,
	type ReactNode,
} from 'react';

import type { OdComponentProp, TestIdProp } from '../../types';
import { Box } from '../Box';

import type { RadioSize } from './Radio.css';

export interface RadioGroupProps extends OdComponentProp, TestIdProp {
	/** Name given to every native input in the group, which is what groups them */
	name: string;
	/** Flexible className applied to the group element */
	className?: string;
	/** Value of the selected radio. Controlled — pair it with `onChange` */
	value: string;
	/**
	 * Ring size for every radio in the group, per the DS-2026
	 * selection-control spec. An individual `Radio` can override it.
	 * @default 'medium'
	 */
	size?: RadioSize;
	/** The group's `Radio` children */
	children?: ReactNode;

	/** Fired when the selection changes, with the newly selected value */
	onChange?(value: string): void;
}

interface RadioGroupContext {
	inputName: string;
	value: string;
	/** Optional so a hand-rolled provider still resolves; `Radio` falls back to `medium` */
	size?: RadioSize;

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
			size = 'medium',
			odComponent = 'radio-group',
			testId,
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
					odComponent={odComponent}
					testId={testId}
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
