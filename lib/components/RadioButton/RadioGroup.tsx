import React, {
	Dispatch,
	FunctionComponent,
	SetStateAction,
	useState,
} from 'react';

import styles from './style.scss';

export interface IProps {
	className?: string;
	value?: string;
	name: string;
}

export interface IRadioGroupContext {
	inputName: string;
	value: string;
	setValue: Dispatch<SetStateAction<string>>;
}

export const RadioContext = React.createContext({});

export const RadioGroup: FunctionComponent<IProps> = ({
	children,
	name,
	value: incomingValue = '',
}) => {
	const [value, setValue] = useState<string>(incomingValue);
	const state: IRadioGroupContext = {
		inputName: name,
		value,
		setValue,
	};

	return (
		<RadioContext.Provider value={state}>
			<div className={styles.radioGroup} children={children} />
		</RadioContext.Provider>
	);
};
