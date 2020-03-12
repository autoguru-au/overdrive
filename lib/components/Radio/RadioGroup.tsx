import clsx from 'clsx';
import * as React from 'react';
import { createContext, FunctionComponent, useContext, useMemo } from 'react';
import { useStyles } from 'react-treat';

import * as styleRefs from './Radio.treat';

interface Props {
	name: string;
	className?: string;
	value: string;

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

export const RadioGroup: FunctionComponent<Props> = ({
	name,
	value,
	className = '',
	onChange,
	children,
}) => {
	const styles = useStyles(styleRefs);
	const contextValue = useMemo(
		() => ({ value, inputName: name, radioSelected: onChange }),
		[value, name, onChange],
	);

	return (
		<RadioContext.Provider value={contextValue}>
			<div className={clsx([styles.radioGroup, className])}>
				{children}
			</div>
		</RadioContext.Provider>
	);
};
