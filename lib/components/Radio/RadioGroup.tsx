import React, { FunctionComponent, useState } from 'react';

import { invariant } from '@autoguru/utilities';
import styles from './style.scss';

export interface IProps {
	className?: string;
	value?: string;
	name: string;

	onChange?(value: string): void;
}

export interface IRadioGroupContext {
	inputName: string;
	value: string;

	radioSelected(value: string): void;
}

export const RadioContext = React.createContext({});

export const RadioGroup: FunctionComponent<IProps> = ({
	children,
	name,
	value: incomingValue = '',
	onChange,
}) => {
	invariant(!name, "RadioGroup component must have a 'name' prop");

	const [value, setValue] = useState<string>(incomingValue);

	const dispatchChange = (value: string) => {
		if (typeof onChange === 'function') {
			onChange(value);
		}
	};

	const radioSelected = (value: string) => {
		setValue(value);
		dispatchChange(value);
	};

	const state: IRadioGroupContext = {
		inputName: name,
		value,
		radioSelected,
	};

	return (
		<RadioContext.Provider value={state}>
			<div className={styles.radioGroup} children={children} />
		</RadioContext.Provider>
	);
};
