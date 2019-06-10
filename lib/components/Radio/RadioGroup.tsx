import clsx from 'clsx';
import React, { createContext, FunctionComponent } from 'react';
import styles from './style.scss';

export interface Props {
	name: string;
	className?: string;
	value?: string;

	onChange?(value: string): void;
}

export interface RadioGroupContext {
	inputName: string;
	value: string;

	radioSelected(value: string): void;
}

export const RadioContext = createContext<RadioGroupContext>(null);

export const RadioGroup: FunctionComponent<Props> = ({
	name,
	value = null,
	className = '',
	onChange = () => void 0,
	children,
}) => (
	<RadioContext.Provider
		value={{ value, inputName: name, radioSelected: onChange }}>
		<div
			children={children}
			className={clsx([styles.radioGroup, className])}
		/>
	</RadioContext.Provider>
);
